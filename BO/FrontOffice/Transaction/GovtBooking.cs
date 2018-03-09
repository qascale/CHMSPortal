using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BO.FrontOffice.Transaction
{
    public class GovtBooking
    {
        public int GuestID { get; set; }
        public string SSOID { get; set; }
        public string FullName { get; set; }
        public string MobileNumber { get; set; }
        public DateTime DOB { get; set; }

        // public string date { get; set; }
        public string Gender { get; set; }
        public string EmailID { get; set; }
        public string PostalAddress { get; set; }

        public string PostalCode { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public string BhamashahID { get; set; }
        public string AadharID { get; set; }

        public string OfficialDepartmentName { get; set; }

        public List<GovtBooking> BookingList { get; set; }

        public string OfficialDivision { get; set; }

        public string OfficialDesignation { get; set; }

        public string OfficialExistingGradePay { get; set; }

        public string OfficialGradePay { get; set; }

        public string OfficialPostingPlace { get; set; }

        public string OfficialState { get; set; }

        public string OfficialDistrict { get; set; }

        public string Personal_FirstName { get; set; }

        public string Personl_MiddleName { get; set; }

        public string Personal_LastName { get; set; }

        public string Personal_Gender { get; set; }

        public string Personal_DOB { get; set; }

        public string Personal_MaritalStatus { get; set; }

        public string Personal_Category { get; set; }

        public string Personal_Religion { get; set; }

        public string Personal_EmailID { get; set; }

        public string Personal_MobileNumber { get; set; }

        public string Documents { get; set; }
    }
}
