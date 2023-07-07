using MediatR;
using ProjectTemplate.Core.Types;
using ProjectTemplate.Entities.Models;

namespace ProjectTemplate.Application.Modules.Users.Queries.GetUsers;

public class GetUsersQueryRequest : IRequest<(Pagination, IEnumerable<User>)>
{
    public string Keywords { get; init; } = string.Empty;
    public int CurrentPage { get; set; }
    public int PageSize { get; set; }
}