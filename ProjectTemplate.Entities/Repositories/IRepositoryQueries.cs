namespace ProjectTemplate.Entities.Repositories;

public interface IRepositoryQueries<T>
{
    Task<T?> GetById(Guid id);
    IQueryable<T> GetAll(); 
}