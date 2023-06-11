using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Student
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? Neptun { get; set; }
        public int? Sumcredit { get; set; }
        public string? Image { get; set; }
        public IdentityUser? CreatorName { get; set; }
        public virtual ICollection<Subject>? Subjects { get; set; }


    }
}
