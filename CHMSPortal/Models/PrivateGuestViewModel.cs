using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Angle.Models
{
    public class PrivateGuestViewModel
    {
        //public int GuestID { get; set; }
       
        public string GuestType { get; set; }
        public string AadharNo { get; set; }

      
        public string SSOID { get; set; }

       public string Image { get; set; }
       
        public string Name { get; set; }

        public string MobileNumber { get; set; }


        public string DOB { get; set; }

        //public class Technology
        //{
        //    public int Id { set; get; }
        //    public string Name { set; get; }
        //}

        //public int? SelectedTechnology { set; get; }

        //public List<Technology> Technologies { set; get; }

         public string Gender { get; set; }


        public string EmailID { get; set; }



        public string PostalAddress { get; set; }


        public string PostalCode { get; set; }



        public string City { get; set; }



        public string State { get; set; }


        public string BhamashahID { get; set; }
        public string AadharID { get; set; }

        public DateTime ArrivalDate { get; set; }
        public DateTime DepartureDate { get; set; }

        public string Arrivalime { get; set; }
        public string DepartureTime { get; set; }

        public string PurposeOfTravel { get; set; }

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

        public string OfficeDepartmentName { get; set; }
        public string OfficeDivision { get; set; }
        public string OfficeDesignation { get; set; }
        public string OfficeExixtingGradepay { get; set; }
        public string OfficeGradepay { get; set; }
        public string OfficePostingPlace { get; set; }
       
        public string OfficeState { get; set; }
        public string OfficeCity { get; set; }
        public string ExtraBed { get; set; }

        public string Documents_OfficialForm { get; set; }   


        public string Documents_OrderForm { get; set; }
        public string Documents_CForm { get; set; }

        public int RoomTypeID { get; set; }
        public string RoomTypeName_Eng { get; set; }
        public IEnumerable<SelectListItem> RoomType { get; set; }


       





    }
}