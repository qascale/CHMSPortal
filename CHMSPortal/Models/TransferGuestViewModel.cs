using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angle.Models
{
    public class TransferGuestViewModel
    {
        public string GuestHouseID { get; set; }
        public string GuestType { get; set; }
        public string Name { get; set; }

        public string PostName { get; set; }

        public string DepartmentName { get; set; }
        public DateTime Date { get; set; }

        public string PostedArea { get; set; }

        public string PayBandNo { get; set; }
        public string Gradepay { get; set; }

        public string FirstDateOfStayingInGuesthouse { get; set; }
        public string DateOfJoningInWork { get; set; }

        public string IfAppliedForTransitHostel { get; set; }

        public string IncreaseStayingTime { get; set; }

        public string HomeRentAmountReceieved { get; set; }
        public string AnnualIncome { get; set; }
        public string SalarySlipDocuments { get; set; }
        public string IncreasedTimePeriodDocuments { get; set; }
        public string AnnualincomeDocuments { get; set; }

        public string SignatureFile { get; set; }
        public string ImageFile { get; set; }
      
    }
}