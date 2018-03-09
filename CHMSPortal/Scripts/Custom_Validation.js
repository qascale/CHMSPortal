//* allow_character only
$(".allow_character").on("input", function (evt) {
    var self = $(this);
    self.val(self.val().replace(/[^a-zA-Z]*$/g, ''));
    if ((evt.which >= 48 || evt.which <= 57)) {
        evt.preventDefault();
    }
});
//*

//* allow_numeric
$(".allow_numeric").on("input", function (evt) {
    var self = $(this);
    self.val(self.val().replace(/[^0-9]/g, ''));
    if ((evt.which < 48 || evt.which > 57)) {
        evt.preventDefault();
    }
});
//*

//*allow_decimal
$(".allow_decimal").on("input", function (evt) {
    var self = $(this);
    self.val(self.val().replace(/[^0-9\.]+/g, ''));
    if ((evt.which != 46 || self.val().indexOf('.') != -1) && (evt.which < 48 || evt.which > 57)) {
        evt.preventDefault();
    }
});


$(".allow_decimalnegative").on("input", function (e) {
    if (e.which != 46 && e.which != 45 && e.which != 46 &&
        !(e.which >= 48 && e.which <= 57)) {
        return false;
    }
});

//*

