namespace backend.Models
{
    public class SubjectTeacher
    {
        public Guid SubjectId { get; set; }
        public Guid TeacherId { get; set; }
        public Subject Subject { get; } = null!;
        public Teacher Teacher { get; } = null!;
    }
}
