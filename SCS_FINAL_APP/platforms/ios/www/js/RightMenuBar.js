/*
*test right menu module
*/
function addRightMainMenu() {
    var currActivePage = '#rightMenu' + $.mobile.activePage.attr('id');
    var $menuright = $.mobile.activePage.find(currActivePage);
    var panal_id = $menuright.attr('id');
    var rightpanel = $.mobile.activePage.attr('id') + 'RightPanel';
    var data = '';
    data += '<ul id="satish" data-role="listview">';
    data += '<li data-role="list-divider"> <center> ';
    data += '<div class="ui-help-line" onclick="closeRightPanel(' + $menuright.attr('id') + ');"> ';
    data += '<a href="#" ID="menuclose"  data-role="button" data-icon="delete" data-iconpos="notext" data-theme="a" data-inline="true" data-rel="close" data-shadow="false" data-iconshadow="false" class="found-ui-def ui-def-max ui-icon-nodisc"></a> ';
    data += '<span id="expDate"></span> </div> </center> </li>';
    data += '<li>';
    data += '<div data-role="collapsible-set" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d">';
    //data += ' <div id="homecollapsible" data-role="collapsible" data-theme="b" data-inset="false" data-content-theme="a" data-iconpos="right" data-collapsed="true" style="border: 0px"> ';
    //data += '<h3 style="margin-top: 0px !important; margin-bottom: 0px !important;"> Home</h3> ';
    //data += ' <ul data-role="listview" data-inset="false"> ';
    //data += ' <li><a data-icon="false" href="index.html#casePage" data-transition="slide" onclick="closeRightPanel(' + panal_id + ')"> <img src="images/icons/ic_action_home.png" alt="" class="imgShare ui-img-size ui-li-icon ui-corner-none" style="width: 1.8em; top: 0.3em !important;" />Home</a> ';
    //data += ' </li>';
    //data += ' </ul> ';
    //data += '</div>';
    data += '<div id="MyAccountcollapsible" data-role="collapsible" data-theme="b" data-inset="false" data-content-theme="a" data-iconpos="right" data-collapsed="true" style="border: 0px"> ';
    data += ' <h3 style="margin-top: 0px !important; margin-bottom: 0px !important;"> My Account</h3>';
    data += ' <ul data-role="listview" data-divider-theme="d" data-inset="false" id=';
    data += '"' + rightpanel + '" class="myAccountList">';
    data += ' <li><a data-icon="false" href="lawyerInformation.htm" data-transition="slide" onclick="closeRightPanel(' + panal_id + ')"> <img src="images/icons/ic_action_my_info.png" class="imgShare ui-img-size ui-li-icon ui-corner-none" style="width: 2em; top: 0.3em !important;" />My Info</a> ';
    data += '</li> ';
    data += '<li><a data-icon="false" href="lawyerNames.html" data-transition="slide" onclick="closeRightPanel(' + panal_id + ')">  <img src="images/icons/ic_action_bow_tie.png" class="imgShare ui-img-size ui-li-icon ui-corner-none" style="width: 1.8em;" />Lawyer Names</a> ';
    data += '</li> ';
    data += '<li><a data-icon="false" href="caseNumbers.html" data-transition="slide" onclick="closeRightPanel(' + panal_id + ')"> <img src="images/icons/is_action_case_number.png" class="imgShare ui-img-size ui-li-icon ui-corner-none" style="width: 1.8em;" />Case Numbers</a> ';
    data += '</li> ';
    data += ' </ul> ';
    data += ' </div>';
    data += ' <div id="Stakeholderscollapsible" data-role="collapsible" data-theme="b" data-inset="false" data-content-theme="a"  data-iconpos="right" data-collapsed="true" style="border: 0px"> ';
    data += ' <h3 style="margin-top: 0px !important; margin-bottom: 0px !important;">  Stakeholders </h3> ';
    data += '<ul data-role="listview" data-divider-theme="d" data-inset="false"> ';
    data += '<li><a data-icon="false" href="shCrud.htm" data-transition="slide" onclick="closeRightPanel(' + panal_id + ')">  <img src="images/icons/ic_action_sh_add.png" alt="" class="imgShare ui-img-size ui-li-icon ui-corner-none" style="width: 1.8em;"/>Add Stakeholder</a> ';
    data += '</li> ';
    data += '<li><a data-icon="false" href="shList.htm" data-transition="slide" onclick="closeRightPanel(' + panal_id + ')">  <img src="images/icons/ic_action_sh_list.png" alt="" class="imgShare ui-img-size ui-li-icon ui-corner-none" style="width: 1.8em;"/>View Stakeholder</a> ';
    data += '</li> ';
    data += ' <li style="display:none;"><a data-icon="false" href="socialAccountNew.htm" data-transition="slide" onclick="closeRightPanel(' + panal_id + ')"> <img src="images/icons/bw-twitter-icon.png" class="imgShare ui-img-size ui-li-icon ui-corner-none"  style="width: 1.8em;" />Configure Account</a> ';
    data += ' <li><a data-icon="false" href="shMapping.htm" onclick="ChangePrevPageValue()" data-transition="slide"> <img src="images/icons/ic_action_sh_list.png" class="imgShare ui-img-size ui-li-icon ui-corner-none"  style="width: 1.8em;" />Case Mapping</a> ';
    data += ' <li style="display:none;"><a data-icon="false" href="NotificationList.html" data-transition="slide" > <img src="images/icons/info_blackedited.png" class="imgShare ui-img-size ui-li-icon ui-corner-none"  style="width: 1.8em;" />View Notification List</a> ';
    data += ' </li> ';
    data += '</ul> ';
    data += ' </div>';
    data += '<div id="Logscollapsible" data-role="collapsible" data-theme="b" data-inset="false" data-content-theme="a"  data-iconpos="right" data-collapsed="true"  style="border: 0px"> ';
    data += ' <h3 style="margin-top: 0px !important; margin-bottom: 0px !important;"> Logs </h3> ';
    data += ' <ul data-role="listview" data-divider-theme="d" data-inset="false"> ';
    data += ' <li><a data-icon="false" href="Log.html" data-transition="slide"  onclick="closeRightPanel(' + panal_id + ')"> <img src="images/icons/ic_action_log_icon.png" alt="" class="imgShare ui-img-size ui-li-icon ui-corner-none" style="width: 1.8em;"/>View Logs</a> ';
    data += ' </li> ';
    data += ' </ul> ';
    data += ' </div>';
    data += ' <div id="Tccollapsible" data-role="collapsible" data-theme="b" data-inset="false" data-content-theme="a" data-iconpos="right" data-collapsed="true"  style="border: 0px"> ';
    data += ' <h3 style="margin-top: 0px !important; margin-bottom: 0px !important;">  Terms and Conditions</h3> ';
    data += ' <ul data-role="listview" data-divider-theme="d" data-inset="false"> ';
    data += ' <li><a data-icon="false" href="TandC.html" data-transition="slide" onclick="closeRightPanel(' + panal_id + ')"> <img src="images/icons/ic_action_log_icon.png" alt="" class="imgShare ui-img-size ui-li-icon ui-corner-none" style="width: 1.8em;"/>Terms and Conditions</a>';
    data += ' </li>';
    data += '</ul>';
    data += '  </div>';
    data += '</div>';
    data += '</li>';
    data += '</ul>';
    $menuright.html('');
    isMsgboxShow = false;
    // $menuright.append(data).listview().listview('refresh');
    $menuright.append(data);
    $.mobile.activePage.find('#expDate').html(expDateToShow);
    $('#validityPopUp').fadeOut();
    //$('[data-role=page]').trigger('pagecreate');
    $menuright.trigger('updatelayout');
    $menuright.trigger('create');
    //$('[data-role=collapsibleset]').('referesh');
}
$(document).on('panelbeforeopen', '#rightMenulawyerNames', function (event) {
    try {
        addRightMainMenu();
        $.mobile.activePage.find("#MyAccountcollapsible").collapsible("expand");
        var PC_Status = localStorage.getItem('PackageCostStatus');
        if (PC_Status == "true") {
            var $currActivePanel = '#' + $.mobile.activePage.attr('id') + 'RightPanel';
            var $lawyerRightPanel = $($currActivePanel);
            var listItem = $lawyerRightPanel.find("li:contains('Clear All Case Data')");
            if (listItem.length === 0 || listItem === 'undefined') {
                $lawyerRightPanel.append("<li data-theme='c'><a data-icon='false' href='#' onclick='showMessageToClearData()' data-transition='slide'><img src='images/icons/ic_action_recycle.png' class='imgShare ui-img-size ui-li-icon ui-corner-none' style='width:1.8em;'>Clear All Case Data</a> </li>").listview("refresh");
                $("#rightMenulawyerNames").trigger("updatelayout");
            }
        }
        else {
            var listItem = $($currActivePanel).find("li:contains('Clear All Case Data')");
            if (listItem !== 'undefined' && listItem.length > 0) {
                listItem.remove();
                $($currActivePanel).listview("refresh");
                $("#rightMenulawyerNames").trigger("updatelayout");
            }
        }
    }
    catch (err) {
        var errMsg = err + "\nMethod: #rightMenulawyerNames(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.") 
        });
    }
});
$(document).on('panelbeforeopen', '#rightMenulogPage', function (event) {
    try {
        addRightMainMenu();
        $.mobile.activePage.find("#Logscollapsible").collapsible("expand");
        var PC_Status = localStorage.getItem('PackageCostStatus');
        if (PC_Status == "true") {
            var $currActivePanel = '#' + $.mobile.activePage.attr('id') + 'RightPanel';
            var $lawyerRightPanel = $($currActivePanel);
            var listItem = $lawyerRightPanel.find("li:contains('Clear All Case Data')");
            if (listItem.length === 0 || listItem === 'undefined') {
                $lawyerRightPanel.append("<li data-theme='c'><a data-icon='false' href='#' onclick='showMessageToClearData()' data-transition='slide'><img src='images/icons/ic_action_recycle.png' class='imgShare ui-img-size ui-li-icon ui-corner-none' style='width:1.8em;'>Clear All Case Data</a> </li>").listview("refresh");
                $("#rightMenulogPage").trigger("updatelayout");
            }
        }
        else {
            var listItem = $($currActivePanel).find("li:contains('Clear All Case Data')");
            if (listItem !== 'undefined' && listItem.length > 0) {
                listItem.remove();
                $($currActivePanel).listview("refresh");
                $("#rightMenulogPage").trigger("updatelayout");
            }
        }
        $.mobile.activePage.find("#Logscollapsible").attr('data-collapsed', 'false');
        $.mobile.activePage.find("#rightMenulogPage").trigger("updatelayout");
    }
    catch (err) {
        var errMsg = err + "\nMethod: #rightMenulogPage(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.") 
        });
    }
});
$(document).on('panelbeforeopen', '#rightMenulawyerInfo', function (event) {
    try {
        addRightMainMenu();
        $.mobile.activePage.find("#MyAccountcollapsible").collapsible("expand");
        var PC_Status = localStorage.getItem('PackageCostStatus');
        if (PC_Status == "true") {
            var $currActivePanel = '#' + $.mobile.activePage.attr('id') + 'RightPanel';
            var $lawyerRightPanel = $($currActivePanel);
            var listItem = $lawyerRightPanel.find("li:contains('Clear All Case Data')");
            if (listItem.length === 0 || listItem === 'undefined') {
                $lawyerRightPanel.append("<li data-theme='c'><a data-icon='false' href='#' onclick='showMessageToClearData()' data-transition='slide'><img src='images/icons/ic_action_recycle.png' class='imgShare ui-img-size ui-li-icon ui-corner-none' style='width:1.8em;'>Clear All Case Data</a> </li>").listview("refresh");
                $("#rightMenulawyerInfo").trigger("updatelayout");
            }
        }
        else {
            var listItem = $($currActivePanel).find("li:contains('Clear All Case Data')");
            if (listItem !== 'undefined' && listItem.length > 0) {
                listItem.remove();
                $($currActivePanel).listview("refresh");
                $("#rightMenulawyerInfo").trigger("updatelayout");
            }
        }
    }
    catch (err) {
        var errMsg = err + "\nMethod: #rightMenulawyerInfo(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.") 
        });
    }
});
$(document).on('panelbeforeopen', '#rightMenucaseNumbers', function (event) {
    try {
        addRightMainMenu();
        $.mobile.activePage.find("#MyAccountcollapsible").collapsible("expand");
        var PC_Status = localStorage.getItem('PackageCostStatus');
        if (PC_Status == "true") {
            var $currActivePanel = '#' + $.mobile.activePage.attr('id') + 'RightPanel';
            var $lawyerRightPanel = $($currActivePanel);
            var listItem = $lawyerRightPanel.find("li:contains('Clear All Case Data')");
            if (listItem.length === 0 || listItem === 'undefined') {
                $lawyerRightPanel.append("<li data-theme='c'><a data-icon='false' href='#' onclick='showMessageToClearData()' data-transition='slide'><img src='images/icons/ic_action_recycle.png' class='imgShare ui-img-size ui-li-icon ui-corner-none' style='width:1.8em;'>Clear All Case Data</a> </li>").listview("refresh");
                $("#rightMenucaseNumbers").trigger("updatelayout");
            }
        }
        else {
            var listItem = $($currActivePanel).find("li:contains('Clear All Case Data')");
            if (listItem !== 'undefined' && listItem.length > 0) {
                listItem.remove();
                $($currActivePanel).listview("refresh");
                $("#rightMenucaseNumbers").trigger("updatelayout");
            }
        }
    }
    catch (err) {
        var errMsg = err + "\nMethod: #rightMenucaseNumbers(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.") 
        });
    }
});
$(document).on('panelbeforeopen', '#rightMenuadvanceSearch', function (event) {
    try {
        addRightMainMenu();
        $.mobile.activePage.find("#homecollapsible").collapsible("expand");
        var PC_Status = localStorage.getItem('PackageCostStatus');
        if (PC_Status == "true") {
            var $currActivePanel = '#' + $.mobile.activePage.attr('id') + 'RightPanel';
            var $lawyerRightPanel = $($currActivePanel);
            var listItem = $lawyerRightPanel.find("li:contains('Clear All Case Data')");
            if (listItem.length === 0 || listItem === 'undefined') {
                $lawyerRightPanel.append("<li data-theme='c'><a data-icon='false' href='#' onclick='showMessageToClearData()' data-transition='slide'><img src='images/icons/ic_action_recycle.png' class='imgShare ui-img-size ui-li-icon ui-corner-none' style='width:1.8em;'>Clear All Case Data</a> </li>").listview("refresh");
                $("#rightMenuadvanceSearch").trigger("updatelayout");
            }
        }
        else {
            var listItem = $($currActivePanel).find("li:contains('Clear All Case Data')");
            if (listItem !== 'undefined' && listItem.length > 0) {
                listItem.remove();
                $($currActivePanel).listview("refresh");
                $("#rightMenuadvanceSearch").trigger("updatelayout");
            }
        }
    }
    catch (err) {
        var errMsg = err + "\nMethod: #rightMenuadvanceSearch(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.") 
        });
    }
});
$(document).on('panelbeforeopen', '#rightMenucasePage', function (event) {
    try {
        addRightMainMenu();
        $.mobile.activePage.find("#homecollapsible").collapsible("expand");
        var PC_Status = localStorage.getItem('PackageCostStatus');
        if (PC_Status == "true") {
            var $currActivePanel = '#' + $.mobile.activePage.attr('id') + 'RightPanel';
            var $lawyerRightPanel = $.mobile.activePage.find($currActivePanel);
            var listItem = $lawyerRightPanel.find("li:contains('Clear All Case Data')");
            if (listItem.length === 0 || listItem === 'undefined') {
                $lawyerRightPanel.append("<li data-theme='c'><a data-icon='false' href='#' onclick='showMessageToClearData()' data-transition='slide'><img src='images/icons/ic_action_recycle.png' class='imgShare ui-img-size ui-li-icon ui-corner-none' style='width:1.8em;'>Clear All Case Data</a> </li>").listview("refresh");
                $("#rightMenucasePage").trigger("updatelayout");
            }
        }
        else {
            var listItem = $($currActivePanel).find("li:contains('Clear All Case Data')");
            if (listItem !== 'undefined' && listItem.length > 0) {
                listItem.remove();
                $($currActivePanel).listview("refresh");
                $("#rightMenucasePage").trigger("updatelayout");
            }
        }
    }
    catch (err) {
        var errMsg = err + "\nMethod: #rightMenucasePage(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.") 
        });
    }
});
//$(document).on('panelbeforeopen', '#rightMenucasePage', function (event) {
//    var currActivePage = '#rightMenu' + $.mobile.activePage.attr('id');
//    var $menuright = $.mobile.activePage.find(currActivePage);
//    var iSHtmlFound = $menuright.html();
//    if (iSHtmlFound == '') {
//        try {
//            addRightMainMenu();
//            $.mobile.activePage.find("#homecollapsible").trigger("expand");
//            getPackageCost(function (isActive) {
//                if (Number(isActive) <= 0) {
//                    var $currActivePanel = '#' + $.mobile.activePage.attr('id') + 'RightPanel';
//                    var $lawyerRightPanel = $.mobile.activePage.find($currActivePanel);
//                    var listItem = $lawyerRightPanel.find("li:contains('Clear All Case Data')");
//                    if (listItem.length === 0 || listItem === 'undefined') {
//                        $lawyerRightPanel.append("<li data-theme='c'><a data-icon='false' href='#' onclick='showMessageToClearData()' data-transition='slide'><img src='images/icons/ic_action_recycle.png' class='imgShare ui-img-size ui-li-icon ui-corner-none' style='width:1.8em;'>Clear All Case Data</a> </li>").listview("refresh");
//                        $("#rightMenucasePage").trigger("updatelayout");
//                    }
//                }
//                else {
//                    var listItem = $($currActivePanel).find("li:contains('Clear All Case Data')");
//                    if (listItem !== 'undefined' && listItem.length > 0) {
//                        listItem.remove();
//                        $($currActivePanel).listview("refresh");
//                        $("#rightMenucasePage").trigger("updatelayout");
//                    }
//                }
//                //            var currActivePage = '#rightMenu' + $.mobile.activePage.attr('id');
//                //            var $menuright = $.mobile.activePage.find(currActivePage);
//                //            var iSHtmlFound = $menuright.html();
//            });
//        }
//        catch (err) {
//            var errMsg = err + "\nMethod: #rightMenucasePage(jquery)" + "\nError Stack:" + err.stack;
//            insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.") 
//            });
//        }
//    }
//    else {
//        alert('Menu Found');
//    }
//});
$(document).on('panelbeforeopen', '#rightMenutermsandcondition', function (event) {
    try {
        addRightMainMenu();
        $.mobile.activePage.find("#Tccollapsible").collapsible("expand");
        var PC_Status = localStorage.getItem('PackageCostStatus');
        if (PC_Status == "true") {
            var $currActivePanel = '#' + $.mobile.activePage.attr('id') + 'RightPanel';
            var $lawyerRightPanel = $.mobile.activePage.find($currActivePanel);
            var listItem = $lawyerRightPanel.find("li:contains('Clear All Case Data')");
            if (listItem.length === 0 || listItem === 'undefined') {
                $lawyerRightPanel.append("<li data-theme='c'><a data-icon='false' href='#' onclick='showMessageToClearData()' data-transition='slide'><img src='images/icons/ic_action_recycle.png' class='imgShare ui-img-size ui-li-icon ui-corner-none' style='width:1.8em;'>Clear All Case Data</a> </li>").listview("refresh");
                $("#rightMenutermsandcondition").trigger("updatelayout");
            }
        }
        else {
            var listItem = $($currActivePanel).find("li:contains('Clear All Case Data')");
            if (listItem !== 'undefined' && listItem.length > 0) {
                listItem.remove();
                $($currActivePanel).listview("refresh");
                $("#rightMenutermsandcondition").trigger("updatelayout");
            }
        }
    }
    catch (err) {
        var errMsg = err + "\nMethod: #rightMenutermsandcondition(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.") 
        });
    }
});
$(document).on('panelbeforeopen', '#rightMenushCrud', function (event) {
    try {
        addRightMainMenu();
        $.mobile.activePage.find("#Stakeholderscollapsible").collapsible("expand");
        var PC_Status = localStorage.getItem('PackageCostStatus');
        if (PC_Status == "true") {
            var $currActivePanel = '#' + $.mobile.activePage.attr('id') + 'RightPanel';
            var $lawyerRightPanel = $.mobile.activePage.find($currActivePanel);
            var listItem = $lawyerRightPanel.find("li:contains('Clear All Case Data')");
            if (listItem.length === 0 || listItem === 'undefined') {
                $lawyerRightPanel.append("<li data-theme='c'><a data-icon='false' href='#' onclick='showMessageToClearData()' data-transition='slide'><img src='images/icons/ic_action_recycle.png' class='imgShare ui-img-size ui-li-icon ui-corner-none' style='width:1.8em;'>Clear All Case Data</a> </li>").listview("refresh");
                $("#rightMenushCrud").trigger("updatelayout");
            }
        }
        else {
            var listItem = $($currActivePanel).find("li:contains('Clear All Case Data')");
            if (listItem !== 'undefined' && listItem.length > 0) {
                listItem.remove();
                $($currActivePanel).listview("refresh");
                $("#rightMenushCrud").trigger("updatelayout");
            }
        }
    }
    catch (err) {
        var errMsg = err + "\nMethod: #rightMenushCrud(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.") 
        });
    }
});
$(document).on('panelbeforeopen', '#rightMenuallSHList', function (event) {
    try {
        addRightMainMenu();
        $.mobile.activePage.find("#Stakeholderscollapsible").collapsible("expand");
        var PC_Status = localStorage.getItem('PackageCostStatus');
        if (PC_Status == "true") {
            var $currActivePanel = '#' + $.mobile.activePage.attr('id') + 'RightPanel';
            var $lawyerRightPanel = $.mobile.activePage.find($currActivePanel);
            var listItem = $lawyerRightPanel.find("li:contains('Clear All Case Data')");
            if (listItem.length === 0 || listItem === 'undefined') {
                $lawyerRightPanel.append("<li data-theme='c'><a data-icon='false' href='#' onclick='showMessageToClearData()' data-transition='slide'><img src='images/icons/ic_action_recycle.png' class='imgShare ui-img-size ui-li-icon ui-corner-none' style='width:1.8em;'>Clear All Case Data</a> </li>").listview("refresh");
                $("#rightMenuallSHList").trigger("updatelayout");
            }
        }
        else {
            var listItem = $($currActivePanel).find("li:contains('Clear All Case Data')");
            if (listItem !== 'undefined' && listItem.length > 0) {
                listItem.remove();
                $($currActivePanel).listview("refresh");
                $("#rightMenuallSHList").trigger("updatelayout");
            }
        }
    }
    catch (err) {
        var errMsg = err + "\nMethod: #rightMenuallSHList(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.") 
        });
    }
});
$(document).on('panelbeforeopen', '#rightMenushMap', function (event) {
    try {
        addRightMainMenu();
        $.mobile.activePage.find("#Stakeholderscollapsible").collapsible("expand");
        var PC_Status = localStorage.getItem('PackageCostStatus');
        if (PC_Status == "true") {
            var $currActivePanel = '#' + $.mobile.activePage.attr('id') + 'RightPanel';
            var $lawyerRightPanel = $.mobile.activePage.find($currActivePanel);
            var listItem = $lawyerRightPanel.find("li:contains('Clear All Case Data')");
            if (listItem.length === 0 || listItem === 'undefined') {
                $lawyerRightPanel.append("<li data-theme='c'><a data-icon='false' href='#' onclick='showMessageToClearData()' data-transition='slide'><img src='images/icons/ic_action_recycle.png' class='imgShare ui-img-size ui-li-icon ui-corner-none' style='width:1.8em;'>Clear All Case Data</a> </li>").listview("refresh");
                $("#rightMenushMap").trigger("updatelayout");
            }
        }
        else {
            var listItem = $($currActivePanel).find("li:contains('Clear All Case Data')");
            if (listItem !== 'undefined' && listItem.length > 0) {
                listItem.remove();
                $($currActivePanel).listview("refresh");
                $("#rightMenushMap").trigger("updatelayout");
            }
        }
    }
    catch (err) {
        var errMsg = err + "\nMethod: #rightMenushMap(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.") 
        });
    }
});
$(document).on('panelbeforeopen', '#rightMenusocialAccount', function (event) {
    try {
        addRightMainMenu();
        $.mobile.activePage.find("#Stakeholderscollapsible").collapsible("expand");
        var PC_Status = localStorage.getItem('PackageCostStatus');
        if (PC_Status == "true") {
            var $currActivePanel = '#' + $.mobile.activePage.attr('id') + 'RightPanel';
            var $lawyerRightPanel = $.mobile.activePage.find($currActivePanel);
            var listItem = $lawyerRightPanel.find("li:contains('Clear All Case Data')");
            if (listItem.length === 0 || listItem === 'undefined') {
                $lawyerRightPanel.append("<li data-theme='c'><a data-icon='false' href='#' onclick='showMessageToClearData()' data-transition='slide'><img src='images/icons/ic_action_recycle.png' class='imgShare ui-img-size ui-li-icon ui-corner-none' style='width:1.8em;'>Clear All Case Data</a> </li>").listview("refresh");
                $("#rightMenusocialAccount").trigger("updatelayout");
            }
        }
        else {
            var listItem = $($currActivePanel).find("li:contains('Clear All Case Data')");
            if (listItem !== 'undefined' && listItem.length > 0) {
                listItem.remove();
                $($currActivePanel).listview("refresh");
                $("#rightMenusocialAccount").trigger("updatelayout");
            }
        }
    }
    catch (err) {
        var errMsg = err + "\nMethod: #rightMenusocialAccount(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.") 
        });
    }
});
$(document).on('panelbeforeopen', '#rightMenusocialAccountNew', function (event) {
    try {
        addRightMainMenu();
        $.mobile.activePage.find("#Stakeholderscollapsible").collapsible("expand");
        var PC_Status = localStorage.getItem('PackageCostStatus');
        if (PC_Status == "true") {
            var $currActivePanel = '#' + $.mobile.activePage.attr('id') + 'RightPanel';
            var $lawyerRightPanel = $.mobile.activePage.find($currActivePanel);
            var listItem = $lawyerRightPanel.find("li:contains('Clear All Case Data')");
            if (listItem.length === 0 || listItem === 'undefined') {
                $lawyerRightPanel.append("<li data-theme='c'><a data-icon='false' href='#' onclick='showMessageToClearData()' data-transition='slide'><img src='images/icons/ic_action_recycle.png' class='imgShare ui-img-size ui-li-icon ui-corner-none' style='width:1.8em;'>Clear All Case Data</a> </li>").listview("refresh");
                $("#rightMenusocialAccountNew").trigger("updatelayout");
            }
        }
        else {
            var listItem = $($currActivePanel).find("li:contains('Clear All Case Data')");
            if (listItem !== 'undefined' && listItem.length > 0) {
                listItem.remove();
                $($currActivePanel).listview("refresh");
                $("#rightMenusocialAccountNew").trigger("updatelayout");
            }
        }
    }
    catch (err) {
        var errMsg = err + "\nMethod: #rightMenusocialAccountNew(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.") 
        });
    }
});
$(document).on('panelbeforeopen', '#rightMenunotificationList', function (event) {
    try {
        addRightMainMenu();
        $.mobile.activePage.find("#Stakeholderscollapsible").collapsible("expand");
        var PC_Status = localStorage.getItem('PackageCostStatus');
        if (PC_Status == "true") {
            var $currActivePanel = '#' + $.mobile.activePage.attr('id') + 'RightPanel';
            var $lawyerRightPanel = $.mobile.activePage.find($currActivePanel);
            var listItem = $lawyerRightPanel.find("li:contains('Clear All Case Data')");
            if (listItem.length === 0 || listItem === 'undefined') {
                $lawyerRightPanel.append("<li data-theme='c'><a data-icon='false' href='#' onclick='showMessageToClearData()' data-transition='slide'><img src='images/icons/ic_action_recycle.png' class='imgShare ui-img-size ui-li-icon ui-corner-none' style='width:1.8em;'>Clear All Case Data</a> </li>").listview("refresh");
                $("#rightMenunotificationList").trigger("updatelayout");
            }
        }
        else {
            var listItem = $($currActivePanel).find("li:contains('Clear All Case Data')");
            if (listItem !== 'undefined' && listItem.length > 0) {
                listItem.remove();
                $($currActivePanel).listview("refresh");
                $("#rightMenunotificationList").trigger("updatelayout");
            }
        }
    }
    catch (err) {
        var errMsg = err + "\nMethod: #rightMenunotificationList(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.") 
        });
    }
});
//$(document).on('panelbeforeopen', '#rightMenutermsandcondition,#rightMenulawyerInfo,#rightMenulogPage,#rightMenushCrud ,#rightMenuallSHList,#rightMenushMap,#rightMenusocialAccount,#rightMenunotificationList,#rightMenusocialAccountNew', function (event) {
// try
// {
//// addRightMainMenu();
// }catch(err)
// {
//  var errMsg = err + "\nMethod: #rightMenutermsandcondition(jquery)" + "\nError Stack:" + err.stack; 
//        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.") 
//        });
// }
// 
// });
$(document).on('panelbeforeopen', '#rightMenunotes', function (event) {
    try {
        addRightMainMenu();
        $.mobile.activePage.find("#homecollapsible").collapsible("expand");
    }
    catch (err) {
        var errMsg = err + "\nMethod: #rightMenunotes(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.") 
        });
    }
});

function closeRightPanel(panel) {
//alert('close '+panel);
    $(panel).panel('close');
}

function showMessageToClearData() {
    var currActivePage = $.mobile.activePage.attr('id');
    if ('casePage' === currActivePage) {
        $.mobile.activePage.find("#rightMenucasePage").panel("close");
    }
    if ('lawyerNames' === currActivePage) {
        $("#rightMenulawyerNames").panel("close");
    }
    if ('advanceSearch' === currActivePage) {
        $("#rightMenuadvanceSearch").panel("close");
    }
    if ('caseNumbers' === currActivePage) {
        $("#rightMenucaseNumbers").panel("close");
    }
    if ('logPage' === currActivePage) {
        $.mobile.activePage.find("#rightMenucasePage").panel("close");
    }
    if ('termsandcondition' === currActivePage) {
        $.mobile.activePage.find("#rightMenutermsandcondition").panel("close");
    }
    if ('lawyerInfo' === currActivePage) {
        $.mobile.activePage.find("#rightMenulawyerInfo").panel("close");
    }
    if ('shCrud' === currActivePage) {
        $.mobile.activePage.find("#rightMenushCrud").panel("close");
    }
    if ('shCrud' === currActivePage) {
        $.mobile.activePage.find("#rightMenushCrud").panel("close");
    }
    if ('SHList' === currActivePage) {
        $.mobile.activePage.find("#rightMenuallSHList").panel("close");
    }
    if ('shMap' === currActivePage) {
        $.mobile.activePage.find("#rightMenushMap").panel("close");
    }
    if ('socialAccount' === currActivePage) {
        $.mobile.activePage.find("#rightMenusocialAccount").panel("close");
    }
    if ('notificationList' === currActivePage) {
        $.mobile.activePage.find("#rightMenunotificationList").panel("close");
    }
    if ('socialAccountNew' === currActivePage) {
        $.mobile.activePage.find("#rightMenusocialAccountNew").panel("close");
    }
    setTimeout(function () {
        $.mobile.activePage.find("#confirmClear").popup("open");
    }, 10);
    //    navigator.notification.confirm(
    //        'You are the winner!',  // message
    //        onConfirm,              // callback to invoke with index of button pressed
    //        'Game Over',            // title
    //        'Restart,Exit'          // buttonLabels
    //    );
}
