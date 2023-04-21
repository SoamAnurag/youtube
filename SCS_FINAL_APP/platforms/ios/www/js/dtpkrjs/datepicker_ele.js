///Vips: here is the element binding with date picker tool

$(document).ready(function () {
    // Date mobiscroll-picker - use common functions
    init_datepicker('#start_date');
    init_datepicker('#end_date');
    //#fdate Added by Prashant Prajapati 
    init_datepicker('#fdate');

    // Date with external button
    $('#date1').scroller();

    var group = {};
    var wheels = [group];
    for (var i = 1; i < 4; i++) {
        var wheel = {};
        for (var j = 0; j < 100; j++) {
            wheel[j] = '<img src="img/fruit-' + (j % 5 + 1) + '.png" />'
        }
        group['Fruit ' + i] = wheel;
    }
    $('#custom').scroller({
        wheels: wheels
    });
    $('#theme, #mode').change(function () {
        var t = $('#theme').val();
        var m = $('#mode').val();
        $('#date1').scroller('destroy').scroller({ theme: t, mode: m });

    });
});
/* common functions: */
//function show_picker(id, d) {
//  $(id).scroller('show');
//}
function init_datepicker(id) {
    $(id).scroller({ dateFormat: "dd/mm/yy", dateOrder: "ddmmyy" });
}

function show_datepicker(id, d, cb) {
    var mycb = function () {
        var d2 = $(id).scroller('getDate');
        $(id).unbind('change', mycb);
        if (!!cb) cb(d2);
    };
    $(id).bind('change', mycb);
    var yr = d.getFullYear();
    var mo = d.getMonth() + 1;
    var da = d.getDate();
    $(id).attr("value", (da < 10 ? "0" : "") + da + (mo < 10 ? "-0" : "-") + mo + '-' + yr)
    $(id).scroller('show');
}

/* window functions: */
var mydate = new Date(2012, 4 - 1, 9);

function mydatepicker() {
    show_datepicker('#start_date', mydate, function (d) {
        mydate = d;
        var yr = d.getFullYear();
        var mo = d.getMonth() + 1;
        var da = d.getDate();
        $("#adate").html((da < 10 ? "0" : "") + da + (mo < 10 ? "-0" : "-") + mo + '-' + yr);
    });
    show_datepicker('#end_date', mydate, function (d) {
        mydate = d;
        var yr = d.getFullYear();
        var mo = d.getMonth() + 1;
        var da = d.getDate();
        $("#adate").html((da < 10 ? "0" : "") + da + (mo < 10 ? "-0" : "-") + mo + '-' + yr);
    });
    //#fdate Added by Prashant Prajapati 
    show_datepicker('#fdate', mydate, function (d) {
        mydate = d;
        var yr = d.getFullYear();
        var mo = d.getMonth() + 1;
        var da = d.getDate();
        $("#adate").html((da < 10 ? "0" : "") + da + (mo < 10 ? "-0" : "-") + mo + '-' + yr);
    });
}