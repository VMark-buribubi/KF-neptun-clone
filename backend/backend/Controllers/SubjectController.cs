using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubjectController : ControllerBase
    {
        DatabaseContext dbContext;

        public SubjectController(DatabaseContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IEnumerable<Subject> GetSubjects()
        {
            return dbContext.Subjects;
        }

        [HttpGet("{id}")]
        public Subject? GetSubject(Guid id)
        {
            return dbContext.Subjects.FirstOrDefault(x => x.Id == id);
        }

        [HttpPost]
        public void AddSubject([FromBody] Subject s)
        {
            dbContext.Add(s);
        }

        [HttpPut]
        public void EditSubject([FromBody] Subject s)
        {
            var old = dbContext.Subjects.FirstOrDefault(x => x.Id == s.Id);
            old.Name = s.Name;
            old.Neptun = s.Neptun;
            old.Image = s.Image;
            old.Exam = s.Exam;
            old.Credit = s.Credit;
        }

        [HttpDelete("{id}")]
        public void DeteleSubject(Guid id)
        {
            var subjectToDelete = dbContext.Subjects.FirstOrDefault(x => x.Id == id);
            dbContext.Subjects.Remove(subjectToDelete);
        }
    }
}
