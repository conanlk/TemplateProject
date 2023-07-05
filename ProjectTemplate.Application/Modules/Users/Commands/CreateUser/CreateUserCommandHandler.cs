using MediatR;
using ProjectTemplate.Application.Modules.Encrypt;
using ProjectTemplate.Entities.Models;
using ProjectTemplate.Entities.Repositories;

namespace ProjectTemplate.Application.Modules.Users.Commands.CreateUser;

public class CreateUserCommandHandler : IRequestHandler<CreateUserCommandRequest, Guid>
{
    private readonly IUserRepository _userRepository;
    private readonly IEncryptServices _encryptServices;

    public CreateUserCommandHandler(IUserRepository userRepository, IEncryptServices encryptServices)
    {
        _userRepository = userRepository;
        _encryptServices = encryptServices;
    }
    
    public async Task<Guid> Handle(CreateUserCommandRequest commandRequest, CancellationToken cancellationToken)
    {
        string passwordSalt = _encryptServices.GenerateSalt();
        string passwordHash = await _encryptServices.HashAsync(commandRequest.Password, passwordSalt);
        var user = new User()
        {
            UserId =Guid.NewGuid(),
            PasswordHash = passwordHash,
            PasswordSalt = passwordSalt,
            UserName = commandRequest.UserName,
            FirstName = commandRequest.FirstName,
            LastName = commandRequest.LastName,
            Email = commandRequest.Email,
            Phone = commandRequest.Phone,
        };
        user.UserRoles = commandRequest.Roles.Select(p => new UserRole()
        {
            Id = Guid.NewGuid(),
            UserId = user.UserId,
            RoleId = p
        }).ToList();
        
        await _userRepository.Add(user);
            
        return user.UserId;
    }
}