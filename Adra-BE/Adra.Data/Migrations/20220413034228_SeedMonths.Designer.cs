﻿// <auto-generated />
using System;
using Adra.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Adra.Data.Migrations
{
    [DbContext(typeof(AdraContext))]
    [Migration("20220413034228_SeedMonths")]
    partial class SeedMonths
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.16")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Adra.Domain.Entities.Balance", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AccountName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Active")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bit")
                        .HasDefaultValue(true);

                    b.Property<double>("Amount")
                        .HasColumnType("float");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("ReportId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("ReportId");

                    b.ToTable("Balances");
                });

            modelBuilder.Entity("Adra.Domain.Entities.Month", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active")
                        .HasColumnType("bit");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Months");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Active = true,
                            CreatedDate = new DateTime(2022, 4, 13, 9, 12, 28, 357, DateTimeKind.Local).AddTicks(950),
                            Name = "January"
                        },
                        new
                        {
                            Id = 2,
                            Active = true,
                            CreatedDate = new DateTime(2022, 4, 13, 9, 12, 28, 358, DateTimeKind.Local).AddTicks(8733),
                            Name = "February"
                        },
                        new
                        {
                            Id = 3,
                            Active = true,
                            CreatedDate = new DateTime(2022, 4, 13, 9, 12, 28, 358, DateTimeKind.Local).AddTicks(8752),
                            Name = "March"
                        },
                        new
                        {
                            Id = 4,
                            Active = true,
                            CreatedDate = new DateTime(2022, 4, 13, 9, 12, 28, 358, DateTimeKind.Local).AddTicks(8755),
                            Name = "April"
                        },
                        new
                        {
                            Id = 5,
                            Active = true,
                            CreatedDate = new DateTime(2022, 4, 13, 9, 12, 28, 358, DateTimeKind.Local).AddTicks(8756),
                            Name = "May"
                        },
                        new
                        {
                            Id = 6,
                            Active = true,
                            CreatedDate = new DateTime(2022, 4, 13, 9, 12, 28, 358, DateTimeKind.Local).AddTicks(8758),
                            Name = "June"
                        },
                        new
                        {
                            Id = 7,
                            Active = true,
                            CreatedDate = new DateTime(2022, 4, 13, 9, 12, 28, 358, DateTimeKind.Local).AddTicks(8759),
                            Name = "July"
                        },
                        new
                        {
                            Id = 8,
                            Active = true,
                            CreatedDate = new DateTime(2022, 4, 13, 9, 12, 28, 358, DateTimeKind.Local).AddTicks(8761),
                            Name = "August"
                        },
                        new
                        {
                            Id = 9,
                            Active = true,
                            CreatedDate = new DateTime(2022, 4, 13, 9, 12, 28, 358, DateTimeKind.Local).AddTicks(8763),
                            Name = "September"
                        },
                        new
                        {
                            Id = 10,
                            Active = true,
                            CreatedDate = new DateTime(2022, 4, 13, 9, 12, 28, 358, DateTimeKind.Local).AddTicks(8765),
                            Name = "October"
                        },
                        new
                        {
                            Id = 11,
                            Active = true,
                            CreatedDate = new DateTime(2022, 4, 13, 9, 12, 28, 358, DateTimeKind.Local).AddTicks(8766),
                            Name = "November"
                        },
                        new
                        {
                            Id = 12,
                            Active = true,
                            CreatedDate = new DateTime(2022, 4, 13, 9, 12, 28, 358, DateTimeKind.Local).AddTicks(8768),
                            Name = "December"
                        });
                });

            modelBuilder.Entity("Adra.Domain.Entities.Report", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Active")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bit")
                        .HasDefaultValue(true);

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("MonthId")
                        .HasColumnType("int");

                    b.Property<int>("Year")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("MonthId");

                    b.ToTable("Reports");
                });

            modelBuilder.Entity("Adra.Domain.Entities.Balance", b =>
                {
                    b.HasOne("Adra.Domain.Entities.Report", "Report")
                        .WithMany("Balances")
                        .HasForeignKey("ReportId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Report");
                });

            modelBuilder.Entity("Adra.Domain.Entities.Report", b =>
                {
                    b.HasOne("Adra.Domain.Entities.Month", "Month")
                        .WithMany("Reports")
                        .HasForeignKey("MonthId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Month");
                });

            modelBuilder.Entity("Adra.Domain.Entities.Month", b =>
                {
                    b.Navigation("Reports");
                });

            modelBuilder.Entity("Adra.Domain.Entities.Report", b =>
                {
                    b.Navigation("Balances");
                });
#pragma warning restore 612, 618
        }
    }
}
