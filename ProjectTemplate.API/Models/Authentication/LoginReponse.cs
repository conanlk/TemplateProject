namespace ProjectTemplate.API.Models.Authentication;

public class LoginResponse
{
    public Guid UserId { get; set; }
    public string UserName { get; set; } = string.Empty;
    public string FirstName { get; set; }= string.Empty;
    public string LastName { get; set; }= string.Empty;
    public string Email { get; set; }= string.Empty;
    public string Token { get; set; } = string.Empty;
}