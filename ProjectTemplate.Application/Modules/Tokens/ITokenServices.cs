
using ProjectTemplate.Entities.Models;

namespace ProjectTemplate.Application.Modules.Tokens;

public interface ITokenServices
{
    string GenerateBearerToken(string secretKey, string issuer, string audience, int expirationMinutes, User user);
}