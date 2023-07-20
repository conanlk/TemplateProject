using MediatR;
using ProjectTemplate.Entities.Models;
using ProjectTemplate.Entities.Repositories;

namespace ProjectTemplate.Application.Modules.Users.Queries.GetUser;

public class GetUserQueryHandler : IRequestHandler<GetUserQueryRequest, User?>
{
    private readonly IUserRepositoryQueries _userRepositoryQueries;

    public GetUserQueryHandler(IUserRepositoryQueries userRepositoryQueries)
    {
        _userRepositoryQueries = userRepositoryQueries;
    }
    
    public async Task<User?> Handle(GetUserQueryRequest queryRequest, CancellationToken cancellationToken)
    {
        return await _userRepositoryQueries.GetById(queryRequest.UserId);
    }
}