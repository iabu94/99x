using Adra.Domain.Entities;
using Adra.Domain.Models;
using System.Collections.Generic;

namespace Adra.Domain.Contracts
{
    public interface IReportRepository : IRepository<Report>
    {
        IList<YearMonth> GetYearMonths();
        Report GetByYearMonth(int year, int month);
        bool CheckReportExists(int year, int month);
        IList<Report> GetByYearMonthRange(int startYear, int startMonth, int endYear, int endMonth);
    }
}
