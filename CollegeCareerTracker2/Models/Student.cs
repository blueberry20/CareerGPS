using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CollegeCareerTracker2.Models
{
    public class StudentEntry
    {
        public string firstName { get; set; }
        public string lastname { get; set; }
        public string phonenumber { get; set; }
        public string email { get; set; }
        public string studentgrade { get; set; }
        public string parent1firstname { get; set; }
        public string parent1phonenumber { get; set; }
        public string parent1email { get; set; }
        public string parent2firstname { get; set; }
        public string parent2phonenumber { get; set; }
        public string parent2email { get; set; }
        public string date { get; set; }
    }
}