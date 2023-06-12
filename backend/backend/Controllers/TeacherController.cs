using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TeacherController : ControllerBase
    {
        DatabaseContext dbContext;

        public TeacherController(DatabaseContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IEnumerable<Teacher> GetTeachers()
        {
            return dbContext.Teachers;
        }

        [HttpGet("{id}")]
        public Teacher? GetTeacher(Guid id)
        {
            return dbContext.Teachers.FirstOrDefault(x => x.Id == id);
        }

        [HttpPost]
        public IActionResult AddTeacher([FromBody] Teacher s)
        {
            if (s.Id == null)
            {
                s.Id = Guid.NewGuid();
            }
            dbContext.Add(s);
            dbContext.SaveChanges();
            return Ok(s);
        }

        [HttpPut]
        public void EditTeacher([FromBody] Teacher s)
        {
            var old = dbContext.Teachers.FirstOrDefault(x => x.Id == s.Id);
            old.Name = s.Name;
            old.Neptun = s.Neptun;
            old.Image = s.Image;
            dbContext.SaveChanges();
        }

        [HttpDelete("{id}")]
        public void DeteleTeacher(Guid id)
        {
            var teacherToDelete = dbContext.Teachers.FirstOrDefault(x => x.Id == id);
            dbContext.Teachers.Remove(teacherToDelete);
            dbContext.SaveChanges();
        }
    }
}
