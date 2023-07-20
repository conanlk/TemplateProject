using MediatR;
using ProjectTemplate.Entities.Models;

namespace ProjectTemplate.Application.Modules.Users.Queries.GetUserByUserNameOrEmail;

public class GetUserByUserNameOrEmailQueryRequest: IRequest<User?>
{
    public string UserName { get; set; } = string.Empty;
}