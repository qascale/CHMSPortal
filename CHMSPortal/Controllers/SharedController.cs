using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CHMSPortal.Controllers
{
    public class SharedController : Controller
    {
        public ActionResult ChmsLanding()
        {
            using (RAJSSO.SSO SSO = new RAJSSO.SSO(AppConstants.SSOWebService.SSOWSSsoUserId))
            {
                if (SSO.CreateSSOSession())
                {
                    // Get Session Value
                    RAJSSO.SSOTokenDetail detail = SSO.GetSessionValue();
                    if (detail != null)
                    {
                        string ssoid = detail.SSOID; // SSOID
                        RAJSSO.SSOUserDetail UserDetail = SSO.GetUserDetail(ssoid, AppConstants.SSOWebService.SSOWSUserName, AppConstants.SSOWebService.SSOWSPassword);
                        if (UserDetail != null)
                        {
                            Session["AadhaarId"] = UserDetail.AadhaarId.ToString();
                            Session["BhamashahId"] = UserDetail.BhamashahId.ToString();
                            Session["BhamashahMemberId"] = UserDetail.BhamashahMemberId.ToString();
                            Session["City"] = UserDetail.City.ToString();
                            Session["DateOfBirth"] = UserDetail.DateOfBirth.ToString();
                            Session["DepartmentId"] = UserDetail.DepartmentId.ToString();
                            Session["DepartmentName"] = UserDetail.DepartmentName.ToString();
                            Session["Designation"] = UserDetail.Designation.ToString();
                            Session["DisplayName"] = UserDetail.DisplayName.ToString();
                            Session["EmployeeNumber"] = UserDetail.EmployeeNumber.ToString();
                            Session["Gender"] = UserDetail.Gender.ToString();
                            Session["MailOfficial"] = UserDetail.MailOfficial.ToString();
                            Session["MailPersonal"] = UserDetail.MailPersonal.ToString();
                            Session["Mobile"] = UserDetail.Mobile.ToString();
                            Session["Photo"] = UserDetail.Photo.ToString();
                            Session["PostalAddress"] = UserDetail.PostalAddress.ToString();
                            Session["PostalCode"] = UserDetail.PostalCode.ToString();
                            Session["SSOID"] = UserDetail.SSOID.ToString();
                            Session["State"] = UserDetail.State.ToString();
                            Session["TelephoneNumber"] = UserDetail.TelephoneNumber.ToString();
                        }
                    }
                    else
                    {
                        SSO.BackToSSO();
                    }
                }
            }            

            List<SelectListItem> items = new List<SelectListItem>()
                {
                    new SelectListItem { Text = "Guest", Value = "0", Selected = true },
                     new SelectListItem { Text = "Administration", Value = "1" },
                };
            ViewBag.ListItem = items;
            return View();
        }

        public ActionResult LogOut()
        {
            using (RAJSSO.SSO SSO = new RAJSSO.SSO())
            {
                SSO.SSOSignout();
            }
            return View();
        }

        public ActionResult BacktoSSO()
        {
            using (RAJSSO.SSO SSO = new RAJSSO.SSO())
            {
                SSO.BackToSSO();
            }
            return View();
        }

        //[HttpPost]
        //public ActionResult ChmsLanding(string STR)
        //{
        //    using (RAJSSO.SSO SSO = new RAJSSO.SSO(""))
        //    {
        //        SSO.BackToSSO();
        //    }
        //    return View();
        //}        

        // RenderMenu
        //public ActionResult RenderMenu()
        //{
        //    List<RoleBaseMenuBO> rawData = new List<RoleBaseMenuBO>();
        //    MasterMenuBL menu = new MasterMenuBL();
        //    TempData["Flag"] = (TempData["Flag"] == null) ? "0" : TempData["Flag"];
        //    if (CurrentSessions.RoleID != 0)
        //    {
        //        rawData = menu.RoleBaseList(CurrentSessions.RoleID, CurrentSessions.AdminID, CurrentSessions.AtishayVendorID);
        //        CurrentSessions.WalletBalance = rawData.FirstOrDefault().MainWalletAmount;
        //        CurrentSessions.SalesWalletBalance = rawData.FirstOrDefault().SalesWalletAmount;
        //    }
        //    else
        //    {
        //        return RedirectToAction("Login", "Shared");
        //    }
        //    return PartialView("_Sidebar", rawData);
        //}
    }
}