var additionalUrl = '/demoAtishayOnline';
//var additionalUrl = '';

//Get Partner Transaction Data   eg Retailer Or Distributor and Create View Of Grid
function GetVendorTransactionLedger() {
    debugger;
    $.ajax({
        url: additionalUrl + '/Vendor/GetVendorTransaction',
        type: "GET",
        dataType: "JSON",
        success: function (Data) {
            $("#datatable1 tbody tr").remove();
            debugger;
            $.each(Data.LstRecharge, function (i, item) {
                debugger;
                var btncomplain = "<button type='button' id='btn" + item.TransactionID + "' class='btn btn-info btn-xs' value=btn" + item.TransactionID + " onclick='Showmodal(this)'><i class='fa fa-edit'> Edit</i></button>";
                var lblTransStatus = '';
                var lblMobileNumber = "<label id='lblmn" + item.TransactionID + "'>" + item.MobileNumber + "<label>";
                var lblAmount = "<label id='lblamt" + item.TransactionID + "'>" + item.Amount + "<label>";
                if (item.TransStatus == 'Pending') {
                    lblTransStatus = "<lable class=text-warning>" + item.TransStatus + "<label><div class=panel-body whirl ringed>";
                }
                else if (item.TransStatus == 'Success') {
                    lblTransStatus = "<lable class=text-success>" + item.TransStatus + "<label>";
                }
                else if (item.TransStatus == 'Failed') {
                    lblTransStatus = "<lable class=text-danger>" + item.TransStatus + "<label>";
                }



                var rows = "<tr>"
              + "<td hidden>" + item.TransactionID + "</td>"
              + "<td>" + item.Date + "</td>"
              + "<td>" + item.OperatorName + "</td>"
              + "<td>" + lblMobileNumber + "</td>"
              + "<td>" + lblAmount + "</td>"
              + "<td>" + lblTransStatus + "</td>"
              + "<td>" + btncomplain + "</td>"
              + "</tr>";
                $('#datatable1 tbody').append(rows);
            });
        },
    });


};

//Get Partner Transaction Data On Load
$(document).ready(function () {
    $(function () {
        $("#divdesc").hide();
        GetVendorTransactionLedger();
    });

});


//Showmodal For Complaint
function Showmodal(Value) {
    debugger;
    var TransactionID = $(Value).val();
    TransactionID = TransactionID.replace("btn", "");

    $("#lbltrid").html(TransactionID);
    $('#ComplainModal').modal('show');

};


//UpdateComplaint For Complaint
function UpdateComplaint(Value) {
    debugger;
    $("#rfvcmp").remove();
    $("#rfvtxtcmp").remove();
    var val = $(Value).val();
    var Complaintdesc = $('#Complaint').val();
    if (val == 'Reject') {
        $('#ComplainModal').modal('hide');
    }
    else {
        if (Complaintdesc == '') {
            $("#divdesc").after('<div id=rfvcmp class="text-danger">Select Complaint Type</div>');
        }
        else if (Complaintdesc == '2') {
            Complaintdesc = $('#txtComplaint').val();
            if (Complaintdesc == '') {
                $("#divdesc").after('<div id=rfvtxtcmp class="text-danger">Enter Complaint Description</div>');
            }
        }
    }
}




$('#Complaint').change(function () {
    debugger;
    $("#rfvcmp").remove();
    $("#rfvtxtcmp").remove();
    var dropdownval = $('#Complaint').val();
    if (dropdownval == '2') {
        $("#divdesc").show();
    }
    else {
        $("#divdesc").hide();
    }
});