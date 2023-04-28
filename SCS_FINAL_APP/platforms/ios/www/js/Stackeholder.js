var token="";
var stackeholderNameG="Asif111111";
var SHID_to_Delete="";



var LastNotificationDateLS = { 'Date': '' }
localStorage.setItem('LastNotificationDateLS', JSON.stringify(LastNotificationDateLS));


function updateSH_server_sync(shid, serversync, opration) {
    if (opration == "Insert") {
        db.transaction(function (tx) {
            tx.executeSql("update sh_crud set server_sync='" + serversync + "' where server_sync!='del' and sh_crud_id=(select max(sh_crud_id) from sh_crud)", [], function (tx, result) {

            }, errorCB);
        }, errorCB);
    }


        if (opration == "Update") {
        db.transaction(function (tx) {
            tx.executeSql("update sh_crud set server_sync='" + serversync + "' where sh_crud_id='" + shid + "'", [], function (tx, result) {

            }, errorCB);
        }, errorCB);
    }


}

function updateSH_server_sync_CaseMapping(shmid, serversync, opration) {
    if (opration == "Insert") {
        db.transaction(function (tx) {
            tx.executeSql("update SH_Mapping set server_sync='" + serversync + "' where shm_id=(select max(shm_id) from SH_Mapping)", [], function (tx, result) {

            }, errorCB);
        }, errorCB);
    }

    if (opration == "Delete") {
        db.transaction(function (tx) {
            tx.executeSql("update SH_Mapping set server_sync='" + serversync + "' where shm_id='" + shmid + "'", [], function (tx, result) {

            }, errorCB);
        }, errorCB);
    }


}


function updateSH_server_sync_Sh_CrudTable(serversync) {

    db.transaction(function (tx) {
        tx.executeSql("update sh_crud set server_sync='" + serversync + "' where server_sync=0", [], function (tx, result) {

        }, errorCB);
    }, errorCB);

}

function updateSH_server_sync_Sh_stackeholder_log(serversync) {

    db.transaction(function (tx) {
        tx.executeSql("update stackeholder_log set server_sync='" + serversync + "' where server_sync=0", [], function (tx, result) {

        }, errorCB);
    }, errorCB);

}

function updateSH_server_sync_SH_MappingTable(serversync) {

    db.transaction(function (tx) {
        tx.executeSql("update SH_Mapping set server_sync='" + serversync + "' where server_sync=0", [], function (tx, result) {

        }, errorCB);
    }, errorCB);

}

var max_Sh_crud_id;
function GetMaxSH_ID() {
    max_Sh_crud_id = null;
    try {
        db.transaction(function (tx) {
            tx.executeSql('SELECT sh_crud_id FROM sh_crud ORDER BY sh_crud_id DESC LIMIT 1;', [], function (tx, result1) {
                if (result1.rows.length >= 1) {
                    max_Sh_crud_id = result1.rows.item(0).sh_crud_id;
                    max_Sh_crud_id++;
                    if (max_Sh_crud_id == "undefined") { max_Sh_crud_id = 1; }
                }
            }, errorCB);
        }, errorCB);
    }
    catch (err) { max_Sh_crud_id = 1; }
}

var secontime1 = false;
function insertSHCrudIfNotExists() {

    //$('#cbEmail').prop('checked', true).checkboxradio('refresh')
    //$('#cbSMS').prop('checked', false).checkboxradio('refresh');

    if (secontime1 == false) {
        secontime1 = true;

        var notifyEmail = "0";
        var notifySMS = "0";


        if ($('#cbEmail').is(':checked')) {
            notifyEmail = "1";
        }
        else {
            notifyEmail = "0";
        }

        if ($('#cbSMS').is(':checked')) {
            notifySMS = "1";
        }
        else {
            notifySMS = "0";
        }


        var txtUserName = $("#name").val();
        if (txtUserName.trim().length == 0) {
            $("#name").focus();
            drawToast("Enter Stakeholder Name");
            secontime1 = false;
            return false;
        }
        var txtMobileNo = $("#mobile").val();
        if (txtMobileNo.trim().length == 0) {
            $("#mobile").focus();
            drawToast("Enter Mobile Number");
            secontime1 = false;
            return false;
        }
        else {
            if (!isNumber(txtMobileNo)) {
                $("#mobile").select().focus();
                drawToast("Enter Valid Mobile Number");
                secontime1 = false;
                return false;
            }
            if (txtMobileNo.trim().length < 10) {
                $("#mobile").focus();
                drawToast("Enter Valid Mobile Number");
                secontime1 = false;
                return false;
            }
        }

        var txtUserEmailId = $("#email").val();
        if (txtUserEmailId.trim().length != 0) {
            if (!IsEmail(txtUserEmailId)) {
                $("#email").focus();
                drawToast("Enter Proper Email Id");
                secontime1 = false;
                return false;
            }
        }


        var txtCompany = $("#company").val();

        GetMaxSH_ID();

        db.transaction(function (tx) {

            tx.executeSql("SELECT sh_crud_id FROM sh_crud where name=? and server_sync!='del'", [txtUserName], function (tx, result) {
                try {
                    var len = result.rows.length;
                    if (len > 0) {
                        drawToast("This name is already exist!!");
                        secontime1 = false;
                    }
                    else {

                        if (max_Sh_crud_id == "" || max_Sh_crud_id == "undefined" || max_Sh_crud_id == null) {
                            max_Sh_crud_id = 1;
                        }

                        tx.executeSql('INSERT INTO sh_crud (sh_crud_id,name,mobile,email,server_sync,notify_sms,notify_email,company_name) VALUES (?,?,?,?,?,?,?,?);', [max_Sh_crud_id, txtUserName, txtMobileNo, txtUserEmailId, "0", notifySMS, notifyEmail, txtCompany],
                        function (tx, result) {
                            $("#name").val('');
                            $("#mobile").val('');
                            $("#email").val('');
                            $("#company").val('');


                            $('#cbSMS').prop('checked', true).checkboxradio('refresh');
                            $('#cbEmail').prop('checked', true).checkboxradio('refresh');

                            calledBeforeSendAnyRequest(function (isConnected) {
                                if (isConnected == true) {

                                    var lawyerD = JSON.parse(localStorage.getItem("lawyerID"));
                                    var lawyerId = lawyerD.lawyerid;
                                    var url = MR_URL;
                                    var port = '8111';
                                    var requestTime = new Date().getTime();
                                    var webMethod = protocal + url + '/WebService_andriod.asmx/AddStackeHolder';
                                    $.ajax({
                                        type: "POST",
                                        url: webMethod,
                                        data: JSON.stringify({ lawyerId: lawyerId, shId: max_Sh_crud_id, ShName: txtUserName, mobile: txtMobileNo, email: txtUserEmailId, notify_sms: notifySMS, notify_email: notifyEmail, company_name: txtCompany }),
                                        contentType: "application/json; charset=utf-8",
                                        dataType: "json",
                                        success: function (msg) {
                                            if (msg.d == "done") {
                                                updateSH_server_sync(max_Sh_crud_id, "1", "Insert");
                                                $.mobile.loading('hide');
                                                secontime1 = false;
                                            }
                                            else {
                                                $.mobile.loading('hide');
                                                secontime1 = false;
                                            }
                                        },


                                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                                            $.mobile.loading('hide');
                                            var responseTime = new Date().getTime();
                                            var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: insertSHCrudIfNotExists(ajax call)";
                                            errMsg = errMsg + "\n App Version : " + version;
                                            insertLog(requestTime, responseTime, errMsg, function (returnId) { });
                                            alert("Cannot reach the server! Please check your internet connection. If the problem persist call 9522300338");

                                        },

                                        beforeSend: function () {
                                            $.mobile.loading('show', {
                                                text: 'Please Wait...',
                                                textVisible: true,
                                                theme: 'b',
                                                textonly: false
                                            });

                                        }
                                    });



                                }
                                else {
                                    secontime1 = false;
                                }
                            });

                            //End Server Sync Code

                            drawToast("Successfully Inserted!!");
                        }, errorCB);
                    }
                }
                catch (err) {
                    var errMsg = err + "\nMethod: insertSHCrudIfNotExists(jquery) tx1." + "\nError Stack:" + err.stack; insertErrorLogs(errMsg, function (id) {
                    });
                }
            }, errorCB);
        }, errorCB, successCB);

    }
}

$(document).on('pagebeforeshow', '#allSHList', function (event, ui) {
    try {
        //Server_Sync_Stackeholder();
        getStakeHolder();
    }
    catch (err) {
    }
});

function getSocialAccount() {
    db.transaction(function (tx) {
        var query = "select * from social_account;";
        tx.executeSql(query, [], function (tx, results) {
            var len = results.rows.length;
            $('#shListSocial').empty();
            for (var i = 0; i < len; i++) {
                var SH = results.rows.item(i);


                $('#shListSocial').append('<li><a href="#" data-icon="edit">' +

				'<h2>' + SH.email + '</h2>' +
				'</a><a href="#" data-icon="edit" onclick="EditSocialAccount(\'' + SH.acc_id + '\')">></a></li>').listview("refresh");
                $('#shListSocial').trigger("updatelayout");
            }
        }, errorCB, successCB);
    }, errorCB, successCB);
}

function getStakeHolder() {
    db.transaction(function (tx) {
        var query = "select * from sh_crud where server_sync!='del';";
        tx.executeSql(query, [], getStakeHolder_success);
    }, errorCB, successCB);
}
function getStakeHolderByName(Name, callBack) {
    db.transaction(function (tx) {
        var query = "select * from sh_crud where name=? and server_sync!='del';";
        tx.executeSql(query, [Name], function (tx, result) {
            if (typeof callBack !== 'undefined') {
                callBack(result.rows.item(0).sh_crud_id);
            }
        }, errorCB, successCB);
    }, errorCB, successCB);
}

function getStakeHolder_success(tx, results) {
$('#shList').empty();
$('#shList').append('<li data-role="list-divider" data-theme="b">Stakeholders List</li>');
 $('#shList').trigger("updatelayout");

    var len = results.rows.length;
    for (var i = 0; i < len; i++) {
        var SH = results.rows.item(i);

        $('#shList').append('<li><a href="#" data-icon="edit" onclick="gotoShMapping(\'' + SH.name + '\',\'' + SH.sh_crud_id + '\')">' +
//				'<img src="images/icons/ic_action_img_not_avail.png"/>' +
				'<h2>' + SH.name + '</h2>' +
				'<p>+91-' + SH.mobile + ', ' + SH.email + '</p>' +
				'</a><a href="#" data-icon="edit" onclick="EditStackeHolder(\'' + SH.sh_crud_id + '\')">></a></li>').listview("refresh");
        $('#shList').trigger("updatelayout");
    }
}
function EditStackeHolder(shId) {
    SHID_to_Delete=shId;
    var previousPage = PrevoisPageAll;
    var Prevpage = { 'prevpage': previousPage, 'shid': shId };
    localStorage.setItem('Prevpage', JSON.stringify(Prevpage));
    $.mobile.changePage("shCrud.htm", { transition: "slide" });

}

function EditSocialAccount(Id) {
    updateIdSocial = Id;
    ShowAccountDetail(updateIdSocial);
    $('#btnSubmitSocial').text('Update');
    $.mobile.activePage.find("#btnSubmitSocial").val('update');
    $('#btnSubmitSocial').button('refresh');




}
function gotoShMapping(shName, shId) {
    stackeholderNameG=shName;
    var shMapData = { 'shName': shName, 'shId': shId };
    localStorage.setItem('shMapData', JSON.stringify(shMapData));

    var RemPaging = { 'prevStartVal': 0, 'prevCurrentVal': 0, 'nxtEndVal': 0, 'nxtCurrentVal': 0, 'searchtype': 'all', 'Search': '' };
    localStorage.setItem('RemPaging', JSON.stringify(RemPaging));

    $.mobile.changePage("shMapping.htm", { transition: "slide" });
}

function ShowMappingPageData() {
    try {

        showSHMapping();
        var shMapData = JSON.parse(localStorage.getItem("shMapData"));
        var shId = shMapData.shId;
        stackeholderNameG=shMapData.shName;
        // FillDDLMapping();
        CheckPreviousMapping(shId);

        var RemPaging = JSON.parse(localStorage.getItem("RemPaging"));
        var st = RemPaging.searchtype;
        var it = RemPaging.Search;

        // Grab a select field
        var el = $.mobile.activePage.find("#mappingOptions");

        // Select the relevant option, de-select any others
        el.val(st).attr('selected', true).siblings('option').removeAttr('selected');

        // jQM refresh
        el.selectmenu("refresh", true);

        $.mobile.activePage.find("#searchMyAccount").val(it);

        initializeMyAccountCaseNumbers("case");
    }
    catch (err) {
        var RemPaging = { 'prevStartVal': 0, 'prevCurrentVal': 0, 'nxtEndVal': 0, 'nxtCurrentVal': 0, 'searchtype': 'all', 'Search': '' };
        localStorage.setItem('RemPaging', JSON.stringify(RemPaging));


        var RemPaging = JSON.parse(localStorage.getItem("RemPaging"));
        var st = RemPaging.searchtype;

        // Grab a select field
        var el = $.mobile.activePage.find("#mappingOptions");

        // Select the relevant option, de-select any others
        el.val(st).attr('selected', true).siblings('option').removeAttr('selected');

        // jQM refresh
        el.selectmenu("refresh", true);

        initializeMyAccountCaseNumbers("case");
    }
}

$(document).on('pagebeforeshow', '#socialAccount', function () {
    getSocialAccount();
});


var Prevpageupdate;
var updateId;
$(document).on('pageshow', '#shCrud', function (event, ui) {
$("#DeleteSH").parent().hide();
    var PG = JSON.parse(localStorage.getItem("Prevpage"));
    if (PG != null) {

        Prevpageupdate = PG.prevpage;
        updateId = PG.shid;
        var Prevpage = { 'prevpage': 'null', 'shid': 0 };
        localStorage.setItem('Prevpage', JSON.stringify(Prevpage));
        if (Prevpageupdate != 'null') {

            $('#btnSubmit').text('Update');
            $.mobile.activePage.find("#btnSubmit").val('update');
            //$('#btnSubmit').button('refresh');

        }
        else {
            $('#btnSubmit').text('Submit');
            $.mobile.activePage.find("#btnSubmit").val('submit');
            //$('#btnSubmit').button('refresh');
        }
    }
    else {
        $('#btnSubmit').text('Submit');
        $.mobile.activePage.find("#btnSubmit").val('submit');
        //$('#btnSubmit').button('refresh');
    }
    var a = $.mobile.activePage.find("#btnSubmit").val();
    if (a == "submit") {

    }
    else {

        ShowStackeHolderDetail(updateId);

    }
});









$(document).on('click', '#btnSubmit', function (event, ui) {

    var a = $.mobile.activePage.find("#btnSubmit").val();
    if (a == "submit") {
        insertSHCrudIfNotExists();
    }
    else {

        UpdateStackeHolderDetail(updateId);

    }
});

$(document).on('click', '#btnSubmitSocial', function (event, ui) {

    var a = $.mobile.activePage.find("#btnSubmitSocial").val();
    if (a == "submit") {
        insertAccountDetail();
    }
    else {
        UpdateAccountDetail(updateIdSocial);

    }
});


function insertAccountDetail() {

    var ddlNetwork = $("#networkoption").val();
    if (ddlNetwork == "Choose Network") {
        drawToast("Choose any Network");
        return false;
    }

    var txtUserEmailId = $("#email").val();
    if (txtUserEmailId.trim().length == 0) {
        $("#email").focus();
        drawToast("Enter Email Id");
        return false;
    }
    else {
        if (!IsEmail(txtUserEmailId)) {
            $("#email").focus();
            drawToast("Enter Proper Email Id");
            return false;
        }
    }
//    var txtPassword = $("#password").val();
//    if (txtPassword.trim().length == 0) {
//        $("#password").focus();
//        drawToast("Enter Password");
//        return false;
//    }

    var network = $("#networkoption").val();

    db.transaction(function (tx) {
        tx.executeSql('SELECT email FROM social_account where email=?', [txtUserEmailId], function (tx, result) {
            try {
                var len = result.rows.length;
                if (len > 0) {
                    drawToast("This Email is already exist!!");
                }
                else {
                    tx.executeSql('INSERT INTO social_account (network,email) VALUES (?,?);', [network, txtUserEmailId],
                        function (tx, result) {
                            senderemailid = $("#email").val();
                           // senderpwd = $("#password").val();
                            var el = $.mobile.activePage.find("#networkoption");
                            el.val('Choose Network').attr('selected', true).siblings('option').removeAttr('selected');
                            el.selectmenu("refresh", true);
                            //$("#password").val('');
                            $("#email").val('');
                            getSocialAccount();
                            drawToast("Successfully Added!!");
                        }, errorCB);
                }
            }
            catch (err) {
                var errMsg = err + "\nMethod: insertAccountDetail(jquery) tx1." + "\nError Stack:" + err.stack; insertErrorLogs(errMsg, function (id) {
                });
            }
        }, errorCB);
    }, errorCB, successCB);

}

function ShowStackeHolderDetail(shId) {
            $("#DeleteSH").parent().show();
            //$('#DeleteSH').button('refresh');


    db.transaction(function (tx) {
        tx.executeSql("select * from sh_crud where sh_crud_id=?", [shId], function (tx, result) {
            if (result.rows.length >= 1) {


                $.mobile.activePage.find("#name").val(result.rows.item(0).name);
                $.mobile.activePage.find("#mobile").val(result.rows.item(0).mobile);
                $.mobile.activePage.find("#email").val(result.rows.item(0).email);
                $.mobile.activePage.find("#company").val(result.rows.item(0).company_name);


                if (result.rows.item(0).notify_sms == "1") {
                    $('#cbSMS').prop('checked', true).checkboxradio('refresh');
                }
                else {
                    $('#cbSMS').prop('checked', false).checkboxradio('refresh');
                }


                if (result.rows.item(0).notify_email == "1") {
                    $('#cbEmail').prop('checked', true).checkboxradio('refresh');
                }
                else {
                    $('#cbEmail').prop('checked', false).checkboxradio('refresh');
                }


            }
            else {

            }
        }, errorCB, successCB);
    }, errorCB, successCB);

}

function ShowAccountDetail(Id) {
    db.transaction(function (tx) {
        tx.executeSql("select * from social_account where acc_id=?", [Id], function (tx, result) {
            if (result.rows.length >= 1) {

                var rr = result.rows.item(0).network;

                $.mobile.activePage.find("#password").val(result.rows.item(0).password);
                $.mobile.activePage.find("#email").val(result.rows.item(0).email);
                // Grab a select field
                var el = $.mobile.activePage.find("#networkoption");

                // Select the relevant option, de-select any others
                el.val(result.rows.item(0).network).attr('selected', true).siblings('option').removeAttr('selected');

                // jQM refresh
                el.selectmenu("refresh", true);


            }
            else {

            }
        }, errorCB, successCB);
    }, errorCB, successCB);

}

function UpdateStackeHolderDetail(shId) {


    var notifyEmail = "0";
    var notifySMS = "0";


    if ($('#cbEmail').is(':checked')) {
        notifyEmail = "1";
    }
    else {
        notifyEmail = "0";
    }

    if ($('#cbSMS').is(':checked')) {
        notifySMS = "1";
    }
    else {
        notifySMS = "0";
    }

    var txtUserName = $("#name").val();
    if (txtUserName.trim().length == 0) {
        $("#name").focus();
        drawToast("Enter Stakeholder Name");
        return false;
    }
    var txtMobileNo = $("#mobile").val();
    if (txtMobileNo.trim().length == 0) {
        $("#mobile").focus();
        drawToast("Enter Mobile Number");
        return false;
    }
    else {
        if (!isNumber(txtMobileNo)) {
            $("#mobile").select().focus();
            drawToast("Enter Valid Mobile Number");
            return false;
        }
        if (txtMobileNo.trim().length < 10) {
            $("#mobile").focus();
            drawToast("Enter Valid Mobile Number");
            return false;
        }
    }

    var txtUserEmailId = $("#email").val();
    if (txtUserEmailId.trim().length != 0) {
        if (!IsEmail(txtUserEmailId)) {
            $("#email").focus();
            drawToast("Enter Proper Email Id");
            secontime1 = false;
            return false;
        }
    }

    var txtCompany = $("#company").val();

    var n = $.mobile.activePage.find("#name").val();
    var m = $.mobile.activePage.find("#mobile").val();
    var e = $.mobile.activePage.find("#email").val();
    var c = $.mobile.activePage.find("#company").val();

    db.transaction(function (tx) {
        tx.executeSql("update sh_crud set name=?,mobile=?,email=?,server_sync=0,notify_sms=?,notify_email=? ,company_name=? where sh_crud_id=?", [n, m, e, notifySMS, notifyEmail, c, shId], function (tx, result) {

            // Start Server Sync Code Here..

            calledBeforeSendAnyRequest(function (isConnected) {
                if (isConnected == true) {

                    // GetMaxSH_ID();

                    var lawyerD = JSON.parse(localStorage.getItem("lawyerID"));
                    var lawyerId = lawyerD.lawyerid;

                    var url = MR_URL;
                    var port = '8111';
                    var requestTime = new Date().getTime();
                    var webMethod = protocal + url + '/WebService_andriod.asmx/UpdateStackeHolder';
                    $.ajax({
                        type: "POST",
                        url: webMethod,
                        data: JSON.stringify({ lawyerId: lawyerId, shId: shId, name: txtUserName, mobile: txtMobileNo, email: txtUserEmailId, notify_sms: notifySMS, notify_email: notifyEmail, company_name: txtCompany }),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (msg) {
                            //alert(msg.d);
                            if (msg.d == "done") {
                                updateSH_server_sync(shId, "1", "Update");
                                $.mobile.loading('hide');
                            }
                            else {
                                $.mobile.loading('hide');
                            }
                        },


                        error: function (XMLHttpRequest, textStatus, errorThrown) {

                            var responseTime = new Date().getTime();
                            var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: UpdateStackeHolderDetail(ajax call)";
                            errMsg = errMsg + "\n App Version : " + version;
                            insertLog(requestTime, responseTime, errMsg, function (returnId) { });
                            alert("Cannot reach the server! Please check your internet connection. If the problem persist call 9522300338");
                            //updateSH_server_sync(shId,"0","Update");
                            $.mobile.loading('hide');

                        },

                        beforeSend: function () {
                            $.mobile.loading('show', {
                                text: 'Please Wait...',
                                textVisible: true,
                                theme: 'b',
                                textonly: false
                            });

                        }
                    });



                }
            });


            //End Server Sync Code.



            drawToast('Information updated Successfuly.');
            $.mobile.changePage("shList.htm", {
                transition: "slide"
            });
        }, errorCB, successCB);
    }, errorCB, successCB);

}


function UpdateAccountDetail(Id) {
    var ddlNetwork = $("#networkoption").val();
    if (ddlNetwork == "Choose Network") {
        drawToast("Choose any Network");
        return false;
    }

    var txtUserEmailId = $("#email").val();
    if (txtUserEmailId.trim().length == 0) {
        $("#email").focus();
        drawToast("Enter Email Id");
        return false;
    }
    else {
        if (!IsEmail(txtUserEmailId)) {
            $("#email").focus();
            drawToast("Enter Proper Email Id");
            return false;
        }
    }
//    var txtPassword = $("#password").val();
//    if (txtPassword.trim().length == 0) {
//        $("#password").focus();
//        drawToast("Enter Password");
//        return false;
//    }

    var network = $("#networkoption").val();

    db.transaction(function (tx) {
        tx.executeSql('update social_account set network=?,email=? where acc_id=?', [network, txtUserEmailId, Id],
                        function (tx, result) {

                            senderemailid = $("#email").val();
                           // senderpwd = $("#password").val();
                            var el = $.mobile.activePage.find("#networkoption");
                            el.val('Choose Network').attr('selected', true).siblings('option').removeAttr('selected');
                            el.selectmenu("refresh", true);
                           // $("#password").val('');
                            $("#email").val('');



                            $('#btnSubmitSocial').text('Submit');
                            $.mobile.activePage.find("#btnSubmitSocial").val('submit');
                            $('#btnSubmitSocial').button('refresh');

                            drawToast("Updated Successfully!!");
                            getSocialAccount();

                        }, errorCB);
    }, errorCB);

}



$(document).on('pagebeforeshow', '#shMap', function (event, ui) {



    CheckStackeholderAvailbility(function asif(ret){
    if(ret=="Yes"){

    FillDDLMapping();

    getStakeHolderForMapping();
    setTimeout(ShowMappingPageData,1000);
    }
    else{
    setTimeout(MessageIntimate,2500);
    $.mobile.changePage("shcrud.htm",{transition:"slide"});

    }
 });

});

function MessageIntimate(){
drawToast("Create Stackeholder first to Use Case Mapping");
}

function showSHMapping() {
    db.transaction(function (tx) {
        var query = "select * from sh_crud where server_sync!='del';";
        tx.executeSql(query, [], showSHMapping_success);
    }, errorCB, successCB);
}

function showSHMapping_success(tx, results) {
    var len = results.rows.length;

    try{
    var shMapData = JSON.parse(localStorage.getItem("shMapData"));
    var shName = shMapData.shName;
    stackeholderNameG=shName;
    }
    catch(err){shName = 'undefined'}

    for (var i = 0; i < len; i++) {
        var SH = results.rows.item(i);
        $('#mappingWith').append('<li class="ui-screen-hidden"><a href="#" onclick="return OnPageChangeSH(this)" data-value="' + SH.sh_crud_id + '" data-op="' + SH.name + '">' + SH.name + '</a></li>').listview("refresh");
        $('#mappingWith').trigger("updatelayout");
    }
    if (shName !== 'undefined') {
        $("#shMap").find('input[data-type="search"]').val(shName);
    }
}

$(document).on('click', '#btnBackIndex', function () {
    $.mobile.loading('show');
    PrevoisPageBack = "shCrud";
    parent.history.back();
});

$(document).on('pagebeforehide', '#shMap', function () {
    //$.mobile.loading('show',);
    PrevoisPageBack = "";
});

$(document).on('click', 'a.ui-input-clear', function () {
    $("input[data-type='search']").val('');
    $("#shMap").find("input[data-type='search']").trigger('keyup');
});

function OnPageChangeSH(list) {



    prevStartVal = 0;
    prevCurrentVal = 0;
    nxtEndVal = 0;
    nxtCurrentVal = 0;

    $("#shMap").find("#mappingWith>li").children().addClass('ui-screen-hidden');
    var id = $(list).attr('data-value');
    var name = $(list).attr('data-op');
    stackeholderNameG=name;
    FillDDLMapping();
    var shMapData = { 'shName': name, 'shId': id };
    localStorage.setItem('shMapData', JSON.stringify(shMapData));
    var shMapData = JSON.parse(localStorage.getItem("shMapData"));
    var shId = shMapData.shId;
    CheckPreviousMapping(shId);
    checkAndSendRequestForCaseNumber("case");
    showSHMapping();
}

$(document).on('pageshow', '#shMap', function (event, ui) {

    $.mobile.activePage.find("#searchMyAccount").on("input", function (e) {

        searchMyAccount();

    });
});


//$(document).on('pageinit', '.ui-page', function (event, data)
//{
//   FastClick.attach(document.body);
//});






$(document).on('change', '#mappingOptions', function () {
    var searchtype = $("#mappingOptions").val();

    var RemPaging = { 'prevStartVal': 0, 'prevCurrentVal': 0, 'nxtEndVal': 0, 'nxtCurrentVal': 0, 'searchtype': 'all', 'Search': '' };
    localStorage.setItem('RemPaging', JSON.stringify(RemPaging));

    initializeMyAccountCaseNumbers('case');
});


var senderemailid; var senderpwd;
//function GetAccoutDetailForSend() {
//    db.transaction(function (tx) {
//        //alert('call');
//        tx.executeSql("select * from social_account", [], function (tx, result) {
//            if (result.rows.length >= 1) {
//                senderemailid = result.rows.item(0).email;
//               // senderpwd = result.rows.item(0).password;



//            }
//        }, errorCB);
//    }, errorCB);
//}

var data = new Array;
var subQuery;
var u = 0;
var ShDetail_And_Query = new Array;

function sendNotificationToSH(todayDate, action) {

WordCountArray=[];
WordCountG=0;

//SetDateNotification_NextDate();


    $.mobile.loading('show', {
        text: 'Loading...',
        textVisible: true,
        theme: 'b',
        textonly: false
    });




    if (action == "Updated") {


        subQuery = "select DISTINCT start_date,end_date,list_court_date_table.list_court_date_id,('List-' || list_name) as list_name,case_count,judge_name,court_no,list_no,case_no,case_table.case_id,matter,party_name,suspected,store_time,(CASE WHEN end_date='' THEN (start_date || ' List-' || list_name || ' (' || case_count || ' Case) ') ELSE (start_date || ' To ' || end_date || ' List-' || list_name || ' (' || case_count || ' Case) ') END) as lst_nm from court_date_table join list_court_date_table on court_date_table.court_date_id=list_court_date_table.court_date_id join list_table on list_court_date_table.list_id=list_table.list_ID join case_table on list_court_date_table.list_court_date_id=case_table.list_court_date_id join (select court_date_table.court_date_id as cdi,list_table.list_id,count(DISTINCT case_table.case_id) as case_count from court_date_table join list_court_date_table on court_date_table.court_date_id=list_court_date_table.court_date_id join list_table on list_court_date_table.list_id=list_table.list_ID join case_table on list_court_date_table.list_court_date_id=case_table.list_court_date_id join case_justice_table on case_table.case_id=case_justice_table.case_id join justice_table on justice_table.justice_id=case_justice_table.justice_id where 1=1 And (CASE WHEN end_date='' THEN start_date>='" + todayDate + "' ELSE start_date>='" + todayDate + "' OR end_date>='" + todayDate + "' END) group by list_court_date_table.list_court_date_id) as count_list_cases on list_table.list_id=count_list_cases.list_id AND court_date_table.court_date_id=count_list_cases.cdi join (select DISTINCT justice_table.justice_id,case_justice_table.case_id,Group_Concat(justice_name) as judge_name,court_no from case_justice_table join justice_table on case_justice_table.justice_id=justice_table.justice_id group by case_justice_table.case_id) as justice_names on case_table.case_id=justice_names.case_id where 1=1 And is_updated='1' And (CASE WHEN end_date='' THEN start_date>='" + todayDate + "' ELSE start_date>='" + todayDate + "' OR end_date>='" + todayDate + "' END)";

        //where 1=1 And is_updated='0'
    }
    else {

            subQuery = "select DISTINCT start_date,end_date,list_court_date_table.list_court_date_id,('List-' || list_name) as list_name,case_count,judge_name,court_no,list_no,case_no,case_table.case_id,matter,party_name,suspected,store_time,(CASE WHEN end_date='' THEN (start_date || ' List-' || list_name || ' (' || case_count || ' Case) ') ELSE (start_date || ' To ' || end_date || ' List-' || list_name || ' (' || case_count || ' Case) ') END) as lst_nm from court_date_table join list_court_date_table on court_date_table.court_date_id=list_court_date_table.court_date_id join list_table on list_court_date_table.list_id=list_table.list_ID join case_table on list_court_date_table.list_court_date_id=case_table.list_court_date_id join (select court_date_table.court_date_id as cdi,list_table.list_id,count(DISTINCT case_table.case_id) as case_count from court_date_table join list_court_date_table on court_date_table.court_date_id=list_court_date_table.court_date_id join list_table on list_court_date_table.list_id=list_table.list_ID join case_table on list_court_date_table.list_court_date_id=case_table.list_court_date_id join case_justice_table on case_table.case_id=case_justice_table.case_id join justice_table on justice_table.justice_id=case_justice_table.justice_id where 1=1 And (CASE WHEN end_date='' THEN start_date=='" + todayDate + "' ELSE start_date>='" + todayDate + "' OR end_date>='" + todayDate + "' END) group by list_court_date_table.list_court_date_id) as count_list_cases on list_table.list_id=count_list_cases.list_id AND court_date_table.court_date_id=count_list_cases.cdi join (select DISTINCT justice_table.justice_id,case_justice_table.case_id,Group_Concat(justice_name) as judge_name,court_no from case_justice_table join justice_table on case_justice_table.justice_id=justice_table.justice_id group by case_justice_table.case_id) as justice_names on case_table.case_id=justice_names.case_id where 1=1 And (CASE WHEN end_date='' THEN start_date=='" + todayDate + "' ELSE start_date>='" + todayDate + "' OR end_date>='" + todayDate + "' END)";

    }


    var shidm;
    stackeHolderArray = [];
    ShDetail_And_Query = [];
    data = [];
    ArrSH_Item = [];
    ArrSH_Notify = [];
    DataGlobalForSent = [];
    u = 0;

    var y = false;


//    if (senderemailid == "" || senderemailid == null) {

//    $.mobile.activePage.find( "#popupDialog" ).popup( "open" );

//        setTimeout(function () {
//            $.mobile.changePage("socialAccount.htm", {
//                transition: "slide"
//            });
//        }, 0);

//        setTimeout(function () { drawToast("Please Configure Your Gmail Account to Send Notification to Stackeholder"); }, 1000);
//        return false;
//    }


    var w;
    db.transaction(function (tx) {
        var query1 = "select * from sh_crud where server_sync!='del'";
        tx.executeSql(query1, [], function (tx, result) {
            var len = result.rows.length;
            w = len;
            if (len >= 1) {
                for (var i = 0; i < len; i++) {
                    stackeHolderArray.push({ 'shid': result.rows.item(i).sh_crud_id, 'shName': result.rows.item(i).name, 'shemail': result.rows.item(i).email, 'shmobile': result.rows.item(i).mobile, 'NotifyBySMS': result.rows.item(i).notify_sms, 'NotifyByEmail': result.rows.item(i).notify_email, 'CompanyName': result.rows.item(i).company_name });

                }

                var r = 0; var h = 0;
                while (r < stackeHolderArray.length) {
                    var sd = stackeHolderArray[r].shid;

                    //var query="select casenumber_id from SH_Mapping where stackeholder_id = '"+sd+"'";
                    var query = "select info_value as casenumber_id from existings inner join SH_Mapping on existings.exist_id=SH_Mapping.casenumber_id where stackeholder_id='" + sd + "' and SH_Mapping.server_sync!='del'";
                    shidm = stackeHolderArray[r];
                    data = [];
                    tx.executeSql(query, [], function (tx, result1) {
                        var len1 = result1.rows.length;
                        h = len1;
                        if (len1 >= 1) {
                            for (var k = 0; k < len1; k++) {
                                var casenumber = result1.rows.item(k).casenumber_id;
                                if (k == 0) {
                                    subQuery += " And ((REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(case_table.case_no,'/',''),'.',''),'(',''),')',''),' ',''),'-','') like '%" + casenumber + "%') ";

                                }

                                else {
                                    subQuery += " OR (REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(case_table.case_no,'/',''),'.',''),'(',''),')',''),' ',''),'-','') like '%" + casenumber + "%')";

                                }

                                if (k == len1 - 1) {
                                    //subQuery+=") order by case_count DESC,case_table.case_id;";
                                    subQuery += ") order by start_date asc;";
                                    w--;
                                }
                            }

                            var SH_Data = stackeHolderArray[u];
                            subQuery;
                            var detail = { 'shid': SH_Data.shid, 'shName': SH_Data.shName, 'shemail': SH_Data.shemail, 'shmobile': SH_Data.shmobile, 'NotifyBySMS': SH_Data.NotifyBySMS, 'NotifyByEmail': SH_Data.NotifyByEmail, 'CompanyName': SH_Data.CompanyName, 'SubQuery': subQuery }
                            ShDetail_And_Query.push(detail);
                            u++;

                            if (action == "Updated") {
                                subQuery = "select DISTINCT start_date,end_date,list_court_date_table.list_court_date_id,('List-' || list_name) as list_name,case_count,judge_name,court_no,list_no,case_no,case_table.case_id,matter,party_name,suspected,store_time,(CASE WHEN end_date='' THEN (start_date || ' List-' || list_name || ' (' || case_count || ' Case) ') ELSE (start_date || ' To ' || end_date || ' List-' || list_name || ' (' || case_count || ' Case) ') END) as lst_nm from court_date_table join list_court_date_table on court_date_table.court_date_id=list_court_date_table.court_date_id join list_table on list_court_date_table.list_id=list_table.list_ID join case_table on list_court_date_table.list_court_date_id=case_table.list_court_date_id join (select court_date_table.court_date_id as cdi,list_table.list_id,count(DISTINCT case_table.case_id) as case_count from court_date_table join list_court_date_table on court_date_table.court_date_id=list_court_date_table.court_date_id join list_table on list_court_date_table.list_id=list_table.list_ID join case_table on list_court_date_table.list_court_date_id=case_table.list_court_date_id join case_justice_table on case_table.case_id=case_justice_table.case_id join justice_table on justice_table.justice_id=case_justice_table.justice_id where 1=1 And (CASE WHEN end_date='' THEN start_date>='" + todayDate + "' ELSE start_date>='" + todayDate + "' OR end_date>='" + todayDate + "' END) group by list_court_date_table.list_court_date_id) as count_list_cases on list_table.list_id=count_list_cases.list_id AND court_date_table.court_date_id=count_list_cases.cdi join (select DISTINCT justice_table.justice_id,case_justice_table.case_id,Group_Concat(justice_name) as judge_name,court_no from case_justice_table join justice_table on case_justice_table.justice_id=justice_table.justice_id group by case_justice_table.case_id) as justice_names on case_table.case_id=justice_names.case_id where 1=1 And is_updated='1' And (CASE WHEN end_date='' THEN start_date>='" + todayDate + "' ELSE start_date>='" + todayDate + "' OR end_date>='" + todayDate + "' END)";

                                //where 1=1 And is_updated='0'
                            }
                            else {
            subQuery = "select DISTINCT start_date,end_date,list_court_date_table.list_court_date_id,('List-' || list_name) as list_name,case_count,judge_name,court_no,list_no,case_no,case_table.case_id,matter,party_name,suspected,store_time,(CASE WHEN end_date='' THEN (start_date || ' List-' || list_name || ' (' || case_count || ' Case) ') ELSE (start_date || ' To ' || end_date || ' List-' || list_name || ' (' || case_count || ' Case) ') END) as lst_nm from court_date_table join list_court_date_table on court_date_table.court_date_id=list_court_date_table.court_date_id join list_table on list_court_date_table.list_id=list_table.list_ID join case_table on list_court_date_table.list_court_date_id=case_table.list_court_date_id join (select court_date_table.court_date_id as cdi,list_table.list_id,count(DISTINCT case_table.case_id) as case_count from court_date_table join list_court_date_table on court_date_table.court_date_id=list_court_date_table.court_date_id join list_table on list_court_date_table.list_id=list_table.list_ID join case_table on list_court_date_table.list_court_date_id=case_table.list_court_date_id join case_justice_table on case_table.case_id=case_justice_table.case_id join justice_table on justice_table.justice_id=case_justice_table.justice_id where 1=1 And (CASE WHEN end_date='' THEN start_date=='" + todayDate + "' ELSE start_date>='" + todayDate + "' OR end_date>='" + todayDate + "' END) group by list_court_date_table.list_court_date_id) as count_list_cases on list_table.list_id=count_list_cases.list_id AND court_date_table.court_date_id=count_list_cases.cdi join (select DISTINCT justice_table.justice_id,case_justice_table.case_id,Group_Concat(justice_name) as judge_name,court_no from case_justice_table join justice_table on case_justice_table.justice_id=justice_table.justice_id group by case_justice_table.case_id) as justice_names on case_table.case_id=justice_names.case_id where 1=1 And (CASE WHEN end_date='' THEN start_date=='" + todayDate + "' ELSE start_date>='" + todayDate + "' OR end_date>='" + todayDate + "' END)";
                            }

                            if (w == 0) {
                                runLoop(tx);
                            }


                        }
                        else {
                            w--;
                            u++;
                            if (w == 0) {
                                runLoop(tx);
                            }
                        }

                    });
                    r++;
                }

            }
        });
    });

}

function runLoop(tx) {
    if (ShDetail_And_Query.length > 0) {
        var l = 0;
        while (l < ShDetail_And_Query.length) {
            //while(l<=0){
            sendCaseDateDetailToSH(tx, ShDetail_And_Query[l], ShDetail_And_Query.length);
            l++;
        }
    }
    else{

     $.mobile.changePage("NotificationList.html", {
            transition: "slide"
        });
        var justiceCollapsiblePanelNotification = $('#justiceCollapsiblePanelNotification');
        data += '<center><h3>No Notification</h3></center>';
        data += '<center><h5>Add <a href="shMapping.htm" onclick="ChangePrevPageValue()">Case Mapping</a></h5></center>';
        $(data).appendTo($('#justiceCollapsiblePanelNotification div:first'));
        justiceCollapsiblePanelNotification.find('div[data-role=collapsible]').collapsible({ refresh: true });

        $.mobile.loading('hide');
    }
}

var dfg;
var ArrSH_Item = [];
var ArrSH_Notify = [];
function sendCaseDateDetailToSH(tx, ShDetail, kkk) {
    dfg = kkk;
    tx.executeSql(ShDetail.SubQuery, [], function (tx, result) {
        var len = result.rows.length;

        if (len >= 1) {


            var DateMatch = []; var JusticeNameMatch = []; var FullDataMatch = [];

            for (var i = 0; i < len; i++) {

                if (i == 0) {
                    ArrSH_Notify.push(ShDetail.NotifyBySMS + "-" + ShDetail.NotifyByEmail)
                }

                var startDate = result.rows.item(i).start_date;

                if (startDate != "") {
                    var startDatetemp = startDate.split('-');
                    startDate = startDatetemp[2] + "-" + startDatetemp[1] + "-" + startDatetemp[0];
                }

                var endDate = result.rows.item(i).end_date;

                if (endDate != "") {
                    var endDatetemp = endDate.split('-');
                    endDate = endDatetemp[2] + "-" + endDatetemp[1] + "-" + endDatetemp[0];
                }

                if (endDate != "" || endDate == null) { endDate = " - " + endDate; }

                var datess = startDate + "" + endDate;
                var listtypee = result.rows.item(i).list_name;
                var dateAndList = 'Date : ' + datess + " " + listtypee;
                var justicenamee = result.rows.item(i).judge_name;



                if (jQuery.inArray(dateAndList, DateMatch) == -1) {
                    DateMatch.push(dateAndList);

                    if (jQuery.inArray(justicenamee, JusticeNameMatch) == -1) {
                        JusticeNameMatch.push(justicenamee);

                        dateAndList += '\n' + justicenamee + ' ' + result.rows.item(i).court_no;
                        var otherData = "\n" + result.rows.item(i).matter + '\n' + result.rows.item(i).list_no + ". " + result.rows.item(i).case_no + '\n' + result.rows.item(i).party_name;
                        dateAndList += otherData;
                        FullDataMatch.push(dateAndList);

                    }
                    else {
                        var index = jQuery.inArray(dateAndList, DateMatch);

                        if (FullDataMatch.length - 1 > index) {
                            var dataToAddPjudge = FullDataMatch[index];
                            var dataToAddPjudge1 = dataToAddPjudge.split(justicenamee + ' ' + result.rows.item(i).court_no);
                            var otherData = "" + result.rows.item(i).judge_name + ' ' + result.rows.item(i).court_no + "\n" + result.rows.item(i).matter + '\n' + result.rows.item(i).list_no + ". " + result.rows.item(i).case_no + '\n' + result.rows.item(i).party_name;
                            var dataToAddPjudge11 = dataToAddPjudge1[0] += '' + otherData + '' + dataToAddPjudge1[1];
                            FullDataMatch[index] = dataToAddPjudge11;
                        }
                        else {
                            dateAndList += '\n' + justicenamee + ' ' + result.rows.item(i).court_no;
                            var otherData = "\n" + result.rows.item(i).matter + '\n' + result.rows.item(i).list_no + ". " + result.rows.item(i).case_no + '\n' + result.rows.item(i).party_name;
                            dateAndList += otherData;
                            FullDataMatch.push(dateAndList);
                        }

                    }

                }
                else {




                    var index = jQuery.inArray(dateAndList, DateMatch);
                    var dataToEdit = FullDataMatch[index];


                    if (jQuery.inArray(justicenamee, JusticeNameMatch) == -1) {
                        JusticeNameMatch.push(justicenamee);

                        var otherData = "\n" + result.rows.item(i).judge_name + " " + result.rows.item(i).court_no + "\n" + result.rows.item(i).matter + '\n' + result.rows.item(i).list_no + ". " + result.rows.item(i).case_no + '\n' + result.rows.item(i).party_name;
                        dataToEdit += '' + otherData;
                        FullDataMatch[index] = dataToEdit;
                    }
                    else {
                        var dataToAddPjudge1 = dataToEdit.split(justicenamee + ' ' + result.rows.item(i).court_no);

                        if (i == 5) {
                            var s = dataToAddPjudge1[1];
                        }

                        var spc;
                        if (dataToAddPjudge1.length > 1) {
                            spc = "";
                        }
                        else {
                            spc = "\n";
                        }

                        var otherData = spc + result.rows.item(i).judge_name + " " + result.rows.item(i).court_no + '\n' + result.rows.item(i).matter + '\n' + result.rows.item(i).list_no + ". " + result.rows.item(i).case_no + '\n' + result.rows.item(i).party_name;
                        var dataToAddPjudge11 = dataToAddPjudge1[0] + '' + otherData + '' + dataToAddPjudge1[1];
                        FullDataMatch[index] = dataToAddPjudge11;
                    }

                }










                var tempdata = "";

                tempdata = tempdata += "Date : " + datess + " " + result.rows.item(i).list_name + '\n';
                tempdata = tempdata += "Justice Name : " + result.rows.item(i).judge_name + " " + result.rows.item(i).court_no + '\n';
                tempdata = tempdata += result.rows.item(i).matter + '\n';
                tempdata = tempdata += "Case - " + result.rows.item(i).list_no + ". " + result.rows.item(i).case_no + "" + '\n';
                tempdata = tempdata += result.rows.item(i).party_name + '\n';



                if (i == len - 1) {
                    dfg--;
                    var oneSH_Data = "";
                    ArrSH_Item.push(FullDataMatch.length);
                    for (var f = 0; f < FullDataMatch.length; f++) {
                        oneSH_Data += FullDataMatch[f] + '@@@';
                    }

                    data.push({ 'shid': ShDetail.shid, 'shName': ShDetail.shName, 'receiverEmail': ShDetail.shemail, 'receiverMobile': ShDetail.shmobile, 'NotifyBySMS': ShDetail.NotifyBySMS, 'NotifyByEmail': ShDetail.NotifyByEmail, 'CompanyName': ShDetail.CompanyName, 'data': oneSH_Data, 'CaseNo': result.rows.item(i).case_no, 'JusticeName': result.rows.item(i).judge_name, 'CourtNo': result.rows.item(i).court_no, 'Matter': result.rows.item(i).matter, 'PartyName': result.rows.item(i).party_name, 'CaseDate': datess, 'ListNo': result.rows.item(i).list_no, 'ListName': result.rows.item(i).list_name });

                    DataGlobalForSent.push({ 'shid': ShDetail.shid, 'shName': ShDetail.shName, 'receiverEmail': ShDetail.shemail, 'receiverMobile': ShDetail.shmobile, 'NotifyBySMS': ShDetail.NotifyBySMS, 'NotifyByEmail': ShDetail.NotifyByEmail, 'CompanyName': ShDetail.CompanyName, 'data': oneSH_Data, 'CaseNo': result.rows.item(i).case_no, 'JusticeName': result.rows.item(i).judge_name, 'CourtNo': result.rows.item(i).court_no, 'Matter': result.rows.item(i).matter, 'PartyName': result.rows.item(i).party_name, 'CaseDate': datess, 'ListNo': result.rows.item(i).list_no, 'ListName': result.rows.item(i).list_name });

//WordCountG+=result.rows.item(i).case_no.length+2 + result.rows.item(i).judge_name.length+2 + result.rows.item(i).court_no.length+2 + result.rows.item(i).matter.length+2 + result.rows.item(i).party_name.length+2 + datess.length+2 + result.rows.item(i).list_name.length+2;
WordCountG+=oneSH_Data.length;

//var WordCountL=result.rows.item(i).case_no.length+2 + result.rows.item(i).judge_name.length+2 + result.rows.item(i).court_no.length+2 + result.rows.item(i).matter.length+2 + result.rows.item(i).party_name.length+2 + datess.length+2 + result.rows.item(i).list_name.length+2;
var WordCountL=oneSH_Data.length;
//alert(WordCountL);

WordCountArray.push(WordCountL);

                }

            }
            //alert(FullDataMatch[0]+'\n\n'+FullDataMatch[1] +'\n\n'+ FullDataMatch[2]+'\n\n'+FullDataMatch[3]+'\n\n'+ FullDataMatch[4]+'\n\n'+FullDataMatch[5]);
            //alert(DateMatch);




        }
        else {
            dfg--;
        }
        if (dfg == 0) {

            // Code Changes to Show Review Screen Before Sending Notification to Stackeholder

            //SendToStackeHolder(data);  // Old Function to send Direct Notification to stackehoder

            ShowReviewScreen(data);                           // New Function to Show Review Screen Before Sending



        }
    });
}


var WordCountArray=new Array;
var WordCountG=0;


var DataGlobalForSent = new Array;

var recemailidG;
var recemobileG;
var NotifyByEmailG;
var NotifyBySMSG;
var NotifyByG;
var sh_idG;
var dataSentG;
var dataSentGServer="";


function CheckSocialAccountSetting(){


var $this = liquid.helper.oauth;
var tokenValue = window.localStorage.getItem('refreshtokenG');

if (tokenValue == null || tokenValue == "") {
//alert('Call Get Token Function First');

//startApp("Token");

        setTimeout(function () {
            $.mobile.changePage("socialAccountNew.htm", {
                transition: "slide"
            });
        }, 0);

        setTimeout(function () { drawToast("Please Configure Your Gmail Account to Send Notification to Stackeholder"); }, 1000);


}
else{
//alert('Refresh Token Found');
//showConfirm();
startApp("Refresh");
}

}

//var senderemailid = "";
function SendToStackeHolder(data) {

    logData = "";

    //alert('In SendToStackeHolder Function');

    //senderemailid = window.localStorage.getItem('senderEmailAddress');



    //------------------------New code Start------------------------------
    dataSentGServer = "";
    if (data.length >= 1) {

        $.mobile.loading('show', {
            text: 'Loading...',
            textVisible: true,
            theme: 'b',
            textonly: false
        });


        for (var x = 0; x < ArrSH_Item.length; x++) {


            var Ntfy = ArrSH_Notify[x];
            Ntfy = Ntfy.split('-');

            recemailidG = data[x].receiverEmail;
            recemobileG = data[x].receiverMobile;
            NotifyByEmailG = Ntfy[1];
            NotifyBySMSG = Ntfy[0];
            sh_idG = data[x].shid;
            dataSentG = data[x].data;

            var tData_SP = dataSentG.split('@@@');
            var tData_Sp1 = "";
            for (var y = 0; y < tData_SP.length; y++) {
                tData_Sp1 += tData_SP[y] + '\n\n'
            }
            dataSentG = tData_Sp1;


            if (NotifyBySMSG == "1" && NotifyByEmailG == "1") {
                NotifyByG = "Both";
            }

            if (NotifyBySMSG == "0" && NotifyByEmailG == "0") {
                NotifyByG = "";
            }

            if (NotifyBySMSG == "1" && NotifyByEmailG == "0") {
                NotifyByG = "SMS";
            }

            if (NotifyBySMSG == "0" && NotifyByEmailG == "1") {
                NotifyByG = "Email";
            }




			//New code to Send Data on Server

            if (NotifyByG != "SMS" && NotifyByG!="") {

                dataSentGServer += recemailidG + "@SplitContent@" + recemobileG + "@SplitContent@" + sh_idG + "@SplitContent@" + dataSentG + "@SplitContent@" + NotifyByG + "@SplitStackeholder@";

            }


            // New code ends


                        if (NotifyByG == "SMS") {

                        if(device.platform=='iOS' || device.platform=='IOS' || device.platform=='ios'){

                        }
                        else if(device.platform=='Android' || device.platform=='android'){
                        sms.createEvent(recemobileG, dataSentG, successSMS, errorSMS);
                        }
                        else{

                        }

                        }
                        if (NotifyByG == "Both") {

                        if(device.platform=='iOS' || device.platform=='IOS' || device.platform=='ios'){

                        }
                        else if(device.platform=='Android' || device.platform=='android'){
                        sms.createEvent(recemobileG, dataSentG, successSMS, errorSMS);
                        }
                        else{

                        }

                        }
                        else {

                        }


            if (x == ArrSH_Item.length - 1) {

              //  if (dataSentGServer.length >= 1) {

                if(senderemailid=="" || senderemailid==null){

                senderemailid = window.localStorage.getItem('senderEmailAddress');
                }
                else{

                }
//                    window.localStorage.setItem('senderEmailAddress', "asif.qureshi@mrsoftwares.in")
//                    senderemailid = window.localStorage.getItem('senderEmailAddress');

                    SplitAndSaveSH_SMS_log();
                    AjaxCallToSendDataOnServer(dataSentGServer, token, senderemailid);
               // }

                //$.mobile.loading('hide');
                LastNotificationSentDetail();
                //alert('List Sent Please Review Status in SMS/Email log');
            }

        }

    }
    else {

        $.mobile.changePage("NotificationList.html", {
            transition: "slide"
        });

        data += '<center><h3>No Notification</h3></center>';
        data += '<center><h5>Add <a href="shMapping.htm" onclick="ChangePrevPageValue()">Case Mapping</a></h5></center>';
        $(data).appendTo($('#justiceCollapsiblePanelNotification div:first'));
        justiceCollapsiblePanelNotification.find('div[data-role=collapsible]').collapsible({ refresh: true });

        $.mobile.loading('hide');
    }

    //------------------------New code End------------------------------

}

var logData = "";
var logDataArray = [];

function success() {
    alert("- Success Email")
    if (NotifyByG != "Both") {
        if (NotifyByG == "Email") {
            Store_Stackeholder_log(sh_idG, dataSentG, recemailidG, "", NotifyByG, "Success");
        }
        else {
            //Store_Stackeholder_log(sh_idG,dataSentG,"",recemobileG,NotifyByG,"Success");
        }
    }
    else {
        Store_Stackeholder_log(sh_idG, dataSentG, recemailidG, "", NotifyByG, "Success");
    }
    //alert('Email Success');
}


function error() {
    //alert(err + " - Error Email");

    if (NotifyByG != "Both") {
        if (NotifyByG == "Email") {
            Store_Stackeholder_log(sh_idG, dataSentG, recemailidG, "", NotifyByG, "Fail");
        }
        else {
            //Store_Stackeholder_log(sh_idG,dataSentG,"",recemobileG,NotifyByG,"Fail");
        }
    }
    else {
        Store_Stackeholder_log(sh_idG, dataSentG, recemailidG, "", NotifyByG, "Fail");
    }
    // alert('Email Error');
}


function successSMS() {
    //alert('SMS Success');
    if (NotifyByG != "Both") {
        if (NotifyByG == "Email") {
            //Store_Stackeholder_log(sh_idG,dataSentG,recemailidG,"",NotifyByG,"Success");
        }
        else {

            var logdate = new Date().getTime();
            var logdate1 = new Date(logdate).toString('yyyy-MM-dd hh:mm:ss');

            logData += sh_idG + "!@@@!" + dataSentG + "!@@@!" + "" + "!@@@!" + recemobileG + "!@@@!" + NotifyByG + "!@@@!" + "Success" + "!@@@!" + logdate1 + "!%%%!";

           // Store_Stackeholder_log(sh_idG, dataSentG, "", recemobileG, NotifyByG, "Success");
        }
    }
    else {

        var logdate = new Date().getTime();
        var logdate1 = new Date(logdate).toString('yyyy-MM-dd hh:mm:ss');

    logData += sh_idG + "!@@@!" + dataSentG + "!@@@!" + "" + "!@@@!" + recemobileG + "!@@@!" + NotifyByG + "!@@@!" + "Success" + "!@@@!" + logdate1 + "!%%%!";
        //Store_Stackeholder_log(sh_idG, dataSentG, "", recemobileG, NotifyByG, "Success");

    }

}


function errorSMS() {
   // alert('SMS Error');
    if (NotifyByG != "Both") {
        if (NotifyByG == "Email") {
            //Store_Stackeholder_log(sh_idG,dataSentG,recemailidG,"",NotifyByG,"Fail");
        }
        else {

            var logdate = new Date().getTime();
            var logdate1 = new Date(logdate).toString('yyyy-MM-dd hh:mm:ss');

    logData += sh_idG + "!@@@!" + dataSentG + "!@@@!" + "" + "!@@@!" + recemobileG + "!@@@!" + NotifyByG + "!@@@!" + "Fail" + "!@@@!" + logdate1 + "!%%%!";
            //Store_Stackeholder_log(sh_idG, dataSentG, "", recemobileG, NotifyByG, "Fail");
        }
    }
    else {

        var logdate = new Date().getTime();
        var logdate1 = new Date(logdate).toString('yyyy-MM-dd hh:mm:ss');

    logData += sh_idG + "!@@@!" + dataSentG + "!@@@!" + "" + "!@@@!" + recemobileG + "!@@@!" + NotifyByG + "!@@@!" + "Fail" + "!@@@!" + logdate1 + "!%%%!";
        //Store_Stackeholder_log(sh_idG, dataSentG, "", recemobileG, NotifyByG, "Fail");
    }



}

function SplitAndSaveSH_SMS_log() {

//    var logdate = new Date().getTime();
//    var logdate1 = new Date(logdate).toString('yyyy-MM-dd HH:mm:ss');

//    logData = "";
//    logData += '1' + "!@@@!" + 'data sent' + "!@@@!" + "asif@gmail.vom" + "!@@@!" + '87564412' + "!@@@!" + 'SMS' + "!@@@!" + "Fail" + "!@@@!" + logdate1 + "!%%%!";
//    logData += '2' + "!@@@!" + 'data sent1' + "!@@@!" + "asif123@gmail.vom" + "!@@@!" + '8756441265757' + "!@@@!" + 'Both' + "!@@@!" + "Success" + "!@@@!" + logdate1 + "!%%%!";


    calledBeforeSendAnyRequest(function (isConnected) {
        if (isConnected == true) {

            var lawyerD = JSON.parse(localStorage.getItem("lawyerID"));
            var lawyerId = lawyerD.lawyerid;

            var logDataServer = logData + "*BreakLawyerId*" + lawyerId;

            var url = MR_URL;
            var port = '8111';
            var requestTime = new Date().getTime();
            var webMethod = protocal + url + '/WebService_andriod.asmx/StoreSH_SMS_log_fromClient';
            $.ajax({
                type: "POST",
                url: webMethod,
                data: JSON.stringify({ data: logDataServer }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (msg) {
                    if (msg.d == "done") {

                        var logdataLocal = logData.split("!%%%!");

                        for (var i = 0; i < logdataLocal.length - 1; i++) {
                            var logdataFields = logdataLocal[i].split("!@@@!");
                            Store_Stackeholder_log(logdataFields[0], logdataFields[1], logdataFields[2], logdataFields[3], logdataFields[4], logdataFields[5], "1");
                        }

                      //  $.mobile.loading('hide');
                    }
                    else {

                     //   $.mobile.loading('hide');
                    }
                },


                error: function (XMLHttpRequest, textStatus, errorThrown) {

                   // $.mobile.loading('hide');
                    var responseTime = new Date().getTime();
                    var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: CheckSH_serverSync_Data_shCrud(ajax call)";
                    //errMsg = errMsg + "\n App Version : " + version;
                    insertLog(requestTime, responseTime, errMsg, function (returnId) { });
                    alert("Cannot reach the server! Please check your internet connection. If the problem persist call 9522300338");

                },

                beforeSend: function () {
                    $.mobile.loading('show', {
                        text: 'Please Wait...',
                        textVisible: true,
                        theme: 'b',
                        textonly: false
                    });

                }
            });




        }
        else {
            var logdataLocal = logData.split("!%%%!");

            for (var i = 0; i < logdataLocal.length-1; i++) {
                var logdataFields = logdataLocal[i].split("!@@@!");
                Store_Stackeholder_log(logdataFields[0], logdataFields[1], logdataFields[2], logdataFields[3], logdataFields[4], logdataFields[5], "0");
            }


        }
    });
}


function ShowReviewScreen(dataToShow) {

//SetDateNotification_NextDate();

            var justiceCollapsiblePanelNotification = $('#justiceCollapsiblePanelNotification');
            $('#justiceCollapsiblePanelNotification div:first').empty();
            $("[type=checkbox]").checkboxradio();
            justiceCollapsiblePanelNotification.find('div[data-role=collapsible]').collapsible({ refresh: true });




    if (dataToShow.length >= 1) {
        var i = 0;
        while (i < ArrSH_Item.length) {
            data = '';
            j = 0;
            courtNoZ = false;
            footer = false;

            var S_data = dataToShow[i].data;
            var S_data_Split = S_data.split("@@@");

            while (j < ArrSH_Item[i]) {

                if (!courtNoZ) {
                    data = data + '<div data-role="collapsible" class="ui-collapsible ui-collapsible-inset" data-collapsed="false">';
                    data = data + '<h2 class="ui-collapsible-heading">';

                    data = data + dataToShow[i].shName;

                    if (dataToShow[i].CompanyName != "") {
                        data = data + '&nbsp;&nbsp;&nbsp;  - &nbsp;&nbsp;&nbsp;' + dataToShow[i].CompanyName;
                    }

                    data = data + '</h2>';
                    data = data + '<ul data-role="listview" data-theme="d" data-divider-theme="d" class="ui-listview">';
                    data = data + '<li data-role="list-divider" role="heading" class="ui-li ui-li-divider ui-bar-d ui-li-has-count">';

                    var idSMS = "cbSMS_Screen" + i;
                    var idEmail = "cbEmail_Screen" + i;

                    var NEmail = dataToShow[i].NotifyByEmail;
                    var NSMS = dataToShow[i].NotifyBySMS;

                    data = data + '<fieldset class="ui-grid-a">';

                    data = data + '<div class="ui-block-a">';

                    if (NSMS == "1") {
                        data = data + '<input type="checkbox" name=' + idSMS + ' id=' + idSMS + ' onclick="ChangeNotifyTypeSH(this)" data-count='+WordCountArray[i]+' data-value=' + i + ' data-noityType="SMS" checked  data-mini="true" data-theme="a" class="custom" />';
                    }
                    else {
                    WordCountG=parseInt(WordCountG) - parseInt(WordCountArray[i]);
                        data = data + '<input type="checkbox" name=' + idSMS + ' id=' + idSMS + ' onclick="ChangeNotifyTypeSH(this)" data-count='+WordCountArray[i]+' data-value=' + i + ' data-noityType="SMS" data-mini="true" data-theme="a" class="custom" />';
                    }


                    data = data + '<label for=' + idSMS + '>Notify Via SMS</label>';
                    data = data + '</div>';
                    data = data + '<div class="ui-block-b">';

                    if (NEmail == "1") {
                        data = data + '<input type="checkbox" name=' + idEmail + ' id=' + idEmail + ' onclick="ChangeNotifyTypeSH(this)" data-count='+WordCountArray[i]+' data-value=' + i + ' data-noityType="Email" checked data-mini="true" data-theme="a" class="custom" />';
                    }
                    else {
                        data = data + '<input type="checkbox" name=' + idEmail + ' id=' + idEmail + ' onclick="ChangeNotifyTypeSH(this)" data-count='+WordCountArray[i]+' data-value=' + i + ' data-noityType="Email" data-mini="true" data-theme="a" class="custom" />';
                    }

                    data = data + '<label for=' + idEmail + '>Notify Via Email</label>';
                    data = data + '</div>';
                    data = data + '</fieldset>';
                    data = data + '</li> ';


                    courtNoZ = true;
                }

                data = data + '<li class="ui-li ui-li-static ui-btn-up-d">';

                var tdata = S_data_Split[j].split('\n');

                for (var u = 0; u < tdata.length; u++) {
                    data = data + '<p><strong>' + tdata[u] + '</strong></p>';
                }



                j++;

            }
            data = data + '</ui></div>';

            $(data).appendTo($('#justiceCollapsiblePanelNotification div:first'));
            $("[type=checkbox]").checkboxradio();
            justiceCollapsiblePanelNotification.find('div[data-role=collapsible]').collapsible({ refresh: true });
            i++;
        }
        $.mobile.loading('hide');
    }
    else {

        $.mobile.changePage("NotificationList.html", {
            transition: "slide"
        });


        data += '<center><h3>No Notification</h3></center>';
        data += '<center><h5>Add <a href="shMapping.htm" onclick="ChangePrevPageValue()">Case Mapping</a></h5></center>';
        $(data).appendTo($('#justiceCollapsiblePanelNotification div:first'));
        justiceCollapsiblePanelNotification.find('div[data-role=collapsible]').collapsible({ refresh: true });

        $.mobile.loading('hide');
    }


}


function Store_Stackeholder_log(sh_id, msg, recEmail, recMobile, NotifyBy, result_status,SS) {
    db.transaction(function (tx) {
        var logdate = new Date().getTime();
        tx.executeSql("insert into stackeholder_log (stackeholder_id,email,mobile,message_text,sent_Ondate,result_status,server_sync) values (?,?,?,?,?,?,?)", [sh_id, recEmail, recMobile, msg, logdate, result_status,SS], function (tx, result) {
            //alert('log saved');
        }, errorCB);
    }, errorCB)
}

var Co=1;
function Store_Stackeholder_log_Email(sh_id, msg, recEmail, recMobile, NotifyBy, result_status,sentTime,errormsg,max) {

    db.transaction(function (tx) {

                   var t = sentTime.split(/[- :]/);
                   var d = new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);

                   sentTime1 = d.getTime();

      tx.executeSql("insert into stackeholder_log (stackeholder_id,email,mobile,message_text,sent_Ondate,result_status,error_msg,server_sync) values (?,?,?,?,?,?,?,?)", [sh_id, recEmail, recMobile, msg, sentTime1, result_status, errormsg,'1'], function (tx, result) {


                    LastNotificationSentDetail();

            if(Co==max){
           $.mobile.loading('hide');
           alert('List Sent Please Review Status in SMS/Email log');
		   }
           Co++;
        }, errorCB);
    }, errorCB)
}

$(document).on('click', '#btnUpdated', function (event, ui) {

    var td = new Date().toString('yyyy-MM-dd');
    setTimeout(function After500Sec() { sendNotificationToSH(td, "Updated"); }, 500);

    // $.mobile.activePage.find('#currentProgress').fadeIn();
    //for(i=0;i<=100000;i++)
    //{
    //updateloding(i,100000);
    //}

});

//var NormalSHListCall="";
//var PreventDoubleCall="false";
function PrepareAndViewListSH() {
//NormalSHListCall="Normal";
//PreventDoubleCall="true";
//alert('function');
    try{

var $this = liquid.helper.oauth;
var tokenValue = window.localStorage.getItem('refreshtokenG');
if(tokenValue=="" || tokenValue==null){
          setTimeout(function () {
            $.mobile.changePage("socialAccountNew.htm", {
                transition: "slide"
            });
        }, 0);

        setTimeout(function () { drawToast("Please Configure Your Gmail Account to Send Notification to Stackeholder"); }, 1000);
    }
    else{
    var td = new Date().toString('yyyy-MM-dd');
    setTimeout(function After500Sec(){sendNotificationToSH(td,"Updated");},500);

    }

}
catch(err){

        setTimeout(function () {
            $.mobile.changePage("socialAccountNew.htm", {
                transition: "slide"
            });
        }, 0);

        setTimeout(function () { drawToast("Please Configure Your Gmail Account to Send Notification to Stackeholder"); }, 1000);

}


}



function PrepareAndViewListSHNewLogic() {

    try{

var $this = liquid.helper.oauth;
var tokenValue = window.localStorage.getItem('refreshtokenG');
if(tokenValue=="" || tokenValue==null){
          setTimeout(function () {
            $.mobile.changePage("socialAccountNew.htm", {
                transition: "slide"
            });
        }, 0);

        setTimeout(function () { drawToast("Please Configure Your Gmail Account to Send Notification to Stackeholder"); }, 1000);
    }
    else{

var datett=$.mobile.activePage.find('#NotificationdateToSend').val();
var splitDate=datett.split('-');
datett=splitDate[2] + "-" + splitDate[1] + "-"+splitDate[0];

setTimeout(function After500Sec() { sendNotificationToSH(datett, "Date"); }, 500);

    }

}
catch(err){

        setTimeout(function () {
            $.mobile.changePage("socialAccountNew.htm", {
                transition: "slide"
            });
        }, 0);

        setTimeout(function () { drawToast("Please Configure Your Gmail Account to Send Notification to Stackeholder"); }, 1000);

}


}

$(document).on('click', '#btnNextDay', function (event, ui) {
    var td = new Date().toString('yyyy-MM-dd');
    sendNotificationToSH(td, "NextDay");
});



function InsertShDetailFromServer(sh_crud_id, name, email, mobile, notifysms, notifyemail, companyName) {

    if (notifysms == "True") {
        notifysms = "1";
    }
    else {
        notifysms = "0";
    }
    if (notifyemail == "True") {
        notifyemail = "1";
    }
    else {
        notifyemail = "0";
    }

    db.transaction(function (tx) {
        tx.executeSql("insert into sh_crud(sh_crud_id,name,email,mobile,server_sync,notify_sms,notify_email,company_name) values('" + sh_crud_id + "','" + name + "','" + email + "','" + mobile + "','1','" + notifysms + "','" + notifyemail + "','" + companyName + "')", [], function (tx, result) {

        }, errorCB);
    }, errorCB)
}




function InsertSH_Log_FromServer(sh_id, msg, email, mobile, sentdate, result, error) {

//    var sentTime1 = new Date(sentdate);
//    sentTime1 = sentTime1.getTime();

//                   var t = sentdate.split(/[- :]/);
//                   var d = new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);
//                    sentTime1 = d.getTime();

        msg=msg.replace(/[/']/g , "");
        error=error.replace(/[/']/g , "");


    db.transaction(function (tx) {

                       var t = sentdate.split(/[- :]/);
                   var d = new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);
                    sentTime1 = d.getTime();

        tx.executeSql("insert into stackeholder_log(stackeholder_id,message_text,email,mobile,sent_Ondate,result_status,error_msg,server_sync) values('" + sh_id + "','" + msg + "','" + email + "','" + mobile + "','" + sentTime1 + "','" + result + "','" + error + "','1')", [], function (tx, result) {

        }, errorCB);
    }, errorCB)
}



function InsertShCaseMapDetailFromServer(shmid, casenumber, stackeholder_id, mapping_on) {
    db.transaction(function (tx) {
        tx.executeSql("insert into SH_Mapping(shm_id,casenumber_id,stackeholder_id,Mapping_on,server_sync) values('" + shmid + "','" + casenumber + "','" + stackeholder_id + "','" + mapping_on + "','1')", [], function (tx, result) {

        }, errorCB);
    }, errorCB)
}



function GetLawyerID() {
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM user_settings where user_id is not null', [],
        function (tx, result) {
            var len = result.rows.length;
            if (len > 0) {
                var lawyerid = result.rows.item(0).user_id;
                var lawyerID = { 'lawyerid': lawyerid };
                localStorage.setItem('lawyerID', JSON.stringify(lawyerID));

            }
        }, errorCB);
    }, errorCB);
}


function DeleteSh_Crud_DeletedFromServer() {
    db.transaction(function (tx) {
        tx.executeSql("delete FROM sh_crud where server_sync='del'", [],
        function (tx, result) {
        //alert('success');
        }, errorCB);
    }, errorCB);
}

function DeleteSh_Mapping_DeletedFromServer() {
    db.transaction(function (tx) {
        tx.executeSql("delete FROM SH_Mapping where server_sync='del'", [],
        function (tx, result) {
        //alert('success');
        }, errorCB);
    }, errorCB);
}



var SH_crud_SS = new Array;

function CheckSH_serverSync_Data_shCrud() {

    SH_crud_SS = [];

    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM user_settings where user_id is not null and guid is not null', [], function (tx, result) {

            var len = result.rows.length;
            if (len >= 1) {
                tx.executeSql("SELECT sh_crud_id,name,mobile,email,user_id,notify_sms,notify_email,company_name,server_sync FROM sh_crud cross join user_settings where server_sync=0 or server_sync='del'", [], function (tx, result1) {
                    var len = result1.rows.length;
                    if (result1.rows.length >= 1) {
                        for (var i = 0; i < result1.rows.length; i++) {
                            SH_crud_SS.push(result1.rows.item(i));
                        }
                        var SH_crud_SS_Sent = new Object();
                        SH_crud_SS_Sent.data1 = SH_crud_SS;

                        //Sent data to server

                        calledBeforeSendAnyRequest(function (isConnected) {
                            if (isConnected == true) {



                                var url = MR_URL;
                                var port = '8111';
                                var requestTime = new Date().getTime();
                                var webMethod = protocal + url + '/WebService_andriod.asmx/CheckAndSaveDataIn_shCrud';
                                $.ajax({
                                    type: "POST",
                                    url: webMethod,
                                    data: JSON.stringify(SH_crud_SS_Sent),
                                    contentType: "application/json; charset=utf-8",
                                    dataType: "json",
                                    success: function (msg) {
                                        if (msg.d == "done") {
                                            DeleteSh_Crud_DeletedFromServer();
                                            updateSH_server_sync_Sh_CrudTable("1");

                                            $.mobile.loading('hide');
                                        }
                                        else {

                                            $.mobile.loading('hide');
                                        }
                                    },


                                    error: function (XMLHttpRequest, textStatus, errorThrown) {

                                        $.mobile.loading('hide');
                                        var responseTime = new Date().getTime();
                                        var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: CheckSH_serverSync_Data_shCrud(ajax call)";
                                        errMsg = errMsg + "\n App Version : " + version;
                                        insertLog(requestTime, responseTime, errMsg, function (returnId) { });
                                        alert("Cannot reach the server! Please check your internet connection. If the problem persist call 9522300338");

                                    },

                                    beforeSend: function () {
                                        $.mobile.loading('show', {
                                            text: 'Please Wait...',
                                            textVisible: true,
                                            theme: 'b',
                                            textonly: false
                                        });

                                    }
                                });



                            }
                        });

                        //End Sent Data Code

                    }
                }, errorCB);
            }
        }, errorCB);
    }, errorCB);

}


var SH_crud_SSMap = new Array;

function CheckSH_serverSync_Data_SH_Mapping() {

    SH_crud_SSMap = [];

    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM user_settings where user_id is not null and guid is not null', [], function (tx, result) {

            var len = result.rows.length;
            if (len >= 1) {
                tx.executeSql("SELECT shm_id,casenumber_id,stackeholder_id,Mapping_on,user_id,server_sync FROM SH_Mapping cross join user_settings where server_sync=0 or server_sync='del'", [], function (tx, result1) {
                    var len = result1.rows.length;
                    if (result1.rows.length >= 1) {
                        for (var i = 0; i < result1.rows.length; i++) {
                            SH_crud_SSMap.push(result1.rows.item(i));
                        }
                        var SH_crud_SS_Sent = new Object();
                        SH_crud_SS_Sent.data1 = SH_crud_SSMap;

                        //Sent data to server

                        calledBeforeSendAnyRequest(function (isConnected) {
                            if (isConnected == true) {



                                var url = MR_URL;
                                var port = '8111';
                                var requestTime = new Date().getTime();
                                var webMethod = protocal + url + '/WebService_andriod.asmx/CheckAndSaveDataIn_SH_Mapping';
                                $.ajax({
                                    type: "POST",
                                    url: webMethod,
                                    data: JSON.stringify(SH_crud_SS_Sent),
                                    contentType: "application/json; charset=utf-8",
                                    dataType: "json",
                                    success: function (msg) {
                                        if (msg.d == "done") {
                                            //alert('done');
                                            DeleteSh_Mapping_DeletedFromServer();
                                            updateSH_server_sync_SH_MappingTable("1");
                                            $.mobile.loading('hide');
                                        }
                                        else {

                                            $.mobile.loading('hide');
                                        }
                                    },


                                    error: function (XMLHttpRequest, textStatus, errorThrown) {

                                        $.mobile.loading('hide');
                                        var responseTime = new Date().getTime();
                                        var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: CheckSH_serverSync_Data_SH_Mapping(ajax call)";
                                        //errMsg = errMsg + "\n App Version : " + version;
                                        insertLog(requestTime, responseTime, errMsg, function (returnId) { });
                                        alert("Cannot reach the server! Please check your internet connection. If the problem persist call 9522300338");

                                    },

                                    beforeSend: function () {
                                        $.mobile.loading('show', {
                                            text: 'Please Wait...',
                                            textVisible: true,
                                            theme: 'b',
                                            textonly: false
                                        });

                                    }
                                });



                            }
                        });

                        //End Sent Data Code

                    }
                }, errorCB);
            }
        }, errorCB);
    }, errorCB);

}

function SyncDatafromServerToDevice_Sh_curd() {


    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM user_settings where user_id is not null and guid is not null', [], function (tx, result) {

            var len = result.rows.length;
            if (len >= 1) {
                tx.executeSql('SELECT * FROM sh_crud', [], function (tx, result1) {
                    var len = result1.rows.length;
                    if (result1.rows.length == 0) {

                        //Check and Get Data from Server if Exist

                        //Sent data to server

                        calledBeforeSendAnyRequest(function (isConnected) {
                            if (isConnected == true) {

                                var lawyerD = JSON.parse(localStorage.getItem("lawyerID"));
                                var lawyerId = lawyerD.lawyerid;

                                var url = MR_URL;
                                var port = '8111';
                                var requestTime = new Date().getTime();
                                var webMethod = protocal + url + '/WebService_andriod.asmx/GetSH_DetailForUser';
                                $.ajax({
                                    type: "POST",
                                    url: webMethod,
                                    data: JSON.stringify({ lawyerId: lawyerId }),
                                    contentType: "application/json; charset=utf-8",
                                    dataType: "json",
                                    success: function (msg) {
                                        if (msg.d != "No Data") {
                                            //                        alert('done');
                                            //                        alert(msg.d);
                                            var dataserver = msg.d.split('\n');
                                            var sh_crud_id = new Array; var name = new Array; var email = new Array; var mobile = new Array; var notifysms = new Array; var notifyemail = new Array; var companyName = new Array;
                                            for (var t = 0; t < dataserver.length - 1; t++) {
                                                var temp;
                                                temp = dataserver[t].split("-");
                                                sh_crud_id.push(temp[0]);
                                                name.push(temp[1]);
                                                email.push(temp[2]);
                                                mobile.push(temp[3]);
                                                notifysms.push(temp[4]);
                                                notifyemail.push(temp[5]);
                                                companyName.push(temp[6]);
                                            }


                                            for (var s = 0; s < sh_crud_id.length; s++) {
                                                InsertShDetailFromServer(sh_crud_id[s], name[s], email[s], mobile[s], notifysms[s], notifyemail[s], companyName[s]);
                                            }

                                            $.mobile.loading('hide');
                                        }
                                        else {

                                            $.mobile.loading('hide');
                                        }
                                    },


                                    error: function (XMLHttpRequest, textStatus, errorThrown) {

                                        $.mobile.loading('hide');
                                        var responseTime = new Date().getTime();
                                        var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: SyncDatafromServerToDevice_Sh_curd(ajax call)";
                                        //errMsg = errMsg + "\n App Version : " + version;
                                        insertLog(requestTime, responseTime, errMsg, function (returnId) { });
                                        alert("Cannot reach the server! Please check your internet connection. If the problem persist call 9522300338");

                                    },

                                    beforeSend: function () {
                                        $.mobile.loading('show', {
                                            text: 'Please Wait...',
                                            textVisible: true,
                                            theme: 'b',
                                            textonly: false
                                        });

                                    }
                                });



                            }
                        });

                        //End Sent Data Code

                    }
                }, errorCB);
            }

        }, errorCB);
    }, errorCB);
}


function SyncDatafromServerToDevice_SH_Mapping() {

    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM user_settings where user_id is not null and guid is not null', [], function (tx, result) {

            var len = result.rows.length;
            if (len >= 1) {
                tx.executeSql('SELECT * FROM SH_Mapping', [], function (tx, result1) {
                    var len = result1.rows.length;
                    if (result1.rows.length == 0) {

                        //Check and Get Data from Server if Exist

                        //Sent data to server

                        calledBeforeSendAnyRequest(function (isConnected) {
                            if (isConnected == true) {

                                var lawyerD = JSON.parse(localStorage.getItem("lawyerID"));
                                var lawyerId = lawyerD.lawyerid;

                                var url = MR_URL;
                                var port = '8111';
                                var requestTime = new Date().getTime();
                                var webMethod = protocal + url + '/WebService_andriod.asmx/GetSH_CaseMapDetailForUser';
                                $.ajax({
                                    type: "POST",
                                    url: webMethod,
                                    data: JSON.stringify({ lawyerId: lawyerId }),
                                    contentType: "application/json; charset=utf-8",
                                    dataType: "json",
                                    success: function (msg) {
                                        if (msg.d != "No Data") {
                                            var dataserver = msg.d.split('\n');
                                            var shmID = new Array; var casenumber = new Array; var stackeholder_id = new Array; var mapping_on = new Array;
                                            for (var t = 0; t < dataserver.length - 1; t++) {
                                                var temp;
                                                temp = dataserver[t].split("-");
                                                shmID.push(temp[0]);
                                                casenumber.push(temp[1]);
                                                stackeholder_id.push(temp[2]);
                                                mapping_on.push(temp[3]);

                                            }


                                            for (var s = 0; s < casenumber.length; s++) {
                                                InsertShCaseMapDetailFromServer(shmID[s], casenumber[s], stackeholder_id[s], mapping_on[s]);
                                            }

                                            $.mobile.loading('hide');
                                        }
                                        else {

                                            $.mobile.loading('hide');
                                        }
                                    },


                                    error: function (XMLHttpRequest, textStatus, errorThrown) {

                                        $.mobile.loading('hide');
                                        var responseTime = new Date().getTime();
                                        var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: SyncDatafromServerToDevice_SH_Mapping(ajax call)";
                                        //errMsg = errMsg + "\n App Version : " + version;
                                        insertLog(requestTime, responseTime, errMsg, function (returnId) { });
                                        alert("Cannot reach the server! Please check your internet connection. If the problem persist call 9522300338");

                                    },

                                    beforeSend: function () {
                                        $.mobile.loading('show', {
                                            text: 'Please Wait...',
                                            textVisible: true,
                                            theme: 'b',
                                            textonly: false
                                        });

                                    }
                                });



                            }
                        });

                        //End Sent Data Code

                    }
                }, errorCB);
            }

        }, errorCB);
    }, errorCB);
}






function SyncDatafromServerToDevice_stackeholder_log() {


    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM user_settings where user_id is not null and guid is not null', [], function (tx, result) {

            var len = result.rows.length;
            if (len >= 1) {
                tx.executeSql('SELECT * FROM stackeholder_log', [], function (tx, result1) {
                    var len = result1.rows.length;
                    if (result1.rows.length == 0) {

                        //Check and Get Data from Server if Exist

                        //Sent data to server

                        calledBeforeSendAnyRequest(function (isConnected) {
                            if (isConnected == true) {

                                var lawyerD = JSON.parse(localStorage.getItem("lawyerID"));
                                var lawyerId = lawyerD.lawyerid;

                                var url = MR_URL;
                                var port = '8111';
                                var requestTime = new Date().getTime();
                                var webMethod = protocal + url + '/WebService_andriod.asmx/GetSH_SMSEmailLog';
                                $.ajax({
                                    type: "POST",
                                    url: webMethod,
                                    data: JSON.stringify({ lawyerId: lawyerId }),
                                    contentType: "application/json; charset=utf-8",
                                    dataType: "json",
                                    success: function (msg) {
                                        if (msg.d != "No Data") {
                                            //                        alert('done');
                                            //                        alert(msg.d);
                                            var dataserver = msg.d.split('*BreakeRows*');
                                            var sh_id = new Array; var msg = new Array; var email = new Array; var mobile = new Array; var sendate = new Array; var result = new Array; var error = new Array;
                                            for (var t = 0; t < dataserver.length - 1; t++) {
                                                var temp;
                                                temp = dataserver[t].split("*BreakeField*");
                                                sh_id.push(temp[0]);
                                                msg.push(temp[3]);
                                                email.push(temp[1]);
                                                mobile.push(temp[2]);
                                                sendate.push(temp[4]);
                                                result.push(temp[5]);
                                                error.push(temp[6]);
                                            }


                                            for (var s = 0; s < sh_id.length; s++) {
                                                InsertSH_Log_FromServer(sh_id[s], msg[s], email[s], mobile[s], sendate[s], result[s], error[s]);
                                            }

                                            $.mobile.loading('hide');
                                        }
                                        else {

                                            $.mobile.loading('hide');
                                        }
                                    },


                                    error: function (XMLHttpRequest, textStatus, errorThrown) {

                                        $.mobile.loading('hide');
                                        var responseTime = new Date().getTime();
                                        var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: SyncDatafromServerToDevice_Sh_curd(ajax call)";
                                        //errMsg = errMsg + "\n App Version : " + version;
                                        insertLog(requestTime, responseTime, errMsg, function (returnId) { });
                                        alert("Cannot reach the server! Please check your internet connection. If the problem persist call 9522300338");

                                    },

                                    beforeSend: function () {
                                        $.mobile.loading('show', {
                                            text: 'Please Wait...',
                                            textVisible: true,
                                            theme: 'b',
                                            textonly: false
                                        });

                                    }
                                });



                            }
                        });

                        //End Sent Data Code

                    }
                }, errorCB);
            }

        }, errorCB);
    }, errorCB);
}

var fromNoti="";
$(document).on('pageshow', '#notificationList', function (event) {

//Old Code ================================

////if(PrevoisPageAll=="" || PrevoisPageAll=='undefined' || PrevoisPageAll==null){


////    fromNoti="Notification";
////    $.support.cors = true;
////    runOnBrowser();
////    $(window).resize(function () { setMenuCss();});
////    bindTouchEffects();
////    //onDeviceReady();


////    LastNotificationSentDetail();
////    SetDateNotification_NextDate();

////    PrepareAndViewListSH();
////}
////else{

////if(fromNotification=="Yes"){
////    PrepareAndViewListSH();
////    }


//    LastNotificationSentDetail();
//    SetDateNotification_NextDate();


////}



//New code =================================
//alert('page evnt');

try{
if(device.platform=='Android' || device.platform=='android'){

    SetDateNotification_NextDate();

    PrepareAndViewListSHNewLogic();

    LastNotificationSentDetail();


}
else  if(device.platform=='iOS' || device.platform=='IOS' || device.platform=='ios'){

    SetDateNotification_NextDate();

    PrepareAndViewListSHNewLogic();

    LastNotificationSentDetail();


}
else{

    SetDateNotification_NextDate();

    PrepareAndViewListSHNewLogic();

    LastNotificationSentDetail();



}

}
catch(err){

    SetDateNotification_NextDate();

    PrepareAndViewListSHNewLogic();

    LastNotificationSentDetail();


}

});


$(document).on("click", "#LastNotificationDetail", function (event) {
    var as = $.mobile.activePage.find("#lastNotificationSentDate").html();
    var ts = as.split(' ');
    var ty = ts[0];
    var LastNotificationDateLS = { 'Date': ty }
    localStorage.setItem('LastNotificationDateLS', JSON.stringify(LastNotificationDateLS));
    $.mobile.changePage("Log.html", { transition: "slide" });

});

function LastNotificationSentDetail() {

    db.transaction(function (tx) {
        tx.executeSql("select max(sent_Ondate) as dateSent from stackeholder_log", [], function (tx, result) {
            var u = result.rows.item(0).dateSent;

            if (u == null || u=='NaN') {
            $.mobile.activePage.find("#lastNotificationSentDate").html(new Date().toString('dd/MM/yyyy hh:mm:ss tt'));
            }
            else{
            var y = new Date(result.rows.item(0).dateSent).toString('dd/MM/yyyy hh:mm:ss tt');
            $.mobile.activePage.find("#lastNotificationSentDate").html(new Date(result.rows.item(0).dateSent).toString('dd/MM/yyyy hh:mm:ss tt'));

            }


             var localNotificationTime=window.localStorage.getItem('localNotificationTime');
             $.mobile.activePage.find("#NotifyTime").html(localNotificationTime);


        }, errorCB);
    }, errorCB);

}

var SaveLogEmail = "";
function AjaxCallToSendDataOnServer(data, token, senderemailid) {
SaveLogEmail = "";
Co=1;

        $.mobile.loading('show', {
            text: 'Loading...',
            textVisible: true,
            theme: 'b',
            textonly: false
        });



token = window.localStorage.getItem('accesstokenG');
//alert("Referesh Token to send in code " +token);

var link="https://www.googleapis.com/oauth2/v1/userinfo?access_token="+token;
                    $.get(link,function(data1){
                    var senderEmailAddress=data1.email;
                    senderemailid=data1.email;
                    window.localStorage.setItem('senderEmailAddress', senderEmailAddress);
});

//token = "ya29.LgCWhF3tG5SQXhsAAAAu-hT7wHKY8e0lIu0ymLHKmxrPf_Jev76n1-HuJ8yjDA";


//var logdate = new Date().getTime();
//var logdate1 = new Date(logdate).toString('yyyy-MM-dd HH:mm:ss');

//logData = "";
//logData += '1' + "!@@@!" + 'data sent' + "!@@@!" + "asif@gmail.vom" + "!@@@!" + '87564412' + "!@@@!" + 'SMS' + "!@@@!" + "Fail" + "!@@@!" + logdate1 + "!%%%!";
//logData += '2' + "!@@@!" + 'data sent1' + "!@@@!" + "asif123@gmail.vom" + "!@@@!" + '8756441265757' + "!@@@!" + 'Both' + "!@@@!" + "Success" + "!@@@!" + logdate1 + "!%%%!";

calledBeforeSendAnyRequest(function (isConnected) {
    if (isConnected == true) {

        //alert('Token For Server : ' + token);
        var lawyerD = JSON.parse(localStorage.getItem("lawyerID"));
        var lawyerId = lawyerD.lawyerid;

        var url = MR_URL;
        var port = '8111';
        var requestTime = new Date().getTime();
        var webMethod = protocal + url + '/WebService_andriod.asmx/GetStackeholderDataAndSendMail';
        $.ajax({
            type: "POST",
            url: webMethod,
            data: JSON.stringify({ lawyerId: lawyerId, Data: data, token: token, SenderEmailId: senderemailid, SMSlogData: logData }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {

        $.mobile.loading('show', {
            text: 'Loading...',
            textVisible: true,
            theme: 'b',
            textonly: false
        });

                if (msg.d.indexOf('Fail') != 0) {

                    var SaveLogEmail = msg.d.split("*&&*");
                    var SaveLogEmail1 = SaveLogEmail[1].split("!%%%!");


if(SaveLogEmail1.length - 1!=0){
                    for (var i = 0; i < SaveLogEmail1.length - 1; i++) {
                        var SaveLogEmail2 = SaveLogEmail1[i].split("!@@@!");
                        Store_Stackeholder_log_Email(SaveLogEmail2[0], SaveLogEmail2[1], SaveLogEmail2[2], SaveLogEmail2[3], SaveLogEmail2[4], SaveLogEmail2[5], SaveLogEmail2[6],SaveLogEmail2[7],SaveLogEmail1.length - 1);
                    }
				}
				else{
				LastNotificationSentDetail();
				alert('List Sent Please Review Status in SMS/Email log');
				}


                  // alert('List Sent Please Review Status in SMS/Email log');

                    $.mobile.loading('hide');
                }
                else {
                    alert('Failed');
                    $.mobile.loading('hide');
                }
            },


            error: function (XMLHttpRequest, textStatus, errorThrown) {

                $.mobile.loading('hide');
                var responseTime = new Date().getTime();
                var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: AjaxCallToSendDataOnServer(ajax call)";
                errMsg = errMsg + "\n App Version : " + version;
                insertLog(requestTime, responseTime, errMsg, function (returnId) { });
                alert("Cannot reach the server! Please check your internet connection. If the problem persist call 9522300338");

            },

            beforeSend: function () {
                $.mobile.loading('show', {
                    text: 'Please Wait...',
                    textVisible: true,
                    theme: 'b',
                    textonly: false
                });

            }
        });



    }
	else{
	$.mobile.loading('hide');
	alert('List Sent Please Review Status in SMS/Email log. Email will Not be sent Because you are Not Connected to internet.');
	}
});

}





var SH_SMSEmail_SS = new Array;

function CheckSH_serverSync_Data_SMSEmail() {

    SH_SMSEmail_SS = [];

    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM user_settings where user_id is not null and guid is not null', [], function (tx, result) {

            var len = result.rows.length;
            if (len >= 1) {
                tx.executeSql('SELECT stackeholder_id,message_text,mobile,email,user_id,sent_Ondate,result_status,error_msg FROM stackeholder_log cross join user_settings where server_sync=0', [], function (tx, result1) {
                    var len = result1.rows.length;
                    if (result1.rows.length >= 1) {
                        for (var i = 0; i < result1.rows.length; i++) {
                            SH_SMSEmail_SS.push(result1.rows.item(i));
                        }
                        var SH_SMSEmail_SS_Sent = new Object();
                        SH_SMSEmail_SS_Sent.data1 = SH_SMSEmail_SS;

                        //Sent data to server

                        calledBeforeSendAnyRequest(function (isConnected) {
                            if (isConnected == true) {



                                var url = MR_URL;
                                var port = '8111';
                                var requestTime = new Date().getTime();
                                var webMethod = protocal + url + '/WebService_andriod.asmx/CheckAndSaveDataIn_SMSEmailLog';
                                $.ajax({
                                    type: "POST",
                                    url: webMethod,
                                    data: JSON.stringify(SH_SMSEmail_SS_Sent),
                                    contentType: "application/json; charset=utf-8",
                                    dataType: "json",
                                    success: function (msg) {
                                        if (msg.d == "done") {

                                            updateSH_server_sync_Sh_stackeholder_log("1");
                                            $.mobile.loading('hide');
                                        }
                                        else {

                                            $.mobile.loading('hide');
                                        }
                                    },


                                    error: function (XMLHttpRequest, textStatus, errorThrown) {

                                        $.mobile.loading('hide');
                                        var responseTime = new Date().getTime();
                                        var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: CheckSH_serverSync_Data_shCrud(ajax call)";
                                        //errMsg = errMsg + "\n App Version : " + version;
                                        insertLog(requestTime, responseTime, errMsg, function (returnId) { });
                                        alert("Cannot reach the server! Please check your internet connection. If the problem persist call 9522300338");

                                    },

                                    beforeSend: function () {
                                        $.mobile.loading('show', {
                                            text: 'Please Wait...',
                                            textVisible: true,
                                            theme: 'b',
                                            textonly: false
                                        });

                                    }
                                });



                            }
                        });

                        //End Sent Data Code

                    }
                }, errorCB);
            }
        }, errorCB);
    }, errorCB);

}


function NextDayNotificatioList(){

data =[];
subQuery;
u = 0;
ShDetail_And_Query =[];


dfg;
ArrSH_Item = [];
ArrSH_Notify = [];


DataGlobalForSent = [];

recemailidG="";
recemobileG="";
NotifyByEmailG="";
NotifyBySMSG="";
NotifyByG="";
sh_idG="";
dataSentG="";
dataSentGServer="";


            var justiceCollapsiblePanelNotification = $('#justiceCollapsiblePanelNotification');
            $('#justiceCollapsiblePanelNotification div:first').empty();
            $("[type=checkbox]").checkboxradio();
            justiceCollapsiblePanelNotification.find('div[data-role=collapsible]').collapsible({ refresh: true });

var datett=$.mobile.activePage.find('#NotificationdateToSend').val();
var splitDate=datett.split('-');
datett=splitDate[2] + "-" + splitDate[1] + "-"+splitDate[0];

setTimeout(function After500Sec() { sendNotificationToSH(datett, "Date"); }, 500);

}


$(document).on('click','#NextDayListSH',function(){

NextDayNotificatioList();

});


function SetDateNotification_NextDate(){

var NextWorkingDate=new Date().toString('yyyy-MM-dd');
var NextWorkingDay=new Date().getUTCDay();

if(NextWorkingDay==5 && NextWorkingDay==6){

var dates = new Date( Date.parse( NextWorkingDate ) );

if(NextWorkingDay==5){
dates.setDate( dates.getDate() + 3 );
}

if(NextWorkingDay==6){
dates.setDate( dates.getDate() + 2 );
}

$.mobile.activePage.find('#NotificationdateToSend').val(dates.toString('dd-MM-yyyy'));

}
else{


var dates = new Date( Date.parse( NextWorkingDate ) );
dates.setDate( dates.getDate() + 1 );
$.mobile.activePage.find('#NotificationdateToSend').val(dates.toString('dd-MM-yyyy'));

}

}

function ChangePrevPageValue(){

PrevoisPageAll="ChangePageName";

}

function CheckStackeholderAvailbility(callBack){

  var SD1 = new Date().getTime();
  var SD = new Date(SD1).toString('dd-MM-yyyy');

$.mobile.activePage.find("#StartDateSH").val(SD);
$.mobile.activePage.find("#EndDateSH").val(SD);

db.transaction(function(tx){
tx.executeSql("select * from sh_crud where server_sync!='del'",[],function(tx,result){
if(result.rows.length>=1){
if(typeof callBack!=='undefined'){
callBack("Yes");
 }
}
else{

if(typeof callBack!=='undefined'){
callBack("No");
 }

}

},errorCB);

},errorCB);
}

function getStakeHolderForMapping() {
    db.transaction(function (tx) {
        var query = "select * from sh_crud where server_sync!='del';";
        tx.executeSql(query, [], gotoShMappingForCaseMAp);
    }, errorCB, successCB);
}


function gotoShMappingForCaseMAp(tx, results) {

       try{
        var shMapData = JSON.parse(localStorage.getItem("shMapData"));
        var shId = shMapData.shId;
        stackeholderNameG=shMapData.shName;
        }
        catch(err){

        var shMapData = { 'shName': results.rows.item(0).name, 'shId': results.rows.item(0).sh_crud_id };
        localStorage.setItem('shMapData', JSON.stringify(shMapData));
        stackeholderNameG=results.rows.item(0).name;

        }


    FillDDLMapping();

    var RemPaging = { 'prevStartVal': 0, 'prevCurrentVal': 0, 'nxtEndVal': 0, 'nxtCurrentVal': 0, 'searchtype': 'all', 'Search': '' };
    localStorage.setItem('RemPaging', JSON.stringify(RemPaging));

   // $.mobile.changePage("shMapping.htm", { transition: "slide" });
}

function FillDDLMapping(){
var MappingDropDown = $('#mappingOptions');
MappingDropDown.empty();
MappingDropDown.selectmenu("refresh");

MappingDropDown.append('<option value="all">All Cases</option>');
var t1='<option value="mapped">Mapped To '+stackeholderNameG+'</option>';
MappingDropDown.append(t1);
var t2='<option value="Not Mapped Person">Not Mapped to '+stackeholderNameG+'</option>';
MappingDropDown.append(t2);
MappingDropDown.append('<option value="Not Mapped Anyone">Not Mapped to Anyone</option>');

$('#mappingOptions>option:nth-child(1)').attr('selected', true);
MappingDropDown.selectmenu("refresh");
}




    function showConfirmDeleteSH() {
     try{

        navigator.notification.confirm(

            'Are You Sure You Want to Delete',  // message
             onConfirmNotificationDeleteSH,              // callback to invoke with index of button pressed
            'Confirmation',            // title
            'Delete,Cancel'          // buttonLabels
        );
        }
        catch(err){

        DeleteSH_Normally(SHID_to_Delete);

    }

}

	function onConfirmNotificationDeleteSH(button){

  	   if(button==1){

        DeleteSH_Normally(SHID_to_Delete);

	}

}


    function DeleteSH_Normally(ShID_del){
    db.transaction(function(tx){
    tx.executeSql("update sh_crud set server_sync='del' where sh_crud_id=?",[ShID_del],function(tx,result){

            $('#btnSubmit').text('Submit');
            $.mobile.activePage.find("#btnSubmit").val('submit');
            //$('#btnSubmit').button('refresh');
                            $("#name").val('');
                            $("#mobile").val('');
                            $("#email").val('');
                            $("#company").val('');
    localStorage.removeItem('shMapData');
    alert('Stackeholder Deleted Successfully.');

    },errorCB);
    },errorCB);
    }



    function DeleteSH_ForceToDelete(ShID_del){
    db.transaction(function(tx){
    tx.executeSql("update sh_crud set server_sync='del' where sh_crud_id=?",[ShID_del],function(tx,result){

            $('#btnSubmit').text('Submit');
            $.mobile.activePage.find("#btnSubmit").val('submit');
            //$('#btnSubmit').button('refresh');
                            $("#name").val('');
                            $("#mobile").val('');
                            $("#email").val('');
                            $("#company").val('');


     tx.executeSql("update SH_Mapping set server_sync='del' where stackeholder_id=?",[ShID_del],function(tx,result){

     });


    localStorage.removeItem('shMapData');
    alert('Stackeholder Deleted Successfully.');

    },errorCB);
    },errorCB);
    }

    function CheckMappedCasesForSH_Delete(){
    db.transaction(function(tx){
    tx.executeSql("select * from SH_Mapping where stackeholder_id=? and server_sync!='del'",[SHID_to_Delete],function(tx,result){
    if(result.rows.length>=1){
    showConfirmForceToDeleteDeleteSH();
    }
    else{
    showConfirmDeleteSH();

    }
    },errorCB);
    },errorCB);
    }



     function showConfirmForceToDeleteDeleteSH() {
     try{

        navigator.notification.confirm(

            'Cases are Mapped to this Stackeholder If you will Delete this Stackeholder It will also Delete All Mapped cases Data',  // message
             onConfirmNotificationDeleteSHForce,              // callback to invoke with index of button pressed
            'Confirmation',            // title
            'Force To Delete,Cancel'          // buttonLabels
        );
        }
        catch(err){

        DeleteSH_ForceToDelete(SHID_to_Delete);

        }
    }

    function onConfirmNotificationDeleteSHForce(button){
     if(button==1){
    DeleteSH_ForceToDelete(SHID_to_Delete);
    }
    }


    $(document).on('click', '#GmailoAuth', function () {
    startApp("Token");
    });


    $(document).on("pageshow","#socialAccountNew",function(){


   var $this = liquid.helper.oauth;
var tokenValue = window.localStorage.getItem('refreshtokenG');

if (tokenValue == null || tokenValue == "") {
    $("#ConfigureAccountStatus").attr("class","NotconfigureAccount");
    $("#ConfigureAccountStatus").html("Account is Not Configured Now");
}
else{
    $("#ConfigureAccountStatus").attr("class","configureAccount");
    $("#ConfigureAccountStatus").html("Account Already Configured");

    }
  });


   $(document).on("pagebeforehide","#lawyerNames",function(){
   //alert('Before hide');
   var SH_Sync="";
   try{
   SH_Sync=localStorage.getItem("SH_Sync");

   if(SH_Sync=="Yes"){

   }
   else{
   db.transaction(function(tx){
tx.executeSql("select * from sh_crud",[],function(tx,result){
if(result.rows.length<=0){

localStorage.setItem("SH_Sync","Yes");
Server_Sync_Stackeholder();

}
         });
     });
   }

   }
   catch(err){
   db.transaction(function(tx){
tx.executeSql("select * from sh_crud",[],function(tx,result){
if(result.rows.length<=0){

localStorage.setItem("SH_Sync","Yes");
Server_Sync_Stackeholder();
}
         });
     });
   }


  });


  function ChangeLastNotificationTimeWhenStartApp(){

  var Lt=window.localStorage.getItem('localNotificationTime');
  var hour;var min;var AM_PM;
  var breakcolun=Lt.split(":");
  hour=breakcolun[0];
  var breakSpace=breakcolun[1].split(" ");
  min=breakSpace[0];
  AM_PM=breakSpace[1];
  if(AM_PM=="PM" || AM_PM=="pm"){

   if(hour==1){ hour=13; }
   if(hour==2){ hour=14; }
   if(hour==3){ hour=15; }
   if(hour==4){ hour=16; }
   if(hour==5){ hour=17; }
   if(hour==6){ hour=18; }
   if(hour==7){ hour=19; }
   if(hour==8){ hour=20; }
   if(hour==9){ hour=21; }
   if(hour==10){ hour=22; }
   if(hour==11){ hour=23; }
   if(hour==0){ hour=00; }
   }


   var now1 = new Date();
    //now1.setHours(hour.toString(),min.toString(),00,00);
      now1.setHours(hour,min,58,00);
    //  now1.setMinutes(min,05,00);
    //  now1.setSeconds(05,00);
    //  now1.setMilliseconds(00);

    var d = new Date();
    d=d.toString("dd/MM/yyyy");

    try{
    if (typeof plugins !== "undefined") {


	 try{
        if(device.platform=='Android' || device.platform=='android'){

          //plugins.localNotification.add({
          //  date : now1,
          //  message :"Send Notification to Stackeholder",
          //  ticker : "Date : "+ d,
          //  repeatDaily : true,
          //  id : 5
          //});
		  window.plugin.notification.local.cancelAll();
		  window.plugin.notification.local.add({
								id:      1,
								title:   'Inform your clients about their Cases',
								message: "Date : " + d,
								repeat:  'daily',
								date:    now1
							});


		  //alert('alrm set new');
		  }
		  else if(device.platform=='iOS' || device.platform=='IOS' || device.platform=='ios'){

                              window.plugins.localNotification.add({
                                                                   fireDate        : now1,
                                                                   alertBody       : "Send Notification to Stackeholder",
                                                                   action          : "View",
                                                                   repeatInterval  : "daily",
                                                                   soundName       : "beep.caf",
                                                                   badge           : 0,
                                                                   notificationId  : 1234,
                                                                   foreground      : function(notificationId){
                                                                   alert("Send Notification to Stackeholder");
                                                                   },
                                                                   background  : function(notificationId){
                                                                   alert("Send Notification to Stackeholder");
                                                                   }
                                                                   });

		  }
       }
	   catch(err){}


        }
        }catch(err){}


  }

  function ChangeLocalNotificationTime(){
  //alert('called');
  var Lt=$.mobile.activePage.find("#LocalNotifyTime").val();
  //alert(Lt);
  var hour;var min;var AM_PM;

  var breakcolun=Lt.split(":");
  if(breakcolun.length==2){
  if(breakcolun[0]<=12 && breakcolun[0]>=0){
  hour=breakcolun[0];
  var breakSpace=breakcolun[1].split(" ");
  if(breakSpace.length==2){
  if(breakSpace[0]<=59 && breakSpace[0]>=0){
  min=breakSpace[0];
  if(breakSpace[1]=="AM" || breakSpace[1]=="am" || breakSpace[1]=="PM" || breakSpace[1]=="pm"){
   AM_PM=breakSpace[1];


   if(AM_PM=="PM" || AM_PM=="pm"){

   if(hour==1){ hour=13; }
   if(hour==2){ hour=14; }
   if(hour==3){ hour=15; }
   if(hour==4){ hour=16; }
   if(hour==5){ hour=17; }
   if(hour==6){ hour=18; }
   if(hour==7){ hour=19; }
   if(hour==8){ hour=20; }
   if(hour==9){ hour=21; }
   if(hour==10){ hour=22; }
   if(hour==11){ hour=23; }
   if(hour==0){ hour=00; }
   }

   //var alarmtime1=hour.toString();

    var now1 = new Date();
    //now1.setHours(hour.toString(),min.toString(),00,00);
      now1.setHours(hour,min,58,00);

    var d = new Date();
    d=d.toString("dd/MM/yyyy");

    try{
    if (typeof plugins !== "undefined") {


	 try{
         if(device.platform=='Android' || device.platform=='android'){
          //plugins.localNotification.add({
          //  date : now1,
          //  message :"Send Notification to Stackeholder",
          //  ticker : "Date : "+ d,
          //  repeatDaily : true,
          //  id : 5
          //});
		   window.plugin.notification.local.cancelAll();
		   window.plugin.notification.local.add({
								id:      1,
								title:   'Inform your clients about their Cases',
								message: "Date : " + d,
								repeat:  'daily',
								date:    now1
							});


		  }
		  else if(device.platform=='iOS' || device.platform=='IOS' || device.platform=='ios'){

                              window.plugins.localNotification.add({
                                                                   fireDate        : now1,
                                                                   alertBody       : "Send Notification to Stackeholder",
                                                                   action          : "View",
                                                                   repeatInterval  : "daily",
                                                                   soundName       : "beep.caf",
                                                                   badge           : 0,
                                                                   notificationId  : 1234,
                                                                   foreground      : function(notificationId){
                                                                   alert("Send Notification to Stackeholder");
                                                                   },
                                                                   background  : function(notificationId){
                                                                   alert("Send Notification to Stackeholder");
                                                                   }
                                                                   });


		  }



       window.localStorage.setItem('LocalNotificationStatus', 'ON');
       $("#snd-switch").val("on").flipswitch("refresh");




       }
	   catch(err){
       window.localStorage.setItem('LocalNotificationStatus', 'ON');
       $("#snd-switch").val("on").flipswitch("refresh");
       }


        }
        }catch(err){}



    window.localStorage.setItem('localNotificationTime', Lt);

             var localNotificationTime=window.localStorage.getItem('localNotificationTime');
             $.mobile.activePage.find("#NotifyTime").html(localNotificationTime);

             $( "#popupDialogChangeNotificationTime" ).popup( "close");

  }
  else{
  alert("Invalid Time Format  Format Should be (ex - 01:15 PM , 12:30 AM)!");
  return false;
  }
  }
  else{
  alert("Invalid Time Format  Format Should be (ex - 01:15 PM , 12:30 AM)!");
  return false;
  }
  }
  else{
  alert("Invalid Time Format  Format Should be (ex - 01:15 PM , 12:30 AM)!");
  return false;
  }
  }
  else{
  alert("Invalid Time Format  Format Should be (ex - 01:15 PM , 12:30 AM)!");
  return false;
  }
  }
  else{
  return false;
  alert("Invalid Time Format  Format Should be (ex - 01:15 PM , 12:30 AM)!");
  }

 }

//  $(document).on("popupbeforeposition","#popupDialogChangeNotificationTime",function(){
//             var localNotificationTime=window.localStorage.getItem('localNotificationTime');
//             $.mobile.activePage.find("#LocalNotifyTime").val(localNotificationTime);
//  });

  function SetNotificationTimeInPopup(){
             var localNotificationTime=window.localStorage.getItem('localNotificationTime');
             $.mobile.activePage.find("#LocalNotifyTime").val(localNotificationTime);
  }


    $(document).on('click',"#btnCancelNotification",function(){
    if(fromNotification=="Yes"){
    $.mobile.changePage("index.html?Notify", {
                                transition: "slide"
                            });
    }
    else{
        $.mobile.changePage("index.html", {
                                transition: "slide"
                            });
    }

    });


    $(document).on('click',"#scsHome",function(){
    if(fromNotification=="Yes"){
    $.mobile.changePage("index.html?Notify", {
                                transition: "slide"
                            });
    }
    else{
        $.mobile.changePage("index.html", {
                                transition: "slide"
                            });
    }

    });



//     function satish(){
//     alert('called fun');
//     ChangeLastNotificationTimeWhenStartApp();
//     }
