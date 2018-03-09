using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace BO.FrontOffice.Transaction
{
    public class GuestType
    {
        public GuestType()
        {
            this.GuestHouseList = new List<SelectListItem>();
            this.GuestCategoryList = new List<SelectListItem>();
            this.GuestTypeList = new List<SelectListItem>();
        }

        public List<SelectListItem> GuestHouseList { get; set; }
        public int? GuestCategoryID { get; set; }
        public string GuestCategoryName { get; set; }


        public List<SelectListItem> GuestCategoryList { get; set; }

        public int? GuestHouseID { get; set; }
        public string GuesthouseName { get; set; }

        public List<SelectListItem> GuestTypeList { get; set; }

        public int? GuestTypeID { get; set; }
        public string GuestTypeName_Eng { get; set; }
    }
}
