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

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string NumberOfStudents { get; set; }
        public string StudentGradesArray { get; set; }
        public string PaymentPreference { get; set; }
        public string Date { get; set; }
    }
}