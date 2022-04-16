using Adra.Api.DTOs;
using Adra.Domain.Contracts;
using Adra.Domain.Entities;
using Adra.Infrastructure.Contracts;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Adra.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
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
            var report = _mapper.Map<Report>(reportUploadDto);
            report.Balances = records;
            await _reportRepository.AddAsync(report);
            await _unitOfWork.SaveChangesAsync();
            return Ok(_mapper.Map<ReportDto>(report));
        }

        [HttpPost("Update"), DisableRequestSizeLimit]
        public async Task<IActionResult> UpdateReport([FromForm] ReportUploadDto reportUploadDto)
        {
            var records = _mapper.Map<IList<Balance>>(_fileService.ReadCsv(reportUploadDto.File.OpenReadStream()));
            var report = _reportRepository.GetByYearMonth(reportUploadDto.Year, reportUploadDto.Month);
            report.Balances.Clear();
            report.Balances = records;
            _reportRepository.Update(report);
            await _unitOfWork.SaveChangesAsync();
            return Ok(_mapper.Map<ReportDto>(report));
        }

        [HttpGet("{year}/{month}")]
        public IActionResult GetAccountBalanceByYearMonth(int year, int month)
        {
            var res = _mapper.Map<ReportDto>(_reportRepository.GetByYearMonth(year, month));
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
