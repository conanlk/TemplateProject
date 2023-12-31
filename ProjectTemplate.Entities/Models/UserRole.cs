namespace ProjectTemplate.Entities.Models;

public class UserRole
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public virtual User User { get; set; } = default!;
    public Guid RoleId { get; set; }
    public virtual Role Role { get; set; } = default!;
}