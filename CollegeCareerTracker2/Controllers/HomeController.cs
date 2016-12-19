using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CollegeCareerTracker2.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public HttpResponse getParentResponses(string aptitude, string careerExploration, string careerroadmapdevelopment, string studentachievementarchive, string collegeselectionoptimizer, string collegeadmissionscheduler, string careerrewards, string habitbuilder, string firstName, string lastname, string phonenumber, string email, string numberofstudents, string studentgradesarray, string paymentpreference)
        {

            return null;
        }

        [HttpPost]
        public HttpResponse getStudentResponses(string aptitude, string careerExploration, string careerroadmapdevelopment, string studentachievementarchive, string collegeselectionoptimizer, string collegeadmissionscheduler, string careerrewards, string habitbuilder, string firstName, string lastname, string phonenumber, string email, string studentgrade, string parent1firstname, string parent1phonenumber, string parent1email, string parent2firstname, string parent2phonenumber, string parent2email)
        {

            return null;
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}