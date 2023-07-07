using MediatR;
using Microsoft.Extensions.Options;
using ProjectTemplate.Core.Configurations;
using ProjectTemplate.Core.Types;
using ProjectTemplate.Entities.Models;
using ProjectTemplate.Entities.Repositories;

namespace ProjectTemplate.Application.Modules.Users.Queries.GetUsers;

public class GetUsersQueryHandler : IRequestHandler<GetUsersQueryRequest, (Pagination, IEnumerable<User>)>
{
    private readonly IUserRepository _userRepository;
    private readonly PaginationConfiguration _paginationConfiguration;
    public GetUsersQueryHandler(IUserRepository userRepository,IOptions<PaginationConfiguration> paginationConfiguration)
    {
        _userRepository = userRepository;
        _paginationConfiguration = paginationConfiguration.Value;
    }

    public Task<(Pagination, IEnumerable<User>)> Handle(GetUsersQueryRequest queryRequest, CancellationToken cancellationToken)
    {
        var users = _userRepository.GetAll();
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
            PageSize = queryRequest.PageSize <= 0 ? _paginationConfiguration.DefaultPageSize  : queryRequest.PageSize,
            CurrentPage = queryRequest.CurrentPage <= 0 ? 1 : queryRequest.CurrentPage,
            TotalCount = users.Count()
        };
        pagination.TotalPage = users.Count() / pagination.PageSize + 1;
            
        return Task.FromResult((pagination, users.Skip((pagination.CurrentPage - 1) * pagination.PageSize).Take(pagination.PageSize).AsEnumerable()));
    }
}