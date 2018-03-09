using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Oracle.ManagedDataAccess.Client;
using System.Data.SqlClient;
using BO;
using BO_Inv = BO.FrontOffice;
using System.Data;
using DA;

namespace DL.FrontOffice.Master
{
    public class GuestType : Base
    {
        public List<BO_Inv.Master.GuestType> Get_Active_Record(string ID = "", bool ActiveOnly = false, string SortBy = null, string SearchText = null)
        {
            // string query = " Select * from GuestHouse_Master";
            //queryString = "dbo.[Fo.Guesthousemaster]";
            queryString = "Select * from ch_Master where isactive=1";
            try
            {
                List<BO_Inv.Master.GuestType> returnModel = new List<BO_Inv.Master.GuestType>();
                using (OracleConnection conn = new OracleConnection(ConnectionString))
                {
                    OracleCommand cmd = new OracleCommand(queryString, conn);
                    // cmd.CommandType = CommandType.StoredProcedure;
                    OracleDataAdapter da = new OracleDataAdapter(cmd);
                    DataSet ds = new DataSet();
                    da.Fill(ds);
                    if (ds != null && ds.Tables != null && ds.Tables.Count > 0)
                    {
                        if (ds.Tables[0].Rows.Count > 0)
                        {
                            foreach (DataRow dr in ds.Tables[0].Rows)
                            {
                                returnModel.Add(new BO_Inv.Master.GuestType()
                                {
                                    GuestHouseID = dr["CH_ID"].ToString(),
                                    GuesthouseName = dr["CH_NAME_ENG"].ToString()
                                }
                                    );
                            }
                            return returnModel;
                        }

                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
                //return null;
            }
            return null;
        }

        public List<BO_Inv.Master.GuestType> Get_City_Record(string ID = "", bool ActiveOnly = false, string SortBy = null, string SearchText = null)
        {
            // string query = " Select * from GuestHouse_Master";
            queryString = "Select * from ch_guesttype_master where isactive=1";

            try
            {
                List<BO_Inv.Master.GuestType> returnModel = new List<BO_Inv.Master.GuestType>();
                using (OracleConnection conn = new OracleConnection(ConnectionString))
                {
                    OracleCommand cmd = new OracleCommand(queryString, conn);
                    //cmd.CommandType = CommandType.StoredProcedure;
                    OracleDataAdapter da = new OracleDataAdapter(cmd);
                    DataSet ds = new DataSet();
                    da.Fill(ds);
                    if (ds != null && ds.Tables != null && ds.Tables.Count > 0)
                    {
                        if (ds.Tables[0].Rows.Count > 0)
                        {
                            foreach (DataRow dr in ds.Tables[0].Rows)
                            {
                                returnModel.Add(new BO_Inv.Master.GuestType()
                                {
                                    GuestCategoryID = dr["CH_Guesttype_id"].ToString().Trim(),

                                    GuestCategoryName = dr["ch_guesttypename_eng"].ToString().Trim()
                                }
                                    );
                            }
                            return returnModel;




                        }

                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
                //return null;
            }
            return null;

        }

        public List<BO_Inv.Master.GuestType> Get_Category_Record(string ID = "", bool ActiveOnly = false, string SortBy = null, string SearchText = null)
        {

            //string CategoryId = "GT001";
            queryString = "SELECT* FROM ch_RvCategoryMapping INNER JOIN CH_RVCATEGORY_MASTER ON CH_RVCATEGORY_MASTER.CH_RV_CATEGORYID=ch_RvCategoryMapping.Ch_Rv_Categoryid WHERE ch_RvCategoryMapping.ISACTIVE=1 AND ch_RvCategoryMapping.ISDELETE=0 AND ch_RvCategoryMapping.ch_GUESTTYPEID='" + ID + "'";
            try
            {
                List<BO_Inv.Master.GuestType> returnModel = new List<BO_Inv.Master.GuestType>();
                using (OracleConnection conn = new OracleConnection(ConnectionString))
                {


                    OracleCommand cmd = new OracleCommand(queryString, conn);
                    cmd.Parameters.Add("CH_RV_CATEGORYID", ID);
                    //cmd.CommandType = CommandType.StoredProcedure;
                    //cmd.Parameters.AddWithValue("@CategoryId", CategoryId);

                    OracleDataAdapter da = new OracleDataAdapter(cmd);
                    DataSet ds = new DataSet();
                    da.Fill(ds);
                    if (ds != null && ds.Tables != null && ds.Tables.Count > 0)
                    {
                        if (ds.Tables[0].Rows.Count > 0)
                        {
                            foreach (DataRow dr in ds.Tables[0].Rows)
                            {
                                returnModel.Add(new BO_Inv.Master.GuestType()
                                {
                                    GuestCategoryID = dr["CH_RV_CATEGORYID"].ToString(),
                                    GuestCategoryName = dr["CH_RV_CATEGORYNAME_ENG"].ToString()
                                }
                                    );
                            }
                            return returnModel;
                        }

                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
                //return null;
            }
            return null;
        }
    }
}
