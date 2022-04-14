using Adra.Domain.Contracts;
using Adra.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using System.Threading.Tasks;

namespace Adra.Data
{
    public class AdraContext : DbContext, IUnitOfWork
    {
        public AdraContext(DbContextOptions<AdraContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfigurationsFromAssembly(Assembly.GetAssembly(this.GetType()));
        }

        public DbSet<Report> Reports { get; set; }
        public DbSet<Month> Months { get; set; }
        public DbSet<Balance> Balances { get; set; }

        public async Task SaveChangesAsync()
        {
            await base.SaveChangesAsync();
        }
    }
}
