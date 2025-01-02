using EasyOnlineCrud.Server.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace EasyOnlineCrud.Server
{
    public class DataContext : IdentityDbContext<MyUser> 
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<MyLabel> Labels { get; set; }
        public DbSet<MyTask> MyTasks { get; set; }
    }
}
