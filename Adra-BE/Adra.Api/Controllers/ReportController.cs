using Adra.Api.DTOs;
using Adra.Domain.Contracts;
using Adra.Domain.Entities;
using Adra.Infrastructure.Contracts;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Adra.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReportController : ControllerBase
    {
        private readonly IFileService _fileService;
        private readonly IMapper _mapper;
        private readonly IReportRepository _reportRepository;
        private readonly IUnitOfWork _unitOfWork;

        public ReportController(IFileService fileService, IMapper mapper, IReportRepository reportRepository, IUnitOfWork unitOfWork)
        {
            _fileService = fileService;
            _mapper = mapper;
            _reportRepository = reportRepository;
            _unitOfWork = unitOfWork;
        }

        [HttpPost("Upload"), DisableRequestSizeLimit]
        public async Task<IActionResult> UploadReport([FromForm] ReportUploadDto reportUploadDto)
        {
            var records = _mapper.Map<IList<Balance>>(_fileService.ReadCsv(reportUploadDto.File.OpenReadStream()));
            if (records == null || !records.Any())
            {
                return BadRequest("The uploaded csv file does not have any records or invalid format");
            }
            var report = reportUploadDto.IsUpdate ?
                _reportRepository.GetByYearMonth(reportUploadDto.Year, reportUploadDto.Month) :
                _mapper.Map<Report>(reportUploadDto);
            if (reportUploadDto.IsUpdate) report.Balances.Clear();
            report.Balances = records;

            if (reportUploadDto.IsUpdate)
            {
                _reportRepository.Update(report);
            }
            else
            {
                await _reportRepository.AddAsync(report);
            }
            await _unitOfWork.SaveChangesAsync();

            return Ok(_mapper.Map<ReportDto>(report));
        }

        [HttpGet("{year}/{month}")]
        public IActionResult GetAccountBalanceByYearMonth(int year, int month)
        {
            var res = _mapper.Map<ReportDto>(_reportRepository.GetByYearMonth(year, month));
            if (res == null)
            {
                return NotFound("The balance records belongs to the specific year and month is not found.");
            }
            return Ok(res);
        }

        [HttpGet("Exists/{year}/{month}")]
        public IActionResult CheckReportExists(int year, int month)
        {
            return Ok(_reportRepository.CheckReportExists(year, month));
        }

        [HttpPost("Graph")]
        public IActionResult GetGraphData([FromBody] GraphRequestDto grDto)
        {
            var reports = _mapper.Map<IList<ReportDto>>(
                _reportRepository.GetByYearMonthRange(grDto.YearStart, grDto.MonthStart, grDto.YearEnd, grDto.MonthEnd)
                );
            return Ok(reports);
        }
    }
}
