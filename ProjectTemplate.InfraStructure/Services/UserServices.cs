using Microsoft.EntityFrameworkCore;
using ProjectTemplate.Entities.Models;
using ProjectTemplate.Entities.Repositories;
using ProjectTemplate.InfraStructure.Contexts;

namespace ProjectTemplate.InfraStructure.Services;

public class UserServices : Repository<User>,IUserRepository
{
    private readonly DefaultDbContext _dbContext;

    public UserServices(DefaultDbContext dbContext) : base(dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<User?> GetUserByUsernameOrEmail(string username)
    { 
        return await _dbContext.User.SingleOrDefaultAsync(p=>p.UserName == username || p.Email == username);
    }

    public override async Task<bool> Update(User entity)
    {
        _dbContext.Entry(entity).State = EntityState.Modified;
        _dbContext.UserRole.AddRange(entity.UserRoles);
        return await _dbContext.SaveChangesAsync() > 0;
    }
}