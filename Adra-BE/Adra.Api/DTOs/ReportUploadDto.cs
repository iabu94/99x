using Microsoft.AspNetCore.Http;
using System.Collections.Generic;

namespace Adra.Api.DTOs
{
    public class ReportUploadDto
    {
        public int Year { get; set; }
        public int Month { get; set; }
        public IFormFile File { get; set; }
    }
}
