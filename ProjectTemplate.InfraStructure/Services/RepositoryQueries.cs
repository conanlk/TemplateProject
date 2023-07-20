using ProjectTemplate.Entities.Repositories;
using ProjectTemplate.InfraStructure.Contexts;

namespace ProjectTemplate.InfraStructure.Services;

public class RepositoryQueries<T> : IRepositoryQueries<T> where T : class
{
    private readonly QueryDbContext _queryDbContext;

    protected RepositoryQueries(QueryDbContext queryDbContext)
    {
        _queryDbContext = queryDbContext;
    }
    
    public virtual async Task<T?> GetById(Guid id)
    {
        return await _queryDbContext.Set<T>().FindAsync(id);
    }

    public virtual IQueryable<T> GetAll()
    {
        return  _queryDbContext.Set<T>();
    }
}