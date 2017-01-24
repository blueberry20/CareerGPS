using System;
using System.Net;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CollegeCareerTracker2.CloudStorage.Parent;
using CollegeCareerTracker2.CloudStorage.Student;
using Microsoft.WindowsAzure.Storage;
using CollegeCareerTracker2.Models;

//olga
namespace CollegeCareerTracker2.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }


        [HttpPost]
        public ActionResult getParentResponses(ParentEntry parentinfo)
        {
            Parent parent = new Parent
            {
                Aptitude = parentinfo.aptitude,
                CareerExploration = parentinfo.careerExploration,
                CareerRoadMapDevelopment = parentinfo.careerroadmapdevelopment,
                StudentAchievementArchive = parentinfo.studentachievementarchive,
                CollegeSelectionOptimizer = parentinfo.collegeselectionoptimizer,
                CollegeAdmissionScheduler = parentinfo.collegeadmissionscheduler,
                CareerRewards = parentinfo.careerrewards,
                HabitBuilder = parentinfo.habitbuilder,
                FirstName = parentinfo.firstName,
                LastName = parentinfo.lastname,
                PhoneNumber = parentinfo.phonenumber,
                Email = parentinfo.email,
                NumberOfStudents = parentinfo.numberofstudents,
                StudentGradesArray = parentinfo.studentgradesarray,
                PaymentPreference = parentinfo.paymentpreference
            };
            try
            {
                ParentClient tableStorage = new ParentClient();
                tableStorage.Add(parent);
                return Content("ok");
            }
            catch (Exception ex)
            {
                return new HttpStatusCodeResult(HttpStatusCode.NotFound, ex.Message);
            }

        }

        [HttpPost]
        public ActionResult getStudentResponses(StudentEntry studentinfo)
        {
            Student student = new Student
            {
                Aptitude = studentinfo.aptitude,
                CareerExploration = studentinfo.careerExploration,
                CareerRoadMapDevelopment = studentinfo.careerroadmapdevelopment,
                StudentAchievementArchive = studentinfo.studentachievementarchive,
                CollegeSelectionOptimizer = studentinfo.collegeselectionoptimizer,
                CollegeAdmissionScheduler = studentinfo.collegeadmissionscheduler,
                CareerRewards = studentinfo.careerrewards,
                HabitBuilder = studentinfo.habitbuilder,
                FirstName = studentinfo.firstName,
                LastName = studentinfo.lastname,
                PhoneNumber = studentinfo.phonenumber,
                Email = studentinfo.email,
                StudentGrade = studentinfo.studentgrade,
                FirstParentFirstName = studentinfo.parent1firstname,
                FirstParentPhoneNumber = studentinfo.parent1phonenumber,
                FirstParentEmail = studentinfo.parent1email,
                SecondParentFirstName = studentinfo.parent2firstname,
                SecondParentPhoneNumber = studentinfo.parent2phonenumber,
                SecondParentEmail = studentinfo.parent2email
            };
            try
            {
                StudentClient tableStorage = new StudentClient();
                tableStorage.Add(student);
                return Content("ok");
            }
            catch (Exception ex)
            {
                return new HttpStatusCodeResult(HttpStatusCode.NotFound, ex.Message);
            }
        }


        public ActionResult PrivacyPolicy()
        {
            ViewBag.Message = "Privacy Policy";
            return View();
        }

        public ActionResult TermsOfUse()
        {
            ViewBag.Message = "Terms Of Use";
            return View();
        }
    }
}