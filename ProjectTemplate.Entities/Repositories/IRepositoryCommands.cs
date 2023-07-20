
namespace ProjectTemplate.Entities.Repositories;

public interface IRepositoryCommands<T>
{

    Task<bool> Add(T entity);
    Task<bool> Update(T entity);
    Task<bool> Delete(T entity);
}