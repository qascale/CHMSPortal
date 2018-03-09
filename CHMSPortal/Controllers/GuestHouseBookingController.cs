using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Dla = DL.FrontOffice;
using BO_inv = BO.FrontOffice;
using BL.FrontOffice;
using BL_Inv = BL.FrontOffice;
using CHMSPortal;
//using CHMSPortal.App_Helpers;
using Angle.Models;
using System.IO;

namespace CHMSPortal.Controllers
{
    public class GuestHouseBookingController : Controller
    {
      //  EntityFunctions efn = new EntityFunctions();
        //Dla.Transaction.GovtBooking obj = new Dla.Transaction.GovtBooking();
        //BO_inv.Transaction.GovtBooking obj = new BO_inv.Transaction.GovtBooking();
        BL_Inv.Transaction.GovtBooking obj = new BL_Inv.Transaction.GovtBooking();
        string message;

        // private MovieDBContext db = new MovieDBContext();

        // GET: Guest Management
        public ActionResult ForeignBooking()
        {
            return View();
        }
        public ActionResult chm_Dashboard()
        {
            return View();
        }

        public ActionResult GuestHouseList()
        {
            return View();
        }

        public ActionResult ReservationRequest()
        {
            return View();
        }
        public ActionResult ReservationHistory()
        {
            return View();
        }
        public ActionResult PantryServicesForm()
        {
            ViewBag.DisplayName = Session["DisplayName"].ToString();
            ViewBag.Mobile = Session["Mobile"].ToString();
            ViewBag.MailPersonal = Session["MailPersonal"].ToString();
            return View();
        }
        public ActionResult MaterialRequisitionList()
        {
            return View();
        }

        [HttpGet]
        public ActionResult GovtBooking()
        {
            GovtBooking db = new GovtBooking();
            return View(db);
        }

        //public ActionResult GovtBooking(string SSOID)
        //{
        //    GovtBooking db = new GovtBooking();
        //    return View(db);
        //}

        [HttpPost]
        public ActionResult Create(BO_inv.Transaction.GovtBooking model)
        {


            if (obj.Insert(model))
            {
            }
            else
            {

            }
            return RedirectToAction("Dashboard_v1");
        }

        //public ActionResult PrivateBooking()
        //{
        //    return View();
        //}
        public ActionResult PublicRrepresentativeGuest()
        {
            return View();
        }

        public ActionResult TransfredGuest()
        {
            return View();
        }
        public ActionResult DiningServices()
        {
            return View();
        }
        public ActionResult ForeignGuest()
        {
            return View();
        }

        public ActionResult WifiServices()
        {
            return View();
        }
        public ActionResult GovtBooking3()
        {
            return View();
        }

        //[HttpGet]
        //[ActionName("PrivateGuestBooking")]
        //public ActionResult PrivateGuestBooking_Get()
        //{
        //    PrivateGuestViewModel pvt = new PrivateGuestViewModel();
        //    //TempData["RoomTypes"]=new SelectList( efn.Get_RoomTypes(),"RoomTypeID","RoomTypeName_Eng");

        //    pvt.RoomType = new SelectList(efn.Get_RoomTypes(), "RoomTypeID", "RoomTypeName_Eng");
        //    //UpdateModel(pvt);
        //    pvt.Image = "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";
        //    return View(pvt);
        //}
        //[HttpPost]
        //[ActionName("PrivateGuestBooking")]
        //public ActionResult PrivateGuestBooking_Post(PrivateGuestViewModel pvt, HttpPostedFileBase Documents_OfficialForm, HttpPostedFileBase Documents_OrderForm, HttpPostedFileBase Documents_CForm)
        //{


        //    //PrivateGuestViewModel pvt = new PrivateGuestViewModel();
        //    //UpdateModel(pvt);
        //    //TimeSpan timespan = new TimeSpan(03, 00, 00);
        //    //DateTime time = DateTime.Today.Add(timespan);
        //    //string displayTime = time.ToString("hh:mm tt");
        //    if (pvt.SSOID != null)
        //    {
        //        string OfficialOrderpath = "";
        //        if (Documents_OfficialForm != null)
        //        {
        //            OfficialOrderpath = Server.MapPath("~/Uploads/");
        //            if (!Directory.Exists(OfficialOrderpath))
        //            {
        //                Directory.CreateDirectory(OfficialOrderpath);
        //            }

        //            Documents_OfficialForm.SaveAs(OfficialOrderpath + Path.GetFileName(Documents_OfficialForm.FileName));


        //        }
        //        string OrderFormpath = "";
        //        if (Documents_OrderForm != null)
        //        {
        //            OrderFormpath = Server.MapPath("~/Uploads/");
        //            if (!Directory.Exists(OrderFormpath))
        //            {
        //                Directory.CreateDirectory(OrderFormpath);
        //            }

        //            Documents_OrderForm.SaveAs(OrderFormpath + Path.GetFileName(Documents_OrderForm.FileName));


        //        }
        //        string CFormpath = "";
        //        if (Documents_CForm != null)
        //        {
        //            CFormpath = Server.MapPath("~/Uploads/");
        //            if (!Directory.Exists(CFormpath))
        //            {
        //                Directory.CreateDirectory(CFormpath);
        //            }

        //            Documents_CForm.SaveAs(CFormpath + Path.GetFileName(Documents_CForm.FileName));


        //        }
        //        int selectedID = pvt.RoomTypeID;
        //        // string selectedText = pvt.RoomTypeName_Eng;
        //        //pvt.RoomType = efn.Get_RoomTypes();
        //        pvt.RoomType = new SelectList(efn.Get_RoomTypes(), "RoomTypeID", "RoomTypeName_Eng");

        //        foreach (var f in pvt.RoomType)
        //        {
        //            pvt.RoomTypeName_Eng = f.Text;

        //            break;
        //        }

        //        efn.InsertPrivateGuestDetails(pvt.GuestType, pvt.AadharNo, pvt.SSOID, pvt.Name, pvt.MobileNumber, Convert.ToDateTime(pvt.DOB), Convert.ToString(pvt.Gender), pvt.EmailID,
        //            pvt.PostalAddress, pvt.PostalCode, pvt.City, pvt.State, pvt.BhamashahID, pvt.AadharID, Convert.ToDateTime(pvt.ArrivalDate), Convert.ToDateTime(pvt.DepartureDate)
        //            , pvt.PurposeOfTravel, pvt.Personal_FirstName, pvt.Personl_MiddleName, pvt.Personal_LastName, Convert.ToDateTime(pvt.Personal_DOB),
        //            pvt.Personal_MaritalStatus, pvt.Personal_Category, pvt.Personal_Religion, pvt.Personal_EmailID, pvt.Personal_MobileNumber,
        //            pvt.OfficeDepartmentName, pvt.OfficeDivision, pvt.OfficeDesignation, pvt.OfficeExixtingGradepay, pvt.OfficeGradepay,
        //            pvt.OfficePostingPlace, pvt.OfficeState, pvt.OfficeCity, pvt.ExtraBed, OfficialOrderpath, OrderFormpath, CFormpath, pvt.RoomTypeName_Eng);
        //    }
        //    TempData["TheResult"] = "yes";
        //    return RedirectToAction("PrivateGuestBooking", "GuestHouseBooking");

        //}

    }
}