
namespace CollegeCareerTracker2.CloudStorage.Parent
{
    public class ParentClient : TableStorageClient<Parent>
    {
        public ParentClient() : base("Parent") { }
    }
}