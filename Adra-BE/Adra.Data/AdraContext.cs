using Adra.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace Adra.Data
{
    public class AdraContext : DbContext
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
    }
}
