using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class qwasd : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "10d69049-026e-44b6-a308-b01179741f30");

            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "Id",
                keyValue: new Guid("30cc63b4-2a22-404f-934b-ad98f4fd23fd"));

            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "Id",
                keyValue: new Guid("63518c50-5924-4fb7-931d-87f80bbbddb9"));

            migrationBuilder.DeleteData(
                table: "Subjects",
                keyColumn: "Id",
                keyValue: new Guid("6522d0cc-87c7-4621-bb2c-d459441dd460"));

            migrationBuilder.DeleteData(
                table: "Subjects",
                keyColumn: "Id",
                keyValue: new Guid("f17a0fe9-c62e-4cf3-afe5-7d7982368613"));

            migrationBuilder.DeleteData(
                table: "Teachers",
                keyColumn: "Id",
                keyValue: new Guid("57b2c57d-64f7-4df6-b292-043e22488dc0"));

            migrationBuilder.DeleteData(
                table: "Teachers",
                keyColumn: "Id",
                keyValue: new Guid("d6ae1c5b-8dad-4106-92a3-d7a2ee06b558"));

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Discriminator", "Email", "EmailConfirmed", "FirstName", "LastName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "c6618c64-32d0-43d7-b076-29c5996f1966", 0, "ad0a4739-3008-49dc-8494-c5c667bf4ec8", "AppUser", "kovi91@gmail.com", true, "Kovács", "András", false, null, null, "KOVI91@GMAIL.COM", "AQAAAAEAACcQAAAAELuYTlCxLE2rURVECYMwdlsISEbHvlKFDvXydGIQJY2GPTJJ05GIer+dUoQ8MaNW3w==", null, false, "5c621f59-6259-46f9-a2cb-c0fb90c11eff", false, "kovi91@gmail.com" });

            migrationBuilder.InsertData(
                table: "Students",
                columns: new[] { "Id", "CreatorNameId", "Image", "Name", "Neptun", "Sumcredit" },
                values: new object[,]
                {
                    { new Guid("1b1f587a-d397-4787-b7b3-5886b0d9bebf"), null, "https://xsgames.co/randomusers/assets/avatars/pixel/0.jpg", "John Doe", "ABC123", null },
                    { new Guid("9868cbd2-f683-4398-9efa-384160c343af"), null, "https://xsgames.co/randomusers/assets/avatars/pixel/1.jpg", "Jane Smith", "DEF456", null }
                });

            migrationBuilder.InsertData(
                table: "Subjects",
                columns: new[] { "Id", "CreatorNameId", "Credit", "Exam", "Image", "Name", "Neptun" },
                values: new object[,]
                {
                    { new Guid("d9cbf7a2-77c6-40fe-a110-d8fc7c4a44b4"), null, 4, true, "https://fastly.picsum.photos/id/229/200/300.jpg?hmac=WD1_MXzGKrVpaJj2Utxv7FoijRJ6h4S4zrBj7wmsx1U", "Math", "MATH101" },
                    { new Guid("f7ccc0b2-c5fa-4812-a22a-25683bb477e2"), null, 3, false, "https://fastly.picsum.photos/id/604/200/300.jpg?hmac=6ceMKS8u7easDoKzWSaIiSTpRlTPn1OUOdfSJWou3uQ", "Science", "SCI202" }
                });

            migrationBuilder.InsertData(
                table: "Teachers",
                columns: new[] { "Id", "CreatorNameId", "Image", "Name", "Neptun" },
                values: new object[,]
                {
                    { new Guid("a98f57b4-bf68-4301-831c-d892d6faebb1"), null, "https://xsgames.co/randomusers/assets/avatars/pixel/2.jpg", "Professor X", "PROF01" },
                    { new Guid("fab3e282-6a8c-4a39-bb3f-f94e97987806"), null, "https://xsgames.co/randomusers/assets/avatars/pixel/3.jpg", "Dr. Watson", "DRWAT02" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "c6618c64-32d0-43d7-b076-29c5996f1966");

            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "Id",
                keyValue: new Guid("1b1f587a-d397-4787-b7b3-5886b0d9bebf"));

            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "Id",
                keyValue: new Guid("9868cbd2-f683-4398-9efa-384160c343af"));

            migrationBuilder.DeleteData(
                table: "Subjects",
                keyColumn: "Id",
                keyValue: new Guid("d9cbf7a2-77c6-40fe-a110-d8fc7c4a44b4"));

            migrationBuilder.DeleteData(
                table: "Subjects",
                keyColumn: "Id",
                keyValue: new Guid("f7ccc0b2-c5fa-4812-a22a-25683bb477e2"));

            migrationBuilder.DeleteData(
                table: "Teachers",
                keyColumn: "Id",
                keyValue: new Guid("a98f57b4-bf68-4301-831c-d892d6faebb1"));

            migrationBuilder.DeleteData(
                table: "Teachers",
                keyColumn: "Id",
                keyValue: new Guid("fab3e282-6a8c-4a39-bb3f-f94e97987806"));

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Discriminator", "Email", "EmailConfirmed", "FirstName", "LastName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "10d69049-026e-44b6-a308-b01179741f30", 0, "62a23cd7-3caa-41b9-bd33-46b95f67273d", "AppUser", "kovi91@gmail.com", true, "Kovács", "András", false, null, null, "KOVI91@GMAIL.COM", "AQAAAAEAACcQAAAAEHZejqTtwdcQMRGY/hyN2N7L6eB5nTK/v+5JbJVK8e+2GiEu+4B8mmh0zmEa/hYJ+A==", null, false, "94274715-3166-4be5-9fb7-4f4836ff9d00", false, "kovi91@gmail.com" });

            migrationBuilder.InsertData(
                table: "Students",
                columns: new[] { "Id", "CreatorNameId", "Image", "Name", "Neptun", "Sumcredit" },
                values: new object[,]
                {
                    { new Guid("30cc63b4-2a22-404f-934b-ad98f4fd23fd"), null, "https://xsgames.co/randomusers/assets/avatars/pixel/0.jpg", "John Doe", "ABC123", null },
                    { new Guid("63518c50-5924-4fb7-931d-87f80bbbddb9"), null, "https://xsgames.co/randomusers/assets/avatars/pixel/1.jpg", "Jane Smith", "DEF456", null }
                });

            migrationBuilder.InsertData(
                table: "Subjects",
                columns: new[] { "Id", "CreatorNameId", "Credit", "Exam", "Image", "Name", "Neptun" },
                values: new object[,]
                {
                    { new Guid("6522d0cc-87c7-4621-bb2c-d459441dd460"), null, 3, false, "https://fastly.picsum.photos/id/604/200/300.jpg?hmac=6ceMKS8u7easDoKzWSaIiSTpRlTPn1OUOdfSJWou3uQ", "Science", "SCI202" },
                    { new Guid("f17a0fe9-c62e-4cf3-afe5-7d7982368613"), null, 4, true, "https://fastly.picsum.photos/id/229/200/300.jpg?hmac=WD1_MXzGKrVpaJj2Utxv7FoijRJ6h4S4zrBj7wmsx1U", "Math", "MATH101" }
                });

            migrationBuilder.InsertData(
                table: "Teachers",
                columns: new[] { "Id", "CreatorNameId", "Image", "Name", "Neptun" },
                values: new object[,]
                {
                    { new Guid("57b2c57d-64f7-4df6-b292-043e22488dc0"), null, "https://xsgames.co/randomusers/assets/avatars/pixel/2.jpg", "Professor X", "PROF01" },
                    { new Guid("d6ae1c5b-8dad-4106-92a3-d7a2ee06b558"), null, "https://xsgames.co/randomusers/assets/avatars/pixel/3.jpg", "Dr. Watson", "DRWAT02" }
                });
        }
    }
}
