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
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Role>().HasData(new Role()
        {
            RoleId = new Guid("00000000-0000-0000-0001-000000000000"),
            RoleName = "Administrator",
            RoleDescription = "Administrator"
        });
        
        base.OnModelCreating(modelBuilder);
    }
}