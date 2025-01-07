using System.Text.Json.Serialization;

namespace EasyOnlineCrud.Server.Models
{
    public class MyLabel
    {
        public MyLabel()
        {
            MyTasks = new HashSet<MyTask>();
        }
        public int Id { get; set; }
        public string Name { get; set; }

        [JsonIgnore]
        public virtual ICollection<MyTask> MyTasks { get; set; }
    }
}
