using ProjectTemplate.Entities.Models;

namespace ProjectTemplate.Application.Modules.Authentication;

public interface IAuthenticationServices
{
    Task<User?> FindUser(string username);
    
    Task<bool> IsPasswordValid(User user, string password);
    
    string GenerateBearerToken(string secretKey, string issuer, string audience, int expirationMinutes, User user);
}