using MediatR;
using ProjectTemplate.Entities.Models;

namespace ProjectTemplate.Application.Modules.Users.Commands.UpdateUser;

public class UpdateUserCommandRequest: IRequest<User>
{
    public Guid UserId { get; set; }
    public string FirstName { get; set; }= string.Empty;
    public string LastName { get; set; }= string.Empty;
    public string Email { get; set; }= string.Empty;
    public string Phone { get; set; }= string.Empty;
    public List<Guid> Roles { get; set; }
}