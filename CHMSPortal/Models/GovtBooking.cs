using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CHMSPortal
{
    public class GovtBooking
    {
        public string GuestType { get; set; }

        public int GuestID { get; set; }
        public string SSOID { get; set; }
        public string AadharID { get; set; }
        [StringLength(50), Required]
        public string FullName { get; set; }
        [StringLength(15), Required]
        public string MobileNumber { get; set; }
        [DisplayFormat(DataFormatString = "{0:dd MMM yyyy}")]
        public string DOB { get; set; }
        public string date { get; set; }
        public string Gender { get; set; }
        [Required(ErrorMessage = "Email is Requirde")]
        [RegularExpression(@"^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}" +
                          @"\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\" +
                          @".)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$",
                          ErrorMessage = "Email is not valid")]
        public string EmailID { get; set; }
        [Required(ErrorMessage = "Postal Code Required")]
        public string PostalAddress { get; set; }

        public string PostalCode { get; set; }

        public string City { get; set; }

        public string State { get; set; }
        [DisplayFormat(DataFormatString = "{0:dd MMM yyyy}")]
        public string ARRIVALDATE { get; set; }
        public string DEPARTUREDATE { get; set; }
        public string ARRIVALTIME { get; set; }
        public string DEPARTURETIME { get; set; }
        public string BhamashahID { get; set; }
        public string Purposeoftraval { get; set; }
        public string OfficialDepartmentName { get; set; }

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