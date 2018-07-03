using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CollegeCareerTracker2.Enums
{
    public class Enums
    {
        public enum AnswerOptionsEnum
        {
            NotImportant = 1,
            NotSure = 2,
            Important = 3
        }
        public enum PaymentPreferencesEnum
        {
            Free = 1,
            Monthly = 2,
            Annually = 3
        }
        public enum StudentGradeEnum
        {
            Other = 1,
            Freshman = 2,
            Sophomore = 3,
            Junior = 4,
            Senior = 5,
            MiddleSchool = 6
        }
    }
}