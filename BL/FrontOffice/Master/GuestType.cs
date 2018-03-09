using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BO;
using BO_Inv = BO.FrontOffice;
using DL_Inv = DL.FrontOffice;
using BO.FrontOffice;

namespace BL.FrontOffice.Master
{
     public class GuestType
    {
        DL_Inv.Master.GuestType obj = new DL_Inv.Master.GuestType();
        public List<BO_Inv.Master.GuestType> Get_Active_Record()
        {
            return obj.Get_Active_Record();
        }
        public List<BO_Inv.Master.GuestType> Get_City_Record()
        {
            return obj.Get_City_Record();
        }
        public List<BO_Inv.Master.GuestType> Get_Guesttype_Record(string GuestCategoryID = null)
        {
            return obj.Get_Category_Record(GuestCategoryID);
        }
    }
}
