
namespace ProjectTemplate.Entities.Repositories;

public interface IRepository<T>
{
    Task<T?> GetById(Guid id);
    IQueryable<T> GetAll(); 
    Task<bool> Add(T entity);
    Task<bool> Update(T entity);
    Task<bool> Delete(T entity);
}