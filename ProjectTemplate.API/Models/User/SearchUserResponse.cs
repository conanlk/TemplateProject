using ProjectTemplate.Entities.Models;

namespace ProjectTemplate.API.Models.User;

public class SearchUserResponse
{
    public Guid UserId { get; set; }
    public string Username { get; set; } = string.Empty;
    public string Firstname { get; set; } = string.Empty;
    public string Lastname { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public virtual ICollection<Role> Roles { get; set; }
}