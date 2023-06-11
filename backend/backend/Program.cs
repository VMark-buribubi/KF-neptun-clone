using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Identity;
using backend.Filters;
using Microsoft.EntityFrameworkCore;
using static backend.Filters.ApiExceptionFIlter;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers(opt =>
{
    opt.Filters.Add<ApiExceptionFilter>();
});
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<DatabaseContext>(opt =>
{
    opt.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=SchoolDb;Trusted_Connection=True;MultipleActiveResultSets=true");
});

builder.Services.AddIdentity<AppUser, IdentityRole>(option =>
{
    option.Password.RequiredLength = 8;
    option.Password.RequireNonAlphanumeric = false;
})
  .AddEntityFrameworkStores<DatabaseContext>()
  .AddDefaultTokenProviders();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseRouting();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
