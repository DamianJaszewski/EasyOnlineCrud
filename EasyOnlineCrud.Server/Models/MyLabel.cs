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

        public virtual ICollection<MyTask> MyTasks { get; set; }
    }
}
