namespace ProjectTemplate.Application.Modules.Encrypt;

public interface IEncryptServices
{
    Task<string> HashAsync(string password, string salt);

    string GenerateSalt();
}