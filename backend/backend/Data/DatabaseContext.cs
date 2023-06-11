using backend.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace backend.Data
{
    public class DatabaseContext : Microsoft.EntityFrameworkCore.DbContext
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
        }
    }
}
