
$(document).ready(function () {
    $.getJSON("https://freegeoip.net/json/", function (imp) { $("#txtip").val(imp.ip); $("#txtLov").val(imp.latitude + "," + imp.longitude); });
    $("#frmBasic").validate({
        rules: {
            AadhaarNo1: { required: true }
        },
        messages: {
            AadhaarNo1: { required: "Required." }
        },
        submitHandler: function (form) {
            debugger;
             if ($("#txtAadhaarNo1").val().length != 12) {
                    Messenger.options = {
                        extraClasses: 'messenger-fixed messenger-on-top messenger-on-right',
                        theme: 'future'
                    }
                    Messenger().post({
                        message: 'Minimum 12 digit for Aadhaar number!',
                        type: 'error',
                        showCloseButton: true
                    });

                }
                else if ($("#txtip").val().length == 0 && $("#txtLov").val().length == 0) {
                    Messenger.options = {
                        extraClasses: 'messenger-fixed messenger-on-top messenger-on-right',
                        theme: 'future'
                    }
                    Messenger().post({
                        message: 'Please reload the page!',
                        type: 'info',
                        showCloseButton: true
                    });
                }
              else {
                    debugger;
                    Basic();
                }
            
            }
        }
    });

    function Basic() {
        debugger;
        $("#cmpltadminModal-4").modal();
        debugger;
        var url = '~/vendor/GenerateOtp';
        var value = "";
        var rawData = {
            AadhaarNumber: $("#txtAadhaarNo1").val(),
            Ip: $("#txtip").val(),
            Lov: $("#txtLov").val()
        }
        var PiData = JSON.stringify(rawData);
        var enckey = CryptoJS.enc.Utf8.parse($("#txtEnckey").val());
        var encIv = CryptoJS.enc.Utf8.parse($("#txtEncIv").val());
        PiData = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(PiData), enckey,
        { keySize: 128 / 8, iv: encIv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
        PiData = PiData.ciphertext.toString(CryptoJS.enc.Base64);
        $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            data: { PiData: PiData },
            success: function (Data) {
                debugger;
                //$("#Amt").val(Data.Wallet);
                //if (Data.msg == '-2') {
                //    $("#cmpltadminModal-4").modal('hide');
                //    swal({
                //        title: "Unauthoirze device!",
                //        text: "Please register device.",
                //        type: "error",
                //        html: true
                //    });
                //}
                //else 
                if (Data.msg == '0') {
                    $("#cmpltadminModal-4").modal('hide');
                    swal({
                        title: "Error",
                        text: "Please make sure, if your aadhar registred with mobile number.",
                        type: "error",
                        html: true
                    });
                }
                else if (Data.msg == '1') {
                    $("#cmpltadminModal-4").modal('hide');
                    swal({
                        title: "OTP send successfuly!",
                        type: "success",
                        html: true
                    });
                }
                else if (Data.msg == '2') {
                    $("#cmpltadminModal-4").modal('hide');
                    swal({
                        title: "Error",
                        text: "Details not found, Please contact support team",
                        type: "error",
                        html: true
                    });
                }
                else if (Data.msg == '3') {
                    $("#cmpltadminModal-4").modal('hide');
                    swal({
                        title: "Eroor",
                        text: "Please Enter Correct Aadhar Number",
                        type: "error",
                        html: true
                    });
                }
                else if (Data.msg == '4') {
                    $("#cmpltadminModal-4").modal('hide');
                    swal({
                        title: "Validation Message!",
                        text: Data.hfErrorMsg,
                        type: "info",
                        html: true
                    });
                }
                else {
                    $("#cmpltadminModal-4").modal('hide');
                    swal({
                        title: "Oops! An error occured.",
                        text: "Please try again later.",
                        type: "info",
                        html: true
                    });
                }
            },
            failure: function (data) {
                $("#cmpltadminModal-4").modal('hide');
                swal({
                    title: "Oops! An error occured.",
                    text: "Please try again later.",
                    type: "error",
                    html: true
                });
            }
        });
        return false;
    }
});

