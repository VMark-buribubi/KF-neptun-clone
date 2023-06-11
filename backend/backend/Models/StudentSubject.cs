namespace backend.Models
{
    public class StudentSubject
    {
        public Guid StudentId { get; set; }
        public Guid SubjectId { get; set; }
        public Student Student { get; } = null!;
        public Subject Subject { get; } = null!;
    }
}
