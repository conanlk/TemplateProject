using Microsoft.EntityFrameworkCore;
using ProjectTemplate.Database.Models;

namespace ProjectTemplate.Database.Contexts;

public class MigrationContext : DbContext
{
    public MigrationContext(DbContextOptions<MigrationContext> options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Role> Roles { get; set; }
    public DbSet<UserRole> UserRoles { get; set; }

}