// notes js function //
var caseheading = "";

function shownotes(list)
{
    $.mobile.loading('show',
    {
        text: 'Loading...',
        textVisible: true,
        theme: 'b',
        textonly: false
    });
    if (list != '')
    {
        var caseNo = $(list).attr('data-value');
        caseNo = caseNo.replace(/[//]/g, "");
        caseNo = caseNo.replace(/[/.]/g, "");
        caseNo = caseNo.replace(/[/-]/g, "");
        //var caseNo = $(list).attr('data-id');
        $.mobile.changePage("note.htm",
        {
            transition: "slide"
        });
        caseheading = caseNo;
    }

    calledBeforeSendAnyRequest(function(isConnected)
       {
        if (isConnected == true && GA_on_off == "true")
        {           
			GA.sendEvent('Toggle MenuBar - Notes', 'shownotes(list)', 'Click On Notes', 1, function() {}, errorCallback);  
        }
       });

}
$(document).on('pagebeforeshow', '#notes', function(event, ui)
{
    $('#caseheading').html(caseheading);
    shownotelist();
});

function showpopup()
{
    $("#btnUpdateNote").hide();
    $("#btnSubmitNote").show();
    $("#btnDelete").hide();
    $("#btnCancel").show();
    $("#title").val('');
    $("#txtnote").html('');
}


var shw=true;
function insertnotes()
{

shw=true;
    var txttitle = $("#title").val();
    if (txttitle.trim().length == 0)
    {
        $("#title").focus();
        drawToast("Enter Title ");
        return false;
    }
    var txtnarrative = $("#txtnote").val();
    if (txtnarrative.trim().length == 0)
    {
        $("#txtnote").focus();
        drawToast("Enter Narrative ");
        return false;
    }
    var caseId = $('#caseheading').html();

    caseId = caseId.replace(/[//]/g, "");
    caseId = caseId.replace(/[/.]/g, "");
    caseId = caseId.replace(/[/ ]/g, "");
    caseId = caseId.replace(/[/(]/g, "");
    caseId = caseId.replace(/[/)]/g, "");
    caseId = caseId.replace(/[/-]/g, "");


    if(caseId.indexOf('In')!=-1){
     caseId = caseId.split('In');
     }
     else {
      caseId = caseId.split(',');

if(caseId.length>1){
var removeItem = "";
caseId = jQuery.grep(caseId, function(value) {
  return value != removeItem;
});
}

     }

    var count = caseId.length;

    if(count<=1){   
    caseNo = $('#caseheading').html();
    caseNo = caseNo.replace(/[//]/g, "");
    caseNo = caseNo.replace(/[/.]/g, "");
    caseNo = caseNo.replace(/[/ ]/g, "");
    caseNo = caseNo.replace(/[/(]/g, "");
    caseNo = caseNo.replace(/[/)]/g, "");
    caseNo = caseNo.replace(/[/-]/g, "");
    caseNo = caseNo.replace(/[/,]/g, "");
    }

    db.transaction(function(tx)
    {
        var query = "select exist_id from existings where ";
        if (count > 1)
        {
            query = query + ' ( ';
            for (var i = 0; i < count; i++)
            {
                if (i == 0)
                {
                    query = query + " info_value like '%" + caseId[i].trim() + "%'";
                }
                else
                {
                    query = query + " or info_value like '%" + caseId[i].trim() + "%' ";
                }
            }
            query = query + ' ) ';
        }
        else
        {
            query = query + " info_value like '%" + caseNo.trim() + "%'";
        }
        tx.executeSql(query, [], function(tx, result)
        {
            try
            {
                var len = result.rows.length;
                if (len > 0)
                {
                    for (var i = 0; i < len; i++)
                    {
                        var casenote = result.rows.item(i);
                        var casenoteexist_id = casenote.exist_id;
                        var myDate = new Date();
                        var todatDate = myDate.getFullYear() + '-' + ('0' + (myDate.getMonth() + 1)).slice(-2) + '-' + ('0' + (myDate.getDate())).slice(-2);
                        tx.executeSql("insert into Note (casenumber_id,note_title,note_narrative,date,server_sync) values (?,?,?,?,?)", [casenoteexist_id, txttitle.toString().trim(), txtnarrative.toString(), todatDate, "0"], function(tx, result)
                        {
                            $('#popupaddnote').popup("close");
                            //                                                 // Start Server Sync Code Here..
                            //                                        calledBeforeSendAnyRequest(function (isConnected) {
                            //                                                if (isConnected == true) {
                            //                                                        // GetMaxSH_ID();
                            //                                                        var lawyerD = JSON.parse(localStorage.getItem("lawyerID"));
                            //                                                        var lawyerId = lawyerD.lawyerid;
                            //                                                        var url = MR_URL;
                            //                                                        var port = '8111';
                            //                                                        var requestTime = new Date().getTime();
                            //                                                        var webMethod = 'http://' + url + '/WebService_andriod.asmx/AddNotesDetails';
                            //                                                        $.ajax({
                            //                                                                type: "POST",
                            //                                                                url: webMethod,
                            //                                                                data: JSON.stringify({
                            //                                                                        lawyerId: lawyerId,
                            //                                                                        note_id: noteid,
                            //                                                                        note_title: txttitle,
                            //                                                                        note_narrative: txtnarrative,
                            //                                                                        note_date: todatDate
                            //                                                                }),
                            //                                                                contentType: "application/json; charset=utf-8",
                            //                                                                dataType: "json",
                            //                                                                success: function (msg) {
                            //                                                                        if (msg.d == "done") {
                            //                                                                                updatenoteTable_server_sync(noteid, "1");
                            //                                                                                $.mobile.loading('hide');
                            //                                                                        }
                            //                                                                        else {
                            //                                                                                $.mobile.loading('hide');
                            //                                                                        }
                            //                                                                },
                            //                                                                error: function (XMLHttpRequest, textStatus, errorThrown) {
                            //                                                                        var responseTime = new Date().getTime();
                            //                                                                        var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: updateNote(ajax call)";
                            //                                                                        errMsg = errMsg + "\n App Version : " + version;
                            //                                                                        insertLog(requestTime, responseTime, errMsg, function (returnId) {});
                            //                                                                        alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
                            //                                                                        $.mobile.loading('hide');
                            //                                                                },
                            //                                                                beforeSend: function () {
                            //                                                                        $.mobile.loading('show', {
                            //                                                                                text: 'Please Wait...',
                            //                                                                                textVisible: true,
                            //                                                                                theme: 'b',
                            //                                                                                textonly: false
                            //                                                                        });
                            //                                                                }
                            //                                                        });
                            //                                                }
                            //                                        });
                            //                                        // end server call
if(shw==true){
shw=false;
                            drawToast('Add Successfully.');
                            shownotelist();
                            }
                        }, errorCB, successCB);
                        $.mobile.loading('hide');
                    }
                }
                else
                {
                    $('#popupaddnote').popup("close");
                    drawToast('Please Update Case Number First');
                }
            }
            catch (err)
            {
                var errMsg = err + "\nMethod: #prev(jquery) search tx1" + "\nError Stack:" + err.stack;
                insertErrorLogs(errMsg, function(id) {});
            }
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: #shlistpopup(executeSql) search";
            insertErrorLogs(errMsg, function(id) {});
        });
    }, errorCB, successCB);

     calledBeforeSendAnyRequest(function(isConnected)
       {
        if (isConnected == true && GA_on_off == "true")
        {           
			GA.sendEvent('Toggle MenuBar - Notes', 'insertnotes()', 'Click On Notes Insert Event', 1, function() {}, errorCallback);  
        }
       });
}

function shownotelist()
{

$('#notelistcollapsible').html('');
    $.mobile.loading('show',
    {
        text: 'Loading...',
        textVisible: true,
        theme: 'b',
        textonly: false
    });
    var caseId = $('#caseheading').html();
    
    caseId = caseId.replace(/[//]/g, "");
    caseId = caseId.replace(/[/.]/g, "");
    caseId = caseId.replace(/[/ ]/g, "");
    caseId = caseId.replace(/[/(]/g, "");
    caseId = caseId.replace(/[/)]/g, "");
    caseId = caseId.replace(/[/-]/g, "");


      if(caseId.indexOf('In')!=-1){
     caseId = caseId.split('In');
     }
     else {
      caseId = caseId.split(',');

if(caseId.length>1){
var removeItem = "";
caseId = jQuery.grep(caseId, function(value) {
  return value != removeItem;
});
}

     }


    var count = caseId.length;
     $('#notelistcollapsible').html('');
    if(count<=1){   
    $('#notelistcollapsible').html('');
    caseNo = $('#caseheading').html();
    caseNo = caseNo.replace(/[//]/g, "");
    caseNo = caseNo.replace(/[/.]/g, "");
    caseNo = caseNo.replace(/[/ ]/g, "");
    caseNo = caseNo.replace(/[/(]/g, "");
    caseNo = caseNo.replace(/[/)]/g, "");
    caseNo = caseNo.replace(/[/-]/g, "");
    caseNo = caseNo.replace(/[/,]/g, "");
    }

    db.transaction(function(tx)
    {
        var query = "select distinct note_id,casenumber_id,note_title,note_narrative,date from Note  inner join existings on existings.exist_id = Note.casenumber_id where Note.server_sync !='del' and ";
        if (count > 1)
        {
            query = query + ' ( ';
            for (var i = 0; i < count; i++)
            {
                if (i == 0)
                {
                    query = query + " info_value like '%" + caseId[i].trim() + "%'";
                }
                else
                {
                    query = query + " or info_value like '%" + caseId[i].trim() + "%' ";
                }
            }
            query = query + ' ) ';
        }
        else
        {
            query = query + " info_value like '%" + caseNo.trim() + "%'";
        }
        query = query + " order by Note_id DEsc ";
        tx.executeSql(query, [], function(tx, result)
        {
            try
            {
                var len1 = result.rows.length;
                if (len1 > 0)
                {
                    for (var j = 0; j < len1; j++)
                    {
                        var note = result.rows.item(j);
                        // alert('show list funcion :'+note.note_id+' '+note.casenumber_id +' ' +note.note_title+' '+note.note_narrative+' '+note.date );      
                        if (j == 0)
                        {
                            $("#notelistcollapsible").append('<div id="set' + note.note_id + '"  data-content-theme="a" data-theme="b" data-role="collapsible" class="ui-collapsible ui-collapsible-inset"  data-collapsed="false"></div>');
                        }
                        else
                        {
                            $("#notelistcollapsible").append('<div id="set' + note.note_id + '"  data-content-theme="a" data-theme="b" data-role="collapsible" class="ui-collapsible ui-collapsible-inset"  data-collapsed="true"></div>');
                        }
                        $("#set" + note.note_id + "").append('<h3>Title - ' + note.note_title + '</h3>');
                        $("#set" + note.note_id + "").append('<ul data-role="listview"   id="list' + note.note_id + '"> </ul>');
                        $("#list" + note.note_id + "").append('<li class="ui-li-has-alt"><a href="#"><h3> Date - ' + (new Date(note.date).toString('dd/MM/yyyy')) + ' </h3> <h3 style="white-space: normal; word-break: break-all;"> ' + note.note_narrative + ' </h3></a><a href="#popupaddnote"  data-rel="popup" data-transition="pop" data-icon="edit" onclick="updatelistnote(this)" data-value="' + note.note_id + '"></a></li>');
//                        $('#notelistcollapsible').collapsible({refresh: true});
                        $('#notelistcollapsible').trigger('create');
                       
                    }
                }
                else
                {
                    $('#notelistcollapsible').append('<center><span style=" color: #FDF8F8; ">Notes Not found</span></center>');
//                    $('#notelistcollapsible').collapsible({refresh: true});
                    $('#notelistcollapsible').trigger('create');
                   
                }
            }
            catch (err)
            {
                var errMsg = err + "\nMethod: #shownotelist(jquery) show note list" + "\nError Stack:" + err.stack;
                insertErrorLogs(errMsg, function(id) {});
            }
            $.mobile.loading('hide');
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: #shownotelist(executeSql) search";
            insertErrorLogs(errMsg, function(id) {});
        });
    }, errorCB, successCB);
}
var noteid = "";

function updatelistnote(list)
{
    if (list != '')
    {
        noteid = $(list).attr('data-value');
        //  alert('show id '+noteid);
        db.transaction(function(tx)
        {
            var query = "select * from Note WHERe note_id = " + noteid.toString().trim();
            tx.executeSql(query, [], function(tx, result)
            {
                try
                {
                    var len = result.rows.length;
                    if (len > 0)
                    {
                        noteid = result.rows.item(0).note_id;
                        var notetitle = result.rows.item(0).note_title;
                        var notenarrative = result.rows.item(0).note_narrative;
                        $("#title").val(notetitle);
                        $("#txtnote").html(notenarrative);
                        $("#btnUpdateNote").show();
                        $("#btnSubmitNote").hide();
                        $("#btnDelete").show();
                        $("#btnCancel").hide();
                    }
                }
                catch (err)
                {
                    var errMsg = err + "\nMethod: #updatelistnote(jquery) show note list" + "\nError Stack:" + err.stack;
                    insertErrorLogs(errMsg, function(id) {});
                }
            }, function(err)
            {
                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: #updatelistnote(executeSql) search";
                insertErrorLogs(errMsg, function(id) {});
            });
        }, errorCB, successCB);
    }
}

function updateNote(button)
{
    var check = button;
    var txttitle = $("#title").val();
    if (txttitle.trim().length == 0)
    {
        $("#title").focus();
        drawToast("Enter Title ");
        return false;
    }
    var txtnarrative = $("#txtnote").val();
    if (txtnarrative.trim().length == 0)
    {
        $("#txtnote").focus();
        drawToast("Enter Narrative ");
        return false;
    }
    //  alert(noteid);
    var myDate = new Date();
    var todatDate = myDate.getFullYear() + '-' + ('0' + (myDate.getMonth() + 1)).slice(-2) + '-' + ('0' + (myDate.getDate())).slice(-2);
    if (noteid != "")
    {
        db.transaction(function(tx)
        {
            if (check == "update")
            {
                var query = "update Note set server_sync='0', note_title='" + txttitle + "', note_narrative='" + txtnarrative + "', date='" + todatDate + "' where note_id='" + noteid + "'";
                tx.executeSql(query, [], function(tx, result)
                {
                    $('#popupaddnote').popup("close");
                    // Start Server Sync Code Here..
                    calledBeforeSendAnyRequest(function(isConnected)
                    {
                        if (isConnected == true)
                        {
                            // GetMaxSH_ID();
                            var lawyerD = JSON.parse(localStorage.getItem("lawyerID"));
                            var lawyerId = lawyerD.lawyerid;
                            var url = MR_URL;
                            var port = '8111';
                            var requestTime = new Date().getTime();
                            var webMethod = protocal + url + '/WebService_andriod.asmx/UpdateNotes';
                            $.ajax(
                            {
                                type: "POST",
                                url: webMethod,
                                data: JSON.stringify(
                                {
                                    lawyerId: lawyerId,
                                    note_id: noteid,
                                    note_title: txttitle,
                                    note_narrative: txtnarrative,
                                    note_date: todatDate
                                }),
                                contentType: "application/json; charset=utf-8",
                                dataType: "json",
                                success: function(msg)
                                {
                                    if (msg.d == "done")
                                    {
                                        updatenoteTable_server_sync(noteid, "1");
                                        $.mobile.loading('hide');
                                    }
                                    else
                                    {
                                        $.mobile.loading('hide');
                                    }
                                },
                                error: function(XMLHttpRequest, textStatus, errorThrown)
                                {
                                    var responseTime = new Date().getTime();
                                    var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: updateNote(ajax call)";
                                    errMsg = errMsg + "\n App Version : " + version;
                                    insertLog(requestTime, responseTime, errMsg, function(returnId) {});
                                    alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
                                    $.mobile.loading('hide');
                                },
                                beforeSend: function()
                                {
                                    $.mobile.loading('show',
                                    {
                                        text: 'Please Wait...',
                                        textVisible: true,
                                        theme: 'b',
                                        textonly: false
                                    });
                                }
                            });
                        }
                    });
                    // end server call
                    drawToast('Note Update Successfully.');
                    shownotelist();
                }, errorCB, successCB);
            }
            else
            {
                var query = " update Note set server_sync='del' where note_id='" + noteid + "'";
                tx.executeSql(query, [], function(tx, result)
                {
                    drawToast('Note Delete Successfully.');
                    $('#popupaddnote').popup("close");
                    shownotelist();
                }, errorCB, successCB);
            }
        }, errorCB, successCB);
    }

     calledBeforeSendAnyRequest(function(isConnected)
       {
        if (isConnected == true && GA_on_off == "true")
        {           
			GA.sendEvent('Toggle MenuBar - Notes', 'updateNote(button)', 'Click On Notes Update and Delete Event', 1, function() {}, errorCallback);  
        }
       });
}
var note_SS = new Array;

function Check_serverSync_Data_Note()
{
    note_SS = [];
    db.transaction(function(tx)
    {
        tx.executeSql('SELECT * FROM user_settings where user_id is not null and guid is not null', [], function(tx, result)
        {
            var len = result.rows.length;
            if (len >= 1)
            {
                tx.executeSql("SELECT * FROM Note cross join user_settings where server_sync=0 or server_sync='del'", [], function(tx, result1)
                {
                    var len = result1.rows.length;
                    if (result1.rows.length >= 1)
                    {
                        for (var i = 0; i < result1.rows.length; i++)
                        {
                            note_SS.push(result1.rows.item(i));
                        }
                        var Note_SS_Sent = new Object();
                        Note_SS_Sent.data1 = note_SS;
                        //Sent data to server
                        calledBeforeSendAnyRequest(function(isConnected)
                        {
                            if (isConnected == true)
                            {
                                var url = MR_URL;
                                var port = '8111';
                                var requestTime = new Date().getTime();
                                var webMethod = protocal + url + '/WebService_andriod.asmx/Note_data_sever_sync';
                                $.ajax(
                                {
                                    type: "POST",
                                    url: webMethod,
                                    data: JSON.stringify(Note_SS_Sent),
                                    contentType: "application/json; charset=utf-8",
                                    dataType: "json",
                                    success: function(msg)
                                    {
                                        if (msg.d == "done")
                                        {
                                            DeleteNote_DeletedFromServer();
                                            updateNoteTable_syncfromServer("1");
                                            $.mobile.loading('hide');
                                        }
                                        else
                                        {
                                            $.mobile.loading('hide');
                                        }
                                    },
                                    error: function(XMLHttpRequest, textStatus, errorThrown)
                                    {
                                        $.mobile.loading('hide');
                                        var responseTime = new Date().getTime();
                                        var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: Check_serverSync_Data_Note(ajax call)";
                                        errMsg = errMsg + "\n App Version : " + version;
                                        insertLog(requestTime, responseTime, errMsg, function(returnId) {});
                                        alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
                                    },
                                    beforeSend: function()
                                    {
                                        $.mobile.loading('show',
                                        {
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

function DeleteNote_DeletedFromServer()
{
    db.transaction(function(tx)
    {
        tx.executeSql("delete FROM Note where server_sync='del'", [], function(tx, result)
        {
            //alert('success');
        }, errorCB);
    }, errorCB);
}

function updateNoteTable_syncfromServer(serversync)
{
    db.transaction(function(tx)
    {
        tx.executeSql("update Note set server_sync='" + serversync + "' where server_sync=0", [], function(tx, result) {}, errorCB);
    }, errorCB);
}

function updatenoteTable_server_sync(note_id, serversync)
{
    db.transaction(function(tx)
    {
        tx.executeSql("update Note set server_sync='" + serversync + "' where note_id='" + note_id + "'", [], function(tx, result) {}, errorCB);
    }, errorCB);
}

function SyncDatafromServerToDevice_for_Notes()
{
    db.transaction(function(tx)
    {
        tx.executeSql('SELECT * FROM user_settings where user_id is not null and guid is not null', [], function(tx, result)
        {
            var len = result.rows.length;
            if (len >= 1)
            {
                tx.executeSql('SELECT * FROM Note', [], function(tx, result1)
                {
                    var len = result1.rows.length;
                    if (result1.rows.length == 0)
                    {
                        //Check and Get Data from Server if Exist 
                        //Sent data to server
                        calledBeforeSendAnyRequest(function(isConnected)
                        {
                            if (isConnected == true)
                            {
                                var lawyerD = JSON.parse(localStorage.getItem("lawyerID"));
                                var lawyerId = lawyerD.lawyerid;
                                var url = MR_URL;
                                var port = '8111';
                                var requestTime = new Date().getTime();
                                var webMethod = protocal + url + '/WebService_andriod.asmx/GetNoteDetailForUser';
                                $.ajax(
                                {
                                    type: "POST",
                                    url: webMethod,
                                    data: JSON.stringify(
                                    {
                                        lawyerId: lawyerId
                                    }),
                                    contentType: "application/json; charset=utf-8",
                                    dataType: "json",
                                    success: function(msg)
                                    {
                                        if (msg.d != "No Data")
                                        {
                                            var dataserver = msg.d.split('\n@\n');
                                            var NId = new Array;
                                            var Ncasenumber = new Array;
                                            var NTitle = new Array;
                                            var NNarrative = new Array;
                                            var NDate = new Array;
                                            for (var t = 0; t < dataserver.length - 1; t++)
                                            {
                                                var temp;
                                                temp = dataserver[t].split("@\n@");
                                                NId.push(temp[0]);
                                                Ncasenumber.push(temp[1]);
                                                NTitle.push(temp[2]);
                                                NNarrative.push(temp[3]);
                                                NDate.push(temp[4]);
                                            }
                                            for (var s = 0; s < Ncasenumber.length; s++)
                                            {
                                                InsertNotesFromServer(NId[s], Ncasenumber[s], NTitle[s], NNarrative[s], NDate[s]);
                                            }
                                            $.mobile.loading('hide');
                                        }
                                        else
                                        {
                                            $.mobile.loading('hide');
                                        }
                                    },
                                    error: function(XMLHttpRequest, textStatus, errorThrown)
                                    {
                                        $.mobile.loading('hide');
                                        var responseTime = new Date().getTime();
                                        var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: SyncDatafromServerToDevice_for_Notes(ajax call)";
                                        //errMsg = errMsg + "\n App Version : " + version;
                                        insertLog(requestTime, responseTime, errMsg, function(returnId) {});
                                        alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
                                    },
                                    beforeSend: function()
                                    {
                                        $.mobile.loading('show',
                                        {
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

function InsertNotesFromServer(NId, Ncasenumber, NTitle, NNarrative, NDate)
{
    db.transaction(function(tx)
    {
        tx.executeSql("insert into Note (note_id,casenumber_id,note_title,note_narrative,date,server_sync) values ('" + NId + "','" + Ncasenumber + "','" + NTitle + "','" + NNarrative + "','" + NDate + "','1')", [], function(tx, result) {}, errorCB);
    }, errorCB)
}