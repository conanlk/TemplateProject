using MediatR;
using ProjectTemplate.Entities.Models;

namespace ProjectTemplate.Application.Modules.Users.Commands.CreateUser;

public class CreateUserCommandRequest: IRequest<Guid>
{
    public string UserName { get; set; } = string.Empty;
    public string Password { get; set; }= string.Empty;
    public string FirstName { get; set; }= string.Empty;
    public string LastName { get; set; }= string.Empty;
    public string Email { get; set; } = string.Empty;
    public List<Guid> Roles { get; set; }
}
    
    
    
    
    
    