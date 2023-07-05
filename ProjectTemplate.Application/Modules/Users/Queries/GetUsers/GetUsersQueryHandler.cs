using MediatR;
using ProjectTemplate.Entities.Models;
using ProjectTemplate.Entities.Repositories;

namespace ProjectTemplate.Application.Modules.Users.Queries.GetUsers;

public class GetUsersQueryHandler : IRequestHandler<GetUsersQueryRequest, IEnumerable<User>>
{
    private readonly IUserRepository _userRepository;
    public GetUsersQueryHandler(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public Task<IEnumerable<User>> Handle(GetUsersQueryRequest queryRequest, CancellationToken cancellationToken)
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
            
        return Task.FromResult(users.AsEnumerable());
    }
}