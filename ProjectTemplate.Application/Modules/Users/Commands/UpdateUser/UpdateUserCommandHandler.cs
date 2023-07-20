using MediatR;
using ProjectTemplate.Entities.Models;
using ProjectTemplate.Entities.Repositories;

namespace ProjectTemplate.Application.Modules.Users.Commands.UpdateUser;

public class UpdateUserCommandHandler: IRequestHandler<UpdateUserCommandRequest, User>
{
    private readonly IUserRepositoryCommands _userRepositoryCommands;
    private readonly IUserRepositoryQueries _userRepositoryQueries;

    public UpdateUserCommandHandler(IUserRepositoryCommands userRepositoryCommands, IUserRepositoryQueries userRepositoryQueries)
    {
        _userRepositoryCommands = userRepositoryCommands;
        _userRepositoryQueries = userRepositoryQueries;
    }
    
    public async Task<User> Handle(UpdateUserCommandRequest commandRequest, CancellationToken cancellationToken)
    {
        var user = await _userRepositoryQueries.GetById(commandRequest.UserId);
        user.FirstName = commandRequest.FirstName;
        user.LastName = commandRequest.LastName;
        user.Email = commandRequest.Email;
        user.Phone = commandRequest.Phone;
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
        
        await _userRepositoryCommands.Update(user);
        return user;
    }
}