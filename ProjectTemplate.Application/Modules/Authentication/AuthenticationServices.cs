
using ProjectTemplate.Application.Modules.Encrypt;
using ProjectTemplate.Application.Modules.Tokens;
using ProjectTemplate.Entities.Repositories;
using ProjectTemplate.Entities.Models;

namespace ProjectTemplate.Application.Modules.Authentication;

public class AuthenticationServices : IAuthenticationServices
{
    private readonly IUserRepository _userServices;
    private readonly IEncryptServices _encryptServices;
    private readonly ITokenServices _tokenServices;

    public AuthenticationServices(IUserRepository userServices, IEncryptServices encryptServices, ITokenServices tokenServices)
    {
        _userServices = userServices;
        _encryptServices = encryptServices;
        _tokenServices = tokenServices;
    }
    public async Task<User?> FindUser(string username)
    {
        return await _userServices.GetUserByUsernameOrEmail(username);
    }

    public async Task<bool> IsPasswordValid(User user, string password)
    {
        return  await _encryptServices.HashAsync(password, user.PasswordSalt) == user.PasswordHash;
    }

    public string GenerateBearerToken(string secretKey, string issuer, string audience, int expirationMinutes, User user)
    {
        return _tokenServices.GenerateBearerToken(secretKey, issuer, audience, expirationMinutes, user);
    }
}