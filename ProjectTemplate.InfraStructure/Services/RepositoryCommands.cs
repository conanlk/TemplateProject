using Microsoft.EntityFrameworkCore;
using ProjectTemplate.Entities.Repositories;
using ProjectTemplate.InfraStructure.Contexts;

namespace ProjectTemplate.InfraStructure.Services;

public class RepositoryCommands<T> : IRepositoryCommands<T> where T : class
{
    private readonly CommandDbContext _commandDbContext;

    protected RepositoryCommands(CommandDbContext commandDbContext)
    {
        _commandDbContext = commandDbContext;
    }

    public virtual async Task<bool> Add(T entity)
    {
        _commandDbContext.Set<T>().Add(entity);
        return await _commandDbContext.SaveChangesAsync() > 0;
    }

    public virtual async Task<bool> Update(T entity)
    {
        _commandDbContext.Entry(entity).State = EntityState.Modified;
        return await _commandDbContext.SaveChangesAsync() > 0;
    }

    public virtual async Task<bool> Delete(T entity)
    {
        _commandDbContext.Set<T>().Remove(entity);
        return await _commandDbContext.SaveChangesAsync() > 0;
    }
}