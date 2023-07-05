using MediatR;
using ProjectTemplate.Entities.Models;

namespace ProjectTemplate.Application.Modules.Users.Queries.GetUser;

public class GetUserQueryRequest : IRequest<User?>
{
    public Guid UserId { get; set; }
}