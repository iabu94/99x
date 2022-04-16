using System.Collections.Generic;

namespace Adra.Api.DTOs
{
    public class ReportDto
    {
        public int Year { get; set; }
        public int Month { get; set; }
        public IList<BalanceDto> Balances { get; set; }

    }
}
