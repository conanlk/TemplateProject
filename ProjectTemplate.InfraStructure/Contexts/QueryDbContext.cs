
using Microsoft.EntityFrameworkCore;
using ProjectTemplate.Entities.Models;

namespace ProjectTemplate.InfraStructure.Contexts;

public class QueryDbContext : DbContext
{
    public QueryDbContext(DbContextOptions<QueryDbContext> options) : base(options)
    {
        
    }

    public DbSet<User> User { get; set; }
    public DbSet<Role> Role { get; set; }
    public DbSet<UserRole> UserRole { get; set; }
}