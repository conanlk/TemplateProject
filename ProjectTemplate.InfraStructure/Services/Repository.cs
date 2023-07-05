using Microsoft.EntityFrameworkCore;
using ProjectTemplate.Entities.Repositories;
using ProjectTemplate.InfraStructure.Contexts;

namespace ProjectTemplate.InfraStructure.Services;

public class Repository<T> : IRepository<T> where T : class
{
    private readonly DefaultDbContext _dbContext;

    protected Repository(DefaultDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public virtual async Task<T?> GetById(Guid id)
    {
        return await _dbContext.Set<T>().FindAsync(id);
    }

    public virtual IQueryable<T> GetAll()
    {
        return  _dbContext.Set<T>();
    }

    public virtual async Task<bool> Add(T entity)
    {
        _dbContext.Set<T>().Add(entity);
        return await _dbContext.SaveChangesAsync() > 0;
    }

    public virtual async Task<bool> Update(T entity)
    {
        _dbContext.Entry(entity).State = EntityState.Modified;
        return await _dbContext.SaveChangesAsync() > 0;
    }

    public virtual async Task<bool> Delete(T entity)
    {
        _dbContext.Set<T>().Remove(entity);
        return await _dbContext.SaveChangesAsync() > 0;
    }
}