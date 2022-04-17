using Adra.Domain.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace Adra.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReferenceDataController : ControllerBase
    {
        private readonly IReportRepository _reportRepository;
        public ReferenceDataController(IReportRepository reportRepository)
        {
            _reportRepository = reportRepository;
        }

        [HttpGet("YearMonths")]
        public IActionResult GetYearMonths()
        {
            var yearMonths = _reportRepository.GetYearMonths();
            return Ok(yearMonths);
        }
    }
}
