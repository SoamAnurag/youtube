// costom menu bar function's //

var prevTogId="";
function toggleMenuBar(toggleId) {

       toggleId = '#' + toggleId;
       $(".ui-menu-show .ui-menu-button").children('.ui-grid-d').slideUp("fast");

       if(prevTogId!=toggleId){
       $(".ui-menu-show").find(toggleId).children('.ui-grid-d').slideToggle("fast");
       prevTogId=toggleId;
       }
       else{
       $(".ui-menu-show").find(toggleId).children('.ui-grid-d').slideUp("fast");
       prevTogId="";
       }
       
       calledBeforeSendAnyRequest(function(isConnected)
       {
        if (isConnected == true && GA_on_off == "true")
        {           
			GA.sendEvent('Toggle MenuBar', 'toggleMenuBar(toggleId)', 'Show ToggleMenuBar', 1, function() {}, errorCallback);  
        }
       });

   }

  // final satish------------------------------START CASE TO SH MAPPIUNG---------------------------------------------------------
  // ----POPOUP LIST GENERATE----------
   function ShlistPrepare(list) {

   if(list != '')
      {
       var caseNo = $(list).attr('data-value');

          caseNo = caseNo.replace(/[//]/g , "");
          caseNo = caseNo.replace(/[/.]/g , "");
          caseNo = caseNo.replace(/[/-]/g , "");

       //var caseNo = $(list).attr('data-id');
       $('#shpopupheading').html(caseNo);
       //$('#shpopupheading').html("<center><h5>'"+caseNo+"'</h5></center>");
       $('#popupStackholder').trigger("updatelayout");
       }
       db.transaction(function (tx) {
           var query = "select * from sh_crud  where server_sync!='del';";
           tx.executeSql(query, [], prepare_shlist);
       }, errorCB, successCB);

        calledBeforeSendAnyRequest(function(isConnected)
       {
        if (isConnected == true && GA_on_off == "true")
        {           
			GA.sendEvent('Toggle MenuBar - StackHolders', 'ShlistPrepare(list)', 'Show StackHolders', 1, function() {}, errorCallback);  
        }
       });
   }


   function prepare_shlist(tx, results) {
       var len = results.rows.length;
        $.mobile.loading('show', {
            text: 'Loading...',
            textVisible: true,
            theme: 'b',
            textonly: false
        });
         $('#shlistpopup').html('');
           var caseNo =$('#shpopupheading').html();

       var caseId = $('#shpopupheading').html();

            caseId = caseId.replace(/[//]/g , "");
            caseId = caseId.replace(/[/.]/g , "");
            caseId = caseId.replace(/[/ ]/g , "");
            caseId = caseId.replace(/[/(]/g , "");
            caseId = caseId.replace(/[/)]/g , "");
            caseId = caseId.replace(/[/-]/g , "");

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
            caseNo =$('#shpopupheading').html();
            
            caseNo = caseNo.replace(/[//]/g , "");
            caseNo = caseNo.replace(/[/.]/g , "");
            caseNo = caseNo.replace(/[/ ]/g , "");
            caseNo = caseNo.replace(/[/(]/g , "");
            caseNo = caseNo.replace(/[/)]/g , "");
            caseNo = caseNo.replace(/[/-]/g , "");
            caseNo = caseNo.replace(/[/,]/g , "");

            }

              db.transaction(function(tx){
              var query = "select distinct sh_crud_id from sh_crud inner join SH_Mapping on SH_Mapping.stackeholder_id = sh_crud.sh_crud_id inner join existings on existings.exist_id = SH_Mapping.casenumber_id where SH_Mapping.server_sync !='del' and ";

              if(count > 1)
              {
               query = query+ ' ( '; 
               for(var i = 0; i < count; i++)
                    { 
                    if(i==0){
                     query = query+ " info_value like '%"+caseId[i].trim()+"%'"; 
                            }else{
                                    query = query+ " or info_value like '%"+caseId[i].trim()+"%' "; 
                                 }
                      
                     }
                      query = query+ ' ) ';
             
              }else{
               query = query + " info_value like '%"+caseNo.trim()+"%'";
              }

              

            tx.executeSql(query,[],function(tx,result){
                try{
                if(len > 0)
                {
				
				$('#shlistpopup').append(' <li> ' +
                                                           ' <center><div><a data-role="button" data-inline="true" href="shCrud.htm" id="myAcc" data-transition="slide">Add New Contact</a></div></center>' +
                                                           ' </li>').listview("refresh");
                                var len1 = result.rows.length;
                                if(len1 > 0){

                                var checksh = 'false';

                                
                                      for (var i = 0; i < len; i++) {
                                       var SH = results.rows.item(i);

                                       for(var j = 0; j < len1; j++) {
                                        var existSH = result.rows.item(j);
                           

                                           if(SH.sh_crud_id == existSH.sh_crud_id) {

                                            $('#shlistpopup').append(' <li> ' +
                                                   '<a href="#" style="padding-top: 0px; padding-bottom: 0px; padding-right: 0px; padding-left: 0px;"> ' +
                                                      '  <fieldset data-role="controlgroup"> ' +
                                                         '  <input checked type="checkbox" name="checkbox-2b'+i+'" id="checkbox-2b'+i+'" data-theme="c" data-map="Map" ' + 
                                                         ' data-case='+ caseNo.trim() + ' data-shcrud='+ SH.sh_crud_id + ' data-existid='+ existSH.exist_id + 
                                                          ' onclick="clickshlist(this)" />' +
                                                           ' <label for="checkbox-2b'+i+'">' +
                                                              ' <h2>' + SH.name +
                                                         ' </h2>  </label>  </fieldset>' +
                                                       '</a>' +
                                                   ' ' +
                                               ' </li>').listview("refresh");
                                                checksh = 'true';
                                               {break;}
                                           }else{

                        
                                               checksh = 'false';
                                           }


                                       }
                                       if(checksh == 'false')
                                       {
                                         $('#shlistpopup').append(' <li> ' +
                                                   '<a href="#" style="padding-top: 0px; padding-bottom: 0px; padding-right: 0px; padding-left: 0px;"> ' +
                                                      '  <fieldset data-role="controlgroup"> ' +
                                                          '  <input  type="checkbox" name="checkbox-2b'+i+'" id="checkbox-2b'+i+'" data-theme="c"  data-map="UnMap" ' + 
                                                         ' data-case='+ caseNo.trim() + ' data-shcrud='+ SH.sh_crud_id + ' data-existid='+ existSH.exist_id + 
                                                          ' onclick="clickshlist(this)" />' +
                                                           ' <label for="checkbox-2b'+i+'">' +
                                                              ' <h2>' + SH.name +
                                                         ' </h2>  </label>  </fieldset>' +
                                                       '</a>' +
                                                   ' ' +
                                               ' </li>').listview("refresh");
                                       }
                                                               $('#shlistpopup').trigger("updatelayout");
                                                               $("[type=checkbox]").checkboxradio();
                                                               $('#popupStackholder').trigger("updatelayout");

                                      }


                                }else{

                                 for (var i = 0; i < len; i++) {
                           var SH = results.rows.item(i);

                           $('#shlistpopup').append(' <li> ' +
                                                   '<a href="#" style="padding-top: 0px; padding-bottom: 0px; padding-right: 0px; padding-left: 0px;"> ' +
                                                      '  <fieldset data-role="controlgroup"> ' +
                                                           '  <input  type="checkbox" name="checkbox-2b'+i+'" id="checkbox-2b'+i+'" data-theme="c"  data-map="UnMap" ' +
                                                           ' data-case='+ caseNo.trim() + ' data-shcrud='+ SH.sh_crud_id + 
                                                          ' onclick="clickshlist(this)" />' +
                                                           ' <label for="checkbox-2b'+i+'">' +
                                                              ' <h2>' + SH.name +
                                                         ' </h2>  </label>  </fieldset>' +
                                                       '</a>' +
                                                   ' ' +
                                               ' </li>').listview("refresh");

                                                             }


                                                               $('#shlistpopup').trigger("updatelayout");
                                                               $("[type=checkbox]").checkboxradio();
                                                               $('#popupStackholder').trigger("updatelayout");

                                }
               }
               else{

                                                      

                                                       $('#shlistpopup').append(' <li> ' +
                                                           ' <center><div><h4>No Contacts</h4></div><div><h5> <a data-role="button" data-inline="true" href="shCrud.htm" id="myAcc" data-transition="slide">Create One</a></h5></div></center>' +
                                                           ' </li>').listview("refresh");

                                                       $('#shlistpopup').trigger("updatelayout");
                                                        $("[type=checkbox]").checkboxradio();
                                                        $('#popupStackholder').trigger("updatelayout");
               }
                }
                catch(err){
                    var errMsg = err + "\nMethod: #prev(jquery) search tx1" + "\nError Stack:" + err.stack; insertErrorLogs(errMsg, function (id) {});
                } $.mobile.loading('hide');
            },function (err) { var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: #shlistpopup(executeSql) search"; insertErrorLogs(errMsg, function (id) {  });});
        },errorCB,successCB);
           
       $('#shlistpopup').trigger("updatelayout");
       $("[type=checkbox]").checkboxradio();
       $('#popupStackholder').trigger("updatelayout");
      //$('#popupStackholder').popup("open");
  }

 //-----------------MAPP FUNCTION --------------
 function clickshlist(list) {
  var query="";

 var caseId=$(list).attr('data-case');

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
  var checkboxID=$(list).attr('id');
 // alert(checkboxID);
 var IsMap=$(list).attr('data-Map');
 var shId =$(list).attr('data-shcrud');
 

   db.transaction(function(tx){
     query = "select exist_id from existings where ";
      if(count > 1)
              {
               query = query+ ' ( '; 
               for(var i = 0; i < count; i++)
                    { 
                    if(i==0){
                     query = query+ " info_value like '%"+caseId[i].trim()+"%'"; 
                            }else{
                                    query = query+ " or info_value like '%"+caseId[i].trim()+"%' "; 
                                 }
                      
                     }
                      query = query+ ' ) ';
             
              }else{

              caseId = $(list).attr('data-case');
              caseId = caseId.replace(/[/(]/g , "");
              caseId = caseId.replace(/[/)]/g , "");
              caseId = caseId.replace(/[/-]/g , "");
              caseId = caseId.replace(/[/,]/g , "");

               query = query + " info_value like '%"+caseId.trim()+"%'";
              }



      tx.executeSql(query,[],function(tx,result){
      try {
            var len = result.rows.length;
             if(len > 0){
                       for (var i = 0; i < len; i++) {
                            var SH = result.rows.item(i);
                             var caseIdMap= SH.exist_id;
                             var  myDate = new Date();
                             var todatDate = myDate.getFullYear() + '-' +  ( '0' + (myDate.getMonth()+1) ).slice( -2 ) + '-' +  ( '0' + (myDate.getDate()+1) ).slice( -2 );

                             if(IsMap=="UnMap"){
                                      tx.executeSql("insert into SH_Mapping(shm_id,casenumber_id,stackeholder_id,mapping_on,server_sync) values (?,?,?,?,?)", [max_shm_id,caseIdMap,shId,todatDate,"0"],function(tx,result) {
                                                         drawToast('Mapped Successfully.');
                                                         var ty="#"+checkboxID;
                                                         $(ty).attr('data-map','Map');
                                                         GetMax_shm_id();
                                                               },errorCB,successCB);
                                                
                                                        $.mobile.loading('hide');

                                                       

                                                 }
								            
                                if(IsMap=="Map"){

                                    var query="update SH_Mapping set server_sync='del' where stackeholder_id='"+shId+"' and casenumber_id='"+caseIdMap+"'";
                                     tx.executeSql(query,[],function(tx,result){
                                                             drawToast('UnMapped Successfully.');
                                                             var ty="#"+checkboxID;
                                                             $(ty).attr('data-map','UnMap');
                                                              GetMax_shm_id();
                                                            },errorCB,successCB);
                                                             $.mobile.loading('hide');
                                                            
                                               }

								                      }
                                  
                                 // ShlistPrepare('');
                         }else {
                             $('#popupStackholder').popup("close");
                            drawToast('Please Update Case Number First');
                         }
 
            }  catch(err){
                    var errMsg = err + "\nMethod: #prev(jquery) search tx1" + "\nError Stack:" + err.stack; insertErrorLogs(errMsg, function (id) {});
                }
            },function (err) { var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: #shlistpopup(executeSql) search"; insertErrorLogs(errMsg, function (id) {  });});
        },errorCB,successCB);

      calledBeforeSendAnyRequest(function(isConnected)
       {
        if (isConnected == true && GA_on_off == "true")
        {           
			GA.sendEvent('Toggle MenuBar - StackHolders', 'clickshlist(list)', 'Click On StackHolders MApping', 1, function() {}, errorCallback);  
        }
       });
  }

  // ----------END CASE TO SH MAPPIUNG ------------------

  // ---------START SEARCH FUNCTION ---------
  function prepare_caseSearchList(list)
  {
  var caseNo = '';
  try {

   caseNo = $(list).attr('data-value');

          caseNo = caseNo.replace(/[//]/g , "");
            caseNo = caseNo.replace(/[/.]/g , "");
            caseNo = caseNo.replace(/[/ ]/g , "");
             caseNo = caseNo.replace(/[/(]/g , "");
              caseNo = caseNo.replace(/[/)]/g , "");
              caseNo = caseNo.replace(/[/-]/g , "");

        db.transaction(function (tx) {
            tx.executeSql('select max(start_date) as max_start_date,min(start_date) as min_start_date,max(end_date) as max_end_date,min(end_date) as min_end_date from court_date_table', [],
        function (tx, result) {
            try {
                var max_start_date = result.rows.item(0).max_start_date;
                var min_start_date = result.rows.item(0).min_start_date;
                var max_end_date = result.rows.item(0).max_end_date;
                var min_end_date = result.rows.item(0).min_end_date;
                if (min_start_date == null || max_start_date == null) {
                  drawToast('Please Update Cases First');
                }
                else {
                    if (min_start_date.trim().length != 0) {
                        if (max_end_date.trim().length == 0) {
                            max_end_date = max_start_date;
                        }
                        if (true) {
                            var searchData = {
                                'searchString': caseNo,
                                'startDate': min_start_date,
                                'endDate': max_end_date 
                            };
                            localStorage.setItem('searchData', JSON.stringify(searchData));
                            populateCasePage();
                            //$.mobile.back();
                        }
                        else {
                            //callSearchWebService();
                        }
                    }
                }
            }
            catch (err) {
                var errMsg = err + "\nMethod: prepare_caseSearchList(jquery)" + "\nError Stack:" + err.stack; 
        insertErrorLogs(errMsg, function (id) { alert("Oops! Something went worng.") 
        });
            }
        }, function (err) { var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: prepare_caseSearchList(executeSql)"; insertErrorLogs(errMsg, function (id) { alert("Oops! Something went worng with db.") }); });
        }, function (err) { var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: prepare_caseSearchList(transaction)"; insertErrorLogs(errMsg, function (id) { alert("Oops! Something went worng with db.") }); }, successCB);
    }
    catch (err) {
        var errMsg = err + "\nMethod: prepare_caseSearchList(jquery)" + "\nError Stack:" + err.stack; 
        insertErrorLogs(errMsg, function (id) { alert("Oops! Something went worng.") 
        });
    }

     calledBeforeSendAnyRequest(function(isConnected)
       {
        if (isConnected == true && GA_on_off == "true")
        {           
			GA.sendEvent('Toggle MenuBar - Date Search', 'prepare_caseSearchList(list)', 'Click On Date Search', 1, function() {}, errorCallback);  
        }
       });

  }

  //-----END-----------------


// function shareOpen() {
//    bindTouchEffects();    
//    trigger_menu();
//     $("#menu").slideDown('fast');
//}

$(document).on("click", "#shareId", function (e) {
    //bindTouchEffects();    
    trigger_menu();

     calledBeforeSendAnyRequest(function(isConnected)
       {
        if (isConnected == true && GA_on_off == "true")
        {           
			GA.sendEvent('Toggle MenuBar - Share', 'Share Button', 'Click On Share Button', 1, function() {}, errorCallback);  
        }
       });
});

$(document).on('pageinit', function () {
    $(document).click(function (e) {
        var isMenuOpen = $(event.target).is('#shareId');
        if(!isMenuOpen){
            isMenuOpen = $(event.target).is('#shareId span');
        }
        if (!isMenuOpen) {
            $("#menu").slideUp('fast');
        } 
          
               
        if ($(".nav-glyphish-example").find('.ui-btn').hasClass('ui-btn-active')) {
            $(".nav-glyphish-example").find('.ui-btn').removeClass('ui-btn-active');
        }

        if($('#share').hasClass('ui-share-animate-close')){
            $('#share').toggleClass('ui-share-animate-close');
        }
 
    });
});


