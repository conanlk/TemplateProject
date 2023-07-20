using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.CompilerServices;

namespace ProjectTemplate.Database.Models;

[Table("User")]
public class User
{
    [Key]
    public Guid UserId { get; set; }

    [Required] [StringLength(100)] public string UserName { get; set; } = string.Empty;
    [Required] [StringLength(255)] public string PasswordHash { get; set; } = string.Empty;
    [Required] [StringLength(255)] public string PasswordSalt { get; set; } = string.Empty;
    [StringLength(255)] public string FirstName { get; set; } = string.Empty;
    [StringLength(255)] public string LastName { get; set; } = string.Empty;
    [StringLength(255)] public string Email { get; set; } = string.Empty;
    [StringLength(255)] public string Phone { get; set; } = string.Empty;
}