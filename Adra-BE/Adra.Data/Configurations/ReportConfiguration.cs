using Adra.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Adra.Data.Configurations
{
    internal class ReportConfiguration : IEntityTypeConfiguration<Report>
    {
        public void Configure(EntityTypeBuilder<Report> builder)
        {
            builder.ToTable("Reports");
            builder.HasKey(r => r.Id);
            builder.Property(r => r.Id).ValueGeneratedOnAdd();
            builder.Property(r => r.Year).IsRequired();
            builder.Property(r => r.Active).HasDefaultValue(true);
            builder.HasMany(r => r.Balances).WithOne(b => b.Report);
            builder.HasOne(r => r.Month).WithMany(m => m.Reports).HasForeignKey(r => r.MonthId);
        }
    }
}
