using Adra.Api.DTOs;
using Adra.Domain.Contracts;
using Adra.Domain.Entities;
using Adra.Infrastructure.Contracts;
using AutoMapper;
using CsvHelper;
using CsvHelper.Configuration;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
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
            return Ok();
        }
    }
}
