using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CHMSPortal.Controllers
{
    public class BookingHistoryController : Controller
    {
        public ActionResult RoomAllotment()
        {
            //ViewBag.ReservationID = Session["ReservationID"].ToString();
            //ViewBag.guestname = Session["guestname"].ToString();
            //ViewBag.aadharno = Session["aadharno"].ToString();
            //ViewBag.roomtype = Session["roomtype"].ToString();
            //ViewBag.Mobile = Session["Mobile"].ToString();
            //ViewBag.MailPersonal = Session["MailPersonal"].ToString();
            return View();
        }
        public ActionResult ReservationHistory_Manager()
        {
            return View();
        }
    }
}