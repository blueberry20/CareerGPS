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

namespace CollegeCareerTracker2.Controllers
{
    public class ParentController : Controller
    {
        // GET: Parent
        public ActionResult Index()
        {
            ViewBag.Message = "Parent";
            return View();
        }

        [HttpPost]
        public ActionResult getParentResponses(ParentEntry parentinfo)
        {
            Parent parent = new Parent
            {
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

    }
}