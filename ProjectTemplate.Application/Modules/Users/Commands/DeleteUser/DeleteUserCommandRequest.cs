using MediatR;
using ProjectTemplate.Entities.Models;

namespace ProjectTemplate.Application.Modules.Users.Commands.DeleteUser;

public class DeleteUserCommandRequest: IRequest<bool>
{
    public User User { get; set; } = default!;
}