
namespace CollegeCareerTracker2.CloudStorage.Student
{
    public class StudentClient : TableStorageClient<Student>
    {
        public StudentClient() : base("Student") { }
    }
}