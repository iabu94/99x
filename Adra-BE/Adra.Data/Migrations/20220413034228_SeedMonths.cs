using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Adra.Data.Migrations
{
    public partial class SeedMonths : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Months",
                columns: new[] { "Id", "Active", "CreatedDate", "Name" },
                values: new object[,]
                {
                    { 1, true, new DateTime(2022, 4, 13, 9, 12, 28, 357, DateTimeKind.Local).AddTicks(950), "January" },
                    { 2, true, new DateTime(2022, 4, 13, 9, 12, 28, 358, DateTimeKind.Local).AddTicks(8733), "February" },
                    { 3, true, new DateTime(2022, 4, 13, 9, 12, 28, 358, DateTimeKind.Local).AddTicks(8752), "March" },
                    { 4, true, new DateTime(2022, 4, 13, 9, 12, 28, 358, DateTimeKind.Local).AddTicks(8755), "April" },
                    { 5, true, new DateTime(2022, 4, 13, 9, 12, 28, 358, DateTimeKind.Local).AddTicks(8756), "May" },
                    { 6, true, new DateTime(2022, 4, 13, 9, 12, 28, 358, DateTimeKind.Local).AddTicks(8758), "June" },
                    { 7, true, new DateTime(2022, 4, 13, 9, 12, 28, 358, DateTimeKind.Local).AddTicks(8759), "July" },
                    { 8, true, new DateTime(2022, 4, 13, 9, 12, 28, 358, DateTimeKind.Local).AddTicks(8761), "August" },
                    { 9, true, new DateTime(2022, 4, 13, 9, 12, 28, 358, DateTimeKind.Local).AddTicks(8763), "September" },
                    { 10, true, new DateTime(2022, 4, 13, 9, 12, 28, 358, DateTimeKind.Local).AddTicks(8765), "October" },
                    { 11, true, new DateTime(2022, 4, 13, 9, 12, 28, 358, DateTimeKind.Local).AddTicks(8766), "November" },
                    { 12, true, new DateTime(2022, 4, 13, 9, 12, 28, 358, DateTimeKind.Local).AddTicks(8768), "December" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Months",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Months",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Months",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Months",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Months",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Months",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Months",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Months",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Months",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Months",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Months",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Months",
                keyColumn: "Id",
                keyValue: 12);
        }
    }
}
