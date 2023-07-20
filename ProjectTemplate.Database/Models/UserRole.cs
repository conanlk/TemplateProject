using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectTemplate.Database.Models;

[Table("UserRole")]
public class UserRole
{
    [Key] 
    public Guid Id { get; set; }

    [Required] public virtual User User { get; set; } = new User();
    [Required]
    public virtual Role Role { get; set; } = new Role();
}