using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Teacher
    {
        [Key]
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? Neptun { get; set; }
        public string? Image { get; set; }
        public IdentityUser? CreatorName { get; set; }
        public virtual ICollection<Subject>? Subjects { get; set; }
    }
}
