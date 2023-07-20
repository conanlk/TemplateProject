using MediatR;
using ProjectTemplate.Entities.Models;
using ProjectTemplate.Entities.Repositories;

namespace ProjectTemplate.Application.Modules.Users.Queries.GetUserByUserNameOrEmail;

public class GetUserByUserNameOrEmailHandler : IRequestHandler<GetUserByUserNameOrEmailQueryRequest, User?>
{
    private readonly IUserRepositoryQueries _userRepositoryQueries;

    public GetUserByUserNameOrEmailHandler(IUserRepositoryQueries userRepositoryQueries)
    {
        _userRepositoryQueries = userRepositoryQueries;
    }
    
    public async Task<User?> Handle(GetUserByUserNameOrEmailQueryRequest queryRequest, CancellationToken cancellationToken)
    {
        return await _userRepositoryQueries.GetUserByUsernameOrEmail(queryRequest.UserName);
    }
}