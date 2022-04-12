using System.Collections.Generic;

namespace Adra.Domain.Entities
{
    public class Report: BaseEntity
    {
        public int Year { get; set; }
        public int MonthId { get; set; }

        public virtual Month Month { get; set; }
        public virtual IList<Balance> Balances { get; set; }
    }
}
