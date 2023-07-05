namespace ProjectTemplate.Entities.Models;

public class Role
{
    public Guid RoleId { get; set; }
    public string RoleName { get; set; } = string.Empty;
    public string RoleDescription { get; set; } = string.Empty;
}