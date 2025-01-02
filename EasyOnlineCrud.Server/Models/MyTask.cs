
namespace EasyOnlineCrud.Server.Models
{
    public class MyTask
    {
        public int Id { get; set; }
        public int MyLabelId { get; set; } 
        public string Title { get; set; }
        public string Description { get; set; }

        public virtual MyLabel? MyLabel { get; set; }
    }
}
