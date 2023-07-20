using Microsoft.EntityFrameworkCore;
using ProjectTemplate.Entities.Models;
using ProjectTemplate.Entities.Repositories;
using ProjectTemplate.InfraStructure.Contexts;

namespace ProjectTemplate.InfraStructure.Services;

public class UserServiceCommands : RepositoryCommands<User>,IUserRepositoryCommands
{
    private readonly CommandDbContext _commandDbContext;

    public UserServiceCommands(CommandDbContext commandDbContext) : base(commandDbContext)
    {
        _commandDbContext = commandDbContext;
    }
    
    public override async Task<bool> Update(User entity)
    {
        _commandDbContext.Entry(entity).State = EntityState.Modified;
        _commandDbContext.UserRole.AddRange(entity.UserRoles);
        return await _commandDbContext.SaveChangesAsync() > 0;
    }

}