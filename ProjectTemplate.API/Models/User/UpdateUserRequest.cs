using System.ComponentModel.DataAnnotations;

namespace ProjectTemplate.API.Models.User;

public class UpdateUserRequest
{
    [Required]
    public string FirstName { get; set; }= string.Empty;
    [Required]
    public string LastName { get; set; }= string.Empty;
    [Required]
    public string Email { get; set; }= string.Empty;
    public string Phone { get; set; }= string.Empty;
    [Required] public List<Guid> Roles { get; set; } = default!;
}