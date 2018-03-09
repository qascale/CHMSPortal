using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DL;
using Oracle.ManagedDataAccess.Client;
using CHMSPortal;
using System.Configuration;
using System.Data.SqlClient;
using BO_inv = BO.FrontOffice;
using BL.FrontOffice;
using BL_Inv = BL.FrontOffice;
using CHMSPortal.Areas.FrontOffice.Models;

namespace CHMSPortal.Controllers
{
    public class GuestTypeController : Controller
    {
        public ActionResult GuestType()
        {
            BO_inv.Transaction.GuestType model1 = new BO_inv.Transaction.GuestType();
            ViewBag.GuestHouseID = FrontOffice_Function.Get_Master_GuestType(true);
            ViewBag.GuestCategoryID = FrontOffice_Function.Get_Master_GuestCityType(true);
            ViewBag.GuestTypeID = FrontOffice_Function.Get_masterGet_Category_Record(true);
            return View();
        }
        [HttpPost]
        public ActionResult GuestType(string GuestCategoryID, string Next)
        {
            BO_inv.Transaction.GuestType model1 = new BO_inv.Transaction.GuestType();
            ViewBag.GuestHouseID = FrontOffice_Function.Get_Master_GuestType(true);
            ViewBag.GuestCategoryID = FrontOffice_Function.Get_Master_GuestCityType(true);
            if (GuestCategoryID.ToString() != null)
            {
                ViewBag.GuestTypeID = FrontOffice_Function.Get_masterGet_Category_Record(true, GuestCategoryID);
            }
            if (!string.IsNullOrEmpty(Next))
            {
                if (GuestCategoryID == "GT001")
                {
                    return RedirectToAction("GovtBooking", "GuestHouseBooking");
                }
                else if (GuestCategoryID == "GT002")
                {
                    return RedirectToAction("GovtBooking", "GuestHouseBooking");
                }
                else if (GuestCategoryID == "GT003")
                {
                    return RedirectToAction("ForeignGuest", "GuestHouseBooking");
                }
                else if (GuestCategoryID == "GT004")
                {
                    return RedirectToAction("PublicRrepresentativeGuest", "GuestHouseBooking");
                }
                else if (GuestCategoryID == "GT005")
                {
                    return RedirectToAction("PrivateGuestBooking", "GuestHouseBooking");
                }
                else if (GuestCategoryID == "GT006")
                {
                    return RedirectToAction("TransfredGuest", "GuestHouseBooking");
                }
                else
                {
                    return RedirectToAction("GuestType", "GuestType");
                }
            }
            return View();
        }
    }
}