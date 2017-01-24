using Microsoft.WindowsAzure.Storage.Table;
using System;

namespace CollegeCareerTracker2.CloudStorage.Student
{
    public class Student : TableEntity
    {
        public Student()
        {
            PartitionKey = "Student";
            RowKey = Guid.NewGuid().ToString();
        }

        public string Aptitude { get; set; }
        public string CareerExploration { get; set; }
        public string CareerRoadMapDevelopment { get; set; }
        public string StudentAchievementArchive { get; set; }
        public string CollegeSelectionOptimizer { get; set; }
        public string CollegeAdmissionScheduler { get; set; }
        public string CareerRewards { get; set; }
        public string HabitBuilder { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string StudentGrade { get; set; }
        public string FirstParentFirstName { get; set; }
        public string FirstParentPhoneNumber { get; set; }
        public string FirstParentEmail { get; set; }
        public string SecondParentFirstName { get; set; }
        public string SecondParentPhoneNumber { get; set; }
        public string SecondParentEmail { get; set; }
    }
}