using Microsoft.EntityFrameworkCore;
using ProjectTemplate.Entities.Models;
using ProjectTemplate.Entities.Repositories;
using ProjectTemplate.InfraStructure.Contexts;

namespace ProjectTemplate.InfraStructure.Services;

public class UserServiceQueries : RepositoryQueries<User>,IUserRepositoryQueries
{
    private readonly QueryDbContext _queryDbContext;

    public UserServiceQueries(QueryDbContext queryDbContext) : base(queryDbContext)
    {
        _queryDbContext = queryDbContext;
    }

    public async Task<User?> GetUserByUsernameOrEmail(string username)
    { 
        return await _queryDbContext.User.SingleOrDefaultAsync(p=>p.UserName == username || p.Email == username);
    }

    
}