using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CHMSPortal.Areas.FrontOffice.Models
{
    public class GuestHouseList
    {
        public int ID { get; set; }
        public string NameofManager { get; set; }
        public string MobileNumber { get; set; }
        public string EmailAddress { get; set; }
        public string GuestHouseName { get; set; }
        public string STDCode { get; set; }
        public string PhoneNoOffice { get; set; }
        public string PhoneNoHome { get; set; }

      
    }
}