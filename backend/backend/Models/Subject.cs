using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace backend.Models
{
    public class Subject
    {
        [Key]
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? Neptun { get; set; }
        public int? Credit { get; set; }
        public bool? Exam { get; set; }
        public string? Image { get; set; }
        public IdentityUser? CreatorName { get; set; }
        public virtual ICollection<Student>? Students { get; set; }
        public virtual ICollection<Teacher>? Teachers { get; set; }
    }
}
