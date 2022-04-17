using Adra.Api.Controllers;
using Adra.Api.DTOs;
using Adra.Api.Mappings;
using Adra.Domain.Contracts;
using Adra.Domain.Entities;
using Adra.Infrastructure.Contracts;
using Adra.Infrastructure.Models;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System.Collections.Generic;
using System.IO;
using Xunit;

namespace Adra.Api.Tests.Controller
{
    public class ReportControllerTest
    {
        private readonly Mock<IFileService> _fileService;
        private readonly Mock<IReportRepository> _repository;
        private readonly Mock<IUnitOfWork> _unitOfWork;
        private readonly IMapper _mapper;
        private readonly ReportController _controller;

        public ReportControllerTest()
        {
            _fileService = new Mock<IFileService>();
            _repository = new Mock<IReportRepository>();
            _unitOfWork = new Mock<IUnitOfWork>();
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<DefaultProfile>();
            });
            _mapper = config.CreateMapper();
            _controller = new ReportController(_fileService.Object, _mapper, _repository.Object, _unitOfWork.Object);
        }

        [Fact]
        public async void AddReport_NoRecordsCsv_400StatusCodeReturned()
        {
            var balanceInfos = new List<BalanceInfo>();
            var reportUploadDto = _reportUploadDto;
            _fileService.Setup(svc => svc.ReadCsv(It.IsAny<Stream>())).Returns(balanceInfos);

            var result = await _controller.UploadReport(reportUploadDto);

            Assert.True(result is BadRequestObjectResult);
        }

        [Fact]
        public async void AddReport_ValidFields_200StatusCodeReturned()
        {
            var reportUploadDto = _reportUploadDto;
            var balanceInfos = _balanceInfos;
            _fileService.Setup(svc => svc.ReadCsv(It.IsAny<Stream>())).Returns(balanceInfos);

            var result = await _controller.UploadReport(reportUploadDto) as ObjectResult;
            var actual = result.Value as ReportDto;

            Assert.Equal(actual.Year, reportUploadDto.Year);
            Assert.Equal(actual.Month, reportUploadDto.Month);
            Assert.Equal(actual.Balances.Count, balanceInfos.Count);
            Assert.Equal(actual.Balances[0].Amount, balanceInfos[0].Amount);
            Assert.Equal(actual.Balances[0].AccountName, balanceInfos[0].AccountName);
        }

        [Fact]
        public void GetReportByYearMonth_InvalidYear_404StatusCodeReturned()
        {
            var report = _report;
            _repository.Setup(r => r.GetByYearMonth(2022, 2)).Returns(report);

            var result = _controller.GetAccountBalanceByYearMonth(2021, 2);

            Assert.True(result is NotFoundObjectResult);
        }

        [Fact]
        public void GetReportByYearMonth_ValidYear_200StatusCodeReturned()
        {
            var report = _report;
            _repository.Setup(r => r.GetByYearMonth(It.IsAny<int>(), It.IsAny<int>())).Returns(report);

            var result = _controller.GetAccountBalanceByYearMonth(2021, 2) as ObjectResult;
            var actual = result.Value as ReportDto;

            Assert.Equal(report.Year, actual.Year);
            Assert.Equal(report.MonthId, actual.Month);
        }


        private static readonly ReportUploadDto _reportUploadDto = new()
        {
            Year = 2022,
            Month = 2,
            File = new FormFile(new MemoryStream(), 0, 0, "Data", "dummy.csv")
        };
        private static readonly ReportDto _reportDto = new()
        {
            Year = 2022,
            Month = 2,
            Balances = new List<BalanceDto>()
            {
                new BalanceDto { AccountName = "Canteen", Amount = 3000 }
            }
        };
        private static readonly Report _report = new()
        {
            Year = 2022,
            MonthId = 2,
            Balances = new List<Balance>()
            {
                new Balance { AccountName = "Canteen", Amount = 3000 }
            }
        };
        private static readonly IList<BalanceInfo> _balanceInfos = new List<BalanceInfo>()
        {
            new BalanceInfo { AccountName = "Canteen", Amount = 3000 }
        };

    }
}
