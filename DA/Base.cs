using Oracle.ManagedDataAccess.Client;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DA
{

    public class Base
    {
        public static string ConnectionString;
        public static string queryString;
        public Base()
        {
            string appkey = ConfigurationManager.AppSettings["Constr"].ToString();
            ConnectionString = ConfigurationManager.ConnectionStrings[appkey].ConnectionString;
        }
        public class DbCon_SQL
        {
            OracleConnection conn = new OracleConnection(ConnectionString);
            OracleCommand cmd = new OracleCommand();
            OracleDataAdapter obj;

            public string Setdate(String code)
            {
                string ldate, ldate1, ldate2, ldate3;
                string[] arr;
                ldate = code;
                if (ldate.Length >= 10)
                {
                    arr = ldate.Split('/');
                    if (arr[0].Length == 1)
                    {
                        arr[0] = "0" + arr[0];
                    }
                    ldate1 = arr[0];
                    if (arr[1].Length == 1)
                    {
                        arr[1] = "0" + arr[1];
                    }
                    ldate2 = arr[1];
                    ldate3 = arr[2].Substring(0, 4);
                    ldate = ldate2 + "/" + ldate1 + "/" + ldate3;
                }
                return ldate;

            }

            // ------------------------------------------ Rohit End---------------------------------
            public void cmdnonquery(string strsql)
            {
                try
                {
                    if (conn.State == ConnectionState.Open)
                    {
                        conn.Close();
                    }
                    cmd.Connection = conn;
                    cmd.CommandText = strsql;
                    cmd.CommandTimeout = 4000;
                    cmd.CommandType = CommandType.StoredProcedure;
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();

                }
                catch (Exception ex)
                {
                    conn.Close();
                    throw new Exception(ex.Message.ToString() + "qry:" + strsql + ex.StackTrace);
                }
            }

            public void cmdtextquery(string strsql)
            {
                try
                {
                    if (conn.State == ConnectionState.Open)
                    {
                        conn.Close();
                    }
                    cmd.Connection = conn;
                    cmd.CommandText = strsql;
                    cmd.CommandType = CommandType.Text;
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    conn.Close();

                }
                catch (Exception ex)
                {
                    conn.Close();
                    throw new Exception(ex.Message.ToString() + "qry:" + strsql);
                }
            }
            public OracleDataReader cmdquery(string strsql)
            {
                try
                {
                    if (conn.State == ConnectionState.Open)
                    {
                        conn.Close();
                    }
                    cmd.Connection = conn;
                    cmd.CommandText = strsql;
                    cmd.CommandType = CommandType.StoredProcedure;

                    conn.Open();
                    OracleDataReader dr = cmd.ExecuteReader();
                    conn.Close();
                    return dr;

                }
                catch (Exception ex)
                {
                    conn.Close();
                    throw new Exception(ex.Message.ToString() + "qry:" + strsql);
                }
            }
            public DataSet AddDataSet(string strsql)
            {
                try
                {
                    if (conn.State == ConnectionState.Open)
                    {
                        conn.Close();
                        cmd.Dispose();
                    }
                    DataSet Ds = new DataSet();
                    cmd.Connection = conn;
                    cmd.CommandTimeout = 4000;
                    cmd.CommandText = strsql;
                    conn.Open();
                    cmd.CommandType = CommandType.StoredProcedure;
                    obj = new OracleDataAdapter(cmd);
                    obj.Fill(Ds);
                    conn.Close();
                    return Ds;

                }
                catch (Exception ex)
                {
                    throw new Exception(ex.Message.ToString() + "qry:" + strsql);
                }
            }

            public OracleDataReader cmdquery1(string strsql)
            {
                try
                {
                    if (conn.State == ConnectionState.Open)
                    {
                        conn.Close();
                    }
                    cmd.Connection = conn;
                    cmd.CommandText = strsql;
                    cmd.CommandType = CommandType.Text;

                    conn.Open();
                    OracleDataReader dr = cmd.ExecuteReader();
                    conn.Close();
                    return dr;

                }
                catch (Exception ex)
                {
                    conn.Close();
                    throw new Exception(ex.Message.ToString() + "qry:" + strsql);
                }
            }

            public OracleDataReader cmdquerynonsp(string strsql)
            {
                try
                {
                    if (conn.State == ConnectionState.Open)
                    {
                        conn.Close();
                    }
                    cmd.Connection = conn;
                    cmd.CommandText = strsql;
                    cmd.CommandType = CommandType.Text;
                    conn.Open();
                    OracleDataReader dr = cmd.ExecuteReader();

                    return dr;

                }
                catch (Exception ex)
                {
                    conn.Close();
                    throw new Exception(ex.Message.ToString() + "qry:" + strsql);
                }


            }
            public DataSet cmdquerydataset(string strsql)
            {
                try
                {
                    if (conn.State == ConnectionState.Open)
                    {
                        conn.Close();
                        cmd.Dispose();
                    }
                    conn.Open();
                    DataSet Ds = new DataSet();
                    cmd.Connection = conn;
                    cmd.CommandText = strsql;
                    cmd.CommandType = CommandType.Text;
                    obj = new OracleDataAdapter(cmd);
                    obj.Fill(Ds);
                    conn.Close();
                    return Ds;

                }
                catch (Exception ex)
                {
                    throw new Exception(ex.Message.ToString() + "qry:" + strsql);
                }

            }
            public DataTable Addtable(string strsql)
            {
                try
                {
                    if (conn.State == ConnectionState.Open)
                    {
                        conn.Close();
                        cmd.Dispose();
                    }
                    conn.Open();
                    DataSet Ds = new DataSet();
                    cmd.Connection = conn;
                    cmd.CommandText = strsql;
                    cmd.CommandType = CommandType.Text;
                    obj = new OracleDataAdapter(cmd);
                    obj.Fill(Ds);
                    conn.Close();
                    return Ds.Tables[0];

                }
                catch (Exception ex)
                {
                    throw new Exception(ex.Message.ToString() + "qry:" + strsql);
                }
            }
            public DataTable AddtableSP(string strsql)
            {
                try
                {
                    if (conn.State == ConnectionState.Open)
                    {
                        conn.Close();
                        cmd.Dispose();
                    }
                    conn.Open();
                    DataSet Ds = new DataSet();
                    cmd.Connection = conn;
                    cmd.CommandText = strsql;
                    cmd.CommandTimeout = 4000;
                    cmd.CommandType = CommandType.StoredProcedure;
                    obj = new OracleDataAdapter(cmd);
                    obj.Fill(Ds);
                    conn.Close();
                    return Ds.Tables[0];

                }
                catch (Exception ex)
                {
                    throw new Exception(ex.Message.ToString() + "qry:" + strsql);
                }
            }
            //public void AddParameters(String Field, object Value, OracleDbType datatype)
            //{
            //    OracleParameter parm = new OracleParameter();
            //    //  OracleParameter parm = new OracleParameter();
            //    try
            //    {

            //        switch (datatype.ToString())
            //        {
            //            case "SmallDateTime":
            //                parm = new OracleParameter(Field, OracleDbType.Date);
            //                break;

            //            case "Int":
            //                parm = new OracleParameter(Field, OracleDbType.Int32);
            //                break;
            //            case "BigInt":
            //                parm = new OracleParameter(Field, OracleDbType.Int64);
            //                break;
            //            case "SmallInt":
            //                parm = new OracleParameter(Field, OracleDbType.Int16);
            //                break;
            //            case "DateTime":
            //                parm = new OracleParameter(Field, OracleDbType);
            //                break;
            //            case "Float":
            //                parm = new OracleParameter(Field, OracleDbType.Float);
            //                break;
            //            case "NVarChar":
            //                parm = new OracleParameter(Field, OracleDbType.NVarChar);
            //                break;
            //            case "VarChar":
            //                parm = new OracleParameter(Field, OracleDbType.VarChar);
            //                break;

            //        }
            //        parm.Value = Value;

            //        cmd.Parameters.Add(parm);
            //    }
            //    catch (Exception ex)
            //    {
            //        throw new Exception(ex.Message.ToString());
            //    }
            //}

            //public void AddParameters(String Field, object Value, OracleDbType datatype, int strLength)
            //{
            //    OracleParameter parm = new OracleParameter();
            //    try
            //    {
            //        switch (datatype.ToString())
            //        {
            //            case "VarChar":
            //                parm = new OracleParameter(Field, OracleDbType.VarChar, strLength);
            //                break;
            //            case "Char":
            //                parm = new OracleParameter(Field, OracleDbType.Char, strLength);
            //                break;
            //            case "Decimal":
            //                parm = new OracleParameter(Field, OracleDbType.Decimal, strLength);
            //                break;
            //            case "BigInt":
            //                parm = new OracleParameter(Field, OracleDbType.BigInt, strLength);
            //                break;
            //            case "Bit":
            //                parm = new OracleParameter(Field, OracleDbType.Bit, strLength);
            //                break;
            //            case "Int":
            //                parm = new OracleParameter(Field, OracleDbType.Int, strLength);
            //                break;
            //            case "TinyInt":
            //                parm = new OracleParameter(Field, OracleDbType.TinyInt, strLength);
            //                break;
            //            case "NVarChar":
            //                parm = new OracleParameter(Field, OracleDbType.NVarChar, strLength);
            //                break;
            //            case "DateTime":
            //                parm = new OracleParameter(Field, OracleDbType.DateTime, strLength);
            //                break;

            //        }
            //        parm.Value = Value;

            //        cmd.Parameters.Add(parm);
            //    }
            //    catch (Exception ex)
            //    {
            //        throw new Exception(ex.Message.ToString());
            //    }
            //}
            public void ClearParameters()
            {
                try
                {
                    cmd.Parameters.Clear();
                }
                catch (Exception ex)
                {
                    throw new Exception(ex.Message.ToString());
                }
            }

            public string DD2MM(string str)
            {
                try
                {
                    char[] cSplit = { '/' };
                    string[] aDate = str.Split(cSplit);
                    return aDate[1] + "/" + aDate[0] + "/" + aDate[2];
                }
                catch (Exception err)
                {
                    throw new Exception(err.Message.ToString());
                }
            }

            public Int32 GetScalarValue(String sSql)
            {
                try
                {
                    Object i;
                    cmd.Connection = conn;
                    cmd.CommandText = sSql;
                    cmd.CommandType = CommandType.Text;
                    if (conn.State == ConnectionState.Closed)
                    {
                        conn.Open();
                    }
                    i = (Object)cmd.ExecuteScalar();
                    conn.Close();
                    if (i.ToString() != "")
                    {
                        return Convert.ToInt32(i.ToString());
                    }
                    else
                    {
                        return 0;
                    }

                }
                catch (Exception ex)
                {
                    conn.Close();
                    throw new Exception(ex.Message.ToString() + "qry:" + "sSql");
                }
            }
            public string GetOneColumn(String sSql)
            {
                try
                {
                    if (conn.State == ConnectionState.Open)
                    {
                        conn.Close();
                    }
                    Object i;
                    cmd.Connection = conn;
                    cmd.CommandText = sSql;
                    cmd.CommandTimeout = 20000;
                    cmd.CommandType = CommandType.Text;

                    conn.Open();
                    i = (Object)cmd.ExecuteScalar();
                    conn.Close();
                    if (Convert.ToString(i) != "")
                    {
                        return i.ToString();
                    }
                    else
                    {
                        return "Null";
                    }

                }
                catch (Exception ex)
                {
                    conn.Close();
                    throw new Exception(ex.Message.ToString() + "qry:" + "sSql");
                }
            }
            public string GetOneColumnSP(String sSql)
            {
                try
                {
                    if (conn.State == ConnectionState.Open)
                    {
                        conn.Close();
                    }
                    Object i;
                    cmd.Connection = conn;
                    cmd.CommandText = sSql;

                    cmd.CommandType = CommandType.StoredProcedure;

                    conn.Open();
                    i = (Object)cmd.ExecuteScalar();
                    conn.Close();
                    if (i.ToString() != "")
                    {
                        return i.ToString();
                    }
                    else
                    {
                        return "Null";
                    }

                }
                catch (Exception ex)
                {
                    conn.Close();
                    throw new Exception(ex.Message.ToString() + "qry:" + "sSql");
                }
            }
            public Int32 MAX_NO(string SQL)
            {
                Int32 MSgID = 0;
                DbCon_SQL ObjdbTemp = new DbCon_SQL();
                //string SQL = "select Max(substring(SURVEYOR_CD,6,9)) from BLO_Entry_Master";
                MSgID = ObjdbTemp.GetScalarValue(SQL);

                if (MSgID.ToString() != "0")
                {

                    return MSgID = MSgID + 1;
                }
                else
                {
                    return MSgID = 1;
                }
            }

            public String GetSytemDateStr(String sSql)
            {
                try
                {
                    if (conn.State == ConnectionState.Open)
                    {
                        conn.Close();
                    }
                    String i;
                    cmd.Connection = conn;
                    cmd.CommandText = sSql;
                    cmd.CommandTimeout = 20000;
                    cmd.CommandType = CommandType.Text;

                    conn.Open();
                    i = (String)cmd.ExecuteScalar();
                    conn.Close();
                    //if (i.ToString() != "")
                    //{
                    //    return i;
                    //}
                    //else
                    //{
                    //    return "Null";
                    //}
                    return i;
                }
                catch (Exception ex)
                {
                    conn.Close();
                    throw new Exception(ex.Message.ToString() + "qry:" + "sSql");
                }
            }
            public static bool isNumeric(string val, System.Globalization.NumberStyles NumberStyle)
            {
                Int64 result;
                return Int64.TryParse(val, NumberStyle, System.Globalization.CultureInfo.CurrentCulture, out result);
            }


            //-------------------------By SKS
            public int cmd_nonqueryWithReturn(string strsql)
            {
                try
                {
                    if (conn.State == ConnectionState.Open)
                    {
                        conn.Close();
                    }
                    cmd.Connection = conn;
                    cmd.CommandText = strsql;
                    cmd.CommandTimeout = 4000;
                    cmd.CommandType = CommandType.StoredProcedure;
                    conn.Open();
                    int value = (int)cmd.ExecuteNonQuery();
                    conn.Close();
                    return value;
                }
                catch (Exception ex)
                {
                    conn.Close();
                    throw new Exception(ex.Message.ToString() + "qry:" + strsql);
                }
            }

            public object Get_ScalarValueSP(String sSql)
            {
                try
                {
                    if (conn.State == ConnectionState.Open)
                    {
                        conn.Close();
                    }
                    Object i;
                    cmd.Connection = conn;
                    cmd.CommandText = sSql;

                    cmd.CommandType = CommandType.StoredProcedure;

                    conn.Open();
                    i = (Object)cmd.ExecuteScalar();
                    conn.Close();
                    if (i.ToString() != "")
                    {
                        return i;
                    }
                    else
                    {
                        return "000,000,000";
                    }

                }
                catch (Exception ex)
                {
                    conn.Close();
                    throw new Exception(ex.Message.ToString() + "qry:" + "sSql");
                }
            }
        }
    }
}
