using MediatR;
using ProjectTemplate.Entities.Models;
using ProjectTemplate.Entities.Repositories;

namespace ProjectTemplate.Application.Modules.Users.Commands.DeleteUser;

public class DeleteUserCommandHandler: IRequestHandler<DeleteUserCommandRequest, bool>
{
    private readonly IUserRepositoryCommands _userRepositoryCommands;

    public DeleteUserCommandHandler(IUserRepositoryCommands userRepositoryCommands)
    {
        _userRepositoryCommands = userRepositoryCommands;
    }
    
    public async Task<bool> Handle(DeleteUserCommandRequest commandRequest, CancellationToken cancellationToken)
    {
        return await _userRepositoryCommands.Delete(commandRequest.User);
    }
}