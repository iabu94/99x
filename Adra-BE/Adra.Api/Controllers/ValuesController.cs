using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Adra.Api.Controllers
{
    /// <summary>
    /// This is a sample controller to test the hosted api is working
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class ValuesController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(Summaries);
        }
    }
}
