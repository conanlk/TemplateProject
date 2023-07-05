using ProjectTemplate.Entities.Models;

namespace ProjectTemplate.API.Models.User;

public class UserResponse
{
    public Guid UserId { get; set; }
    public string UserName { get; set; } = string.Empty;
    public string FirstName { get; set; }= string.Empty;
    public string LastName { get; set; }= string.Empty;
    public string Email { get; set; }= string.Empty;
    public string Phone { get; set; }= string.Empty;
    public virtual ICollection<Role> Roles { get; set; }
}