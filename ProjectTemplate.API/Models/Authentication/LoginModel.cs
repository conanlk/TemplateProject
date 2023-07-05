using System.ComponentModel.DataAnnotations;

namespace ProjectTemplate.API.Models.Authentication;

public class LoginModel
{
    [Required] public string UserName { get; set; } = string.Empty;
    [Required] public string Password { get; set; } = string.Empty;
}