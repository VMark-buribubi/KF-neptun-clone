using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class testdata : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Students",
                columns: new[] { "Id", "CreatorNameId", "Image", "Name", "Neptun", "Sumcredit" },
                values: new object[,]
                {
                    { new Guid("4b284a61-241c-4289-839e-e25b71c648d3"), null, "https://xsgames.co/randomusers/assets/avatars/pixel/1.jpg", "Jane Smith", "DEF456", null },
                    { new Guid("f5735314-0483-4df6-94b1-92e2f50243ea"), null, "https://xsgames.co/randomusers/assets/avatars/pixel/0.jpg", "John Doe", "ABC123", null }
                });

            migrationBuilder.InsertData(
                table: "Subjects",
                columns: new[] { "Id", "CreatorNameId", "Credit", "Exam", "Image", "Name", "Neptun" },
                values: new object[,]
                {
                    { new Guid("684d2894-2c8d-4e66-991e-8ee06d1f27d9"), null, 4, true, "https://fastly.picsum.photos/id/229/200/300.jpg?hmac=WD1_MXzGKrVpaJj2Utxv7FoijRJ6h4S4zrBj7wmsx1U", "Math", "MATH101" },
                    { new Guid("a184ca39-6944-4af4-83c8-b9ed92b33542"), null, 3, false, "https://fastly.picsum.photos/id/604/200/300.jpg?hmac=6ceMKS8u7easDoKzWSaIiSTpRlTPn1OUOdfSJWou3uQ", "Science", "SCI202" }
                });

            migrationBuilder.InsertData(
                table: "Teachers",
                columns: new[] { "Id", "CreatorNameId", "Image", "Name", "Neptun" },
                values: new object[,]
                {
                    { new Guid("1e5b8381-1297-4a8f-aa84-1da5ad17c7c8"), null, "https://xsgames.co/randomusers/assets/avatars/pixel/3.jpg", "Dr. Watson", "DRWAT02" },
                    { new Guid("aaab34c9-7609-4568-b34b-f23c605baf3b"), null, "https://xsgames.co/randomusers/assets/avatars/pixel/2.jpg", "Professor X", "PROF01" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "Id",
                keyValue: new Guid("4b284a61-241c-4289-839e-e25b71c648d3"));

            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "Id",
                keyValue: new Guid("f5735314-0483-4df6-94b1-92e2f50243ea"));

            migrationBuilder.DeleteData(
                table: "Subjects",
                keyColumn: "Id",
                keyValue: new Guid("684d2894-2c8d-4e66-991e-8ee06d1f27d9"));

            migrationBuilder.DeleteData(
                table: "Subjects",
                keyColumn: "Id",
                keyValue: new Guid("a184ca39-6944-4af4-83c8-b9ed92b33542"));

            migrationBuilder.DeleteData(
                table: "Teachers",
                keyColumn: "Id",
                keyValue: new Guid("1e5b8381-1297-4a8f-aa84-1da5ad17c7c8"));

            migrationBuilder.DeleteData(
                table: "Teachers",
                keyColumn: "Id",
                keyValue: new Guid("aaab34c9-7609-4568-b34b-f23c605baf3b"));
        }
    }
}
