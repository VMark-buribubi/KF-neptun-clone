using backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;

namespace backend.Data
{
    public class DatabaseContext : IdentityDbContext<User>
    {
        public DbSet<Student> Students { get; set; }
        public DbSet<Subject> Subjects { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        public DatabaseContext(DbContextOptions<DatabaseContext> opt) : base(opt)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Subject>()
                .HasMany(s => s.Students)
                .WithMany(p => p.Subjects);

            modelBuilder.Entity<Teacher>()
                .HasMany(s => s.Subjects)
                .WithMany(p => p.Teachers);

            modelBuilder.Entity<IdentityRole>().HasData(
              new { Id = "1", Name = "Admin", NormalizedName = "ADMIN" },
              new { Id = "2", Name = "Customer", NormalizedName = "CUSTOMER" }
            );

            PasswordHasher<User> ph = new PasswordHasher<User>();
            User kovi = new User
            {
                Email = "kovi91@gmail.com",
                EmailConfirmed = true,
                UserName = "kovi91@gmail.com",
                FirstName = "Kovács",
                LastName = "András",
                NormalizedUserName = "KOVI91@GMAIL.COM"
            };
            kovi.PasswordHash = ph.HashPassword(kovi, "almafa123");
            modelBuilder.Entity<User>().HasData(kovi);

            // Add test data for Students
            modelBuilder.Entity<Student>().HasData(
                new Student { Id = Guid.NewGuid(), Name = "John Doe", Neptun = "ABC123", Image = "https://xsgames.co/randomusers/assets/avatars/pixel/0.jpg" },
                new Student { Id = Guid.NewGuid(), Name = "Jane Smith", Neptun = "DEF456", Image = "https://xsgames.co/randomusers/assets/avatars/pixel/1.jpg" }
            );

            // Add test data for Subjects
            modelBuilder.Entity<Subject>().HasData(
                new Subject { Id = Guid.NewGuid(), Name = "Math", Neptun = "MATH101", Credit = 4, Exam = true, Image = "https://fastly.picsum.photos/id/229/200/300.jpg?hmac=WD1_MXzGKrVpaJj2Utxv7FoijRJ6h4S4zrBj7wmsx1U" },
                new Subject { Id = Guid.NewGuid(), Name = "Science", Neptun = "SCI202", Credit = 3, Exam = false, Image = "https://fastly.picsum.photos/id/604/200/300.jpg?hmac=6ceMKS8u7easDoKzWSaIiSTpRlTPn1OUOdfSJWou3uQ" }
            );

            // Add test data for Teachers
            modelBuilder.Entity<Teacher>().HasData(
                new Teacher { Id = Guid.NewGuid(), Name = "Professor X", Neptun = "PROF01", Image = "https://xsgames.co/randomusers/assets/avatars/pixel/2.jpg" },
                new Teacher { Id = Guid.NewGuid(), Name = "Dr. Watson", Neptun = "DRWAT02", Image = "https://xsgames.co/randomusers/assets/avatars/pixel/3.jpg" }
            );

            base.OnModelCreating(modelBuilder);
        }
    }
}
