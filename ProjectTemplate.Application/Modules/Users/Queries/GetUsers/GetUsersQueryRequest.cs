using MediatR;
using ProjectTemplate.Entities.Models;

namespace ProjectTemplate.Application.Modules.Users.Queries.GetUsers;

public class GetUsersQueryRequest : IRequest<IEnumerable<User>>
{
    public string Keywords { get; set; } = string.Empty;
}