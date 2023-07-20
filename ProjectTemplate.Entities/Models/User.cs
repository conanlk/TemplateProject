namespace ProjectTemplate.Entities.Models;

public class User
{
    public Guid UserId { get; set; }
    public string UserName { get; set; } = string.Empty;
    public string PasswordHash { get; set; }= string.Empty;
    public string PasswordSalt { get; set; }= string.Empty;
    public string FirstName { get; set; }= string.Empty;
    public string LastName { get; set; }= string.Empty;
    public string Email { get; set; }= string.Empty;
    public string Phone { get; set; }= string.Empty;
    public virtual ICollection<UserRole> UserRoles { get; set; } = default!;
}