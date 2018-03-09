using System;
using System.Collections.Generic;
using System.Linq;
using Dla = DL.FrontOffice;
using System.Text;
using System.Threading.Tasks;
using System.Data.OleDb;
using System.Data;
using BO;
using BO.FrontOffice;
using Oracle.ManagedDataAccess.Client;
using System.Data.SqlClient;
using DA;



namespace DL.FrontOffice.Transaction
{
    public class GovtBooking : Base
        {
        public bool Insert(BO.FrontOffice.Transaction.GovtBooking model)
        {
            bool result = false;
            //  queryString = "sp_insertguestmaster";
            queryString = "insert into dbo.CH_GuestMaster (SSOID,Guesthouseid,FullName) values(12,1,vinod,)";
            //  queryString = "insert into dbo.CH_GuestMaster (SSOID,FullName,MobileNumber,DOB,Gender,EmailID,PostalAddress,PostalCode,City,State,BhamashahID,AadharID,OfficialDepartmentName,OfficialDivision,OfficialDesignation,OfficialExistingGradePay,OfficialGradePay,OfficialPostingPlace,OfficialState,OfficialDistrict,Personal_FirstName,Personl_MiddleName,Personal_LastName,Personal_Gender,Personal_DOB,Personal_MaritalStatus,Personal_Category,Personal_Religion,Personal_EmailID,Personal_MobileNumber,Documents)values(@SSOID, @FullName, @MobileNumber, @DOB, @Gender, @EmailID, @PostalAddress, @PostalCode, @City, @State, @BhamashahID, @AadharID, @OfficialDepartmentName, @OfficialDivision, @OfficialDesignation, @OfficialExistingGradePay, @OfficialGradePay, @OfficialPostingPlace, @OfficialState, @OfficialDistrict, @Personal_FirstName, @Personl_MiddleName, @Personal_LastName, @Personal_Gender, @Personal_DOB, @Personal_MaritalStatus, @Personal_Category, @Personal_Religion, @Personal_EmailID, @Personal_MobileNumber, @Documents)";
            try
            {
                OracleConnection conn = new OracleConnection(ConnectionString);
                conn.Open();
                OracleCommand cmd = new OracleCommand(queryString, conn);
                cmd.CommandType = CommandType.StoredProcedure;
                //cmd.Parameters.Add(new OracleParameter("@SSOID", model.GuestID));
                cmd.Parameters.Add(new OracleParameter("@SSOID", model.SSOID));
                cmd.Parameters.Add(new OracleParameter("@FullName", model.FullName));
                cmd.Parameters.Add(new OracleParameter("@MobileNumber", model.MobileNumber));
                cmd.Parameters.Add(new OracleParameter("@DOB", model.DOB));
                cmd.Parameters.Add(new OracleParameter("@Gender", model.Gender));
                cmd.Parameters.Add(new OracleParameter("@EmailID", model.EmailID));
                cmd.Parameters.Add(new OracleParameter("@PostalAddress", model.PostalAddress));
                cmd.Parameters.Add(new OracleParameter("@PostalCode", model.PostalCode));
                cmd.Parameters.Add(new OracleParameter("@City", model.City));
                cmd.Parameters.Add(new OracleParameter("@State", model.State));
                cmd.Parameters.Add(new OracleParameter("@AadharID", model.AadharID));
                cmd.Parameters.Add(new OracleParameter("@OfficialDepartmentName", model.OfficialDepartmentName));
                cmd.Parameters.Add(new OracleParameter("@OfficialDivision", model.OfficialDivision));
                cmd.Parameters.Add(new OracleParameter("@OfficialDesignation", model.OfficialDesignation));
                cmd.Parameters.Add(new OracleParameter("@OfficialExistingGradePay", model.OfficialExistingGradePay));
                cmd.Parameters.Add(new OracleParameter("@OfficialGradePay", model.OfficialGradePay));
                cmd.Parameters.Add(new OracleParameter("@OfficialPostingPlace", model.OfficialPostingPlace));
                cmd.Parameters.Add(new OracleParameter("@BhamashahID", model.BhamashahID));
                cmd.Parameters.Add(new OracleParameter("@OfficialState", model.OfficialState));
                cmd.Parameters.Add(new OracleParameter("@OfficialDistrict", model.OfficialDistrict));
                cmd.Parameters.Add(new OracleParameter("@Personal_FirstName", model.Personal_FirstName));
                cmd.Parameters.Add(new OracleParameter("@Personl_MiddleName", model.Personl_MiddleName));
                cmd.Parameters.Add(new OracleParameter("@Personal_LastName", model.Personal_LastName));
                cmd.Parameters.Add(new OracleParameter("@Personal_Gender", model.Personal_Gender));
                cmd.Parameters.Add(new OracleParameter("@Personal_DOB", model.Personal_DOB));
                cmd.Parameters.Add(new OracleParameter("@Personal_MaritalStatus", model.Personal_MaritalStatus));
                cmd.Parameters.Add(new OracleParameter("@Personal_Category", model.Personal_Category));
                cmd.Parameters.Add(new OracleParameter("@Personal_EmailID", model.Personal_EmailID));
                cmd.Parameters.Add(new OracleParameter("@Personal_Religion", model.Personal_Religion));
                cmd.Parameters.Add(new OracleParameter("@Personal_MobileNumber", model.Personal_MobileNumber));
                cmd.Parameters.Add(new OracleParameter("@Documents", model.Documents));
                cmd.ExecuteReader();
                conn.Close();

            }
            catch (Exception ex)
            {
                // message = Common_Function.ConvertResultToFail(ex, queryString, model.User);

            }
            return result;
        }
    }
}
