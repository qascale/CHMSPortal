using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BL_Inv = BL.FrontOffice;
using BO_Inv = BO.FrontOffice;
using BO;
using CHMSPortal.Areas.FrontOffice.Models;
using static BO.Extensions;

namespace CHMSPortal.Areas.FrontOffice.Models
{
    public static class FrontOffice_Function
    {
        public static SelectList Get_Master_GuestType(bool active, string defaultValue = null)
        {
            BL_Inv.Master.GuestType obj = new BL_Inv.Master.GuestType();
            var list = obj.Get_Active_Record();
            if (list != null)
            {
                return new SelectList(list, DD_Column.GuestHouseID.ToString(), DD_Column.GuesthouseName.ToString(), defaultValue);
            }
            else
            {
                return new SelectList(new List<string>());
            }
        }
        public static SelectList Get_Master_GuestCityType(bool active, string defaultValue = null)
        {
            BL_Inv.Master.GuestType obj = new BL_Inv.Master.GuestType();
            var list = obj.Get_City_Record();
            if (list != null)
            {
                return new SelectList(list, DD_Column.GuestCategoryID.ToString(), DD_Column.GuestCategoryName.ToString(), defaultValue);
            }
            else
            {
                return new SelectList(new List<string>());
            }
        }
        public static SelectList Get_masterGet_Category_Record(bool active, string GuestCategoryID = null, string defaultValue = null)
        {
            BL_Inv.Master.GuestType obj = new BL_Inv.Master.GuestType();
            var list = obj.Get_Guesttype_Record(GuestCategoryID);
            if (list != null)
            {
                return new SelectList(list, DD_Column.GuestCategoryID.ToString(), DD_Column.GuestCategoryName.ToString(), defaultValue);
            }
            else
            {
                return new SelectList(new List<string>());
            }
        }
    }
}