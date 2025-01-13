using Microsoft.AspNetCore.Identity;
using System.Text.Json.Serialization;

namespace EasyOnlineCrud.Server.Models
{
    public class MyUser : IdentityUser
    {
        public MyUser()
        {
            MyTasks = new HashSet<MyTask>();
        }

        [JsonIgnore]
        public virtual ICollection<MyTask> MyTasks { get; set; }
    }
}
