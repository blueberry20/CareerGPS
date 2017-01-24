using Microsoft.WindowsAzure.Storage.Table;
using System;

namespace CollegeCareerTracker2.CloudStorage.Parent
{
    public class Parent : TableEntity
    {
        public Parent()
        {
            PartitionKey = "Parent";
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
        public string NumberOfStudents { get; set; }
        public string StudentGradesArray { get; set; }
        public string PaymentPreference { get; set; }
    }
}