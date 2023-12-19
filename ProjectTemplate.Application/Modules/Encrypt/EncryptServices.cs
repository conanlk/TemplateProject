
using System.Security.Cryptography;
using System.Text;

namespace ProjectTemplate.Application.Modules.Encrypt;

public class EncryptServices : IEncryptServices
{
    public string GenerateSalt()
    {
        var saltBytes = new byte[10];
        using (var provider = RandomNumberGenerator.Create())
        {
            provider.GetBytes(saltBytes);
        }

        return Convert.ToBase64String(saltBytes).Substring(0, 12);
    }

    public async Task<string> HashAsync(string password, string salt)
    {
        using var sha = SHA256.Create();
        var bytes = await sha.ComputeHashAsync(new MemoryStream(Encoding.UTF8.GetBytes(password + salt)));
        var builder = new StringBuilder();
        foreach (var b in bytes)
        {
            builder.Append(b.ToString("x2"));
        }
        return builder.ToString();
    }
}