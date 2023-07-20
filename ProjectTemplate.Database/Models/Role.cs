using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectTemplate.Database.Models;

[Table("Role")]
public class Role
{
    [Key]
    public Guid RoleId { get; set; }

    [StringLength(255)] public string RoleName { get; set; } = string.Empty;
    [MaxLength]
    public string? RoleDescription { get; set; }
}