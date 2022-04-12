using Adra.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Adra.Data.Configurations
{
    internal class MonthConfiguration : IEntityTypeConfiguration<Month>
    {
        public void Configure(EntityTypeBuilder<Month> builder)
        {
            builder.ToTable("Months");
            builder.HasKey(m => m.Id);
            builder.Property(m => m.Name).IsRequired();
            builder.HasMany(m => m.Reports).WithOne(r => r.Month);
        }
    }
}
