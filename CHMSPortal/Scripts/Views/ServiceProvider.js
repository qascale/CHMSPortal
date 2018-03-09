
var additionalUrl = '/demoAtishayOnline';
//var additionalUrl = '';
//Add New Operator Javascript
$(document).ready(function () {

    //Script For Disable Filed 
    $(function () {
        $('#TransactionType').change(function () {
            var value = $(this).val();
            if (value == '1') {
                $('#Bank').attr('disabled', 'disabled');
                $('#utrno').attr('disabled', 'disabled');
            } else {
                $('#Bank').removeAttr('disabled');
                $('#utrno').removeAttr('disabled');
            }
        });
    });

});


function InsertchangeText(value) {
    debugger;
    $("#ServiceType").val("");
    $("#OperatorName").val("");
    $("#valurl").val("");
    $("#payurl").val("");
    $("#checkurl").val("");
    $("#defcom").val("");
    $("#defsc").val("");
    $("#mastertext").html(value.innerHTML);

    $("#ServiceProvider").val(value.innerHTML);
    if (value.innerHTML != 'CyberPlat') {
        document.getElementById('valurl').disabled = true;
    }
    else {
        document.getElementById('valurl').disabled = false;

    }
}
//End New Operator Jquery


//Edit Operator Jquery
function EditchangeText(value) {
    debugger;
    $("#ServiceType").val("");
    $("#OperatorName option").remove();
    $("#OperatorName").append('<option value=0>--Select Operator--</option>');
    $("#valurl").val("");
    $("#payurl").val("");
    $("#checkurl").val("");
    $("#defcom").val("");
    $("#defsc").val("");

    $("#mastertext").html(value.innerHTML);

    $("#ServiceProvider").val(value.innerHTML);
    if (value.innerHTML != 'CyberPlat') {
        document.getElementById('valurl').disabled = true;
    }
    else {
        document.getElementById('valurl').disabled = false;

    }
}

$('#ServiceType').change(function () {
    debugger;
    $("#OperatorName option").remove();
    $("#OperatorName").append('<option value=0>--Select Operator--</option>');
    var SP = $('#mastertext').html();
    var Type = $('#ServiceType').val();
    $.ajax({
        url: additionalUrl + '/ServiceProvider/GetOperatorNames',
       // url: '/ServiceProvider/GetOperatorNames',
        type: "GET",
        dataType: "JSON",
        data: { SP: SP, Type: Type },
        success: function (Data) {
            $.each(Data.operators, function (i, Operator) {
                $('#OperatorName').append($('<option>', {
                    value: Operator.ListValue,
                    text: Operator.ListKeyStr
                }));


            });
        }
    });
});




$('#OperatorName').change(function () {
   
    var OpName = $('#OperatorName').val();
    var SP = $('#mastertext').html();
    debugger;
    $.ajax({
         // url:'/ServiceProvider/GetOperatorDetailsByName',
      url: additionalUrl + '/ServiceProvider/GetOperatorDetailsByName',

        type: "GET",
        dataType: "JSON",
        data: { SP: SP, OpName: OpName },
        success: function (Data) {
            debugger;
            $('#valurl').val(Data.Details.ValidationUrl);
            $('#payurl').val(Data.Details.PaymentUrl);
            $('#checkurl').val(Data.Details.CheckUrl);
            $('#defcom').val(Data.Details.DefaultCommission);
            $('#defsc').val(Data.Details.DefaultSurcharge);
            $('#txtPriority').val(Data.Details.ServiceProvider);
            $("#txtPriority").attr("disabled", true);
            GetPriority();


        }
    });
});


//End Edit Operator Javascript


//To Get UniqueOperatorName Such As PrePaid Operator or PostPaid Operator
$('#UniqueOperatorName').change(function () {
    var ops = $(this).attr('action')
    var opName = $('#UniqueOperatorName').val();
    var RoleID = $('#RoleID').val();
    var ServiceType = $('#ServiceType').val();
    debugger;
    $.ajax({
        url: additionalUrl + '/ServiceProvider/GetPartnerDefaultCommissionByName',
        type: "GET",
        dataType: "JSON",
        data: { RoleID: RoleID, OpName: opName, ServiceType: ServiceType },
        success: function (Data) {
            debugger;
            $('#DefaultCommission').val('' + Data.Details.DefaultCommission);
            $('#DefaultSurcharge').val('' + Data.Details.DefaultSurcharge);
        }
    });
});


//Add Operaotr Jquery
//To Get Service provider default priority
function GetPriority() {
    var priority = $('#txtPriority').val();
    $.ajax({
        url: additionalUrl + '/ServiceProvider/GetServiceProviderPriority',
        type: "GET",
        dataType: "JSON",
        data: { ExistingPriority: priority },
        success: function (Data) {
            $.each(Data.ServiceProviders, function (i, ServiceProvider) {
                $('#Priority').append($('<option>', {
                    value: ServiceProvider.ListKey,
                    text: ServiceProvider.ListKeyStr
                }));


            });
        }
    });

};

//To Remove Assiged Priority for operator as existing priority
function GetAllServiceProviderPriority() {
    var priority = $('#txtPriority').val();
    $.ajax({
        url: additionalUrl + '/ServiceProvider/GetAllServiceProviderPriority',
        type: "GET",
        dataType: "JSON",
        data: { ExistingPriority: priority },
        success: function (Data) {
            $.each(Data.ServiceProviders, function (i, ServiceProvider) {
                $('#Priority').append($('<option>', {
                    value: ServiceProvider.ListKey,
                    text: ServiceProvider.ListKeyStr
                }));


            });
        }
    });

};


//Switch Service Provider Jquery By Salman
//To Get All service Provided By Service Type eg. prepaid ,postpaid
function GetServiceProviderByType(Value) {
    var Type = $(Value).val();
    if (Type == "PrePaid") {
        $("#chdth").prop("checked", false)
        $("#chpst").prop("checked", false)
        $("#chpvc").prop("checked", false)
    }
    else if (Type == "DTH") {
        $("#chpr").prop("checked", false)
        $("#chpst").prop("checked", false)
        $("#chpvc").prop("checked", false)
    }
    else if (Type == "PostPaid") {
        $("#chpr").prop("checked", false)
        $("#chdth").prop("checked", false)
        $("#chpvc").prop("checked", false)
    }

   
    if ($(Value).is(':checked')) {

        $.ajax({
            url: additionalUrl + '/ServiceProvider/GetServiceProviderStatusByType',
            type: "GET",
            dataType: "JSON",
            data: { Type: Type },
            success: function (Data) {


                $("#datatable1 tbody tr").remove();
                var items = '';
                $.each(Data.Lst, function (i, item) {

                    var Android;
                    var Portal;
                    if (item.IsAndroidApiActive == true) {
                        var Connection = "Android";
                        Android = ' <label class="switch switch-lg"> <input type="checkbox" id="chpr" value="PrePaidAndroid" checked="checked" onchange=' + "ChangeServiceProviderStatus('" + item.OperatorID + "','" + Type + "','0','" + item.OperatorName + "','" + item.ServiceProvider + "','Android')" + '  /><span></span></label>';
                    }
                    else {

                        var Connection = "Android";
                        Android = ' <label class="switch switch-lg"> <input type="checkbox" id="chpr" value="PrePaidAndroid" onchange=' + "ChangeServiceProviderStatus('" + item.OperatorID + "','" + Type + "','1','" + item.OperatorName + "','" + item.ServiceProvider + "','Android')" + '  /><span></span></label>';
                    }

                    if (item.IsPortalActive == true) {
                        var Connection = "Portal";
                        Portal = ' <label class="switch switch-lg"> <input type="checkbox" id="chpr" value="PrePaidPortal" checked="checked"  onchange=' + "ChangeServiceProviderStatus('" + item.OperatorID + "','" + Type + "','0','" + item.OperatorName + "','" + item.ServiceProvider + "','Portal')" + '  /><span></span></label>';
                    }
                    else {
                        Portal = ' <label class="switch switch-lg"> <input type="checkbox" id="chpr" value="PrePaidPortal" onchange=' + "ChangeServiceProviderStatus('" + item.OperatorID + "','" + Type + "','1','" + item.OperatorName + "','" + item.ServiceProvider + "','Portal')" + '  /><span></span></label>';
                    }
                    var rows = "<tr>"

                   + "<td>" + item.OperatorName + "</td>"
                   + "<td>" + item.ServiceProvider + "</td>"
                     + "<td>" + Android + "</td>"
                       + "<td>" + Portal + "</td>"
                   + "</tr>";
                    $('#datatable1 tbody').append(rows);
                });
            },


        });
    }
    else {
        $("#datatable1 tbody tr").remove();
    }
};

//End//

//To Enable  Service Provider for Specific Operator By Service Type
function ChangeServiceProviderStatus(OperatorID, Type, Status, OperatorName, ServiceProvider, Connection) {
    $.ajax({
        url: additionalUrl + '/ServiceProvider/ChangeServiceProviderStatus',
        type: "GET",
        dataType: "JSON",
        data: { OperatorID: OperatorID, Status: Status, OperatorName: OperatorName, ServiceProvider: ServiceProvider, Connection: Connection },
        success: function (Data) {
            debugger;
            swal({

                title: 'Status Changed',
                text: Data.message,
                type: Data.type
            });

            $(Type).prop("checked", true)
            debugger;
            if (Type == "PrePaid") {
                GetServiceProviderByType($("#chpr"));
            }
            else if (Type == "PostPaid") {
                GetServiceProviderByType($("#chpst"));
            }
            else if (Type == "DTH") {
                GetServiceProviderByType($("#chdth"));
            }

        }
    });

};
//End//


//To Enable  Service Provider for Specific Operator By Service Type
function EnableDisablePVC(value) {
    var Status = '';
    $("#datatable1 tbody tr").remove();
    $("#chpr").prop("checked", false)
    $("#chdth").prop("checked", false)
    $("#chpst").prop("checked", false)
    if ($(value).is(':checked'))
    {
        Status = '1';
    }
    else
    {
        Status = '0';
    }
    $.ajax({
        url: additionalUrl + '/ServiceProvider/EnableDisablePVC',
        type: "GET",
        dataType: "JSON",
        data: { Status: Status},
        success: function (Data) {
            debugger;
            swal({

                title: 'Status Changed',
                text: Data.message,
                type: Data.type
            });

        }
    });

};
//End//





