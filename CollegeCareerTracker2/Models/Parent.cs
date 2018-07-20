using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CollegeCareerTracker2.Models
{
    public class ParentEntry
    {
        public string firstName { get; set; }
        public string lastname { get; set; }
        public string phonenumber { get; set; }
        public string email { get; set; }
        public string numberofstudents { get; set; }
        public string studentgradesarray { get; set; }
        public string paymentpreference { get; set; }
        public string date { get; set; }
    }
}