using Adra.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;

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
            builder.HasData(
                new Month { Id = 1, Name = "January", Active = true, CreatedDate = DateTime.Now },
                new Month { Id = 2, Name = "February", Active = true, CreatedDate = DateTime.Now },
                new Month { Id = 3, Name = "March", Active = true, CreatedDate = DateTime.Now },
                new Month { Id = 4, Name = "April", Active = true, CreatedDate = DateTime.Now },
                new Month { Id = 5, Name = "May", Active = true, CreatedDate = DateTime.Now },
                new Month { Id = 6, Name = "June", Active = true, CreatedDate = DateTime.Now },
                new Month { Id = 7, Name = "July", Active = true, CreatedDate = DateTime.Now },
                new Month { Id = 8, Name = "August", Active = true, CreatedDate = DateTime.Now },
                new Month { Id = 9, Name = "September", Active = true, CreatedDate = DateTime.Now },
                new Month { Id = 10, Name = "October", Active = true, CreatedDate = DateTime.Now },
                new Month { Id = 11, Name = "November", Active = true, CreatedDate = DateTime.Now },
                new Month { Id = 12, Name = "December", Active = true, CreatedDate = DateTime.Now }
            );
        }
    }
}
