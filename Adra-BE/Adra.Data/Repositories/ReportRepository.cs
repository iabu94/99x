using Adra.Domain.Contracts;
using Adra.Domain.Entities;
using Adra.Domain.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Adra.Data.Repositories
{
    public class ReportRepository : DefaultRepository<Report>, IReportRepository
    {
        public ReportRepository(AdraContext context) : base(context)
        {
        }

        public Report GetByYearMonth(int year, int month)
        {
            return Context.Reports.FirstOrDefault(r => r.Year == year && r.MonthId == month);
        }

        public IList<YearMonth> GetYearMonths()
        {
            return Context.Reports
                .Select(r => new YearMonth { Year = r.Year, Month = r.MonthId })
                .Distinct()
                .ToList();
        }

        public bool CheckReportExists(int year, int month)
        {
            return Context.Reports.Where(r => r.Year == year && r.MonthId == month).Any();
        }

        public IList<Report> GetByYearMonthRange(int startYear, int startMonth, int endYear, int endMonth)
        {
            return Context.Reports
                .Where(r => (r.Year * 100) + r.MonthId >= (startYear * 100) + startMonth && 
                    (r.Year * 100) + r.MonthId <= (endYear * 100) + endMonth)
                .OrderBy(r => r.Year)
                .ThenBy(r => r.MonthId)
                .ToList();
        }
    }
}
