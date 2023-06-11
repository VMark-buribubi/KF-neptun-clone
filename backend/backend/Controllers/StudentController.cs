using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        DatabaseContext dbContext;

        public StudentController(DatabaseContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IEnumerable<Student> GetStudents()
        {
            return dbContext.Students;
        }

        [HttpGet("{id}")]
        public Student? GetStudent(Guid id)
        {
            return dbContext.Students.FirstOrDefault(x => x.Id == id);
        }

        [HttpPost]
        public void AddStudent([FromBody] Student s)
        {
            dbContext.Add(s);
        }

        [HttpPut]
        public void EditStudent([FromBody] Student s)
        {
            var old = dbContext.Students.FirstOrDefault(x => x.Id == s.Id);
            old.Name = s.Name;
            old.Neptun = s.Neptun;
            old.Image = s.Image;
        }

        [HttpDelete("{id}")]
        public void DeteleStudent(Guid id)
        {
            var studentToDelete = dbContext.Students.FirstOrDefault(x => x.Id == id);
            dbContext.Students.Remove(studentToDelete);
        }
    }
}
