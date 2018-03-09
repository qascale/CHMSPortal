using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angle.Models
{
    public class ForeignGuestViewModel
    {
        public string GuestHouseID { get; set; }
        public string GuestType { get; set; }

        public string ArrivedFrom { get; set; }

        public DateTime ArrivalDateInIndia { get; set; }
        public DateTime ArrivalDateInHotel { get; set; }
        public string ArrivalTimeInHotel { get; set; }

        public string IntendeddurationOfStaying { get; set; }
        public string WheateherEmployedInIndia { get; set; }
        public string PurposeOfTravel { get; set; }
        public string NextDestination { get; set; }
        public string ConatctNoIndia { get; set; }
        public string ConatctNoINCountry { get; set; }
        public string PermanentStayingCountryName { get; set; }
        public string PermanentStayingCountryAddress { get; set; }
        public string NameOfStayingPlace { get; set; }
        public string AddressOfStayingPlace { get; set; }
        public string ContactOfStayingPlace { get; set; }
        public string NameInPassport { get; set; }
        public string Gender { get; set; }
        public DateTime DOB { get; set; }

        public string AddressReferanceinIndia { get; set; }
        public string PassportNumber { get; set; }

        public string PlaceOfIssuePassport { get; set; }

        public string PassportIssueDate { get; set; }

        public string PassportValidTill { get; set; }
        public string VisaNumber { get; set; }
        public DateTime VisaIssueDate { get; set; }
        public DateTime VisaValidTill { get; set; }

        public string VisaType { get; set; }
        public string VisaPlaceOfIssue { get; set; }
        public string Nationality { get; set; }
       

       
    }
}