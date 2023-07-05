using ProjectTemplate.Entities.Models;

namespace ProjectTemplate.Entities.Repositories;

public interface IUserRepository : IRepository<User>
{
    Task<User?> GetUserByUsernameOrEmail(string username);
}