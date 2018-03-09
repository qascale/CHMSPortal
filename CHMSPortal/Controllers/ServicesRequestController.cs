using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CHMSPortal.Controllers
{
    public class ServicesRequestController : Controller
    {
        // GET: ServicesRequest
        public ActionResult PantryServices()
        {
            return View();
        }
        public ActionResult ConferenceServices()
        {
            return View();
        }
        public ActionResult DiningServices()
        {
            return View();
        }
        public ActionResult WifiServices()
        {
            return View();
        }
    }
}