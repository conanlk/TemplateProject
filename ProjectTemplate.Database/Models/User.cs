using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.CompilerServices;

namespace ProjectTemplate.Database.Models;

[Table("User")]
public class User
{
    [Key]
    public Guid UserId { get; set; }
    [Required]
    [StringLength(100)]
    public string UserName { get; set; }
    [Required]
    [StringLength(255)]
    public string PasswordHash { get; set; }
    [Required]
    [StringLength(255)]
    public string PasswordSalt { get; set; }
    [StringLength(255)]
    public string FirstName { get; set; }
    [StringLength(255)] 
    public string LastName { get; set; }
    [StringLength(255)] 
    public string Email { get; set; }
}