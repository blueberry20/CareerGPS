using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using static CollegeCareerTracker2.Enums.Enums;

namespace CollegeCareerTracker2.Helpers
{
    public class GradeEnumHelper
    {
        public static string GetStringValue(StudentGradeEnum value)
        {
            //System.Diagnostics.Debug.Write("test:"+ value);
            string result;
            switch (value)
            {
                case StudentGradeEnum.Freshman:
                    result = "Freshman";
                    break;
                case StudentGradeEnum.Junior:
                    result = "Junior";
                    break;
                case StudentGradeEnum.Other:
                    result = "Other";
                    break;
                case StudentGradeEnum.Senior:
                    result = "Senior";
                    break;
                case StudentGradeEnum.Sophomore:
                    result = "Sophomore";
                    break;
                case StudentGradeEnum.MiddleSchool:
                    result = "Middle School";
                    break;
                default:
                    result = "Not Found";
                    break;

            }
            return result;
        }

    }
}