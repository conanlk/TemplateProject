using MediatR;
using ProjectTemplate.Entities.Models;
using ProjectTemplate.Entities.Repositories;

namespace ProjectTemplate.Application.Modules.Users.Queries.GetUser;

public class GetUserQueryHandler : IRequestHandler<GetUserQueryRequest, User?>
{
    private readonly IUserRepository _userRepository;

    public GetUserQueryHandler(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }
    
    public async Task<User?> Handle(GetUserQueryRequest queryRequest, CancellationToken cancellationToken)
    {
        return await _userRepository.GetById(queryRequest.UserId);
    }
}