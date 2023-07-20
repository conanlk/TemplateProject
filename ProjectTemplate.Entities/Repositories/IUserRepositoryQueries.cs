using ProjectTemplate.Entities.Models;

namespace ProjectTemplate.Entities.Repositories;

public interface IUserRepositoryQueries: IRepositoryQueries<User>
{
    Task<User?> GetUserByUsernameOrEmail(string username);
}