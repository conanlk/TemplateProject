using System.ComponentModel.DataAnnotations;

namespace ProjectTemplate.API.Models.User;

public class AddUserRequest
{
    [Required]
    public string UserName { get; set; } = string.Empty;
    [Required]
    public string Password { get; set; }= string.Empty;
    [Required]
    public string FirstName { get; set; }= string.Empty;
    [Required]
    public string LastName { get; set; }= string.Empty;
    [Required]
    public string Email { get; set; }= string.Empty; 
    public string Phone { get; set; }= string.Empty;

    [Required] public List<Guid> Roles { get; set; } = default!;
}