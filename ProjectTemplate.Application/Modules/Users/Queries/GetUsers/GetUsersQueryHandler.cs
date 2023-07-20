using MediatR;
using ProjectTemplate.Core.Types;
using ProjectTemplate.Entities.Models;
using ProjectTemplate.Entities.Repositories;

namespace ProjectTemplate.Application.Modules.Users.Queries.GetUsers;

public class GetUsersQueryHandler : IRequestHandler<GetUsersQueryRequest, (Pagination, IEnumerable<User>)>
{
    private readonly IUserRepositoryQueries _userRepositoryQueries;
    public GetUsersQueryHandler(IUserRepositoryQueries userRepositoryQueries)
    {
        _userRepositoryQueries = userRepositoryQueries;
    }

    public Task<(Pagination, IEnumerable<User>)> Handle(GetUsersQueryRequest queryRequest, CancellationToken cancellationToken)
    {
        var users = _userRepositoryQueries.GetAll();
        if (!string.IsNullOrWhiteSpace(queryRequest.Keywords))
        {
            users = users.Where(p => p.UserName.Contains(queryRequest.Keywords) 
                             || p.Email.Contains(queryRequest.Keywords)
                             || p.FirstName.Contains(queryRequest.Keywords)
                             || p.LastName.Contains(queryRequest.Keywords)
            );
        }

        var pagination = new Pagination
        {
            PageSize = queryRequest.PageSize ,
            CurrentPage = queryRequest.CurrentPage,
            TotalCount = users.Count()
        };
        pagination.TotalPage = users.Count() / pagination.PageSize + 1;
            
        return Task.FromResult((pagination, users.Skip((pagination.CurrentPage - 1) * pagination.PageSize).Take(pagination.PageSize).AsEnumerable()));
    }
}