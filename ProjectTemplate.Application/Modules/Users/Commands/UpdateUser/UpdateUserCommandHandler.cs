using MediatR;
using ProjectTemplate.Entities.Models;
using ProjectTemplate.Entities.Repositories;

namespace ProjectTemplate.Application.Modules.Users.Commands.UpdateUser;

public class UpdateUserCommandHandler: IRequestHandler<UpdateUserCommandRequest, User>
{
    private readonly IUserRepository _userRepository;

    public UpdateUserCommandHandler(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }
    
    public async Task<User> Handle(UpdateUserCommandRequest commandRequest, CancellationToken cancellationToken)
    {
        var user = await _userRepository.GetById(commandRequest.UserId);
        user.FirstName = commandRequest.FirstName;
        user.LastName = commandRequest.LastName;
        user.Email = commandRequest.Email;
        user.UserRoles.Clear();
        foreach (var roleId in commandRequest.Roles)
        {
            user.UserRoles.Add(new UserRole()
            {
                Id = Guid.NewGuid(),
                UserId = user.UserId,
                RoleId = roleId
            });
        }
        
        await _userRepository.Update(user);
        return user;
    }
}