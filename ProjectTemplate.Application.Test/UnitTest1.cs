using ProjectTemplate.Application.Modules.Encrypt;

namespace ProjectTemplate.Application.Test;

public class Tests
{
    [SetUp]
    public void Setup()
    {
    }

    [Test]
    public void CreateSalt()
    {
        var encryptServices = new EncryptServices();
        var salt = encryptServices.GenerateSalt();
        
        if(string.IsNullOrWhiteSpace(salt)) Assert.Fail("Failed create salt!");
        Assert.Pass("Success create salt!");
    }
    
    [Test]
    public async Task CreateHash()
    {
        var encryptServices = new EncryptServices();
        const string password = "password";
        var salt = encryptServices.GenerateSalt();
        var encryptPassword = await encryptServices.HashAsync(password, salt);
        
        if(string.IsNullOrWhiteSpace(encryptPassword)) Assert.Fail("Failed hash password!");
        Assert.Pass("Success hash password!");
    }
}