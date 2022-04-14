using Adra.Domain.Contracts;
using Adra.Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Adra.Data.Repositories
{
    public class ReportRepository : DefaultRepository<Report>, IReportRepository
    {
        public ReportRepository(AdraContext context) : base(context)
        {
        }
    }
}
