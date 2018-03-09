//Update DefaultCommission
//To Get Default Commission By Partner Type eg. Retailer or Distributor

var additionalUrl = '/demoAtishayOnline';
//var additionalUrl = '';
$('#PartnerType').change(function () {
    var RoleID = $('#PartnerType').val();
    var OP = $('#OperatorName').val();
    $.ajax({
        url: additionalUrl+ '/Vendor/GetDefaultCommission',
        type: "GET",
        dataType: "JSON",
        data: { RoleID: RoleID, OP: OP },
        success: function (Data) {
            $('#Commission').val(Data.Details.Commission);
        }
    });
});


$('#OperatorName').change(function () {
    $('#PartnerType').val("");
});


//Update Commission
//Get All Partner By Type eg Retailer Or Distributor and Create View Of Grid
function GetPartnerDetailsByType(Value) {
    $('#tdAtishayVendorID').show();
    $('#PartnerName').text("Full Name");
    $('#lblname').hide();
    $('#lblallmargininfo').hide();

    var PartnerType = "";
    if ($("#Retailer").is(':checked')) {
        PartnerType = "Retailer";
    }
    else if ($("#Distributor").is(':checked')) {
        PartnerType = "Distributor";
    }
    var ServiceType = $(Value).val();
    if (ServiceType == "PrePaid") {
        $("#DTH").prop("checked", false)
        $("#PostPaid").prop("checked", false)
        $("#PVC").prop("checked", false)

    }
    else if (ServiceType == "DTH") {
        $("#PrePaid").prop("checked", false)
        $("#PostPaid").prop("checked", false)
        $("#PVC").prop("checked", false)
    }
    else if (ServiceType == "PostPaid") {
        $("#DTH").prop("checked", false)
        $("#PrePaid").prop("checked", false)
        $("#PVC").prop("checked", false)
    }

    else if (ServiceType == "PVC") {
        $("#DTH").prop("checked", false)
        $("#PrePaid").prop("checked", false)
        $("#PostPaid").prop("checked", false)

    }

    if ($(Value).is(':checked')) {
        var optionhtml1 = "";
        $.ajax({
            url: additionalUrl + '/Vendor/GetOperatorByServiceType',
            type: "GET",
            dataType: "JSON",
            data: { ServiceType: ServiceType },
            success: function (Data) {
                debugger;

                optionhtml1 = '<option value="0">' + "--Select Operator--" + '</option>';
                $.each(Data.Lst, function (i, item) {
                    optionhtml1 = optionhtml1 + '<option value="' + item.ListValue + '">' + item.ListValue + '</option>';
                });
            },
        });
        debugger;
        optionhtml1 = optionhtml1;

        $.ajax({
            url: additionalUrl + '/Vendor/GetPartnerByType',
            type: "GET",
            dataType: "JSON",
            data: { ServiceType: ServiceType, PartnerType: PartnerType },
            success: function (Data) {
                $("#datatable1 tbody tr").remove();
                var items = '';
                var ddID = '';
                var txt = '';
                var Editbtnid = '';
                var Updatebtnid = '';
                var FirstData = Data;
                debugger;
                $.each(FirstData.Lst, function (i, item) {
                    ddID = 'dd' + item.AtishayVendorID;
                    txt = 'txt' + item.AtishayVendorID;
                    Editbtnid = 'Editbtn' + item.AtishayVendorID;
                    Updatebtnid = 'Updatebtn' + item.AtishayVendorID;

                    var OperatorNameDD = "<select id='" + ddID + "'class='form-control' style='width:200px;' onchange='GetAssignedMarginByName(this)'></select>"
                    var Margin = "<div id='Control" + item.AtishayVendorID + "' class='input-group' style='width:200px;'><input id='" + txt + "' type='text' class='form-control'  /><div class='input-group-btn'><button id='" + Editbtnid + "' value='" + Editbtnid + "' onclick='ChangebtnText(this)' type='button' data-toggle='dropdown' class='btn btn-default'>Edit</button><button id='" + Updatebtnid + "' value='" + Updatebtnid + "'  onclick='ChangebtnText(this)' type='button' data-toggle='dropdown' class='btn btn-default hidden'>Update</button> </div> </div>"
                    if (ServiceType == "PrePaid" || ServiceType == "DTH") {
                        $("#comorsur").text("Commission");

                        var rows = "<tr>"
                       + "<td>" + item.AtishayVendorID + "</td>"
                       + "<td>" + item.FullName + "</td>"
                     + "<td>" + item.OperatorCount + "</td>"
                       + "<td>" + OperatorNameDD + "</td>"
                        + "<td>" + Margin + "</td>"
                        + "</tr>";
                        $('#datatable1 tbody').append(rows);
                        $("#" + ddID).append(optionhtml1);
                    }

                    else {
                        $("#comorsur").text("Surcharge");

                        var rows = "<tr>"
                      + "<td>" + item.AtishayVendorID + "</td>"
                      + "<td>" + item.FullName + "</td>"
                      + "<td>" + item.OperatorCount + "</td>"
                      + "<td>" + OperatorNameDD + "</td>"
                      + "<td>" + Margin + "</td>"
                       + "</tr>";
                        $('#datatable1 tbody').append(rows);
                        $("#" + ddID).append(optionhtml1);
                    }
                    $("#" + txt).attr("disabled", true);
                });
            },
        });
    }
    else {


        $("#datatable1 tbody tr").remove();
    }
};

//To Switch Radio Slider On Or Off if First One Selected Disable Second
function SwitchPartnerType(Value) {
    $("#btnUpdateAll").hide();
    $("#datatable1 tbody tr").remove();
    if ($(Value).is(':checked')) {
        $("#mainDiv").show();
        var Type = $(Value).val();
        if (Type == "Distributor") {
            $("#Retailer").prop("checked", false)

        }
        else if (Type == "Retailer") {
            $("#Distributor").prop("checked", false)
        }

        if ($("#PrePaid").is(':checked')) {

            GetPartnerDetailsByType($("#PrePaid"));
        }
        else if ($("#DTH").is(':checked')) {

            GetPartnerDetailsByType($("#DTH"));
        }
        else if ($("#PostPaid").is(':checked')) {

            GetPartnerDetailsByType($("#PostPaid"));
        }

    }
    else {
        $("#mainDiv").hide();
    }

};



//To Enable Or Disable Button Inside Grid For Update Or Edit
function ChangebtnText(Value) {
    debugger;
    var PartnerName = $("#PartnerName").text();
    if (PartnerName != 'We Get' && PartnerName != 'AtishayVendorID') {
        var ValueText = $(Value).val();
        var AtishayVendorID = ValueText;
        AtishayVendorID = AtishayVendorID.replace("Editbtn", "");
        AtishayVendorID = AtishayVendorID.replace("Updatebtn", "");
        if (ValueText.indexOf('Edit') > -1) {
            $(Value).hide();
            $("#Updatebtn" + AtishayVendorID).show();
            $("#Updatebtn" + AtishayVendorID).removeClass("hidden");
            $("#txt" + AtishayVendorID).attr("disabled", false);

        }
        else if (ValueText.indexOf('Update') > -1) {
            UpdateCommission($(Value));
            $(Value).hide();
            $("#Editbtn" + AtishayVendorID).show();
            $("#txt" + AtishayVendorID).attr("disabled", true);

        }
    }
    else {
        var ValueText = $(Value).attr('id');


        if (ValueText.indexOf('Edit') > -1) {
            RowID = ValueText.replace("Editbtn", "");
            $(Value).hide();
            $("#Updatebtn" + RowID).show();
            $("#Updatebtn" + RowID).removeClass("hidden");
            $("#txt" + RowID).attr("disabled", false);

        }
        else if (ValueText.indexOf('Update') > -1) {
            RowID = ValueText.replace("Updatebtn", "");
            UpdateCommissionIndividual($(Value));
            $(Value).hide();
            $("#Editbtn" + RowID).show();
            $("#txt" + RowID).attr("disabled", true);

        }
    }

};




//Get Partners Assigned Commission Or Surcharge 
function GetAssignedMarginByName(Value) {
    debugger;
    var ServiceType = '';
    var OperatorName = $(Value).val();
    var AtishayVendorID = $(Value).attr('id');
    AtishayVendorID = AtishayVendorID.replace("dd", "");

    if ($("#PrePaid").is(':checked')) {

        ServiceType = 'PrePaid';
    }
    else if ($("#DTH").is(':checked')) {

        ServiceType = 'DTH';
    }
    else if ($("#PostPaid").is(':checked')) {
        ServiceType = 'PostPaid';

    }
    else if ($("#PVC").is(':checked')) {
        ServiceType = 'PVC';

    }
    $.ajax({
        url: additionalUrl + '/Vendor/GetAssignedMarginByName',
        type: "GET",
        dataType: "JSON",
        data: { AtishayVendorID: AtishayVendorID, OperatorName: OperatorName, ServiceType: ServiceType },
        success: function (Data) {
            debugger;
            if (ServiceType != 'PostPaid' && ServiceType != 'PVC') {
                $('#txt' + AtishayVendorID).val('' + Data.Details.DefaultCommission);
            }
            else {
                $('#txt' + AtishayVendorID).val('' + Data.Details.DefaultSurcharge);
            }

        }
    });
};

//Update Partrner Commission Or Surcharge 
function UpdateCommission(Value) {
    debugger;
    $("#AtishayVendorID").show();
    var AtishayVendorID = $(Value).val();
    var OperatorName = '';
    var PartnerName = $("#PartnerName").text();
    AtishayVendorID = AtishayVendorID.replace("Editbtn", "");
    AtishayVendorID = AtishayVendorID.replace("Updatebtn", "");
    var Margin = $("#txt" + AtishayVendorID).val();
    if (PartnerName == 'We Get') {

        OperatorName = $("#op" + AtishayVendorID).html();
    }
    else {


        OperatorName = $("#dd" + AtishayVendorID).val();


    }

    $("#rfvop").remove();
    $("#rfvmag").remove();
    if (OperatorName == '0' && Margin == '') {
        $("#dd" + AtishayVendorID).after('<div id=rfvop class="text-danger">Select Operator</div>');
        $("#Control" + AtishayVendorID).after('<div id=rfvmag class="text-danger">Enter Some Amount</div>');
    }
    else if (OperatorName == '0') {
        $("#dd" + AtishayVendorID).after('<div id=rfvop class="text-danger">Select Operator</div>');
    }
    else if (Margin == '') {
        $("#Control" + AtishayVendorID).after('<div id=rfvmag class="text-danger">Enter Some Amount</div>');
    }
    else if (confirm('Are You Sure')) {

        var UpdateType = 'Update';
        var ServiceType = ''

        if ($("#PrePaid").is(':checked')) {
            ServiceType = 'PrePaid';
        }
        else if ($("#DTH").is(':checked')) {
            ServiceType = 'DTH';
        }
        else if ($("#PostPaid").is(':checked')) {
            ServiceType = 'PostPaid';
        }
        else if ($("#PVC").is(':checked')) {
            ServiceType = 'PVC';
        }

        $.ajax({
            url: additionalUrl + '/Vendor/UpdateVendorCommission',
            type: "GET",
            dataType: "JSON",
            data: { UpdateType: UpdateType, OperatorName: OperatorName, ServiceType: ServiceType, AtishayVendorID: AtishayVendorID, Margin: Margin },
            success: function (Data) {
                debugger;
                swal({

                    title: 'Status Changed',
                    text: Data.message,
                    type: Data.type
                });


                if ($("#PrePaid").is(':checked')) {

                    GetPartnerDetailsByType($("#PrePaid"));
                }
                else if ($("#DTH").is(':checked')) {

                    GetPartnerDetailsByType($("#DTH"));
                }
                else if ($("#PostPaid").is(':checked')) {

                    GetPartnerDetailsByType($("#PostPaid"));
                }
            }
        });

    }
};


//To Switch Radio Slider On Or Off if First One Selected Disable Second
function SetRadioButton(Value) {
    debugger;

    var Type = $(Value).val();
    if ($(Value).is(':checked')) {
        if (Type == "mlDistributor") {
            $("#mlRetailer").prop("checked", false)

            $("#serviceType").show();
        }
        else if (Type == "mlRetailer") {
            $("#mlDistributor").prop("checked", false)
            $("#serviceType").show();
        }

    }
    else {
        $("#serviceType").hide();
    }
};

//Get All Operator Names By Service Type
function GetOperatorNameByServiceType(Value) {
    debugger;
    var ServiceType = '';
    if ($("#mlPrePaid").is(':checked')) {

        ServiceType = 'PrePaid';
    }
    else if ($("ml#DTH").is(':checked')) {

        ServiceType = 'DTH';
    }
    else if ($("#mlPostPaid").is(':checked')) {
        ServiceType = 'PostPaid';

    }
    if ($(Value).is(':checked')) {
        $("#inputcontrol").show();
    }
    else {
        $("#inputcontrol").hide();
    }
    debugger;
    $.ajax({
        url: additionalUrl + '/Vendor/GetOperatorByServiceType',
        type: "GET",
        dataType: "JSON",
        data: { ServiceType: ServiceType },
        success: function (Data) {
            debugger;
            $.each(Data.Lst, function (i, Operator) {
                $('#OpName').append($('<option>', {
                    value: Operator.ListValue,
                    text: Operator.ListKeyStr
                }));
            });
        },
    });

};

//Update All Partners Commission By Partner Type and Operator
$('#btnupdate').click(function () {
    var RoleID = '';
    var ServiceType = '';
    var Flag = ''
    debugger;
    $("#rfvop").remove();
    $("#rfvmag").remove();
    var OperatorName = $("#OpName").val();
    var Margin = $("#com").val();
    if (OperatorName == '0' || OperatorName == '') {
        $("#OpName").after('<div id=rfvop class="text-danger">Select Operator</div>');
        Flag = '1';
    }

    if (Margin == '') {
        $("#com").after('<div id=rfvmag class="text-danger">Enter Some Amount</div>');
        Flag = '1';
    }

    if (Flag == '1') {
        return false;
    }
    else {
        if (confirm('Are You Sure')) {
            if ($("#mlPrePaid").is(':checked')) {

                ServiceType = 'PrePaid';
            }
            else if ($("ml#DTH").is(':checked')) {

                ServiceType = 'DTH';
            }
            else if ($("#mlPostPaid").is(':checked')) {
                ServiceType = 'PostPaid';

            }
            if ($("#mlDistributor").is(':checked')) {
                RoleID = '5000'
            }

            else if ($("#mlRetailer").is(':checked')) {
                RoleID = '6000'
            }
            $.ajax({
                url: additionalUrl + '/Vendor/UpgradePartnerMargin',
                type: "GET",
                dataType: "JSON",
                data: { RoleID: RoleID, ServiceType: ServiceType, OperatorName: OperatorName, Margin: Margin },
                success: function (Data) {

                    debugger;
                    swal({

                        title: 'Status Changed',
                        text: Data.message,
                        type: Data.type
                    });
                    $("#Close").click();
                    ResetModal();

                }
            });
        }
    }
});



//Reset Modal After Update All Partner's Commission and Margin
function ResetModal() {
    debugger;
    var opname = '';
    $("#serviceType").hide();
    $("#inputcontrol").hide();

    $("#mlRetailer").prop("checked", false)
    $("#mlDistributor").prop("checked", false)

    $("#mlPrePaid").prop("checked", false)

    $("#mlDTH").prop("checked", false)
    $("#mlPostPaid").prop("checked", false)


    if ($("#mlPrePaid").is(':checked')) {

        opname = 'mlPrePaid';
    }
    else if ($("#mlDTH").is(':checked')) {

        opname = 'mlDTH';
    }
    else if ($("#mlPostPaid").is(':checked')) {
        opname = 'mlPostPaid';

    }
    $("#com").val('');
}
//End



//Search By PartnerName
function SearchByName() {
    debugger;
    var text = $("#txtSearch").val();
    if (text == '') {
        Messenger.options = {
            extraClasses: 'messenger-fixed messenger-on-top messenger-on-right',
            theme: 'future'
        }
        Messenger().post({
            message: 'Please Enter Search Value',
            type: 'error',
            showCloseButton: true
        });
    }
    else {
        var ServiceType = '';
        if ($("#PrePaid").is(':checked')) {

            ServiceType = 'PrePaid';
        }
        else if ($("#DTH").is(':checked')) {

            ServiceType = 'DTH';
        }
        else if ($("#PostPaid").is(':checked')) {
            ServiceType = 'PostPaid';

        }
        else if ($("#PVC").is(':checked')) {
            ServiceType = 'PVC';

        }
        if (ServiceType == '') {

            $("#btnAll").hide();
            Messenger.options = {
                extraClasses: 'messenger-fixed messenger-on-top messenger-on-right',
                theme: 'future'
            }
            Messenger().post({
                message: 'Please Select ServiceType',
                type: 'error',
                showCloseButton: true
            });

        }
        else {
            $("#btnAll").removeClass("hidden");
            $("#btnAll").show();


            debugger;
            var RoleID = ''
            var PartnerName = '';

            PartnerName = $("#txtSearch").val();
            if ($("#Distributor").is(':checked')) {

                RoleID = '5000';
            }
            else if ($("#Retailer").is(':checked')) {

                RoleID = '6000';
            }

            $("#lblname").html("");
            debugger;

            $.ajax({

                url: additionalUrl + '/Vendor/SearchByPartnerName',
                type: "GET",
                dataType: "JSON",
                data: { RoleID: RoleID, PartnerName: PartnerName },
                success: function (Data) {
                    debugger;
                    if (Data.Details.length == 0) {
                        Messenger.options = {
                            extraClasses: 'messenger-fixed messenger-on-top messenger-on-right',
                            theme: 'future'
                        }
                        Messenger().post({
                            message: 'No Partner Found',
                            type: 'error',
                            showCloseButton: true
                        });
                    }
                    else {

                        $('#SerachListModal').modal('show');
                        $("#datatable2 tbody tr").remove();
                        debugger;
                        $.each(Data.Details, function (i, item) {
                            debugger;
                            var btnAtishayVendorID = "<button type='button' id='" + item.AtishayVendorID + "' value='" + item.FullName + "' onclick='GetPartnercommissionByVendorID(this)' class='btn btn-link'>" + item.AtishayVendorID + "</button>"

                            var rows = "<tr>"
                           + "<td>" + btnAtishayVendorID + "</td>"
                           + "<td>" + item.FullName + "</td>"
                           + "<td>" + item.OperatorCount + "</td>"
                           + "<td>" + item.CompanyCity + "</td>"
                            + "<td>" + item.State + "</td>"
                            + "</tr>";
                            $('#datatable2 tbody').append(rows);

                        });
                    }
                }

            });
        }
    }
};

//GetPartner All Service Type Commission By VendorID
function GetPartnercommissionByVendorID(val) {
    debugger;
    $("#btnUpdateAll").show();
    var AtishayVendorID = $(val).attr('id');
    var RowID = parseInt("1", 10);
    var ServiceType = '';
    if ($("#PrePaid").is(':checked')) {

        ServiceType = 'PrePaid';
    }
    else if ($("#DTH").is(':checked')) {

        ServiceType = 'DTH';
    }
    else if ($("#PostPaid").is(':checked')) {
        ServiceType = 'PostPaid';

    }
    else if ($("#PVC").is(':checked')) {
        ServiceType = 'PVC';

    }

    debugger;


    $.ajax({
        url: additionalUrl + '/Vendor/GetPartnercommissionByVendorID',
        type: "GET",
        dataType: "JSON",
        data: { AtishayVendorID: AtishayVendorID, ServiceType: ServiceType },
        success: function (Data) {
            $("#datatable1 tbody tr").remove();
            debugger;
            $.each(Data.Details, function (i, item) {
                debugger;
                $("#lblallmargininfo").show();
                $("#lblname").show();

                var txt = 'txt' + RowID;
                var Editbtnid = 'Editbtn' + RowID;
                var Updatebtnid = 'Updatebtn' + RowID;
                var txt = 'txt' + RowID;
                var lblAtishayVendorID = "<label  id='" + "vendor" + RowID + "'>" + AtishayVendorID + "</label>"
                var Margin = "<div id='" + "Control" + RowID + "'  class='input-group' style='width:200px;'><input id='" + txt + "' disabled type='text' class='form-control' value='" + item.Commission + "' /><div class='input-group-btn'><button id='" + Editbtnid + "' value='" + AtishayVendorID + "' onclick='ChangebtnText(this)' type='button' data-toggle='dropdown' class='btn btn-default'>Edit</button><button id='" + Updatebtnid + "' value='" + AtishayVendorID + "'  onclick='ChangebtnText(this)' type='button' data-toggle='dropdown' class='btn btn-default hidden'>Update</button> </div> </div>"
                var OperatorName = "<label  id='" + "op" + RowID + "'>" + item.OperatorName + "</label>"

                if (ServiceType == 'PVC') {
                    $("#PartnerName").text("AtishayVendorID");
                }
                else {
                    $("#PartnerName").text("We Get");
                }

                $("#lblname").html("AtishayVendorID: " + AtishayVendorID + " Person Name: " + $(val).val());
                if (ServiceType == "PrePaid" || ServiceType == "DTH") {
                    $("#comorsur").text("Commission");


                }
                else {
                    $("#comorsur").text("Surcharge");
                }
                var rows = "<tr>"
              + "<td style='display:none;'>" + lblAtishayVendorID + "</td>"
                   + "<td>" + item.AllMargin + "</td>"
                   + "<td>" + OperatorName + "</td>"
                   + "<td>" + Margin + "</td>"
                + "</tr>";

                $('#tdAtishayVendorID').hide();

                RowID = parseInt(RowID, 10) + 1;
                $('#datatable1 tbody').append(rows);
                $('#SerachListModal').modal('hide');
            });
        }
    });


};


$('.confirmDeActivate').on('click', function (e) {
    var href = this.href;
    e.preventDefault();
    swal({
        title: "Are you sure?",
        text: "You want to Deactive the Vendor.",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, I am Sure!",
        cancelButtonText: "No, Cancel please!",
        closeOnConfirm: false,
        closeOnCancel: false
    }, function (isConfirm) {
        if (isConfirm) {
            debugger;
            window.location.href = href
        } else {
            swal("Cancelled", "");
        }
    });
});


//Update Partrner Commission Or Surcharge 
function UpdateCommissionIndividual(Value) {
    debugger;
    var ID = $(Value).val();
    if (ID == 'btnUpdateAll') {
        debugger;


        var result = ''
        var Count = '0';
        var table =
        Count = $('#datatable1 tr').length;


        for (i = 1; i < Count ; i++) {


            var AtishayVendorID = $("#vendor" + i).html();
            debugger;
            var OperatorName = '';
            var PartnerName = $("#PartnerName").text();
            RowID = 1;
            var Margin = $("#txt" + i).val();

            OperatorName = $("#op" + i).html();


            $("#rfvop").remove();
            $("#rfvmag").remove();

            if (Margin == '') {

                $("#Control" + i).after('<div id=rfvmag class="text-danger">Enter Some Amount</div>');
            }

            var UpdateType = 'Update';
            var ServiceType = ''

            if ($("#PrePaid").is(':checked')) {
                ServiceType = 'PrePaid';
            }
            else if ($("#DTH").is(':checked')) {
                ServiceType = 'DTH';
            }
            else if ($("#PostPaid").is(':checked')) {
                ServiceType = 'PostPaid';
            }


            $.ajax({
                url: additionalUrl + '/Vendor/UpdateVendorCommission',
                type: "GET",
                dataType: "JSON",
                data: { UpdateType: UpdateType, OperatorName: OperatorName, ServiceType: ServiceType, AtishayVendorID: AtishayVendorID, Margin: Margin },
                success: function (Data) {
                    //debugger;
                    //swal({

                    //    title: 'Status Changed',
                    //    text: Data.message,
                    //    type: Data.type
                    //});


                    if ($("#PrePaid").is(':checked')) {

                        GetPartnerDetailsByType($("#PrePaid"));
                    }
                    else if ($("#DTH").is(':checked')) {

                        GetPartnerDetailsByType($("#DTH"));
                    }
                    else if ($("#PostPaid").is(':checked')) {

                        GetPartnerDetailsByType($("#PostPaid"));
                    }

                }
            });
        }

    }
    else {
        debugger;
        if (confirm('Are You Sure')) {

            debugger;
            var RowID = '';
            var AtishayVendorID = $(Value).val();
            var OperatorName = '';
            var PartnerName = $("#PartnerName").text();
            RowID = $(Value).attr('id');
            RowID = RowID.replace("Updatebtn", "");
            var Margin = $("#txt" + RowID).val();


            OperatorName = $("#op" + RowID).html();


            $("#rfvop").remove();
            $("#rfvmag").remove();

            if (Margin == '') {

                $("#Control" + RowID).after('<div id=rfvmag class="text-danger">Enter Some Amount</div>');
            }

            var UpdateType = 'Update';
            var ServiceType = ''

            if ($("#PrePaid").is(':checked')) {
                ServiceType = 'PrePaid';
            }
            else if ($("#DTH").is(':checked')) {
                ServiceType = 'DTH';
            }
            else if ($("#PostPaid").is(':checked')) {
                ServiceType = 'PostPaid';
            }
            else if ($("#PVC").is(':checked')) {
                ServiceType = 'PVC';
            }

            $.ajax({
                url: additionalUrl + '/Vendor/UpdateVendorCommission',
                type: "GET",
                dataType: "JSON",
                data: { UpdateType: UpdateType, OperatorName: OperatorName, ServiceType: ServiceType, AtishayVendorID: AtishayVendorID, Margin: Margin },
                success: function (Data) {
                    debugger;
                    swal({

                        title: 'Status Changed',
                        text: Data.message,
                        type: Data.type
                    });


                    if ($("#PrePaid").is(':checked')) {

                        GetPartnerDetailsByType($("#PrePaid"));
                    }
                    else if ($("#DTH").is(':checked')) {

                        GetPartnerDetailsByType($("#DTH"));
                    }
                    else if ($("#PostPaid").is(':checked')) {

                        GetPartnerDetailsByType($("#PostPaid"));
                    }
                }
            });

        }
    }

};


//Update All Commission 
function UpdateALL(Value) {
    debugger;


    var result = ''
    var Count = '0';
    var table =
    Count = $('#datatable1 tr').length;
    var EmptyCount = '';


    for (i = 1; i < Count ; i++) {
        $("#rfvmag" + i).remove();
        var Margin = $("#txt" + i).val();
        if (Margin == '' || Margin == null) {
            $("#Control" + i).after('<div id=rfvmag' + i + ' class="text-danger">Enter Some Amount</div>');
            EmptyCount = "1";
        }



    }

    if (EmptyCount == "1") {
        return false;
    }
    else if (confirm('Are You Sure')) {
        UpdateCommissionIndividual($("#btnUpdateAll"));
        debugger;
        swal({
            title: 'Status Changed',
            text: 'All Operator Updated Successfully',
            type: 'success'
        });
    }
}

//Set OperatorName to hiiden field
$(document).ready(function () {
    debugger;
    //Script For Disable Filed 
    $(function () {
        debugger;
        var Operatorname = $("#ddlOperatorName").val();
        $("#OperatorName").val(Operatorname);
    });

});


$("#ddlOperatorName").change(function () {
    debugger;
    var Operatorname = $("#ddlOperatorName").val();
    $("#OperatorName").val(Operatorname);
});
//Get OperatorName and Cicle From MobileNumber  

$("#txtmobileNumber").keyup(function () {
    debugger;
    var MobileNumber = $('#txtmobileNumber').val();
    if (MobileNumber.length >= 4) {
        $.ajax({
            url: additionalUrl + '/Vendor/GetOperatorandCircleFromMobileNumber',
            type: "GET",
            dataType: "JSON",
            data: { MobileNumber: MobileNumber },
            success: function (Data) {
                if (Data.opBO.OperatorName == '' || Data.opBO.OperatorName == null) {
                    debugger;


                }
                else {
                    jQuery("#ddlOperatorName option").filter(function () {
                        return $.trim($(this).text()) == Data.opBO.OperatorName
                    }).prop('selected', true);
                    $('.selectpicker').selectpicker('val', Data.opBO.OperatorName);

                    $("#CicleID option[value='" + Data.opBO.State + "']").attr('selected', "selected");

                }
            }

        });
    }
    else {
        return false;
    }
});


//Switch Tab PrePaid or DTH 
function SwitchServiceTab(value) {
    debugger;
    var ServiceType = '';
    ServiceType = $(value).html();
    if (ServiceType == 'PrePaid') {
        $("#DTHTab").hide();
        $("#DthOperatorList").hide();

        $("#PrePaidTab").show();
        $("#PrePaidOperatorList").show();
    }
    else if (ServiceType == 'DTH') {
        $("#PrePaidTab").hide();
        $("#PrePaidOperatorList").hide();

        $("#DTHTab").show();
        $("#DthOperatorList").show();
    }

    else if (ServiceType == 'Mobile Payment') {
      

        $("#DivUtilityPayment").hide();
        $("#UtilityOperatorList").hide();
        $("#MobileOperatorList").show();
        $("#DivMobilePayment").show();
    }

    else if (ServiceType == 'Utility Payment') {
        $("#DivUtilityPayment").show();
        $("#MobileOperatorList").hide();
        $("#UtilityOperatorList").show();
        $("#DivMobilePayment").hide();
    }

    $("#ServiceProvider").val(value.innerHTML);
    if (value.innerHTML != 'CyberPlat') {
        document.getElementById('valurl').disabled = true;
    }
    else {
        document.getElementById('valurl').disabled = false;

    }
}



//btnrecharge Click Function validation 
function ValidateRechargeinput(value) {
    debugger;
    $("#rfvmb").remove();
    $("#rfvamt").remove();
    $("#rfvcrc").remove();
    if ($(value).attr('id') == 'btnprepaidrecharge') {
        var MobileNumber = $("#txtmobileNumber").val();
        var Amount = $("#prepaidamount").val();
        var Number = $("#txtmobileNumber").val.length;
        var Circle = $("#CicleID").val();
        if (MobileNumber == '' || Number > 10) {
            $("#txtmobileNumber").after('<div id=rfvmb class="text-danger">Invalid Mobile Number</div>');
        }
        if (Amount == '' || parseInt(Amount) <= 0) {
            $("#prepaidamount").after('<div id=rfvamt class="text-danger">Please check Amount</div>');
        }
        if (Circle == '') {
            $("#CicleID").after('<div id=rfvcrc class="text-danger">Please Select Circle</div>');
        }
    }
    else {
        $("#rfvmb").remove();
        $("#rfvamt").remove();
        $("#rfvcrc").remove();
    }

}


