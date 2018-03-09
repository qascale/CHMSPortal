using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BO;
using BO_Inv = BO.FrontOffice;
using DL_Inv = DL.FrontOffice;

namespace BL.FrontOffice.Transaction
{
   public class GovtBooking
    {
        DL_Inv.Transaction.GovtBooking obj = new DL_Inv.Transaction.GovtBooking();
        public bool Insert(BO_Inv.Transaction.GovtBooking model)
        {
            return obj.Insert(model);
        }
    }
}
