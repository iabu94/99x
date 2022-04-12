using Adra.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Adra.Data.Configurations
{
    internal class BalanceConfiguration : IEntityTypeConfiguration<Balance>
    {
        public void Configure(EntityTypeBuilder<Balance> builder)
        {
            builder.ToTable("Balances");
            builder.HasKey(b => b.Id);
            builder.Property(b => b.Id).ValueGeneratedOnAdd();
            builder.Property(b => b.Active).HasDefaultValue(true);
            builder.HasOne(b => b.Report).WithMany(r => r.Balances).HasForeignKey(b => b.ReportId);
        }
    }
}
