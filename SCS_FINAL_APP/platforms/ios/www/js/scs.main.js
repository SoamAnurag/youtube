//java script for scs New Cordova 3.6.3 Asif
//Shantanu
//alert('scspage');
var db;
if(localStorage.getItem("validateSignupFormPermisson") == null) {
  // Key exists in LocalStorage
    window.localStorage.setItem("validateSignupFormPermisson", "false");
}

var signupPanelChecker;
//var settingsSaved = $.Deferred();
//var registrationIdReceived = $.Deferred();
var settingsSaved = null;
var version = "2.9"; //this shows the current app version
try
{
    if (device.platform == 'android' || device.platform == 'Android')
    {
        version = "2.9a"; //this shows the current app version
    }
    else if (device.platform == 'iOS' || device.platform == 'IOS' || device.platform == 'ios')
    {
        version = "2.9i"; //this shows the current app version
    }
}
catch (err)
{
    version = "2.9"; //this shows the current app version
}
var registrationIdReceived = null;
var MR_URL = "scsapp.mrsoftwares.in";
var protocal='https://';  // change by ssharma --> http://
//var MR_URL = "192.168.10.45:8040"; // change by ssharma
//var MR_URL = "localhost:57440"; // change by ssharma
var updatedIDs = "";
var isConnected = true;
var deviceID = ''; //12f58a61b305a979
var deviceInfo = '';
var isUpdated = false;
var maxLeftPanelHeight = 600;
var directOP = 0;
var caseArray = new Array;
var MapIdArray = new Array;
var PrevoisPageAll = "";
var PrevoisPageBack;
var updateIdSocial;
var pushNotification;
var gApp = new Array();
gApp.gcmregid = '';
gApp.isNewID = true;
var GA_on_off = '';
var myTime;

$(document).ready(function(){
    var url = MR_URL;
    var webMethod = protocal + url + '/WebControlHTML5.asmx/getSignUpPermission';
    var data = JSON.stringify({parameter: "Trail_Form"});
    $.ajax({
      url: webMethod,
      type: 'POST',
      data: data,
      headers: {
        "Content-Type": "application/json",
      },
      async: false, // make the call synchronous
      success: function(data) {
        // handle the response data
          let value = window.localStorage.getItem("validateSignupFormPermisson");
          if(data.d == "No"){
              if(value == "true"){
                  window.localStorage.setItem("validateSignupFormPermisson", "false");
//                  signupPanelChecker = false;
//                  lookForSettings();
                  alert("Device configuration completed. Plese restart your app!");
                  navigator.app.exitApp();
              }
          }
          else{
              if(value == "false"){
                  window.localStorage.setItem("validateSignupFormPermisson", "true");
//                  signupPanelChecker = true;
//                  lookForSettings();
                  alert("Device configuration completed. Plese restart your app!");
                  navigator.app.exitApp();
              }
          }
      },
      error: function(xhr, status, error) {
        alert('please reopen the APP')
      }
    });
    let value = window.localStorage.getItem("validateSignupFormPermisson");
    if(value == "true"){
        signupPanelChecker = true;
    }else{
        signupPanelChecker = false;
    }
})

//Reference js file
if (navigator.userAgent.match(/(iPhone|iPod|iPad|iOS|ios|IOS)/))
{
//    document.write('<script type="text/javascript" charset="utf-8" src="cordova-2.3.0_IOS.js"></script>');
//    document.write('<script type="text/javascript" src="js/LocalNotificationIOS.js"></script>');
//    document.write('<script type="text/javascript" charset="utf-8" src="js/GCMPlugin.js"></script>');
//    document.write('<script src="js/SharedDataPlugin.js" type="text/javascript"></script>');

var  script_tag = document.createElement('script');
script_tag.setAttribute("charset", "utf-8");
script_tag.setAttribute("type", "text/javascript");
script_tag.setAttribute("src", "cordova-2.3.0_IOS.js");
script_tag.setAttribute('async', 'false');
(document.getElementsByTagName("body")[0] || document.documentElement).appendChild(script_tag);

script_tag = document.createElement('script');
script_tag.setAttribute("charset", "utf-8");
script_tag.setAttribute("type", "text/javascript");
script_tag.setAttribute("src", "js/LocalNotificationIOS.js");
script_tag.setAttribute('async', 'false');
(document.getElementsByTagName("body")[0] || document.documentElement).appendChild(script_tag);

script_tag = document.createElement('script');
script_tag.setAttribute("charset", "utf-8");
script_tag.setAttribute("type", "text/javascript");
script_tag.setAttribute("src", "js/GCMPlugin.js");
script_tag.setAttribute('async', 'false');
(document.getElementsByTagName("body")[0] || document.documentElement).appendChild(script_tag);

script_tag = document.createElement('script');
script_tag.setAttribute("charset", "utf-8");
script_tag.setAttribute("type", "text/javascript");
script_tag.setAttribute("src", "js/SharedDataPlugin.js");
script_tag.setAttribute('async', 'false');
(document.getElementsByTagName("body")[0] || document.documentElement).appendChild(script_tag);
}
else if (navigator.userAgent.match(/(Android|android|ANDROID)/))
{
//    document.write('<script type="text/javascript" charset="utf-8" src="cordova.js"></script>');
//    //document.write('<script type="text/javascript" src="js/LocalNotification.js"></script>');
//    document.write('<script type="text/javascript" src="js/analytics.js"></script>');
//    document.write('<script type="text/javascript" src="js/notes.js"></script>');
//    document.write('<script type="text/javascript" charset="utf-8" src="js/GCMPlugin.js"></script>');
//    document.write('<script src="js/SharedDataPlugin.js" type="text/javascript"></script>');

    var script_tag = document.createElement('script');
        script_tag.setAttribute("charset", "utf-8");
        script_tag.setAttribute("type", "text/javascript");
        script_tag.setAttribute("src", "cordova.js");
        script_tag.setAttribute('async', 'false');
        (document.getElementsByTagName("body")[0] || document.documentElement).appendChild(script_tag);

        script_tag = document.createElement('script');

        script_tag.setAttribute("type", "text/javascript");
        script_tag.setAttribute("src", "js/analytics.js");
        script_tag.setAttribute('async', 'false');
        (document.getElementsByTagName("body")[0] || document.documentElement).appendChild(script_tag);

        script_tag = document.createElement('script');

        script_tag.setAttribute("type", "text/javascript");
        script_tag.setAttribute("src", "js/notes.js");
        script_tag.setAttribute('async', 'false');
        (document.getElementsByTagName("body")[0] || document.documentElement).appendChild(script_tag);

        script_tag = document.createElement('script');
        script_tag.setAttribute("charset", "utf-8");
        script_tag.setAttribute("type", "text/javascript");
        script_tag.setAttribute("src", "js/GCMPlugin.js");
        script_tag.setAttribute('async', 'false');
        (document.getElementsByTagName("body")[0] || document.documentElement).appendChild(script_tag);

        script_tag = document.createElement('script');

        script_tag.setAttribute("type", "text/javascript");
        script_tag.setAttribute("src", "js/SharedDataPlugin.js");
        script_tag.setAttribute('async', 'false');
        (document.getElementsByTagName("body")[0] || document.documentElement).appendChild(script_tag);

                script_tag = document.createElement('script');

                script_tag.setAttribute("type", "text/javascript");
                script_tag.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/jquery-ajaxtransport-xdomainrequest/1.0.3/jquery.xdomainrequest.min.js");
                script_tag.setAttribute('async', 'false');
                (document.getElementsByTagName("body")[0] || document.documentElement).appendChild(script_tag);
}
else
{
//        //document.write('<script type="text/javascript" charset="utf-8" src=cordova-3.6.3_Android.js"></script>');
//    document.write('<script type="text/javascript" charset="utf-8" src="js/GCMPlugin.js"></script>');
//    document.write('<script src="js/SharedDataPlugin.js" type="text/javascript"></script>');

   var script_tag = document.createElement('script');
            script_tag.setAttribute("charset", "utf-8");
            script_tag.setAttribute("type", "text/javascript");
            script_tag.setAttribute("src", "js/GCMPlugin.js");
            script_tag.setAttribute('async', 'false');
            (document.getElementsByTagName("body")[0] || document.documentElement).appendChild(script_tag);

            script_tag = document.createElement('script');
                    script_tag.setAttribute("charset", "utf-8");
                    script_tag.setAttribute("type", "text/javascript");
                    script_tag.setAttribute("src", "js/SharedDataPlugin.js");
                    script_tag.setAttribute('async', 'false');
                    (document.getElementsByTagName("body")[0] || document.documentElement).appendChild(script_tag);
}
//Call Functions
if (navigator.userAgent.match(/(iPhone|iPod|iPad|iOS|ios|IOS)/))
{
    CallDotReady();
}
else if (navigator.userAgent.match(/(Android|android|ANDROID)/))
{
CallDotReady();
}
else
{
    CallDotReady();
}


function CallDotReady()
{
    $(document).ready(function()
    {

        $("#btnBackIndex").parent().hide();
        $("#Backbtndiv").attr('class', 'backdiv');
        localStorage.removeItem('currentDate');
        window.localStorage.setItem('refreshtokenG', 'asdsdf');
        $.support.cors = true;
        runOnBrowser();
        $(window).resize(function()
        {
            setMenuCss();
        });
        bindTouchEffects();


        googleanalytics();


       var Cuur_S_LN= window.localStorage.getItem('LocalNotificationStatus');
       if(Cuur_S_LN==null){
       window.localStorage.setItem('LocalNotificationStatus', 'ON');
       }

    });
}
$(document).on('pagebeforeshow', '#settings', function (event) {
    var currPage = CheckCurrentPage();
    if (currPage == "settings") {
        if (hold_emailid != "") {
            $('#email_id').val(hold_emailid);
            hold_emailid = "";
        }
    }
    SMS_Send();
   // Get_Gateways();
});

function CheckCurrentPage() {

    var curPage = document.location.href.match(/[^\/]+$/)[0];
    curPage = curPage.split('.');
    var CurrentPage = curPage[0];
    return CurrentPage;

}

function onBackKeyDown(e)
{
    if ($.mobile.activePage.is('#casePage'))
    {
        showConfirmDialog();
    }
    else
    {
        if ($.mobile.activePage.is('#casePage'))
        {
            showConfirmDialog();
        }
        else
        {
            if ($.mobile.activePage.is('#initpage'))
            {
                showConfirmDialog();
            }
            else
            {
                navigator.app.backHistory();
            }
        }
    }
}

function onConfirm(buttonIndex)
    {
        if (buttonIndex == 2)
        {
            clearInterval(myTime);
            setTimeout(function()
            {
                navigator.app.exitApp();
            }, 500);
        }
    }
    //Prevent Double click problem
    //last_click_time = new Date().getTime();
    //document.addEventListener('click', function (e) {
    //$.mobile.loading('show', {
    //       text: 'Loading...',
    //       textVisible: true,
    //       theme: 'a',
    //       textonly: false
    //   });
    //    click_time = e['timeStamp'];
    //
    //    if (click_time && (click_time - last_click_time) < 500) {
    //    //alert(click_time - last_click_time);
    //        e.stopImmediatePropagation();
    //        e.preventDefault();
    //        return false;
    //    }
    //    last_click_time = click_time;
    //}, true);

function showConfirmDialog()
{
    navigator.notification.confirm('Exit Application?', onConfirm, 'Confirmation', 'Cancel,Exit');
}

function calledBeforeSendAnyRequest(callBack)
    {
        //var webMethod1 = 'https://mrsoftwares.redirectme.net:8111/WebService_andriod.asmx/checkServerConnection';
        //var webMethod2 = 'https://192.168.1.45:8111/WebService_andriod.asmx/checkServerConnection';
        //var webMethod3 = 'https://192.168.10.45:8040/WebService_andriod.asmx/checkServerConnection';
        //var webMethod3 = 'https://localhost:6322/SCSWebControl/WebService_andriod.asmx/checkServerConnection';
        // var webMethod3 = 'https://192.168.1.45:97//WebService_andriod.asmx/checkServerConnection';
       // var requestTime = new Date().getTime();
       // $.ajax(
       // {
         //   url: webMethod3,
         //   data:
          //  {},
          //  dataType: 'xml',
           // async: true,
           // success: function(data, textStatus)
          //  {
                 // MR_URL = "192.168.1.45:97";
                // MR_URL = "localhost:6322/SCSWebControl";
               // if (typeof callBack !== 'undefined')
               // {
                    callBack(true);
               // }
           // },
          //  error: function(xhr, textStatus, errorThrown)
           // {
             //   var responseTime = new Date().getTime();
             //   var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\n http response : " + XMLHttpRequest.responseText + "\n Method: calledBeforeSendAnyRequest(failed to connect scsapp.mrsoftwares.in)";
             //   errMsg = errMsg + "\n App Version : " + version;
             //   insertLog(requestTime, responseTime, errMsg, function(returnId) {});
             //   requestTime = new Date().getTime();
         //   }
       // });
    }
    // jquery mobile settings on mobile init
$(document).on('mobileinit', function(e)
{
    if (e)
    {
        e.preventDefault();
    }
    $.support.cors = true;
    $.mobile.allowCrossDomainPages = true;
    $.mobile.pushStateEnabled = false;
    $.mobile.buttonMarkup.hoverDelay = 0; // (default: 300) (miliseconds)
    $.mobile.defaultPageTransition = 'none'; // (default: pop)
    $.mobile.defaultDialogTransition = 'none'; // (default: pop)
    $.event.special.swipe.scrollSupressionThreshold = 40; // (default: 10) (pixels) – More than this horizontal displacement, and we will suppress scrolling.
    $.event.special.swipe.horizontalDistanceThreshold = 30; // (default: 30) (pixels) – Swipe horizontal displacement must
    $.event.special.swipe.verticalDistanceThreshold = 40; // (default: 75) (pixels) – Swipe vertical displacement must be less than this.
    $.event.special.swipe.durationThreshold = 1000; // (default: 1000) (miliseconds) – More time than this, and it isn't a swipe.
    $.event.special.tap.tapholdThreshold = 750; // (default: 750) (miliseconds) - Duration before taphold fires.
    //$.mobile.selectmenu.prototype.options.hidePlaceholderMenuItems = false;
    //    $.mobile.defaultPageTransition   = 'none'
    //    $.mobile.defaultDialogTransition = 'none'
    //  $.mobile.buttonMarkup.hoverDelay = 0
});


//window.plugin.notification.local.onclick = function (id, state, json) {
//alert('called '+state);
//};


function onDeviceReady()
{
    //window.localStorage.setItem('refreshtokenG', 'asdsdf');
    //navigator.splashscreen.hide();
    $("#btnBackIndex").parent().hide();
    $("#Backbtndiv").attr('class', 'backdiv');
    localStorage.removeItem('currentDate');

     var Cuur_S_LN= window.localStorage.getItem('LocalNotificationStatus');

    //if(Cuur_S_LN=="ON"){
    // var now = new Date().getTime(),
    //_60_seconds_from_now = new Date(now + 20*1000);

      //window.plugin.notification.local.add({
      //    id:      1,
    //    title:   'Inform your clients about their Cases',
    //    message: 'Dont forget to buy some flowers.',
    //    repeat:  'daily',
    //    date:    _60_seconds_from_now
    //});
    //window.plugin.notification.local.onclick = function(index, state, json) {
    //    alert(index+" "+state+" "+json);
    //           $.mobile.navigate("NotificationList.html",
    //            {
    //                transition: "slide"
    //            });
    //        };
    //}


       if(Cuur_S_LN==null){
       window.localStorage.setItem('LocalNotificationStatus', 'ON');
       }

    Cuur_S_LN= window.localStorage.getItem('LocalNotificationStatus');
    if(Cuur_S_LN=="ON"){

    var localNotificationTime = window.localStorage.getItem('localNotificationTime');
    if (localNotificationTime == null || localNotificationTime == "" || localNotificationTime == 'undefined')
    {
        window.localStorage.setItem('localNotificationTime', '09:00 PM');
        var now1 = new Date();
        now1.setHours(21, 00, 58, 00);
        var d = new Date();
        d = d.toString("dd/MM/yyyy");
        if (typeof plugins !== "undefined")
        {
            try
            {
                if (device.platform == 'Android' || device.platform == 'android')
                {
                    //plugins.localNotification.add(
                    //{
                    //    date: now1,
                    //    message: "Inform your clients about their Cases",
                    //    ticker: "Date : " + d,
                    //    repeatDaily: true,
                    //    id: 5
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



                else if (device.platform == 'iOS' || device.platform == 'IOS' || device.platform == 'ios')
                {
                    window.plugins.localNotification.add(
                    {
                        fireDate: now1,
                        alertBody: "Inform your clients about their Cases",
                        action: "View",
                        repeatInterval: "daily",
                        soundName: "beep.caf",
                        badge: 0,
                        notificationId: 1234,
                        foreground: function(notificationId)
                        {
                            alert("Inform your clients about their Cases");
                        },
                        background: function(notificationId)
                        {
                            alert("Inform your clients about their Cases");
                        }
                    });
                }
            }
            catch (err)
            {}
        }
    }
    else
    {
        // ChangeLastNotificationTimeWhenStartApp();
        //var now = new Date();
        //now.setSeconds(now.getSeconds() + 60);
        //var now1 = new Date();
        //now1.setHours(16,48,05,00);
        //  var Lt=window.localStorage.getItem('localNotificationTime');
        //  var hour;var min;var AM_PM;
        //  var breakcolun=Lt.split(":");
        //  hour=breakcolun[0];
        //  var breakSpace=breakcolun[1].split(" ");
        //  min=breakSpace[0];
        //  AM_PM=breakSpace[1];
        //  if(AM_PM=="PM" || AM_PM=="pm"){
        //   if(hour==1){ hour=13; }
        //   if(hour==2){ hour=14; }
        //   if(hour==3){ hour=15; }
        //   if(hour==4){ hour=16; }
        //   if(hour==5){ hour=17; }
        //   if(hour==6){ hour=18; }
        //  if(hour==7){ hour=19; }
        //   if(hour==8){ hour=20; }
        //   if(hour==9){ hour=21; }
        //   if(hour==10){ hour=22; }
        //   if(hour==11){ hour=23; }
        //  if(hour==0){ hour=00; }
        //   }
        //      var now1 = new Date();
        //    //now1.setHours(hour.toString(),min.toString(),00,00);
        //      now1.setHours(parseInt(hour),parseInt(min),05,00);
        //          plugins.localNotification.add({
        //            date : now1,
        //            message :"Inform your clients about their Cases",
        //            ticker : "Date : "+ d,
        //            repeatDaily : true,
        //            id : 5
        //          });
        //============== iOS Local Notification Call NCode
        //       if(window.plugins.localNotification){
        //  Math.round(new Date().getTime()/1000 + 10)
        //       window.plugins.localNotification.cancelAll(function all(){alert('all cancel');});
        //           var now1 = new Date();
        //           now1.setHours(14,59,50,00);
        //
        //       window.plugins.localNotification.add({
        //                                            fireDate        : now1,
        //                                            alertBody       : "This is a local notification.",
        //                                            action          : "View",
        //                                            repeatInterval  : "daily",
        //                                            soundName       : "beep.caf",
        //                                            badge           : 0,
        //                                            notificationId  : 1234,
        //                                            foreground      : function(notificationId){
        //                                            alert("Foreground! This alert was triggered by notification " + notificationId);
        //                                            },
        //                                            background  : function(notificationId){
        //                                            alert("Background! This alert was triggered by notification " + notificationId);
        //                                            }
        //                                            });
        //       }
        // End Code ============================
    }

}
    document.addEventListener("backbutton", onBackKeyDown, false);
    db = window.sqlitePlugin.openDatabase({name:"scs_court_app_db", location: "default"});
    //Dont't make Any Changes in deviceInfo Format..
    deviceInfo = 'Device Name: ' + device.model + '<br />' + 'Device PhoneGap: ' + device.cordova + '<br />' + 'Device Platform: ' + device.platform + '<br />' + 'Device UUID: ' + device.uuid + '<br />' + 'Device Version: ' + device.version + '<br />';
    db.transaction(CreateCourtDBTable, errorCB, lookForSettings);
    document.addEventListener("pause", onPause, false);
    document.addEventListener("resume", onResume, false);
    document.addEventListener("online", onOnline, false);
    document.addEventListener("menubutton", onMenuKeyDown, false);
   // alert('device ready deviceID =='+ device.uuid +' deviceInfo == '+ deviceInfo );
    calledBeforeSendAnyRequest(function(isConnected)
    {
        if (isConnected)
        {
            window.addEventListener("orientationchange", function(e)
            {
                setMenuCss();
                //setHelpOverlayElements();
            }, false);
            bindTouchEffects();
            if (device.uuid !== '')    // added by ssharma
                deviceID = device.uuid;
            
            getSubscriptionDate();
            //setHelpOverlayElements();
            //insertDisplayOverlay();
            getWelcomeNote();
            adMobCall();

           googleanalytics();
            updatedIDs = "";
            fetchAndRegisterErrorLogs();
            //Asif Work For stackeholder Server Sync
            Server_Sync_Stackeholder();
            //End
            getLawyerInfo();
            get_lawyers_info();
            //GetAccoutDetailForSend();
            refreshAdMobCall();
            StorePackageCostInfoinLocalStorage();
            GetMax_shm_id();



            //dont put any function after it it will create problem showing progress bar at first load.
            var currentUrl = $(location).attr('href');
            //alert(currentUrl);
            var currentUrl1 = currentUrl.split("?");
                    //alert(currentUrl1);
            if (currentUrl1.length >=2){
            //alert('greater 2'+currentUrl1[1]);
            if (currentUrl1[1] == "Notify")
            {
            //alert('in true');
                fromNotification = "Yes";
                $.mobile.navigate("NotificationList.html",
                {
                    transition: "slide"
                });
            }

            }
        }
        else
        {
            alert("Cannot reach the server! Please try again after some time. If the problem persist call +918269244088(Mon-Sat, 10AM-7PM) ");
        }
    });
}

function onPause()
{}

function Server_Sync_Stackeholder()
{
    GetLawyerID();
    CheckSH_serverSync_Data_shCrud();
    CheckSH_serverSync_Data_SH_Mapping();
    SyncDatafromServerToDevice_Sh_curd();
    SyncDatafromServerToDevice_SH_Mapping();
    SyncDatafromServerToDevice_stackeholder_log();
    CheckSH_serverSync_Data_SMSEmail();
    // for notes sync from server //
    Check_serverSync_Data_Note();
    SyncDatafromServerToDevice_for_Notes();
}

function checkMobileNumber()
    {
        var telephoneNumber = cordova.require("scs/telephonenumber");
        telephoneNumber.get(function(result)
        {
            alert("Telephone Number is :- " + result);
        }, function()
        {
            console.log("error");
            alert("error");
        });
    }
    // ad mob functionality for google ads for Android and ios Platform applied by Satish Verma

function adMobCall()
{
    var adId;
    if (device.platform == 'Android' || device.platform == 'android')
    {
        // alert('android == '+device.platform);
        adId = 'ca-app-pub-2984949701017973/1056844041';
        // Android Key for adMob ads
    }
    if (device.name == 'iPad' || device.name == 'IPad' || device.name == 'iPad Simulator')
    {
        // alert('iPad'+device.name);
        adId = 'ca-app-pub-2984949701017973/4010310441';
        // iPad Key for adMob ads
    }
    if (device.name == 'iPhone' || device.name == 'IPhone' || device.name == 'iPhone Simulator')
    {
        // alert('iPhone'+device.name);
        adId = 'ca-app-pub-2984949701017973/2533577242';
        // iPhone Key for adMob ads
    }
    if (window.plugins && window.plugins.admobExport)
    {
        var am = window.plugins.admobExport;
        am.createBannerView(
        {
            'publisherId': adId,
            'adSize': am.AD_SIZE.BANNER,
            'bannerAtTop': false
        }, function()
        {
            am.requestAd(
            {
                'isTesting': false
            }, function()
            {
                am.showAd(true);
            }, function()
            {
                //alert('failed to request ad');
            })
        }, function()
        {
            //alert( "failed to create ad view" );
        });
    }
    else
    {
        //alert('AdMob plugin not available/ready.');
    }
}

function refreshAdMobCall()
{
    // Call function with 30000 milliseconds gap
    myTime = setInterval(startTimer, 30000);
}

function startTimer()
    {
        if (window.plugins && window.plugins.admobExport)
        {
            var am = window.plugins.admobExport;
            am.requestAd(
            {
                'isTesting': false
            }, function()
            {
                am.showAd(true);
            }, function()
            {
                //alert('failed to request ad');
            });
        }
        else
        {
            //alert('AdMob plugin not available/ready.');
        }
    }
    // end adMob
    // //googleanalytics  functions start
var GA;
var firstTimeGA;
if (window.plugins && window.plugins.Analytics)
{
    GA = window.plugins.Analytics;
   //alert('analysics plugin available/ready. in start'+GA);
}

function googleanalytics()
{
    var GAId = 'UA-53315747-2';

    try{
    if (device.platform == 'Android' || device.platform == 'android')
    {

        GAId = 'UA-53315747-2';

    }
    if (device.name == 'iPad' || device.name == 'IPad' || device.name == 'iPad Simulator')
    {

       GAId = 'UA-53315747-3';
    }
    if (device.name == 'iPhone' || device.name == 'IPhone' || device.name == 'iPhone Simulator')
    {

        GAId = 'UA-53315747-3';

    }
    }
   catch(err){
   GAId = 'UA-53315747-2';
   }

    if (window.plugins && window.plugins.Analytics)
    {
       getGAOn_or_Off(function() {

         GA = window.plugins.Analytics;
        // alert('analysics plugin available/ready. gg '+GA_on_off);
        if(GA_on_off == "true")
        {
            GA.setTrackingId(GAId, function()
            {
//                GA.sendAppView('Case Page', function()
//                {
                   firstTimeGA = 'true';
//                }, errorCallback);
            }, function()
            {
                // alert('analysics plugin available/ready fail.');
            });
        }
       });

    }
    else
    {
        //alert('analysics plugin not available/ready.');
    }
}
$(document).on('pagebeforeshow', '#lawyerNames', function(event)
{
// alert('Before google analytics');
 GA = window.plugins.Analytics;
// alert('google analytics'+GA);
    calledBeforeSendAnyRequest(function(isConnected)
    {
        if (isConnected == true && GA_on_off == "true")
        {
        //alert('GA_on_off');
            GA.sendAppView('Lawyer Names Page', function()
                                            {
                                              GA.sendEvent('Lawyers', 'Show Lawyer Names Page', 'Click On Right Menu Lawyer Names Page Link', 1, function() {}, errorCallback);
                                            }, errorCallback);
        }
    });
});
$(document).on('pagebeforeshow', '#advanceSearch', function(event)
{
// advancesearch');
 GA = window.plugins.Analytics;
 //alert('analysics plugin GA '+GA);

    calledBeforeSendAnyRequest(function(isConnected)
    {//alert('analysics plugin available/ready. advancesearch '+GA_on_off);
        if (isConnected == true && GA_on_off == "true")
        {
            GA.sendAppView('Advance Search Page', function() {GA.sendEvent('Advance Search', 'Show Advance Search Page', 'Click On Right Menu Advance Search Page Link', 1, function() {}, errorCallback);  }, errorCallback);
        }
    });
});
$(document).on('pagebeforeshow', '#casePage', function(event)
{
//alert('analysics plugin GA casepage');
// alert('analysics plugin GA first casepage');
   GA = window.plugins.Analytics;
     // alert('analysics plugin GA '+GA);
    //if (firstTimeGA == 'true')
   // {
   // alert('analysics plugin GA first casepage');

        calledBeforeSendAnyRequest(function(isConnected)
        {//alert('analysics plugin available/ready.  GA_on_off '+GA_on_off);
            if (isConnected == true && GA_on_off == "true")
            {
                GA.sendAppView('Case Page', function() { GA.sendEvent('Cases', 'Show Case Page', 'Click On Right Menu Case Page Link', 1, function() {}, errorCallback);  }, errorCallback);
            }
        });
   // }
});
$(document).on('pagebeforeshow', '#caseNumbers', function(event)
{
//alert('analysics plugin GA casenumber');
GA = window.plugins.Analytics;
 //alert('analysics plugin GA '+GA);
    calledBeforeSendAnyRequest(function(isConnected)
    {
    //alert('analysics plugin available/ready.  '+GA_on_off);
        if (isConnected == true && GA_on_off == "true")
        {
            GA.sendAppView('Case Numbers Page', function() {GA.sendEvent('Case Numbers', 'Show Case Numbers Page', 'Click On Right Menu Case Numbers Page Link', 1, function() {}, errorCallback); }, errorCallback);
        }
    });
});
$(document).on('pagebeforeshow', '#logPage', function(event)
{
//alert('analysics plugin GA logpage');
GA = window.plugins.Analytics;
 //alert('analysics plugin GA '+GA);
    calledBeforeSendAnyRequest(function(isConnected)
    {
      //alert('analysics plugin available/ready.  '+GA_on_off);
        if (isConnected == true && GA_on_off == "true")
        {
            GA.sendAppView('Log Page', function() {GA.sendEvent('Log', 'Show Log Page', 'Click On Right Menu Log Page Link', 7, function() {}, errorCallback);}, errorCallback);
        }
    });
});
$(document).on('pagebeforeshow', '#lawyerInfo', function(event)
{
//alert('analysics plugin GA lawyerinfo');
GA = window.plugins.Analytics;
//alert('analysics plugin GA '+GA);
    calledBeforeSendAnyRequest(function(isConnected)
    {
   // alert('analysics plugin available/ready.  '+GA_on_off);
        if (isConnected == true && GA_on_off == "true")
        {
            GA.sendAppView('Lawyer Info Page', function() {GA.sendEvent('Lawyer Info', 'Show Lawyer Info Page', 'Click On Right Menu Lawyer Info Page Link', 1, function() {}, errorCallback);}, errorCallback);
        }
    });
});
$(document).on('pagebeforeshow', '#termsandcondition', function(event)
{
//alert('analysics plugin GA termscond');
GA = window.plugins.Analytics;
//alert('analysics plugin GA '+GA);
    calledBeforeSendAnyRequest(function(isConnected)
    {
    //alert('analysics plugin available/ready.  '+GA_on_off);
        if (isConnected == true && GA_on_off == "true")
        {
            GA.sendAppView('Terms And Condition Page', function() { GA.sendEvent('Terms And Condition', 'Show Terms And Condition Page', 'Click On Right Menu Terms And Condition Page Link', 1, function() {}, errorCallback);}, errorCallback);
        }
    });
});
$(document).on('pagebeforeshow', '#shCrud', function(event)
{
//alert('analysics plugin GA shcrud');
GA = window.plugins.Analytics;
//alert('analysics plugin GA '+GA);
    calledBeforeSendAnyRequest(function(isConnected)
    {
     //alert('analysics plugin available/ready.  '+GA_on_off);
        if (isConnected == true && GA_on_off == "true")
        {
            GA.sendAppView('StackHolders Add Page', function() {GA.sendEvent('StackHolders Add', 'Show StackHolders Add Page', 'Click On StackHolders Add Page Link', 1, function() {}, errorCallback);}, errorCallback);
        }
    });
});
$(document).on('pagebeforeshow', '#allSHList', function(event)

{
//alert('analysics plugin GA ');
GA = window.plugins.Analytics;
//alert('analysics plugin GA '+GA);
    calledBeforeSendAnyRequest(function(isConnected)
    {
    //alert('analysics plugin available/ready.  '+GA_on_off);
        if (isConnected == true && GA_on_off == "true")
        {
            GA.sendAppView('StackHolders List Page', function() {GA.sendEvent('StackHolders List', 'Show StackHolders List Page', 'Click On StackHolders List Page Link', 1, function() {}, errorCallback);}, errorCallback);
        }
    });
});
$(document).on('pagebeforeshow', '#shMap', function(event)
{GA = window.plugins.Analytics;
    calledBeforeSendAnyRequest(function(isConnected)
    {
        if (isConnected == true && GA_on_off == "true")
        {
            GA.sendAppView('StackHolders Case Mapping Page', function() {GA.sendEvent('Case Mapping', 'Show Case Mapping Page', 'Click On Case Mappingt Page Link', 1, function() {}, errorCallback);}, errorCallback);
        }
    });
});
//$(document).on('pagebeforeshow', '#socialAccount', function (event) {
//var currActivePage = $.mobile.activePage.attr('id');
// calledBeforeSendAnyRequest(function (isConnected) {
//   if (isConnected == true) {
//             GA.sendAppView('Case Page', function() {}, errorCallback);
//   }
//   });
//});

$(document).on('pagebeforeshow', '#notificationList', function(event)
{

       SetNotificationTimeInPopup();

       var Cuur_S_LN= window.localStorage.getItem('LocalNotificationStatus');
       if(Cuur_S_LN=="ON"){
       $("#snd-switch").val("on").flipswitch("refresh");
       }
       else{
       $("#snd-switch").val("off").flipswitch("refresh");
       }



      GA = window.plugins.Analytics;
    calledBeforeSendAnyRequest(function(isConnected)
    {
        if (isConnected == true && GA_on_off == "true")
        {
            GA.sendAppView('SH Notification List Page', function() {GA.sendEvent('SH Notification', 'Show SH Notification Page', 'Click On SH Notification Page Link', 1, function() {}, errorCallback);}, errorCallback);
        }
    });
});
$(document).on('pagebeforeshow', '#notes', function(event)
{GA = window.plugins.Analytics;
    calledBeforeSendAnyRequest(function(isConnected)
    {
        if (isConnected == true && GA_on_off == "true")
        {
            GA.sendAppView('Note Page', function() {GA.sendEvent('Notes', 'Show Note Page', 'Click On Notes Page Link', 1, function() {}, errorCallback);}, errorCallback);
        }
    });
});

// end GA
function onMenuKeyDown()
{
    if ($.mobile.activePage.is('#casePage'))
    {
        trigger_menu();
    }
    else
    {}
}

function setMenuCss()
{
    //var headerH = $('.header').height() + 4;
    var headerH = $('.header').height() + 60;
    //  var menuL = $('#share').css('right');
    var windowW = $(window).width();
    if (parseInt(windowW) >= 481)
    {
        $('#menu').css(
        {
            top: headerH + 'px',
            right: '1px'
        });
    }
    else
    {
        $('#menu').css(
        {
            top: 'auto',
            right: 'auto'
        });
    }
    var valHeader = $('.validity').height() + 3;
    valHeader = valHeader + headerH;
    if (valHeader < 80)
    {
        valHeader = 81;
    }
    //  $('.share').attr('style','top:'+valHeader+'px !important');
}

function trigger_menu()
{
    setMenuCss();
    $('#menu').slideToggle('fast');
}

function bindTouchEffects()
    {
        //    $(document).on('vmousedown', "#share", function (e) {
        //        if (e) { e.preventDefault(); }
        //    });
        //    $(document).on('vmouseup', "#share", function (e) {
        //        if (e) { e.preventDefault(); }
        //    });
        //    $('#refresh').bind("click");
        //    if ($('.sync').hasClass('elem')) {
        //        $('.sync').removeClass('elem').addClass('bind');
        //    }
        if ($('#refresh').hasClass('refreshR'))
        {
            $('#refresh').removeClass('refreshR').addClass('refreshNR');
        }
    }
    //$(document).on("click", "#share", function (e) {
    //    bindTouchEffects();
    //    trigger_menu();
    //});
    //$(document).on('pageinit', function () {
    //    $(document).click(function (e) {
    //        var isMenuOpen = $(event.target).is('#share');
    //        if(!isMenuOpen){
    //            isMenuOpen = $(event.target).is('#share span');
    //        }
    //        if (!isMenuOpen) {
    //            $("#menu").slideUp('fast');
    //        }
    //        if ($(".nav-glyphish-example").find('.ui-btn').hasClass('ui-btn-active')) {
    //            $(".nav-glyphish-example").find('.ui-btn').removeClass('ui-btn-active');
    //        }
    //        if($('#share').hasClass('ui-share-animate-close')){
    //            $('#share').toggleClass('ui-share-animate-close');
    //        }
    //
    //    });
    //});

function onOnline()
{
    openCasePageAfterUpdate();
  googleanalytics();
}

function onResume()
    {
        calledBeforeSendAnyRequest(function(isConnected)
        {
            if (isConnected)
            {
                if (tabSelected !== "")
                {
                    checkAndSendRequestForChanges(tabSelected);
                }
                else
                {
                    checkAndSendRequestForChanges('search');
                }
                silentUpdate(function(isUpdated)
                {
                    if (isUpdated)
                    {
                        openCasePage();
                        drawToast("Case List Updated");
                        $.mobile.loading('hide');
                    }
                    else
                    {
                        drawToast("No New Updates");
                        $.mobile.loading('hide');
                    }
                });
                googleanalytics();

            }
            else
            {
                alert("Cannot reach the server! Please try again after some time. If the problem persist call +918269244088(Mon-Sat, 10AM-7PM) ")
            }
        });
    }
    //Only For Browser remove it when testing on device
    $(document).ready(function () {
    $("#btnBackIndex").parent().hide();
    $("#Backbtndiv").attr('class','backdiv');
     //window.localStorage.setItem('refreshtokenG', 'asdsdf');
        $.support.cors = true;
        runOnBrowser();
        $(window).resize(function () { setMenuCss();});
        bindTouchEffects();
    });

function runOnBrowser()
{
    db = window.sqlitePlugin.openDatabase({name:"scs_court_app_db", location: "default"});
    calledBeforeSendAnyRequest(function(isConnected)
    {
        if (isConnected)
        {
                // deviceID = device.uuid;
            db.transaction(CreateCourtDBTable, errorCB, lookForSettings);
            registrationIdReceived = 'DONE';
            getSubscriptionDate();
            //setHelpOverlayElements();
            //insertDisplayOverlay();
            getWelcomeNote();
            fetchAndRegisterErrorLogs();
            // SetLawyerIdInLocalStorage();
            if (tabSelected !== "")
            {
                checkAndSendRequestForChanges(tabSelected);
            }
            else
            {
                checkAndSendRequestForChanges('search');
            }
            setMenuCss();
            //Asif Work For stackeholder Server Sync
            Server_Sync_Stackeholder();
            //End
            getLawyerInfo();
            //GetAccoutDetailForSend();
            initializeMyAccountCaseNumbers("case");
            StorePackageCostInfoinLocalStorage();
            GetMax_shm_id();
            //dont put any function after it it will create problem showing progress bar at first load.
            var localNotificationTime = window.localStorage.getItem('localNotificationTime');
            if (localNotificationTime == null || localNotificationTime == "" || localNotificationTime == 'undefined')
            {
                window.localStorage.setItem('localNotificationTime', '09:00 PM');
                var now1 = new Date();
                now1.setHours(21, 00, 58, 00);
                var d = new Date();
                d = d.toString("dd/MM/yyyy");
                if (typeof plugins !== "undefined")
                {
                    try
                    {
                        if (device.platform == 'Android' || device.platform == 'android')
                        {
                            //plugins.localNotification.add(
                            //{
                            //    date: now1,
                            //    message: "Inform your clients about their Cases",
                            //    ticker: "Date : " + d,
                            //    repeatDaily: true,
                            //    id: 5
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
                        else if (device.platform == 'iOS' || device.platform == 'IOS' || device.platform == 'ios')
                        {
                            window.plugins.localNotification.add(
                            {
                                fireDate: now1,
                                alertBody: "Inform your clients about their Cases",
                                action: "View",
                                repeatInterval: "daily",
                                soundName: "beep.caf",
                                badge: 0,
                                notificationId: 1234,
                                foreground: function(notificationId)
                                {
                                    alert("Inform your clients about their Cases");
                                },
                                background: function(notificationId)
                                {
                                    alert("Inform your clients about their Cases");
                                }
                            });
                        }
                    }
                    catch (err)
                    {}
                }
            }
            else
            {
                //ChangeLastNotificationTimeWhenStartApp();
            }
            //var currentUrl= $(location).attr('href');
            //alert(currentUrl);
            //var currentUrl1=currentUrl.split("?");
            //if(currentUrl1.length>=2){
            //fromNotification="Yes";
            //                $.mobile.navigate("NotificationList.html", {
            //                    transition: "slide"
            //                });
            //}
        }
        else
        {
            alert("Cannot reach the server! Please try again after some time. If the problem persist call +918269244088(Mon-Sat, 10AM-7PM) ")
        }
    });
}

function StorePackageCostInfoinLocalStorage()
{
    getPackageCost(function(isActive)
    {
        if (Number(isActive) <= 0)
        {
            //Add clearAll
            localStorage.setItem('PackageCostStatus', 'true');
        }
        else
        {
            //Not Add clearAll
            localStorage.setItem('PackageCostStatus', 'false');
        }
    });
}
var fromNotification = "";

function fetchAndRegisterErrorLogs()
{
    try
    {
        var resultSet = [];
        var requestTime = new Date().getTime();
        var i = 0;
        var errMaxId = 0;
        var logMaxId = 0;
        db.transaction(function(tx)
        {
            tx.executeSql("SELECT log_id,user_id,request_time,response_time,response_type,device_info FROM log_table CROSS JOIN user_settings where is_register=0 and response_type like '%Connection Error%' order by log_id;", [], function(tx, result)
            {
                try
                {
                    for (; i < result.rows.length; i++)
                    {
                        resultSet[i] = result.rows.item(i);
                    }
                    if (result.rows.length > 0)
                    {
                        logMaxId = result.rows.item(result.rows.length - 1).log_id;
                    }
                    tx.executeSql("SELECT error_log_id as log_id,user_id,error_time as 'request_time',' ' as 'response_time',error as 'response_type',device_info FROM error_log CROSS JOIN user_settings where  is_register=0 order by error_log_id;", [], function(tx, result)
                    {
                        try
                        {
                            for (var j = 0; j < result.rows.length; j++)
                            {
                                resultSet[i] = result.rows.item(j);
                                i++;
                            }
                            if (result.rows.length > 0)
                            {
                                errMaxId = result.rows.item(result.rows.length - 1).log_id;
                            }
                            if (logMaxId > 0 || errMaxId > 0)
                            {
                                var errorData = new Object();
                                errorData.data1 = resultSet;
                                var set = JSON.stringify(errorData, "\t");
                                var url = MR_URL;
                                var port = '8111';
                                var webMethod = protocal + url + '/WebService_andriod.asmx/clientErrorLogs';
                                if (resultSet.length > 0)
                                {
                                    $.ajax(
                                    {
                                        type: "POST",
                                        url: webMethod,
                                        data: JSON.stringify(errorData),
                                        contentType: "application/json; charset=utf-8",
                                        dataType: "json",
                                        success: function(msg)
                                        {
                                            if (msg.d.toLowerCase() === 'yes')
                                            {
                                                db.transaction(function(tx)
                                                {
                                                    tx.executeSql("update log_table set is_register=1 where log_id<=?;", [logMaxId], successCB, errorCB);
                                                    tx.executeSql("update error_log set is_register=1 where error_log_id<=?;", [errMaxId], successCB, errorCB);
                                                }, errorCB, successCB);
                                            }
                                        },
                                        error: function(XMLHttpRequest, textStatus, errorThrown)
                                        {
                                            var responseTime = new Date().getTime();
                                            var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: fetchAndRegisterErrorLogs(ajax call)";
                                            errMsg = errMsg + "\n App Version : " + version;
                                            insertLog(requestTime, responseTime, errMsg, function(returnId) {});
                                           // alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
                                            calledBeforeSendAnyRequest(function(isConnected)
                                            {
                                                if (isConnected)
                                                {}
                                            });
                                        },
                                        beforeSend: function() {},
                                        complete: function() {}
                                    });
                                }
                            }
                        }
                        catch (err)
                        {
                            var errMsg = err + "\nMethod: fetchAndRegisterErrorLogs(jquery) tx2" + "\nError Stack:" + err.stack;
                            insertErrorLogs(errMsg, function(id)
                            { //alert("Oops! Something went worng.")
                            });
                        }
                    }, errorCB);
                }
                catch (err)
                {
                    var errMsg = err + "\nMethod: fetchAndRegisterErrorLogs(jquery) tx1" + "\nError Stack:" + err.stack;
                    insertErrorLogs(errMsg, function(id)
                    { //alert("Oops! Something went worng.")
                    });
                }
            }, errorCB);
        }, errorCB, successCB);
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: fetchAndRegisterErrorLogs(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
}

function setHelpOverlayElements()
{
    try
    {
        var headerH = $('.header').height() + 4;
        var aboutDtW = $('#about-dt-dd-txt').width();
        var aboutDtH = $('#about-dt-dd').height();
        var dateDropDownW = $('#dateDropDown-button').width();
        var dateDropDownOf = $('#dateDropDown-button').offset();
        var windowH = $(window).height();
        $('.ui-abt-dt-dd').css(
        {
            left: ((dateDropDownOf.left + dateDropDownW) - 98) + 'px',
            height: ((windowH * 20) / 100) + 'px',
            top: (dateDropDownOf.top + 40) + 'px'
        });
        $('.ui-abt-dt-dd-txt').css(
        {
            left: (-(aboutDtW) + 52) + 'px'
        });
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: setHelpOverlayElements(jquery)" + "\nError Stack:" + err.stack;
        //insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.")
        // });
    }
}

function syncCases()
{
//alert('sync cases');
    $("#refresh").removeClass("refreshNR");
    $("#refresh").addClass("refreshR");
    silentUpdate(function(isUpdated)
    {
    //alert('check isupdate : '+isupdate)
        if (isUpdated)
        {
        //alert('sync cases open case page');
            openCasePage();
            drawToast("Case List Updated");
            $.mobile.loading('hide');
        }
        else
        {
            drawToast("No New Updates");
            $.mobile.loading('hide');
        }
    });
}
var CallorNot = true;

function lookForSettings()
{
     if(deviceID !="")
     {
        calledBeforeSendAnyRequest(function(isConnected)
        {
            if (isConnected)
            {
                register_device();
                $.mobile.loading('show',
                {
                    text: 'Loading...',
                    textVisible: true,
                    theme: 'b',
                    textonly: false
                });
                db.transaction(function(tx)
                {
                    tx.executeSql('SELECT * FROM user_settings where user_id is not null and guid is not null', [], function(tx, result)
                    {
                        try
                        {
//                            alert("somwthing");
                            $.mobile.loading('hide');
//                            alert("somwthing2");
                            var len = result.rows.length;
                            if (len == 0)
                            {
                                try
                                {
                                    if (deviceID === '')  // added by ssharma
                                        deviceID = device.uuid;
                                }
                                catch (err)
                                {
                                    deviceID = "";
                                }
                                CallorNot = true;

                                if(deviceID !="")
                                {
                                validateDevice(function(isActive)
                                {
                                    if (isActive)
                                    {
                                        setTimeout(function()
                                        {
                                            //$.mobile.navigate("#lawyerNames", {
                                            //    transition: "slide"
                                            //});
                                            $.mobile.loading('show',
                                            {
                                                text: 'Loading...',
                                                textVisible: true,
                                                theme: 'b',
                                                textonly: false
                                            });
                                            lookForSettings();
                                        }, 2000);
                                    }
                                    else
                                    {
                                        $.mobile.loading('hide');
                                        setTimeout(function()
                                        {
                                            if(signupPanelChecker){
                                                $.mobile.navigate("initpage.html",
                                                {
                                                    transition: "slide"
                                                });
                                            }else{
                                                $.mobile.navigate("settings.html",
                                                {
                                                    transition: "slide"
                                                });
                                            }
                                        }, 500);
                                    }
                                });
                                }
                                else
                                {
                                    $.mobile.loading('hide');
                                    setTimeout(function()
                                    {
                                        $.mobile.navigate("initpage.html",
                                        {
                                            transition: "slide"
                                        });
                                    }, 500);
                                }
                            }
                            else
                            {
                                //alert('called');
                                CallorNot = false;
                                validateDevice(function(isActive)
                                {
                                    if (isActive == false)
                                    {
                                        alert("Invalid User!Please re-install the App.,1,0");
                                        return false;
                                    }
                                    else
                                    {
                                        settingsSaved = 'DONE';
                                        doRegistrationProcess();
                                        getMatterTypes();
                                        get_lawyers_info();
                                        hideClearAllButton(function(result) {});
                                    }
                                });
                            }
                        }
                        catch (err)
                        {
                            var errMsg = err + "\nMethod: lookForSettings(jquery) tx1" + "\nError Stack:" + err.stack;
                            insertErrorLogs(errMsg, function(id)
                            { //alert("Oops! Something went worng.")
                            });
                        }
                    }, function(err)
                    {
                        var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: lookForSettings(executeSql)";
                        insertErrorLogs(errMsg, function(id)
                        {
//                            alert("Oops! Something went worng with db.")
                        });
                    });
                }, function(err)
                {
                    var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: lookForSettings(transaction)";
                    insertErrorLogs(errMsg, function(id)
                    {
//                        alert("Oops! Something went worng with db.")
                    });
                }, successCB);
            }
            else
            {
                alert("Cannot reach the server! Please try again after some time. If the problem persist call +918269244088(Mon-Sat, 10AM-7PM) ")
            }
        });
     }
     else
     {
        $.mobile.loading('hide');
        setTimeout(function()
        {
            $.mobile.navigate("initpage.html",
            {
                transition: "slide"
            });
        }, 500);
     }
}
var isUpdateCalled = false;

function silentUpdate(callBack)
{
    try
    {
        var requestTime = new Date().getTime();
        db.transaction(function(tx)
        {
            tx.executeSql('SELECT * FROM user_settings where user_id is not null and guid is not null', [], function(tx, result)
            {
                try
                {
                    var len = result.rows.length;
                    // alert('length :'+len);
                    if (len > 0)
                    {
                        var user_id = result.rows.item(0).user_id;
                        var guid = result.rows.item(0).guid;
                        var url = MR_URL;
                        if (deviceID === '')
                        {
                            deviceID = device.uuid;
                        }
                        // commented by ssharma  --> comment tx.executeSql, max_store_time, timeStamp

                        tx.executeSql('select max(update_time) as max_store_time from new_update_logs', [], function(tx, result)
                        {
                            try
                            {
                                var max_store_time = result.rows.item(0).max_store_time;
                                var timeStamp;
                                if (max_store_time == null || max_store_time == 0)
                                {
                                    timeStamp = (31).days().ago();
                                }
                                else
                                {
                                    timeStamp = new Date(max_store_time);
                                }
                                timeStamp = timeStamp.toString('yyyy-MM-dd HH:mm:ss');

                                // OR

                                //var timeStamp = "2020-07-13 00:00:00";

                                var webMethod = protocal + url + '/WebService_andriod.asmx/getCasesDevice';
                                $.ajax(
                                {
                                    type: "POST",
                                    url: webMethod,
                                    data: JSON.stringify(
                                    {
                                        lawyer_id: user_id,
                                        timestamp: timeStamp.toString('yyyy-MM-dd HH:mm:ss'),
                                        deviceId: deviceID
                                    }),
                                    contentType: "application/json; charset=utf-8",
                                    dataType: "json",
                                    success: function(msg)
                                    {
                                        try
                                        {
                                            isUpdateCalled = false;
                                            if (msg.d.indexOf('CHECKACTIVE') !== -1)
                                            {
                                                alert(msg.d);
                                            }
                                            else
                                            {
                                                var newTimeStamp = new Date().getTime();
                                                //                                        $('#refresh').bind("click");
                                                //                                        if ($('.sync').hasClass('elem')) {
                                                //                                            $('.sync').removeClass('elem').addClass('bind');
                                                //                                        }
                                                if ($('#refresh').hasClass('refreshR'))
                                                {
                                                    $('#refresh').removeClass('refreshR').addClass('refreshNR');
                                                }
                                                var responseTime = new Date().getTime();
                                                if (msg.d.trim().length == 0)
                                                {
                                                    isUpdated = false;
                                                    if (typeof callBack !== 'undefined')
                                                    {
                                                        callBack(false);
                                                    }
                                                    insertLog(requestTime, responseTime, 'No New Updates.', function(returnId) {});
                                                }
                                                else
                                                {
                                                    isUpdated = true;
                                                    parseAndSaveData(msg.d, function(data)
                                                    {
                                                        updateloding(data, recordCount);
                                                        if (recordCount == data)
                                                        {
                                                            recordCount = 0;
                                                            addCount = 0;
                                                            if (typeof callBack !== 'undefined')
                                                            {
                                                                callBack(true);
                                                            }
                                                        }
                                                    });
                                                    insertNewUpdateTime(newTimeStamp);
                                                    insertLog(requestTime, responseTime, 'Record Updated.', function(returnId) {});
                                                    getLastUpdatLog();
                                                    getWelcomeNote();
                                                }
                                            }
                                        }
                                        catch (err)
                                        {
                                            var errMsg = err + "\nMethod: silentUpdate(jquery) on success ajax call." + "\nError Stack:" + err.stack;
                                            insertErrorLogs(errMsg, function(id)
                                            { //alert("Oops! Something went worng.")
                                            });
                                        }
                                    },
                                    error: function(XMLHttpRequest, textStatus, errorThrown)
                                    {
                                        //                                $('#refresh').bind("click");
                                        //                                if ($('.sync').hasClass('elem')) {
                                        //                                    $('.sync').removeClass('elem').addClass('bind');
                                        //                                }
                                        if ($('#refresh').hasClass('refreshR'))
                                        {
                                            $('#refresh').removeClass('refreshR').addClass('refreshNR');
                                        }
                                        var responseTime = new Date().getTime();
                                        var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: silentUpdate(ajax call)";
                                        errMsg = errMsg + "\n App Version : " + version;
                                        insertLog(requestTime, responseTime, errMsg, function(returnId) {});
                                        alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
                                        calledBeforeSendAnyRequest(function(isConnected)
                                        {
                                            if (isConnected)
                                            {}
                                        });
                                    },
                                    beforeSend: function()
                                    {
                                        $('#refresh').unbind("click");
                                        if ($('.sync').hasClass('bind'))
                                        {
                                            $('.sync').removeClass('bind').addClass('elem');
                                        }
                                        isUpdateCalled = true;
                                    },
                                    complete: function()
                                    { /*alert("Data Received.");$.mobile.hidePageLoadingMsg();*/ }
                                });
                            }
                            catch (err)
                            {
                                var errMsg = err + "\nMethod: silentUpdate(jquery) tx2" + "\nError Stack:" + err.stack;
                                insertErrorLogs(errMsg, function(id)
                                { //alert("Oops! Something went worng.")
                                });
                            }
                        }, function(err)
                        {
                            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: silentUpdate2(executeSql)";
                            insertErrorLogs(errMsg, function(id)
                            {
//                                alert("Oops! Something went worng with db.")
                            });
                        });
                    }
                    else
                    {
                        //alert('Save Your Id First In Settings');
                    }
                }
                catch (err)
                {
                    var errMsg = err + "\nMethod: silentUpdate(jquery) tx1" + "\nError Stack:" + err.stack;
                    insertErrorLogs(errMsg, function(id)
                    { //alert("Oops! Something went worng.")
                    });
                }
            }, function(err)
            {
                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: silentUpdate1(executeSql)";
                insertErrorLogs(errMsg, function(id)
                {
//                    alert("Oops! Something went worng with db.")
                });
            });
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: silentUpdate(transaction)";
            insertErrorLogs(errMsg, function(id)
            {
//                alert("Oops! Something went worng with db.")
            });
        }, successCB);
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: silentUpdate(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
}

function showUserBlockMessage(message)
{
    try
    {
    //alert('message '+message);
        if (message.length > 0)
        {
            var allData = message.split(',');
            if (allData.length > 0)
            {
                var msg = allData[1].substring(allData[1].indexOf(':') + 1, allData[1].length);
                var isShowOverlay = allData[2].substring(allData[2].indexOf(':'), allData[2].length);
                var isShowClose = allData[3].substring(allData[3].indexOf(':'), allData[3].length);
                $('#validityPopUp').fadeIn();
                $('#innerMsg').html(msg + " Please call +918269244088(Mon-Sat, 10AM-7PM).");
                if (Number(isShowOverlay) === 1)
                {
                    $('#overlay').fadeIn();
                }
                else
                {
                    $('#overlay').hide();
                }
                if (Number(isShowClose) === 1)
                {
                    $('#Close').show();
                }
                else
                {
                    $('#Close').hide();
                }
                $.mobile.loading('hide');
            }
        }
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: showUserBlockMessage(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { alert("Oops! Something went worng. show block "+ err.stack);
        });
    }
}

function openCasePageAfterUpdate()
{
    getCases(function()
    {
        openCasePage();
    });
}

function openCasePage()
{
    getRecordCount(function(case_id_count, list_id_count, court_date_id_count)
    {
        try
        {
            if (case_id_count > 0 || list_id_count > 0 || court_date_id_count > 0)
            {
                db.transaction(function(tx)
                {
                    tx.executeSql('SELECT ifnull(strftime("%d/%m/%Y",max(start_date)),strftime("%d/%m/%Y","now")) as start_date from court_date_table inner join list_court_date_table on list_court_date_table.court_date_id=court_date_table.court_date_id WHERE is_updated=1', [], function(tx, result)
                    {
                        try
                        {
                            var len = result.rows.length;
                            if (len > 0)
                            {
                                var start_date = result.rows.item(0).start_date;
                                var searchData = {
                                    'startDate': Date.parseExact(start_date, 'dd/MM/yyyy').toString('yyyy-MM-dd')
                                };
                                localStorage.setItem('searchData', JSON.stringify(searchData));
                                populateCasePage();
                            }
                        }
                        catch (err)
                        {
                            var errMsg = err + "\nMethod: getLatestUpdateddate(jquery) tx1" + "\nError Stack:" + err.stack;
                            insertErrorLogs(errMsg, function(id) {});
                        }
                    }, function(err)
                    {
                        var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: getLatestUpdateddate(executeSql)";
                        insertErrorLogs(errMsg, function(id) {});
                    });
                }, function(err)
                {
                    var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: getLatestUpdateddate(transaction)";
                    insertErrorLogs(errMsg, function(id) {});
                }, successCB);
            }
        }
        catch (err)
        {
            var errMsg = err + "\nMethod: openCasePage(jquery)" + "\nError Stack:" + err.stack;
            insertErrorLogs(errMsg, function(id)
            { //alert("Oops! Something went worng.")
            });
        }
    });
}

function CreateCourtDBTable(tx)
{
    tx.executeSql('CREATE TABLE IF NOT EXISTS justice_table (justice_id INTEGER PRIMARY KEY AUTOINCREMENT, justice_name TEXT)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS court_date_table (court_date_id INTEGER PRIMARY KEY AUTOINCREMENT, start_date DATE,end_date DATE)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS list_table (list_id INTEGER PRIMARY KEY AUTOINCREMENT, list_name TEXT)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS case_table (case_id INTEGER PRIMARY KEY AUTOINCREMENT,list_court_date_id INTEGER,matter TEXT,case_no TEXT,list_no TEXT,party_name TEXT,store_time INTEGER,suspected CHAR(1))');
    tx.executeSql('CREATE TABLE IF NOT EXISTS case_justice_table (case_justice_id INTEGER PRIMARY KEY AUTOINCREMENT, justice_id INTEGER,case_id INTEGER,court_no TEXT)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS list_court_date_table (list_court_date_id INTEGER PRIMARY KEY AUTOINCREMENT, list_id INTEGER,court_date_id INTEGER, is_updated INTEGER)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS log_table (log_id INTEGER PRIMARY KEY AUTOINCREMENT, request_time INTEGER,response_time INTEGER,response_type TEXT, device_info TEXT, is_register INTEGER)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS error_log (error_log_id INTEGER PRIMARY KEY AUTOINCREMENT, error TEXT, deviceID TEXT, error_time INTEGER, device_info TEXT, is_register INTEGER)');
    tx.executeSql("CREATE TABLE IF NOT EXISTS user_settings (user_id TEXT,email_id TEXT,password TEXT,guid TEXT,registrationTime INTEGER,display_name TEXT, GAOnOff TEXT)");
    tx.executeSql("CREATE TABLE IF NOT EXISTS display_overlay (is_dispaly INTEGER)");
    tx.executeSql("CREATE TABLE IF NOT EXISTS new_update_logs (update_time INTEGER)");
    tx.executeSql("CREATE TABLE IF NOT EXISTS existings (exist_id INTEGER PRIMARY KEY AUTOINCREMENT,info_type TEXT, info_value TEXT, server_sync NUMERIC, modify_type TEXT,direct_op NUMERIC, is_requested NUMERIC, client_req_time INTEGER)");
    tx.executeSql("CREATE TABLE IF NOT EXISTS existing_case_details (ecd_id INTEGER PRIMARY KEY AUTOINCREMENT,exist_id INTEGER,server_case_id INTEGER, matter_type TEXT)");
    tx.executeSql("CREATE TABLE IF NOT EXISTS case_number_update_logs (cnul_id INTEGER PRIMARY KEY AUTOINCREMENT,update_time TEXT)");
    tx.executeSql("CREATE TABLE IF NOT EXISTS matter_type (matter_id INTEGER PRIMARY KEY AUTOINCREMENT,matters TEXT)");
    tx.executeSql("CREATE TABLE IF NOT EXISTS package_cost (pgc_id INTEGER PRIMARY KEY AUTOINCREMENT,cost TEXT)");
    //Stackeholder1
//     tx.executeSql("CREATE TABLE IF NOT EXISTS sh_crud (sh_crud_id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,mobile TEXT,email TEXT, server_sync TEXT, notify_sms TEXT, notify_email TEXT, company_name TEXT, notify_by TEXT)");
    tx.executeSql("CREATE TABLE IF NOT EXISTS sh_crud (sh_crud_id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,mobile TEXT,email TEXT, server_sync TEXT, notify_sms TEXT, notify_email TEXT, company_name TEXT, notify_by TEXT)");
    tx.executeSql("CREATE TABLE IF NOT EXISTS SH_Mapping (shm_id INTEGER ,casenumber_id INTEGER,stackeholder_id INTEGER,Mapping_on TEXT,server_sync TEXT)");
    tx.executeSql("CREATE TABLE IF NOT EXISTS social_account (acc_id INTEGER PRIMARY KEY AUTOINCREMENT,network TEXT,email TEXT,password TEXT)");
    // tx.executeSql("drop table stackeholder_log");
    tx.executeSql("CREATE TABLE IF NOT EXISTS stackeholder_log (log_id INTEGER PRIMARY KEY AUTOINCREMENT,stackeholder_id INTEGER,mobile TEXT ,email TEXT,message_text TEXT,sent_Ondate INTEGER,result_status TEXT,error_msg TEXT,server_sync TEXT)");
    //tx.executeSql("delete from stackeholder_log");
    //tx.executeSql("delete from social_account");
    tx.executeSql("CREATE TABLE IF NOT EXISTS list_type (listtype_id INTEGER PRIMARY KEY AUTOINCREMENT,listtype TEXT)");

    tx.executeSql("CREATE TABLE IF NOT EXISTS court (court_id INTEGER PRIMARY KEY AUTOINCREMENT,courtname TEXT)");
    // note table create
    tx.executeSql("CREATE TABLE IF NOT EXISTS Note (note_id INTEGER PRIMARY KEY AUTOINCREMENT,casenumber_id INTEGER,note_title TEXT,note_narrative TEXT,date DATE,server_sync TEXT)");

    // add clolumn in user setting for on and off google analytics functions in server side analyticsOnOff
     tx.executeSql("SELECT GAOnOff FROM user_settings;", [], function(tx, result) {}, function error(err)
    {
        tx.executeSql("ALTER TABLE user_settings ADD COLUMN GAOnOff TEXT;");
    });

    //Stackeholder End1
    tx.executeSql("SELECT registrationTime FROM user_settings;", [], function(tx, result) {}, function error(err)
    {
        tx.executeSql("ALTER TABLE user_settings ADD COLUMN registrationTime INTEGER;");
    });
    tx.executeSql("SELECT display_name FROM user_settings;", [], function(tx, result) {}, function error(err)
    {
        tx.executeSql("ALTER TABLE user_settings ADD COLUMN display_name TEXT;");
    });
    //Stackeholder2
    tx.executeSql("SELECT server_sync FROM sh_crud;", [], function(tx, result) {}, function error(err)
    {
        tx.executeSql("ALTER TABLE sh_crud ADD COLUMN server_sync TEXT;");
        tx.executeSql("ALTER TABLE sh_crud ADD COLUMN notify_sms TEXT;");
        tx.executeSql("ALTER TABLE sh_crud ADD COLUMN notify_email TEXT;");
        tx.executeSql("ALTER TABLE sh_crud ADD COLUMN company_name TEXT;");
    });
//    tx.executeSql("ALTER TABLE sh_crud ADD COLUMN notify_by TEXT;");
//    tx.executeSql("SELECT notify_by FROM sh_crud;", [], function(tx, result) {}, function error(err)
//    {
//        alert(JSON.stringify(err));
//        tx.executeSql("ALTER TABLE sh_crud ADD COLUMN notify_by TEXT;");
//    });
    //Stackeholder End2
    try
    {
        tx.executeSql("SELECT matter_type FROM existing_case_details;", [], function(tx, result)
        {
            tx.executeSql("CREATE TABLE existing_case_details_new (ecd_id INTEGER PRIMARY KEY AUTOINCREMENT,exist_id INTEGER,server_case_id INTEGER, matter_type TEXT);");
            tx.executeSql("INSERT INTO existing_case_details_new SELECT ecd_id,exist_id,server_case_id, matter_type FROM existing_case_details;");
            tx.executeSql("DROP TABLE existing_case_details;");
            tx.executeSql("ALTER TABLE existing_case_details_new RENAME TO existing_case_details;");
            tx.executeSql("ALTER TABLE existing_case_details ADD COLUMN listtype TEXT;");
            tx.executeSql("ALTER TABLE existing_case_details ADD COLUMN narration TEXT;");
            tx.executeSql("ALTER TABLE existing_case_details ADD COLUMN court TEXT;");
            tx.executeSql("ALTER TABLE existing_case_details ADD COLUMN court_id INTEGER;");
        }, function error(err)
        {
            console.log('matter_type not Found');
        });
    }
    catch (err)
    {
        console.log(err);
    }
    //Stackeholder3
    try
    {
        tx.executeSql("SELECT sh_crud_id FROM sh_crud;", [], function(tx, result)
        {
            tx.executeSql("CREATE TABLE sh_crud_new (sh_crud_id INTEGER ,name TEXT,mobile TEXT,email TEXT,server_sync TEXT,notify_sms TEXT,notify_email TEXT,company_name TEXT);");
            tx.executeSql("INSERT INTO sh_crud_new SELECT sh_crud_id,name,mobile, email,server_sync,notify_sms,notify_email,company_name FROM sh_crud;");
            tx.executeSql("DROP TABLE sh_crud;");
            tx.executeSql("ALTER TABLE sh_crud_new RENAME TO sh_crud;");
        }, function error(err)
        {
            console.log('Not Found');
        });
    }
    catch (err)
    {
        console.log(err);
    }
    //Stackeholder End3

//     tx.executeSql("DELETE FROM SH_Mapping");
//    tx.executeSql("DELETE FROM case_justice_table");
//    tx.executeSql("DELETE FROM case_number_update_logs");
//    tx.executeSql("DELETE FROM case_table");
//    tx.executeSql("DELETE FROM court_date_table");
//    tx.executeSql("DELETE FROM display_overlay");
//    tx.executeSql("DELETE FROM error_log");
//    tx.executeSql("DELETE FROM existing_case_details");
//    tx.executeSql("DELETE FROM existings");
//    tx.executeSql("DELETE FROM justice_table");
//    tx.executeSql("DELETE FROM list_court_date_table");
//    tx.executeSql("DELETE FROM list_table");
//    tx.executeSql("DELETE FROM log_table");
//    tx.executeSql("DELETE FROM matter_type");
//    tx.executeSql("DELETE FROM new_update_logs");
//    tx.executeSql("DELETE FROM package_cost");
//    tx.executeSql("DELETE FROM sh_crud");
//    tx.executeSql("DELETE FROM sqlite_sequence");
//    tx.executeSql("DELETE FROM user_settings");
//    tx.executeSql("DELETE FROM SH_Mapping");
//    tx.executeSql("DELETE FROM sh_Crud");
//    tx.executeSql("DELETE FROM stackeholder_log");
//    tx.executeSql("DELETE FROM Note");

}
//Delete data from all tables

    function ClearTables(){

    db.transaction(function(tx){

    tx.executeSql("DELETE FROM SH_Mapping");
    tx.executeSql("DELETE FROM case_justice_table");
    tx.executeSql("DELETE FROM case_number_update_logs");
    tx.executeSql("DELETE FROM case_table");
    tx.executeSql("DELETE FROM court_date_table");
    tx.executeSql("DELETE FROM display_overlay");
    tx.executeSql("DELETE FROM error_log");
    tx.executeSql("DELETE FROM existing_case_details");
    tx.executeSql("DELETE FROM existings");
    tx.executeSql("DELETE FROM justice_table");
    tx.executeSql("DELETE FROM list_court_date_table");
    tx.executeSql("DELETE FROM list_table");
    tx.executeSql("DELETE FROM log_table");
    tx.executeSql("DELETE FROM matter_type");
    tx.executeSql("DELETE FROM new_update_logs");
    tx.executeSql("DELETE FROM package_cost");
    tx.executeSql("DELETE FROM sh_crud");
    tx.executeSql("DELETE FROM sqlite_sequence");
    tx.executeSql("DELETE FROM user_settings");
    tx.executeSql("DELETE FROM SH_Mapping");
    tx.executeSql("DELETE FROM sh_Crud");
        tx.executeSql("DELETE FROM stackeholder_log");
        tx.executeSql("DELETE FROM listtype");
        tx.executeSql("DELETE FROM court");

    alert("All Table Data Cleared.");

    });


    }

function errorCB(tx, err)
{
    var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message;
    insertErrorLogs(errMsg, function(id)
    {
//        alert("Oops! Something went worng with db. errorCB")
    });
}

function successCB()
{
    //alert("Operation Completed Successfully.");
}

function insertDisplayOverlay()
{
    db.transaction(function(tx)
    {
        tx.executeSql('SELECT is_dispaly FROM display_overlay', [], function(tx, result)
        {
            var len = result.rows.length;
            if (len > 0)
            {
                if (result.rows.item(0).is_dispaly.toString() === '0')
                {
                    $('.ui-hlp-over').show();
                    $('.ui-helps').show();
                }
                else
                {
                    $('.ui-hlp-over').hide();
                    $('.ui-helps').hide();
                }
            }
            else
            {
                tx.executeSql('INSERT INTO display_overlay (is_dispaly) VALUES (?);', [0], function(tx, result)
                {
                    $('.ui-hlp-over').show();
                    $('.ui-helps').show();
                }, errorCB);
            }
        }, errorCB);
    }, errorCB, successCB);
}

function updateDisplayOverlay()
{
    db.transaction(function(tx)
    {
        tx.executeSql('UPDATE display_overlay set is_dispaly=?', [1], function(tx, result)
        {
            $('.ui-hlp-over').hide();
            $('.ui-helps').hide();
        }, errorCB);
    }, errorCB, successCB);
}

function insertNewUpdateTime(updtTime)
{
    db.transaction(function(tx)
    {
        tx.executeSql('INSERT INTO new_update_logs (update_time) VALUES (?);', [updtTime], successCB, errorCB);
    }, errorCB, successCB);
}

function insertJusticeIfNotExists(tx, justiceName, callBack)
{
    tx.executeSql('SELECT justice_id FROM justice_table where justice_name=?', [justiceName], function(tx, result)
    {
        try
        {
            var len = result.rows.length;
            if (len > 0)
            {
                if (typeof callBack !== 'undefined')
                {
                    callBack(result.rows.item(0).justice_id);
                }
            }
            else
            {
                tx.executeSql('INSERT INTO justice_table (justice_name) VALUES (?);', [justiceName], function(tx, result)
                {
                    if (typeof callBack !== 'undefined')
                    {
                        callBack(result.insertId);
                    }
                }, errorCB);
            }
        }
        catch (err)
        {
            var errMsg = err + "\nMethod: insertJusticeIfNotExists(jquery) tx1." + "\nError Stack:" + err.stack;
            insertErrorLogs(errMsg, function(id)
            { //alert("Oops! Something went worng.")
            });
        }
    }, errorCB);
}

function deletejustice(justiceId)
{
    db.transaction(function(tx)
    {
        tx.executeSql('DELETE FROM justice_table where justice_id=?', [justiceId], function(tx, results)
        {
            tx.executeSQL('DELETE FROM case_justice_table where justice_id=?', [justiceId], successCB, errorCB);
        }, errorCB);
    }, errorCB, successCB);
}

function insertCourtDateIfNotExists(tx, startDate, endDate, callBack)
{
    tx.executeSql('SELECT court_date_id FROM court_date_table where start_date=? and end_date=?', [startDate, endDate], function(tx, result)
    {
        var len = result.rows.length;
        if (len > 0)
        {
            if (typeof callBack !== 'undefined')
            {
                callBack(result.rows.item(0).court_date_id);
            }
        }
        else
        {
            tx.executeSql('INSERT INTO court_date_table (start_date,end_date) VALUES (?,?);', [startDate, endDate], function(tx, result)
            {
                if (typeof callBack !== 'undefined')
                {
                    callBack(result.insertId);
                }
            }, errorCB);
        }
    }, errorCB);
}

function insertListIfNotExists(tx, listName, callBack)
{
    if (listName !== '')
    {
        listName = listName.trim();
    }
    tx.executeSql('SELECT list_id FROM list_table where list_name=?', [listName], function(tx, result)
    {
        var len = result.rows.length;
        if (len > 0)
        {
            if (typeof callBack !== 'undefined')
            {
                callBack(result.rows.item(0).list_id);
            }
        }
        else
        {
            tx.executeSql('INSERT INTO list_table (list_name) VALUES (?);', [listName], function(tx, result)
            {
                if (typeof callBack !== 'undefined')
                {
                    callBack(result.insertId);
                }
            }, errorCB);
        }
    }, errorCB);
}

function insertErrorLogs(msg, callBack)
{
    var deviceid = deviceID;
    var errorMsg = msg + "\n App Version : " + version;
    var err_time = new Date().getTime();
    db.transaction(function(tx)
    {
        tx.executeSql('INSERT INTO error_log (error,deviceID,error_time,device_info,is_register) VALUES (?,?,?,?,?);', [errorMsg, deviceid, err_time, deviceInfo, 0], function(tx, result)
        {
            if (typeof callBack !== 'undefined')
            {
                callBack(result.insertId);
            }
        }, errorCB)
    }, errorCB, successCB);
}

function insertCaseIfNotExists(tx, list_court_date_id, matter, case_no, list_no, party_name, store_time, suspected, callBack)
{
    tx.executeSql('SELECT case_id FROM case_table where list_court_date_id=? and matter=? and case_no=? and list_no=? and party_name=?', [list_court_date_id, matter, case_no, list_no, party_name], function(tx, result)
    {
        var len = result.rows.length;
        if (len > 0)
        {
            if (typeof callBack !== 'undefined')
            {
                callBack(result.rows.item(0).case_id);
            }
        }
        else
        {
            tx.executeSql('select case_id from case_table where list_court_date_id=? and case_no=?', [list_court_date_id, case_no], function(tx, result1)
            {
                if (result1.rows.length > 0)
                {
                    var caseId = result1.rows.item(0).case_id;
                    tx.executeSql('update case_table set matter=?,list_no=?,party_name=?,store_time=?,suspected=? where case_id=?;', [matter, list_no, party_name, store_time, suspected, caseId], function(tx, result)
                    {
                        if (typeof callBack !== 'undefined')
                        {
                            callBack(caseId);
                        }
                    }, errorCB);
                }
                else
                {
//                if(case_no.trim() == "WP-6524/2008")
//                    alert(case_no);
                    tx.executeSql('INSERT INTO case_table (list_court_date_id,matter,case_no,list_no,party_name,store_time,suspected) VALUES (?,?,?,?,?,?,?);', [list_court_date_id, matter, case_no, list_no, party_name, store_time, suspected], function(tx, result)
                    {
                        if (typeof callBack !== 'undefined')
                        {
                            callBack(result.insertId);
                        }
                    }, errorCB);
                }
            }, errorCB);
        }
    }, errorCB);
}

function insertCaseJusticeIfNotExists(tx, justiceId, caseId, courtNo, callBack)
{
    tx.executeSql('SELECT case_justice_id FROM case_justice_table where justice_id=? and case_id=? and court_no=?', [justiceId, caseId, courtNo], function(tx, result)
    {
        var len = result.rows.length;
        if (len > 0)
        {
            if (typeof callBack !== 'undefined')
            {
                callBack(result.rows.item(0).case_justice_id);
            }
        }
        else
        {
            tx.executeSql('INSERT INTO case_justice_table (justice_id,case_id,court_no) VALUES (?,?,?);', [justiceId, caseId, courtNo], function(tx, result)
            {
                if (typeof callBack !== 'undefined')
                {
                    callBack(result.insertId);
                }
            }, errorCB);
        }
    }, errorCB);
}

function insertListCourtDateIfNotExists(tx, listId, courtDateId, callBack)
{
    var flag = 0;
    if (isUpdated)
    {
        flag = 1;
    }
    else
    {
        flag = 0;
    }
    tx.executeSql('SELECT list_court_date_id FROM list_court_date_table where list_id=? and court_date_id=?', [listId, courtDateId], function(tx, result)
    {
        var len = result.rows.length;
        if (len > 0)
        {
            if (typeof callBack !== 'undefined')
            {
                var query = "UPDATE list_court_date_table set is_updated=" + flag + " where list_court_date_id=" + result.rows.item(0).list_court_date_id + ";";
                tx.executeSql(query, [], successCB, errorCB);
                callBack(result.rows.item(0).list_court_date_id);
            }
        }
        else
        {
            tx.executeSql('INSERT INTO list_court_date_table (list_id,court_date_id,is_updated) VALUES (?,?,?);', [listId, courtDateId, flag], function(tx, result)
            {
                if (typeof callBack !== 'undefined')
                {
                    callBack(result.insertId);
                }
            }, errorCB);
        }
    }, errorCB);
}

function setIsUpdated()
{
    var query = "UPDATE list_court_date_table set is_updated=0 ;";
    db.transaction(function(tx)
    {
        tx.executeSql(query, [], successCB, errorCB);
    }, errorCB, successCB);
}

function insertLog(requestTime, responseTime, responseType, callBack)
{
    db.transaction(function(tx)
    {
        tx.executeSql('SELECT log_id FROM log_table where request_time=? and response_time=? and response_type=?', [requestTime, responseTime, responseType], function(tx, result)
        {
            var len = result.rows.length;
            if (len > 0)
            {
                if (typeof callBack !== 'undefined')
                {
                    callBack(result.rows.item(0).log_id);
                }
            }
            else
            {
                tx.executeSql('INSERT INTO log_table (request_time,response_time,response_type,device_info,is_register) VALUES (?,?,?,?,?);', [requestTime, responseTime, responseType, deviceInfo, 0], function(tx, result)
                {
                    if (typeof callBack !== 'undefined')
                    {
                        callBack(result.insertId);
                    }
                }, errorCB);
            }
        }, errorCB);
    }, errorCB, successCB);
}
$(document).on('click', '#clear_log_btn', function(event, ui)
{
    db.transaction(function(tx)
    {
        tx.executeSql('DELETE FROM log_table', [], function(tx, results)
        {
            drawToast("Cleared");
        }, errorCB);
        tx.executeSql('DELETE FROM error_log', [], function(tx, results)
        {
            drawToast("Cleared");
        }, errorCB);
    }, errorCB, successCB);
});

function validateUsersDeviceAndPassword(callBack)
{
    try
    {
        var url = MR_URL;
        var webMethod = protocal + url + '/WebService_andriod.asmx/validateUsersDeviceAndPassword';
        var email_id = $("#email_id").val();
        var password = $("#password").val();
        var requestTime = new Date().getTime();
        $.ajax(
        {
            type: "POST",
            url: webMethod,
            dataType: "json",
            cache: false,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(
            {
                deviceId: deviceID,
                userName: email_id,
                password: password
            }),
            success: function(msg)
            {
                var responseTime = new Date().getTime();
                var isActive = true;
                if (msg.d.length > 0)
                {
                    isActive = msg.d;
                }
                if (typeof callBack !== 'undefined')
                {
                    callBack(isActive);
                }
                $.mobile.loading('hide');
            },
            error: function(XMLHttpRequest, textStatus, errorThrown)
            {
                $.mobile.loading('hide');
                var responseTime = new Date().getTime();
                var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: validateUsersDeviceAndPassword(ajax call)";
                errMsg = errMsg + "\n App Version : " + version;
                insertLog(requestTime, responseTime, errMsg, function(returnId) {});
                //alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
                if (typeof callBack !== 'undefined')
                {
                    callBack(false);
                }
            },
            beforeSend: function()
            {
                $.mobile.loading('show',
                {
                    text: 'Loading...',
                    textVisible: true,
                    theme: 'b',
                    textonly: false
                });
            },
            complete: function()
            { /*alert("Data Received.");$.mobile.hidePageLoadingMsg();*/ }
        });
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: validateUsersDeviceAndPassword(jquery) " + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
}

function saveSettings()
{
    try
    {
        var email_id = $("#email_id").val();
        var password = $("#password").val();
        if (email_id.trim().length == 0)
        {
            $("#email_id").focus();
            drawToast("Enter Email Id");
            return false;
        }
        else
        {}
        if (password.trim().length == 0)
        {
            $("#password").focus();
            drawToast("Enter Password");
            return false;
        }
        validateUsersDeviceAndPassword(function(isActive)
        {
            if (isActive.toString() !== 'false')
            {
                if (isActive.toString() === 'invalid')
                {
                    alert('Invalid Username or Password. Please contact +918269244088 to get your PIN');
                }
                else
                {
                    var lawyerDetails;
                    var lawyerId, lawyerName, lawyerMobile;
                    if (isActive.toString().indexOf(',') !== -1)
                    {
                        lawyerDetails = isActive.split(',');
                        if (lawyerDetails.length > 0)
                        {
                            lawyerId = lawyerDetails[1];
                            lawyerName = lawyerDetails[2];
                            lawyerMobile = lawyerDetails[3];
                        }
                    }
                    var lawyerData = {
                        'lawyerId': lawyerId,
                        'lawyerName': lawyerName,
                        'lawyerMobile': lawyerMobile
                    };
                    localStorage.setItem('lawyerDetails', JSON.stringify(lawyerData));
                    $.mobile.navigate("updateDeviceID.htm",
                    {
                        transition: "slide"
                    });
                }
            }
            else
            {
                db.transaction(function(tx)
                {
                    tx.executeSql('select * from user_settings', [], function(tx, result)
                    {
                        try
                        {
                            if (result.rows.length == 0)
                            {
                                tx.executeSql('INSERT INTO user_settings (email_id,password) values(?,?)', [email_id, password], function()
                                {
                                    settingsSaved = "DONE";
                                    doRegistrationProcess();
                                    if (settingsSaved = "DONE")
                                    {
                                        $.mobile.navigate("index.html",
                                        {
                                            transition: "slide",
                                            reverse: true
                                        });
                                    }
                                    get_lawyers_info();
                                    drawToast("Settings Saved");
                                    getSubscriptionDate();
                                }, function(err)
                                {
                                    var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: saveSettings[insert](executeSql)";
                                    insertErrorLogs(errMsg, function(id)
                                    {
                                        //alert("Oops! Something went worng with db.")
                                    });
                                });
                            }
                            else
                            {
                                tx.executeSql('UPDATE user_settings set email_id=?,password=?', [email_id, password], function()
                                {
                                    try
                                    {
                                        settingsSaved = "DONE";
                                        doRegistrationProcess();
                                        get_lawyers_info();
                                        if (settingsSaved = "DONE")
                                        {
                                            $.mobile.navigate("index.html",
                                            {
                                                transition: "slide",
                                                reverse: true
                                            });
                                        }

                                        drawToast("Settings Saved");
                                        getSubscriptionDate();
                                    }
                                    catch (err)
                                    {
                                        var errMsg = err + "\nMethod: saveSettings(jquery) txt2." + "\nError Stack:" + err.stack;
                                        insertErrorLogs(errMsg, function(id)
                                        { //alert("Oops! Something went worng.")
                                        });
                                    }
                                }, function(err)
                                {
                                    var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: saveSettings[update](executeSql)";
                                    insertErrorLogs(errMsg, function(id)
                                    {
                                        //alert("Oops! Something went worng with db.")
                                    });
                                });
                            }
                        }
                        catch (err)
                        {
                            var errMsg = err + "\nMethod: saveSettings(jquery) tx1." + "\nError Stack:" + err.stack;
                            insertErrorLogs(errMsg, function(id)
                            { //alert("Oops! Something went worng.")
                            });
                        }
                    }, function(err)
                    {
                        var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: saveSettings[select](executeSql)";
                        insertErrorLogs(errMsg, function(id)
                        {
                            //alert("Oops! Something went worng with db.")
                        });
                    });
                }, function(err)
                {
                    var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: saveSettings(transaction)";
                    insertErrorLogs(errMsg, function(id)
                    {
                        //alert("Oops! Something went worng with db.")
                    });
                }, successCB);
            }
        });
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: saveSettings(jquery)." + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
}

function loadSettings()
{
    db.transaction(function(tx)
    {
        tx.executeSql('SELECT * FROM user_settings', [], function(tx, result)
        {
            var len = result.rows.length;
            if (len > 0)
            {
                $('#email_id').val(result.rows.item(0).email_id);
                $('#password').val(result.rows.item(0).password);
            }
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: loadSettings(executeSql)";
            insertErrorLogs(errMsg, function(id)
            {
//                alert("Oops! Something went worng with db.")
            });
        });
    }, function(err)
    {
        var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: loadSettings(transaction)";
        insertErrorLogs(errMsg, function(id)
        {
//            alert("Oops! Something went worng with db.")
        });
    }, successCB);
}

function clearLog()
{
    db.transaction(function(tx)
    {
        tx.executeSql('DELETE FROM log_table', [], successCB, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: clearLog(executeSql)";
            insertErrorLogs(errMsg, function(id)
            {
//                alert("Oops! Something went worng with db.")
            });
        });
    }, function(err)
    {
        var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: clearLog(transaction)";
        insertErrorLogs(errMsg, function(id)
        {
//            alert("Oops! Something went worng with db.")
        });
    }, successCB);
}

function getRecordCount(callBack)
{
    db.transaction(function(tx)
    {
        tx.executeSql('select count(case_id) as case_id_count from case_table', [], function(tx, result)
        {
            var case_id_count = result.rows.item(0).case_id_count;
            tx.executeSql('select count(list_id) as list_id_count from list_table', [], function(tx, result)
            {
                var list_id_count = result.rows.item(0).list_id_count;
                tx.executeSql('select count(court_date_id) as court_date_id_count from court_date_table', [], function(tx, result)
                {
                    var court_date_id_count = result.rows.item(0).court_date_id_count;
                    if (typeof callBack !== 'undefined')
                    {
                        callBack(case_id_count, list_id_count, court_date_id_count);
                    }
                }, function(err)
                {
                    var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: getRecordCount3(executeSql)";
                    insertErrorLogs(errMsg, function(id)
                    {
//                        alert("Oops! Something went worng with db.")
                    });
                });
            }, function(err)
            {
                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: getRecordCount2(executeSql)";
                insertErrorLogs(errMsg, function(id)
                {
//                    alert("Oops! Something went worng with db.")
                });
            });
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: getRecordCount1(executeSql)";
            insertErrorLogs(errMsg, function(id)
            {
//                alert("Oops! Something went worng with db.")
            });
        });
    }, function(err)
    {
        var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: getRecordCount(transaction)";
        insertErrorLogs(errMsg, function(id)
        {
//            alert("Oops! Something went worng with db.")
        });
    }, successCB);
}

function isRecordOutDated(callBack)
{
    db.transaction(function(tx)
    {
        tx.executeSql('select ifnull(max(response_time),0) as max_response_time from log_table', [], function(tx, result)
        {
            try
            {
                if (typeof callBack !== 'undefined')
                {
                    var response_time = result.rows.item(0).max_response_time;
                    if (response_time == 0)
                    {
                        callBack(true);
                    }
                    else
                    {
                        var responseTime = new Date(response_time);
                        var now = new Date();
                        var diffrence = now - responseTime;
                        if ((diffrence / (1000 * 60)) > 60)
                        {
                            callBack(true);
                        }
                        else
                        {
                            callBack(false);
                        }
                    }
                }
            }
            catch (err)
            {
                var errMsg = err + "\nMethod: isRecordOutDated(jquery) txt1." + "\nError Stack:" + err.stack;
                insertErrorLogs(errMsg, function(id)
                { //alert("Oops! Something went worng.")
                });
            }
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: isRecordOutDated(executeSql)";
            insertErrorLogs(errMsg, function(id)
            {
//                alert("Oops! Something went worng with db.")
            });
        });
    }, function(err)
    {
        var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: isRecordOutDated(transaction)";
        insertErrorLogs(errMsg, function(id)
        {
//            alert("Oops! Something went worng with db.")
        });
    }, successCB);
}
$.support.cors = true;

function getCases(callBack)
{
    try
    {
        window.localStorage.setItem('firstProgress', 'Lawyer Name');
        var requestTime = new Date().getTime();
        db.transaction(function(tx)
        {
            tx.executeSql('SELECT * FROM user_settings where user_id is not null and guid is not null', [], function(tx, result)
            {
                try
                {
                    var len = result.rows.length;
                    if (len > 0)
                    {
                        var user_id1 = result.rows.item(0).user_id;
                        var guid1 = result.rows.item(0).guid;
                        var url = MR_URL;
                        if (deviceID === '')
                        {
                            deviceID = device.uuid;
                        }
                        // commented by ssharma   --> comment tx.executeSql, max_store_time, timeStamp

                        tx.executeSql('select max(update_time) as max_store_time from new_update_logs', [], function(tx, results)
                        {
                            try
                            {
                                var max_store_time = results.rows.item(0).max_store_time;
                                var timeStamp;
                                if (max_store_time == null || max_store_time == 0)
                                {
                                    timeStamp = (31).days().ago();
                                }
                                else
                                {
                                    timeStamp = new Date(max_store_time);
                                }

                                //OR

                                //var timeStamp = "2020-07-13 00:00:00";

                                var webMethod = protocal + url + '/WebService_andriod.asmx/getCasesDevice';
                                $.ajax(
                                {
                                    type: "POST",
                                    url: webMethod,
                                    data: JSON.stringify(
                                    {
                                        lawyer_id: user_id1,
                                        timestamp: timeStamp.toString('yyyy-MM-dd HH:mm:ss'),
                                        deviceId: deviceID
                                    }),
                                    contentType: "application/json; charset=utf-8",
                                    dataType: "json",
                                    success: function(msg)
                                    {
                                        if (msg.d.indexOf('CHECKACTIVE') !== -1)
                                        {
                                            alert(msg.d);
                                        }
                                        else
                                        {
                                            var responseTime = new Date().getTime();
                                            if (msg.d.trim().length == 0)
                                            {
                                                isUpdated = false;
                                                $.mobile.loading('hide');
                                                if (typeof callBack !== 'undefined')
                                                {
                                                    callBack();
                                                }
                                                drawToast("No New Updates");
                                                insertLog(requestTime, responseTime, 'No New Updates.', function(returnId) {});
                                            }
                                            else
                                            {
                                                isUpdated = true;
                                                parseAndSaveData(msg.d, function(data)
                                                {
                                                    updateloding(data, recordCount);
                                                    if (recordCount == data)
                                                    {
                                                        recordCount = 0;
                                                        addCount = 0;
                                                        $.mobile.loading('hide');
                                                        if (typeof callBack !== 'undefined')
                                                        {
                                                            callBack();
                                                        }
                                                        drawToast("Case List Updated");
                                                        //  if(firstProgress==null || firstProgress=="" || firstProgress=='undefined' || firstProgress=='Lawyer Name' || firstProgress=='Case Number'){
                                                        window.localStorage.setItem('firstProgress', 'Case Number');
                                                        db.transaction(function(tx)
                                                        {
                                                            requestForCaseNumbers(tx, function(data) {});
                                                        }, errorCB, successCB);
                                                        //  }
                                                    }
                                                });
                                                var newTimeStamp = new Date().getTime();
                                                insertNewUpdateTime(newTimeStamp);
                                                insertLog(requestTime, responseTime, 'Record Updated.', function(returnId) {});
                                                getLastUpdatLog();
                                                getWelcomeNote();
                                            }
                                        }
                                    },
                                    error: function(XMLHttpRequest, textStatus, errorThrown)
                                    {
                                        $.mobile.loading('hide');
                                        var responseTime = new Date().getTime();
                                        var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: getCases(ajax call)";
                                        errMsg = errMsg + "\n App Version : " + version;
                                        insertLog(requestTime, responseTime, errMsg, function(returnId) {});
                                        alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
                                        calledBeforeSendAnyRequest(function(isConnected)
                                        {
                                            if (isConnected)
                                            {}
                                        });
                                    },
                                    beforeSend: function()
                                    {
                                        $.mobile.loading('show',
                                        {
                                            //text: 'Please wait...\nThis might take upto 5 min on first load.',
                                            text: 'Please wait.',
                                            textVisible: true,
                                            theme: 'b',
                                            textonly: false
                                        });
                                    },
                                    complete: function()
                                    { /*alert("Data Received.");$.mobile.hidePageLoadingMsg();*/ }
                                });
                            }
                            catch (err)
                            {
                                var errMsg = err + "\nMethod: getCases(jquery) txt2." + "\nError Stack:" + err.stack;
                                insertErrorLogs(errMsg, function(id)
                                { //alert("Oops! Something went worng.")
                                });
                            }
                        }, function(err)
                        {
                            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: getCases2(executeSql)";
                            insertErrorLogs(errMsg, function(id)
                            {
//                                alert("Oops! Something went worng with db.")
                            });
                        });
                    }
                    else
                    {
                        drawToast("Register your email to update");
                    }
                }
                catch (err)
                {
                    var errMsg = err + "\nMethod: getCases(jquery) txt1." + "\nError Stack:" + err.stack;
                    insertErrorLogs(errMsg, function(id)
                    { //alert("Oops! Something went worng.")
                    });
                }
            }, function(err)
            {
                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: getCases2(executeSql)";
                insertErrorLogs(errMsg, function(id)
                {
//                    alert("Oops! Something went worng with db.")
                });
            });
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: getCases(transaction)";
            insertErrorLogs(errMsg, function(id)
            {
//                alert("Oops! Something went worng with db.")
            });
        }, successCB);
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: getCases(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
}
$(document).on('popupbeforeposition', '#popupCalendar', function(event, ui)
{
    try
    {
        $('#casePageLeftPanel').panel("close");
        var curr = new Date();
        var minDate = new Date();
        minDate.setFullYear(curr.getFullYear() - 5, 11, 31);
        var maxDate = new Date();
        maxDate.setFullYear(curr.getFullYear() + 5, 11, 31)
        var opt = {}
        opt.date = {
            preset: 'date',
            minDate: minDate,
            maxDate: maxDate,
            dateOrder: 'ddmmy',
            dateFormat: 'dd/mm/yy'
        };
        var month = curr.getMonth() + 1;
        if (month < 10)
        {
            month = "0" + month;
        }
        var date = curr.getDate();
        if (date < 10)
        {
            date = "0" + date;
        }
        $('#test_default').val(date + "/" + month + "/" + curr.getFullYear()).scroller('destroy').scroller($.extend(opt['date'],
        {
            theme: 'default',
            mode: 'scroller',
            display: 'inline',
            lang: 'en'
        }));
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: #popupCalendar(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
});
$(document).on('popupbeforeposition', '#popupCalendarLogPage', function(event, ui)
{
    initCalendar();
});

function initCalendar()
{
    try
    {
        var curr = new Date();
        var minDate = new Date();
        minDate.setFullYear(curr.getFullYear() - 5, 11, 31);
        var maxDate = new Date();
        maxDate.setFullYear(curr.getFullYear() + 5, 11, 31)
        var opt = {}
        opt.date = {
            preset: 'date',
            minDate: minDate,
            maxDate: maxDate,
            dateOrder: 'ddmmy',
            dateFormat: 'dd/mm/yy'
        };
        var month = curr.getMonth() + 1;
        if (month < 10)
        {
            month = "0" + month;
        }
        var date = curr.getDate();
        if (date < 10)
        {
            date = "0" + date;
        }
        var dateInput = $('#test_default1');
        dateInput.val(date + "/" + month + "/" + curr.getFullYear()).scroller('destroy').scroller($.extend(opt['date'],
        {
            theme: 'default',
            mode: 'scroller',
            display: 'inline',
            lang: 'en'
        }));
        dateInput.mobiscroll('show');
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: initCalendar(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { alert("Oops! Something went worng. initcalendar main")
        });
    }
}
$(document).on('pagebeforeshow', '#advanceSearch', function(event, ui)
{
    try
    {
        var curr = new Date();
        var minDate = new Date();
        minDate.setFullYear(curr.getFullYear() - 5, 11, 31);
        var maxDate = new Date();
        maxDate.setFullYear(curr.getFullYear() + 5, 11, 31)
        var opt = {}
        opt.date = {
            preset: 'date',
            minDate: minDate,
            maxDate: maxDate,
            dateOrder: 'ddmmy',
            dateFormat: 'dd/mm/yy'
        };
        var month = curr.getMonth() + 1;
        if (month < 10)
        {
            month = "0" + month;
        }
        var date = curr.getDate();
        if (date < 10)
        {
            date = "0" + date;
        }
        var mobileEpoch = '';
        db.transaction(function(tx)
        {
            tx.executeSql('select IFNULL(max(start_date),strftime("%Y-%m-%d", "now")) as max_start_date,IFNULL(min(start_date),strftime("%Y-%m-%d", "now")) as min_start_date,IFNULL(max(end_date),strftime("%Y-%m-%d", "now")) as max_end_date,IFNULL(min(end_date),strftime("%Y-%m-%d", "now")) as min_end_date from court_date_table', [], function(tx, result)
            {
                try
                {
                    if (result.rows.length > 0)
                    {
                        var max_start_date = result.rows.item(0).max_start_date;
                        var min_start_date = result.rows.item(0).min_start_date;
                        var max_end_date = result.rows.item(0).max_end_date;
                        var min_end_date = result.rows.item(0).min_end_date;
                        var maxDate = "";
                        var maxMonth = "";
                        var maxYear = "";
                        if (max_end_date !== "")
                        {
                            maxDate = Date.parseExact(max_end_date, 'yyyy-MM-dd').getDate();
                            maxMonth = Date.parseExact(max_end_date, 'yyyy-MM-dd').getMonth();
                            maxYear = Date.parseExact(max_end_date, 'yyyy-MM-dd').getFullYear();
                        }
                        else
                        {
                            maxDate = new Date().getDate();
                            maxMonth = new Date().getMonth();
                            maxYear = new Date().getFullYear();
                        }
                        var minDate = "";
                        var minMonth = "";
                        var minYear = "";
                        if (min_start_date !== "")
                        {
                            minDate = Date.parseExact(min_start_date, 'yyyy-MM-dd').getDate();
                            minMonth = Date.parseExact(min_start_date, 'yyyy-MM-dd').getMonth();
                            minYear = Date.parseExact(min_start_date, 'yyyy-MM-dd').getFullYear();
                        }
                        else
                        {
                            minDate = new Date().getDate();
                            minMonth = new Date().getMonth();
                            minYear = new Date().getFullYear();
                        }
                        var minMobileEpoch = "";
                        if (min_start_date !== "")
                        {
                            minMobileEpoch = Date.parseExact(min_start_date, 'yyyy-MM-dd');
                        }
                        else
                        {
                            minMobileEpoch = new Date().toString("yyyy-MM-dd");
                        }
                        var maxMobileEpoch = "";
                        if (max_end_date !== "")
                        {
                            maxMobileEpoch = Date.parseExact(max_end_date, 'yyyy-MM-dd');
                        }
                        else
                        {
                            maxMobileEpoch = Date.parseExact(max_start_date, 'yyyy-MM-dd');
                        }
                        //alert('Mobile Epoch Min : '+ new Date(minMobileEpoch).toString('dd/MM/yyyy');
                        //alert('Mobile Epoch Max : '+ new Date(minMobileEpoch).toString('dd/MM/yyyy');
                        $('#mobileEpoch').html('Mobile Epoch:- ' + new Date(minMobileEpoch).toString('dd/MM/yyyy') + ' To ' + new Date(maxMobileEpoch).toString('dd/MM/yyyy'));
                        $('#start_date').val(new Date(minMobileEpoch).toString('dd/MM/yyyy')).scroller('destroy').scroller($.extend(opt['date'],
                        {
                            theme: 'default',
                            mode: 'scroller',
                            display: 'inline',
                            lang: 'en'
                        }));
                        $('#end_date').val(new Date(maxMobileEpoch).toString('dd/MM/yyyy')).scroller('destroy').scroller($.extend(opt['date'],
                        {
                            theme: 'default',
                            mode: 'scroller',
                            display: 'inline',
                            lang: 'en'
                        }));
                        var dbDate = $('#start_date').val();
                        var dbDateParsed = Date.parseExact(dbDate, 'dd/MM/yyyy').toString('yyyy-MM-dd');
                        if ($('#serverEpoch').html() !== '')
                        {
                            serverEpoch = $('#serverEpoch').html().split('from');
                            if (serverEpoch.length > 0)
                            {
                                var sEpoch = serverEpoch[1].trim().toString();
                                if (sEpoch.length > 0)
                                {
                                    sEpoch = new Date(sEpoch);
                                    dbDateParsed = new Date(dbDateParsed);
                                    if (sEpoch > dbDateParsed)
                                    {
                                        $('#serverEpoch').html('Search available from ' + Date.parseExact(dbDate, 'dd/MM/yyyy').toString('yyyy-MM-dd'));
                                    }
                                }
                            }
                        }
                    }
                    else
                    {
                        var currentDate = new Date().toString("dd/MM/yyyy");
                        $('#start_date').val(currentDate);
                        $('#end_date').val(currentDate);
                    }
                }
                catch (err)
                {
                    var errMsg = err + "\nMethod: #advanceSearch(jquery) tx1" + "\nError Stack:" + err.stack;
                    insertErrorLogs(errMsg, function(id)
                    {
                        alert("Oops! Something went worng.")
                    });
                }
            }, function(err)
            {
                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: #advanceSearch(executeSql)";
                insertErrorLogs(errMsg, function(id)
                {
//                    alert("Oops! Something went worng with db.")
                });
            });
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: #advanceSearch(transaction)";
            insertErrorLogs(errMsg, function(id)
            {
//                alert("Oops! Something went worng with db.")
            });
        }, successCB);
        var search = $('#search1');
        search.val('');
        search.trigger("keyup");
        search.focus();
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: #advanceSearch(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        {
            alert("Oops! Something went worng.")
        });
    }
});
$('#start_date').blur(function(e)
{
    var pattern = /^(3[01]|[12][0-9]|0[1-9])\/(1[0-2]|0[1-9])\/201[1-9]$/;
    if (!pattern.test($(this).val()))
    {
        alert('Start Date must be in DD/MM/YYYY format with leading zeros');
        return false;
    }
});
$('#end_date').blur(function(e)
{
    var pattern = /^(3[01]|[12][0-9]|0[1-9])\/(1[0-2]|0[1-9])\/201[1-9]$/;
    if (!pattern.test($(this).val()))
    {
        alert('Start Date must be in DD/MM/YYYY format with leading zeros');
        return false;
    }
});
$(document).on('pageshow', '#logPage', function(event)
{
    var LastNotificationDateLS = JSON.parse(localStorage.getItem("LastNotificationDateLS"));
    var dateValue = LastNotificationDateLS.Date;
    if (dateValue != "")
    {
        var el = $.mobile.activePage.find("#logOption");
        el.val('stackeholder').attr('selected', true).siblings('option').removeAttr('selected');
        el.selectmenu("refresh", true);
        setDateToInput(dateValue, '');
        var LastNotificationDateLS = {
            'Date': ''
        }
        localStorage.setItem('LastNotificationDateLS', JSON.stringify(LastNotificationDateLS));
    }
    else
    {
        var d = new Date();
        d.setHours(00, 00, 00, 00);
        setDateToInput(d.toString("dd/MM/yyyy"), '');
    }
});
$(document).on('change', '#logOption', function()
{
    $('#calendarButton').trigger('click');
});
$(document).on('change', '#EmailSMSFilter', function(event)
{
    db.transaction(function(tx)
    {
        showLogList(tx, logDateStart, logDateEnd);
    }, errorCB, successCB);
});

function showLogList(tx, startTimeStamp, endTimeStamp)
{
    nxtCurrentVal = 0;
    prevCurrentVal = 0;
    $('#EmailSMSFilter').parent().hide();
    var n = $('#logOption option:selected').val();
    if (n === 'update' || n === 'conn' || n === 'stackeholder' || n === 'error')
    {
        var query = '';
        if (n === 'stackeholder')
        {
            $('#EmailSMSFilter').parent().show();
            var filtervalue = $('#EmailSMSFilter option:selected').val();
            if (filtervalue == "Filter" || filtervalue == "All")
            {
                query = "select * from stackeholder_log where sent_Ondate  between  ? And  ? ";
                query += " order by sent_Ondate desc ";
            }
            if (filtervalue == "EmailS")
            {
                query = "select * from stackeholder_log where email!='' And result_status='Success' And sent_Ondate  between  ? And  ? ";
                query += " order by sent_Ondate desc ";
            }
            if (filtervalue == "SMSS")
            {
                query = "select * from stackeholder_log where mobile!='' And result_status='Success' And sent_Ondate  between  ? And  ? ";
                query += " order by sent_Ondate desc ";
            }
            if (filtervalue == "EmailE")
            {
                query = "select * from stackeholder_log where email!='' And result_status like '%Fail%' And sent_Ondate  between  ? And  ? ";
                query += " order by sent_Ondate desc ";
            }
            if (filtervalue == "SMSE")
            {
                query = "select * from stackeholder_log where mobile!='' And result_status like '%Fail%' And  sent_Ondate  between  ? And  ? ";
                query += " order by sent_Ondate desc ";
            }
        }
        if (n === 'update')
        {
            query = "select * from log_table where request_time  between  ? And  ?  and response_type NOT like '%Connection Error%' ";
            query += " order by response_time desc ";
        }
        if (n === 'conn')
        {
            query = "select * from log_table where request_time  between  ? And  ?  and response_type like '%Connection Error%' ";
            query += " order by response_time desc ";
        }
        if (n === 'error')
        {
            query = "select * from error_log where error_time  between  ? AND ? order by error_time desc ";
        }
        tx.executeSql(query, [startTimeStamp, endTimeStamp], function(tx, result)
        {
            try
            {
                var len = result.rows.length;
                $('.paging_center').html(len + ' Records Found');
                var logList = $('#logList');
                logList.html('');
                var i = 0;
                var data = '';
                var totalLength = len;
                if (len > 0)
                {
                    if (len >= 10)
                    {
                        len = 9;
                    }
                    var i = 0;
                    if (len <= 9 && result.rows.length < 10)
                    {
                        if (len >= 1)
                        {
                            len = len - 1;
                        }
                    }
                    else
                    {
                        if (prevCurrentVal !== 0)
                        {
                            i = prevCurrentVal;
                        }
                        if (nxtCurrentVal !== 0)
                        {
                            len = nxtCurrentVal;
                        }
                    }
                    for (i; i <= len; i++)
                    {
                        if (n == "conn" || n == "update")
                        {
                            data = data + '<li>';
                            data = data + '<h3>' + result.rows.item(i).response_type + ' Is Register:' + result.rows.item(i).is_register + '</h3>';
                            data = data + '<p><strong>Request Time - ' + new Date(result.rows.item(i).request_time).toString('dddd, MMMM d, yyyy hh:mm:ss tt') + '</strong></p>';
                            data = data + '<p><strong>Response Time - ' + new Date(result.rows.item(i).response_time).toString('dddd, MMMM d, yyyy hh:mm:ss tt') + '</strong></p>';
                            data = data + '</li>';
                            // i++;
                        }
                        if (n == "stackeholder")
                        {
                            data = data + '<li>';
                            data = data + '<h3>' + result.rows.item(i).message_text + '</h3>';
                            var medEmail = result.rows.item(i).email;
                            var medMobile = result.rows.item(i).mobile;
                            var statusResult = result.rows.item(i).result_status;
                            var resultToShow;
                            var SuccessOrFail;
                            if (medEmail != "")
                            {
                                if (statusResult == "Success")
                                {
                                    resultToShow = 'Email : ' + medEmail;
                                    SuccessOrFail = '  (Success) ';
                                }
                                else
                                {
                                    resultToShow = 'Email : ' + medEmail;
                                    SuccessOrFail = "(Fail - " + result.rows.item(i).error_msg + ")";
                                }
                            }
                            if (medMobile != "")
                            {
                                if (statusResult == "Success")
                                {
                                    resultToShow = 'Mobile : ' + medMobile;
                                    SuccessOrFail = '  (Success) ';
                                }
                                else
                                {
                                    resultToShow = 'Mobile : ' + medMobile;
                                    SuccessOrFail = "(Fail - " + result.rows.item(i).error_msg + ")";
                                }
                            }
                            if (statusResult == "Success")
                            {
                                data = data + '<h2>' + resultToShow + '</h2> <h2 style="color:green"> ' + SuccessOrFail + '</h2>';
                            }
                            if (statusResult == "Fail")
                            {
                                data = data + '<h2>' + resultToShow + '</h2> <h2 style="color:red"> ' + SuccessOrFail + '</h2>';
                            }
                            data = data + '<p><strong>DateTime - ' + new Date(result.rows.item(i).sent_Ondate).toString('dddd, MMMM d, yyyy hh:mm:ss tt') + '</strong></p>';
                            data = data + '</li>';
                            // i++;
                        }
                        if (n == "error")
                        {
                            data = data + '<li>';
                            data = data + '<h3>' + result.rows.item(i).error + ' Is Register:' + result.rows.item(i).is_register + '</h3>';
                            data = data + '<p><strong>Error time - ' + new Date(result.rows.item(i).error_time).toString('dddd, MMMM d, yyyy hh:mm:ss') + '</strong></p>';
                            data = data + '</li>';
                        }
                    }
                    //  while (i < len) {
                    // }
                    logList.append(data);
                    logList.listview("refresh");
                } //end if len>0
                else
                {
                    logList.append('<li><h1>No Log To Show.</h1></li>');
                    logList.listview("refresh");
                }
                $("#prevLog").attr('data-startval', '0');
                $("#prevLog").attr('data-current', '0');
                prevCurrentVal = 0;
                $("#nextLog").attr('data-endval', totalLength);
                var divdVal = 0;
                var modVal = 0;
                if (totalLength > 0)
                {
                    divdVal = Math.floor(totalLength / 10);
                    modVal = totalLength % 10;
                    if (divdVal > 0)
                    {
                        $("#nextLog").attr('data-current', '9');
                        nxtCurrentVal = 9;
                    }
                    else
                    {
                        $("#nextLog").attr('data-current', modVal);
                        nxtCurrentVal = modVal;
                    }
                }
                else
                {
                    $("#nextLog").attr('data-current', '0');
                    nxtCurrentVal = 0;
                }
            }
            catch (err)
            {
                var errMsg = err + "\nMethod: showLogList(jquery) tx1" + "\nError Stack:" + err.stack;
                insertErrorLogs(errMsg, function(id)
                { //alert("Oops! Something went worng.")
                });
            }
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: showLogList(executeSql)";
            insertErrorLogs(errMsg, function(id)
            {
//                alert("Oops! Something went worng with db.")
            });
        });
    }
}
var logDateStart;
var logDateEnd;

function setDateToInput(valueText, init)
{
    var dateDiv = $('#dateDiv');
    dateDiv.html("<h2>" + valueText + "</h2>");
    var d = Date.parseExact(valueText, 'dd/MM/yyyy');
    d.setHours(00, 00, 00, 00);
    var startTimeStamp = d.getTime();
    d.setDate(d.getDate() + 1);
    var endTimeStamp = d.getTime();
    logDateStart = startTimeStamp;
    logDateEnd = endTimeStamp;
    db.transaction(function(tx)
    {
        showLogList(tx, startTimeStamp, endTimeStamp);
    }, errorCB, successCB);
}

function changeLogListDate()
{
    var dateInput = $('#test_default1');
    var valueText = dateInput.val();
    var dateDiv = $('#dateDiv');
    dateDiv.html("<h2>" + valueText + "</h2>");
    var d = Date.parseExact(valueText, 'dd/MM/yyyy');
    d.setHours(00, 00, 00, 00);
    var startTimeStamp = d.getTime();
    d.setDate(d.getDate() + 1);
    var endTimeStamp = d.getTime();
    logDateStart = startTimeStamp;
    logDateEnd = endTimeStamp;
    db.transaction(function(tx)
    {
        showLogList(tx, startTimeStamp, endTimeStamp);
    }, errorCB, successCB);
}

var NC=0;
function populateCasePage()
{
    try
    {

    //Code for push Notification To open Specific Date Case Page
    if(PrevoisPageAll==""){

    if(NC==1){
    PrevoisPageAll="casePage";
    }

            var currentUrl = $(location).attr('href');
            var currentUrl1 = currentUrl.split("?");

            if (currentUrl1.length >=2){
            if (currentUrl1[1] == "Notify")
            {

            }
            else{
            if(currentUrl1[1].indexOf("Date") != -1){
            //alert('date Found');
            var spltDesh=currentUrl1[1].split('-');
            var datee=spltDesh[1].split('%20');
            var CasepageDate=datee[0];
            //alert(CasepageDate);
            var datearr=CasepageDate.split('/');
            var origDate="20"+datearr[2]+"-"+datearr[1]+"-"+datearr[0];
            //alert(origDate);

            var searchData = {'startDate': origDate};
            localStorage.setItem('searchData', JSON.stringify(searchData));
            }
            else if(currentUrl1[1].indexOf("No%20Listings") != -1){
            //alert('No Listing Found');
            var spltDesh=currentUrl1[1].split('in%20');
            var datee=spltDesh[1].split('%20');
            var CasepageDate=datee[0];
            //alert(CasepageDate);
            var datearr=CasepageDate.split('/');
            var origDate="20"+datearr[2]+"-"+datearr[1]+"-"+datearr[0];
            //alert(origDate);
            var searchData = {'startDate': origDate};
            localStorage.setItem('searchData', JSON.stringify(searchData));
            }
            else{

            }

            }

            }
            NC=NC+1;
            }
            //End code Notification
        db.transaction(function(tx)
        {
            var searchData = JSON.parse(localStorage.getItem("searchData"));
            var searchString = searchData.searchString;
            var startDate = searchData.startDate;
            var endDate = searchData.endDate;
            var searchStringToShow = 'Showing Result For: ';
            if (typeof searchString !== 'undefined')
            {
                searchStringToShow += searchString + ', ';
            }
            if (typeof startDate !== 'undefined')
            {
                searchStringToShow += startDate + ', ';
                if (typeof endDate !== 'undefined')
                {
                    searchStringToShow += endDate;
                }
            }
            $("#searchInfoDiv").html(searchStringToShow);
            if (typeof searchString !== 'undefined' && searchString !== '')
            {
                searchString = searchString.replace(/\s/g, '');
            }
            var query = 'select court_date_table.court_date_id,court_date_table.start_date,court_date_table.end_date, list_table.list_id,list_table.list_name,list_court_date_table.list_court_date_id,count(DISTINCT case_table.case_id) as case_count from court_date_table join list_court_date_table on list_court_date_table.court_date_id=court_date_table.court_date_id join list_table on list_court_date_table.list_id=list_table.list_id left join case_table on case_table.list_court_date_id=list_court_date_table.list_court_date_id left join case_justice_table on case_table.case_id=case_justice_table.case_id left join justice_table on justice_table.justice_id=case_justice_table.justice_id where 1=1 ';
            if (typeof startDate !== 'undefined')
            {
                if (typeof endDate !== 'undefined')
                {
                    query += "And (CASE WHEN end_date='' THEN start_date BETWEEN '" + startDate + "' and '" + endDate + "' ELSE start_date BETWEEN '" + startDate + "' AND '" + endDate + "' OR end_date BETWEEN '" + startDate + "' AND '" + endDate + "' END) ";
                }
                else
                {
                    query += "And (CASE WHEN end_date='' THEN start_date='" + startDate + "' ELSE '" + startDate + "' BETWEEN start_date AND end_date END) ";
                }
            }
            if (typeof searchString !== 'undefined')
            {
                query += " And ((REPLACE(justice_table.justice_name,' ','') like '%" + searchString + "%' or REPLACE(case_justice_table.court_no,' ','') like '%" + searchString + "%')  or (REPLACE(list_table.list_name,' ','') like '%" + searchString + "%')  or (REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(case_table.case_no,'.',''),'/',''),'(',''),')',''),' ',''),'-','') like '%" + searchString + "%')  or (REPLACE(case_table.matter,' ','') like '%" + searchString + "%' or REPLACE(case_table.list_no,' ','') like '%" + searchString + "%' or REPLACE(case_table.party_name,' ','') like '%"
                    //+ searchString + "%' or REPLACE(case_table.case_no,' ','') like '%"
                    + searchString + "%')) ";
            }
            query += " group by list_court_date_table.list_court_date_id order by  case_count desc,start_date,list_name";
            tx.executeSql(query, [], function(tx, result)
            {
                try
                {
                    var dateDropDown = $('#dateDropDown');
                    dateDropDown.empty();
                    dateDropDown.selectmenu("refresh");
                    var len = result.rows.length;
                    var i = 0;
                    dateDropDown.append('<option value="all">All Cases</option>');
                    while (i < len)
                    {
                        if (result.rows.item(i).end_date.trim().length == 0)
                        {
                            dateDropDown.append('<option value="' + result.rows.item(i).list_court_date_id + '">' + result.rows.item(i).start_date + ' List-' + result.rows.item(i).list_name + ' (' + result.rows.item(i).case_count + ' Case)</option>');
                        }
                        else
                        {
                            dateDropDown.append('<option value="' + result.rows.item(i).list_court_date_id + '">' + result.rows.item(i).start_date + ' To ' + result.rows.item(i).end_date + ' List-' + result.rows.item(i).list_name + ' (' + result.rows.item(i).case_count + ' Case)</option>');
                        }
                        i++;
                    }
                    if (i > 0)
                    {
                        $('#dateDropDown>option:nth-child(1)').attr('selected', true);
                        dateDropDown.selectmenu("refresh");
                        getCasesFromAllTheList();
                        //                        var listCourtDateId = dateDropDown.val();
                        //                        getCasesByListCourtDateId(listCourtDateId);
                    }
                    else
                    {
                        $('#justiceCollapsiblePanel').html('<center><div><h4>No Record To Show.</h4></div></center>');
                    }
                }
                catch (err)
                {
                    var errMsg = err + "\nMethod: populateCasePage(jquery) tx1" + "\nError Stack:" + err.stack;
                    insertErrorLogs(errMsg, function(id)
                    { //alert("Oops! Something went worng.")
                    });
                }
            }, function(err)
            {
                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: populateCasePage(executeSql)";
                insertErrorLogs(errMsg, function(id)
                {
//                    alert("Oops! Something went worng with db.")
                });
                $.mobile.loading('hide');
            });
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: populateCasePage(transaction)";
            insertErrorLogs(errMsg, function(id)
            {
//                alert("Oops! Something went worng with db.")
            });
        }, successCB);
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: populateCasePage12(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
}
$(document).on('change', '#dateDropDown', function()
{
    var n = $(this).val();
    if (n.toString() !== 'all')
    {
        getCasesByListCourtDateId(n);
    }
    else
    {
        getCasesFromAllTheList();
    }
});


var toggleId=0;
function getCasesByListCourtDateId(listCourtDateId)
{
    try
    {
        $.mobile.loading('show',
        {
            text: 'Loading...',
            textVisible: true,
            theme: 'b',
            textonly: false
        });
        db.transaction(function(tx)
        {
            var searchData = JSON.parse(localStorage.getItem("searchData"));
            var searchString = searchData.searchString;
            if (typeof searchString !== 'undefined' && searchString !== '')
            {
                searchString = searchString.replace(/\s/g, '');
            }



//            var query = 'select * from justice_table ' + 'join case_justice_table on case_justice_table.justice_id=justice_table.justice_id ' + 'join case_table on case_table.case_id=case_justice_table.case_id ' + 'where case_justice_table.case_id IN  ' + '(select distinct case_table.case_id ' + 'from case_table ' + 'join case_justice_table on case_table.case_id=case_justice_table.case_id ' + 'join justice_table on justice_table.justice_id=case_justice_table.justice_id ' + 'join list_court_date_table on list_court_date_table.list_court_date_id=case_table.list_court_date_id ' + 'join court_date_table on list_court_date_table.court_date_id=court_date_table.court_date_id ' + 'join list_table on list_table.list_id=list_court_date_table.list_id  WHERE 1=1 '
//            if (typeof searchString !== 'undefined')
//            {
//                query += " AND ((CASE WHEN end_date='' THEN start_date='" + searchString + "' ELSE '" + searchString + "' BETWEEN start_date AND end_date END)  or (REPLACE(justice_table.justice_name,' ','') like '%" + searchString + "%') or (REPLACE(case_justice_table.court_no,' ','') like '%" + searchString + "%') " + " or (REPLACE(list_table.list_name,' ','') like '%" + searchString + "%') " + " or (REPLACE(case_table.matter,' ','') like '%" + searchString + "%') " + " or (REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(case_table.case_no,'/',''),'.',''),')',''),'(',''),' ',''),'-','') like '%" + searchString + "%' or REPLACE(case_table.list_no,' ','') like '%" + searchString + "%' or REPLACE(case_table.party_name,' ','') like '%" + searchString
//                    //+ "%' or REPLACE(case_table.case_no,' ','') like '%" + searchString
//                    + "%')) ";
//            }
//            query += ' AND list_court_date_table.list_court_date_id=?  order by case_table.case_id)';

var query="";

query +="select * from justice_table join ( select case_id, justice_id, max(court_no) as court_no from case_justice_table group by case_id, justice_id ) cjt on cjt.justice_id=justice_table.justice_id join case_table on case_table.case_id=cjt.case_id join list_court_date_table on list_court_date_table.list_court_date_id=case_table.list_court_date_id join court_date_table on court_date_table.court_date_id=list_court_date_table.court_date_id join list_table on list_table.list_id=list_court_date_table.list_id WHERE 1=1 ";

 if (typeof searchString !== 'undefined')
            {
            query += "AND ((CASE WHEN end_date='' THEN start_date='" + searchString + "' ELSE '" + searchString + "' BETWEEN start_date AND end_date END)  or (REPLACE(justice_table.justice_name,' ','') like '%" + searchString + "%') or (REPLACE(cjt.court_no,' ','') like '%" + searchString + "%') " + " or (REPLACE(list_table.list_name,' ','') like '%" + searchString + "%') " + " or (REPLACE(case_table.matter,' ','') like '%" + searchString + "%' or REPLACE(case_table.list_no,' ','') like '%" + searchString + "%' or REPLACE(case_table.party_name,' ','') like '%" + searchString + "%') " + " or (REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(case_table.case_no,'/',''),'.',''),')',''),'(',''),' ',''),'-','') like '%" + searchString + "%')) ";
            }

query+="AND case_table.list_court_date_id=? order by case_table.case_id, justice_table.justice_id";



            tx.executeSql(query, [listCourtDateId], function(tx, result)
            {
                try
                {
                    var len = result.rows.length;
                    var justiceCollapsiblePanel = $('#justiceCollapsiblePanel');
                    justiceCollapsiblePanel.html('<div></div>');
                    var i = 0;
                    var caseData = [];
                    var justiceNameArray = [];
                    var arrayCaseId = [];
                    var justiceName;
                    var lastJusticeName;
                    var max_store_time = 0;
                    var min_store_time = 0;
                    while (i < len)
                    {
                        if ($.inArray(result.rows.item(i).case_id, arrayCaseId) == -1)
                        {
                            lastJusticeName = result.rows.item(i).justice_name;
                            if ($.inArray(result.rows.item(i).justice_name, justiceNameArray) == -1)
                            {
                                justiceNameArray[justiceNameArray.length] = result.rows.item(i).justice_name;
                            }
                            justiceName = result.rows.item(i).justice_name;


                     //Asif temp Code Start
                            caseData[caseData.length] = {
                            'case_id': result.rows.item(i).case_id,
                            'case_no': result.rows.item(i).case_no,
                            'list_no': result.rows.item(i).list_no,
                            'matter': result.rows.item(i).matter,
                            'party_name': result.rows.item(i).party_name,
                            'justice_name': justiceName,
                            'court_no': result.rows.item(i).court_no,
                            'suspected': result.rows.item(i).suspected,
                            'store_time': result.rows.item(i).store_time
                        };
                       // Asif temp Code End

                        }
                        else
                        {
                            var name = lastJusticeName + ',' + result.rows.item(i).justice_name;
                            if ($.inArray(name, justiceNameArray) == -1)
                            {
                                justiceNameArray[justiceNameArray.length - 1] = name;
                            }
                            else
                            {
                                justiceNameArray.pop();
                            }
                            justiceName = name;
                            caseData[caseData.length - 1].justice_name = name;
                        }
//                        caseData[caseData.length] = {
//                            'case_id': result.rows.item(i).case_id,
//                            'case_no': result.rows.item(i).case_no,
//                            'list_no': result.rows.item(i).list_no,
//                            'matter': result.rows.item(i).matter,
//                            'party_name': result.rows.item(i).party_name,
//                            'justice_name': justiceName,
//                            'court_no': result.rows.item(i).court_no,
//                            'suspected': result.rows.item(i).suspected,
//                            'store_time': result.rows.item(i).store_time
//                        };
                        arrayCaseId.push(result.rows.item(i).case_id);
                        if (result.rows.item(i).store_time > max_store_time)
                        {
                            max_store_time = result.rows.item(i).store_time;
                        }
                        if (min_store_time == 0)
                        {
                            min_store_time = result.rows.item(i).store_time;
                        }
                        if (result.rows.item(i).store_time < min_store_time)
                        {
                            min_store_time = result.rows.item(i).store_time;
                        }
                        i++;
                    }
                    if (max_store_time == min_store_time)
                    {
                        max_store_time = 0;
                    }
                    i = 0;
                    var j = 0;
                    var data = '';
                    var courtNo = false;
                    var footer = false;
                    var caseId = 0;
                    while (i < justiceNameArray.length)
                    {
                        data = '';
                        j = 0;
                        courtNo = false;
                        footer = false;
                        caseId = 0;
                        while (j < caseData.length)
                        {
                            if (caseData[j].justice_name == justiceNameArray[i] && caseId != caseData[j].case_id)
                            {

                                if (!courtNo)
                                {
                                    data = data + '<div data-role="collapsible" class="ui-collapsible ui-collapsible-inset" data-collapsed="false">';
                                    data = data + '<h2 class="ui-collapsible-heading">';
                                    data = data + justiceNameArray[i];
                                    data = data + '</h2>';
                                    data = data + '<ul data-role="listview" data-theme="d" data-divider-theme="d" class="ui-listview">';
                                    data = data + '<li data-role="list-divider" role="heading" class="ui-li ui-li-divider ui-bar-d ui-li-has-count">';
                                    data = data + caseData[j].court_no + '</li>';
                                    courtNo = true;
                                }
                                data = data + '<li class="ui-li ui-li-static ui-btn-up-d ui-menu-show" >';
                                if (caseData[j].store_time == max_store_time)
                                {
                                    data = data + '<p class="suspectedCase"><strong>#Updated Case#</strong></p>';
                                }
                                if (caseData[j].suspected == 'Y')
                                {
                                    data = data + '<p class="suspectedCase"><strong>#Suspected Case#</strong></p>';
                                }
                                data = data + '<h3>' + caseData[j].list_no + '. ' + caseData[j].case_no.replace(/,/g, ', ') + '</h3>';
                                data = data + '<p><strong>' + caseData[j].matter + '</strong></p>';
                                data = data + '<p><strong>' + caseData[j].party_name + '</strong></p>';
                                // testing area for menu //
                                data = data + '<p class="ui-menu-button1" style="margin: -7px 0px 6px 9px;font-size:0.90em;"  onclick="toggleMenuBar(' + toggleId + ')" ><img id="syncImage" src="images/icons/ic_setting.png" alt="menu" style="width: 25px;  height: 25px; cursor: pointer;" onclick="toggleMenuBar(' + toggleId + ')"/> <strong style=" color: darkgray; "> Tap Here For Options </strong> </p>';
                                data = data + '<div class="ui-menu-button" id="' + toggleId + '">';

                                data = data + '<div data-role="footer" class="menu-div ui-grid-d"><div data-role="navbar" data-iconpos="top"><ul ><li><a href="#popupStackholder" onclick="ShlistPrepare(this)" data-rel="popup" data-role="button" data-value="' + caseData[j].case_no + '" data-id="' + caseData[j].case_id + '" data-icon="user" data-position-to="window" data-transition="pop">Client</a></li><li><a href="#" onclick="prepare_caseSearchList(this)"  data-role="button" data-value="' + caseData[j].case_no + '" data-id="' + caseData[j].case_id + '" title="' + caseData[j].case_no + '" data-icon="calendar">Dates</a></li><li><a href="#" id="shareId" data-role="button" data-value="' + caseData[j].case_no + '" data-id="' + caseData[j].case_id + '" data-icon="tag">Share</a></li><li><a href="#" onclick="shownotes(this)" id="note" data-role="button" data-value="' + caseData[j].case_no + '" data-id="' + caseData[j].case_id + '" data-icon="comment">Notes</a></li></ul></div></div>';

                                data = data + '</div>';
                                data = data + '</li>';
                                // end testing area //
                            }
                            caseId = caseData[j].case_id;
                            j++;
                            toggleId=toggleId+1;

                        }
                        data = data + '</ui></div>';
                        $(data).appendTo($('#justiceCollapsiblePanel div:first'));
                        justiceCollapsiblePanel.find('div[data-role=collapsible]').collapsible(
                        {
                            refresh: true
                        });
                        $('[type="button"]').button();
                        $('[data-role="navbar"]').navbar();
                        i++;
                    }
                    if (len == 0)
                    {
                        justiceCollapsiblePanel.html('<center><div><h4>No Listing For This Date And List.</h4></div><div><h5>Are We missing some of your cases? Check your <a data-role="button" data-inline="true" href="#lawyerNames" id="myAcc" data-transition="slide">Vakalatnama Names</a></h5></div></center>');
                    }
                    $('html,body').scrollTop(0);
                    $.mobile.loading('hide');
                }
                catch (err)
                {
                    var errMsg = err + "\nMethod: getCasesByListCourtDateId(jquery)" + "\nError Stack:" + err.stack;
                    insertErrorLogs(errMsg, function(id)
                    { //alert("Oops! Something went worng.")
                    });
                    $.mobile.loading('hide');
                }
            }, function(err)
            {
                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: getCasesByListCourtDateId(executeSql)";
                insertErrorLogs(errMsg, function(id)
                {
//                    alert("Oops! Something went worng with db.")
                });
                $.mobile.loading('hide');
            });
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: getCasesByListCourtDateId(transaction)";
            insertErrorLogs(errMsg, function(id)
            {
//                alert("Oops! Something went worng with db.")
            });
            $.mobile.loading('hide');
        }, successCB);
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: getCasesByListCourtDateId12(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
        $.mobile.loading('hide');
    }
}

function getAllCasesByListDateId(dateId, data, callBack)
{
    try
    {
        $.mobile.loading('show',
        {
            text: 'Loading...',
            textVisible: true,
            theme: 'b',
            textonly: false
        });
        db.transaction(function(tx)
        {
            var searchData = JSON.parse(localStorage.getItem("searchData"));
            var searchString = searchData.searchString;
            if (typeof searchString !== 'undefined' && searchString !== '')
            {
                searchString = searchString.replace(/\s/g, '');
            }

            var query="";


//            query = 'select * from justice_table ' + 'join case_justice_table on case_justice_table.justice_id=justice_table.justice_id ' + 'join case_table on case_table.case_id=case_justice_table.case_id ' + 'where case_justice_table.case_id IN  ' + '(select distinct case_table.case_id ' + 'from case_table ' + 'join case_justice_table on case_table.case_id=case_justice_table.case_id ' + 'join justice_table on justice_table.justice_id=case_justice_table.justice_id ' + 'join list_court_date_table on list_court_date_table.list_court_date_id=case_table.list_court_date_id ' + 'join court_date_table on list_court_date_table.court_date_id=court_date_table.court_date_id ' + 'join list_table on list_table.list_id=list_court_date_table.list_id  WHERE 1=1 '
//            if (typeof searchString !== 'undefined')
//            {
//                query += " AND ((CASE WHEN end_date='' THEN start_date='" + searchString + "' ELSE '" + searchString + "' BETWEEN start_date AND end_date END)  or (REPLACE(justice_table.justice_name,' ','') like '%" + searchString + "%') or (REPLACE(case_justice_table.court_no,' ','') like '%" + searchString + "%') " + " or (REPLACE(list_table.list_name,' ','') like '%" + searchString + "%') " + " or (REPLACE(case_table.matter,' ','') like '%" + searchString + "%' or REPLACE(case_table.list_no,' ','') like '%" + searchString + "%' or REPLACE(case_table.party_name,' ','') like '%" + searchString + "%') " + " or (REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(case_table.case_no,'/',''),'.',''),')',''),'(',''),' ',''),'-','') like '%" + searchString + "%')) ";
//            }
//            query += ' AND list_court_date_table.list_court_date_id=?  order by case_table.case_id)';




query +="select * from justice_table join ( select case_id, justice_id, max(court_no) as court_no from case_justice_table group by case_id, justice_id ) cjt on cjt.justice_id=justice_table.justice_id join case_table on case_table.case_id=cjt.case_id join list_court_date_table on list_court_date_table.list_court_date_id=case_table.list_court_date_id join court_date_table on court_date_table.court_date_id=list_court_date_table.court_date_id join list_table on list_table.list_id=list_court_date_table.list_id WHERE 1=1 ";

 if (typeof searchString !== 'undefined')
            {
            query += "AND ((CASE WHEN end_date='' THEN start_date='" + searchString + "' ELSE '" + searchString + "' BETWEEN start_date AND end_date END)  or (REPLACE(justice_table.justice_name,' ','') like '%" + searchString + "%') or (REPLACE(cjt.court_no,' ','') like '%" + searchString + "%') " + " or (REPLACE(list_table.list_name,' ','') like '%" + searchString + "%') " + " or (REPLACE(case_table.matter,' ','') like '%" + searchString + "%' or REPLACE(case_table.list_no,' ','') like '%" + searchString + "%' or REPLACE(case_table.party_name,' ','') like '%" + searchString + "%') " + " or (REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(case_table.case_no,'/',''),'.',''),')',''),'(',''),' ',''),'-','') like '%" + searchString + "%')) ";
            }

query+="AND case_table.list_court_date_id=? order by case_table.case_id, justice_table.justice_id";



            tx.executeSql(query, [dateId], function(tx, result)
            {
                try
                {
                    var len = result.rows.length;
                    var i = 0;
                    var caseData = [];
                    var justiceNameArray = [];
                    var arrayCaseId = [];
                    var justiceName;
                    var lastJusticeName;
                    var max_store_time = 0;
                    var min_store_time = 0;
                    while (i < len)
                    {
                        var caseid = result.rows.item(i).case_id;
                        if ($.inArray(result.rows.item(i).case_id, arrayCaseId) == -1)
                        {
                            lastJusticeName = result.rows.item(i).justice_name;
                            if ($.inArray(result.rows.item(i).justice_name, justiceNameArray) == -1)
                            {
                                justiceNameArray[justiceNameArray.length] = result.rows.item(i).justice_name;
                            }
                            justiceName = result.rows.item(i).justice_name;
                       //Asif temp Code Start
                            caseData[caseData.length] = {
                            'case_id': result.rows.item(i).case_id,
                            'case_no': result.rows.item(i).case_no,
                            'list_no': result.rows.item(i).list_no,
                            'matter': result.rows.item(i).matter,
                            'party_name': result.rows.item(i).party_name,
                            'justice_name': justiceName,
                            'court_no': result.rows.item(i).court_no,
                            'suspected': result.rows.item(i).suspected,
                            'store_time': result.rows.item(i).store_time
                        };
                        //Asif temp Code End

                        }
                        else
                        {
                            var name = lastJusticeName + ',' + result.rows.item(i).justice_name;
                            if ($.inArray(name, justiceNameArray) == -1)
                            {
                                justiceNameArray[justiceNameArray.length - 1] = name;
                            }
                            else
                            {
                                justiceNameArray.pop();
                            }
                            justiceName = name;
                            caseData[caseData.length - 1].justice_name = name;
                        }
//                        caseData[caseData.length] = {
//                            'case_id': result.rows.item(i).case_id,
//                            'case_no': result.rows.item(i).case_no,
//                            'list_no': result.rows.item(i).list_no,
//                            'matter': result.rows.item(i).matter,
//                            'party_name': result.rows.item(i).party_name,
//                            'justice_name': justiceName,
//                            'court_no': result.rows.item(i).court_no,
//                            'suspected': result.rows.item(i).suspected,
//                            'store_time': result.rows.item(i).store_time
//                        };
                        arrayCaseId.push(result.rows.item(i).case_id);
                        if (result.rows.item(i).store_time > max_store_time)
                        {
                            max_store_time = result.rows.item(i).store_time;
                        }
                        if (min_store_time == 0)
                        {
                            min_store_time = result.rows.item(i).store_time;
                        }
                        if (result.rows.item(i).store_time < min_store_time)
                        {
                            min_store_time = result.rows.item(i).store_time;
                        }
                        i++;
                    }
                    if (max_store_time == min_store_time)
                    {
                        max_store_time = 0;
                    }
                    i = 0;
                    var j = 0;
                    var courtNo = false;
                    var footer = false;
                    var caseId = 0;
                    while (i < justiceNameArray.length)
                    {
                        j = 0;
                        courtNo = false;
                        footer = false;
                        caseId = 0;
                        while (j < caseData.length)
                        {
                            if (caseData[j].justice_name == justiceNameArray[i] && caseId != caseData[j].case_id)
                            {
                                if (!courtNo)
                                {
                                    data = data + '<div data-role="collapsible" class="ui-collapsible ui-collapsible-inset" data-mini="true" data-collapsed="false">';
                                    data = data + '<h2 class="ui-collapsible-heading">';
                                    data = data + justiceNameArray[i];
                                    data = data + '</h2>';
                                    data = data + '<ul data-role="listview" data-theme="d" data-divider-theme="d" class="ui-listview">';
                                    data = data + '<li data-role="list-divider" role="heading" class="ui-li ui-li-divider ui-bar-d ui-li-has-count">';
                                    data = data + caseData[j].court_no + '</li>';
                                    courtNo = true;
                                }
                                data = data + '<li class="ui-li ui-li-static ui-btn-up-d  ui-menu-show">';
                                if (caseData[j].store_time == max_store_time)
                                {
                                    data = data + '<p class="suspectedCase"><strong>#Updated Case#</strong></p>';
                                }
                                if (caseData[j].suspected == 'Y')
                                {
                                    data = data + '<p class="suspectedCase"><strong>#Suspected Case#</strong></p>';
                                }
                                data = data + '<h3>' + caseData[j].list_no + '. ' + caseData[j].case_no + '</h3>';
                                data = data + '<p><strong>' + caseData[j].matter + '</strong></p>';
                                data = data + '<p><strong>' + caseData[j].party_name + '</strong></p>';
                                // testing area for menu //
                                data = data + '<p class="ui-menu-button1" style=" margin: -7px 0px 6px 9px; " onclick="toggleMenuBar(' + toggleId + ')" ><img id="syncImage" src="images/icons/ic_setting.png" alt="menu" style="width: 25px;  height: 25px; cursor: pointer;" onclick="toggleMenuBar(' + toggleId + ')"/> <strong style=" color: darkgray; "> Tap Here For Options </strong> </p>';
                                data = data + '<div class="ui-menu-button" id="' + toggleId + '">';

                                data = data + '<div data-role="footer" class="menu-div ui-grid-d"><div data-role="navbar" data-iconpos="top"><ul><li><a href="#popupStackholder" onclick="ShlistPrepare(this)" data-rel="popup" data-role="button" data-value="' + caseData[j].case_no + '" data-id="' + caseData[j].case_id + '" data-icon="user" data-position-to="window" data-transition="pop">Client</a></li><li><a href="#" onclick="prepare_caseSearchList(this)"  data-role="button" data-value="' + caseData[j].case_no + '" data-id="' + caseData[j].case_id + '" title="' + caseData[j].case_no + '" data-icon="calendar">Dates</a></li><li><a href="#" id="shareId" data-role="button" data-value="' + caseData[j].case_no + '" data-id="' + caseData[j].case_id + '" data-icon="tag">Share</a></li><li><a href="#" onclick="shownotes(this)" id="note" data-role="button" data-value="' + caseData[j].case_no + '" data-id="' + caseData[j].case_id + '" data-icon="comment">Notes</a></li></ul></div></div>';

                                data = data + '<div>';
                                data = data + '</li>';
                                // end testing area //
                            }
                            caseId = caseData[j].case_id;
                            j++;
                            toggleId=toggleId+1;

                        }
                        data = data + '</ui></div>';
                        i++;
                    }
                    if (len == 0)
                    {
                        data = data + ('<center><div><h4>No Listing For This Date And List.</h4></div><div><h5>Are We missing some of your cases? Check your <a data-role="button" data-inline="true" href="#lawyerNames" id="myAcc" data-transition="slide">Vakalatnama Names</a></h5></div></center>');
                    }
                    if (callBack !== 'undefined')
                    {
                        callBack(data);
                    }
                }
                catch (err)
                {
                    var errMsg = err + "\nMethod: getCasesByListCourtDateId(jquery)" + "\nError Stack:" + err.stack;
                    insertErrorLogs(errMsg, function(id)
                    { //alert("Oops! Something went worng.")
                    });
                    $.mobile.loading('hide');
                }
            }, function(err)
            {
                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: getCasesByListCourtDateId(executeSql)";
                insertErrorLogs(errMsg, function(id)
                {
//                    alert("Oops! Something went worng with db.")
                });
                $.mobile.loading('hide');
            });
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: getCasesByListCourtDateId(transaction)";
            insertErrorLogs(errMsg, function(id)
            {
//                alert("Oops! Something went worng with db.")
            });
            $.mobile.loading('hide');
        }, successCB);
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: getCasesByListCourtDateId12(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
        $.mobile.loading('hide');
    }
}

function getCasesFromAllTheList()
    {
        $.mobile.loading('show',
        {
            text: 'Loading...',
            textVisible: true,
            theme: 'b',
            textonly: false
        });
        var justiceCollapsiblePanelForAll = $('#justiceCollapsiblePanel');
        justiceCollapsiblePanelForAll.addClass('ui-all-cases');
        justiceCollapsiblePanelForAll.html('<div></div>');
        $('#dateDropDown > option').each(function()
        {
            if (this.value !== 'all')
            {
                var data = '';
                var currListText = this.text;
                var listCourtDateId = this.value;
                data = data + '<div data-role="collapsible" class="ui-collapsible ui-collapsible-inset" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d" data-collapsed="false" data-theme="a">';
                data = data + '<h2 class="ui-collapsible-heading">';
                data = data + currListText;
                data = data + '</h2>';
                data = data + '<div data-role="collapsible-set" data-theme="b" data-content-theme="d">';
                data = data + '<div>';
                getAllCasesByListDateId(listCourtDateId, data, function(result)
                {
                    result = result + '</div>';
                    result = result + '</div>';
                    result = result + '</div>';
                    $(result).appendTo($('#justiceCollapsiblePanel div:first'));
                    justiceCollapsiblePanelForAll.find('div[data-role=collapsible]').collapsible(
                    {
                        refresh: true
                    });
                    $('[type="button"]').button();
                    $('[data-role="navbar"]').navbar();
                });
            }
        });
        $('html,body').scrollTop(0);
        $.mobile.loading('hide');
    }
    //$(document).on("click", "#shareL", function () {
    //    var n = $('#dateDropDown option:selected').val();
    //    var txt = $("#dateDropDown option:selected").text();
    //    if(n.toLowerCase()!=='all'){
    //        myShareCasesDateWise(txt,'', '', '', n);
    //        trigger_menu();
    //    }
    //    else{
    //        try {
    //        var selectedDat = $("#searchInfoDiv").html();
    //        var dateToShare = selectedDat.split(':');
    //        if(dateToShare.length>1){
    //            if(typeof dateToShare[1] != 'undefined'){
    //                if(dateToShare[1].indexOf(',') !== -1){
    //                    dateToShare = dateToShare[1].replace(',', ' ');
    //                }
    //                dateToShare = dateToShare.trim();
    //                var dateRanges;
    //                var startDate = '';
    //                var endDate = '';
    //                var searchString = '';
    //                var pattern = /^201[1-9]\-(1[0-2]|0[1-9])\-(3[01]|[12][0-9]|0[1-9])$/;
    //                if (dateToShare.indexOf(',') !== -1) {
    //                    dateRanges = dateToShare.split(',');
    //                    if (dateRanges.length > 0) {
    //                        if (dateRanges[0] !== 'undefined') {
    //                            if (pattern.test(dateRanges[0].trim())) {
    //                                startDate = dateRanges[0].trim();
    //                            }
    //                            else {
    //                                searchString = dateRanges[0].trim();
    //                            }
    //                        }
    //                        else {
    //                            if (pattern.test(dateToShare)) {
    //                                startDate = dateToShare;
    //                            }
    //                            else {
    //                                searchString = dateToShare;
    //                            }
    //                        }
    //                        if (dateRanges[1] !== 'undefined') {
    //                            if (pattern.test(dateRanges[1].trim())) {
    //                                endDate = dateRanges[1].trim();
    //                            }
    //                            else {
    //                                if (searchString != '') {
    //                                    searchString = searchString + ',' + dateRanges[1].trim();
    //                                }
    //                            }
    //                        }
    //                        else {
    //                            endDate = '';
    //                        }
    //                    }
    //                }
    //                else {
    //                    if (pattern.test(dateToShare)) {
    //                        startDate = dateToShare;
    //                    }
    //                    else {
    //                        searchString = dateToShare;
    //                    }
    //                }
    //                var txt = 'Showing Cases For: ';
    //                if (endDate != 'undefined' && endDate != '') {
    //                    if (pattern.test(startDate)) {
    //                        txt = txt + startDate + " To " + endDate;
    //                    }
    //                    else {
    //                        txt = txt + dateToShare;
    //                    }
    //                }
    //                else {
    //                    if (pattern.test(startDate)) {
    //                        txt = txt + startDate;
    //                    }
    //                    else {
    //                        txt = txt + dateToShare;
    //                    }
    //                }
    //                var shareData = {
    //                    'subject': txt,
    //                    'startDate': dateToShare
    //                };
    //                localStorage.setItem('shareData', JSON.stringify(shareData));
    //                myShareCasesDateWise(txt, searchString, startDate, endDate, '');
    //                trigger_menu();
    //            }
    //        }
    //    }
    //    catch (err) {
    //        var errMsg = err + "\nMethod: #shareALL(jquery) " + "\nError Stack:" + err.stack;
    //        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.")
    //        });
    //    }
    //    }
    //});
    //function myShareAllCases(listCourtDateId, subject) {
    //    try {
    //        $.mobile.loading('show', {
    //            text: 'Loading...',
    //            textVisible: true,
    //            theme: 'a',
    //            textonly: false
    //        });
    //        db.transaction(
    //function (tx) {
    //    var searchData = JSON.parse(localStorage.getItem("searchData"));
    //    var searchString = searchData.searchString;
    //    if(typeof searchString !== 'undefined' &&  searchString !== ''){
    //        searchString = searchString.replace(/\s/g,'');
    //    }
    //    var query = 'select * from justice_table '
    //    + 'join case_justice_table on case_justice_table.justice_id=justice_table.justice_id '
    //    + 'join case_table on case_table.case_id=case_justice_table.case_id '
    //    + 'where case_justice_table.case_id IN  '
    //    + '(select distinct case_table.case_id '
    //    + 'from case_table '
    //    + 'join case_justice_table on case_table.case_id=case_justice_table.case_id '
    //    + 'join justice_table on justice_table.justice_id=case_justice_table.justice_id '
    //    + 'join list_court_date_table on list_court_date_table.list_court_date_id=case_table.list_court_date_id '
    //    + 'join court_date_table on list_court_date_table.court_date_id=court_date_table.court_date_id '
    //    + 'join list_table on list_table.list_id=list_court_date_table.list_id  WHERE 1=1 '
    //    if (typeof searchString !== 'undefined') {
    //        query += " AND ((CASE WHEN end_date='' THEN start_date='"
    //        + searchString
    //        + "' ELSE '"
    //        + searchString
    //        + "' BETWEEN start_date AND end_date END)  or (REPLACE(justice_table.justice_name,' ','') like '%"
    //        + searchString
    //        + "%') or (REPLACE(case_justice_table.court_no,' ','') like '%"
    //        + searchString + "%') "
    //        + " or (REPLACE(list_table.list_name,' ','') like '%" + searchString
    //        + "%') " + " or (REPLACE(case_table.matter,' ','') like '%" + searchString
    //        + "%' or REPLACE(case_table.list_no,' ','') like '%" + searchString
    //        + "%' or REPLACE(case_table.party_name,' ','') like '%" + searchString
    //        + "%' or REPLACE(case_table.case_no,' ','') like '%" + searchString
    //        + "%')) ";
    //    }
    //    query += ' AND list_court_date_table.list_court_date_id=?  order by case_table.case_id)';
    //    tx.executeSql(query, [listCourtDateId],
    //        function (tx, result) {
    //            try {
    //                var len = result.rows.length;
    //                var i = 0;
    //                var caseData = [];
    //                var justiceNameArray = [];
    //                var arrayCaseId = [];
    //                var justiceName;
    //                var lastJusticeName;
    //                var max_store_time = 0;
    //                var min_store_time = 0;
    //                while (i < len) {
    //                    if ($.inArray(result.rows.item(i).case_id, arrayCaseId) == -1) {
    //                        lastJusticeName = result.rows.item(i).justice_name;
    //                        if ($.inArray(result.rows.item(i).justice_name, justiceNameArray) == -1) {
    //                            justiceNameArray[justiceNameArray.length] = result.rows.item(i).justice_name;
    //                        }
    //                        justiceName = result.rows.item(i).justice_name;
    //                    }
    //                    else {
    //                        var name = lastJusticeName + ',' + result.rows.item(i).justice_name;
    //                        if ($.inArray(name, justiceNameArray) == -1) {
    //                            justiceNameArray[justiceNameArray.length - 1] = name;
    //                        }
    //                        else {
    //                            justiceNameArray.pop();
    //                        }
    //                        justiceName = name;
    //                        caseData[caseData.length - 1].justice_name = name;
    //                    }
    //                    caseData[caseData.length] = { 'case_id': result.rows.item(i).case_id, 'case_no': result.rows.item(i).case_no, 'list_no': result.rows.item(i).list_no, 'matter': result.rows.item(i).matter, 'party_name': result.rows.item(i).party_name, 'justice_name': justiceName, 'court_no': result.rows.item(i).court_no, 'suspected': result.rows.item(i).suspected, 'store_time': result.rows.item(i).store_time };
    //                    arrayCaseId.push(result.rows.item(i).case_id);
    //                    if (result.rows.item(i).store_time > max_store_time) {
    //                        max_store_time = result.rows.item(i).store_time;
    //                    }
    //                    if (min_store_time == 0) {
    //                        min_store_time = result.rows.item(i).store_time;
    //                    }
    //                    if (result.rows.item(i).store_time < min_store_time) {
    //                        min_store_time = result.rows.item(i).store_time;
    //                    }
    //                    i++;
    //                }
    //                if (max_store_time == min_store_time) {
    //                    max_store_time = 0;
    //                }
    //                i = 0;
    //                var j = 0;
    //                var data = '';
    //                var courtNo = false;
    //                var footer = false;
    //                var caseId = 0;
    //                while (i < justiceNameArray.length) {
    //                    j = 0;
    //                    courtNo = false;
    //                    footer = false;
    //                    caseId = 0;
    //                    while (j < caseData.length) {
    //                        if (caseData[j].justice_name == justiceNameArray[i] && caseId != caseData[j].case_id) {
    //                            if (!courtNo) {
    //                                data = '\n' + data + justiceNameArray[i] + '\n\n';
    //                                data = data + caseData[j].court_no + '\n';
    //                                courtNo = true;
    //                            }
    //                            if (caseData[j].store_time == max_store_time) {
    //                                data = data + '#Updated Case#';
    //                            }
    //                            if (caseData[j].suspected == 'Y') {
    //                                data = data + '#Suspected Case#';
    //                            }
    //                            data = '\n' + data + caseData[j].list_no + '. ' + caseData[j].case_no + '\n';
    //                            data = '\n' + data + caseData[j].matter + '\n';
    //                            data = '\n' + data + caseData[j].party_name + '\n\n';
    //                        }
    //                        caseId = caseData[j].case_id;
    //                        j++;
    //                    }
    //                    i++;
    //                }
    //                if (len == 0) {
    //                    data = 'No Listing For This Date And List.';
    //                }
    //                $.mobile.loading('hide');
    //        if(device.platform=='android' || device.platform=='Android')
    //        {
    //            data = data + "Generated using the SCS app check it out here - https://play.google.com/store/apps/details?id=com.mrsoft.pg.scs";
    //        }
    //        if(device.platform=='iOS' || device.platform=='IOS' || device.platform=='ios')
    //        {
    //            data = data + "Generated using the SCS app check it out here - https://itunes.apple.com/in/app/scs-high-court-causelist/id838890348?mt=8";
    //        }
    //
    //                var success = function () { };
    //                var error = function (message) { drawToast("Oops! " + message); };
    //                 if(device.platform=='android' || device.platform=='Android')
    //                 {
    //                      Share.createEvent(subject, data, success, error);
    //                 }
    //                 if(device.platform=='iOS' || device.platform=='IOS' || device.platform=='ios')
    //                 {
    //                      window.plugins.socialsharing.share(data,subject);
    //                 }
    //
    //
    //            }
    //            catch (err) {
    //                var errMsg = err + "\nMethod: myShareAllCases(jquery)" + "\nError Stack:" + err.stack;
    //        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.")
    //        });
    //            }
    //        }, function (err) { $.mobile.loading('hide'); var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: myShareAllCases(executeSql)"; insertErrorLogs(errMsg, function (id) { alert("Oops! Something went worng with db.") }); });
    //}, function (err) { $.mobile.loading('hide'); var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: myShareAllCases(transaction)"; insertErrorLogs(errMsg, function (id) { alert("Oops! Something went worng with db.") }); }, successCB);
    //    }
    //    catch (err) {
    //        var errMsg = err + "\nMethod: myShareAllCases12(jquery)" + "\nError Stack:" + err.stack;
    //        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.")
    //        });
    //    }
    //}
    //$(document).on("click", "#shareD", function () {
    //    try {
    //        var selectedDat = $("#searchInfoDiv").html();
    //        var dateToShare = selectedDat.split(':');
    //        if(dateToShare.length>1){
    //            if(typeof dateToShare[1] != 'undefined'){
    //                if(dateToShare[1].indexOf(',') !== -1){
    //                    dateToShare = dateToShare[1].replace(',', ' ');
    //                }
    //                dateToShare = dateToShare.trim();
    //                var dateRanges;
    //                var startDate = '';
    //                var endDate = '';
    //                var searchString = '';
    //                var pattern = /^201[1-9]\-(1[0-2]|0[1-9])\-(3[01]|[12][0-9]|0[1-9])$/;
    //                if (dateToShare.indexOf(',') !== -1) {
    //                    dateRanges = dateToShare.split(',');
    //                    if (dateRanges.length > 0) {
    //                        if (dateRanges[0] !== 'undefined') {
    //                            if (pattern.test(dateRanges[0].trim())) {
    //                                startDate = dateRanges[0].trim();
    //                            }
    //                            else {
    //                                searchString = dateRanges[0].trim();
    //                            }
    //                        }
    //                        else {
    //                            if (pattern.test(dateToShare)) {
    //                                startDate = dateToShare;
    //                            }
    //                            else {
    //                                searchString = dateToShare;
    //                            }
    //                        }
    //                        if (dateRanges[1] !== 'undefined') {
    //                            if (pattern.test(dateRanges[1].trim())) {
    //                                endDate = dateRanges[1].trim();
    //                            }
    //                            else {
    //                                if (searchString != '') {
    //                                    searchString = searchString + ',' + dateRanges[1].trim();
    //                                }
    //                            }
    //                        }
    //                        else {
    //                            endDate = '';
    //                        }
    //                    }
    //                }
    //                else {
    //                    if (pattern.test(dateToShare)) {
    //                        startDate = dateToShare;
    //                    }
    //                    else {
    //                        searchString = dateToShare;
    //                    }
    //                }
    //                var txt = 'Showing Cases For: ';
    //                if (endDate != 'undefined' && endDate != '') {
    //                    if (pattern.test(startDate)) {
    //                        txt = txt + startDate + " To " + endDate;
    //                    }
    //                    else {
    //                        txt = txt + dateToShare;
    //                    }
    //                }
    //                else {
    //                    if (pattern.test(startDate)) {
    //                        txt = txt + startDate;
    //                    }
    //                    else {
    //                        txt = txt + dateToShare;
    //                    }
    //                }
    //                var shareData = {
    //                    'subject': txt,
    //                    'startDate': dateToShare
    //                };
    //                localStorage.setItem('shareData', JSON.stringify(shareData));
    //                myShareCasesDateWise(txt, searchString, startDate, endDate, '');
    //                trigger_menu();
    //            }
    //        }
    //        else{
    //            drawToast("Please select any date from side panel.");
    //        }
    //
    //    }
    //    catch (err) {
    //        var errMsg = err + "\nMethod: #shareD(jquery)" + "\nError Stack:" + err.stack;
    //        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.")
    //        });
    //    }
    //});
    //function myShareCasesDateWise(subject, searchString, startDate, endDate, listcourtDateID) {
    //try{
    //    $.mobile.loading('show', {
    //        text: 'Loading...',
    //        textVisible: true,
    //        theme: 'a',
    //        textonly: false
    //    });
    //    db.transaction(function (tx) {
    //        if(typeof searchString !== 'undefined' &&  searchString !== ''){
    //            searchString = searchString.replace(/\s/g,'');
    //        }
    //        var query = "select DISTINCT start_date,end_date,list_court_date_table.list_court_date_id,('List-' || list_name) as list_name," +
    //                    "case_count,judge_name,court_no,list_no,case_no,case_table.case_id,matter,party_name,suspected,store_time," +
    //                    "(CASE WHEN end_date='' THEN (start_date || ' List-' || list_name || ' (' || case_count || ' Case) ') ELSE " +
    //                    " (start_date || ' To ' || end_date || ' List-' || list_name || ' (' || case_count || ' Case) ') END) as lst_nm " +
    //                    "from court_date_table join list_court_date_table on court_date_table.court_date_id=list_court_date_table.court_date_id " +
    //                    "join list_table on list_court_date_table.list_id=list_table.list_ID " +
    //                    "join case_table on list_court_date_table.list_court_date_id=case_table.list_court_date_id " +
    //                    "join (select court_date_table.court_date_id as cdi,list_table.list_id,count(DISTINCT case_table.case_id) as case_count from court_date_table " +
    //                    "join list_court_date_table on court_date_table.court_date_id=list_court_date_table.court_date_id " +
    //                    "join list_table on list_court_date_table.list_id=list_table.list_ID " +
    //                    "join case_table on list_court_date_table.list_court_date_id=case_table.list_court_date_id " +
    //                    "join case_justice_table on case_table.case_id=case_justice_table.case_id  " +
    //                    "join justice_table on justice_table.justice_id=case_justice_table.justice_id " +
    //                    "where 1=1  ";
    //        if (typeof startDate !== 'undefined' && startDate.trim() !== '') {
    //            if (typeof endDate !== 'undefined' && endDate.trim() !== '') {
    //                query += "And (CASE WHEN end_date='' THEN start_date BETWEEN '"
    //                            + startDate
    //                            + "' and '"
    //                            + endDate
    //                            + "' ELSE start_date BETWEEN '"
    //                            + startDate
    //                            + "' AND '"
    //                            + endDate
    //                            + "' OR end_date BETWEEN '"
    //                            + startDate + "' AND '" + endDate + "' END) ";
    //            }
    //            else {
    //                query += "And (CASE WHEN end_date='' THEN start_date='"
    //                            + startDate
    //                            + "' ELSE '"
    //                            + startDate
    //                            + "' BETWEEN start_date AND end_date END) ";
    //            }
    //        }
    //        if (typeof listcourtDateID !== 'undefined' && listcourtDateID.trim() !== '') {
    //            query += " And list_court_date_table.list_court_date_id=" + Number(listcourtDateID);
    //        }
    //        if (typeof searchString !== 'undefined') {
    //            if (searchString.trim() !== '') {
    //                query += " AND ((CASE WHEN end_date='' THEN start_date='"
    //        + searchString
    //        + "' ELSE '"
    //        + searchString
    //        + "' BETWEEN start_date AND end_date END)  or (REPLACE(justice_table.justice_name,' ','') like '%"
    //        + searchString
    //        + "%') or (REPLACE(case_justice_table.court_no,' ','') like '%"
    //        + searchString + "%') "
    //        + " or (REPLACE(list_table.list_name,' ','') like '%" + searchString
    //        + "%') " + " or (REPLACE(case_table.matter,' ','') like '%" + searchString
    //        + "%' or REPLACE(case_table.list_no,' ','') like '%" + searchString
    //        + "%' or REPLACE(case_table.party_name,' ','') like '%" + searchString
    //        + "%' or REPLACE(case_table.case_no,' ','') like '%" + searchString
    //        + "%')) ";
    //            }
    //        }
    //        query += '  group by list_court_date_table.list_court_date_id) as count_list_cases on list_table.list_id=count_list_cases.list_id AND       court_date_table.court_date_id=count_list_cases.cdi ' +
    //                 'join (select DISTINCT justice_table.justice_id,case_justice_table.case_id,Group_Concat(justice_name) as judge_name,court_no ' +
    //                 'from case_justice_table join justice_table on case_justice_table.justice_id=justice_table.justice_id ' +
    //                 'group by case_justice_table.case_id) as justice_names on case_table.case_id=justice_names.case_id where 1=1  ';
    //        if (typeof startDate !== 'undefined' && startDate.trim() !== '') {
    //            if (typeof endDate !== 'undefined' && endDate.trim() !== '') {
    //                query += "And (CASE WHEN end_date='' THEN start_date BETWEEN '"
    //                            + startDate
    //                            + "' and '"
    //                            + endDate
    //                            + "' ELSE start_date BETWEEN '"
    //                            + startDate
    //                            + "' AND '"
    //                            + endDate
    //                            + "' OR end_date BETWEEN '"
    //                            + startDate + "' AND '" + endDate + "' END) ";
    //            }
    //            else {
    //                query += "And (CASE WHEN end_date='' THEN start_date='"
    //                            + startDate
    //                            + "' ELSE '"
    //                            + startDate
    //                            + "' BETWEEN start_date AND end_date END) ";
    //            }
    //        }
    //        if (typeof listcourtDateID !== 'undefined' && listcourtDateID.trim() !== '') {
    //            query += " And list_court_date_table.list_court_date_id=" + Number(listcourtDateID);
    //        }
    //        if (typeof searchString !== 'undefined') {
    //            if (searchString.trim() !== '') {
    //                query += " AND ((CASE WHEN end_date='' THEN start_date='"
    //        + searchString
    //        + "' ELSE '"
    //        + searchString
    //        + "' BETWEEN start_date AND end_date END)  or (REPLACE(justice_names.judge_name,' ','') like '%"
    //        + searchString
    //        + "%') or (REPLACE(justice_names.court_no,' ','') like '%"
    //        + searchString + "%') "
    //        + " or (REPLACE(list_table.list_name,' ','') like '%" + searchString
    //        + "%') " + " or (REPLACE(case_table.matter,' ','') like '%" + searchString
    //        + "%' or REPLACE(case_table.list_no,' ','') like '%" + searchString
    //        + "%' or REPLACE(case_table.party_name,' ','')like '%" + searchString
    //        + "%' or REPLACE(case_table.case_no,' ','') like '%" + searchString
    //        + "%')) ";
    //            }
    //        }
    //        query += ' order by case_count DESC,case_table.case_id;';
    //        tx.executeSql(query, [], function (tx, result) {
    //            try {
    //                var len = result.rows.length;
    //                var i = 0;
    //                var caseData = [];
    //                var justiceNameArray = [];
    //                var listNameArray = [];
    //                var arrayCaseId = [];
    //                var justiceName;
    //                var listName;
    //                var lastJusticeName;
    //                var lastListName;
    //                var max_store_time = 0;
    //                var min_store_time = 0;
    //                var listNameArray = [];
    //                while (i < len) {
    //                    if ($.inArray(result.rows.item(i).case_id, arrayCaseId) == -1) {
    //                        lastListName = result.rows.item(i).lst_nm;
    //                        if ($.inArray(result.rows.item(i).lst_nm, listNameArray) == -1) {
    //                            listNameArray[listNameArray.length] = result.rows.item(i).lst_nm;
    //                        }
    //                        listName = result.rows.item(i).lst_nm;
    //                    }
    //                    else {
    //                        var name = lastListName + ',' + result.rows.item(i).lst_nm;
    //                        if ($.inArray(name, listNameArray) == -1) {
    //                            listNameArray[listNameArray.length - 1] = name;
    //                        }
    //                        else {
    //                            listNameArray.pop();
    //                        }
    //                        listName = name;
    //                        caseData[caseData.length - 1].lst_nm = name;
    //                    }
    //                    if ($.inArray(result.rows.item(i).case_id, arrayCaseId) == -1) {
    //                        lastJusticeName = result.rows.item(i).judge_name;
    //                        if ($.inArray(result.rows.item(i).judge_name, justiceNameArray) == -1) {
    //                            justiceNameArray[justiceNameArray.length] = result.rows.item(i).judge_name;
    //                        }
    //                        justiceName = result.rows.item(i).judge_name;
    //                    }
    //                    else {
    //                        var name = lastJusticeName + ',' + result.rows.item(i).judge_name;
    //                        if ($.inArray(name, justiceNameArray) == -1) {
    //                            justiceNameArray[justiceNameArray.length - 1] = name;
    //                        }
    //                        else {
    //                            justiceNameArray.pop();
    //                        }
    //                        justiceName = name;
    //                        caseData[caseData.length - 1].justice_name = name;
    //                    }
    //                    caseData[caseData.length] = { 'case_id': result.rows.item(i).case_id, 'case_no': result.rows.item(i).case_no, 'list_no': result.rows.item(i).list_no, 'matter': result.rows.item(i).matter, 'party_name': result.rows.item(i).party_name, 'justice_name': justiceName, 'court_no': result.rows.item(i).court_no, 'suspected': result.rows.item(i).suspected, 'store_time': result.rows.item(i).store_time, 'lst_nm': result.rows.item(i).lst_nm };
    //                    arrayCaseId.push(result.rows.item(i).case_id);
    //                    if (result.rows.item(i).store_time > max_store_time) {
    //                        max_store_time = result.rows.item(i).store_time;
    //                    }
    //                    if (min_store_time == 0) {
    //                        min_store_time = result.rows.item(i).store_time;
    //                    }
    //                    if (result.rows.item(i).store_time < min_store_time) {
    //                        min_store_time = result.rows.item(i).store_time;
    //                    }
    //                    i++;
    //                }
    //                if (max_store_time == min_store_time) {
    //                    max_store_time = 0;
    //                }
    //                i = 0;
    //                var j = 0;
    //                var data = '';
    //                var courtNo = false;
    //                var footer = false;
    //                var caseId = 0;
    //                var lstName = '';
    //                var l = 0;
    //                while (l < listNameArray.length) {
    //                    i = 0;
    //                    while (i < justiceNameArray.length) {
    //                        j = 0;
    //                        courtNo = false;
    //                        footer = false;
    //                        caseId = 0;
    //                        while (j < caseData.length) {
    //                            if (caseData[j].lst_nm == listNameArray[l] && caseData[j].justice_name == justiceNameArray[i] && caseId != caseData[j].case_id) {
    //                                if (lstName == '') {
    //                                    data = data + caseData[j].lst_nm + "\n";
    //                                    data = data + "\n";
    //                                    lstName = caseData[j].lst_nm;
    //                                }
    //                                else {
    //                                    if (lstName !== caseData[j].lst_nm) {
    //                                        data = data + caseData[j].lst_nm + "\n";
    //                                        data = data + "\n";
    //                                        lstName = caseData[j].lst_nm;
    //                                    }
    //                                }
    //                                if (!courtNo) {
    //                                    data = data + justiceNameArray[i] + "\n";
    //                                    data = data + "\n";
    //                                    data = data + caseData[j].court_no + "\n";
    //                                    data = data + "\n";
    //                                    courtNo = true;
    //                                }
    //                                if (caseData[j].store_time == max_store_time) {
    //                                    data = data + '#Updated Case#';
    //                                    data = data + "\n";
    //                                }
    //                                if (caseData[j].suspected == 'Y') {
    //                                    data = data + '#Suspected Case#';
    //                                    data = data + "\n";
    //                                }
    //                                data = data + caseData[j].list_no + '. ' + caseData[j].case_no + "\n";
    //                                data = data + "\n";
    //                                data = data + caseData[j].matter + "\n";
    //                                data = data + "\n";
    //                                data = data + caseData[j].party_name + "\n";
    //                                data = data + "\n";
    //                                data = data + "\n";
    //                            }
    //                            caseId = caseData[j].case_id;
    //                            j++;
    //                        }
    //                        i++;
    //                    }
    //                    l++;
    //                }
    //                if (len == 0) {
    //                    data = 'No Listing For This Date And List.';
    //                }
    //                $.mobile.loading('hide');
    //        if(device.platform=='android' || device.platform=='Android')
    //        {
    //            data = data + "Generated using the SCS app check it out here - https://play.google.com/store/apps/details?id=com.mrsoft.pg.scs";
    //        }
    //        if(device.platform=='iOS' || device.platform=='IOS' || device.platform=='ios')
    //        {
    //            data = data + "Generated using the SCS app check it out here - https://itunes.apple.com/in/app/scs-high-court-causelist/id838890348?mt=8";
    //        }
    //                var success = function () { };
    //                var error = function (message) { drawToast("Oops! " + message); };
    //                 if(device.platform=='android' || device.platform=='Android')
    //                 {
    //                      Share.createEvent(subject, data, success, error);
    //                 }
    //                 if(device.platform=='iOS' || device.platform=='IOS' || device.platform=='ios')
    //                 {
    //                      window.plugins.socialsharing.share(data,subject);
    //                 }
    //          }
    //            catch (err) {
    //                var errMsg = err + "\nMethod: myShareCasesDateWise(jquery)" + "\nError Stack:" + err.stack;
    //        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.")
    //        });
    //            }
    //        }, function (err) { $.mobile.loading('hide'); var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: myShareCasesDateWise(executeSql)"; insertErrorLogs(errMsg, function (id) { alert("Oops! Something went worng with db.") }); });
    //    }, function (err) { $.mobile.loading('hide'); var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: myShareCasesDateWise(transaction)"; insertErrorLogs(errMsg, function (id) { alert("Oops! Something went worng with db.") }); }, successCB);
    //}
    //catch (err) {
    //    var errMsg = err + "\nMethod: myShareCasesDateWise12(jquery)" + "\nError Stack:" + err.stack;
    //        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.")
    //        });
    //}
    //}
    //$(document).on("click", "#shareAP", function () {
    //    trigger_menu();
    //        var data;
    //        if(device.platform=='android' || device.platform=='Android')
    //        {
    //        data = "Hi! Check out this great app to keep track of your cases in the high court - https://play.google.com/store/apps/details?id=com.mrsoft.pg.scs";
    //        }
    //        if(device.platform=='iOS' || device.platform=='IOS' || device.platform=='ios')
    //        {
    //        data = "Hi! Check out this great app to keep track of your cases in the high court - https://itunes.apple.com/in/app/scs-high-court-causelist/id838890348?mt=8";
    //        }
    //
    //    var success = function () { };
    //    var error = function (message) { drawToast("Oops! " + message); };
    //                if(device.platform=='android' || device.platform=='Android')
    //                 {
    //                     Share.createEvent("Android app to track High Court Cause List", data, success, error);
    //                 }
    //                 if(device.platform=='iOS' || device.platform=='IOS' || device.platform=='ios')
    //                 {
    //                      var subject1 ="App To Track High Court Cause List";
    //
    //                      window.plugins.socialsharing.share(data,subject1);
    //                 }
    //
    //
    //  //  email.createEvent("asifanytime@gmail.com", "asif9893","Regarding Test","Hello ! This is Test mail.","asif.qureshi@mrsoftwares.in", successCallback, errorCallback);
    //    //sms.createEvent("9589746120", "Hello Asif !", success, error);
    //});

function successCallback()
{
   // alert('Sent');
}

function errorCallback()
{
    //alert('Error');
}
$(document).on('pageinit', '#settings', function(event)
{
    try
    {
        loadSettings();
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: #settings(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
});
var recordCount = 0;
var addCount = 0;
var sts = false;

function parseAndSaveData(data, callBack)
{
    try
    {
        if (typeof String.prototype.startsWith != 'function')
        {
            String.prototype.startsWith = function(str)
            {
                return this.slice(0, str.length) == str;
            };
        }
        if (isUpdated)
        {
            setIsUpdated();
        }
        var parts = [];
        var lines = [];
        lines = data.split("\n");
        var i = 0;
        var chunk = "";
        var countNoListings = 0;
        while (i < lines.length)
        {

            if (lines[i].trim().indexOf("#") != -1)
            {
                if (!lines[i].startsWith("#Your"))
                {
                    i++;
                    continue;
                }
            }
            if (lines[i].trim() == '*' || lines[i].trim() == "*****")
            {
                if (i != lines.length - 1)
                {
                    if (lines[i + 1].startsWith("("))
                    {
                        if (lines[i + 1].startsWith("(1"))
                        {
                            lines[i + 1] = lines[i + 1].substring(lines[i + 1].indexOf(")") + 1);
                        }
                        else
                        {
                            lines[i + 1] = lines[i + 1].substring(lines[i + 1].indexOf(")") + 1);
                            if (lines[i + 1].startsWith("Justice"))
                            {
                                lines[i + 1] = "\n" + lines[i + 1];
                            }
                            i++;
                            continue;
                        }
                    }
                }

                if (!chunk.startsWith("Payee"))
                {
                    parts[parts.length] = chunk;
                }
                chunk = "";
            }
            else
            {
                if (lines[i].startsWith("#Your"))
                {
                    var subscriptionLine = '';
                    var trialLine = '';
                    if (lines[i].indexOf('subscription') !== -1)
                    {
                        subscriptionLine = lines[i];
                    }
                    if (lines[i].indexOf('trial') !== -1)
                    {
                        trialLine = lines[i];
                    }
                    var re = /\d{2}\/\d{2}\/\d{2}/;
                    var expireDate = re.exec(lines[i]);
                    var subscriptionDetail = {
                        subscription: subscriptionLine,
                        trial: trialLine,
                        expireData: expireDate[0]
                    };
                    localStorage.setItem('subscriptionDetail', JSON.stringify(subscriptionDetail));
                }
                if (lines[i].toLowerCase().startsWith("no listing"))
                {
                    saveNoListingData(lines[i]);
                    countNoListings++;
                }
                else
                {
                    if (!lines[i].trim().startsWith("-------------") && !lines[i].trim().startsWith("##") && !lines[i].trim().startsWith("High court has updated causelist"))
                    {
                        chunk += lines[i] + '\n';
                    }
                }
            }
            i++;
        }
        i = 0;
        var timeStamp = new Date().getTime();
        var allCaseData = [];
        while (i < parts.length)
        {
//        if(i==44){
//        alert('cc');
//        }
            if (parts[i].trim().length == 0)
            {
                i++;
                continue;
            }

            var lists = [];
            lists = parts[i].split('\n');
            if (lists.length > 3)
            {
                var innerIndex = 0;
                var dateLine = lists[innerIndex];
                var startDate = "";
                var endDate = "";
                var list = "N/A";
                if (dateLine.indexOf('to') !== -1 && dateLine.indexOf('-') !== -1)
                {
                    startDate = dateLine.substring((dateLine.indexOf("-") + 1), (dateLine.indexOf('to') - 1));
                    if (dateLine.indexOf('list') !== -1)
                    {
                        endDate = dateLine.substring((dateLine.indexOf('to') + 3), (dateLine.indexOf('list') - 1));
                    }
                }
                else
                {
                    if (dateLine.indexOf('list') !== -1 && dateLine.indexOf('-') !== -1)
                    {
                        startDate = dateLine.substring(dateLine.indexOf('-') + 1, dateLine.indexOf('list') - 1);
                    }
                }
                if (dateLine.indexOf('-') !== -1)
                {
                    list = dateLine.substring(dateLine.lastIndexOf('-') + 1);
                }
                innerIndex++;
                var justiceLine = lists[innerIndex];
                // justiceLine+= " Ist Serial no.- 2A";
                var justiceName = "N/A";
                if (justiceLine.indexOf('-') !== -1 && justiceLine.indexOf('Court') !== -1)
                {
                    justiceName = justiceLine.substring(justiceLine.indexOf('-') + 1, (justiceLine.indexOf('Court') - 1));
                }
                else
                {
                    if (justiceLine.indexOf('-') !== -1)
                    {
                        justiceName = justiceLine.substring(justiceLine.indexOf('-') + 1, (justiceLine.length));
                    }
                }
                var courtNo = "";
                if (justiceLine.indexOf('Court') !== -1)
                {
                    courtNo = justiceLine.substring(justiceLine.lastIndexOf('Court'));
                }
                //                var FirstSerialNo = "N/A";
                //                if (justiceLine.indexOf('Ist Serial') !== -1) {
                //                    FirstSerialNo = justiceLine.substring(justiceLine.lastIndexOf('Court'));
                //                }
                var listNo = "N/A";
                var matter = "N/A";
                var partyName = "N/A";
                var caseNo = "N/A";
                var suspected = "N";
                var caseLine;
                var courtDateId = 0;
                innerIndex++;
                while (innerIndex < lists.length)
                {
//                justiceLine = lists[innerIndex];
//                var st=false;
//                if(justiceLine.indexOf('Justice-')!=-1){
//                st=true;
//                }



                    sts = false;
                   // if (lists[innerIndex].trim().length == 0 || st==true)
                    if (lists[innerIndex].trim().length == 0)
                    {
                    // this code Apply for justice name show NA problem resolved by satish
                        if(sts==false){
                        innerIndex++;
                        }
                        // end

                        if (innerIndex >= lists.length)
                        {
                            continue;
                        }
                        justiceLine = lists[innerIndex];
                        justiceName = 'N/A';
                        if (justiceLine.indexOf('-') !== -1 && justiceLine.indexOf('Court') !== -1)
                        {
                            justiceName = justiceLine.substring(justiceLine.indexOf('-') + 1, (justiceLine.indexOf('Court') - 1));
                        }
                        else
                        {
                            if (justiceLine.indexOf('-') !== -1)
                            {
                                justiceName = justiceLine.substring(justiceLine.indexOf('-') + 1, (justiceLine.length));
                            }
                        }
                        courtNo = "";
                        if (justiceLine.indexOf('Court') !== -1)
                        {
                            courtNo = justiceLine.substring(justiceLine.lastIndexOf('Court'));
                        }
                        matter = "N/A";
                    }
                    else
                    {
                        if (lists[innerIndex].startsWith('*'))
                        {
                            matter = lists[innerIndex];
                            innerIndex++;
                        }
                        caseLine = lists[innerIndex];
                        suspected = "N";
                        if (caseLine.startsWith('#') && !caseLine.startsWith('#Your subscription'))
                        {
                            suspected = "Y";
                        }
                        listNo = "N/A";
                        if (caseLine.indexOf('-') !== -1 && caseLine.indexOf(' ') !== -1)
                        {
                            var slash = caseLine.indexOf('/');
                            var space = caseLine.indexOf(' ');
                            if (space > slash)
                            {
                                listNo = caseLine.substring(caseLine.indexOf('-') + 1, caseLine.indexOf('.') - 0);
                                //listNo=listNo +" ";
                            }
                            else
                            {
                                listNo = caseLine.substring(caseLine.indexOf('-') + 1, caseLine.indexOf(' ') - 1);
                                //  listNo=listNo +" ";
                            }
                        }
                        caseNo = "N/A";

                        //if(caseLine.indexOf('OA4200/2014')!=-1){
                        //alert('foun case');
                        //}

                        if (caseLine.indexOf(' ') !== -1 && caseLine.indexOf('(') !== -1)
                        {
                            var slash = caseLine.indexOf('/');
                            var bracket = caseLine.indexOf('(');
                            if (bracket < slash)
                            {
                                var slash1 = caseLine.indexOf('/');
                                var space1 = caseLine.indexOf(' ');
                                var fullcase;
                                if (space1 > slash1)
                                {
                                    fullcase = caseLine.substring(caseLine.indexOf('.') + 1, caseLine.length - 1);
                                }
                                else
                                {
                                    fullcase = caseLine.substring(caseLine.indexOf(' ') + 1, caseLine.length - 1);
                                }
                                var t = fullcase.split('(');
                                caseNo = t[0] + "(" + t[1];
                                partyName = t[2];
                                sts = true;
                            }
                            else
                            {
                                var slash1 = caseLine.indexOf('/');
                                var space1 = caseLine.indexOf(' ');
                                if (space1 > slash1)
                                {
                                    caseNo = caseLine.substring(caseLine.indexOf('.') + 1, caseLine.indexOf('('));
                                }
                                else
                                {
                                    caseNo = caseLine.substring(caseLine.indexOf(' ') + 1, caseLine.indexOf('('));
                                }
                            }
                        }
                        if (sts == false)
                        {
                            if (caseLine.indexOf('(') !== -1)
                            {
                                partyName = caseLine.substring(caseLine.indexOf('(') + 1, caseLine.length - 1);
                            }
                        }
                        try
                        {
                            if (caseNo != "N/A")
                            {

                            //if(caseNo=="(cma285/2014,ca1216/2013,oa10292/2011,visakapatnam,home"){
                            //alert('found');
                            //}
                                if(courtNo!="" && typeof courtNo != 'undefined')
                                {
                                    courtNo = courtNo.trim();
                                }
                                if(startDate!="" && typeof startDate != 'undefined')
                                {
                                    startDate = startDate.trim();
                                }
                                if(endDate!="" && typeof endDate != 'undefined')
                                {
                                    endDate = endDate.trim();
                                }
                                if(list!="" && typeof list != 'undefined')
                                {
                                    list = list.trim();
                                }
                                if(matter!="" && typeof matter != 'undefined')
                                {
                                    matter = matter.trim();
                                }

                                if(caseNo!="" && typeof caseNo != 'undefined')
                                {
                                    caseNo = caseNo.trim();
                                }
                                if(listNo!="" && typeof listNo != 'undefined')
                                {
                                    listNo = listNo.trim();
                                }
                                if(partyName!="" && typeof partyName != 'undefined')
                                {
                                    partyName = partyName.trim();
                                }

                                if(suspected!="" && typeof suspected != 'undefined')
                                {
                                    suspected = suspected.trim();
                                }
                                  if(justiceName!="" && typeof justiceName != 'undefined')
                                {
                                    justiceName = justiceName.trim();
                                }



                                if (justiceName.indexOf(',') !== -1)
                                {
                                    var jNames = justiceName.split(',');
                                    var x = 0;
                                    while (x < jNames.length)
                                    {

                                        if(jNames[x]!="" && typeof jNames[x] != 'undefined')
                                        {
                                            jNames[x] = jNames[x].trim();
                                        }
                                        recordCount++;
                                        allCaseData.push(
                                        {
                                            'courtNo': courtNo,
                                            'justiceName': jNames[x],
                                            'startDate': startDate,
                                            'endDate': endDate,
                                            'list': list,
                                            'matter': matter,
                                            'caseNo': caseNo,
                                            'listNo': listNo,
                                            'partyName': partyName,
                                            'timeStamp': timeStamp,
                                            'suspected': suspected
                                        });
                                        x++;
                                    }
                                }
                                else
                                {
                                    recordCount++;
                                    allCaseData.push(
                                    {
                                        'courtNo': courtNo,
                                        'justiceName': justiceName,
                                        'startDate': startDate,
                                        'endDate': endDate,
                                        'list': list,
                                        'matter': matter,
                                        'caseNo': caseNo,
                                        'listNo': listNo,
                                        'partyName': partyName,
                                        'timeStamp': timeStamp,
                                        'suspected': suspected
                                    });
                                }
                            }
                        }
                        catch (err)
                        {
                            var errMsg = err + "\nMethod: parseAndSaveData(jquery), Data was:" + data + " " + "\nError Stack:" + err.stack;
                            insertErrorLogs(errMsg, function(id)
                            {
                                alert("Oops! Something went worng. parseAndSaveData")
                            });
                        }
                    }
                    innerIndex++;

                    //}
                    //else{
                    //innerIndex=lists.length;
                    //}
                }
            }
            i++;
        }
        //}
        var dataLength = 0;
        if (typeof allCaseData !== 'undefined')
        {
            dataLength = allCaseData.length;
        }
        i = 0;
        while (i < dataLength)
        {
            var insertData = allCaseData[i];
//            if(insertData.caseNo.trim()=="WP-6524/2008")
//                alert(insertData.caseNo);
            addToAllTable(insertData, callBack);
            i++;
        }
        if (dataLength <= 0)
        {
            if (countNoListings <= 0)
            {
                $.mobile.loading('hide');
                var errMsg = "Data Length: 0 \n,Method: parse and save data, Data In Response : " + data + "";
                insertErrorLogs(errMsg, function(id)
                { //alert("Oops! Something went worng with db.")
                });
                alert("Oops! Somthing went worng.Please contact on +918269244088(Mon-Sat, 10AM-7PM).");
            }
            else
            {
                recordCount = countNoListings;
                callBack(countNoListings);
            }
        }
        else
        {}
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: parseAndSaveData12(jquery), Data was:" + data + " " + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        {
            alert("Oops! Something went worng.")
        });
    }
}

function addToAllTable(insertData, callBack)
{
    try
    {
        db.transaction(function(tx)
        {
            if (insertData.startDate != "")
            {
                var d1 = Date.parseExact(insertData.startDate, 'dd/MM/yy').toString('yyyy-MM-dd');
                var d2 = '';
                if (insertData.endDate.trim().length != 0)
                {
                    d2 = Date.parseExact(insertData.endDate, 'dd/MM/yy').toString('yyyy-MM-dd');
                }
                insertCourtDateIfNotExists(tx, d1, d2, function(returnId)
                {
                    var courtDateId = returnId;
                    insertListIfNotExists(tx, insertData.list, function(returnId)
                    {
                        var listId = returnId;
                        insertListCourtDateIfNotExists(tx, listId, courtDateId, function(returnId)
                        {
                            var listCourtDateId = returnId;
                            insertCaseIfNotExists(tx, listCourtDateId, insertData.matter, insertData.caseNo, insertData.listNo, insertData.partyName, insertData.timeStamp, insertData.suspected, function(returnId)
                            {
                                var caseId = returnId;
                                insertJusticeIfNotExists(tx, insertData.justiceName, function(returnId)
                                {
                                    var justiceId = returnId;
                                    insertCaseJusticeIfNotExists(tx, justiceId, caseId, insertData.courtNo, function(returnId)
                                    {
                                        var caseJusticeId = returnId;
                                        addCount++;
                                        callBack(addCount);
                                    });
                                });
                            });
                        });
                    });
                });
            }
        }, function(err)
        {
            $.mobile.loading('hide');
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: addToAllTable(transaction)";
            insertErrorLogs(errMsg, function(id)
            {
//                alert("Oops! Something went worng with db.")
            });
        }, successCB);
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: addToAllTable(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
}

function saveNoListingData(data)
{
    try
    {
        var i = 0;
        var dateStartIndex = 0;
        var dateEndIndex = 0;
        var dateStart = false;
        while (i < data.length)
        {
            if (dateStart)
            {
                if (data.charAt(i) == ' ')
                {
                    dateEndIndex = i;
                    break;
                }
                else
                {
                    if (!isNumber(data.charAt(i)) && data.charAt(i) !== '/' && data.charAt(i) !== '-')
                    {
                        dateEndIndex = i;
                        break;
                    }
                }
            }
            else
            {
                if (isNumber(data.charAt(i)))
                {
                    dateStartIndex = i;
                    dateStart = true;
                }
            }
            i++;
        }
        var dateString = data.substring(dateStartIndex, dateEndIndex);
        var lists = 'N/A';
        if (data.indexOf('causelist') !== -1)
        {
            lists = data.substring(i, data.indexOf('causelist'));
        }
        else
        {
            lists = data.substring(i, data.length);
        }
        var courtDateId = 0;
        db.transaction(function(tx)
        {
            try
            {
                var d1 = Date.parseExact(dateString, 'dd/MM/yy').toString('yyyy-MM-dd');
            }
            catch (err)
            {
                var errMsg = err + "\nMethod: saveNoListingData(jquery) two" + "\nError Stack:" + err.stack;
                insertErrorLogs(errMsg, function(id)
                { //alert("Oops! Something went worng.")
                });
            }
            insertCourtDateIfNotExists(tx, d1, '', function(returnId)
            {
                try
                {
                    courtDateId = returnId;
                    var list = [];
                    if (lists.indexOf(',') !== -1)
                    {
                        list = lists.split(',');
                        var x = 0;
                        while (x < list.length)
                        {
                            var listId = 0;
                            var hasDateStartIndex = 0;
                            var hasDateEndIndex = 0;
                            var isDateStart = false;
                            var j = 0;
                            while (j < list[x].trim().length)
                            {
                                if (isDateStart)
                                {
                                    if (list[x].trim().charAt(j) == ' ')
                                    {
                                        hasDateEndIndex = j;
                                        break;
                                    }
                                }
                                else
                                {
                                    if (isNumber(list[x].trim().charAt(j)))
                                    {
                                        hasDateStartIndex = j;
                                        isDateStart = true;
                                    }
                                }
                                j++;
                            }
                            finalDateString = list[x].trim().substring(hasDateEndIndex, Number(list[x].trim().length));
                            insertListIfNotExists(tx, finalDateString.trim(), function(returnId)
                            {
                                listId = returnId;
                                insertListCourtDateIfNotExists(tx, listId, courtDateId);
                            });
                            x++;
                        }
                    }
                    else
                    {
                        var listId = 0;
                        insertListIfNotExists(tx, lists.trim(), function(returnId)
                        {
                            listId = returnId;
                            insertListCourtDateIfNotExists(tx, listId, courtDateId);
                        });
                    }
                }
                catch (err)
                {
                    var errMsg = err + "\nMethod: saveNoListingData(jquery) three" + "\nError Stack:" + err.stack;
                    insertErrorLogs(errMsg, function(id)
                    { //alert("Oops! Something went worng.")
                    });
                }
            });
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: saveNoListingData(transaction)";
            insertErrorLogs(errMsg, function(id)
            {
//                alert("Oops! Something went worng with db.")
            });
        }, successCB);
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: saveNoListingData(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
}

function isNumber(n)
    {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
   $(document).on('panelbeforeopen', '#rightMenulawyerNames', function (event) {
   try{
   addRightMainMenu();
          getPackageCost(function(isActive){
              if(Number(isActive)<=0){
               var $currActivePanel = '#' + $.mobile.activePage.attr('id') +'RightPanel';
                   var $lawyerRightPanel = $($currActivePanel);
                   var listItem= $lawyerRightPanel.find("li:contains('Clear All Case Data')");
                   if(listItem.length===0 || listItem === 'undefined'){
                        $lawyerRightPanel.append("<li data-theme='c'><a data-icon='false' href='#' onclick='showMessageToClearData()' data-transition='slide'><img src='images/icons/ic_action_recycle.png' class='imgShare ui-img-size ui-li-icon ui-corner-none' style='width:1.8em;'>Clear All Case Data</a> </li>").listview("refresh");
                       $( "#rightMenulawyerNames" ).trigger( "updatelayout" );
                    }
                }
                else{
                   var listItem= $($currActivePanel).find("li:contains('Clear All Case Data')");
                    if(listItem!=='undefined' && listItem.length>0){
                        listItem.remove();
                        $($currActivePanel).listview("refresh");
                        $( "#rightMenulawyerNames" ).trigger( "updatelayout" );
                    }
                }
            });
       }
    catch (err) {
           var errMsg = err + "\nMethod: #rightMenulawyerNames(jquery)" + "\nError Stack:" + err.stack;
            insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.")
            });
        }
    });
    //$(document).on('panelbeforeopen', '#rightMenulogPage', function (event) {
    //try{
    //addRightMainMenu();
    //        getPackageCost(function(isActive){
    //            if(Number(isActive)<=0){
    //            var $currActivePanel = '#' + $.mobile.activePage.attr('id') +'RightPanel';
    //                var $lawyerRightPanel = $($currActivePanel);
    //                var listItem= $lawyerRightPanel.find("li:contains('Clear All Case Data')");
    //                if(listItem.length===0 || listItem === 'undefined'){
    //                    $lawyerRightPanel.append("<li data-theme='c'><a data-icon='false' href='#' onclick='showMessageToClearData()' data-transition='slide'><img src='images/icons/ic_action_recycle.png' class='imgShare ui-img-size ui-li-icon ui-corner-none' style='width:1.8em;'>Clear All Case Data</a> </li>").listview("refresh");
    //                    $( "#rightMenulogPage" ).trigger( "updatelayout" );
    //                }
    //            }
    //            else{
    //                var listItem= $($currActivePanel).find("li:contains('Clear All Case Data')");
    //                if(listItem!=='undefined' && listItem.length>0){
    //                    listItem.remove();
    //                    $($currActivePanel).listview("refresh");
    //                    $( "#rightMenulogPage" ).trigger( "updatelayout" );
    //                }
    //            }
    //        });
    //   }
    //catch (err) {
    //        var errMsg = err + "\nMethod: #rightMenulogPage(jquery)" + "\nError Stack:" + err.stack;
    //        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.")
    //        });
    //    }
    //});
    //$(document).on('panelbeforeopen', '#rightMenulawyerInfo', function (event) {
    //try{
    //addRightMainMenu();
    //        getPackageCost(function(isActive){
    //            if(Number(isActive)<=0){
    //            var $currActivePanel = '#' + $.mobile.activePage.attr('id') +'RightPanel';
    //                var $lawyerRightPanel = $($currActivePanel);
    //                var listItem= $lawyerRightPanel.find("li:contains('Clear All Case Data')");
    //                if(listItem.length===0 || listItem === 'undefined'){
    //                    $lawyerRightPanel.append("<li data-theme='c'><a data-icon='false' href='#' onclick='showMessageToClearData()' data-transition='slide'><img src='images/icons/ic_action_recycle.png' class='imgShare ui-img-size ui-li-icon ui-corner-none' style='width:1.8em;'>Clear All Case Data</a> </li>").listview("refresh");
    //                    $( "#rightMenulawyerInfo" ).trigger( "updatelayout" );
    //                }
    //            }
    //            else{
    //                var listItem= $($currActivePanel).find("li:contains('Clear All Case Data')");
    //                if(listItem!=='undefined' && listItem.length>0){
    //                    listItem.remove();
    //                    $($currActivePanel).listview("refresh");
    //                    $( "#rightMenulawyerInfo" ).trigger( "updatelayout" );
    //                }
    //            }
    //        });
    //   }
    //catch (err) {
    //        var errMsg = err + "\nMethod: #rightMenulawyerInfo(jquery)" + "\nError Stack:" + err.stack;
    //        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.")
    //        });
    //    }
    //});
    //$(document).on('panelbeforeopen', '#rightMenucaseNumbers', function (event) {
    //try{
    //addRightMainMenu();
    //        getPackageCost(function(isActive){
    //            if(Number(isActive)<=0){
    //            var $currActivePanel = '#' + $.mobile.activePage.attr('id') +'RightPanel';
    //                var $lawyerRightPanel = $($currActivePanel);
    //                var listItem= $lawyerRightPanel.find("li:contains('Clear All Case Data')");
    //                if(listItem.length===0 || listItem === 'undefined'){
    //                    $lawyerRightPanel.append("<li data-theme='c'><a data-icon='false' href='#' onclick='showMessageToClearData()' data-transition='slide'><img src='images/icons/ic_action_recycle.png' class='imgShare ui-img-size ui-li-icon ui-corner-none' style='width:1.8em;'>Clear All Case Data</a> </li>").listview("refresh");
    //                    $( "#rightMenucaseNumbers" ).trigger( "updatelayout" );
    //                }
    //            }
    //            else{
    //                var listItem= $($currActivePanel).find("li:contains('Clear All Case Data')");
    //                if(listItem!=='undefined' && listItem.length>0){
    //                    listItem.remove();
    //                    $($currActivePanel).listview("refresh");
    //                    $( "#rightMenucaseNumbers" ).trigger( "updatelayout" );
    //                }
    //            }
    //        });
    //   }
    //catch (err) {
    //        var errMsg = err + "\nMethod: #rightMenucaseNumbers(jquery)" + "\nError Stack:" + err.stack;
    //        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.")
    //        });
    //    }
    //});
    //$(document).on('panelbeforeopen', '#rightMenuadvanceSearch', function (event) {
    //try{
    //addRightMainMenu();
    //        getPackageCost(function(isActive){
    //            if(Number(isActive)<=0){
    //            var $currActivePanel = '#' + $.mobile.activePage.attr('id') +'RightPanel';
    //                var $lawyerRightPanel = $($currActivePanel);
    //                var listItem= $lawyerRightPanel.find("li:contains('Clear All Case Data')");
    //                if(listItem.length===0 || listItem === 'undefined'){
    //                    $lawyerRightPanel.append("<li data-theme='c'><a data-icon='false' href='#' onclick='showMessageToClearData()' data-transition='slide'><img src='images/icons/ic_action_recycle.png' class='imgShare ui-img-size ui-li-icon ui-corner-none' style='width:1.8em;'>Clear All Case Data</a> </li>").listview("refresh");
    //                    $( "#rightMenuadvanceSearch" ).trigger( "updatelayout" );
    //                }
    //            }
    //            else{
    //                var listItem= $($currActivePanel).find("li:contains('Clear All Case Data')");
    //                if(listItem!=='undefined' && listItem.length>0){
    //                    listItem.remove();
    //                    $($currActivePanel).listview("refresh");
    //                    $( "#rightMenuadvanceSearch" ).trigger( "updatelayout" );
    //                }
    //            }
    //        });
    //   }
    //catch (err) {
    //        var errMsg = err + "\nMethod: #rightMenuadvanceSearch(jquery)" + "\nError Stack:" + err.stack;
    //        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.")
    //        });
    //    }
    //});
    //$(document).on('panelbeforeopen', '#rightMenucasePage', function (event) {
    //try{
    //        addRightMainMenu();
    //        getPackageCost(function(isActive){
    //            if(Number(isActive)<=0){
    //            var $currActivePanel = '#' + $.mobile.activePage.attr('id') +'RightPanel';
    //                var $lawyerRightPanel = $.mobile.activePage.find($currActivePanel);
    //                var listItem= $lawyerRightPanel.find("li:contains('Clear All Case Data')");
    //                if(listItem.length===0 || listItem === 'undefined'){
    //                    $lawyerRightPanel.append("<li data-theme='c'><a data-icon='false' href='#' onclick='showMessageToClearData()' data-transition='slide'><img src='images/icons/ic_action_recycle.png' class='imgShare ui-img-size ui-li-icon ui-corner-none' style='width:1.8em;'>Clear All Case Data</a> </li>").listview("refresh");
    //                    $( "#rightMenucasePage" ).trigger( "updatelayout" );
    //                }
    //            }
    //            else{
    //                var listItem= $($currActivePanel).find("li:contains('Clear All Case Data')");
    //                if(listItem!=='undefined' && listItem.length>0){
    //                    listItem.remove();
    //                    $($currActivePanel).listview("refresh");
    //                    $( "#rightMenucasePage" ).trigger( "updatelayout" );
    //                }
    //            }
    //        });
    //   }
    //catch (err) {
    //        var errMsg = err + "\nMethod: #rightMenucasePage(jquery)" + "\nError Stack:" + err.stack;
    //        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.")
    //        });
    //    }
    //});
    //$(document).on('panelbeforeopen', '#rightMenutermsandcondition', function (event) {
    //try{
    //        addRightMainMenu();
    //        getPackageCost(function(isActive){
    //            if(Number(isActive)<=0){
    //            var $currActivePanel = '#' + $.mobile.activePage.attr('id') +'RightPanel';
    //                var $lawyerRightPanel = $.mobile.activePage.find($currActivePanel);
    //                var listItem= $lawyerRightPanel.find("li:contains('Clear All Case Data')");
    //                if(listItem.length===0 || listItem === 'undefined'){
    //                    $lawyerRightPanel.append("<li data-theme='c'><a data-icon='false' href='#' onclick='showMessageToClearData()' data-transition='slide'><img src='images/icons/ic_action_recycle.png' class='imgShare ui-img-size ui-li-icon ui-corner-none' style='width:1.8em;'>Clear All Case Data</a> </li>").listview("refresh");
    //                    $( "#rightMenutermsandcondition" ).trigger( "updatelayout" );
    //                }
    //            }
    //            else{
    //                var listItem= $($currActivePanel).find("li:contains('Clear All Case Data')");
    //                if(listItem!=='undefined' && listItem.length>0){
    //                    listItem.remove();
    //                    $($currActivePanel).listview("refresh");
    //                    $( "#rightMenutermsandcondition" ).trigger( "updatelayout" );
    //                }
    //            }
    //        });
    //   }
    //catch (err) {
    //        var errMsg = err + "\nMethod: #rightMenutermsandcondition(jquery)" + "\nError Stack:" + err.stack;
    //        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.")
    //        });
    //    }
    //});
    //$(document).on('panelbeforeopen', '#rightMenushCrud', function (event) {
    //try{
    //        addRightMainMenu();
    //        getPackageCost(function(isActive){
    //            if(Number(isActive)<=0){
    //            var $currActivePanel = '#' + $.mobile.activePage.attr('id') +'RightPanel';
    //                var $lawyerRightPanel = $.mobile.activePage.find($currActivePanel);
    //                var listItem= $lawyerRightPanel.find("li:contains('Clear All Case Data')");
    //                if(listItem.length===0 || listItem === 'undefined'){
    //                    $lawyerRightPanel.append("<li data-theme='c'><a data-icon='false' href='#' onclick='showMessageToClearData()' data-transition='slide'><img src='images/icons/ic_action_recycle.png' class='imgShare ui-img-size ui-li-icon ui-corner-none' style='width:1.8em;'>Clear All Case Data</a> </li>").listview("refresh");
    //                    $( "#rightMenushCrud" ).trigger( "updatelayout" );
    //                }
    //            }
    //            else{
    //                var listItem= $($currActivePanel).find("li:contains('Clear All Case Data')");
    //                if(listItem!=='undefined' && listItem.length>0){
    //                    listItem.remove();
    //                    $($currActivePanel).listview("refresh");
    //                    $( "#rightMenushCrud" ).trigger( "updatelayout" );
    //                }
    //            }
    //        });
    //   }
    //catch (err) {
    //        var errMsg = err + "\nMethod: #rightMenushCrud(jquery)" + "\nError Stack:" + err.stack;
    //        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.")
    //        });
    //    }
    //});
    //$(document).on('panelbeforeopen', '#rightMenuallSHList', function (event) {
    //try{
    //        addRightMainMenu();
    //        getPackageCost(function(isActive){
    //            if(Number(isActive)<=0){
    //            var $currActivePanel = '#' + $.mobile.activePage.attr('id') +'RightPanel';
    //                var $lawyerRightPanel = $.mobile.activePage.find($currActivePanel);
    //                var listItem= $lawyerRightPanel.find("li:contains('Clear All Case Data')");
    //                if(listItem.length===0 || listItem === 'undefined'){
    //                    $lawyerRightPanel.append("<li data-theme='c'><a data-icon='false' href='#' onclick='showMessageToClearData()' data-transition='slide'><img src='images/icons/ic_action_recycle.png' class='imgShare ui-img-size ui-li-icon ui-corner-none' style='width:1.8em;'>Clear All Case Data</a> </li>").listview("refresh");
    //                    $( "#rightMenuallSHList" ).trigger( "updatelayout" );
    //                }
    //            }
    //            else{
    //                var listItem= $($currActivePanel).find("li:contains('Clear All Case Data')");
    //                if(listItem!=='undefined' && listItem.length>0){
    //                    listItem.remove();
    //                    $($currActivePanel).listview("refresh");
    //                    $( "#rightMenuallSHList" ).trigger( "updatelayout" );
    //                }
    //            }
    //        });
    //   }
    //catch (err) {
    //        var errMsg = err + "\nMethod: #rightMenuallSHList(jquery)" + "\nError Stack:" + err.stack;
    //        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.")
    //        });
    //    }
    //});
    //$(document).on('panelbeforeopen', '#rightMenushMap', function (event) {
    //try{
    //        addRightMainMenu();
    //        getPackageCost(function(isActive){
    //            if(Number(isActive)<=0){
    //            var $currActivePanel = '#' + $.mobile.activePage.attr('id') +'RightPanel';
    //                var $lawyerRightPanel = $.mobile.activePage.find($currActivePanel);
    //                var listItem= $lawyerRightPanel.find("li:contains('Clear All Case Data')");
    //                if(listItem.length===0 || listItem === 'undefined'){
    //                    $lawyerRightPanel.append("<li data-theme='c'><a data-icon='false' href='#' onclick='showMessageToClearData()' data-transition='slide'><img src='images/icons/ic_action_recycle.png' class='imgShare ui-img-size ui-li-icon ui-corner-none' style='width:1.8em;'>Clear All Case Data</a> </li>").listview("refresh");
    //                    $( "#rightMenushMap" ).trigger( "updatelayout" );
    //                }
    //            }
    //            else{
    //                var listItem= $($currActivePanel).find("li:contains('Clear All Case Data')");
    //                if(listItem!=='undefined' && listItem.length>0){
    //                    listItem.remove();
    //                    $($currActivePanel).listview("refresh");
    //                    $( "#rightMenushMap" ).trigger( "updatelayout" );
    //                }
    //            }
    //        });
    //   }
    //catch (err) {
    //        var errMsg = err + "\nMethod: #rightMenushMap(jquery)" + "\nError Stack:" + err.stack;
    //        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.")
    //        });
    //    }
    //});
    //$(document).on('panelbeforeopen', '#rightMenusocialAccount', function (event) {
    //try{
    //        addRightMainMenu();
    //        getPackageCost(function(isActive){
    //            if(Number(isActive)<=0){
    //            var $currActivePanel = '#' + $.mobile.activePage.attr('id') +'RightPanel';
    //                var $lawyerRightPanel = $.mobile.activePage.find($currActivePanel);
    //                var listItem= $lawyerRightPanel.find("li:contains('Clear All Case Data')");
    //                if(listItem.length===0 || listItem === 'undefined'){
    //                    $lawyerRightPanel.append("<li data-theme='c'><a data-icon='false' href='#' onclick='showMessageToClearData()' data-transition='slide'><img src='images/icons/ic_action_recycle.png' class='imgShare ui-img-size ui-li-icon ui-corner-none' style='width:1.8em;'>Clear All Case Data</a> </li>").listview("refresh");
    //                    $( "#rightMenusocialAccount" ).trigger( "updatelayout" );
    //                }
    //            }
    //            else{
    //                var listItem= $($currActivePanel).find("li:contains('Clear All Case Data')");
    //                if(listItem!=='undefined' && listItem.length>0){
    //                    listItem.remove();
    //                    $($currActivePanel).listview("refresh");
    //                    $( "#rightMenusocialAccount" ).trigger( "updatelayout" );
    //                }
    //            }
    //        });
    //   }
    //catch (err) {
    //        var errMsg = err + "\nMethod: #rightMenusocialAccount(jquery)" + "\nError Stack:" + err.stack;
    //        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.")
    //        });
    //    }
    //});
    //$(document).on('panelbeforeopen', '#rightMenunotificationList', function (event) {
    //try{
    //        addRightMainMenu();
    //        getPackageCost(function(isActive){
    //            if(Number(isActive)<=0){
    //            var $currActivePanel = '#' + $.mobile.activePage.attr('id') +'RightPanel';
    //                var $lawyerRightPanel = $.mobile.activePage.find($currActivePanel);
    //                var listItem= $lawyerRightPanel.find("li:contains('Clear All Case Data')");
    //                if(listItem.length===0 || listItem === 'undefined'){
    //                    $lawyerRightPanel.append("<li data-theme='c'><a data-icon='false' href='#' onclick='showMessageToClearData()' data-transition='slide'><img src='images/icons/ic_action_recycle.png' class='imgShare ui-img-size ui-li-icon ui-corner-none' style='width:1.8em;'>Clear All Case Data</a> </li>").listview("refresh");
    //                    $( "#rightMenunotificationList" ).trigger( "updatelayout" );
    //                }
    //            }
    //            else{
    //                var listItem= $($currActivePanel).find("li:contains('Clear All Case Data')");
    //                if(listItem!=='undefined' && listItem.length>0){
    //                    listItem.remove();
    //                    $($currActivePanel).listview("refresh");
    //                    $( "#rightMenunotificationList" ).trigger( "updatelayout" );
    //                }
    //            }
    //        });
    //   }
    //catch (err) {
    //        var errMsg = err + "\nMethod: #rightMenunotificationList(jquery)" + "\nError Stack:" + err.stack;
    //        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.")
    //        });
    //    }
    //});
    //$(document).on('panelbeforeopen', '#rightMenutermsandcondition,#rightMenulawyerInfo,#rightMenulogPage,#rightMenushCrud ,#rightMenuallSHList,#rightMenushMap,#rightMenusocialAccount,#rightMenunotificationList' , function(event) {
    // try
    // {
    // addRightMainMenu();
    // }catch(err)
    // {
    //  var errMsg = err + "\nMethod: #rightMenutermsandcondition(jquery)" + "\nError Stack:" + err.stack;
    //        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.")
    //        });
    // }
    //
    // });
    // function closeRightPanel(panel){
    //    $(panel).panel('close');
    // }
    //function showMessageToClearData(){
    //    var currActivePage = $.mobile.activePage.attr('id');
    //    if('casePage'===currActivePage){
    //       $.mobile.activePage.find("#rightMenucasePage").panel("close");
    //    }
    //    if('lawyerNames'===currActivePage){
    //        $( "#rightMenulawyerNames" ).panel("close");
    //    }
    //    if('advanceSearch'===currActivePage){
    //        $( "#rightMenuadvanceSearch" ).panel("close");
    //    }
    //    if('caseNumbers'===currActivePage){
    //        $( "#rightMenucaseNumbers" ).panel("close");
    //    }
    //    if('logPage'===currActivePage){
    //        $.mobile.activePage.find("#rightMenucasePage").panel("close");
    //    }
    //     if('termsandcondition'===currActivePage){
    //        $.mobile.activePage.find("#rightMenutermsandcondition").panel("close");
    //    }
    //     if('lawyerInfo'===currActivePage){
    //        $.mobile.activePage.find("#rightMenulawyerInfo").panel("close");
    //    }
    //     if('shCrud'===currActivePage){
    //        $.mobile.activePage.find("#rightMenushCrud").panel("close");
    //    }
    //    if('shCrud'===currActivePage){
    //        $.mobile.activePage.find("#rightMenushCrud").panel("close");
    //    }
    //        if('SHList'===currActivePage){
    //        $.mobile.activePage.find("#rightMenuallSHList").panel("close");
    //    }
    //            if('shMap'===currActivePage){
    //        $.mobile.activePage.find("#rightMenushMap").panel("close");
    //    }
    //                if('socialAccount'===currActivePage){
    //        $.mobile.activePage.find("#rightMenusocialAccount").panel("close");
    //    }
    //                    if('notificationList'===currActivePage){
    //        $.mobile.activePage.find("#rightMenunotificationList").panel("close");
    //    }
    //    setTimeout(function() {$.mobile.activePage.find("#confirmClear").popup("open");},10);
    //    navigator.notification.confirm(
    //        'You are the winner!',  // message
    //        onConfirm,              // callback to invoke with index of button pressed
    //        'Game Over',            // title
    //        'Restart,Exit'          // buttonLabels
    //    );
    //}

function onConfirm1(buttonIndex)
{
    alert('You selected button ' + buttonIndex);
}

function clearAllTables()
{
    db.transaction(function(tx)
    {
        tx.executeSql('DELETE FROM case_justice_table', [], successCB, errorCB);
        tx.executeSql('DELETE FROM case_table', [], successCB, errorCB);
        tx.executeSql('DELETE FROM court_date_table', [], successCB, errorCB);
        tx.executeSql('DELETE FROM justice_table', [], successCB, errorCB);
        tx.executeSql('DELETE FROM list_court_date_table', [], successCB, errorCB);
        tx.executeSql('DELETE FROM list_table', [], successCB, errorCB);
        tx.executeSql('DELETE FROM log_table', [], successCB, errorCB);
        tx.executeSql('DELETE FROM sqlite_sequence', [], successCB, errorCB);
        tx.executeSql('DELETE FROM new_update_logs', [], successCB, errorCB);
    }, errorCB, successCB);
    drawToast("All case data has been cleared.")
}

function putCalendarData()
{
    var searchData = {
        'startDate': Date.parseExact($('#test_default').val(), 'dd/MM/yyyy').toString('yyyy-MM-dd')
    };

    localStorage.setItem('searchData', JSON.stringify(searchData));


    var datett=Date.parseExact($('#test_default').val(), 'dd/MM/yyyy').toString('yyyy-MM-dd');

       datett =new Date(datett);
       var Con_Date=datett.setDate(datett.getDate()-1);
       Con_Date=new Date(Con_Date);

    localStorage.setItem('currentDate',Con_Date.toString('yyyy-MM-dd'));

    populateCasePage();
    return true;
}

function putSearchData()
{
    var searchData = {
        'searchString': $('#search').val()
    };
    localStorage.setItem('searchData', JSON.stringify(searchData));
    return true;
}

function isDate(txtDate)
{
    var reg = /^(0[1-9]|[12][0-9]|3[01])([\/])(0[1-9]|1[012])\2(\d{4})$/;
    return reg.test(txtDate);
}

function putAdvanceSearchData()
{
    try
    {
        var txt_start_date = $('#start_date_a');
        var txt_end_date = $('#end_date_a');
//        var txt_start_date = start_date[0]; // added by ssharma
//        var txt_end_date = end_date[0]; // added by ssharma
//        var startdate = start_date[1]; // added by ssharma
//        var enddate = end_date[1];// added by ssharma
        if (txt_start_date.val() == undefined && txt_end_date.val() == undefined)  // whole if condition
        {
            txt_start_date = $('#start_date');
            txt_end_date = $('#end_date');
        }
        if (!isDate(txt_start_date.val()))
        {
            alert('Start Date must be in DD/MM/YYYY format with leading zeros');
            return false;
        }
        if (!isDate(txt_end_date.val()))
        {
            alert('End Date must be in DD/MM/YYYY format with leading zeros');
            return false;
        }

//        if (!isDate(txt_start_date.value)) {
//            alert('Start Date must be in DD/MM/YYYY format with leading zeros');
//            return false;
//        }
//        if (!isDate(txt_end_date.value)) {
//            alert('End Date must be in DD/MM/YYYY format with leading zeros');
//            return false;
//        }

        //          var pattern = /^(3[01]|[12][0-9]|0[1-9])\/(1[0-2]|0[1-9])\/201[1-9]$/;
        //        if (!pattern.test($(txt_start_date).val())) {
        //            alert('Start Date must be in DD/MM/YYYY format with leading zeros');
        //            return false;
        //        }
        //        if (!pattern.test($(txt_end_date).val())) {
        //            alert('End Date must be in DD/MM/YYYY format with leading zeros');
        //            return false;
        //        }

        var startDate = Date.parseExact(txt_start_date.val(), 'dd/MM/yyyy').getDate();
        var startMonth = Date.parseExact(txt_start_date.val(), 'dd/MM/yyyy').getMonth();
        var startYear = Date.parseExact(txt_start_date.val(), 'dd/MM/yyyy').getFullYear();
//        var startDate = Date.parseExact(txt_start_date.value, 'dd/MM/yyyy').getDate();
//        var startMonth = Date.parseExact(txt_start_date.value, 'dd/MM/yyyy').getMonth();
//        var startYear = Date.parseExact(txt_start_date.value, 'dd/MM/yyyy').getFullYear();
        var startDateObj = new Date();
        startDateObj.setFullYear(startYear, startMonth, startDate);
        startDateObj.setHours(00, 00, 00, 00);
        var endDate = Date.parseExact(txt_end_date.val(), 'dd/MM/yyyy').getDate();
        var endMonth = Date.parseExact(txt_end_date.val(), 'dd/MM/yyyy').getMonth();
        var endYear = Date.parseExact(txt_end_date.val(), 'dd/MM/yyyy').getFullYear();
//        var endDate = Date.parseExact(txt_end_date.value, 'dd/MM/yyyy').getDate();
//        var endMonth = Date.parseExact(txt_end_date.value, 'dd/MM/yyyy').getMonth();
//        var endYear = Date.parseExact(txt_end_date.value, 'dd/MM/yyyy').getFullYear();
        var endDateObj = new Date();
        endDateObj.setFullYear(endYear, endMonth, endDate);
        endDateObj.setHours(00, 00, 00, 00);
        if (endDateObj - startDateObj < 0)
        {
            alert('Start Date Can Not Be Greater Then End Date.');
            return false;
        }
        var serverEpoch;
        if ($('#serverEpoch').html() !== '')
        {
            serverEpoch = $('#serverEpoch').html().split('from');
            if (serverEpoch.length > 0)
            {
                var sEpoch = serverEpoch[1].trim().toString();
                var sDate = Date.parseExact(sEpoch, 'yyyy-MM-dd').getDate();
                var sMonth = Date.parseExact(sEpoch, 'yyyy-MM-dd').getMonth();
                var sYear = Date.parseExact(sEpoch, 'yyyy-MM-dd').getFullYear();
                var sDateObj = new Date();
                sDateObj.setFullYear(sYear, sMonth, sDate);
                sDateObj.setHours(00, 00, 00, 00);
                if (((sDateObj - startDateObj) / (1000 * 60 * 60 * 24)) > 0)
                {
                    alert($('#serverEpoch').html());
                    return false;
                }
            }
        }
        db.transaction(function(tx)
        {
            tx.executeSql('select max(start_date) as max_start_date,min(start_date) as min_start_date,max(end_date) as max_end_date,min(end_date) as min_end_date from court_date_table', [], function(tx, result)
            {
                try
                {
                    var max_start_date = result.rows.item(0).max_start_date;
                    var min_start_date = result.rows.item(0).min_start_date;
                    var max_end_date = result.rows.item(0).max_end_date;
                    var min_end_date = result.rows.item(0).min_end_date;
                    if (min_start_date == null || max_start_date == null)
                    {
                        callSearchWebService();
                    }
                    else
                    {
                        if (min_start_date.trim().length != 0)
                        {
                            if (max_end_date.trim().length == 0)
                            {
                                max_end_date = max_start_date;
                            }
                            if (((Date.parseExact(txt_start_date.val(), 'dd/MM/yyyy') - Date.parseExact(min_start_date, 'yyyy-MM-dd')) >= 0) && ((Date.parseExact(txt_end_date.val(), 'dd/MM/yyyy') - Date.parseExact(max_end_date, 'yyyy-MM-dd')) <= 0))
//                            if (((Date.parseExact(txt_start_date.value, 'dd/MM/yyyy') - Date.parseExact(min_start_date, 'yyyy-MM-dd')) >= 0) && ((Date.parseExact(txt_end_date.value, 'dd/MM/yyyy') - Date.parseExact(max_end_date, 'yyyy-MM-dd')) <= 0))
                            {
                                var search1 = $('#search_string_Data')[0].children[0].children[1].children[0].value;   //search1[1].value
                                if (search1 === "")
                                    search1 = $('#search1').val();
                                var searchData = {
                                    'searchString': search1,
                                    'startDate': Date.parseExact(txt_start_date.val(), 'dd/MM/yyyy').toString('yyyy-MM-dd'),
//                                    'startDate': Date.parseExact(txt_start_date.value, 'dd/MM/yyyy').toString('yyyy-MM-dd'),
                                    'endDate': Date.parseExact(txt_end_date.val(), 'dd/MM/yyyy').toString('yyyy-MM-dd')
//                                    'endDate': Date.parseExact(txt_end_date.value, 'dd/MM/yyyy').toString('yyyy-MM-dd')
                                };
                                localStorage.setItem('searchData', JSON.stringify(searchData));
                                populateCasePage();
                                $.mobile.back();
                            }
                            else
                            {
                                callSearchWebService();
                            }
                        }
                    }
                }
                catch (err)
                {
                    var errMsg = err + "\nMethod: putAdvanceSearchData(jquery)" + "\nError Stack:" + err.stack;
//                    alert(JSON.stringify(errMsg));
                    insertErrorLogs(errMsg, function(id)
                    {
//                        alert("Oops! Something went worng.")
                    });
                }
            }, function(err)
            {
                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: putAdvanceSearchData(executeSql)";
//                alert(JSON.stringify(errMsg));
                insertErrorLogs(errMsg, function(id)
                {
                    alert("Oops! Something went worng with db.")
                });
            });
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: putAdvanceSearchData(transaction)";
//            alert(JSON.stringify(errMsg));
            insertErrorLogs(errMsg, function(id)
            {
                alert("Oops! Something went worng with db.")
            });
        }, successCB);
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: putAdvanceSearchData12(jquery)" + "\nError Stack:" + err.stack;
//        alert(JSON.stringify(errMsg));
        insertErrorLogs(errMsg, function(id)
        {
            alert("Oops! Something went worng.")
        });
    }
}

function callSearchWebService()
{
    //setTimeout(function Asif(){
    //alert('called webService Function');
    //for(var i=0;i<=10000;i++){
    //updateloding(i,10000);
    //console.log(i);
    //}
    //},10000);
    //var asif=setTimeout(function Asif(){searchCases(Date.parseExact($('#start_date').val(), 'dd/MM/yyyy').toString('yyyy-MM-dd'), Date.parseExact($('#end_date').val(), 'dd/MM/yyyy').toString('yyyy-MM-dd'));clearInterval(asif); },5000);
    searchCases(Date.parseExact($('#start_date_a').val(), 'dd/MM/yyyy').toString('yyyy-MM-dd'), Date.parseExact($('#end_date_a').val(), 'dd/MM/yyyy').toString('yyyy-MM-dd'));
    // launchPiWebWorker();
}

function searchCases(startDate, endDate)
{
    try
    {
        var requestTime = new Date().getTime();
        db.transaction(function(tx)
        {
            tx.executeSql('SELECT * FROM user_settings where user_id is not null and guid is not null', [], function(tx, result)
            {
                try
                {
                    var len = result.rows.length;
                    if (len > 0)
                    {
                        var user_id = result.rows.item(0).user_id;
                        var guid = result.rows.item(0).user_id;
                        var url = MR_URL;
                        var webMethod = protocal + url + '/WebService_andriod.asmx/getHistory_Cases';
                        $.ajax(
                        {
                            type: "POST",
                            url: webMethod,
                            data: JSON.stringify(
                            {
                                lawyer_id: user_id,
                                Start_date: startDate,
                                End_date: endDate
                            }),
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function(msg)
                            {
                                isUpdated = false;
                                var startDate = $('#start_date_a').val();
                                var endDate = $('#end_date_a').val();
                                parseAndSaveData(msg.d, function(data)
                                {
                                    var responseTime = new Date().getTime();
                                    updateloding(data, recordCount);
                                    if (recordCount == data)
                                    {
                                        recordCount = 0;
                                        addCount = 0;
                                        var searchData = {
                                            'searchString': $('#search1').val(),
                                            'startDate': Date.parseExact(startDate, 'dd/MM/yyyy').toString('yyyy-MM-dd'),
                                            'endDate': Date.parseExact(endDate, 'dd/MM/yyyy').toString('yyyy-MM-dd')
                                        };
                                        localStorage.setItem('searchData', JSON.stringify(searchData));
                                        $.mobile.loading('hide');
                                        populateCasePage();
                                        $.mobile.back();
                                    }
                                });
                            },
                            error: function(XMLHttpRequest, textStatus, errorThrown)
                            {
                                $.mobile.loading('hide');
                                var responseTime = new Date().getTime();
                                var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: searchCases(ajax call)";
                                errMsg = errMsg + "\n App Version : " + version;
                                insertLog(requestTime, responseTime, errMsg, function(returnId) {});
                                alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
                                calledBeforeSendAnyRequest(function(isConnected)
                                {
                                    if (isConnected)
                                    {}
                                });
                            },
                            beforeSend: function()
                            {
                                $.mobile.loading('show',
                                {
                                    text: 'Loading...',
                                    textVisible: true,
                                    theme: 'b',
                                    textonly: false
                                });
                            },
                            complete: function()
                            { /*$.mobile.hidePageLoadingMsg();*/ }
                        });
                    }
                    else
                    {
                        drawToast("Register your email to update");
                    }
                }
                catch (err)
                {
                    var errMsg = err + "\nMethod: searchCases(jquery) tx1" + "\nError Stack:" + err.stack;
                    insertErrorLogs(errMsg, function(id)
                    {
                        alert("Oops! Something went worng.")
                    });
                }
            }, function(err)
            {
                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: searchCases(executeSql)";
                insertErrorLogs(errMsg, function(id)
                {
//                    alert("Oops! Something went worng with db.")
                });
            });
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: searchCases(transction)";
            insertErrorLogs(errMsg, function(id)
            {
//                alert("Oops! Something went worng with db.")
            });
        }, successCB);
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: searchCases(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
}

function goToPreviousDate()
{
    var currentDate = localStorage.getItem("currentDate");
    var dateToSearch = Date.parse(currentDate);
    dateToSearch.add(-7).days();
    localStorage.setItem('currentDate', dateToSearch.toString('yyyy-MM-dd'));
    showResultFromDate(dateToSearch);
}

function goToNextDate()
{
    var currentDate = localStorage.getItem("currentDate");
    var dateToSearch = Date.parse(currentDate);
    dateToSearch.add(7).days();
    localStorage.setItem('currentDate', dateToSearch.toString('yyyy-MM-dd'));
    showResultFromDate(dateToSearch);
}

function showResultFromDate(dateToShow)
{
    try
    {
        var date = [];
        var count = [];
        var dataList = $("#dataList");
        dataList.empty();
        db.transaction(function(tx)
        {
            var i = 0;
            while (i < 7)
            {
                date.push(dateToShow.add(1).days().toString('yyyy-MM-dd'));
                tx.executeSql('select count(case_table.case_id) as case_count from list_court_date_table ' + ' join court_date_table on court_date_table.court_date_id=list_court_date_table.court_date_id ' + ' join case_table on case_table.list_court_date_id=list_court_date_table.list_court_date_id ' + ' where CASE WHEN end_date="" THEN start_date=? ELSE ? BETWEEN start_date AND end_date END ', [date[i], date[i]], function(tx, result)
                {
                    count.push(result.rows.item(0).case_count);
                }, function(err)
                {
                    var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: showResultFromDate(executeSql)";
                    insertErrorLogs(errMsg, function(id)
                    {
//                        alert("Oops! Something went worng with db.")
                    });
                });
                i++;
            }
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: showResultFromDate(transaction)";
            insertErrorLogs(errMsg, function(id)
            {
//                alert("Oops! Something went worng with db.")
            });
        }, function()
        {
            var data = '';
            var index = 0;
            while (index < date.length)
            {
                data += '<li><br/><a href="#" onclick="return putDateToSearch(\'' + date[index] + '\')">' + Date.parseExact(date[index], 'yyyy-MM-dd').toString('ddd, d MMM yyyy') + '<span class="ui-li-count">' + count[index] + ' Case</span></a><br/></li>';
                index++;
            }
            dataList.append(data).listview("refresh");
        });
        return false;
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: showResultFromDate(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
}

function putDateToSearch(dateToShow)
{
    var searchData = {
        'startDate': dateToShow.toString('yyyy-MM-dd')
    };
    localStorage.setItem('searchData', JSON.stringify(searchData));
    return true;
}
$(document).on('panelbeforeopen', '#leftpanel3', function(event)
{
    var todayDate = Date.today().add(-1).days();
    localStorage.setItem('currentDate', todayDate.toString('yyyy-MM-dd'));
    showResultFromDate(todayDate);
});

function putSearchDataFromCasePage()
{
    var searchData = {
        'searchString': $('#searchStringCasePage').val()
    };
    localStorage.setItem('searchData', JSON.stringify(searchData));
    populateCasePage();
}
$(document).on('popupafteropen', '#popupSearchCasePage', function(event, ui)
{
    $('#searchStringCasePage').focus();
});
$(document).on('popupafterclose', '#popupSearchCasePage', function(event, ui)
{
    var searchStringCasePage = $('#searchStringCasePage');
    searchStringCasePage.val("");
    searchStringCasePage.trigger("keyup");
});
$(document).on('panelbeforeopen', '#casePageLeftPanel', function(event)
{
    try
    {
//        if (!$('#casePageLeftPanel').hasClass('casePageFixedLeftPanel'))
//        {
//            $('#casePageLeftPanel').addClass('casePageFixedLeftPanel')
//        }
//        var todayDate = Date.today().add(-1).days();
//        localStorage.setItem('currentDate', todayDate.toString('yyyy-MM-dd'));
//        showResultFromDateCasepage(todayDate);
//        $(".nav-glyphish-example").find('.ui-btn').removeClass('.ui-btn-active');


        if (!$('#casePageLeftPanel').hasClass('casePageFixedLeftPanel'))
        {
            $('#casePageLeftPanel').addClass('casePageFixedLeftPanel')
        }

        var todayDate=localStorage.getItem('currentDate');
        if(todayDate==null){
         todayDate = Date.today().add(-1).days();
         localStorage.setItem('currentDate', todayDate.toString('yyyy-MM-dd'));
        }
        else{
        todayDate = Date.parse(todayDate);
        localStorage.setItem('currentDate', todayDate.toString('yyyy-MM-dd'));
        }


        showResultFromDateCasepage(todayDate);
        $(".nav-glyphish-example").find('.ui-btn').removeClass('.ui-btn-active');

    }
    catch (err)
    {
        var errMsg = err + "\nMethod: #casePageLeftPanel(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
});
$(document).on('panelclose', '#casePageLeftPanel', function(event)
{
    if ($('#casePageLeftPanel').hasClass('casePageFixedLeftPanel'))
    {
        $('#casePageLeftPanel').removeClass('casePageFixedLeftPanel')
    }
});

function showResultFromDateCasepage(dateToShow)
{
    try
    {
        var startDate = dateToShow.add(1).days().toString('yyyy-MM-dd');
        var endDate = dateToShow.add(6).days().toString('yyyy-MM-dd');
        var dataListCasepage = $("#dataListCasepage");
        dataListCasepage.empty();
        var data = '';
        db.transaction(function(tx)
        {
            var query = "select start_date, end_date, (list_table.list_name || ' (' || count(DISTINCT case_table.case_id) || ')') as listDisplay , " + "count(DISTINCT case_table.case_id) as case_count,is_updated from court_date_table join list_court_date_table on " + "list_court_date_table.court_date_id=court_date_table.court_date_id join list_table on list_court_date_table.list_id=list_table.list_id left join " + "case_table on case_table.list_court_date_id=list_court_date_table.list_court_date_id left join case_justice_table on " + "case_table.case_id=case_justice_table.case_id left join justice_table on justice_table.justice_id=case_justice_table.justice_id   where 1=1 ";
            if (typeof startDate !== 'undefined')
            {
                if (typeof endDate !== 'undefined')
                {
                    query += "And (CASE WHEN end_date='' THEN start_date BETWEEN '" + startDate + "' and '" + endDate + "' " + "ELSE ((start_date BETWEEN '" + startDate + "' AND '" + endDate + "' OR end_date BETWEEN '" + startDate + "' AND '" + endDate + "' " + ") or ('" + startDate + "' BETWEEN start_date AND end_date OR '" + endDate + "' BETWEEN start_date AND end_date)) END)";
                }
                else
                {
                    query += " And (CASE WHEN end_date='' THEN start_date='" + startDate + "' ELSE '" + startDate + "' BETWEEN start_date AND end_date END) ";
                }
            }
            query += "  group by start_date, list_table.list_name order by is_updated DESC, case_table.list_court_date_id, start_date;";
            tx.executeSql(query, [], function(tx, result)
            {
                try
                {
                    var resultLen = result.rows.length;
                    var dt_current = '';
                    var i = 0;
                    var caseCount = 0;
                    var casesInfo = '';
                    var countLists = 0;
                    for (dt_current = startDate; Date.parse(dt_current) <= Date.parse(endDate); dt_current = new Date(dt_current).add(1).days().toString('yyyy-MM-dd'))
                    {
                        caseCount = 0;
                        casesInfo = '<br><span class="ui-li-contnr">';
                        // casesInfo = '<br><p class="ui-li-contnr">';
                        countLists = 0;
                        for (var j = 0; j < resultLen; j++)
                        {
                            if (result.rows.item(j).end_date === '')
                            {
                                if (result.rows.item(j).start_date === dt_current.toString('yyyy-MM-dd'))
                                {
                                    var firstSplit = result.rows.item(j).listDisplay.split('(');
                                    var secondSplit;
                                    var finalString = '';
                                    if (firstSplit.length > 0)
                                    {
                                        secondSplit = firstSplit[0].split(' ');
                                    }
                                    var len = secondSplit.length;
                                    var i = 0;
                                    while (i < len)
                                    {
                                        finalString = finalString + secondSplit[i].substring(0, 1);
                                        i++;
                                    }
                                    finalString = finalString + '(' + firstSplit[1];
                                    if (countLists === 4)
                                    {
                                        casesInfo = casesInfo + '</br>';
                                    }
                                    if (result.rows.item(j).is_updated.toString() === '1')
                                    {
                                        casesInfo = casesInfo + '<span class="ui-li-contnr-inner-new">' + finalString + '</span>';
                                    }
                                    else
                                    {
                                        casesInfo = casesInfo + '<span class="ui-li-contnr-inner">' + finalString + '</span>';
                                    }
                                    caseCount = caseCount + parseInt(result.rows.item(j).case_count)
                                    countLists++;
                                }
                            }
                            else
                            {
                                if (Date.parse(dt_current) >= Date.parse(result.rows.item(j).start_date) && Date.parse(dt_current) <= Date.parse(result.rows.item(j).end_date))
                                {
                                    var firstSplit = result.rows.item(j).listDisplay.split('(');
                                    var secondSplit;
                                    var finalString = '';
                                    if (firstSplit.length > 0)
                                    {
                                        secondSplit = firstSplit[0].split(' ');
                                    }
                                    var len = secondSplit.length;
                                    var i = 0;
                                    while (i < len)
                                    {
                                        finalString = finalString + secondSplit[i].substring(0, 1);
                                        i++;
                                    }
                                    finalString = finalString + '(' + firstSplit[1];
                                    if (countLists === 4)
                                    {
                                        casesInfo = casesInfo + '</br>';
                                    }
                                    if (result.rows.item(j).is_updated.toString() === '1')
                                    {
                                        casesInfo = casesInfo + '<span class="ui-li-contnr-inner-new">' + finalString + '</span>';
                                    }
                                    else
                                    {
                                        casesInfo = casesInfo + '<span class="ui-li-contnr-inner">' + finalString + '</span>';
                                    }
                                    caseCount = caseCount + parseInt(result.rows.item(j).case_count)
                                    countLists++;
                                }
                            }
                        }
                        casesInfo = casesInfo + '</span>';
                       // casesInfo = casesInfo + '</p>';
                        if (countLists > 0)
                        {
                            data = data + '<li><a href="#" onclick="return putDateToSearchCasepage(\'' + Date.parseExact(dt_current, 'yyyy-MM-dd').toString('yyyy-MM-dd') + '\')" class="found-ui-nor-cal-padding ui-nor-cal-padding-max">' + Date.parseExact(dt_current, 'yyyy-MM-dd').toString('ddd, d MMM yyyy') + '<span class="ui-li-count">' + caseCount + ' Case</span>' + casesInfo + '</a></li>';
                            //                                                                               data = data + '<li><a href="#" onclick="return putDateToSearchCasepage(\'' + Date.parseExact(dt_current, 'yyyy-MM-dd').toString('yyyy-MM-dd') + '\')" class="found-ui-cal-padding ui-cal-padding-max">' +
                            //                                       Date.parseExact(dt_current, 'yyyy-MM-dd').toString('ddd, d MMM yyyy') + '<span class="ui-li-count">' + caseCount + ' Case</span>' + casesInfo + '</a></li>';
                            //                                        data = data + '<li><a href="#" onclick="return putDateToSearchCasepage(\'' + Date.parseExact(dt_current, 'yyyy-MM-dd').toString('yyyy-MM-dd') + '\')"  class="found-ui-nor-cal-padding ui-nor-cal-padding-max">' +
                            //                                       Date.parseExact(dt_current, 'yyyy-MM-dd').toString('ddd, d MMM yyyy') + '<span class="ui-li-count">' + caseCount + ' Case</span>' + casesInfo + '</a></li>';
                        }
                        else
                        {
                            data = data + '<li><a href="#" onclick="return putDateToSearchCasepage(\'' + Date.parseExact(dt_current, 'yyyy-MM-dd').toString('yyyy-MM-dd') + '\')"  class="found-ui-nor-cal-padding ui-nor-cal-padding-max">' + Date.parseExact(dt_current, 'yyyy-MM-dd').toString('ddd, d MMM yyyy') + '<span class="ui-li-count">' + caseCount + ' Case</span>' + casesInfo + '</a></li>';
                        }
                    }
                }
                catch (err)
                {
                    var errMsg = err + "\nMethod: putDateToSearchCasepage(jquery)" + "\nError Stack:" + err.stack;
                    insertErrorLogs(errMsg, function(id)
                    { //alert("Oops! Something went worng.")
                    });
                }
            }, errorCB);
        }, errorCB, function()
        {
            dataListCasepage.append(data).listview("refresh");
            $("#casePageLeftPanel").trigger("updatelayout");
            makeLeftPanelRepnsive();
        });

    calledBeforeSendAnyRequest(function(isConnected)
    {
        if (isConnected == true && GA_on_off == "true")
        {
            GA.sendEvent('Calender', 'showResultFromDateCasepage(dateToShow)', 'Show Calender Panel', 1, function() {}, errorCallback);
        }
    });


        return false;

    }
    catch (err)
    {
        var errMsg = err + "\nMethod: putDateToSearchCasepage12(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
}

function makeLeftPanelRepnsive()
{
    var h = $(window).height();
    if (h <= maxLeftPanelHeight)
    {
        $('.found-ui-cal-padding').removeClass('ui-cal-padding-max');
        $('.found-ui-cal-padding').addClass('ui-cal-padding-min');
        $('.found-ui-nor-cal-padding').removeClass('ui-nor-cal-padding-max');
        $('.found-ui-nor-cal-padding').addClass('ui-nor-cal-padding-min');
        $("#casePageLeftPanel").trigger("updatelayout");
    }
    else
    {
        $('.found-ui-cal-padding').addClass('ui-cal-padding-max');
        $('.found-ui-cal-padding').removeClass('ui-cal-padding-min');
        $('.found-ui-nor-cal-padding').addClass('ui-nor-cal-padding-max');
        $('.found-ui-nor-cal-padding').removeClass('ui-nor-cal-padding-min');
        $("#casePageLeftPanel").trigger("updatelayout");
    }
}

function goToPreviousDateCasepage()
{
    var currentDate = localStorage.getItem("currentDate");
    var dateToSearch = Date.parse(currentDate);
    dateToSearch.add(-7).days();
    localStorage.setItem('currentDate', dateToSearch.toString('yyyy-MM-dd'));
    showResultFromDateCasepage(dateToSearch);
}

function goToNextDateCasepage()
{
    var currentDate = localStorage.getItem("currentDate");
    var dateToSearch = Date.parse(currentDate);
    dateToSearch.add(7).days();
    localStorage.setItem('currentDate', dateToSearch.toString('yyyy-MM-dd'));
    showResultFromDateCasepage(dateToSearch);
}

function putDateToSearchCasepage(dateToShow)
{
    $('#casePageLeftPanel').panel("close");
    var searchData = {
        'startDate': dateToShow.toString('yyyy-MM-dd')
    };
    localStorage.setItem('searchData', JSON.stringify(searchData));
    populateCasePage();
    var PG = JSON.parse(localStorage.getItem("prevpagedetail"));
    if (PG != null)
    {
        Prevpageupdate = PG.prevpage;
        var prevpagedetail = {
            'prevpage': 'Null'
        };
        localStorage.setItem('prevpagedetail', JSON.stringify(prevpagedetail));
        if (Prevpageupdate != "allSHList")
        {
            $("#btnBackIndex").parent().hide();
            $("#Backbtndiv").attr('class', 'backdiv')
        }
        else
        {
            $("#btnBackIndex").parent().show();
            $("#Backbtndiv").attr('class', 'backdivO')
        }
    }
    else
    {
        $("#btnBackIndex").parent().hide();
        $("#Backbtndiv").attr('class', 'backdiv')
    }

    calledBeforeSendAnyRequest(function(isConnected)
    {
        if (isConnected == true && GA_on_off == "true")
        {
            GA.sendEvent('Calender', 'putDateToSearchCasepage(dateToShow)', 'Click On Calender Date', 1, function() {}, errorCallback);
        }
    });
}

function checkConnection()
{
    var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
        isConnected = false;
        alert("No internet connection.");
    }
    else
    {
        isConnected = true;
    }
}
$(function()
{
    $(window).scroll(function()
    {
        if ($.mobile.activePage.is('#casePage'))
        {
            if ($(this).scrollTop() > 100)
            {
                $('#toTop').fadeIn();
            }
            else
            {
                $('#toTop').fadeOut();
            }
        }
        else
        {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function()
    {
        $('body,html').animate(
        {
            scrollTop: 0
        }, 500);
    });
});
$(document).on("pagebeforehide", "#casePage", function()
{
    $('#toTop').fadeOut();
});

function register_device()
    {
        try
        {
            if (isConnected)
            {
                try
                {
                //alert(device.platform);
                    //if (device.platform == 'android' || device.platform == 'Android')
                   // {
                    //    window.plugins.GCM.register("592100635992", "GCM_Event", GCM_Success, GCM_Fail);
                   // }
                    if (device.platform == 'android' || device.platform == 'Android' || device.platform == 'ANDROID') {

                                                              var push = PushNotification.init({

                                                                  android: {},
                                                                  browser: {
                                                                      pushServiceURL: 'https://push.api.phonegap.com/v1/push'
                                                                  },
                                                                  ios: {
                                                                      alert: "true",
                                                                      badge: true,
                                                                      sound: 'false'
                                                                  },
                                                                  windows: {}
                                                              });

                                                              push.on('registration', function (data) {
                                                                  console.log("registration event " + JSON.stringify(data));
                                                             //alert("registration event " + JSON.stringify(data));
                                                                  gApp.gcmregid = data.registrationId;
                                                                  gApp.isNewID = true;
                                                                  if (gApp.gcmregid.length > 0) {
                                                                      registrationIdReceived = "DONE";
                                                                      doRegistrationProcess();
                                                                  }
                                                              });

                                                              push.on('notification', function (data) {
                                                                  console.log("notification event " + JSON.stringify(data));
                                                                  var breakMsg = data.message.split(' ');
                                                                  var time = breakMsg[1].split(':');
                                                                  var msgTime = time[1].toString().trim();
                                                                  silentUpdate(function (isUpdated) {
                                                                      if (isUpdated) {
                                                                          openCasePage();
                                                                          drawToast("Case List Updated");
                                                                          putDateToSearchCasepage(Date.parseExact(msgTime, 'yyyy-MM-dd').toString('yyyy-MM-dd'));
                                                                      }
                                                                      else {
                                                                          drawToast("No New Updates");
                                                                          putDateToSearchCasepage(Date.parseExact(msgTime, 'yyyy-MM-dd').toString('yyyy-MM-dd'));
                                                                      }
                                                                  });

                                                                  push.finish(function () {
                                                                      console.log('finish successfully called');
                                                                  });
                                                              });

                                                              push.on('error', function (e) {
                                                                  console.log("push error");
                                                              });
                                                          }
                    if (device.platform == 'iOS' || device.platform == 'IOS' || device.platform == 'ios') {
                        FirebasePlugin.getToken(function(fcmToken) {
                            console.log(fcmToken);
                            //alert("inapp"+ fcmToken);
                            gApp.gcmregid = fcmToken
                            gApp.isNewID = true;
                            if (gApp.gcmregid.length > 0) {
                                registrationIdReceived = "DONE";
                                doRegistrationProcess();
                            }
                        }, function(error) {
                            console.error(error);
                        });

                        FirebasePlugin.onMessageReceived(function(data) {
                            // Handle the notification here
                            console.log("notification event " + JSON.stringify(data));
                            sendToken("notification event " + JSON.stringify(data));
                            sendToken("notification event " + JSON.stringify(data));
                            var breakMsg = data.message.split(' ');
                            var time = breakMsg[1].split(':');
                            var msgTime = time[1].toString().trim();
                            silentUpdate(function (isUpdated) {
                                if (isUpdated) {
                                    openCasePage();
                                    drawToast("Case List Updated");
                                    putDateToSearchCasepage(Date.parseExact(msgTime, 'yyyy-MM-dd').toString('yyyy-MM-dd'));
                                }
                                else {
                                    drawToast("No New Updates");
                                    putDateToSearchCasepage(Date.parseExact(msgTime, 'yyyy-MM-dd').toString('yyyy-MM-dd'));
                                }
                            });
                            onNotificationAPN(data);
                        });
                    }
                }
                catch (err)
                {
                    var errMsg = err + "\nMethod: register_device(jquery)" + "\nError Stack:" + err.stack;
                    //alert(errMsg);
                    insertErrorLogs(errMsg, function(id)
                    { //alert("Oops! Something went worng.")
                    });
                }
            }
        }
        catch (err)
        {
            var errMsg = err + "\nMethod: register_device(jquery)" + "\nError Stack:" + err.stack;
            insertErrorLogs(errMsg, function(id)
            { //alert("Oops! Something went worng.")
            });
        }
    }
    // result contains any message sent from the plugin call

function successHandler(result)
    {
        alert('result = ' + result);
    }
    // result contains any error description text returned from the plugin call

function errorHandler(error)
    {
        // alert('Apple error = ' + error);
    }
    //function tokenHandler (event e) {

function tokenHandler(result)
    {
        // Your iOS push server needs to know the token before it can push to this device
        // here is where you might want to send it the token for later use.
        //alert('Apple device token = ' + result);
        var lawyerD = JSON.parse(localStorage.getItem("lawyerID"));
        var lawyerId = lawyerD.lawyerid;
        CheckPrevious_reID_In_Cloud(lawyerId);
    }
    //ecb - event callback that gets called when your device receives a notification
    // iOS

function onNotificationAPN(event)
{
    if (event.alert)
    {
        navigator.notification.alert(event.alert);
    }
    if (event.sound)
    {
        var snd = new Media(event.sound);
        snd.play();
    }
    if (event.badge)
    {
        pushNotification.setApplicationIconBadgeNumber(successHandler, errorHandler, event.badge);
    }
}

function CheckPrevious_reID_In_Cloud(lawyer_id)
{
    calledBeforeSendAnyRequest(function(isConnected)
    {
        if (isConnected == true)
        {
            var url = MR_URL;
            var port = '8111';
            var requestTime = new Date().getTime();
            var webMethod = protocal + url + '/WebService_andriod.asmx/CheckAPNS_ID';
            $.ajax(
            {
                type: "POST",
                url: webMethod,
                data: JSON.stringify(lawyer_id),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function(msg)
                {
                    if (msg.d == false)
                    {
                        gApp.isNewID = false;
                        registrationIdReceived = "DONE";
                        doRegistrationProcess();
                        $.mobile.loading('hide');
                    }
                    else
                    {
                        gApp.isNewID = true;
                        registrationIdReceived = "DONE";
                        doRegistrationProcess();
                        $.mobile.loading('hide');
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown)
                {
                    $.mobile.loading('hide');
                    var responseTime = new Date().getTime();
                    var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: CheckPrevious_reID_In_Cloud(ajax call)";
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
        else
        {
            gApp.isNewID = false;
            registrationIdReceived = "DONE";
            doRegistrationProcess();
        }
    }, errorCB)
}

function doRegistrationProcess()
{
//alert("in doRegistrationProcess " + deviceInfo );
    try
    {
        if (settingsSaved == null || registrationIdReceived == null)
        {
            return;
        }
        if (gApp.isNewID)
        {
            db.transaction(function(tx)
            {
                tx.executeSql('SELECT * FROM user_settings where user_id is not null and guid is not null', [], function(tx, result)
                {
                    var len = result.rows.length;
                    if (len == 0)
                    {
                   // alert("in  len == 0 " + deviceInfo );
                        register_user(gApp.gcmregid);
                    }
                    else
                    { //alert("in  len != 0 " + deviceInfo );
                        updateRegistrationIdOnServer(gApp.gcmregid);
                    }
                }, function(err)
                {
                    var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: when(NewRegId)(executeSql)";
                    insertErrorLogs(errMsg, function(id)
                    {
//                        alert("Oops! Something went worng with db.")
                    });
                });
            }, function(err)
            {
                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: when(NewRegId)(executeSql)";
                insertErrorLogs(errMsg, function(id)
                {
//                    alert("Oops! Something went worng with db.")
                });
            }, successCB);
        }
        else
        {
            updateRegistrationIdOnServer(gApp.gcmregid);
            db.transaction(function(tx)
            {
                tx.executeSql('SELECT * FROM user_settings where user_id is not null and guid is not null', [], function(tx, result)
                {
                    var len = result.rows.length;
                    if (len == 0)
                    {
                        register_user(gApp.gcmregid);
                    }
                    else
                    {
                        openCasePage();
                        silentUpdate(function(isUpdated)
                        {
                            if (isUpdated)
                            {
                                openCasePage();
                                drawToast("Case List Updated");
                            }
                            else
                            {
                                drawToast("No New Updates");
                            }
                        });
                    }
                }, function(err)
                {
                    var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: when(OldRegId)(executeSql)";
                    insertErrorLogs(errMsg, function(id)
                    {
//                        alert("Oops! Something went worng with db.")
                    });
                });
            }, function(err)
            {
                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: when(OldRegId)(executeSql)";
                insertErrorLogs(errMsg, function(id)
                {
//                    alert("Oops! Something went worng with db.")
                });
            }, successCB);
        }
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: when(OldRegId)(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        {
            alert("Oops! Something went worng.")
        });
    }
}

function updateSettings(scsUserName, callBack)
{
    db.transaction(function(tx)
    {
        tx.executeSql('SELECT * FROM user_settings;', [], function(tx, result)
        {
            var len = result.rows.length;
            if (len > 0)
            {
                tx.executeSql('UPDATE user_settings SET email_id=?;', [scsUserName], function(tx, result)
                {
                    if (typeof callBack !== 'undefined')
                    {
                        callBack('DONE');
                    }
                }, function(err)
                {
                    alert("Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod:updateSettings(executeSql) tx4");
                });
            }
            else
            {
                tx.executeSql('INSERT INTO user_settings(email_id) VALUES(?);', [scsUserName], function(tx, result)
                {
                    if (typeof callBack !== 'undefined')
                    {
                        callBack('DONE');
                    }
                }, function(err)
                {
                    alert("Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod:updateSettings(executeSql) tx3");
                });
            }
        }, function(err)
        {
            alert("Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: updateSettings(executeSql) tx2");
        });
    }, function(err)
    {
        alert("Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: updateSettings(executeSql) tx1");
    }, successCB);
}

function insertLawyerName(lawyerName, callBack)
{
    db.transaction(function(tx)
    {
        tx.executeSql('SELECT * FROM user_settings;', [], function(tx, result)
        {
            var len = result.rows.length;
            if (len > 0)
            {
                tx.executeSql('UPDATE user_settings SET display_name=?;', [lawyerName], function(tx, result)
                {
                    if (typeof callBack !== 'undefined')
                    {
                        callBack('DONE');
                    }
                }, function(err)
                {
                    alert("Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod:insertLawyerName(executeSql) tx4");
                });
            }
            else
            {
                tx.executeSql('INSERT INTO user_settings(display_name) VALUES(?);', [lawyerName], function(tx, result)
                {
                    if (typeof callBack !== 'undefined')
                    {
                        callBack('DONE');
                    }
                }, function(err)
                {
                    alert("Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod:insertLawyerName(executeSql) tx3");
                });
            }
        }, function(err)
        {
            alert("Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: insertLawyerName(executeSql) tx2");
        });
    }, function(err)
    {
        alert("Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: insertLawyerName(executeSql) tx1");
    }, successCB);
}

function GCM_Event(e)
{
// alert("in GCM event" + deviceInfo );
    switch (e.event)
    {
        case 'registered':
            gApp.gcmregid = e.regid;
            gApp.isNewID = e.newRegId;
            if (gApp.gcmregid.length > 0)
            {
                registrationIdReceived = "DONE";
                doRegistrationProcess();
            }
            break;
        case 'message':
            //alert("Message: " + e.message);
            if (e.isAppActive)
            {
                var breakMsg = e.message.split(',');
                var time = breakMsg[1].split(':');
                var msgTime = time[1].toString().trim();
                silentUpdate(function(isUpdated)
                {
                    if (isUpdated)
                    {
                        openCasePage();
                        drawToast("Case List Updated");
                        putDateToSearchCasepage(Date.parseExact(msgTime, 'yyyy-MM-dd').toString('yyyy-MM-dd'));
                    }
                    else
                    {
                        drawToast("No New Updates");
                        putDateToSearchCasepage(Date.parseExact(msgTime, 'yyyy-MM-dd').toString('yyyy-MM-dd'));
                    }
                });
            }
            break;
        case 'error':
            alert("Error" + e.msg);
            break;
        default:
            alert("Default");
            break;
    }
}

function GCM_Success(e)
{}

function GCM_Fail(e)
{
    alert("GCM Fail: " + e.msg);
}

function register_user(reg_id)
{   //alert("in  register_user " + deviceInfo );
//alert("in  register_user regid " + reg_id );
    try
    {
        var requestTime = new Date().getTime();
        var cloud_service_name = '';
        try
        {
            if (device.platform == 'android' || device.platform == 'Android')
            {
                cloud_service_name = 'GCM';
            }
            if (device.platform == 'iOS' || device.platform == 'IOS' || device.platform == 'ios')
            {
                cloud_service_name = 'APPLE';
            }
        }
        catch (err)
        {
            cloud_service_name = 'GCM';
        }
        db.transaction(function(tx)
        {
            tx.executeSql('SELECT * FROM user_settings', [], function(tx, result)
            {
                try
                {
                    var len = result.rows.length;
                    if (len > 0)
                    {
                        var email_id = result.rows.item(0).email_id;
                        var password = result.rows.item(0).password;
                        var url = MR_URL;
                        var port = '8111';
                        var webMethod = protocal + url + '/WebService_andriod.asmx/register_user';
                        //Asif's Work
                       // alert('device in asif work register_user '+ deviceInfo);
                      // satish changes //
                        if(deviceInfo != "Not Available"){
                            reg_id = deviceInfo + "!@#$" + reg_id;
                        }else{
                        reg_id = reg_id;
                        }
                        //End
                        $.ajax(
                        {
                            type: "POST",
                            url: webMethod,
                            data: JSON.stringify(
                            {
                                registration_id: reg_id,
                                email_id: email_id,
                                password: password,
                                cloud_service_name: cloud_service_name,
                                deviceID: deviceID
                            }),
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function(msg)
                            {
                                try
                                {
                                    var responseTime = new Date().getTime();
                                    $.mobile.loading('hide');
                                    if (typeof String.prototype.startsWith != 'function')
                                    {
                                        String.prototype.startsWith = function(str)
                                        {
                                            return this.slice(0, str.length) == str;
                                        };
                                    }
                                    if (msg.d == 'EXISTS')
                                    {
                                        settingsSaved = null;
                                        alert('Mobile number or email already exists. Please contact +918269244088 to get your PIN');
                                        $.mobile.navigate("initpage.html",
                                        {
                                            transition: "slide",
                                            reverse: true
                                        });
                                    }
                                    if (msg.d.startsWith('INSERTED'))
                                    {
                                        var demoData = msg.d;
                                        settingsSaved = 'DONE';
                                        if (demoData.indexOf(',') !== -1)
                                        {
                                            var firstPart = demoData.substring(0, demoData.indexOf(','));
                                            var firstPartLength = firstPart.length;
                                            var secondPart = demoData.substring(demoData.indexOf(',', firstPartLength) + 1, demoData.indexOf(',', firstPartLength + 1));
                                            var secondPartLength = secondPart.length + firstPartLength + 1;
                                            var thiredPart = demoData.substring(demoData.indexOf(',', secondPartLength) + 1, demoData.indexOf(',', secondPartLength + 1));
                                            var thiredPartLength = thiredPart.length + secondPartLength + 1;
                                            var fourthPart = demoData.substring(demoData.indexOf(',', thiredPartLength) + 1, demoData.indexOf(',', thiredPartLength + 1));
                                            var fourthPartLength = fourthPart.length + thiredPartLength + 1;
                                            var fifthPart = demoData.substring(demoData.indexOf(',', fourthPartLength) + 1, demoData.indexOf(',', fourthPartLength + 1));
                                            var fifthPartLength = fifthPart.length + fourthPartLength + 1;
                                            var sixthPart = demoData.substring(demoData.indexOf(',', fifthPartLength) + 1, demoData.length);
                                            var registrationTime = Date.today();
                                            var GAOnOff = 'false';
                                            updateSettings(fourthPart, function(result)
                                            {
                                                insertGUIDAndID(thiredPart, secondPart, registrationTime,GAOnOff);
                                                insertLawyerName(sixthPart, function(status) {});
                                            });
                                        }
                                    }
                                    if (msg.d == 'NOTUSER')
                                    {
                                        settingsSaved = null;
                                        alert('Invalid email or password.');
                                        $.mobile.navigate("initpage.html",
                                        {
                                            transition: "slide",
                                            reverse: true
                                        });
                                    }
                                }
                                catch (err)
                                {
                                    var errMsg = err + "\nMethod: register_user(jquery)" + "\nError Stack:" + err.stack;
                                    insertErrorLogs(errMsg, function(id)
                                    {
                                        alert("Oops! Something went worng.")
                                    });
                                    fetchAndRegisterErrorLogs();
                                }
                            },
                            error: function(XMLHttpRequest, textStatus, errorThrown)
                            {
                                $.mobile.loading('hide');
                                var responseTime = new Date().getTime();
                                var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: register_user(ajax call)";
                                errMsg = errMsg + "\n App Version : " + version;
                                insertLog(requestTime, responseTime, errMsg, function(returnId) {});
                                //alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
                                calledBeforeSendAnyRequest(function(isConnected)
                                {
                                    if (isConnected)
                                    {
                                        fetchAndRegisterErrorLogs();
                                    }
                                });
                            },
                            beforeSend: function()
                            {
                                $.mobile.loading('show',
                                {
                                    text: 'Registring Please Wait...',
                                    textVisible: true,
                                    theme: 'b',
                                    textonly: false
                                });
                            }
                        });
                    }
                }
                catch (err)
                {
                    var errMsg = err + "\nMethod: register_user(jquery) tx1" + "\nError Stack:" + err.stack;
                    insertErrorLogs(errMsg, function(id)
                    {
                        alert("Oops! Something went worng.")
                    });
                    fetchAndRegisterErrorLogs();
                }
            }, function(err)
            {
                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: register_user(executeSql)";
                insertErrorLogs(errMsg, function(id)
                {
//                    alert("Oops! Something went worng with db.");
                    fetchAndRegisterErrorLogs();
                });
            });
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: register_user(transction)";
            insertErrorLogs(errMsg, function(id)
            {
//                alert("Oops! Something went worng with db.");
                fetchAndRegisterErrorLogs();
            });
        }, successCB);
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: register_user12(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        {
            alert("Oops! Something went worng.")
        });
        fetchAndRegisterErrorLogs();
    }
}

function insertGUIDAndID(guid, id, registerTime,GAOnOff)
{
    db.transaction(function(tx)
    {
        tx.executeSql('Select * from user_settings', [], function(tx, result)
        {
            var len = result.rows.length;
            if (len == 0)
            {
                tx.executeSql('INSERT INTO user_settings (guid,user_id,registrationTime,GAOnOff) values(?,?,?,?)', [guid, id, registerTime.toString('yyyy-MM-dd'),GAOnOff], function()
                {
                    drawToast("Registered");
                    openCasePageAfterUpdate();
                    getSubscriptionDate();
                }, function(err)
                {
                    var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: insertGUIDAndID(insert)(executeSql)";
                    insertErrorLogs(errMsg, function(id)
                    {
//                        alert("Oops! Something went worng with db.")
                    });
                });
            }
            else
            {
                tx.executeSql('update user_settings set guid=?,user_id=?,registrationTime=?,GAOnOff=?', [guid, id, registerTime.toString('yyyy-MM-dd'),GAOnOff], function(tx, result)
                {
                    drawToast("Registered");
                    openCasePageAfterUpdate();
                    getSubscriptionDate();
                }, function(err)
                {
                    var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: insertGUIDAndID(update)(executeSql)";
                    insertErrorLogs(errMsg, function(id)
                    {
//                        alert("Oops! Something went worng with db.")
                    });
                });
            }
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: insertGUIDAndID(executeSql)";
            insertErrorLogs(errMsg, function(id)
            {
//                alert("Oops! Something went worng with db.")
            });
        });
    }, function(err)
    {
        var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: insertGUIDAndID(trasaction)";
        insertErrorLogs(errMsg, function(id)
        {
//            alert("Oops! Something went worng with db.")
        });
    }, successCB);
}

function insertEmailAndPwd(email, password)
{
    db.transaction(function(tx)
    {
        tx.executeSql('Select * from user_settings', [], function(tx, result)
        {
            var len = result.rows.length;
            if (len == 0)
            {
                tx.executeSql('INSERT INTO user_settings (email_id,password) values(?,?)', [email, password], function() {}, function(err)
                {
                    var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: insertEmailAndPwd(insert)(executeSql)";
                    insertErrorLogs(errMsg, function(id)
                    {
//                        alert("Oops! Something went worng with db.")
                    });
                });
            }
            else
            {
                tx.executeSql('update user_settings set email_id=?,password=?', [email, password], function(tx, result) {}, function(err)
                {
                    var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: insertEmailAndPwd(update)(executeSql)";
                    insertErrorLogs(errMsg, function(id)
                    {
//                        alert("Oops! Something went worng with db.")
                    });
                });
            }
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: insertEmailAndPwd(executeSql)";
            insertErrorLogs(errMsg, function(id)
            {
//                alert("Oops! Something went worng with db.")
            });
        });
    }, function(err)
    {
        var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: insertEmailAndPwd(trasaction)";
        insertErrorLogs(errMsg, function(id)
        {
//            alert("Oops! Something went worng with db.")
        });
    }, successCB);
}

function updateRegistrationIdOnServer(reg_id)
{
    try
    {
        var requestTime = new Date().getTime();
        var cloud_service_name = '';
        try
        {
            if (device.platform == 'android' || device.platform == 'Android')
            {
                cloud_service_name = 'GCM';
            }
            if (device.platform == 'iOS' || device.platform == 'IOS' || device.platform == 'ios')
            {
                cloud_service_name = 'APPLE';
            }
        }
        catch (err)
        {
            cloud_service_name = 'GCM';
        }
        db.transaction(function(tx)
        {
            tx.executeSql('SELECT * FROM user_settings where user_id is not null and guid is not null', [], function(tx, result)
            {
                try
                {
                    var len = result.rows.length;
                    if (len > 0)
                    {
                        var email_id = result.rows.item(0).email_id;
                        var password = result.rows.item(0).password;
                        var user_id = result.rows.item(0).user_id;
                        var guid = result.rows.item(0).guid;
                        var url = MR_URL;
                        var port = '8111';
                        //Asif's Work
                        //  alert('device in asif work updateRegistrationIdOnServer '+ deviceInfo);
                         // satish changes //
                        if(deviceInfo != "Not Available"){
                            reg_id = deviceInfo + "!@#$" + reg_id;
                        }else{
                        reg_id = reg_id;
                        }
                        //End
                        var webMethod = protocal + url + '/WebService_andriod.asmx/update_registration';
                        $.ajax(
                        {
                            type: "POST",
                            url: webMethod,
                            data: JSON.stringify(
                            {
                                registration_id: reg_id,
                                lawyer_id: user_id,
                                cloud_service_name: cloud_service_name
                            }),
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function(msg)
                            {
                                try
                                {
                                    var responseTime = new Date().getTime();
                                    if (msg.d == true)
                                    {
                                        openCasePage();
                                        silentUpdate(function(isUpdated)
                                        {
                                            if (isUpdated)
                                            {
                                                openCasePage();
                                                $.mobile.loading('hide');
                                                drawToast("Case List Updated");
                                            }
                                            else
                                            {
                                                $.mobile.loading('hide');
                                                drawToast("No New Updates");
                                            }
                                        });
                                        drawToast("Registration Updated Sucessfully");
                                    }
                                    else
                                    {
                                        $.mobile.loading('hide');
                                        drawToast("Unable To Update Registration");
                                    }
                                }
                                catch (err)
                                {
                                    var errMsg = err + "\nMethod: updateRegistrationIdOnServer(jquery)" + "\nError Stack:" + err.stack;
                                    insertErrorLogs(errMsg, function(id)
                                    {
                                        alert("Oops! Something went worng.")
                                    });
                                }
                            },
                            error: function(XMLHttpRequest, textStatus, errorThrown)
                            {
                                $.mobile.loading('hide');
                                var responseTime = new Date().getTime();
                                var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: updateRegistrationIdOnServer(ajax call)";
                                errMsg = errMsg + "\n App Version : " + version;
                                insertLog(requestTime, responseTime, errMsg, function(returnId) {});
                                alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
                                calledBeforeSendAnyRequest(function(isConnected)
                                {
                                    if (isConnected)
                                    {}
                                });
                            },
                            beforeSend: function()
                            {
                                $.mobile.loading('show',
                                {
                                    text: 'Updating Registration...',
                                    textVisible: true,
                                    theme: 'b',
                                    textonly: false
                                });
                            }
                        });
                    }
                }
                catch (err)
                {
                    var errMsg = err + "\nMethod: updateRegistrationIdOnServer12(jquery) tx1" + "\nError Stack:" + err.stack;
                    insertErrorLogs(errMsg, function(id)
                    {
                        alert("Oops! Something went worng.")
                    });
                }
            }, errorCB);
        }, errorCB, successCB);
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: updateRegistrationIdOnServer12(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { // alert("Oops! Something went worng.")
        });
    }
}
var expDate;
var isMsgboxShow = true;
var expDateToShow;

function getSubscriptionDate()
{
    try
    {
        var requestTime = new Date().getTime();
        db.transaction(function(tx)
        {
            tx.executeSql('SELECT * FROM user_settings where user_id is not null and guid is not null', [], function(tx, result)
            {
                try
                {
                    var len = result.rows.length;
                    if (len > 0)
                    {
                        var user_id = result.rows.item(0).user_id;
                        if (user_id !== 'undefined' && user_id !== null && user_id !== '')
                        {
                            var url = MR_URL;
                            var port = '8111';
                            var webMethod = protocal + url + '/WebService_andriod.asmx/getSubscriptionValidity';
                            $.ajax(
                            {
                                type: "POST",
                                url: webMethod,
                                data: JSON.stringify(
                                {
                                    lawyer_id: user_id
                                }),
                                contentType: "application/json; charset=utf-8",
                                dataType: "json",
                                success: function(msg)
                                {
                                    if (msg.d)
                                    {
                                        try
                                        {
                                            var responseTime = new Date().getTime();
                                            var allData = msg.d.split(",");
                                            var expiryDate = allData[0].split(":");
                                            var display = allData[1].split("--");
                                            var expiryMsg = allData[2].split("--");
                                            var serverEpoch = allData[3].split("--");
                                            var GAonoff ;
                                            try{
                                             GAonoff = allData[4].split("--");
                                            }catch(err)
                                            {
                                            GAonoff = ['GAonoff','false'];

                                            }
                                            var expDateMsg;
                                            if (expiryDate[0].toString().indexOf('--') !== -1)
                                            {
                                                expDateMsg = expiryDate[0].split("--");
                                            }
                                            else
                                            {
                                                expDateMsg = expiryDate[0].toString();
                                            }
                                            $('#serverEpoch').html('Search available from ' + serverEpoch[1]);
                                            $('#expDate').empty();
                                            if (expDateMsg[1].toLowerCase() !== 'expired')
                                            {
                                            try{
                                                if (device.platform == 'android' || device.platform == 'Android')
                                                {
                                                    $.mobile.activePage.find('#expDate').html('Subscription expires in ' + expDateMsg[1] + '.<br/>Helpline : +918269244088');
                                                    expDateToShow = 'Subscription expires in ' + expDateMsg[1] + '.<br/>Helpline : +918269244088';
                                                }
                                                else if (device.platform == 'iOS' || device.platform == 'IOS' || device.platform == 'ios')
                                                {
                                                    $.mobile.activePage.find('#expDate').html('Helpline : +918269244088');
                                                    expDateToShow = 'Helpline : +918269244088';
                                                }
                                                else{
                                                    $.mobile.activePage.find('#expDate').html('Helpline : +918269244088');
                                                    expDateToShow = 'Helpline : +918269244088';
                                                }
                                                }
                                                catch(err){
                                                    $.mobile.activePage.find('#expDate').html('Helpline : +918269244088');
                                                    expDateToShow = 'Helpline : +918269244088';
                                                }
                                            }
                                            else
                                            {
                                                $.mobile.activePage.find('#expDate').html('Subscription ' + expDateMsg[1] + '.<br/>Helpline : +918269244088');
                                                expDateToShow = 'Subscription ' + expDateMsg[1] + '.<br/>Helpline : +918269244088';
                                            }
                                            expDate = expDateMsg;
                                            if (Number(display[1]) == 1)
                                            {
                                                var valMsg;
                                                if (allData[2].toString().indexOf('Msg:') !== -1)
                                                {
                                                    valMsg = allData[2].split("Msg:");
                                                }
                                                if (isMsgboxShow)
                                                {
                                                    $('#validityPopUp').fadeIn();
                                                }
                                                else
                                                {
                                                    isMsgboxShow = false;
                                                }
                                                if (expDateMsg[1].toLowerCase() !== 'expired')
                                                {
                                                    $('#innerMsg').html(expiryMsg[1]);
                                                }
                                                else
                                                {
                                                    $('#innerMsg').html(expiryMsg[1] + " Please call +918269244088(Mon-Sat, 10AM-7PM).");
                                                }
                                                var screenH = $(window).height() / 3;
                                                var headerH = $('.header').height() + 60;
                                                $('#validityPopUp').css(
                                                {
                                                    height: screenH,
                                                    top: headerH + 'px'
                                                });
                                            }
                                            if (expDateMsg[1].toLowerCase() === 'expired')
                                            {
                                                $('#Close').hide();
                                                $('.ui-hlp-over').show();
                                            }
                                            setGAOnOffVariable(GAonoff[1]);
                                            getLastUpdatLog();
                                            getWelcomeNote();
                                        }
                                        catch (err)
                                        { //alert("in get subs date excep  error.")
                                            var errMsg = err + "\nMethod: GetSubscriptionDate(jquery)" + "\nError Stack:" + err.stack;
                                            insertErrorLogs(errMsg, function(id)
                                            { //alert("Oops! Something went worng.")
                                            });
                                        }
                                    }
                                },
                                error: function(XMLHttpRequest, textStatus, errorThrown)
                                {
                                  //alert("in get subs date  error.")
                                    var responseTime = new Date().getTime();
                                    var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: GetSubscriptionDate(ajax call)";
                                    errMsg = errMsg + "\n App Version : " + version;
                                    insertLog(requestTime, responseTime, errMsg, function(returnId) {});
                                    alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
                                    calledBeforeSendAnyRequest(function(isConnected)
                                    {
                                        if (isConnected)
                                        {}
                                    });
                                },
                                beforeSend: function() {}
                            });
                        }
                    }
                }
                catch (err)
                {
                    var errMsg = err + "\nMethod: updateRegistrationIdOnServer12(jquery) tx1" + "\nError Stack:" + err.stack;
                    insertErrorLogs(errMsg, function(id)
                    { //alert("Oops! Something went worng.")
                    });
                }
            }, errorCB);
        }, errorCB, successCB);
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: GetSubscriptionDate12(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
}

function setDistanceHeight()
{
    var topMsgHeaderHeight = $('.validity').height();
    if (topMsgHeaderHeight > 26)
    {
        topMsgHeaderHeight = topMsgHeaderHeight - 26;
    }
}

function getLastUpdatLog()
{
    try
    {
        db.transaction(function(tx)
        {
            tx.executeSql("select max(update_time) as max_store_time from new_update_logs ", [], function(tx, result)
            {
                var max_store_time = result.rows.item(0).max_store_time;
                var data = '';
                if (max_store_time == null || max_store_time == 0)
                {
                    $('#updtTime').empty();
                    $('#updtTime').html('Not updated yet. ,');
                    setDistanceHeight();
                }
                else
                {
                    data = 'Data Updated on :- ' + new Date(result.rows.item(0).max_store_time).toString('dd/MM/yyyy hh:mm:ss tt');
                    $('#updtTime').empty();
                    $('#updtTime').html(data + ' ');
                    setDistanceHeight();
                }
            }, function(err)
            {
                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: getLastUpdatLog(executeSql)";
                insertErrorLogs(errMsg, function(id)
                {
//                    alert("Oops! Something went worng with db.")
                });
            });
        }, errorCB, successCB);
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: getLastUpdatLog(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
}

function getWelcomeNote()
{
    try
    {
        db.transaction(function(tx)
        {
            tx.executeSql("SELECT display_name FROM user_settings ;", [], function(tx, result)
            {
                try
                {
                    var len = result.rows.length;
                    if (len > 0)
                    {
                        var email_id = result.rows.item(0).display_name;
                        var data = '';
                        if (email_id !== null || email_id !== "")
                        {
                            $('#welcomeNote').empty();
                            $('#welcomeNote').html('Hi! ' + email_id);
                            setDistanceHeight();
                        }
                        else
                        {
                            $('#welcomeNote').empty();
                            setDistanceHeight();
                        }
                    }
                }
                catch (err)
                {
                    var errMsg = err + "\nMethod: getWelcomeNote(jquery) tx1" + "\nError Stack:" + err.stack;
                    insertErrorLogs(errMsg, function(id)
                    { //alert("Oops! Something went worng.")
                    });
                }
            }, function(err)
            {
                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: getWelcomeNote(executeSql)";
                insertErrorLogs(errMsg, function(id)
                {
//                    alert("Oops! Something went worng with db.");
                });
            });
        }, errorCB, successCB);
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: getWelcomeNote(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
}
function setGAOnOffVariable(variable)
{
// alert('GA values '+variable);
try
    {
        db.transaction(function(tx)
        {
            tx.executeSql("UPDATE user_settings Set GAOnOff = '"+variable+"';", [], function(tx, result)
            {

            }, function(err)
            {
                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: setGAOnOffVariable(executeSql)";
                insertErrorLogs(errMsg, function(id)
                {
//                    alert("Oops! Something went worng with db.");
                });
            });
        }, errorCB, successCB);
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: setGAOnOffVariable(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }

}

function unregister()
{
    window.plugins.GCM.unregister(GCM_Success, GCM_Fail);
}

function drawToast(message)
{
    var alert1 = document.getElementById("toast11");
    if (alert1 == null)
    {
        var toastHTML = '<div id="toast11">' + message + '</div>';
        document.body.insertAdjacentHTML('beforeEnd', toastHTML);
    }
    else
    {
        var alert1 = document.getElementById("toast11");
        alert1.innerHTML = message;
        alert1.style.opacity = .9;
        $('#toast11').fadeIn();
    }
    setTimeout(function()
    {
        var alert1 = document.getElementById("toast11");
        alert1.style.opacity = 0;
        $('#toast11').fadeOut();
    }, 3000);
}

function SDP_Success(e)
{}

function SDP_Fail(e)
{}

function getSharedData()
{
    window.plugins.SDP.getData(function(data)
    {
        try
        {
            //alert("Data Received From Plugin: " + data.message + "-" + data.msgct);
            var emailaddress = data.emails;
            var i = 0;
            while (i < emailaddress.length)
            {
                //alert("Email: " + emailaddress[i].email);
                i++;
            }
        }
        catch (e)
        {
            var errMsg = err + "\nMethod: getSharedData(jquery)";
            insertErrorLogs(errMsg, function(id)
            { //alert("Oops! Something went worng.")
            });
        }
    }, SDP_Fail);
}

function saveSharedData()
{
    var data = {
        message: 'Demo message',
        msgct: 'Demo msgct'
    };
    window.plugins.SDP.saveData(SDP_Success, SDP_Fail, data);
}

function createUUID()
    {
        var jsonObject1 = {
            email_id: 'demo_email_id1',
            password: 'demo_password1'
        };
        var jsonObject2 = {
            email_id: 'demo_email_id2',
            password: 'demo_password2'
        };
        var detailArray = new Array();
        detailArray.push(jsonObject1);
        detailArray.push(jsonObject2);
        var i = 0;
        while (i < detailArray.length)
        {
            alert(detailArray[i].email_id);
            i++;
        }
    }
    //var deviceIdFormJson;

function displayDeviceInfo()
{
    var deviceName = 'Device Name: ' + device.name;
    var deviceCordova = 'Device Cordova: ' + device.cordova;
    var devicePlatform = 'Device Platform: ' + device.platform;
    var deviceUUID = 'Device UUID: ' + device.uuid;
    var deviceVersion = 'Device Version: ' + device.version;
    alert(deviceName + "\n" + deviceCordova + "\n" + devicePlatform + "\n" + deviceUUID + "\n" + deviceVersion);
}

function demoFunction()
{
    try
    {
        db.transaction(function(tx)
        {
            tx.executeSql('SELECT * FROM user_settings where user_id is not null and guid is not null', [], function(tx, result)
            {
                var len = result.rows.length;
                //alert("Length : " + len);
                if (len > 0)
                {
                    var user_id = result.rows.item(0).user_id;
                    var guid = result.rows.item(0).guid;
                    var url = result.rows.item(0).url;
                    //alert("User ID: " + user_id + "\nGUId: " + guid + "\nURL: " + url);
                    if (user_id == 'null' || guid == 'null')
                    {
                       // alert("Inside if 'null'");
                    }
                    else
                    {
                       // alert("Inside else 'null'");
                    }
                    if (user_id == null || guid == null)
                    {
                        //alert("Inside if null");
                    }
                    else
                    {
                       // alert("Inside else null");
                    }
                }
                else
                {
                    //alert("Length is not zero");
                }
                tx.executeSql('SELECT * FROM user_settings', [], function(tx, result)
                {
                    var len = result.rows.length;
                    //alert("Length : " + len);
                }, errorCB);
            }, successCB);
        }, errorCB, successCB);
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: demoFunction(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
}

function validateFeedbackForm()
{
    var comment_type = $("#comment_type");
    if (comment_type[0].selectedIndex == 0)
    {
        drawToast("Select Comment Type");
        return false;
    }
    feedback();
}
var isSuccess = false;
var secontime = false;

function validateSignupForm()
{
    try
    {
        if (secontime == false)
        {
            secontime = true;
            var txtUserName = $("#txt_user_name").val();
            if (txtUserName.trim().length == 0)
            {
                $("#txt_user_name").focus();
                drawToast("Enter Your Name");
                secontime = false;
                return false;
            }
            var txtMobileNo = $("#txt_mobile_no").val();
            if (txtMobileNo.trim().length == 0)
            {
                $("#txt_mobile_no").focus();
                drawToast("Enter Your Mobile Number");
                secontime = false;
                return false;
            }
            else
            {
                if (!isNumber(txtMobileNo))
                {
                    $("#txt_mobile_no").select().focus();
                    drawToast("Enter Valid Mobile Number");
                    secontime = false;
                    return false;
                }
                if (txtMobileNo.trim().length != 10)
                {
                    $("#txt_mobile_no").focus();
                    drawToast("Enter Valid Mobile Number And Avoid Country Code also!!!");
                    secontime = false;
                    return false;
                }

            }
            var txtUserEmailId = $("#txt_user_email_id").val();
            if (txtUserEmailId.trim().length == 0)
            {
                $("#txt_user_email_id").focus();
                drawToast("Enter Your Email Id");
                secontime = false;
                return false;
            }
            else
            {
                if (!IsEmail(txtUserEmailId))
                {
                    $("#txt_user_email_id").focus();
                    drawToast("Enter Proper Email Id");
                    secontime = false;
                    return false;
                }
            }
            var courtSelect = $("#select_court");
            if (courtSelect[0].selectedIndex == 0)
            {
                drawToast("Select Court");
                secontime = false;
                return false;
            }
            format_string();
            if ($("#txt_search_for_div span").length === 0)
            {
                $("#txt_search_for").focus();
                drawToast("Enter Valid Search String");
                secontime = false;
                return false;
            }
            checkexistingcustomer();
            //
        }
    }
    catch (err)
    {
        secontime = false;
        var errMsg = err + "\nMethod: validateSignupForm(jquery) " + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
}

function IsEmail(email)
{
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function allowAlphaAndSpace(strng)
{
    var regex = /^[a-zA-Z, ]*$/;
    return regex.test(strng.trim());
}
var totalComa = 0;
var limitCross = false;
$(document).on('keyup', '#txt_search_for', function(event)
{
    if ($(this).is(":disabled"))
    {
        return;
    }
    var SS = $("#txt_search_for").val();
    var lastLetter = SS.substr(SS.length - 1);
    if (lastLetter == ",")
    {
        format_string();
    }
    //    if (event.which == 188) {
    //        format_string();
    //    }
});

function format_string()
{
    try
    {
        var data = $("#txt_search_for").val().trim();
        data = data.replace(/[_\s]+/g, ' ');
        if (data.indexOf(',') !== -1)
        {
            data = data.substring(0, data.trim().length - 1);
        }
        if (data.trim().length < 10 || data.trim().length > 26)
        {
            $("#txt_search_for").val(data.substring(0, data.trim().length));
            drawToast("Search string can not be less then 10 char and greater then 26 char.");
            secontime = false;
            event.preventDefault();
            return false;
        }
        var selectedData = $('.ui-block-a');
        var i = 0;
        while (i < selectedData.length)
        {
            var iData = $(selectedData[i]).find('span').text();
            if (iData.substring(0, iData.length - 1).toLowerCase() === data.trim().toLowerCase())
            {
                $("#txt_search_for").val(data.substring(0, data.trim().length));
                drawToast("Already Exist.");
                secontime = false;
                event.preventDefault();
                return false;
                break;
            }
            i++;
        }
        if (!allowAlphaAndSpace(data))
        {
            $("#txt_search_for").focus();
            drawToast("Only alphabets and spaces are allowed.");
            secontime = false;
            return false;
        }
        totalComa++;
        var remaining = 10 - totalComa;
        if (remaining == 0)
        {
            $("#txt_search_for").attr('disabled', true);
        }
        $("#searchStringDetail").html(remaining);
        data = data.trim();
        if (data.substring(data.length - 1, data.length) == ',') data = data.substring(0, data.length - 1);
        span = $("<span>").text(data);
        a = $("<a>").addClass("remove").attr(
        {
            href: "javascript:",
            title: "Remove " + data
        }).text("x").appendTo(span);
        span.insertBefore("#firstSpanInDiv");
        $("#txt_search_for").val("");
    }
    catch (err)
    {
        secontime = false;
        var errMsg = err + "\nMethod: format_string(jquery) " + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
}
$(document).on("click", ".remove", function()
{
    totalComa--;
    var remaining = 10 - totalComa;
    if (remaining > 0)
    {
        $("#txt_search_for").attr('disabled', false);
    }
    $("#searchStringDetail").html(remaining);
    $(this).parent().remove();
});
$(document).on('pageinit', '#signupPanel', function(event)
{
    getCourtList(function(data)
    {
        try
        {
            var ddl_court = $('#select_court');
            $(data).find("dtCourt ").each(function()
            {
                ddl_court.append('<option value="' + $(this).find("court_id").text() + '">' + $(this).find("court_name").text() + '</option>');
            });
            ddl_court.selectmenu("refresh");
        }
        catch (err)
        {
            var errMsg = err + "\nMethod: #signupPanel(jquery) " + "\nError Stack:" + err.stack;
            insertErrorLogs(errMsg, function(id)
            { //alert("Oops! Something went worng.")
            });
        }
    });
});

function getCourtList(callBack)
{
    try
    {
        var url = MR_URL;
        var webMethod = protocal + url + '/WebService_andriod.asmx/getCourtname';
        var requestTime = new Date().getTime();
        $.ajax(
        {
            type: "POST",
            url: webMethod,
            dataType: "xml",
            cache: false,
            contentType: "application/xml",
            data: "{}",
            success: function(msg)
            {
                $.mobile.loading('hide');
                var responseTime = new Date().getTime();
                if (typeof callBack !== 'undefined')
                {
                    callBack(msg);
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown)
            {
                $.mobile.loading('hide');
                $("#responseFromServer").append(XMLHttpRequest.responseText);
                var responseTime = new Date().getTime();
                var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: getCourtList(ajax call)";
                errMsg = errMsg + "\n App Version : " + version;
                insertLog(requestTime, responseTime, errMsg, function(returnId) {});
                alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
                calledBeforeSendAnyRequest(function(isConnected)
                {
                    if (isConnected)
                    {}
                });
            },
            beforeSend: function()
            {
                $.mobile.loading('show',
                {
                    text: 'Loading...',
                    textVisible: true,
                    theme: 'b',
                    textonly: false
                });
            },
            complete: function()
            { /*alert("Data Received.");$.mobile.hidePageLoadingMsg();*/ }
        });
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: getCourtList(jquery) " + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
}

function validateDevice(callBack)
{
    try
    {
        var registration_id = gApp.gcmregid;
        var cloud_service_name = '';
        try
        {
            if (device.platform == 'android' || device.platform == 'Android')
            {
                cloud_service_name = 'GCM';
            }
            if (device.platform == 'iOS' || device.platform == 'IOS' || device.platform == 'ios')
            {
                cloud_service_name = 'APPLE';
            }
        }
        catch (err)
        {
            cloud_service_name = 'GCM';
        }
        var url = MR_URL;
        var webMethod = protocal + url + '/WebService_andriod.asmx/validateDevice';
        var requestTime = new Date().getTime();
        //alert(JSON.stringify(
        //{
        //deviceId: deviceID,
        //registration_id: registration_id,
        //cloud_service_name: cloud_service_name
        //}));
        //$.support.cors = true;
        var dataToSend = JSON.stringify(
        {
            //changes by ssharma
            deviceId: deviceID,
            registration_id: registration_id,
            //registration_id: 'fBb8vI9D_bg:APA91bHkg_kD5wIpYcmUs_PU0TDiSRBS9383dAu2dnxT40b-Tmixw8yZvuygx6zbr5QJgoT1jN7vnOFs68MvO7lGmgTD0oyukkXZjU6fdw3WnACO5j_ZGn9fJpc9PR-KaAYuUi_LzobE',
            //registration_id: 'APA91bHMWT9oJyb5d1rkg147cWW6Eo5vpW3_O6lAWOJWTEoqIr8NdLbBPl--MCoI0dCb-5bgdxsjiFA0RF7AUQlfBo8-VqRSFj4uSbgh_9rY58ucTth6D_EnqZIsf8d1EJPo-zRPbbpN9ifMWSRGV-UiV-52SKe3cA',
            cloud_service_name: cloud_service_name
        });
        $.ajax(
        {   type: "POST",
            url: webMethod,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: dataToSend,
            success: function(msg)
            {
            //alert("Message response found"+msg.d);
                var responseTime = new Date().getTime();
                var isActive = true;
                if (msg.d.length > 0)
                {
                    if (msg.d === 'notavail')
                    {
                        isActive = false;
                    }
                    else
                    {
                        if (CallorNot == true)
                        {
                            var allData = msg.d.split(',');
                            if (allData.length > 0)
                            {
                                var lawyerId = allData[0].substring(allData[0].indexOf(':') + 1, allData[0].length);
                                var registration_id = allData[1].substring(allData[1].indexOf(':') + 1, allData[1].length);
                                var mobile_number = allData[2].substring(allData[2].indexOf(':') + 3, allData[2].length);
                                var password_scs_app = allData[3].substring(allData[3].indexOf(':') + 1, allData[3].length);
                                var lawyerName = allData[4].substring(allData[4].indexOf(':') + 1, allData[4].length);
                                var registrationTime = Date.today().add(0).days();
                                var GAOnOff="";
                                try{
                                 GAOnOff= allData[5].substring(allData[5].indexOf(':') + 1, allData[5].length);
                                }catch(err)
                                {
                                GAOnOff = "false";
                                }
                                insertEmailAndPwd(mobile_number, password_scs_app);
                                insertGUIDAndID(registration_id, lawyerId, registrationTime,GAOnOff);
                                insertLawyerName(lawyerName, function(status) {});
                            }
                        }
                    }
                }
                if (typeof callBack !== 'undefined')
                {
                    callBack(isActive);
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown)
            {

                $.mobile.loading('hide');
                var responseTime = new Date().getTime();
                var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: validateDevice(ajax call)";
                errMsg = errMsg + "\n App Version : " + version;
                    //        alert("Message crash found"+errMsg);
                insertLog(requestTime, responseTime, errMsg, function(returnId) {});
                alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
                if (typeof callBack !== 'undefined')
                {
                    callBack(false);
                }
            },
            beforeSend: function() {},
            complete: function()
            { /*alert("Data Received.");$.mobile.hidePageLoadingMsg();*/ }
        });
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: validateDevice(jquery) " + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
}

function feedback()
{
    var comment = $("#comment_type");
    var commenttype = comment[0].options[comment[0].selectedIndex].value;
    var commentmsg = $('#comment_msg').val();
    db.transaction(function(tx)
    {
        tx.executeSql('SELECT * FROM user_settings where user_id is not null and guid is not null', [], function(tx, result)
        {
            var len = result.rows.length;
            if (len > 0)
            {
                var lawyerid = result.rows.item(0).user_id;
                var url = MR_URL;
                var port = '8111';
                var webMethod = protocal + url + '/WebService_andriod.asmx/feedback';
                if (MR_URL.indexOf('scsapp') == -1)
                {
                    webMethod = protocal + url + ':' + port + '/WebService_andriod.asmx/feedback';
                }
                else
                {
                    webMethod = protocal + url + '/WebService_andriod.asmx/feedback';
                }
                var dataToSend = JSON.stringify(
                {
                    lawyer_id: lawyerid,
                    comment_type: commenttype,
                    comment_message: commentmsg
                });
                $.ajax(
                {
                    type: "POST",
                    url: webMethod,
                    data: dataToSend,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function(msg)
                    {
                        $.mobile.loading('hide');
                        if (msg.d == true)
                        {
                            alert("Your Feedback is post successfully")
                        }
                        else
                        {
                            alert("Your feedback is not posted");
                        }
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown)
                    {
                        $.mobile.loading('hide');
                        alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
                        calledBeforeSendAnyRequest(function(isConnected)
                        {
                            if (isConnected)
                            {}
                        });
                    }
                });
            }
        }, errorCB, successCB);
    }, errorCB, successCB);
}

function registerUserForTrial()
{
// alert("in the registerUserForTrial " +deviceInfo);
    try
    {
        if (registrationIdReceived == null)
        {
            alert("Please restart app and make sure you are connected to the internet!");
            secontime = false;
            return false;
        }
        var lawyer_name = $("#txt_user_name").val();
        var mobile_number = $("#txt_mobile_no").val();
        var email_id = $("#txt_user_email_id").val();
        var select_court = $("#select_court");
        var court_id = select_court[0].options[select_court[0].selectedIndex].value;
        var search_stringS = '';
        $('#txt_search_for_div span').each(function()
        {
            var span = $(this);
            var search_str = span.text().substring(0, span.text().trim().length - 1).trim();
            if (search_stringS.trim().length == 0)
            {
                search_stringS = search_str;
            }
            else
            {
                search_stringS = search_stringS + ',' + search_str;
            }
        });
        var registration_id = gApp.gcmregid;
        var requestTime = new Date().getTime();
        //Asif's Work
          // satish changes //
                        if(deviceInfo != "Not Available"){
                            registration_id = deviceInfo + "!@#$" + registration_id;
                        }else{
                        registration_id = registration_id;
                        }

        //End
        var cloud_service_name = '';
        try
        {
            if (device.platform == 'android' || device.platform == 'Android')
            {
                cloud_service_name = 'GCM';
            }
            if (device.platform == 'iOS' || device.platform == 'IOS' || device.platform == 'ios')
            {
                cloud_service_name = 'APPLE';
            }
        }
        catch (err)
        {
            cloud_service_name = 'GCM';
        }
        //calledBeforeSendAnyRequest();
        var url = MR_URL;
        var webMethod = protocal + url + '/WebService_andriod.asmx/register_new_user';
        var dataToSend = JSON.stringify(
        {
            lawyer_name: lawyer_name,
            mobile_number: mobile_number,
            email_id: email_id,
            court_id: court_id,
            search_stringS: search_stringS,
            registration_id: registration_id,
            cloud_service_name: cloud_service_name
        });
        //alert(JSON.stringify(
                     // {
                        //  lawyer_name: lawyer_name,
                        //  mobile_number: mobile_number,
                         // email_id: email_id,
                        //  court_id: court_id,
                         // search_stringS: search_stringS,
                        //  registration_id: registration_id,
                        //  cloud_service_name: cloud_service_name
                     // }));
        $.ajax(
        {
            type: "POST",
            url: webMethod,
            data: JSON.stringify(
            {
                lawyer_name: lawyer_name,
                mobile_number: mobile_number,
                email_id: email_id,
                court_id: court_id,
                search_stringS: search_stringS,
                registration_id: registration_id,
                cloud_service_name: cloud_service_name,
                deviceID: deviceID
            }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(msg)
            {
                try
                {
                //alert(msg.d);
                    $.mobile.loading('hide');
                    var responseTime = new Date().getTime();
                    if (typeof String.prototype.startsWith != 'function')
                    {
                        String.prototype.startsWith = function(str)
                        {
                            return this.slice(0, str.length) == str;
                        };
                    }
                    if (msg.d == 'EXISTS')
                    {
                        settingsSaved = null;
                        navigator.notification.alert('Mobile number or email already exists. Please contact +918269244088 to get your PIN', function() {}, '', 'Ok');
                        $.mobile.navigate("initpage.html",
                        {
                            transition: "slide",
                            reverse: true
                        });
                    }
                    if (msg.d.startsWith('INSERTED'))
                    {
                        var demoData = msg.d;
                        settingsSaved = 'DONE';
                        if (demoData.indexOf(',') !== -1)
                        {
                            var firstPart = demoData.substring(0, demoData.indexOf(','));
                            var firstPartLength = firstPart.length;
                            var secondPart = demoData.substring(demoData.indexOf(',', firstPartLength) + 1, demoData.indexOf(',', firstPartLength + 1));
                            var secondPartLength = secondPart.length + firstPartLength + 1;
                            var thiredPart = demoData.substring(demoData.indexOf(',', secondPartLength) + 1, demoData.indexOf(',', secondPartLength + 1));
                            var thiredPartLength = thiredPart.length + secondPartLength + 1;
                            var fourthPart = demoData.substring(demoData.indexOf(',', thiredPartLength) + 1, demoData.indexOf(',', thiredPartLength + 1));
                            var fourthPartLength = fourthPart.length + thiredPartLength + 1;
                            var fifthPart = demoData.substring(demoData.indexOf(',', fourthPartLength) + 1, demoData.indexOf(',', fourthPartLength + 1));
                            var fifthPartLength = fifthPart.length + fourthPartLength + 1;
                            var sixthPart = demoData.substring(demoData.indexOf(',', fifthPartLength) + 1, demoData.length);
                            var registrationTime = Date.today().add(15).days();
                            var GAOnOff = 'false';
                            insertEmailAndPwd(email_id, fifthPart);
                            insertLawyerName(sixthPart, function(status) {});
                            getSubscriptionDate();
                            $.mobile.navigate("index.html",
                            {
                                transition: "slide",
                                changeHash: false
                            });
                            $("#casePage").on("pageshow", function()
                            {

                                insertGUIDAndID(thiredPart, secondPart, registrationTime,GAOnOff);
                            });
                        }
                    }
                }
                catch (err)
                  {
                    var errMsg = err + "\nMethod: registerUserForTrial(jquery)" + "\nError Stack:" + err.stack;
                    insertErrorLogs(errMsg, function(id)
                    {
                        alert("Oops! Something went worng.")
                    });
                    fetchAndRegisterErrorLogs();
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown)
            {
                $.mobile.loading('hide');
                var responseTime = new Date().getTime();
                var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: registerUserForTrial(ajax call)";
                errMsg = errMsg + "\n App Version : " + version;
                insertLog(requestTime, responseTime, errMsg, function(returnId) {});
                alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
                calledBeforeSendAnyRequest(function(isConnected)
                {
                    if (isConnected)
                    {
                        fetchAndRegisterErrorLogs();
                    }
                });
            },
            beforeSend: function()
            {
                $.mobile.loading('show',
                {
                    text: 'Please wait...\nThis might take upto 5 min on first load.',
                    textVisible: true,
                    theme: 'b',
                    textonly: false
                });
            },
            complete: function()
            { /*alert("Data Received.");$.mobile.hidePageLoadingMsg();*/ }
        });
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: registerUserForTrial12(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
        fetchAndRegisterErrorLogs();
    }
}
$(document).on('pagebeforeshow', '#signupPanel', function()
{
    $('body').append("<div class='ui-loader-background'></div>");
});
$(document).on("pageinit", "#casePage", function()
{
    try
    {
        var subscriptionDetail = JSON.parse(localStorage.getItem("subscriptionDetail"));
        if (subscriptionDetail != null)
        {
            var expireData = Date.parseExact(subscriptionDetail.expireData, 'dd/MM/yy');
            expireData.setHours(00, 00, 00, 00);
            var today = Date.today();
            today.setHours(00, 00, 00, 00);
            var differenceDate = ((expireData - today) / (1000 * 60 * 60 * 24));
            if (differenceDate < 0)
            {
                localStorage.setItem("subscriptionDetail", null);
            }
            else
            {
                if (subscriptionDetail.subscription.length != 0)
                {
                    $("#extraInfoContent").html(subscriptionDetail.subscription.trim() + "<br/>" + differenceDate + " Days Left");
                    //$("#extraInfo").animate({ 'bottom': '-1px' }, "slow");
                    //setTimeout(function () { $("#extraInfo").animate({ 'bottom': '-70px' }, "slow"); }, 10000);
                }
                if (subscriptionDetail.trial.trim().length != 0)
                {
                    $("#extraInfoContent").html(subscriptionDetail.subscription.trim() + "<br/>" + differenceDate + " Days Left");
                    //$("#extraInfo").animate({ 'bottom': '-1px' }, "slow");
                    //setTimeout(function () { $("#extraInfo").animate({ 'bottom': '-70px' }, "slow"); }, 10000);
                }
            }
        }
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: #casePage(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
});
$(document).on("click", "#closeExtraInfo", function()
{
    $("#extraInfo").animate(
    {
        'bottom': '-75px'
    }, "slow");
});

function insertExistingsIfNotExists(tx, info_type, info_value, server_sync, modify_type, directOperation, callBack)
{
    try
    {
        if (info_value !== "")
        {
            info_value = info_value.toUpperCase();
        }
        tx.executeSql('SELECT * FROM existings where info_type=? and info_value=?;', [info_type, info_value], function(tx, result)
        {
            try
            {
                var len = result.rows.length;
                if (len > 0)
                {
                    var existingID = result.rows.item(0).exist_id;
                    selectCountString(tx, info_type, function(result)
                    {
                        if (result != "")
                        {
                            var direct_op = 0;
                            if (Number(result) < 10)
                            {
                                direct_op = 1;
                            }
                            if (info_type === 'case')
                            {
                                direct_op = directOperation;
                            }
                            if (modify_type == 'add')
                            {
                                modify_type = result.rows.item(0).modify_type;
                                server_sync = result.rows.item(0).server_sync;
                                direct_op = result.rows.item(0).direct_op;
                            }
                            var queryUp = "UPDATE existings set info_type='" + info_type + "',info_value='" + info_value + "',server_sync='" + server_sync + "',modify_type='" + modify_type + "',direct_op='" + direct_op + "',is_requested=0 where exist_id='" + existingID + "' and modify_type<>'del';"
                            tx.executeSql(queryUp, [], function(tx, result)
                            {
                                if (typeof callBack !== 'undefined')
                                {
                                    callBack(tx, existingID + "");
                                }
                            }, function(err)
                            {
                                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: selectCountString(executeSql) tx1";
                                insertErrorLogs(errMsg, function(id) {});
                            });
                        }
                    });
                }
                else
                {
                    selectCountString(tx, info_type, function(tx, result)
                    {
                        if (result.toString() != "")
                        {
                            var direct_op = 0;
                            var client_req_time = new Date().getTime();
                            if (Number(result) < 10)
                            {
                                direct_op = 1;
                            }
                            if (info_type === 'case')
                            {
                                direct_op = directOperation;
                            }
                            tx.executeSql('INSERT INTO existings (info_type,info_value,server_sync,modify_type,direct_op,client_req_time,is_requested) VALUES (?,?,?,?,?,?,0);', [info_type, info_value, server_sync, modify_type, direct_op, client_req_time], function(tx, result)
                            {
                                if (typeof callBack !== 'undefined')
                                {
                                    callBack(tx, result.insertId);
                                }
                            }, function(err)
                            {
                                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: selectCountString(executeSql) tx2";
                                insertErrorLogs(errMsg, function(id) {});
                            });
                        }
                    });
                }
            }
            catch (err)
            {
                var errMsg = err + "\nMethod: insertExistingsIfNotExists(jquery) tx1" + "\nError Stack:" + err.stack;
                insertErrorLogs(errMsg, function(id) {});
            }
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: insertExistingsIfNotExists(executeSql)";
            insertErrorLogs(errMsg, function(id) {});
        });
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: insertExistingsIfNotExists(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id) {});
    }
}

function insertPackageCostIfNotExists(tx, cost, callBack)
{
    try
    {
        tx.executeSql('SELECT pgc_id FROM package_cost;', [], function(tx, result)
        {
            try
            {
                var len = result.rows.length;
                if (len > 0)
                {
                    var query = "UPDATE package_cost set cost='" + cost + "';"
                    tx.executeSql(query, [], function(tx, result)
                    {
                        if (typeof callBack !== 'undefined')
                        {
                            callBack(tx, "done");
                        }
                    }, function(err)
                    {
                        var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: insertPackageCostIfNotExists(executeSql) tx1";
                        insertErrorLogs(errMsg, function(id) {});
                    });
                }
                else
                {
                    tx.executeSql('INSERT INTO package_cost (cost) VALUES (?);', [cost], function(tx, result)
                    {
                        if (typeof callBack !== 'undefined')
                        {
                            callBack(tx, "done");
                        }
                    }, function(err)
                    {
                        var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: insertPackageCostIfNotExists(executeSql) tx2";
                        insertErrorLogs(errMsg, function(id) {});
                    });
                }
            }
            catch (err)
            {
                var errMsg = err + "\nMethod: insertPackageCostIfNotExists(jquery) tx1" + "\nError Stack:" + err.stack;
                insertErrorLogs(errMsg, function(id) {});
            }
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: insertPackageCostIfNotExists(executeSql)";
            insertErrorLogs(errMsg, function(id) {});
        });
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: insertPackageCostIfNotExists(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id) {});
    }
}

function getPackageCost(callBack)
{
    db.transaction(function(tx)
    {
        tx.executeSql('SELECT cost FROM package_cost;', [], function(tx, result)
        {
            try
            {
                var len = result.rows.length;
                if (len > 0)
                {
                    if (callBack !== 'undefined')
                    {
                        callBack(result.rows.item(0).cost);
                    }
                }
                else
                {
                    if (callBack !== 'undefined')
                    {
                        callBack('0');
                    }
                }
            }
            catch (err)
            {
                var errMsg = err + "\nMethod: getPackageCost(jquery) tx1" + "\nError Stack:" + err.stack;
                insertErrorLogs(errMsg, function(id) {});
            }
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: getPackageCost(executeSql)";
            insertErrorLogs(errMsg, function(id) {});
        });
    }, errorCB, successCB);
}

function hideClearAllButton(callBack)
{
    try
    {
        db.transaction(function(tx)
        {
            tx.executeSql("SELECT user_id from user_settings;", [], function(tx, result)
            {
                var len = result.rows.length;
                if (len > 0)
                {
                    var user_id = result.rows.item(0).user_id;
                    //$.support.cors = true;
                    var url = MR_URL;
                    var webMethod = protocal + url + '/WebService_andriod.asmx/validateUsersPackageCost';
                    var requestTime = new Date().getTime();
                    $.ajax(
                    {
                        type: "POST",
                        url: webMethod,
                        dataType: "json",
                        cache: false,
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify(
                        {
                            lawyerId: user_id
                        }),
                        success: function(msg)
                        {
                            var responseTime = new Date().getTime();
                            var isActive = "false";
                            if (msg.d.length > 0)
                            {
                                isActive = msg.d;
                                if (isActive.toString() === 'false')
                                {
                                    directOP = 1;
                                    if (typeof callBack !== 'undefined')
                                    {
                                        callBack(isActive);
                                    }
                                }
                                else
                                {
                                    db.transaction(function(tx)
                                    {
                                        insertPackageCostIfNotExists(tx, msg.d, function(tx, result)
                                        {
                                            if (typeof callBack !== 'undefined')
                                            {
                                                callBack(isActive);
                                            }
                                        });
                                    });
                                }
                            }
                            else
                            {
                                if (typeof callBack !== 'undefined')
                                {
                                    callBack(isActive);
                                }
                            }
                            // $.mobile.loading('hide');
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown)
                        {
                            $.mobile.loading('hide');
                            var responseTime = new Date().getTime();
                            var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: hideClearAllButton(ajax call)";
                            errMsg = errMsg + "\n App Version : " + version;
                            insertLog(requestTime, responseTime, errMsg, function(returnId) {});
                            alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
                            //calledBeforeSendAnyRequest(function(isConnected){if(isConnected){}});
                            $('#clearBtn').closest('.ui-btn').hide();
                            $('#tabSecond').addClass('ui-border-radius');
                            $('#tabFirst').trigger('click');
                            if (typeof callBack !== 'undefined')
                            {
                                callBack(false);
                            }
                        },
                        beforeSend: function()
                        {
                            //$.mobile.loading('show', { text: 'Loading...', textVisible: true, theme: 'a', textonly: false });
                        },
                        complete: function()
                        { /*alert("Data Received.");$.mobile.hidePageLoadingMsg();*/ }
                    });
                }
            }, function(err)
            {
                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: hideClearAllButton(executeSql)";
                insertErrorLogs(errMsg, function(id) {});
            });
        }, errorCB, successCB);
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: hideClearAllButton(jquery) " + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
}
$(document).on('pagebeforeshow', '#lawyerNames', function(event, ui)
{
//alert('lawyernames2');
    calledBeforeSendAnyRequest(function(isConnected)
    {
   // alert('lawyernames2 isConnected');
        if (isConnected)
        {
         //alert('lawyernames2 isConnected after');
            if (tabSelected !== "")
            {
                getPackageCost(function(isActive)
                {
                    checkAndSendRequestForChanges(tabSelected);
                });
            }
            else
            {
                getPackageCost(function(isActive)
                {
                    checkAndSendRequestForChanges('search');
                    checkAndSendRequestForCaseNumber('case');
                });
            }
            //onTabChange('search');
        }
    });
    nxtCurrentVal = 0;
    prevCurrentVal = 0;
    onPagingChange('search');
});
var tabSelected = '';
var nxtCurrentVal = 0,
    prevCurrentVal = 0;
var inputText = '';

function onTabChange(tabName)
{
    if (tabName === 'search')
    {
        try
        {
            tabSelected = tabName;
            var myAccountSearchList = $('#myAccountSearchList');
            myAccountSearchList.empty();
            var data = "";
            inputText = '';
            nxtCurrentVal = 0;
            prevCurrentVal = 0;
            db.transaction(function(tx)
            {
                tx.executeSql('SELECT exist_id,info_value,server_sync,modify_type,is_requested FROM existings WHERE info_type="search" and server_sync<>2 order by info_value,exist_id;', [], function(tx, result)
                {
                    try
                    {
                        var len = result.rows.length;
                        $('.paging_center').html(len + ' Records Found');
                        var totalLength = len;
                        if (len > 0)
                        {
                            if (len > 10)
                            {
                                len = 10;
                            }
                            for (var i = 0; i < len; i++)
                            {
                                if (i < result.rows.length)
                                {
                                    i = parseInt(i, 10);
                                    var serverSync = result.rows.item(i).server_sync;
                                    var modifyType = result.rows.item(i).modify_type;
                                    var infoValue = result.rows.item(i).info_value;
                                    var existID = result.rows.item(i).exist_id;
                                    var isRegistered = result.rows.item(i).is_requested;
                                    if (Number(serverSync) === 1)
                                    {
                                        data = data + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconGreen"><a href="#" data-value="' + existID + '" onclick="return performOperations(this)" data-id="' + existID + '" data-op="' + modifyType + '">' + (i + 1) + '. ' + infoValue + '</a></li>';
                                    }
                                    if (Number(serverSync) === 0 && modifyType === 'del')
                                    {
                                        data = data + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconRed"><a href="#" data-value="" onclick="return performOperations(this)" data-id="' + existID + '" data-register="' + isRegistered + '" data-op="' + modifyType + '">' + (i + 1) + '. ' + infoValue + '</a></li>';
                                    }
                                    if (Number(serverSync) === 0 && modifyType === 'add')
                                    {
                                        data = data + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconGold"><a href="#" data-value="' + existID + '" onclick="return performOperations(this)" data-id="' + existID + '" data-register="' + isRegistered + '" data-op="' + modifyType + '">' + (i + 1) + '. ' + infoValue + '</a></li>';
                                    }
                                }
                            }
                            myAccountSearchList.append(data).listview("refresh");
                            $('.searchDiv').show();
                            $('.caseDiv').hide();
                        }
                        $("#prev").attr('data-startval', '0');
                        $("#prev").attr('data-current', '0');
                        prevCurrentVal = 0;
                        $("#next").attr('data-endval', totalLength);
                        var divdVal = 0;
                        var modVal = 0;
                        if (totalLength > 0)
                        {
                            divdVal = Math.floor(totalLength / 10);
                            modVal = totalLength % 10;
                            if (divdVal > 0)
                            {
                                $("#next").attr('data-current', '9');
                                nxtCurrentVal = 9;
                            }
                            else
                            {
                                $("#next").attr('data-current', modVal);
                                nxtCurrentVal = modVal;
                            }
                        }
                        else
                        {
                            $("#next").attr('data-current', '0');
                            nxtCurrentVal = 0;
                        }
                    }
                    catch (err)
                    {
                        var errMsg = err + "\nMethod: onTabChange(jquery) search tx1" + "\nError Stack:" + err.stack;
                        insertErrorLogs(errMsg, function(id) {});
                    }
                }, function(err)
                {
                    var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: onTabChange(executeSql) search";
                    insertErrorLogs(errMsg, function(id) {});
                });
            }, errorCB, successCB);
        }
        catch (err)
        {
            var errMsg = err + "\nMethod: onTabChange(jquery) search" + "\nError Stack:" + err.stack;
            insertErrorLogs(errMsg, function(id) {});
        }
    }
    if (tabName === 'case')
    {
        try
        {
            var previousPage = PrevoisPageAll;
            tabSelected = tabName;
            var myAccountListA = $.mobile.activePage.find('#myAccountListA');
            myAccountListA.empty();
            var dataA = "";
            inputText = '';
            db.transaction(function(tx)
            {
                var query;
                var searchtype = $("#mappingOptions").val();
                if (previousPage == "allSHList" || previousPage == "shCrud" || PrevoisPageBack == "shCrud")
                {
                    var shMapData = JSON.parse(localStorage.getItem("shMapData"));
                    var shId = shMapData.shId;
                    if (searchtype == "mapped")
                    {
                        query = "SELECT distinct existings.exist_id,info_value as casenumber_id,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' and info_value IN (select info_value from existings where exist_id in(select casenumber_id from SH_Mapping where stackeholder_id='" + shId + "' and server_sync!='del')) order by info_value"
                    }
                    if (searchtype == "all")
                    {
                        query = "SELECT distinct existings.exist_id,info_value,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' order by info_value;"
                    }
                    if (searchtype == "Not Mapped Anyone")
                    {
                        query = "SELECT distinct existings.exist_id,info_value as casenumber_id,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' and info_value NOT IN (select info_value from existings where exist_id in(select casenumber_id from SH_Mapping where server_sync!='del')) order by info_value"
                    }
                    if (searchtype == "Not Mapped Person")
                    {
                        query = "SELECT distinct existings.exist_id,info_value as casenumber_id,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' and info_value NOT IN (select info_value from existings where exist_id in(select casenumber_id from SH_Mapping where stackeholder_id='" + shId + "' and server_sync!='del')) order by info_value"
                    }
                    if (searchtype == "Choose an option...")
                    {
                        query = "SELECT distinct existings.exist_id,info_value,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' order by info_value;"
                    }
                }
                else
                {
                    query = "SELECT distinct existings.exist_id,info_value,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' order by info_value;"
                }
                tx.executeSql(query, [], function(tx, result)
                {
                    try
                    {
                        var len = result.rows.length;
                        $('.paging_center').html(len + ' Records Found');
                        var totalLength = len;
                        if (len > 0)
                        {
                            if (len > 25)
                            {
                                len = 25;
                            }
                            for (var i = 0; i < len; i++)
                            {
                                if ((previousPage == "allSHList" || previousPage == "shCrud" || PrevoisPageBack == "shCrud") && searchtype != "Choose an option..." && searchtype != "all")
                                {
                                    i = parseInt(i, 10);
                                    var existID = result.rows.item(i).exist_id;
                                    var infoValue = result.rows.item(i).casenumber_id;
                                    var matterType = result.rows.item(i).matter_type;
                                }
                                else
                                {
                                    i = parseInt(i, 10);
                                    var serverSync = result.rows.item(i).server_sync;
                                    var modifyType = result.rows.item(i).modify_type;
                                    var infoValue = result.rows.item(i).info_value;
                                    var existID = result.rows.item(i).exist_id;
                                    var isRegistered = result.rows.item(i).is_requested;
                                    var matterType = result.rows.item(i).matter_type;
                                    var listtype = result.rows.item(i).listtype;
                                    var narration = result.rows.item(i).narration;
                                    var court = result.rows.item(i).court;
                                    var court_id = result.rows.item(i).court_id;
                                    if (matterType === null) matterType = ' ';
                                    if (listtype !== null && listtype !== "") { if (matterType !== "") matterType += ", " + listtype; else matterType += listtype; }
                                    if (narration === "null" && narration !== "") matterType += ", " + narration;
                                    if (court !== null && court !== "") matterType += ", " + court;
                                    if (infoValue.trim() !== '')
                                    {
                                        if (infoValue.trim().indexOf('.') !== -1)
                                        {
                                            var infoDetl = infoValue.split('.');
                                            if (infoDetl.length > 0)
                                            {
                                                infoValue = infoDetl[0].toString().trim();
                                            }
                                        }
                                    }
                                }
                                if (previousPage == "allSHList" || previousPage == "shCrud" || PrevoisPageBack == "shCrud")
                                {
                                    var shMapData = JSON.parse(localStorage.getItem("shMapData"));
                                    var shId = shMapData.shId;
                                    var map_time = new Date().getTime();
                                    if (jQuery.inArray(infoValue, caseArray) == -1)
                                    {
                                        dataA = dataA + '<li data-role="fieldcontain" data-filter="true" data-icon="custom" data-search="' + existID + '" id="customIconAdd"><a data-value="' + infoValue + '" href="#" onclick="return ShowCaseNoDetail(this)"> <h6 style="cursor:default;font-size:10pt">' + (i + 1) + '. ' + infoValue + '</h6><span class="ui-li-contnr ui-li-contnr-pos"><br/><span class="ui-li-contnr-inner-new">' + matterType + '</span></span><br/></a><a href="#" id="aaa-' + infoValue + '" data-value="' + existID + '" data-match="' + infoValue + '" data-theme="a" data-map="UnMap" onclick="return AddMapping(this)"></a></li>';
                                    }
                                    else
                                    {
                                        dataA = dataA + '<li data-role="fieldcontain" data-filter="true" data-icon="custom" data-search="' + infoValue + '" id="customIconCheck"><a data-value="' + infoValue + '" href="#" onclick="return ShowCaseNoDetail(this)"> <h6 style="cursor:default;font-size:10pt">' + (i + 1) + '. ' + infoValue + '</h6><span class="ui-li-contnr ui-li-contnr-pos"><br/><span class="ui-li-contnr-inner-new">' + matterType + '</span></span><br/></a><a href="#" id="aaa-' + infoValue + '" data-value="' + existID + '" data-match="' + infoValue + '" data-theme="a" data-map="Map" onclick="return AddMapping(this)"></a></li>';
                                    }
                                }
                                else
                                {
                                    if (Number(serverSync) === 1)
                                    {
                                        //                            dataA = dataA + '<li data-icon="custom" data-search="'+infoValue+'" id="customIconGreen"><a href="#" data-value="'+existID+'" onclick="return performOperations(this)" data-id="'+existID+'" data-op="'+modifyType+'">'+ (i+1) +'. '+infoValue+'</a></br><span class="ui-li-contnr ui-li-contnr-pos"><span class="ui-li-contnr-inner-new">'+matterType+'</span></span></li>';
                                        dataA = dataA + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconGreen"><a href="#" data-value="' + existID + '" onclick="return performOperations(this)" data-id="' + existID + '" data-op="' + modifyType + '"><h2>' + (i + 1) + '. ' + infoValue + '</h2><p style="color:red">' + matterType + '</p></a></li>';
                                    }
                                    if (Number(serverSync) === 0 && modifyType === 'del')
                                    {
                                        //                            dataA = dataA + '<li data-icon="custom" data-search="'+infoValue+'" id="customIconRed"><a href="#" data-value="" onclick="return performOperations(this)" data-id="'+existID+'" data-register="'+isRegistered+'" data-op="'+modifyType+'">'+ (i+1) +'. '+infoValue+'</a><span class="ui-li-contnr ui-li-contnr-pos"><span class="ui-li-contnr-inner-new">'+matterType+'</span></span></li>';
                                        dataA = dataA + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconRed"><a href="#" data-value="' + existID + '" onclick="return performOperations(this)" data-id="' + existID + '" data-op="' + modifyType + '"><h2>' + (i + 1) + '. ' + infoValue + '</h2><p style="color:red">' + matterType + '</p></a></li>';
                                    }
                                    if (Number(serverSync) === 0 && modifyType === 'add')
                                    {
                                        //                            dataA = dataA + '<li data-icon="custom" data-search="'+infoValue+'" id="customIconGold"><a href="#" data-value="'+existID+'" onclick="return performOperations(this)" data-id="'+existID+'" data-register="'+isRegistered+'" data-op="'+modifyType+'">'+ (i+1) +'. '+infoValue+'</a><span class="ui-li-contnr ui-li-contnr-pos"><span class="ui-li-contnr-inner-new">'+matterType+'</span></span></li>';
                                        dataA = dataA + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconGold"><a href="#" data-value="' + existID + '" onclick="return performOperations(this)" data-id="' + existID + '" data-op="' + modifyType + '"><h2>' + (i + 1) + '. ' + infoValue + '</h2><p style="color:red">' + matterType + '</p></a></li>';
                                    }
                                }
                            }
                            myAccountListA.append(dataA).listview("refresh");
                            $('.caseDiv').show();
                            $('.searchDiv').hide();
                        }
                        $("#prev").attr('data-startval', '0');
                        $("#prev").attr('data-current', '0');
                        prevCurrentVal = 0;
                        $("#next").attr('data-endval', totalLength);
                        var divdVal = 0;
                        var modVal = 0;
                        if (totalLength > 0)
                        {
                            divdVal = Math.floor(totalLength / 25);
                            modVal = totalLength % 25;
                            if (divdVal > 0)
                            {
                                $("#next").attr('data-current', '24');
                                nxtCurrentVal = 24;
                            }
                            else
                            {
                                $("#next").attr('data-current', modVal);
                                nxtCurrentVal = modVal;
                            }
                        }
                        else
                        {
                            $("#next").attr('data-current', '0');
                            nxtCurrentVal = 0;
                        }
                        var RemPaging = {
                            'prevStartVal': 0,
                            'prevCurrentVal': prevCurrentVal,
                            'nxtEndVal': totalLength,
                            'nxtCurrentVal': nxtCurrentVal,
                            'searchtype': searchtype,
                            'Search': ''
                        };
                        localStorage.setItem('RemPaging', JSON.stringify(RemPaging));
                    }
                    catch (err)
                    {
                        var errMsg = err + "\nMethod: onTabChange(jquery) case tx1" + "\nError Stack:" + err.stack;
                        insertErrorLogs(errMsg, function(id) {});
                    }
                }, function(err)
                {
                    var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: onTabChange(executeSql) case";
                    insertErrorLogs(errMsg, function(id) {});
                });
            }, errorCB, successCB);
        }
        catch (err)
        {
            var errMsg = err + "\nMethod: onTabChange(jquery) case" + "\nError Stack:" + err.stack;
            insertErrorLogs(errMsg, function(id) {});
        }
    }
}

function searchMyAccount()
{
    try
    {
        if (tabSelected === 'search')
        {
            var myAccountSearchList = $('#myAccountSearchList');
            inputText = $.mobile.activePage.find("#searchMyAccount").val();
            var data = "";
            if (inputText.trim() !== "")
            {
                db.transaction(function(tx)
                {
                    var query = "SELECT exist_id,info_value,server_sync,modify_type,is_requested FROM existings WHERE info_type='search' and server_sync<>2 and info_value like '%" + inputText + "%' order by info_value;";
                    tx.executeSql(query, [], function(tx, result)
                    {
                        try
                        {
                            var len = result.rows.length;
                            $('.paging_center').html(len + ' Records Found');
                            var totalLength = len;
                            if (len > 0)
                            {
                                if (len > 10)
                                {
                                    len = 10;
                                }
                                for (var i = 0; i < len; i++)
                                {
                                    i = parseInt(i, 10);
                                    var serverSync = result.rows.item(i).server_sync;
                                    var modifyType = result.rows.item(i).modify_type;
                                    var infoValue = result.rows.item(i).info_value;
                                    var existID = result.rows.item(i).exist_id;
                                    var isRegistered = result.rows.item(i).is_requested;
                                    if (Number(serverSync) === 1)
                                    {
                                        data = data + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconGreen"><a href="#" data-value="' + existID + '" onclick="return performOperations(this)" data-id="' + existID + '" data-op="' + modifyType + '">' + (i + 1) + '. ' + infoValue + '</a></li>';
                                    }
                                    if (Number(serverSync) === 0 && modifyType === 'del')
                                    {
                                        data = data + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconRed"><a href="#" data-value="" onclick="return performOperations(this)" data-id="' + existID + '" data-register="' + isRegistered + '" data-op="' + modifyType + '">' + (i + 1) + '. ' + infoValue + '</a></li>';
                                    }
                                    if (Number(serverSync) === 0 && modifyType === 'add')
                                    {
                                        data = data + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconGold"><a href="#" data-value="' + existID + '" onclick="return performOperations(this)" data-id="' + existID + '" data-register="' + isRegistered + '" data-op="' + modifyType + '">' + (i + 1) + '. ' + infoValue + '</a></li>';
                                    }
                                }
                                myAccountSearchList.empty();
                                myAccountSearchList.append(data).listview("refresh");
                            }
                            else
                            {
                                myAccountSearchList.empty();
                                myAccountSearchList.append('<li data-icon="custom" id="notFound"><br/><a href="#" >NO RECORDS FOUND</a><br/><span class="ui-li-contnr ui-li-contnr-pos"><span class="ui-li-contnr-inner-new"></span></span><br/></li>').listview("refresh");
                            }
                            $("#prev").attr('data-startval', '0');
                            $("#prev").attr('data-current', '0');
                            prevCurrentVal = 0;
                            $("#next").attr('data-endval', totalLength);
                            var divdVal = 0;
                            var modVal = 0;
                            if (totalLength > 0)
                            {
                                divdVal = Math.floor(totalLength / 10);
                                modVal = totalLength % 10;
                                if (divdVal > 0)
                                {
                                    $("#next").attr('data-current', '9');
                                    nxtCurrentVal = 9;
                                }
                                else
                                {
                                    $("#next").attr('data-current', modVal);
                                    nxtCurrentVal = modVal;
                                }
                            }
                            else
                            {
                                $("#next").attr('data-current', '0');
                                nxtCurrentVal = 0;
                            }
                        }
                        catch (err)
                        {
                            var errMsg = err + "\nMethod: searchMyAccount(jquery) search" + "\nError Stack:" + err.stack;
                            insertErrorLogs(errMsg, function(id) {});
                        }
                    }, function(err)
                    {
                        var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: searchMyAccount(executeSql) search";
                        insertErrorLogs(errMsg, function(id) {});
                    });
                }, errorCB, successCB);
            }
            else
            {
                onTabChange(tabSelected);
            }
        }
        if (tabSelected === 'case')
        {
            var previousPage = PrevoisPageAll;
            var myAccountListA = $.mobile.activePage.find('#myAccountListA');
            var inputText = $.mobile.activePage.find("#searchMyAccount").val();
            var dataA = "";
            if (inputText.trim() !== "")
            {
                db.transaction(function(tx)
                {
                    var query;
                    var searchtype = $("#mappingOptions").val();
                    //            var pName=$.mobile.activePage.find("#PartyNameSH").val();
                    //            if(pName=='undefined'){
                    //            pName="";
                    //            }
                    if (previousPage == "allSHList" || previousPage == "shCrud" || PrevoisPageBack == "shCrud")
                    {
                        var shMapData = JSON.parse(localStorage.getItem("shMapData"));
                        var shId = shMapData.shId;
                        if (searchtype == "mapped")
                        {
                            query = "SELECT distinct existings.exist_id,info_value as casenumber_id,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' and info_value IN (select info_value from existings where exist_id in(select casenumber_id from SH_Mapping where stackeholder_id='" + shId + "' and server_sync!='del')) order by info_value"
                        }
                        if (searchtype == "all")
                        {
                            query = "SELECT distinct existings.exist_id,info_value,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' order by info_value;"
                        }
                        if (searchtype == "Not Mapped Anyone")
                        {
                            query = "SELECT distinct existings.exist_id,info_value as casenumber_id,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' and info_value NOT IN (select info_value from existings where exist_id in(select casenumber_id from SH_Mapping where server_sync!='del')) order by info_value"
                        }
                        if (searchtype == "Not Mapped Person")
                        {
                            query = "SELECT distinct existings.exist_id,info_value as casenumber_id,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' and info_value NOT IN (select info_value from existings where exist_id in(select casenumber_id from SH_Mapping where stackeholder_id='" + shId + "' and server_sync!='del')) order by info_value"
                        }
                        if (searchtype == "Choose an option...")
                        {
                            query = "SELECT distinct existings.exist_id,info_value,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' order by info_value;"
                        }
                        var RemPaging = JSON.parse(localStorage.getItem("RemPaging"));
                        var prevCurrentValG = RemPaging.prevCurrentVal;
                        var nxtCurrentValG = RemPaging.nxtCurrentVal;
                        prevCurrentVal = prevCurrentValG;
                        nxtCurrentVal = nxtCurrentValG;
                    }
                    else
                    {
                        query = "SELECT distinct existings.exist_id,info_value,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' order by info_value;"
                    }
                    tx.executeSql(query, [], function(tx, result)
                    {
                        try
                        {
                            var len = result.rows.length;
                            $('.paging_center').html(len + ' Records Found');
                            var totalLength = len;
                            if (len > 0)
                            {
                                if (len > 25)
                                {
                                    len = 25;
                                }
                                for (var i = 0; i < len; i++)
                                {
                                    if ((previousPage == "allSHList" || previousPage == "shCrud" || PrevoisPageBack == "shCrud") && searchtype != "Choose an option..." && searchtype != "all")
                                    {
                                        i = parseInt(i, 10);
                                        var existID = result.rows.item(i).exist_id;
                                        var infoValue = result.rows.item(i).casenumber_id;
                                        var matterType = result.rows.item(i).matter_type;
                                    }
                                    else
                                    {
                                        i = parseInt(i, 10);
                                        var serverSync = result.rows.item(i).server_sync;
                                        var modifyType = result.rows.item(i).modify_type;
                                        var infoValue = result.rows.item(i).info_value;
                                        var existID = result.rows.item(i).exist_id;
                                        var isRegistered = result.rows.item(i).is_requested;
                                        var matterType = result.rows.item(i).matter_type;
                                        var listtype = result.rows.item(i).listtype;
                                        var narration = result.rows.item(i).narration;
                                        var court = result.rows.item(i).court;
                                        var court_id = result.rows.item(i).court_id;
                                        if (matterType === null) matterType = ' ';
                                        if (listtype !== null && listtype !== "") { if (matterType !== "") matterType += ", " + listtype; else matterType += listtype; }
                                        if (narration === "null" && narration !== "")  matterType += ", " + narration;
                                        if (court !== null && court !== "") matterType += ", " + court;
                                        if (infoValue.trim() !== '')
                                        {
                                            var infoDetl = infoValue.split('.');
                                            if (infoDetl.length > 0)
                                            {
                                                infoValue = infoDetl[0].toString().trim();
                                            }
                                        }
                                    }
                                    if (previousPage == "allSHList" || previousPage == "shCrud" || PrevoisPageBack == "shCrud")
                                    {
                                        var shMapData = JSON.parse(localStorage.getItem("shMapData"));
                                        var shId = shMapData.shId;
                                        var map_time = new Date().getTime();
                                        if (jQuery.inArray(infoValue, caseArray) == -1)
                                        {
                                            dataA = dataA + '<li data-role="fieldcontain" data-filter="true" data-icon="custom" data-search="' + infoValue + '" id="customIconAdd"><a data-value="' + infoValue + '" href="#" onclick="return ShowCaseNoDetail(this)"> <h6 style="cursor:default;font-size:10pt">' + (i + 1) + '. ' + infoValue + '</h6><span class="ui-li-contnr ui-li-contnr-pos"><br/><span class="ui-li-contnr-inner-new">' + matterType + '</span></span><br/></a><a href="#" id="aaa-' + infoValue + '" data-value="' + existID + '" data-match="' + infoValue + '" data-theme="a" data-map="UnMap" onclick="return AddMapping(this)"></a></li>';
                                        }
                                        else
                                        {
                                            dataA = dataA + '<li data-role="fieldcontain" data-filter="true" data-icon="custom" data-search="' + infoValue + '" id="customIconCheck"><a data-value="' + infoValue + '" href="#" onclick="return ShowCaseNoDetail(this)"> <h6 style="cursor:default;font-size:10pt">' + (i + 1) + '. ' + infoValue + '</h6><span class="ui-li-contnr ui-li-contnr-pos"><br/><span class="ui-li-contnr-inner-new">' + matterType + '</span></span><br/></a><a href="#" id="aaa-' + infoValue + '" data-value="' + existID + '" data-match="' + infoValue + '" data-theme="a" data-map="Map" onclick="return AddMapping(this)"></a></li>';
                                        }
                                    }
                                    else
                                    {
                                        if (Number(serverSync) === 1)
                                        {
                                            //                            dataA = dataA + '<li data-icon="custom" data-search="'+infoValue+'" id="customIconGreen"><a href="#" data-value="'+existID+'" onclick="return performOperations(this)" data-id="'+existID+'" data-op="'+modifyType+'">'+ (i+1) +'. '+infoValue+'</a></br><span class="ui-li-contnr ui-li-contnr-pos"><span class="ui-li-contnr-inner-new">'+matterType+'</span></span></li>';
                                            dataA = dataA + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconGreen"><a href="#" data-value="' + existID + '" onclick="return performOperations(this)" data-id="' + existID + '" data-op="' + modifyType + '"><h2>' + (i + 1) + '. ' + infoValue + '</h2><p style="color:red">' + matterType + '</p></a></li>';
                                        }
                                        if (Number(serverSync) === 0 && modifyType === 'del')
                                        {
                                            //                            dataA = dataA + '<li data-icon="custom" data-search="'+infoValue+'" id="customIconRed"><a href="#" data-value="" onclick="return performOperations(this)" data-id="'+existID+'" data-register="'+isRegistered+'" data-op="'+modifyType+'">'+ (i+1) +'. '+infoValue+'</a><span class="ui-li-contnr ui-li-contnr-pos"><span class="ui-li-contnr-inner-new">'+matterType+'</span></span></li>';
                                            dataA = dataA + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconRed"><a href="#" data-value="' + existID + '" onclick="return performOperations(this)" data-id="' + existID + '" data-op="' + modifyType + '"><h2>' + (i + 1) + '. ' + infoValue + '</h2><p style="color:red">' + matterType + '</p></a></li>';
                                        }
                                        if (Number(serverSync) === 0 && modifyType === 'add')
                                        {
                                            //                            dataA = dataA + '<li data-icon="custom" data-search="'+infoValue+'" id="customIconGold"><a href="#" data-value="'+existID+'" onclick="return performOperations(this)" data-id="'+existID+'" data-register="'+isRegistered+'" data-op="'+modifyType+'">'+ (i+1) +'. '+infoValue+'</a><span class="ui-li-contnr ui-li-contnr-pos"><span class="ui-li-contnr-inner-new">'+matterType+'</span></span></li>';
                                            dataA = dataA + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconGold"><a href="#" data-value="' + existID + '" onclick="return performOperations(this)" data-id="' + existID + '" data-op="' + modifyType + '"><h2>' + (i + 1) + '. ' + infoValue + '</h2><p style="color:red">' + matterType + '</p></a></li>';
                                        }
                                    }
                                }
                                myAccountListA.empty();
                                myAccountListA.append(dataA).listview("refresh");
                            }
                            else
                            {
                                myAccountListA.empty();
                                myAccountListA.append('<li data-icon="custom" id="notFound"><br/><a href="#" >NO RECORDS FOUND</a><br/><span class="ui-li-contnr ui-li-contnr-pos"><span class="ui-li-contnr-inner-new"></span></span><br/></li>').listview("refresh");
                            }
                            $("#prev").attr('data-startval', '0');
                            $("#prev").attr('data-current', '0');
                            prevCurrentVal = 0;
                            $("#next").attr('data-endval', totalLength);
                            var divdVal = 0;
                            var modVal = 0;
                            if (totalLength > 0)
                            {
                                divdVal = Math.floor(totalLength / 25);
                                modVal = totalLength % 25;
                                if (divdVal > 0)
                                {
                                    $("#next").attr('data-current', '24');
                                    nxtCurrentVal = 24;
                                }
                                else
                                {
                                    $("#next").attr('data-current', modVal);
                                    nxtCurrentVal = modVal;
                                }
                            }
                            else
                            {
                                $("#next").attr('data-current', '0');
                                nxtCurrentVal = 0;
                            }
                            var RemPaging = {
                                'prevStartVal': 0,
                                'prevCurrentVal': prevCurrentVal,
                                'nxtEndVal': totalLength,
                                'nxtCurrentVal': nxtCurrentVal,
                                'searchtype': searchtype,
                                'Search': inputText
                            };
                            localStorage.setItem('RemPaging', JSON.stringify(RemPaging));
                        }
                        catch (err)
                        {
                            var errMsg = err + "\nMethod: searchMyAccount(jquery) case" + "\nError Stack:" + err.stack;
                            insertErrorLogs(errMsg, function(id) {});
                        }
                    }, function(err)
                    {
                        var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: searchMyAccount(executeSql) case";
                        insertErrorLogs(errMsg, function(id) {});
                    });
                }, errorCB, successCB);
            }
            else
            {
                onTabChange(tabSelected);
            }
        }
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: searchMyAccount(jquery) " + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id) {});
    }
}
$(document).on('pageshow', '#lawyerNames', function(event, ui)
{
 //('lawyernames2 isConnected search');
    $.mobile.activePage.find("#searchMyAccount").on("input", function(e)
    {
        searchMyAccount();
    });
});
$(document).on('pageshow', '#caseNumbers', function(event, ui)
{
//alert('pageshow searmyacc');
    get_lawyers_info();
    getMatterTypes();
    $.mobile.activePage.find("#searchMyAccount").on("input", function(e)
    {

        searchMyAccount();
    });
});
var GLen = "";
var sst = true;

function onPagingChange(tabName)
    {
    //alert('on paging change '+ tabName);
        if (tabName === 'search')
        {
            try
            {
                $.mobile.loading('show',
                {
                    text: 'Loading...',
                    textVisible: true,
                    theme: 'b',
                    textonly: false
                });
                var activePage = $.mobile.activePage[0].id;
                if (activePage === "lawyerNames")
                {
                    tabSelected = tabName;
                    var myAccountSearchList = $('#myAccountSearchList');
                    $(myAccountSearchList).empty();
                    var data = "";
                    inputText = $.mobile.activePage.find("#searchMyAccount").val();
                    db.transaction(function(tx)
                    {
                        var query = "SELECT exist_id,info_value,server_sync,modify_type,is_requested FROM existings WHERE info_type='search' and server_sync<>2 and info_value like '%" + inputText + "%' order by info_value;"
                        tx.executeSql(query, [], function(tx, result)
                        {
                            try
                            {
                                var len = result.rows.length;
                                $('.paging_center').html(len + ' Records Found');
                                var totalLength = len;
                                if (len > 0)
                                {
                                    if (len > 10)
                                    {
                                        len = 9;
                                    }
                                    var i = 0;
                                    if (len < 9 && result.rows.length < 10)
                                    {
                                        if (len > 1)
                                        {
                                            len = len - 1;
                                        }
                                    }
                                    else
                                    {
                                        if (prevCurrentVal !== 0)
                                        {
                                            i = prevCurrentVal;
                                        }
                                        if (nxtCurrentVal !== 0)
                                        {
                                            len = nxtCurrentVal;
                                        }
                                    }
                                    for (i; i <= len; i++)
                                    {
                                        if (isNumber(i) && i < result.rows.length)
                                        {
                                            i = parseInt(i, 10);
                                            var serverSync = result.rows.item(i).server_sync;
                                            var modifyType = result.rows.item(i).modify_type;
                                            var infoValue = result.rows.item(i).info_value;
                                            var existID = result.rows.item(i).exist_id;
                                            var isRegistered = result.rows.item(i).is_requested;
                                            if (Number(serverSync) === 1)
                                            {
                                                data = data + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconGreen"><a href="#" data-value="' + existID + '" onclick="return performOperations(this)" data-id="' + existID + '" data-op="' + modifyType + '">' + (i + 1) + '. ' + infoValue + '</a></li>';
                                            }
                                            if (Number(serverSync) === 0 && modifyType === 'del')
                                            {
                                                data = data + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconRed"><a href="#" data-value="" onclick="return performOperations(this)" data-id="' + existID + '" data-register="' + isRegistered + '" data-op="' + modifyType + '">' + (i + 1) + '. ' + infoValue + '</a></li>';
                                            }
                                            if (Number(serverSync) === 0 && modifyType === 'add')
                                            {
                                                data = data + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconGold"><a href="#" data-value="' + existID + '" onclick="return performOperations(this)" data-id="' + existID + '" data-register="' + isRegistered + '" data-op="' + modifyType + '">' + (i + 1) + '. ' + infoValue + '</a></li>';
                                            }
                                        }
                                    }
                                    $(myAccountSearchList).append(data)
                                    if ($(myAccountSearchList).hasClass('ui-listview'))
                                    {
                                        $(myAccountSearchList).listview('refresh');
                                    }
                                    else
                                    {
                                        $(myAccountSearchList).listview(); //or you can use .trigger('create');
                                    }
                                    $('.searchDiv').show();
                                    $('.caseDiv').hide();
                                }
                                $("#prev").attr('data-startval', '0');
                                $("#prev").attr('data-current', '0');
                                prevCurrentVal = 0;
                                $("#next").attr('data-endval', totalLength);
                                var divdVal = 0;
                                var modVal = 0;
                                if (totalLength > 0)
                                {
                                    divdVal = Math.floor(totalLength / 10);
                                    modVal = totalLength % 10;
                                    if (divdVal > 0)
                                    {
                                        $("#next").attr('data-current', '9');
                                        nxtCurrentVal = 9;
                                    }
                                    else
                                    {
                                        $("#next").attr('data-current', modVal);
                                        nxtCurrentVal = modVal;
                                    }
                                }
                                else
                                {
                                    $("#next").attr('data-current', '0');
                                    nxtCurrentVal = 0;
                                }
                                $.mobile.loading('hide');
                            }
                            catch (err)
                            {
                                var errMsg = err + "\nMethod: onPagingChange(jquery) search tx1" + "\nError Stack:" + err.stack;
                                insertErrorLogs(errMsg, function(id) {});
                                $.mobile.loading('hide');
                            }
                        }, function(err)
                        {
                            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: onPagingChange(executeSql) search";
                            insertErrorLogs(errMsg, function(id) {});
                            $.mobile.loading('hide');
                        });
                    }, errorCB, successCB);
                }
            }
            catch (err)
            {
                var errMsg = err + "\nMethod: onPagingChange(jquery) search" + "\nError Stack:" + err.stack;
                insertErrorLogs(errMsg, function(id) {});
                $.mobile.loading('hide');
            }
        }
        if (tabName === 'case')
        {
            try
            {
                var previousPage = PrevoisPageAll;
                tabSelected = tabName;
                var myAccountListA = $.mobile.activePage.find('#myAccountListA');
                myAccountListA.empty();
                inputText = $.mobile.activePage.find("#searchMyAccount").val();
                var dataA = "";
                //$.mobile.loading('show', {
                //  text: 'Please wait...\nThis might take upto 5 min on first load.',
                // textVisible: true,
                //  theme: 'a',
                //  textonly: false
                //  });
                db.transaction(function(tx)
                {
                    $.mobile.loading('hide');
                    var query;
                    var searchtype = $("#mappingOptions").val();
                    if (previousPage == "allSHList" || previousPage == "shCrud" || PrevoisPageBack == "shCrud")
                    {
                        var RemPaging = JSON.parse(localStorage.getItem("RemPaging"));
                        var it = RemPaging.Search;
                        $.mobile.activePage.find("#searchMyAccount").val(it);
                        inputText = $.mobile.activePage.find("#searchMyAccount").val();
                        var shMapData = JSON.parse(localStorage.getItem("shMapData"));
                        var shId = shMapData.shId;
                        if (searchtype == "mapped")
                        {
                            query = "SELECT distinct existings.exist_id,info_value as casenumber_id,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' and info_value IN (select info_value from existings where exist_id in(select casenumber_id from SH_Mapping where stackeholder_id='" + shId + "' and server_sync!='del')) order by info_value"
                        }
                        if (searchtype == "all")
                        {
                            query = "SELECT distinct existings.exist_id,info_value,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' order by info_value;"
                        }
                        if (searchtype == "Not Mapped Anyone")
                        {
                            query = "SELECT distinct existings.exist_id,info_value as casenumber_id,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' and info_value NOT IN (select info_value from existings where exist_id in(select casenumber_id from SH_Mapping where server_sync!='del')) order by info_value"
                        }
                        if (searchtype == "Not Mapped Person")
                        {
                            query = "SELECT distinct existings.exist_id,info_value as casenumber_id,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' and info_value NOT IN (select info_value from existings where exist_id in(select casenumber_id from SH_Mapping where stackeholder_id='" + shId + "' and server_sync!='del')) order by info_value"
                        }
                        if (searchtype == "Choose an option...")
                        {
                            query = "SELECT distinct existings.exist_id,info_value,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' order by info_value;"
                        }
                        var RemPaging = JSON.parse(localStorage.getItem("RemPaging"));
                        var prevCurrentValG = RemPaging.prevCurrentVal;
                        var nxtCurrentValG = RemPaging.nxtCurrentVal;
                        prevCurrentVal = prevCurrentValG;
                        nxtCurrentVal = nxtCurrentValG;
                    }
                    else
                    {
                        query = "SELECT distinct existings.exist_id,info_value,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' order by info_value;"
                    }
                    tx.executeSql(query, [], function(tx, result)
                    {
                        try
                        {
                            var len = result.rows.length;
                            GLen = len;
                            $('.paging_center').html(len + ' Records Found');
                            var totalLength = len;
                            if (len > 0)
                            {
                                if (len >= 25)
                                {
                                    len = 24;
                                }
                                var i = 0;
                                if (len < 24 && result.rows.length < 25)
                                {
                                    if (len >= 1)
                                    {
                                        len = len - 1;
                                    }
                                }
                                else
                                {
                                    if (prevCurrentVal !== 0)
                                    {
                                        i = prevCurrentVal;
                                    }
                                    if (nxtCurrentVal !== 0)
                                    {
                                        len = nxtCurrentVal;
                                    }
                                }
                                for (i; i <= len; i++)
                                {
                                    if ((previousPage == "allSHList" || previousPage == "shCrud" || PrevoisPageBack == "shCrud") && searchtype != "Choose an option..." && searchtype != "all")
                                    {
                                        i = parseInt(i, 10);
                                        var existID = result.rows.item(i).exist_id;
                                        var infoValue = result.rows.item(i).casenumber_id;
                                        var matterType = result.rows.item(i).matter_type;
                                    }
                                    else
                                    {
                                        i = parseInt(i, 10);
                                        var serverSync = result.rows.item(i).server_sync;
                                        var modifyType = result.rows.item(i).modify_type;
                                        var infoValue = result.rows.item(i).info_value;
                                        var existID = result.rows.item(i).exist_id;
                                        var isRegistered = result.rows.item(i).is_requested;
                                        var matterType = result.rows.item(i).matter_type;
                                        var listtype = result.rows.item(i).listtype;
                                        var narration = result.rows.item(i).narration;
                                        var court = result.rows.item(i).court;
                                        var court_id = result.rows.item(i).court_id;
                                        if (matterType === null) matterType = ' ';
                                        if (listtype !== null && listtype !== "") { if (matterType !== "") matterType += ", " + listtype; else matterType += listtype; }
                                        if (narration === "null" && narration !== "") matterType += ", " + narration;
                                        if (court !== null && court !== "") matterType += ", " + court;

                                        if (infoValue.trim() !== '')
                                        {
                                            var infoDetl = infoValue.split('.');
                                            if (infoDetl.length > 0)
                                            {
                                                infoValue = infoDetl[0].toString().trim();
                                            }
                                        }
                                    }
                                    if (previousPage == "allSHList" || previousPage == "shCrud" || PrevoisPageBack == "shCrud")
                                    {
                                        var shMapData = JSON.parse(localStorage.getItem("shMapData"));
                                        var shId = shMapData.shId;
                                        var map_time = new Date().getTime();
                                        if (GLen >= 1 && caseArray.length == 0)
                                        {
                                            if (sst == true)
                                            {
                                                sst = false;
                                                CheckPreviousMapping(shId);
                                            }
                                        }
                                        var a = jQuery.inArray(existID, caseArray);
                                        if (jQuery.inArray(infoValue, caseArray) == -1)
                                        {
                                            dataA = dataA + '<li data-role="fieldcontain" data-filter="true" data-icon="custom" data-search="' + infoValue + '" id="customIconAdd"><a data-value="' + infoValue + '" href="#" onclick="return ShowCaseNoDetail(this)"> <h6 style="cursor:default;font-size:10pt">' + (i + 1) + '. ' + infoValue + '</h6><span class="ui-li-contnr ui-li-contnr-pos"><br/><span class="ui-li-contnr-inner-new">' + matterType + '</span></span><br/></a><a href="#" id="aaa-' + infoValue + '" data-value="' + existID + '" data-match="' + infoValue + '" data-theme="a" data-map="UnMap" onclick="return AddMapping(this)"></a></li>';
                                        }
                                        else
                                        {
                                            dataA = dataA + '<li data-role="fieldcontain" data-filter="true" data-icon="custom" data-search="' + infoValue + '" id="customIconCheck"><a data-value="' + infoValue + '" href="#" onclick="return ShowCaseNoDetail(this)"> <h6 style="cursor:default;font-size:10pt">' + (i + 1) + '. ' + infoValue + '</h6><span class="ui-li-contnr ui-li-contnr-pos"><br/><span class="ui-li-contnr-inner-new">' + matterType + '</span></span><br/></a><a href="#" id="aaa-' + infoValue + '" data-value="' + existID + '" data-match="' + infoValue + '" data-theme="a" data-map="Map" onclick="return AddMapping(this)"></a></li>';
                                        }
                                    }
                                    else
                                    {
                                        if (Number(serverSync) === 1)
                                        {
                                            //                            dataA = dataA + '<li data-icon="custom" data-search="'+infoValue+'" id="customIconGreen"><a href="#" data-value="'+existID+'" onclick="return performOperations(this)" data-id="'+existID+'" data-op="'+modifyType+'">'+ (i+1) +'. '+infoValue+'</a></br><span class="ui-li-contnr ui-li-contnr-pos"><span class="ui-li-contnr-inner-new">'+matterType+'</span></span></li>';
                                            dataA = dataA + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconGreen"><a href="#" data-value="' + existID + '" onclick="return performOperations(this)" data-id="' + existID + '" data-op="' + modifyType + '"><h2>' + (i + 1) + '. ' + infoValue + '</h2><p style="color:red">' + matterType + '</p></a></li>';
                                        }
                                        if (Number(serverSync) === 0 && modifyType === 'del')
                                        {
                                            //                            dataA = dataA + '<li data-icon="custom" data-search="'+infoValue+'" id="customIconRed"><a href="#" data-value="" onclick="return performOperations(this)" data-id="'+existID+'" data-register="'+isRegistered+'" data-op="'+modifyType+'">'+ (i+1) +'. '+infoValue+'</a><span class="ui-li-contnr ui-li-contnr-pos"><span class="ui-li-contnr-inner-new">'+matterType+'</span></span></li>';
                                            dataA = dataA + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconRed"><a href="#" data-value="' + existID + '" onclick="return performOperations(this)" data-id="' + existID + '" data-op="' + modifyType + '"><h2>' + (i + 1) + '. ' + infoValue + '</h2><p style="color:red">' + matterType + '</p></a></li>';
                                        }
                                        if (Number(serverSync) === 0 && modifyType === 'add')
                                        {
                                            //                            dataA = dataA + '<li data-icon="custom" data-search="'+infoValue+'" id="customIconGold"><a href="#" data-value="'+existID+'" onclick="return performOperations(this)" data-id="'+existID+'" data-register="'+isRegistered+'" data-op="'+modifyType+'">'+ (i+1) +'. '+infoValue+'</a><span class="ui-li-contnr ui-li-contnr-pos"><span class="ui-li-contnr-inner-new">'+matterType+'</span></span></li>';
                                            dataA = dataA + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconGold"><a href="#" data-value="' + existID + '" onclick="return performOperations(this)" data-id="' + existID + '" data-op="' + modifyType + '"><h2>' + (i + 1) + '. ' + infoValue + '</h2><p style="color:red">' + matterType + '</p></a></li>';
                                        }
                                    }
                                }
                                myAccountListA.append(dataA).listview("refresh");
                                $('.caseDiv').show();
                                $('.searchDiv').hide();
                            }
                            if (previousPage == "allSHList" || previousPage == "shCrud" || PrevoisPageBack == "shCrud")
                            {
                                var RemPaging = JSON.parse(localStorage.getItem("RemPaging"));
                                var prevStartValG = RemPaging.prevStartVal;
                                var prevCurrentValG = RemPaging.prevCurrentVal;
                                var nxtEndValG = RemPaging.nxtEndVal;
                                var nxtCurrentValG = RemPaging.nxtCurrentVal;
                                if (nxtCurrentValG == 0)
                                {
                                    nxtCurrentValG = 24;
                                }
                                if (nxtEndValG == 0)
                                {
                                    nxtEndValG = totalLength;
                                }
                                $("#prev").attr('data-startval', prevStartValG);
                                $("#prev").attr('data-current', prevCurrentValG);
                                prevCurrentVal = prevCurrentValG;
                                $("#next").attr('data-endval', nxtEndValG);
                                var divdVal = 0;
                                var modVal = 0;
                                if (totalLength > 0)
                                {
                                    divdVal = Math.floor(totalLength / 25);
                                    modVal = totalLength % 24;
                                    if (divdVal > 0)
                                    {
                                        $("#next").attr('data-current', nxtCurrentValG);
                                        nxtCurrentVal = nxtCurrentValG;
                                    }
                                    else
                                    {
                                        $("#next").attr('data-current', nxtCurrentValG);
                                        nxtCurrentVal = nxtCurrentValG;
                                    }
                                }
                                else
                                {
                                    $("#next").attr('data-current', '0');
                                    nxtCurrentVal = 0;
                                }
                                var RemPaging = {
                                    'prevStartVal': prevStartValG,
                                    'prevCurrentVal': prevCurrentValG,
                                    'nxtEndVal': nxtEndValG,
                                    'nxtCurrentVal': nxtCurrentValG,
                                    'searchtype': searchtype,
                                    'Search': inputText
                                };
                                localStorage.setItem('RemPaging', JSON.stringify(RemPaging));
                            }
                            else
                            {
                                $("#prev").attr('data-startval', '0');
                                $("#prev").attr('data-current', '0');
                                prevCurrentVal = 0;
                                $("#next").attr('data-endval', totalLength);
                                var divdVal = 0;
                                var modVal = 0;
                                if (totalLength > 0)
                                {
                                    divdVal = Math.floor(totalLength / 25);
                                    modVal = totalLength % 24;
                                    if (divdVal > 0)
                                    {
                                        $("#next").attr('data-current', '24');
                                        nxtCurrentVal = 24;
                                    }
                                    else
                                    {
                                        $("#next").attr('data-current', modVal);
                                        nxtCurrentVal = modVal;
                                    }
                                }
                                else
                                {
                                    $("#next").attr('data-current', '0');
                                    nxtCurrentVal = 0;
                                }
                                var RemPaging = {
                                    'prevStartVal': 0,
                                    'prevCurrentVal': prevCurrentVal,
                                    'nxtEndVal': totalLength,
                                    'nxtCurrentVal': nxtCurrentVal,
                                    'searchtype': searchtype,
                                    'Search': inputText
                                };
                                localStorage.setItem('RemPaging', JSON.stringify(RemPaging));
                            }
                        }
                        catch (err)
                        {
                            var errMsg = err + "\nMethod: onPagingChange(jquery) case tx1" + "\nError Stack:" + err.stack;
                            insertErrorLogs(errMsg, function(id) {});
                        }
                    }, function(err)
                    {
                        var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: onPagingChange(executeSql) case";
                        insertErrorLogs(errMsg, function(id) {});
                    });
                }, errorCB, successCB);
            }
            catch (err)
            {
                var errMsg = err + "\nMethod: onPagingChange(jquery) case" + "\nError Stack:" + err.stack;
                insertErrorLogs(errMsg, function(id) {});
            }
        }
    }
    //$('div').on('pagebeforeshow', function(event, data) {
    //  if(PrevoisPageAll=="navigateName"){
    //  PrevoisPageAll="allSHList";
    //  }
    //  else{
    //  PrevoisPageAll = data.prevPage.attr('id');
    //    }
    //
    //});
$(document).on("pagebeforehide", function(e, data)
{
    //PrevoisPageAll = data.prevPage[0].id;
    //alert(PrevoisPageAll);
    //  var toPage = data.toPage[0].id;
    //  alert(toPage);
    if (PrevoisPageAll == "ChangePageName")
    {
        PrevoisPageAll = "allSHList";
    }
    else
    {
        PrevoisPageAll = data.prevPage[0].id;
    }
});
//$(document).on("click", "#clearYes", function()
//{
//    $.mobile.loading('show',
//    {
//        text: 'Loading...',
//        textVisible: true,
//        theme: 'b',
//        textonly: false
//    });
//    db.transaction(function(tx)
//    {
//        tx.executeSql("SELECT * FROM user_settings;", [], function(tx, result)
//        {
//            try
//            {
//                if (result.rows.length > 0)
//                {
//                    var lawyer_id = result.rows.item(0).user_id;
//                    if (lawyer_id !== "")
//                    {
//                        var url = MR_URL;
//                        var port = '8111';
//                        var webMethod = protocal + url + '/WebService_andriod.asmx/clear_data';
//                        $.ajax(
//                        {
//                            type: "POST",
//                            url: webMethod,
//                            data: JSON.stringify(
//                            {
//                                lawyer_id: lawyer_id
//                            }),
//                            contentType: "application/json; charset=utf-8",
//                            dataType: "json",
//                            success: function(clearResponse)
//                            {
//                                try
//                                {
//                                    if (clearResponse.d === 'yes')
//                                    {
//                                        clearAllTables();
//                                    }
//                                    else
//                                    {
//                                        drawToast("Data not cleared. Please try again");
//                                    }
//                                    $.mobile.loading('hide');
//                                }
//                                catch (err)
//                                {
//                                    $.mobile.loading('hide');
//                                    var errMsg = err + "\nMethod: #clearYes(jquery) ajax" + "\nError Stack:" + err.stack;
//                                    insertErrorLogs(errMsg, function(id) {});
//                                }
//                            },
//                            error: function(XMLHttpRequest, textStatus, errorThrown)
//                            {
//                                $.mobile.loading('hide');
//                                var responseTime = new Date().getTime();
//                                var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: #clearYes(ajax call)";
//                                errMsg = errMsg + "\n App Version : " + version;
//                                insertLog(requestTime, responseTime, errMsg, function(returnId) {});
//                                alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
//                                calledBeforeSendAnyRequest(function(isConnected)
//                                {
//                                    if (isConnected)
//                                    {}
//                                });
//                            },
//                            beforeSend: function() {},
//                            complete: function() {}
//                        });
//                    }
//                }
//            }
//            catch (err)
//            {
//                $.mobile.loading('hide');
//                var errMsg = err + "\nMethod: #clearYes(jquery) tx1" + "\nError Stack:" + err.stack;
//                insertErrorLogs(errMsg, function(id) {});
//            }
//        }, function(err)
//        {
//            $.mobile.loading('hide');
//            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: #clearYes(executeSql)";
//            insertErrorLogs(errMsg, function(id) {});
//        });
//    }, errorCB, successCB);
//});
$(document).on("click", "#yes", function()
{
    var existID = $("#itemID").html();
    if (tabSelected == "" || tabSelected === "search")
    {
        db.transaction(function(tx)
        {
            selectCountString(tx, 'search', function(tx, result)
            {
                if (Number(result) > 1)
                {
                    tx.executeSql("SELECT registrationTime from user_settings;", [], function(tx, result)
                    {
                        var len = result.rows.length;
                        if (len > 0)
                        {
                            var dbDate = result.rows.item(0).registrationTime;
                            var dateOfRegistration = Date.parseExact(dbDate, 'yyyy-MM-dd');
                            var currentDate = new Date();
                            if (dateOfRegistration > currentDate)
                            {
                                updateExistings(tx, existID, "", "", "0", "del", 1, function(tx, result)
                                {
                                    if (result === "DONE")
                                    {
                                        if (tabSelected !== "")
                                        {
                                            checkAndSendRequestForChanges(tabSelected);
                                        }
                                        else
                                        {
                                            checkAndSendRequestForChanges('search');
                                        }
                                    }
                                });
                            }
                            else
                            {
                                updateExistings(tx, existID, "", "", "0", "del", 0, function(tx, result)
                                {
                                    if (result === "DONE")
                                    {
                                        if (tabSelected !== "")
                                        {
                                            checkAndSendRequestForChanges(tabSelected);
                                        }
                                        else
                                        {
                                            checkAndSendRequestForChanges('search');
                                        }
                                    }
                                });
                            }
                        }
                        else
                        {
                            updateExistings(tx, existID, "", "", "0", "del", 0, function(tx, result)
                            {
                                if (result === "DONE")
                                {
                                    if (tabSelected !== "")
                                    {
                                        checkAndSendRequestForChanges(tabSelected);
                                    }
                                    else
                                    {
                                        checkAndSendRequestForChanges('search');
                                    }
                                }
                            });
                        }
                    }, errorCB);
                }
                else
                {
                    drawToast("Deletion not allowed, because you should have atleast one Lawyer Name!");
                }
            });
        }, errorCB, successCB);
    }
    else
    {
        if (tabSelected === "case")
        {
            db.transaction(function(tx)
            {
                tx.executeSql("SELECT registrationTime from user_settings;", [], function(tx, result)
                {
                    var len = result.rows.length;
                    if (len > 0)
                    {
                        var dbDate = result.rows.item(0).registrationTime;
                        var dateOfRegistration = Date.parseExact(dbDate, 'yyyy-MM-dd');
                        var currentDate = new Date();
                        if (dateOfRegistration > currentDate)
                        {
                            updateExistings(tx, existID, "", "", "0", "del", 1, function(tx, result)
                            {
                                if (result === "DONE")
                                {
                                    checkAndSendRequestForCaseNumber("case");
                                }
                            });
                        }
                        else
                        {
                            updateExistings(tx, existID, "", "", "0", "del", 1, function(tx, result)
                            {
                                if (result === "DONE")
                                {
                                    checkAndSendRequestForCaseNumber("case");
                                }
                            });
                        }
                    }
                    else
                    {
                        updateExistings(tx, existID, "", "", "0", "del", 1, function(tx, result)
                        {
                            if (result === "DONE")
                            {
                                checkAndSendRequestForCaseNumber("case");
                            }
                        });
                    }
                }, errorCB);
            }, errorCB, successCB);
        }
    }
});

function ShowCaseNoDetail(list)
{
    var caseNoD = $(list).attr('data-value');
    var searchData = {
        'searchString': caseNoD
    };
    localStorage.setItem('searchData', JSON.stringify(searchData));
    populateCasePage();
    var previousPage = "allSHList";
    var prevpagedetail = {
        'prevpage': previousPage
    };
    localStorage.setItem('prevpagedetail', JSON.stringify(prevpagedetail));
    $.mobile.navigate("index.html",
    {
        transition: "slide"
    });
}
var max_shm_id;

function GetMax_shm_id()
{
    try
    {
        max_shm_id = "";
        db.transaction(function(tx)
        {
            tx.executeSql("select shm_id from SH_Mapping order by shm_id desc limit 1 ", [], function(tx, result)
            {
                if (result.rows.length >= 1)
                {
                    max_shm_id = result.rows.item(0).shm_id;
                    max_shm_id++;
                }
                else
                {
                    max_shm_id = 1;
                }
            }, errorCB);
        }, errorCB);
    }
    catch (err)
    {
        max_shm_id = 1;
    };
}

function AddMapping(list)
{
    var aa = $("#shMap").find('input[data-type="search"]').val();
    if (aa != "")
    {
        $.mobile.loading('show',
        {
            text: 'Mapping CaseNumber...',
            textVisible: true,
            theme: 'b',
        });
        var caseIdMap = $(list).attr('data-value');
        var IsMap = $(list).attr('data-Map');
        var Ismatch = $(list).attr('data-match');
        var shMapData = JSON.parse(localStorage.getItem("shMapData"));
        var shId = shMapData.shId;
        var map_time = new Date().getTime();
        var myDate = new Date();
        var todatDate = myDate.getFullYear() + '-' + ('0' + (myDate.getMonth() + 1)).slice(-2) + '-' + ('0' + (myDate.getDate() + 1)).slice(-2);
        if (IsMap == "UnMap")
        {
            GetMax_shm_id();
            db.transaction(function(tx)
            {
                tx.executeSql("insert into SH_Mapping(shm_id,casenumber_id,stackeholder_id,mapping_on,server_sync) values (?,?,?,?,?)", [max_shm_id, caseIdMap, shId, todatDate, "0"], function(tx, result)
                {
                    MapIdArray.push(max_shm_id);
                    caseArray.push(Ismatch);
                    checkAndSendRequestForCaseNumber("case");
                    //Start Server Sync Code here...
                    calledBeforeSendAnyRequest(function(isConnected)
                    {
                        if (isConnected == true)
                        {
                            var lawyerD = JSON.parse(localStorage.getItem("lawyerID"));
                            var lawyerId = lawyerD.lawyerid;
                            var url = MR_URL;
                            var port = '8111';
                            var requestTime = new Date().getTime();
                            var webMethod = protocal + url + '/WebService_andriod.asmx/InsertCaseMapping';
                            $.ajax(
                            {
                                type: "POST",
                                url: webMethod,
                                data: JSON.stringify(
                                {
                                    clientID: max_shm_id,
                                    lawyerId: lawyerId,
                                    casenumber: caseIdMap,
                                    stackeholderId: shId,
                                    mappingOn: todatDate
                                }),
                                contentType: "application/json; charset=utf-8",
                                dataType: "json",
                                success: function(msg)
                                {
                                    // alert(msg.d);
                                    if (msg.d == "done")
                                    {
                                        updateSH_server_sync_CaseMapping("", "1", "Insert");
                                        $.mobile.loading('hide');
                                    }
                                    else
                                    {
                                        $.mobile.loading('hide');
                                    }
                                },
                                error: function(XMLHttpRequest, textStatus, errorThrown)
                                {
                                    updateSH_server_sync_CaseMapping("", "0", "Insert");
                                    $.mobile.loading('hide');
                                    var responseTime = new Date().getTime();
                                    var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: AddMapping(ajax call-InsertCaseMapping)";
                                    errMsg = errMsg + "\n App Version : " + version;
                                    insertLog(requestTime, responseTime, errMsg, function(returnId) {});
                                    alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
                                },
                                beforeSend: function()
                                {
                                    // $.mobile.loading('show', {
                                    //   text: 'Please Wait...',
                                    //  textVisible: true,
                                    //  theme: 'a',
                                    //  textonly: false
                                    // });
                                }
                            });
                        }
                    });
                    //End Server Sync Code
                    drawToast('Mapped Successfully.');
                }, errorCB, successCB);
            }, errorCB, successCB);
            $.mobile.loading('hide');
        }
        else
        {
            var ind = jQuery.inArray(Ismatch, caseArray);
            var shmId = MapIdArray[ind];
            calledBeforeSendAnyRequest(function(isConnected)
            {
                if (isConnected == true)
                {
                    db.transaction(function(tx)
                    {
                        var query = "delete from SH_Mapping where shm_id='" + shmId + "'";
                        tx.executeSql(query, [], function(tx, result)
                        {
                            MapIdArray.splice(ind, 1);
                            caseArray.splice(ind, 1);
                            checkAndSendRequestForCaseNumber("case");
                            //Start Server Sync Code here...
                            var lawyerD = JSON.parse(localStorage.getItem("lawyerID"));
                            var lawyerId = lawyerD.lawyerid;
                            var url = MR_URL;
                            var port = '8111';
                            var requestTime = new Date().getTime();
                            var webMethod = protocal + url + '/WebService_andriod.asmx/DeleteCaseMapping';
                            $.ajax(
                            {
                                type: "POST",
                                url: webMethod,
                                data: JSON.stringify(
                                {
                                    lawyerId: lawyerId,
                                    casenumber: caseIdMap,
                                    shId: shId
                                }),
                                contentType: "application/json; charset=utf-8",
                                dataType: "json",
                                success: function(msg)
                                {
                                    // alert(msg.d);
                                    if (msg.d == "done")
                                    {
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
                                    var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: AddMapping(ajax call-DeleteCaseMapping)";
                                    errMsg = errMsg + "\n App Version : " + version;
                                    insertLog(requestTime, responseTime, errMsg, function(returnId) {});
                                    alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
                                },
                                beforeSend: function()
                                {
                                    // $.mobile.loading('show', {
                                    //     text: 'Please Wait...',
                                    //    textVisible: true,
                                    //    theme: 'a',
                                    //   textonly: false
                                    // });
                                }
                            });
                            //End Server Sync Code
                            drawToast('Case Unmapped Successfully.');
                        }, errorCB, successCB);
                    }, errorCB, successCB);
                }
                else
                {
                    db.transaction(function(tx)
                    {
                        tx.executeSql("update SH_Mapping set server_sync='del' where shm_id='" + shmId + "'", [], function(tx, result)
                        {
                            var ind = jQuery.inArray(Ismatch, caseArray);
                            var shmId = MapIdArray[ind];
                            MapIdArray.splice(ind, 1);
                            caseArray.splice(ind, 1);
                            checkAndSendRequestForCaseNumber("case");
                            drawToast('Case Unmapped Successfully.');
                        }, errorCB);
                    }, errorCB);
                    //alert("Unable to Process! Internet Connection Not Available.");
                }
            });
            $.mobile.loading('hide');
        }
    }
    else
    {
        drawToast('Please choose Stakeholder Name First.');
    }
}
var InfoValueArray;

function GetCaseIdByCaseNumber(existid)
{
    db.transaction(function(tx)
    {
        var query = "select info_value from existings where exist_id='" + existid + "'";
        tx.executeSql(query, [], function(tx, result1)
        {
            InfoValueArray = result1.rows.item(0).info_value;
        }, errorCB, successCB);
    }, errorCB, successCB);
}

function CheckPreviousMapping(shid)
{
    caseArray = [];
    MapIdArray = [];
    db.transaction(function(tx)
    {
        var query = "select info_value,shm_id,stackeholder_id from existings inner join SH_Mapping on existings.exist_id=SH_Mapping.casenumber_id where stackeholder_id='" + shid + "' and SH_Mapping.server_sync!='del'";
        tx.executeSql(query, [], function(tx, result)
        {
            var c = result.rows.length;
            for (var i = 0; i < c; i++)
            {
                var ca = result.rows.item(i).info_value;
                var ci = result.rows.item(i).shm_id;
                caseArray.push(ca);
                MapIdArray.push(ci);
            }
        }, errorCB, successCB);
    }, errorCB, successCB);
}

function performOperations(list)
{
    try
    {
        //alert('called');
        var itemId = $(list).attr('data-value');
        //alert(itemId);
        if (itemId.trim().length > 0)
        {
            $('#confirm').popup();
            setTimeout(function()
            {
                $.mobile.activePage.find("#confirm").popup("open");
            }, 10);
            //$.mobile.activePage.find("#confirm").popup("open");
            $("#confirm .topic").remove();
            $('#divConfirm').show();
            //$("#question").html("Are you sure you want to delete.");
            $.mobile.activePage.find("#divOk").hide();
            var a = '<p class="topic">' + $(list).html() + '</p>';
            //$(""+a+"").insertAfter( "#question" );
            $("#question").html('Are you sure you want to delete.</br><p class="topic">' + $(list).html() + '</p>');
            $("#itemID").html(itemId);
        }
        else
        {
            var isItemRegister = $(list).attr('data-register');
            if (Number(isItemRegister) === 1)
            {
                $("#confirm").popup();
                setTimeout(function()
                {
                    $.mobile.activePage.find("#confirm").popup("open");
                }, 10);
                //$.mobile.activePage.find("#confirm").popup("open");
                $("#confirm .topic").remove();
                $('#divConfirm').hide();
                $.mobile.activePage.find("#divOk").show();
                $("#question").html("You have already requested to delete this string.");
            }
            else
            {
                var dataOp = $(list).attr('data-op');
                var dataId = $(list).attr('data-id');
                $.mobile.activePage.find("#confirm").popup("close")
                setTimeout(function()
                {
                    $.mobile.activePage.find("#confirmChange").popup("open");
                }, 10);
                //$.mobile.activePage.find("#confirmChange").popup("open");
                $("#confirmChange .topic").remove();
                var a = '<p class="topic">' + $(list).html() + '</p>';
                $("" + a + "").insertAfter("#reqQuestion");
                $("#reqItemID").html(dataId);
                $("#reqItemOP").html(dataOp);
            }
        }
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: performOperations(jquery) " + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id) {});
    }
}
$(document).on("click", "#yesA", function()
{
    var existID = $("#reqItemID").html();
    var existOP = $("#reqItemOP").html();
    if (tabSelected === "" || tabSelected === 'search')
    {
        if (existOP === 'add')
        {
            db.transaction(function(tx)
            {
                updateExistings(tx, existID, "", "", "2", existOP, 0, function(tx, result)
                {
                    onPagingChange("search");
                });
            }, errorCB, successCB);
        }
        else
        {
            if (existOP == 'del')
            {
                db.transaction(function(tx)
                {
                    updateExistings(tx, existID, "", "", "1", "new", 0, function(tx, result)
                    {
                        onPagingChange("search");
                    });
                }, errorCB, successCB);
            }
        }
    }
    else
    {
        if (existOP === 'add')
        {
            db.transaction(function(tx)
            {
                updateExistings(tx, existID, "", "", "2", existOP, 0, function(tx, result)
                {
                    onPagingChange("case");
                });
            }, errorCB, successCB);
        }
        else
        {
            if (existOP == 'del')
            {
                db.transaction(function(tx)
                {
                    updateExistings(tx, existID, "", "", "1", "new", 0, function(tx, result)
                    {
                        onPagingChange("case");
                    });
                }, errorCB, successCB);
            }
        }
    }
});

function deleteExistings(tx, existID)
{
    var query = "DELETE FROM existings WHERE exist_id=" + existID + ";";
    tx.executeSql(query, [], function(tx, result) {}, function(err)
    {
        var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: deleteExistings(executeSql)";
        insertErrorLogs(errMsg, function(id) {});
    });
}

function updateExistings(tx, existID, infoType, infoValue, serverSync, modifyType, directOp, callBack)
{
    var client_req_time = new Date().getTime();
    if (existID === "")
    {
        var query = "UPDATE existings set server_sync=" + serverSync + ",modify_type='" + modifyType + "', client_req_time='" + client_req_time + "', direct_op=" + directOp + ",is_requested=0 where info_type='" + infoType + "',info_value='" + infoValue + "';";
        tx.executeSql(query, [], function(tx, result)
        {
            if (typeof callBack !== 'undefined')
            {
                callBack(tx, 'DONE');
            }
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: updateExistings(executeSql) tx1";
            insertErrorLogs(errMsg, function(id) {});
        });
    }
    else
    {
        var query = "UPDATE existings set server_sync=" + serverSync + ",modify_type='" + modifyType + "', client_req_time='" + client_req_time + "', direct_op=" + directOp + ",is_requested=0 where exist_id=" + existID + ";";
        tx.executeSql(query, [], function(tx, result)
        {
            if (typeof callBack !== 'undefined')
            {
                callBack(tx, 'DONE');
            }
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: updateExistings(executeSql) tx2";
            insertErrorLogs(errMsg, function(id) {});
        });
    }
}
$(document).on("click", "#nextLog", function()
{
    //alert('called');
    db.transaction(function(tx)
    {
        showLogListNextLog(tx, logDateStart, logDateEnd);
    }, errorCB, successCB);
});

function showLogListNextLog(tx, startTimeStamp, endTimeStamp)
{
    $.mobile.loading('show',
    {
        text: 'Loading...',
        textVisible: true,
        theme: 'b',
        textonly: false
    });
    var nxtEndVal = 0,
        prevStartVal = 0;
    var status = true;
    prevStartVal = $("#prevLog").attr('data-startval');
    prevCurrentVal = $("#prevLog").attr('data-current');
    nxtEndVal = $("#nextLog").attr('data-endval');
    nxtCurrentVal = $("#nextLog").attr('data-current');
    if ((Number(nxtCurrentVal) + 10) < Number(nxtEndVal))
    {
        nxtCurrentVal = Number(nxtCurrentVal) + 10;
        prevCurrentVal = Number(prevCurrentVal) + 10;
    }
    else
    {
        if (Number(nxtEndVal) > (Number(nxtCurrentVal) + 1))
        {
            prevCurrentVal = Number(nxtCurrentVal) + 1;
            nxtCurrentVal = ((Number(nxtCurrentVal) - 1) + (Number(nxtEndVal) - Number(nxtCurrentVal)));
        }
        else
        {
            status = false;
            $.mobile.loading('hide');
            return false;
        }
    }
    $('#EmailSMSFilter').parent().hide();
    var n = $('#logOption option:selected').val();
    if (status)
    {
        if (n === 'update' || n === 'conn' || n === 'stackeholder' || n === 'error')
        {
            var query = '';
            if (n === 'stackeholder')
            {
                $('#EmailSMSFilter').parent().show();
                var filtervalue = $('#EmailSMSFilter option:selected').val();
                if (filtervalue == "Filter" || filtervalue == "All")
                {
                    query = "select * from stackeholder_log where sent_Ondate  between  ? And  ? ";
                    query += " order by sent_Ondate desc ";
                }
                if (filtervalue == "EmailS")
                {
                    query = "select * from stackeholder_log where email!='' And result_status='Success' And sent_Ondate  between  ? And  ? ";
                    query += " order by sent_Ondate desc ";
                }
                if (filtervalue == "SMSS")
                {
                    query = "select * from stackeholder_log where mobile!='' And result_status='Success' And sent_Ondate  between  ? And  ? ";
                    query += " order by sent_Ondate desc ";
                }
                if (filtervalue == "EmailE")
                {
                    query = "select * from stackeholder_log where email!='' And result_status like '%Fail%' And sent_Ondate  between  ? And  ? ";
                    query += " order by sent_Ondate desc ";
                }
                if (filtervalue == "SMSE")
                {
                    query = "select * from stackeholder_log where mobile!='' And result_status like '%Fail%' And  sent_Ondate  between  ? And  ? ";
                    query += " order by sent_Ondate desc ";
                }
            }
            if (n === 'update')
            {
                query = "select * from log_table where request_time  between  ? And  ?  and response_type NOT like '%Connection Error%' ";
                query += " order by response_time desc ";
            }
            if (n === 'conn')
            {
                query = "select * from log_table where request_time  between  ? And  ?  and response_type like '%Connection Error%' ";
                query += " order by response_time desc ";
            }
            if (n === 'error')
            {
                query = "select * from error_log where error_time  between  ? AND ? order by error_time desc ";
            }
            tx.executeSql(query, [startTimeStamp, endTimeStamp], function(tx, result)
            {
                try
                {
                    var len = result.rows.length;
                    $('.paging_center').html(len + ' Records Found');
                    var logList = $('#logList');
                    logList.html('');
                    //  var i = 0;
                    var data = '';
                    // var totalLength= len;
                    if (len > 0)
                    {
                        for (var i = prevCurrentVal; i <= nxtCurrentVal; i++)
                        {
                            i = parseInt(i, 10);
                            if (n == "conn" || n == "update")
                            {
                                data = data + '<li>';
                                data = data + '<h3>' + result.rows.item(i).response_type + ' Is Register:' + result.rows.item(i).is_register + '</h3>';
                                data = data + '<p><strong>Request Time - ' + new Date(result.rows.item(i).request_time).toString('dddd, MMMM d, yyyy hh:mm:ss tt') + '</strong></p>';
                                data = data + '<p><strong>Response Time - ' + new Date(result.rows.item(i).response_time).toString('dddd, MMMM d, yyyy hh:mm:ss tt') + '</strong></p>';
                                data = data + '</li>';
                                // i++;
                            }
                            if (n == "stackeholder")
                            {
                                data = data + '<li>';
                                data = data + '<h3>' + result.rows.item(i).message_text + '</h3>';
                                var medEmail = result.rows.item(i).email;
                                var medMobile = result.rows.item(i).mobile;
                                var statusResult = result.rows.item(i).result_status;
                                var resultToShow;
                                var SuccessOrFail;
                                if (medEmail != "")
                                {
                                    if (statusResult == "Success")
                                    {
                                        resultToShow = 'Email : ' + medEmail;
                                        SuccessOrFail = '  (Success) ';
                                    }
                                    else
                                    {
                                        resultToShow = 'Email : ' + medEmail;
                                        SuccessOrFail = "(Fail - " + result.rows.item(i).error_msg + ")";
                                    }
                                }
                                if (medMobile != "")
                                {
                                    if (statusResult == "Success")
                                    {
                                        resultToShow = 'Mobile : ' + medMobile;
                                        SuccessOrFail = '  (Success) ';
                                    }
                                    else
                                    {
                                        resultToShow = 'Mobile : ' + medMobile;
                                        SuccessOrFail = "(Fail - " + result.rows.item(i).error_msg + ")";
                                    }
                                }
                                if (statusResult == "Success")
                                {
                                    data = data + '<h2>' + resultToShow + '</h2> <h2 style="color:green"> ' + SuccessOrFail + '</h2>';
                                }
                                if (statusResult == "Fail")
                                {
                                    data = data + '<h2>' + resultToShow + '</h2> <h2 style="color:red"> ' + SuccessOrFail + '</h2>';
                                }
                                data = data + '<p><strong>DateTime - ' + new Date(result.rows.item(i).sent_Ondate).toString('dddd, MMMM d, yyyy hh:mm:ss tt') + '</strong></p>';
                                data = data + '</li>';
                            }
                            if (n == "error")
                            {
                                data = data + '<li>';
                                data = data + '<h3>' + result.rows.item(i).error + ' Is Register:' + result.rows.item(i).is_register + '</h3>';
                                data = data + '<p><strong>Error time - ' + new Date(result.rows.item(i).error_time).toString('dddd, MMMM d, yyyy hh:mm:ss') + '</strong></p>';
                                data = data + '</li>';
                            }
                        }
                        logList.append(data);
                        logList.listview("refresh");
                        $("#prevLog").attr('data-startval', prevStartVal);
                        $("#prevLog").attr('data-current', prevCurrentVal);
                        $("#nextLog").attr('data-endval', nxtEndVal);
                        $("#nextLog").attr('data-current', nxtCurrentVal);
                    } //end if len>0
                    else
                    {
                        logList.append('<li><h1>No Log To Show.</h1></li>');
                        logList.listview("refresh");
                    }
                    $.mobile.loading('hide');
                }
                catch (err)
                {
                    var errMsg = err + "\nMethod: showLogList(jquery) tx1" + "\nError Stack:" + err.stack;
                    insertErrorLogs(errMsg, function(id)
                    { //alert("Oops! Something went worng.")
                    });
                }
            }, function(err)
            {
                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: showLogList(executeSql)";
                insertErrorLogs(errMsg, function(id)
                {
//                    alert("Oops! Something went worng with db.")
                });
            });
        }
    }
}
$(document).on("click", "#next", function()
{
    try
    {
        $.mobile.loading('show',
        {
            text: 'Loading...',
            textVisible: true,
            theme: 'b',
            textonly: false
        });
        var nxtEndVal = 0,
            prevStartVal = 0;
        var status = true;
        prevStartVal = $("#prev").attr('data-startval');
        prevCurrentVal = $("#prev").attr('data-current');
        nxtEndVal = $("#next").attr('data-endval');
        nxtCurrentVal = $("#next").attr('data-current');
        inputText = $.mobile.activePage.find("#searchMyAccount").val();
        if (tabSelected === '' || tabSelected === 'search')
        {
            if ((Number(nxtCurrentVal) + 10) < Number(nxtEndVal))
            {
                nxtCurrentVal = Number(nxtCurrentVal) + 10;
                prevCurrentVal = Number(prevCurrentVal) + 10;
            }
            else
            {
                if (Number(nxtEndVal) > (Number(nxtCurrentVal) + 1))
                {
                    prevCurrentVal = Number(nxtCurrentVal) + 1;
                    nxtCurrentVal = ((Number(nxtCurrentVal) - 1) + (Number(nxtEndVal) - Number(nxtCurrentVal)));
                }
                else
                {
                    status = false;
                    $.mobile.loading('hide');
                    return false;
                }
            }
        }
        else
        {
            if ((Number(nxtCurrentVal) + 25) <= Number(nxtEndVal))
            {
                nxtCurrentVal = Number(nxtCurrentVal) + 25;
                prevCurrentVal = Number(prevCurrentVal) + 25;
            }
            else
            {
                if (Number(nxtEndVal) > (Number(nxtCurrentVal) + 1))
                {
                    prevCurrentVal = Number(nxtCurrentVal) + 1;
                    nxtCurrentVal = ((Number(nxtCurrentVal) - 1) + (Number(nxtEndVal) - Number(nxtCurrentVal)));
                }
                else
                {
                    status = false;
                    $.mobile.loading('hide');
                    return false;
                }
            }
        }
        if (status)
        {
            if (tabSelected === 'search')
            {
                try
                {
                    var myAccountSearchList = $('#myAccountSearchList');
                    var data = "";
                    db.transaction(function(tx)
                    {
                        var query = "SELECT exist_id,info_value,server_sync,modify_type,is_requested FROM existings WHERE info_type='search' and server_sync<>2 and info_value like '%" + inputText + "%' order by info_value;"
                        tx.executeSql(query, [], function(tx, result)
                        {
                            try
                            {
                                var len = result.rows.length;
                                if (len > 0)
                                {
                                    for (var i = prevCurrentVal; i <= nxtCurrentVal; i++)
                                    {
                                        i = parseInt(i, 10);
                                        var serverSync = result.rows.item(i).server_sync;
                                        var modifyType = result.rows.item(i).modify_type;
                                        var infoValue = result.rows.item(i).info_value;
                                        var existID = result.rows.item(i).exist_id;
                                        var isRegistered = result.rows.item(i).is_requested;
                                        if (Number(serverSync) === 1)
                                        {
                                            data = data + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconGreen"><a href="#" data-value="' + existID + '" onclick="return performOperations(this)" data-id="' + existID + '" data-op="' + modifyType + '">' + (i + 1) + '. ' + infoValue + '</a></li>';
                                        }
                                        if (Number(serverSync) === 0 && modifyType === 'del')
                                        {
                                            data = data + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconRed"><a href="#" data-value="" onclick="return performOperations(this)" data-id="' + existID + '" data-register="' + isRegistered + '" data-op="' + modifyType + '">' + (i + 1) + '. ' + infoValue + '</a></li>';
                                        }
                                        if (Number(serverSync) === 0 && modifyType === 'add')
                                        {
                                            data = data + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconGold"><a href="#" data-value="' + existID + '" onclick="return performOperations(this)" data-id="' + existID + '" data-register="' + isRegistered + '" data-op="' + modifyType + '">' + (i + 1) + '. ' + infoValue + '</a></li>';
                                        }
                                    }
                                    myAccountSearchList.empty();
                                    myAccountSearchList.append(data).listview("refresh");
                                    $("#prev").attr('data-startval', prevStartVal);
                                    $("#prev").attr('data-current', prevCurrentVal);
                                    $("#next").attr('data-endval', nxtEndVal);
                                    $("#next").attr('data-current', nxtCurrentVal);
                                }
                                $.mobile.loading('hide');
                            }
                            catch (err)
                            {
                                var errMsg = err + "\nMethod: #next(jquery) search tx1" + "\nError Stack:" + err.stack;
                                insertErrorLogs(errMsg, function(id) {});
                            }
                        }, function(err)
                        {
                            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: #next(executeSql) search";
                            insertErrorLogs(errMsg, function(id) {});
                        });
                    }, errorCB, successCB);
                }
                catch (err)
                {}
            }
            if (tabSelected === 'case')
            {
                try
                {
                    var previousPage = PrevoisPageAll;
                    var myAccountListA = $.mobile.activePage.find('#myAccountListA');
                    var dataA = "";
                    db.transaction(function(tx)
                    {
                        var query;
                        var searchtype = $("#mappingOptions").val();
                        if (previousPage == "allSHList" || previousPage == "shCrud" || PrevoisPageBack == "shCrud")
                        {
                            var shMapData = JSON.parse(localStorage.getItem("shMapData"));
                            var shId = shMapData.shId;
                            if (searchtype == "mapped")
                            {
                                query = "SELECT distinct existings.exist_id,info_value as casenumber_id,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' and info_value IN (select info_value from existings where exist_id in(select casenumber_id from SH_Mapping where stackeholder_id='" + shId + "' and server_sync!='del')) order by info_value"
                            }
                            if (searchtype == "all")
                            {
                                query = "SELECT distinct existings.exist_id,info_value,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' order by info_value;"
                            }
                            if (searchtype == "Not Mapped Anyone")
                            {
                                query = "SELECT distinct existings.exist_id,info_value as casenumber_id,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' and info_value NOT IN (select info_value from existings where exist_id in(select casenumber_id from SH_Mapping where server_sync!='del')) order by info_value"
                            }
                            if (searchtype == "Not Mapped Person")
                            {
                                query = "SELECT distinct existings.exist_id,info_value as casenumber_id,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' and info_value NOT IN (select info_value from existings where exist_id in(select casenumber_id from SH_Mapping where stackeholder_id='" + shId + "' and server_sync!='del')) order by info_value"
                            }
                            if (searchtype == "Choose an option...")
                            {
                                query = "SELECT distinct existings.exist_id,info_value,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' order by info_value;"
                            }
                        }
                        else
                        {
                            query = "SELECT distinct existings.exist_id,info_value,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' order by info_value;"
                        }
                        tx.executeSql(query, [], function(tx, result)
                        {
                            try
                            {
                                var len = result.rows.length;
                                if (len > 0)
                                {
                                    if (Number(prevCurrentVal) > len)
                                    {
                                        prevCurrentVal = len;
                                    }
                                    if (Number(nxtCurrentVal) > len)
                                    {
                                        nxtCurrentVal = len;
                                    }
                                    for (var i = prevCurrentVal; i <= nxtCurrentVal; i++)
                                    {
                                        if ((previousPage == "allSHList" || previousPage == "shCrud" || PrevoisPageBack == "shCrud") && searchtype != "Choose an option..." && searchtype != "all")
                                        {
                                            i = parseInt(i, 10);
                                            var existID = result.rows.item(i).exist_id;
                                            var infoValue = result.rows.item(i).casenumber_id;
                                            var matterType = result.rows.item(i).matter_type;
                                        }
                                        else
                                        {
                                            i = parseInt(i, 10);
                                            var serverSync = result.rows.item(i).server_sync;
                                            var modifyType = result.rows.item(i).modify_type;
                                            var infoValue = result.rows.item(i).info_value;
                                            var existID = result.rows.item(i).exist_id;
                                            var isRegistered = result.rows.item(i).is_requested;
                                            var matterType = result.rows.item(i).matter_type;
                                            var listtype = result.rows.item(i).listtype;
                                            var narration = result.rows.item(i).narration;
                                            var court = result.rows.item(i).court;
                                            var court_id = result.rows.item(i).court_id;
                                            if (matterType === null) matterType = ' ';
                                            if (listtype !== null && listtype !== "") { if (matterType !== "") matterType += ", " + listtype; else matterType += listtype; }
                                            if (narration === "null" && narration !== "") matterType += ", " + narration;
                                            if (court !== null && court !== "") matterType += ", " + court;
                                            if (infoValue.trim() !== '')
                                            {
                                                var infoDetl = infoValue.split('.');
                                                if (infoDetl.length > 0)
                                                {
                                                    infoValue = infoDetl[0].toString().trim();
                                                }
                                            }
                                        }
                                        if (previousPage == "allSHList" || previousPage == "shCrud" || PrevoisPageBack == "shCrud")
                                        {
                                            var shMapData = JSON.parse(localStorage.getItem("shMapData"));
                                            var shId = shMapData.shId;
                                            var map_time = new Date().getTime();
                                            if (jQuery.inArray(infoValue, caseArray) == -1)
                                            {
                                                dataA = dataA + '<li data-role="fieldcontain" data-filter="true" data-icon="custom" data-search="' + infoValue + '" id="customIconAdd"><a data-value="' + infoValue + '" href="#" onclick="return ShowCaseNoDetail(this)"> <h6 style="cursor:default;font-size:10pt">' + (i + 1) + '. ' + infoValue + '</h6><span class="ui-li-contnr ui-li-contnr-pos"><br/><span class="ui-li-contnr-inner-new">' + matterType + '</span></span><br/></a><a href="#" id="aaa-' + infoValue + '" data-value="' + existID + '" data-match="' + infoValue + '" data-theme="a" data-map="UnMap" onclick="return AddMapping(this)"></a></li>';
                                            }
                                            else
                                            {
                                                dataA = dataA + '<li data-role="fieldcontain" data-filter="true" data-icon="custom" data-search="' + infoValue + '" id="customIconCheck"><a data-value="' + infoValue + '" href="#" onclick="return ShowCaseNoDetail(this)"> <h6 style="cursor:default;font-size:10pt">' + (i + 1) + '. ' + infoValue + '</h6><span class="ui-li-contnr ui-li-contnr-pos"><br/><span class="ui-li-contnr-inner-new">' + matterType + '</span></span><br/></a><a href="#" id="aaa-' + infoValue + '" data-value="' + existID + '" data-match="' + infoValue + '" data-theme="a" data-map="Map" onclick="return AddMapping(this)"></a></li>';
                                            }
                                        }
                                        else
                                        {
                                            if (Number(serverSync) === 1)
                                            {
                                                //                            dataA = dataA + '<li data-icon="custom" data-search="'+infoValue+'" id="customIconGreen"><a href="#" data-value="'+existID+'" onclick="return performOperations(this)" data-id="'+existID+'" data-op="'+modifyType+'">'+ (i+1) +'. '+infoValue+'</a></br><span class="ui-li-contnr ui-li-contnr-pos"><span class="ui-li-contnr-inner-new">'+matterType+'</span></span></li>';
                                                dataA = dataA + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconGreen"><a href="#" data-value="' + existID + '" onclick="return performOperations(this)" data-id="' + existID + '" data-op="' + modifyType + '"><h2>' + (i + 1) + '. ' + infoValue + '</h2><p style="color:red">' + matterType + '</p></a></li>';
                                            }
                                            if (Number(serverSync) === 0 && modifyType === 'del')
                                            {
                                                //                            dataA = dataA + '<li data-icon="custom" data-search="'+infoValue+'" id="customIconRed"><a href="#" data-value="" onclick="return performOperations(this)" data-id="'+existID+'" data-register="'+isRegistered+'" data-op="'+modifyType+'">'+ (i+1) +'. '+infoValue+'</a><span class="ui-li-contnr ui-li-contnr-pos"><span class="ui-li-contnr-inner-new">'+matterType+'</span></span></li>';
                                                dataA = dataA + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconRed"><a href="#" data-value="' + existID + '" onclick="return performOperations(this)" data-id="' + existID + '" data-op="' + modifyType + '"><h2>' + (i + 1) + '. ' + infoValue + '</h2><p style="color:red">' + matterType + '</p></a></li>';
                                            }
                                            if (Number(serverSync) === 0 && modifyType === 'add')
                                            {
                                                //                            dataA = dataA + '<li data-icon="custom" data-search="'+infoValue+'" id="customIconGold"><a href="#" data-value="'+existID+'" onclick="return performOperations(this)" data-id="'+existID+'" data-register="'+isRegistered+'" data-op="'+modifyType+'">'+ (i+1) +'. '+infoValue+'</a><span class="ui-li-contnr ui-li-contnr-pos"><span class="ui-li-contnr-inner-new">'+matterType+'</span></span></li>';
                                                dataA = dataA + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconGold"><a href="#" data-value="' + existID + '" onclick="return performOperations(this)" data-id="' + existID + '" data-op="' + modifyType + '"><h2>' + (i + 1) + '. ' + infoValue + '</h2><p style="color:red">' + matterType + '</p></a></li>';
                                            }
                                        }
                                    }
                                    myAccountListA.empty();
                                    myAccountListA.append(dataA).listview("refresh");
                                    $("#prev").attr('data-startval', prevStartVal);
                                    $("#prev").attr('data-current', prevCurrentVal);
                                    $("#next").attr('data-endval', nxtEndVal);
                                    $("#next").attr('data-current', nxtCurrentVal);
                                    var RemPaging = {
                                        'prevStartVal': prevStartVal,
                                        'prevCurrentVal': prevCurrentVal,
                                        'nxtEndVal': nxtEndVal,
                                        'nxtCurrentVal': nxtCurrentVal,
                                        'searchtype': searchtype,
                                        'Search': inputText
                                    };
                                    localStorage.setItem('RemPaging', JSON.stringify(RemPaging));
                                }
                                $.mobile.loading('hide');
                            }
                            catch (err)
                            {
                                var errMsg = err + "\nMethod: #next(jquery) case tx1" + "\nError Stack:" + err.stack;
                                insertErrorLogs(errMsg, function(id) {});
                            }
                        }, function(err)
                        {
                            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: #next(executeSql) case";
                            insertErrorLogs(errMsg, function(id) {});
                        });
                    }, errorCB, successCB);
                }
                catch (err)
                {
                    var errMsg = err + "\nMethod: #next(jquery) case tx1" + "\nError Stack:" + err.stack;
                    insertErrorLogs(errMsg, function(id) {});
                }
            }
        }
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: #next(jquery) click" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id) {});
    }
});
$(document).on("click", "#prevLog", function()
{
    //alert('called');
    db.transaction(function(tx)
    {
        showLogListPrevLog(tx, logDateStart, logDateEnd);
    }, errorCB, successCB);
});

function showLogListPrevLog(tx, startTimeStamp, endTimeStamp)
{
    $.mobile.loading('show',
    {
        text: 'Loading...',
        textVisible: true,
        theme: 'b',
        textonly: false
    });
    var nxtEndVal = 0,
        prevStartVal = 0;
    var status = true;
    prevStartVal = $("#prevLog").attr('data-startval');
    prevCurrentVal = $("#prevLog").attr('data-current');
    nxtEndVal = $("#nextLog").attr('data-endval');
    nxtCurrentVal = $("#nextLog").attr('data-current');
    if (Number(prevCurrentVal) === 0)
    {
        status = false;
        $.mobile.loading('hide');
        return false;
    }
    else
    {
        if (Number(prevCurrentVal) > 9 && (Number(nxtCurrentVal) + 1) < Number(nxtEndVal))
        {
            prevCurrentVal = Number(prevCurrentVal) - 10;
            nxtCurrentVal = Number(nxtCurrentVal) - 10;
        }
        else
        {
            nxtCurrentVal = Number(prevCurrentVal) - 1
            prevCurrentVal = Number(prevCurrentVal) - 10;
        }
    }
    $('#EmailSMSFilter').parent().hide();
    var n = $('#logOption option:selected').val();
    if (status)
    {
        if (n === 'update' || n === 'conn' || n === 'stackeholder' || n === 'error')
        {
            var query = '';
            if (n === 'stackeholder')
            {
                $('#EmailSMSFilter').parent().show();
                var filtervalue = $('#EmailSMSFilter option:selected').val();
                if (filtervalue == "Filter" || filtervalue == "All")
                {
                    query = "select * from stackeholder_log where sent_Ondate  between  ? And  ? ";
                    query += " order by sent_Ondate desc ";
                }
                if (filtervalue == "EmailS")
                {
                    query = "select * from stackeholder_log where email!='' And result_status='Success' And sent_Ondate  between  ? And  ? ";
                    query += " order by sent_Ondate desc ";
                }
                if (filtervalue == "SMSS")
                {
                    query = "select * from stackeholder_log where mobile!='' And result_status='Success' And sent_Ondate  between  ? And  ? ";
                    query += " order by sent_Ondate desc ";
                }
                if (filtervalue == "EmailE")
                {
                    query = "select * from stackeholder_log where email!='' And result_status='Fail' And sent_Ondate  between  ? And  ? ";
                    query += " order by sent_Ondate desc ";
                }
                if (filtervalue == "SMSE")
                {
                    query = "select * from stackeholder_log where mobile!='' And result_status='Fail' And  sent_Ondate  between  ? And  ? ";
                    query += " order by sent_Ondate desc ";
                }
            }
            if (n === 'update')
            {
                query = "select * from log_table where request_time  between  ? And  ?  and response_type NOT like '%Connection Error%' ";
                query += " order by response_time desc ";
            }
            if (n === 'conn')
            {
                query = "select * from log_table where request_time  between  ? And  ?  and response_type like '%Connection Error%' ";
                query += " order by response_time desc ";
            }
            if (n === 'error')
            {
                query = "select * from error_log where error_time  between  ? AND ? order by error_time desc ";
            }
            tx.executeSql(query, [startTimeStamp, endTimeStamp], function(tx, result)
            {
                try
                {
                    var len = result.rows.length;
                    $('.paging_center').html(len + ' Records Found');
                    var logList = $('#logList');
                    logList.html('');
                    //var i = 0;
                    var data = '';
                    // var totalLength= len;
                    if (len > 0)
                    {
                        for (var i = prevCurrentVal; i <= nxtCurrentVal; i++)
                        {
                            i = parseInt(i, 10);
                            if (n == "conn" || n == "update")
                            {
                                data = data + '<li>';
                                data = data + '<h3>' + result.rows.item(i).response_type + ' Is Register:' + result.rows.item(i).is_register + '</h3>';
                                data = data + '<p><strong>Request Time - ' + new Date(result.rows.item(i).request_time).toString('dddd, MMMM d, yyyy hh:mm:ss tt') + '</strong></p>';
                                data = data + '<p><strong>Response Time - ' + new Date(result.rows.item(i).response_time).toString('dddd, MMMM d, yyyy hh:mm:ss tt') + '</strong></p>';
                                data = data + '</li>';
                                // i++;
                            }
                            if (n == "stackeholder")
                            {
                                data = data + '<li>';
                                data = data + '<h3>' + result.rows.item(i).message_text + '</h3>';
                                var medEmail = result.rows.item(i).email;
                                var medMobile = result.rows.item(i).mobile;
                                var statusResult = result.rows.item(i).result_status;
                                var resultToShow;
                                var SuccessOrFail;
                                if (medEmail != "")
                                {
                                    if (statusResult == "Success")
                                    {
                                        resultToShow = 'Email : ' + medEmail;
                                        SuccessOrFail = '  (Success) ';
                                    }
                                    else
                                    {
                                        resultToShow = 'Email : ' + medEmail;
                                        SuccessOrFail = "(Fail - " + result.rows.item(i).error_msg + ")";
                                    }
                                }
                                if (medMobile != "")
                                {
                                    if (statusResult == "Success")
                                    {
                                        resultToShow = 'Mobile : ' + medMobile;
                                        SuccessOrFail = '  (Success) ';
                                    }
                                    else
                                    {
                                        resultToShow = 'Mobile : ' + medMobile;
                                        SuccessOrFail = "(Fail - " + result.rows.item(i).error_msg + ")";
                                    }
                                }
                                if (statusResult == "Success")
                                {
                                    data = data + '<h2>' + resultToShow + '</h2> <h2 style="color:green"> ' + SuccessOrFail + '</h2>';
                                }
                                if (statusResult == "Fail")
                                {
                                    data = data + '<h2>' + resultToShow + '</h2> <h2 style="color:red"> ' + SuccessOrFail + '</h2>';
                                }
                                data = data + '<p><strong>DateTime - ' + new Date(result.rows.item(i).sent_Ondate).toString('dddd, MMMM d, yyyy hh:mm:ss tt') + '</strong></p>';
                                data = data + '</li>';
                            }
                            if (n == "error")
                            {
                                data = data + '<li>';
                                data = data + '<h3>' + result.rows.item(i).error + ' Is Register:' + result.rows.item(i).is_register + '</h3>';
                                data = data + '<p><strong>Error time - ' + new Date(result.rows.item(i).error_time).toString('dddd, MMMM d, yyyy hh:mm:ss') + '</strong></p>';
                                data = data + '</li>';
                            }
                        }
                        logList.append(data);
                        logList.listview("refresh");
                        $("#prevLog").attr('data-startval', prevStartVal);
                        $("#prevLog").attr('data-current', prevCurrentVal);
                        $("#nextLog").attr('data-endval', nxtEndVal);
                        $("#nextLog").attr('data-current', nxtCurrentVal);
                    } //end if len>0
                    else
                    {
                        logList.append('<li><h1>No Log To Show.</h1></li>');
                        logList.listview("refresh");
                    }
                    $.mobile.loading('hide');
                }
                catch (err)
                {
                    var errMsg = err + "\nMethod: showLogList(jquery) tx1" + "\nError Stack:" + err.stack;
                    insertErrorLogs(errMsg, function(id)
                    { //alert("Oops! Something went worng.")
                    });
                }
            }, function(err)
            {
                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: showLogList(executeSql)";
                insertErrorLogs(errMsg, function(id)
                {
//                    alert("Oops! Something went worng with db.")
                });
            });
        }
    }
}
$(document).on("click", "#prev", function()
{
    try
    {
        $.mobile.loading('show',
        {
            text: 'Loading...',
            textVisible: true,
            theme: 'b',
            textonly: false
        });
        var nxtEndVal = 0,
            prevStartVal = 0;
        var status = true;
        prevStartVal = $("#prev").attr('data-startval');
        prevCurrentVal = $("#prev").attr('data-current');
        nxtEndVal = $("#next").attr('data-endval');
        nxtCurrentVal = $("#next").attr('data-current');
        inputText = $.mobile.activePage.find("#searchMyAccount").val();
        if (Number(prevCurrentVal) === 0)
        {
            status = false;
            $.mobile.loading('hide');
            return false;
        }
        else
        {
            if (tabSelected === '' || tabSelected === 'search')
            {
                if (Number(prevCurrentVal) > 9 && (Number(nxtCurrentVal) + 1) < Number(nxtEndVal))
                {
                    prevCurrentVal = Number(prevCurrentVal) - 10;
                    nxtCurrentVal = Number(nxtCurrentVal) - 10;
                }
                else
                {
                    nxtCurrentVal = Number(prevCurrentVal) - 1
                    prevCurrentVal = Number(prevCurrentVal) - 10;
                }
            }
            else
            {
                if (Number(prevCurrentVal) > 24 && (Number(nxtCurrentVal) + 1) < Number(nxtEndVal))
                {
                    prevCurrentVal = Number(prevCurrentVal) - 25;
                    nxtCurrentVal = Number(nxtCurrentVal) - 25;
                }
                else
                {
                    nxtCurrentVal = Number(prevCurrentVal) - 1
                    prevCurrentVal = Number(prevCurrentVal) - 25;
                }
            }
        }
        if (status)
        {
            if (tabSelected === 'search')
            {
                try
                {
                    var myAccountSearchList = $('#myAccountSearchList');
                    var data = "";
                    db.transaction(function(tx)
                    {
                        var query = "SELECT exist_id,info_value,server_sync,modify_type,is_requested FROM existings WHERE info_type='search' and server_sync<>2 and info_value like '%" + inputText + "%' order by info_value;"
                        tx.executeSql(query, [], function(tx, result)
                        {
                            try
                            {
                                var len = result.rows.length;
                                if (len > 0)
                                {
                                    for (var i = prevCurrentVal; i <= nxtCurrentVal; i++)
                                    {
                                        i = parseInt(i, 10);
                                        var serverSync = result.rows.item(i).server_sync;
                                        var modifyType = result.rows.item(i).modify_type;
                                        var infoValue = result.rows.item(i).info_value;
                                        var existID = result.rows.item(i).exist_id;
                                        var isRegistered = result.rows.item(i).is_requested;
                                        if (Number(serverSync) === 1)
                                        {
                                            data = data + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconGreen"><a href="#" data-value="' + existID + '" onclick="return performOperations(this)" data-id="' + existID + '" data-op="' + modifyType + '">' + (i + 1) + '. ' + infoValue + '</a></li>';
                                        }
                                        if (Number(serverSync) === 0 && modifyType === 'del')
                                        {
                                            data = data + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconRed"><a href="#" data-value="" onclick="return performOperations(this)" data-id="' + existID + '" data-register="' + isRegistered + '" data-op="' + modifyType + '">' + (i + 1) + '. ' + infoValue + '</a></li>';
                                        }
                                        if (Number(serverSync) === 0 && modifyType === 'add')
                                        {
                                            data = data + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconGold"><a href="#" data-value="' + existID + '" onclick="return performOperations(this)" data-id="' + existID + '" data-register="' + isRegistered + '" data-op="' + modifyType + '">' + (i + 1) + '. ' + infoValue + '</a></li>';
                                        }
                                    }
                                    myAccountSearchList.empty();
                                    myAccountSearchList.append(data).listview("refresh");
                                    $("#prev").attr('data-startval', prevStartVal);
                                    $("#prev").attr('data-current', prevCurrentVal);
                                    $("#next").attr('data-endval', nxtEndVal);
                                    $("#next").attr('data-current', nxtCurrentVal);
                                }
                                $.mobile.loading('hide');
                            }
                            catch (err)
                            {
                                var errMsg = err + "\nMethod: #prev(jquery) search tx1" + "\nError Stack:" + err.stack;
                                insertErrorLogs(errMsg, function(id) {});
                            }
                        }, function(err)
                        {
                            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: #prev(executeSql) search";
                            insertErrorLogs(errMsg, function(id) {});
                        });
                    }, errorCB, successCB);
                }
                catch (err)
                {
                    var errMsg = err + "\nMethod: #prev(jquery) search tx1" + "\nError Stack:" + err.stack;
                    insertErrorLogs(errMsg, function(id) {});
                }
            }
            if (tabSelected === 'case')
            {
                try
                {
                    var previousPage = PrevoisPageAll;
                    var myAccountListA = $.mobile.activePage.find('#myAccountListA');
                    var dataA = "";
                    db.transaction(function(tx)
                    {
                        var query;
                        var searchtype = $("#mappingOptions").val();
                        if (previousPage == "allSHList" || previousPage == "shCrud" || PrevoisPageBack == "shCrud")
                        {
                            var shMapData = JSON.parse(localStorage.getItem("shMapData"));
                            var shId = shMapData.shId;
                            if (searchtype == "mapped")
                            {
                                query = "SELECT distinct existings.exist_id,info_value as casenumber_id,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' and info_value IN (select info_value from existings where exist_id in(select casenumber_id from SH_Mapping where stackeholder_id='" + shId + "' and server_sync!='del')) order by info_value"
                            }
                            if (searchtype == "all")
                            {
                                query = "SELECT distinct existings.exist_id,info_value,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' order by info_value;"
                            }
                            if (searchtype == "Not Mapped Anyone")
                            {
                                query = "SELECT distinct existings.exist_id,info_value as casenumber_id,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' and info_value NOT IN (select info_value from existings where exist_id in(select casenumber_id from SH_Mapping where server_sync!='del')) order by info_value"
                            }
                            if (searchtype == "Not Mapped Person")
                            {
                                query = "SELECT distinct existings.exist_id,info_value as casenumber_id,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' and info_value NOT IN (select info_value from existings where exist_id in(select casenumber_id from SH_Mapping where stackeholder_id='" + shId + "' and server_sync!='del')) order by info_value"
                            }
                            if (searchtype == "Choose an option...")
                            {
                                query = "SELECT distinct existings.exist_id,info_value,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' order by info_value;"
                            }
                        }
                        else
                        {
                            query = "SELECT distinct existings.exist_id,info_value,server_sync,modify_type,is_requested,matter_type,listtype,narration,court,court_id FROM existings INNER JOIN existing_case_details on existings.exist_id= existing_case_details.exist_id WHERE info_type='case' and server_sync<>2 and info_value like '%" + inputText + "%' order by info_value;"
                        }
                        tx.executeSql(query, [], function(tx, result)
                        {
                            try
                            {
                                var len = result.rows.length;
                                if (len > 0)
                                {
                                    for (var i = prevCurrentVal; i <= nxtCurrentVal; i++)
                                    {
                                        if ((previousPage == "allSHList" || previousPage == "shCrud" || PrevoisPageBack == "shCrud") && searchtype != "Choose an option..." && searchtype != "all")
                                        {
                                            i = parseInt(i, 10);
                                            var existID = result.rows.item(i).exist_id;
                                            var infoValue = result.rows.item(i).casenumber_id;
                                            var matterType = result.rows.item(i).matter_type;
                                        }
                                        else
                                        {
                                            i = parseInt(i, 10);
                                            var serverSync = result.rows.item(i).server_sync;
                                            var modifyType = result.rows.item(i).modify_type;
                                            var infoValue = result.rows.item(i).info_value;
                                            var existID = result.rows.item(i).exist_id;
                                            var isRegistered = result.rows.item(i).is_requested;
                                            var matterType = result.rows.item(i).matter_type;
                                            var listtype = result.rows.item(i).listtype;
                                            var narration = result.rows.item(i).narration;
                                            var court = result.rows.item(i).court;
                                            var court_id = result.rows.item(i).court_id;
                                            if (matterType === null) matterType = ' ';
                                            if (listtype !== null && listtype !== "") { if (matterType !== "") matterType += ", " + listtype; else matterType += listtype; }
                                            if (narration === "null" && narration !== "") matterType += ", " + narration;
                                            if (court !== null && court !== "") matterType += ", " + court;
                                            if (infoValue.trim() !== '')
                                            {
                                                var infoDetl = infoValue.split('.');
                                                if (infoDetl.length > 0)
                                                {
                                                    infoValue = infoDetl[0].toString().trim();
                                                }
                                            }
                                        }
                                        if (previousPage == "allSHList" || previousPage == "shCrud" || PrevoisPageBack == "shCrud")
                                        {
                                            var shMapData = JSON.parse(localStorage.getItem("shMapData"));
                                            var shId = shMapData.shId;
                                            var map_time = new Date().getTime();
                                            if (jQuery.inArray(infoValue, caseArray) == -1)
                                            {
                                                dataA = dataA + '<li data-role="fieldcontain" data-filter="true" data-icon="custom" data-search="' + infoValue + '" id="customIconAdd"><a data-value="' + infoValue + '" href="#" onclick="return ShowCaseNoDetail(this)"> <h6 style="cursor:default;font-size:10pt">' + (i + 1) + '. ' + infoValue + '</h6><span class="ui-li-contnr ui-li-contnr-pos"><br/><span class="ui-li-contnr-inner-new">' + matterType + '</span></span><br/></a><a href="#" id="aaa-' + infoValue + '" data-value="' + existID + '" data-match="' + infoValue + '" data-theme="a" data-map="UnMap" onclick="return AddMapping(this)"></a></li>';
                                            }
                                            else
                                            {
                                                dataA = dataA + '<li data-role="fieldcontain" data-filter="true" data-icon="custom" data-search="' + infoValue + '" id="customIconCheck"><a data-value="' + infoValue + '" href="#" onclick="return ShowCaseNoDetail(this)"> <h6 style="cursor:default;font-size:10pt">' + (i + 1) + '. ' + infoValue + '</h6><span class="ui-li-contnr ui-li-contnr-pos"><br/><span class="ui-li-contnr-inner-new">' + matterType + '</span></span><br/></a><a href="#" id="aaa-' + infoValue + '" data-value="' + existID + '" data-match="' + infoValue + '" data-theme="a" data-map="Map" onclick="return AddMapping(this)"></a></li>';
                                            }
                                        }
                                        else
                                        {
                                            if (Number(serverSync) === 1)
                                            {
                                                //                            dataA = dataA + '<li data-icon="custom" data-search="'+infoValue+'" id="customIconGreen"><a href="#" data-value="'+existID+'" onclick="return performOperations(this)" data-id="'+existID+'" data-op="'+modifyType+'">'+ (i+1) +'. '+infoValue+'</a></br><span class="ui-li-contnr ui-li-contnr-pos"><span class="ui-li-contnr-inner-new">'+matterType+'</span></span></li>';
                                                dataA = dataA + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconGreen"><a href="#" data-value="' + existID + '" onclick="return performOperations(this)" data-id="' + existID + '" data-op="' + modifyType + '"><h2>' + (i + 1) + '. ' + infoValue + '</h2><p style="color:red">' + matterType + '</p></a></li>';
                                            }
                                            if (Number(serverSync) === 0 && modifyType === 'del')
                                            {
                                                //                            dataA = dataA + '<li data-icon="custom" data-search="'+infoValue+'" id="customIconRed"><a href="#" data-value="" onclick="return performOperations(this)" data-id="'+existID+'" data-register="'+isRegistered+'" data-op="'+modifyType+'">'+ (i+1) +'. '+infoValue+'</a><span class="ui-li-contnr ui-li-contnr-pos"><span class="ui-li-contnr-inner-new">'+matterType+'</span></span></li>';
                                                dataA = dataA + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconRed"><a href="#" data-value="' + existID + '" onclick="return performOperations(this)" data-id="' + existID + '" data-op="' + modifyType + '"><h2>' + (i + 1) + '. ' + infoValue + '</h2><p style="color:red">' + matterType + '</p></a></li>';
                                            }
                                            if (Number(serverSync) === 0 && modifyType === 'add')
                                            {
                                                //                            dataA = dataA + '<li data-icon="custom" data-search="'+infoValue+'" id="customIconGold"><a href="#" data-value="'+existID+'" onclick="return performOperations(this)" data-id="'+existID+'" data-register="'+isRegistered+'" data-op="'+modifyType+'">'+ (i+1) +'. '+infoValue+'</a><span class="ui-li-contnr ui-li-contnr-pos"><span class="ui-li-contnr-inner-new">'+matterType+'</span></span></li>';
                                                dataA = dataA + '<li data-icon="custom" data-search="' + infoValue + '" id="customIconGold"><a href="#" data-value="' + existID + '" onclick="return performOperations(this)" data-id="' + existID + '" data-op="' + modifyType + '"><h2>' + (i + 1) + '. ' + infoValue + '</h2><p style="color:red">' + matterType + '</p></a></li>';
                                            }
                                        }
                                    }
                                    myAccountListA.empty();
                                    myAccountListA.append(dataA).listview("refresh");
                                    $("#prev").attr('data-startval', prevStartVal);
                                    $("#prev").attr('data-current', prevCurrentVal);
                                    $("#next").attr('data-endval', nxtEndVal);
                                    $("#next").attr('data-current', nxtCurrentVal);
                                    var RemPaging = {
                                        'prevStartVal': prevStartVal,
                                        'prevCurrentVal': prevCurrentVal,
                                        'nxtEndVal': nxtEndVal,
                                        'nxtCurrentVal': nxtCurrentVal,
                                        'searchtype': searchtype,
                                        'Search': inputText
                                    };
                                    localStorage.setItem('RemPaging', JSON.stringify(RemPaging));
                                }
                                $.mobile.loading('hide');
                            }
                            catch (err)
                            {
                                var errMsg = err + "\nMethod: #prev(jquery) case tx1" + "\nError Stack:" + err.stack;
                                insertErrorLogs(errMsg, function(id) {});
                            }
                        }, function(err)
                        {
                            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: #prev(executeSql) case";
                            insertErrorLogs(errMsg, function(id) {});
                        });
                    }, errorCB, successCB);
                }
                catch (err)
                {
                    var errMsg = err + "\nMethod: #prev(jquery) click" + "\nError Stack:" + err.stack;
                    insertErrorLogs(errMsg, function(id) {});
                }
            }
        }
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: #prev(jquery) click" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id) {});
    }
});

function selectCountString(tx, type, callBack)
{
    var query = "SELECT COUNT(*) as count FROM existings where info_type='" + type + "' AND modify_type<>'add' AND modify_type<>'del' and server_sync<>2;";
    tx.executeSql(query, [], function(tx, result)
    {
        var len = result.rows.length;
        if (len > 0)
        {
            if (typeof callBack !== 'undefined')
            {
                callBack(tx, result.rows.item(0).count);
            }
        }
        else
        {
            if (typeof callBack !== 'undefined')
            {
                callBack(tx, '0');
            }
        }
    }, function(err)
    {
        var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: selectCountString(executeSql)";
        insertErrorLogs(errMsg, function(id) {});
    });
}
var totalComa = 0;
var limitCross = false;
$(document).on('keyup', '#txt_new_string', function(event)
{
    if (event.which == 188)
    {
        format_search_string();
    }
});

function format_search_string(callBack)
{
    try
    {
        var data = $("#txt_new_string").val().trim();
        var returnStatus = true;
        if (data.indexOf(',') !== -1)
        {
            var wordStrings = data.split(',');
            var j = 0;
            while (j < wordStrings.length)
            {
                var searchString = wordStrings[j];
                if (searchString.trim().length > 0)
                {
                    searchString = searchString.replace(/[_\s]+/g, ' ');
                    if (searchString.indexOf(',') !== -1)
                    {
                        searchString = searchString.substring(0, searchString.trim().length - 1);
                    }
                    if (searchString.trim().length < 10 || searchString.trim().length > 26)
                    {
                        drawToast("' " + searchString.trim() + " '<br/>should have more 10 char and less then 26 char.");
                        event.preventDefault();
                        returnStatus = false;
                        return false;
                        break;
                    }
                    if ($.inArray(searchString, wordStrings) >= 0 && $.inArray(searchString, wordStrings) != j.toString())
                    {
                        drawToast("' " + searchString + " '<br/>Already Exist.");
                        event.preventDefault();
                        returnStatus = false;
                        return false;
                        break;
                    }
                }
                j++;
            }
        }
        else
        {
            data = data.replace(/[_\s]+/g, ' ');
            if (data.indexOf(',') !== -1)
            {
                data = data.substring(0, data.trim().length - 1);
            }
            if (data.trim().length < 10 || data.trim().length > 26)
            {
                $("#txt_new_string").val(data.substring(0, data.trim().length));
                drawToast("' " + data.trim() + " '<br/>should have more 10 char and less then 26 char.");
                event.preventDefault();
                returnStatus = false;
                return false;
            }
        }
        if (!allowAlphaAndSpace(data))
        {
            $("#txt_new_string").focus();
            drawToast("Only alphabets,commas and spaces are allowed.");
            returnStatus = false;
            return false;
        }
        if (typeof callBack !== 'undefined')
        {
            callBack(returnStatus);
        }
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: format_search_string(jquery) " + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
}

function addNewString()
{
    try
    {
        var data = $("#txt_new_string").val();
        if (data.length === 0)
        {
            $("#txt_new_string").focus();
            drawToast("Enter Valid String");
            return false;
        }
        format_search_string(function(status)
        {
            if (status)
            {
                if (data.indexOf(',') < 0)
                {
                    data = data + ",";
                }
                db.transaction(function(tx)
                {
                    if (data.indexOf(',') !== -1)
                    {
                        var dataArray = data.split(',');
                        var arrayLength = dataArray.length;
                        count = arrayLength;
                        for (var i = 0; i < arrayLength; i++)
                        {
                            if (i === (arrayLength - 1))
                            {
                                if (dataArray[i].trim().length > 0)
                                {
                                    insertExistingsIfNotExists(tx, tabSelected, dataArray[i], 0, 'add', directOP, function(tx, result)
                                    {
                                        if (result !== "")
                                        {
                                            if (!--count)
                                            {
                                                $("#txt_new_string").val('');
                                                if (tabSelected !== "")
                                                {
                                                    checkAndSendRequestForChanges(tabSelected);
                                                }
                                                else
                                                {
                                                    checkAndSendRequestForChanges('search');
                                                }
                                            }
                                        }
                                        else
                                        {
                                            drawToast("Already exist !");
                                        }
                                    });
                                }
                                else
                                {
                                    $("#txt_new_string").val('');
                                    if (tabSelected !== "")
                                    {
                                        checkAndSendRequestForChanges(tabSelected);
                                    }
                                    else
                                    {
                                        checkAndSendRequestForChanges('search');
                                    }
                                }
                            }
                            else
                            {
                                insertExistingsIfNotExists(tx, tabSelected, dataArray[i], 0, 'add', directOP);
                                count--;
                            }
                        }
                    }
                }, errorCB, successCB);
            }
        });
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: addNewString(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id) {});
    }
}

function isExistingsRequested(tx, info_type)
{
    tx.executeSql('UPDATE existings set is_requested=1 where modify_type<>"new" AND info_type=?;', [info_type], function(tx, result) {}, function(err)
    {
        var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: isExistingsRequested(executeSql)";
        insertErrorLogs(errMsg, function(id)
        {
//            alert("Oops! Something went worng with db.")
        });
    });
}

function updationForExistings(tx, server_sync, info_type, info_value, modify_type, set_modify_type, client_req_time)
{
    tx.executeSql('UPDATE existings set server_sync=?,modify_type=?,is_requested=0 where info_type=? and info_value=? and modify_type=? and client_req_time=?;', [server_sync, set_modify_type, info_type, info_value, modify_type, client_req_time], function(tx, result) {}, function(err)
    {
        var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: updationForExistings(executeSql)";
        insertErrorLogs(errMsg, function(id)
        {
//            alert("Oops! Something went worng with db.")
        });
    });
}

function requestForChanges(tx, callBack)
{
    var resultSet = [];
    var maxId = 0;
    tx.executeSql("SELECT (CASE WHEN exist_id is null THEN '0' ELSE exist_id END) as exist_id,(CASE WHEN info_value is null THEN ' ' ELSE info_value END) as info_value,(CASE WHEN modify_type is null THEN ' ' ELSE modify_type END) as modify_type ,(CASE WHEN direct_op is null THEN '0' ELSE direct_op END) as direct_op ,(CASE WHEN user_id is null THEN ' ' ELSE user_id END) as user_id,(CASE WHEN client_req_time is null THEN '0' ELSE client_req_time END) as client_req_time FROM user_settings LEFT JOIN (select * from existings where is_requested=0 and info_type='search' and server_sync<>2 and modify_type<>'new' order by info_value);", [], function(tx, result)
    {
        try
        {
            for (var j = 0; j < result.rows.length; j++)
            {
                resultSet[j] = result.rows.item(j);
            }
            if (result.rows.length > 0)
            {
                maxId = result.rows.item(result.rows.length - 1).exist_id;
            }
            var searchData = new Object();
            searchData.data1 = resultSet;
            var url = MR_URL;
            var port = '8111';
            var webMethod = protocal + url + '/WebService_andriod.asmx/search_updation_my_account';
            var requestTime = new Date().getTime();
            if (resultSet.length > 0)
            {
                $.ajax(
                {
                    type: "POST",
                    url: webMethod,
                    data: JSON.stringify(searchData),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function(searchString)
                    {
                        try
                        {
                            if (!isUpdateCalled)
                            {
                                $.mobile.loading('hide');
                            }
                            var returedString = searchString.d.split('@@');
                            if (returedString[0] !== 'no')
                            {
                                var allSearchString = '';
                                if (returedString[0].trim().indexOf(',') !== -1)
                                {
                                    allSearchString = returedString[0].trim().split(',');
                                    db.transaction(function(tx)
                                    {
                                        for (var jj = 0; jj < allSearchString.length; jj++)
                                        {
                                            if (allSearchString[jj] !== "")
                                            {
                                                insertExistingsIfNotExists(tx, 'search', allSearchString[jj], '1', 'new', directOP);
                                            }
                                        }
                                    }, errorCB, successCB);
                                }
                                else
                                {
                                    db.transaction(function(tx)
                                    {
                                        if (returedString[0] !== "")
                                        {
                                            insertExistingsIfNotExists(tx, 'search', returedString[0], '1', 'new', directOP);
                                        }
                                    }, errorCB, successCB);
                                }
                            }
                            db.transaction(function(tx)
                            {
                                isExistingsRequested(tx, 'search');
                            }, errorCB, successCB);
                            if (returedString[1] !== 'noUpdate')
                            {
                                var allUpdates = returedString[1].split(',');
                                db.transaction(function(tx)
                                {
                                    for (var ii = 0; ii < allUpdates.length; ii++)
                                    {
                                        var newUpdations = allUpdates[ii].split(':');
                                        if (newUpdations[2] === 'accepted')
                                        {
                                            if (newUpdations[1] === 'add')
                                            {
                                                updationForExistings(tx, '2', 'search', newUpdations[0], newUpdations[1], 'new', newUpdations[3]);
                                            }
                                            else
                                            {
                                                updationForExistings(tx, '2', 'search', newUpdations[0], newUpdations[1], newUpdations[1], newUpdations[3]);
                                            }
                                        }
                                        else
                                        {
                                            if (newUpdations[1] === 'del')
                                            {
                                                updationForExistings(tx, '1', 'search', newUpdations[0], newUpdations[1], 'new', newUpdations[3]);
                                            }
                                            else
                                            {
                                                updationForExistings(tx, '2', 'search', newUpdations[0], newUpdations[1], newUpdations[1], newUpdations[3]);
                                            }
                                        }
                                    }
                                }, errorCB, successCB);
                            }
                            if (typeof callBack !== 'undefined')
                            {
                                callBack("Done");
                            }
                        }
                        catch (err)
                        {
                            $.mobile.loading('hide');
                            var errMsg = err + "\nMethod: requestForChanges(jquery) ajax" + "\nError Stack:" + err.stack;
                            insertErrorLogs(errMsg, function(id) {});
                        }
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown)
                    {
                        $.mobile.loading('hide');
                        var responseTime = new Date().getTime();
                        var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: requestForChanges(ajax call)";
                        errMsg = errMsg + "\n App Version : " + version;
                        insertLog(requestTime, responseTime, errMsg, function(returnId) {});
                        alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
                        calledBeforeSendAnyRequest(function(isConnected)
                        {
                            if (isConnected)
                            {}
                        });
                    },
                    beforeSend: function()
                    {
                        $.mobile.loading('show',
                        {
                            text: 'Loading...',
                            textVisible: true,
                            theme: 'b',
                            textonly: false
                        });
                    },
                    complete: function() {}
                });
            }
            //}
        }
        catch (err)
        {
            var errMsg = err + "\nMethod: requestForChanges(jquery) tx1" + "\nError Stack:" + err.stack;
            insertErrorLogs(errMsg, function(id) {});
        }
    }, function(err)
    {
        var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: requestForChanges(executeSql)";
        insertErrorLogs(errMsg, function(id)
        {
//            alert("Oops! Something went worng with db.")
        });
    });
}

function checkAndSendRequestForChanges(dataFor)
{
//alert('data for'+dataFor);
    $.mobile.activePage.find("#searchMyAccount").val('');
    db.transaction(function(tx)
    {
        requestForChanges(tx, function(data)
        {
            onPagingChange('search');
        });
    }, errorCB, successCB);
}

function initializeMyAccount(initFor)
{
    nxtCurrentVal = 0;
    prevCurrentVal = 0;
    checkAndSendRequestForChanges(initFor);
}

function insertCaseNumberDetails(tx, exist_id, server_case_id, matter_type, listtype, narration, courtname, court_id, callBack) {
    try {
        tx.executeSql('SELECT ecd_id FROM existing_case_details where exist_id=? AND (server_case_id=? OR server_case_id=0) AND matter_type=?;', [exist_id, server_case_id, matter_type], function (tx, result) {
            try {
                var len = result.rows.length;
                if (len > 0) {
                    var ecd_id = result.rows.item(0).ecd_id
                    var queryUp = "UPDATE existing_case_details set exist_id='" + exist_id + "',server_case_id='" + server_case_id + "',matter_type='" + matter_type + "',listtype='" + listtype + "',narration='" + narration + "',court='" + courtname + "',court_id='" + court_id + "'   where ecd_id='" + ecd_id + "';"
                    tx.executeSql(queryUp, [], function (tx, result) {
                        if (typeof callBack !== 'undefined') {
                            callBack(tx, ecd_id);
                        }
                    }, function (err) {
                            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: insertCaseNumberDetails(executeSql) tx1";
                            insertErrorLogs(errMsg, function (id) { });
                        });
                }
                else {
                    tx.executeSql('INSERT INTO existing_case_details (exist_id,server_case_id,matter_type,listtype,narration,court,court_id) VALUES (?,?,?,?,?,?,?);', [exist_id, server_case_id, matter_type, listtype, narration, courtname, court_id], function (tx, result) {
                        if (typeof callBack !== 'undefined') {
                            callBack(tx, result.insertId);
                        }
                    }, function (err) {
                            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: insertCaseNumberDetails(executeSql) tx2";
                            insertErrorLogs(errMsg, function (id) { });
                        });
                }
            }
            catch (err) {
                var errMsg = err + "\nMethod: insertExistingsIfNotExists(jquery) tx1" + "\nError Stack:" + err.stack;
                insertErrorLogs(errMsg, function (id) { });
            }
        }, function (err) {
                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: insertCaseNumberDetails(executeSql)";
                insertErrorLogs(errMsg, function (id) { });
            });
    }
    catch (err) {
        var errMsg = err + "\nMethod: insertCaseNumberDetails(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function (id) { });
    }
}

function updationForCaseExistings(tx, server_sync, info_type, info_value, modify_type, set_modify_type, server_case_id, matter_type)
{
    var query = 'SELECT exist_id FROM existing_case_details where server_case_id=' + server_case_id + ' AND matter_type="' + matter_type + '";';
    if (info_value === 'undefined' || info_value === '' || info_value === null || matter_type === 'undefined' || matter_type === '' || matter_type === null && server_case_id > 0)
    {
        query = 'SELECT exist_id FROM existing_case_details where server_case_id=' + server_case_id + ' ;';
    }
    tx.executeSql(query, [], function(tx, result)
    {
        try
        {
            var len = result.rows.length;
            if (len > 0)
            {
                var exist_id = result.rows.item(0).exist_id
                tx.executeSql('UPDATE existings set server_sync=?,modify_type=?,is_requested=0 where exist_id=?;', [server_sync, set_modify_type, exist_id], function(tx, result) {}, function(err)
                {
                    var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: updationForCaseExistings(executeSql)";
                    insertErrorLogs(errMsg, function(id) {});
                });
            }
        }
        catch (err)
        {
            var errMsg = err + "\nMethod: updationForCaseExistings(jquery) tx1" + "\nError Stack:" + err.stack;
            insertErrorLogs(errMsg, function(id) {});
        }
    }, function(err)
    {
        var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: updationForCaseExistings(executeSql)";
        insertErrorLogs(errMsg, function(id) {});
    });
}

function insertNewCaseNumberUpdateTime(updtTime)
{
    if (updtTime !== null && updtTime !== '')
    {
        if (updtTime.length > 0)
        {
            updtTime = updtTime.replace(/[T]+/g, ' ');
        }
    }
    else
    {
        updtTime = "0";
    }
    db.transaction(function(tx)
    {
        tx.executeSql('SELECT cnul_id FROM case_number_update_logs where update_time=?;', [updtTime], function(tx, result)
        {
            try
            {
                var len = result.rows.length;
                if (len <= 0)
                {
                    tx.executeSql('INSERT INTO case_number_update_logs (update_time) VALUES (?);', [updtTime], successCB, errorCB);
                }
            }
            catch (err)
            {
                var errMsg = err + "\nMethod: insertNewCaseNumberUpdateTime(jquery) tx1" + "\nError Stack:" + err.stack;
                insertErrorLogs(errMsg, function(id) {});
            }
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: insertNewCaseNumberUpdateTime(executeSql)";
            insertErrorLogs(errMsg, function(id) {});
        });
    }, errorCB, successCB);
}

function requestForCaseNumbers(tx, callBack)
{
    window.localStorage.setItem('firstProgress', 'Case Number');
    var resultSet = [];
    var maxId = 0;
    tx.executeSql("SELECT (CASE WHEN exist_id is null THEN 0 ELSE exist_id END) as exist_id,(CASE WHEN info_value is null THEN ' ' ELSE info_value END) as info_value,(CASE WHEN listtype IS NULL THEN '0' ELSE listtype END) AS list_type,(CASE WHEN modify_type is null THEN ' ' ELSE modify_type END) as modify_type ,(CASE WHEN direct_op is null THEN '0' ELSE direct_op END) as direct_op ,(CASE WHEN matter_type is null THEN ' ' ELSE matter_type END) as matter_type,(CASE WHEN server_case_id is null THEN 0 ELSE server_case_id END) as server_case_id,(CASE WHEN user_id is null THEN ' ' ELSE user_id END) as user_id,(CASE WHEN client_req_time is null THEN '0' ELSE client_req_time END) as client_req_time,(CASE WHEN max_store_time is null THEN '0' ELSE max_store_time END) as max_store_time,(CASE WHEN listtype is null THEN ' ' ELSE listtype END) as listtype,(CASE WHEN narration is null THEN ' ' ELSE narration END) as narration,(CASE WHEN court is null THEN ' ' ELSE court END) as court,(CASE WHEN court_id is null THEN '-1' ELSE court_id END) as court_id FROM user_settings LEFT JOIN (SELECT * FROM existings INNER JOIN existing_case_details ON existings.exist_id=existing_case_details.exist_id where is_requested=0 and info_type='case' and modify_type<>'new' order by info_value) JOIN (select max(update_time) as max_store_time from case_number_update_logs ORDER BY cnul_id DESC LIMIT 1);", [], function(tx, result)
    {
        try
        {
            for (var j = 0; j < result.rows.length; j++)
            {
                resultSet[j] = result.rows.item(j);
            }
            if (result.rows.length > 0)
            {
                maxId = result.rows.item(result.rows.length - 1).exist_id;
            }
            var searchData = new Object();
            searchData.data1 = resultSet;
            var url = MR_URL;
            var port = '8111';
            var webMethod = protocal + url + '/WebService_andriod.asmx/case_number_updation_my_account';
            var requestTime = new Date().getTime();
            if (resultSet.length > 0)
            {
                tx.executeSql('select max(update_time) as max_store_time from case_number_update_logs ORDER BY cnul_id DESC LIMIT 1;', [], function(tx, result)
                {
                    try
                    {
                        var max_store_time = "";
                        if (result.rows.length > 0)
                        {
                            max_store_time = result.rows.item(0).max_store_time;
                        }
                        $.ajax(
                        {
                            type: "POST",
                            url: webMethod,
                            data: JSON.stringify(searchData),
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function(caseNumbers)
                            {
                                try
                                {
                                    var obj = $.parseJSON(caseNumbers.d);
                                    var count = 0;
                                    var shouldCallBack = false;
                                    var lenobj = obj.addition.length;
                                    var countpro = 0;
                                    $(obj.addition).each(function(index, caseData)
                                    {
                                        db.transaction(function(tx)
                                        {
                                            if (caseData.casenum !== "" && caseData.casenum !== "no")
                                            {
                                                insertExistingsIfNotExists(tx, 'case', caseData.casenum, '1', 'new', directOP, function(tx, id)
                                                {
                                                    insertCaseNumberDetails(tx, id, caseData.case_id, caseData.mattertype, caseData.listtype, caseData.narration, caseData.court_name, caseData.court_id);
                                                });
                                                countpro++;
                                                updateloding(countpro, count);
                                            }
                                            else
                                            {
                                                countpro++;
                                                updateloding(countpro, count);
                                            }
                                        }, errorCB, successCB);
                                        count++;

                                        if (count >= lenobj)
                                        {
                                            shouldCallBack = true;
                                        }
                                    });
                                    $.each(obj.updation, function(index, updateData)
                                    {
                                        db.transaction(function(tx)
                                        {
                                            if ((updateData.casenum !== "" && updateData.casenum !== "noUpdate") || (updateData.case_id !== "" && updateData.case_id !== "0"))
                                            {
                                                if (updateData.admin_decision === 'accepted')
                                                {
                                                    if (updateData.requested_op === 'add')
                                                    {
                                                        updationForCaseExistings(tx, '1', 'case', updateData.casenum, updateData.requested_op, 'new', updateData.case_id, updateData.mattertype);
                                                    }
                                                    else
                                                    {
                                                        updationForCaseExistings(tx, '2', 'case', updateData.casenum, updateData.requested_op, updateData.requested_op, updateData.case_id, updateData.mattertype);
                                                    }
                                                }
                                                else
                                                {
                                                    if (updateData.requested_op === 'del')
                                                    {
                                                        updationForCaseExistings(tx, '2', 'case', updateData.casenum, updateData.requested_op, 'new', updateData.case_id, updateData.mattertype);
                                                    }
                                                    else
                                                    {
                                                        updationForCaseExistings(tx, '2', 'case', updateData.casenum, updateData.requested_op, updateData.requested_op, updateData.case_id, updateData.mattertype);
                                                    }
                                                }
                                                countpro++;
                                                updateloding(countpro, count);
                                            }
                                        }, errorCB, successCB);
                                        count++;
                                        // updateloding(lenobj);
                                        if (count >= lenobj)
                                        {
                                            shouldCallBack = true;
                                        }
                                    });
                                    $.each(obj.LastUpdate, function(index, caseData)
                                    {
                                        if (caseData.lastUpdateTime !== "no")
                                        {
                                            insertNewCaseNumberUpdateTime(caseData.lastUpdateTime);
                                            countpro++;
                                            updateloding(countpro, count);
                                        }
                                        else
                                        {
                                            countpro++;
                                            updateloding(countpro, count);
                                        }
                                        count++;
                                        // updateloding(lenobj);
                                        if (count >= lenobj)
                                        {
                                            shouldCallBack = true;
                                        }
                                    });
                                    db.transaction(function(tx)
                                    {
                                        isExistingsRequested(tx, 'case');
                                        //window.localStorage.setItem('firstProgress', 'Hide');
                                    }, errorCB, successCB);
                                    if (shouldCallBack)
                                    {
                                        // $.mobile.loading('hide');
                                        // updateloding(100);
                                        if (typeof callBack !== 'undefined')
                                        {
                                            callBack("Done");
                                        }
                                    }
                                }
                                catch (err)
                                {
                                    var errMsg = err + "\nMethod: requestForCaseNumbers(jquery) ajax" + "\nError Stack:" + err.stack;
                                    insertErrorLogs(errMsg, function(id) {});
                                    // $.mobile.loading('hide');
                                }
                            },
                            error: function(XMLHttpRequest, textStatus, errorThrown)
                            {
                                // $.mobile.loading('hide');
                                var responseTime = new Date().getTime();
                                var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: requestForCaseNumbers(ajax call)";
                                errMsg = errMsg + "\n App Version : " + version;
                                insertLog(requestTime, responseTime, errMsg, function(returnId) {});
                                alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
                                calledBeforeSendAnyRequest(function(isConnected)
                                {
                                    if (isConnected)
                                    {}
                                });
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
                            },
                            complete: function() {}
                        });
                    }
                    catch (err)
                    {
                        var errMsg = err + "\nMethod: requestForCaseNumbers(jquery) tx2" + "\nError Stack:" + err.stack;
                        insertErrorLogs(errMsg, function(id) {});
                    }
                }, function(err)
                {
                    var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: requestForCaseNumbers(executeSql) tx2";
                    insertErrorLogs(errMsg, function(id)
                    {
//                        alert("Oops! Something went worng with db.")
                    });
                });
            }
            //}
        }
        catch (err)
        {
            var errMsg = err + "\nMethod: requestForCaseNumbers(jquery) tx1" + "\nError Stack:" + err.stack;
            insertErrorLogs(errMsg, function(id) {});
        }
    }, function(err)
    {
        var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: requestForCaseNumbers(executeSql) tx1";
        insertErrorLogs(errMsg, function(id)
        {
//            alert("Oops! Something went worng with db.")
        });
    });
}

function checkAndSendRequestForCaseNumber(dataFor)
{
    db.transaction(function(tx)
    {
        requestForCaseNumbers(tx, function(data)
        {
            onPagingChange('case');
        });
    }, errorCB, successCB);
}
$(document).on('pagebeforeshow', '#caseNumbers', function(event, ui)
{
    PrevoisPageAll = "CasePage";
    //alert('caseNumber page');
    calledBeforeSendAnyRequest(function(isConnected)
    {
        if (isConnected)
        {
            if (tabSelected !== "")
            {
                getPackageCost(function(isActive)
                {
                    initializeMyAccountCaseNumbers(tabSelected);
                });
            }
            else
            {
                getPackageCost(function(isActive)
                {
                    initializeMyAccountCaseNumbers("case");
                });
            }
        }
    });
});

function initializeMyAccountCaseNumbers(initFor)
{
    nxtCurrentVal = 0;
    prevCurrentVal = 0;
    $.mobile.activePage.find("#searchMyAccount").val('');
    populateMatterType();
    populateListcourtType();
    populatecourtname();
    checkAndSendRequestForCaseNumber(initFor);
}
$(document).on('keyup', '#txt_new_case_number', function(event)
{
    if ($(this).is(":disabled"))
    {
        return;
    }
    format_case_number();
});

function allowAlphaNumeric(strng)
{
    var regex = /^[a-zA-Z0-9]+$/;
    return regex.test(strng);
}

function format_case_number()
{
    try
    {
        var data = $("#txt_new_case_number").val().trim();
        if (!allowAlphaNumeric(data))
        {
            $("#txt_new_case_number").focus();
            data = data.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]+/g, '');
            $("#txt_new_case_number").val(data);
            drawToast("Only alphabet and numeric characters are allowed.");
            event.preventDefault();
            return false;
        }
        else
        {
            $("#txt_new_case_number").val(data.trim());
        }
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: format_case_number(jquery) " + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
}

function addNewCaseNumber()
{
    try
    {
        var data = $("#txt_new_case_number").val();
        if (data.length === 0)
        {
            $("#txt_new_case_number").focus();
            drawToast("Enter Valid String");
            return false;
        }
        format_case_number();
        if (tabSelected === 'case')
        {
            if (data.length < 5)
            {
                $("#txt_new_string").val(data.substring(0, data.length));
                drawToast("Case Number can not be less then 5 char.");
                event.preventDefault();
                return false;
            }
        }
        var nMatterType = $('#select_matter option:selected').val();
        var txtMatterType = $("#select_matter option:selected").text();
        var nddllisttype = $('#ddllisttype option:selected').val();
        var txtddllisttype = $("#ddllisttype option:selected").text();
        var nddlcourt = $('#ddlcourt option:selected').val();
        var txtddlcourt = $("#ddlcourt option:selected").text();
        var txt_narration = $("#txt_narration").val();
        var t = document.getElementById("ddllisttype");
        txtddllisttype = t.options[t.selectedIndex].text;
        db.transaction(function(tx)
        {
            insertExistingsIfNotExists(tx, 'case', data, '0', 'add', directOP, function(tx, id)
            {
                insertCaseNumberDetails(tx, id, 0, txtMatterType, txtddllisttype, txt_narration, txtddlcourt, nddlcourt, function (tx, result)
                {
                    if (result !== "")
                    {
                        $("#txt_new_string").val('');
                        $("#txt_new_case_number").val('');
                        $("#txt_narration").val('')
                        if (tabSelected !== "")
                        {
                            checkAndSendRequestForCaseNumber(tabSelected);
                        }
                        else
                        {
                            checkAndSendRequestForCaseNumber('case');
                        }
                    }
                    else
                    {
                        drawToast("Already exist !");
                    }
                });
            });
        }, errorCB, successCB);
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: addNewCaseNumber(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id) {});
    }
}

function populateListType()
{

    try
    {
        db.transaction(function(tx)
        {
            var query = 'SELECT DISTINCT list_type FROM existing_case_details ORDER BY list_type;';
            tx.executeSql(query, [], function(tx, result)
            {
                try
                {
                    var listTypeDropDown = $('#select_list');
                    listTypeDropDown.empty();
                    listTypeDropDown.selectmenu("refresh");
                    var len = result.rows.length;
                    var i = 0;
                    while (i < len)
                    {
                        if (result.rows.item(i).list_type.trim().length > 0)
                        {
                            listTypeDropDown.append('<option value="' + result.rows.item(i).list_type + '">' + result.rows.item(i).list_type + '</option>');
                        }
                        i++;
                    }
                    if (i > 0)
                    {
                        $('#select_list>option:nth-child(1)').attr('selected', true);
                        listTypeDropDown.selectmenu("refresh");
                    }
                }
                catch (err)
                {
                    var errMsg = err + "\nMethod: populateListType(jquery) tx1" + "\nError Stack:" + err.stack;
                    insertErrorLogs(errMsg, function(id)
                    { //alert("Oops! Something went worng.")
                    });
                }
            }, function(err)
            {
                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: populateListType(executeSql)";
                insertErrorLogs(errMsg, function(id)
                { //alert("Oops! Something went worng with db.")
                });
            });
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: populateListType(transaction)";
            insertErrorLogs(errMsg, function(id)
            { //alert("Oops! Something went worng with db.")
            });
        }, successCB);
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: populateListType(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
}

function populateMatterType()
{
    try
    {
        db.transaction(function(tx)
        {
            var query = 'SELECT DISTINCT matters FROM matter_type ORDER BY matters;';
            tx.executeSql(query, [], function(tx, result)
            {
                try
                {
                    var matterTypeDropDown = $('#select_matter');
                    matterTypeDropDown.empty();
                    matterTypeDropDown.selectmenu("refresh");
                    var len = result.rows.length;
                    var i = 0;
                    while (i < len)
                    {
                        if (result.rows.item(i).matters !== null && result.rows.item(i).matters !== 'undefined')
                        {
                            if (result.rows.item(i).matters.trim().length > 0)
                            {
                                matterTypeDropDown.append('<option value="' + result.rows.item(i).matters + '">' + result.rows.item(i).matters + '</option>');
                            }
                        }
                        i++;
                    }
                    if (i > 0)
                    {
                        $('#select_matter>option:nth-child(1)').attr('selected', true);
                        // comented by satish error attempted to call method 'refresh'  add true in selectmenu for forcelly called //
                        matterTypeDropDown.selectmenu('refresh', true);
                    }
                }
                catch (err)
                {
                    var errMsg = err + "\nMethod: populateMatterType(jquery) tx1" + "\nError Stack:" + err.stack;
                    insertErrorLogs(errMsg, function(id)
                    { //alert("Oops! Something went worng.")
                    });
                }
            }, function(err)
            {
                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: populateMatterType(executeSql)";
                insertErrorLogs(errMsg, function(id)
                { //alert("Oops! Something went worng with db.")
                });
            });
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: populateMatterType(transaction)";
            insertErrorLogs(errMsg, function(id)
            { //alert("Oops! Something went worng with db.")
            });
        }, successCB);
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: populateMatterType(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
}

function insertMatterTypes(matterType)
{
    db.transaction(function(tx)
    {
        tx.executeSql('SELECT matters FROM matter_type where matters=?;', [matterType], function(tx, result)
        {
            try
            {
                var len = result.rows.length;
                if (len <= 0)
                {
                    tx.executeSql('INSERT INTO matter_type (matters) VALUES (?);', [matterType], successCB, errorCB);
                }
            }
            catch (err)
            {
                var errMsg = err + "\nMethod: insertMatterTypes(jquery) tx1" + "\nError Stack:" + err.stack;
                insertErrorLogs(errMsg, function(id) {});
            }
        }, function(err)
        {
            var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: insertMatterTypes(executeSql)";
            insertErrorLogs(errMsg, function(id) {});
        });
    }, errorCB, successCB);
}

function getMatterTypes()
{
    db.transaction(function(tx)
    {
        tx.executeSql('SELECT * FROM user_settings where user_id is not null and guid is not null', [], function(tx, result)
        {
            var len = result.rows.length;
            if (len > 0)
            {
                var lawyerid = result.rows.item(0).user_id;
                var url = MR_URL;
                var port = '8111';
                var webMethod = protocal + url + '/WebService_andriod.asmx/getMatterTypes';
                var dataToSend = JSON.stringify(
                {
                    lawyer_id: lawyerid
                });
                var requestTime = new Date().getTime();
                $.ajax(
                {
                    type: "POST",
                    url: webMethod,
                    data: dataToSend,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function(matters)
                    {
                        if (matters.d.length > 0)
                        {
                            var matterType;
                            if (matters.d.indexOf(',') !== -1)
                            {
                                matterType = matters.d.split(',');
                                $.each(matterType, function(index, matterData)
                                {
                                    if (matterType[index] !== '')
                                    {
                                        insertMatterTypes(matterType[index]);
                                    }
                                });
                            }
                        }
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown)
                    {
                        var responseTime = new Date().getTime();
                        var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: requestForCaseNumbers(ajax call)";
                        errMsg = errMsg + "\n App Version : " + version;
                        insertLog(requestTime, responseTime, errMsg, function(returnId) {});
                        calledBeforeSendAnyRequest(function(isConnected)
                        {
                            if (isConnected)
                            {}
                        });
                    },
                    beforeSend: function() {}
                });
            }
        }, errorCB, successCB);
    }, errorCB, successCB);
}

function getUrlVars()
    {
        var vars = [],
            hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }
    //$('#share').on('touchstart', function(e){
    //    $(this).css({
    //        background:'url(../images/icons/ic_action_share_selected_header.png)'
    //    });
    //});
    //$('#share').on('touchend', function(e){
    //    $(this).css({
    //        background:'url(../images/icons/ic_action_open_share.png)'
    //    });
    //});

function animateShareButton()
{
    // $('#share').toggleClass('ui-share-animate-close');
}
$(document).on('panelbeforeclose', '#rightMenucasePage', function(event)
{
    try
    {
        // $('#share').toggleClass('ui-share-animate-close');
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: #rightMenucasePage(jquery) panelbeforeclose" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
});
$(document).on('pagebeforeshow', '#changeDevice', function(event)
{
    try
    {
        var lawyerDetails = JSON.parse(localStorage.getItem("lawyerDetails"));
        var lawyerId = lawyerDetails.lawyerId;
        var lawyerName = lawyerDetails.lawyerName;
        var lawyerMobile = lawyerDetails.lawyerMobile;
        $('#infoLawyerId').text(lawyerId);
        $('#infoAdvocateName').text(lawyerName);
        $('#infoMobileNumber').text(lawyerMobile);
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: #changeDevice(jquery) panelbeforeclose" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
});

function generateAndSendOtp()
{
    var lawyerDetails = JSON.parse(localStorage.getItem("lawyerDetails"));
    var lawyerId = lawyerDetails.lawyerId;
    var lawyerName = lawyerDetails.lawyerName;
    var lawyerMobile = lawyerDetails.lawyerMobile;
    //var lawyerId = '54602';
    //var lawyerName = 'ABCD';
    //var lawyerMobile = '9589746120';
    var registration_id = gApp.gcmregid;
    var cloud_service_name = '';
    try
    {
        if (device.platform == 'android' || device.platform == 'Android')
        {
            cloud_service_name = 'GCM';
        }
        if (device.platform == 'iOS' || device.platform == 'IOS' || device.platform == 'ios')
        {
            cloud_service_name = 'APPLE';
        }
    }
    catch (err)
    {
        cloud_service_name = 'GCM';
    }
    if (lawyerId !== 'undefined')
    {
        var url = MR_URL;
        var port = '8111';
        var webMethod = protocal + url + '/WebService_andriod.asmx/otpGenerate';
        var dataToSend = JSON.stringify(
        {
            lawyer_id: lawyerId,
            deviceInfo: deviceInfo,
            deviceId: deviceID,
            registration_id: registration_id,
            cloud_service_name: cloud_service_name
        });
        var requestTime = new Date().getTime();
        $.ajax(
        {
            type: "POST",
            url: webMethod,
            data: dataToSend,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(result)
            {
                $.mobile.loading('hide');
                if (result.d !== 'failed')
                {
                    $('#btnProceed').hide();
                    $('#otpPanel').show();
                    drawToast("OTP has been sent on your mobile number given during registration !!");
                }
                else
                {
                    if (result.d === 'exceedLimit')
                    {
                        $('#validityPopUp').fadeIn();
                        $('#innerMsg').html("You have exceeded your max device updation limit. Please contact on +918269244088(Mon-Sat, 10AM-7PM).");
                    }
                    else
                    {
                        drawToast("Oops! OTP Sending Failled.");
                    }
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown)
            {
                var responseTime = new Date().getTime();
                var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: generateAndSendOtp(ajax call)";
                errMsg = errMsg + "\n App Version : " + version;
                insertLog(requestTime, responseTime, errMsg, function(returnId) {});
                calledBeforeSendAnyRequest(function(isConnected)
                {
                    if (isConnected)
                    {}
                });
            },
            beforeSend: function()
            {
                // $.mobile.loading('show', { text: 'Please Wait...\nIt might take around 5 min.', textVisible: true, theme: 'a', textonly: false });
            }
        });
    }
}

function reSendOtp()
{
    var lawyerDetails = JSON.parse(localStorage.getItem("lawyerDetails"));
    var lawyerId = lawyerDetails.lawyerId;
    var lawyerName = lawyerDetails.lawyerName;
    var lawyerMobile = lawyerDetails.lawyerMobile;
    if (lawyerId !== 'undefined')
    {
        var url = MR_URL;
        var port = '8111';
        var webMethod = protocal + url + '/WebService_andriod.asmx/otpReSend';
        var dataToSend = JSON.stringify(
        {
            lawyerId: lawyerId,
            deviceId: deviceID,
            deviceInfo: deviceInfo
        });
        var requestTime = new Date().getTime();
        $.ajax(
        {
            type: "POST",
            url: webMethod,
            data: dataToSend,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(result)
            {
                $.mobile.loading('hide');
                if (result.d !== 'failed')
                {
                    drawToast("OTP has been sent on your mobile number given during registration !!");
                }
                else
                {
                    if (result.d === 'exceedLimit')
                    {
                        drawToast("You have exceeded your max otp re-send limit. Please contact on +918269244088(Mon-Sat, 10AM-7PM).");
                    }
                    else
                    {
                        drawToast("Oops! OTP Sending Failled.");
                    }
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown)
            {
                var responseTime = new Date().getTime();
                var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: reSendOtp(ajax call)";
                errMsg = errMsg + "\n App Version : " + version;
                insertLog(requestTime, responseTime, errMsg, function(returnId) {});
                calledBeforeSendAnyRequest(function(isConnected)
                {
                    if (isConnected)
                    {}
                });
            },
            beforeSend: function()
            {
                //  $.mobile.loading('show', { text: 'Please Wait...\nIt might take around 5 min.', textVisible: true, theme: 'a', textonly: false });
            }
        });
    }
}

function validateAndUpdateLawyersUUID()
{
    var lawyerDetails = JSON.parse(localStorage.getItem("lawyerDetails"));
    var lawyerId = lawyerDetails.lawyerId;
    var lawyerName = lawyerDetails.lawyerName;
    var lawyerMobile = lawyerDetails.lawyerMobile;
    var otpPwd = $('#txt_otp').val();
    if (otpPwd !== '')
    {
        if (lawyerId !== 'undefined')
        {
            var url = MR_URL;
            var port = '8111';
            var webMethod = protocal + url + '/WebService_andriod.asmx/validateAndUpdateLawyersUUID';
            var dataToSend = JSON.stringify(
            {
                lawyer_id: lawyerId,
                mobileNumber: lawyerMobile,
                deviceId: deviceID,
                otp: otpPwd
            });
            var requestTime = new Date().getTime();
            $.ajax(
            {
                type: "POST",
                url: webMethod,
                data: dataToSend,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function(result)
                {
                    $.mobile.loading('hide');
                    if (result.d !== 'failed')
                    {
                        // **** temporary changes done by ssharma to operate it on Desktop **** //

                        navigator.notification.alert('Your device id updated successfully. Please re-start application.', // message
                            navigator.app.exitApp(), // callback
                            'Success Alert', // title
                            'Exit' // buttonName
                        );

                        //$.mobile.navigate("index.html",
                        //{
                        //    transition: "slide"
                        //});
                    }
                    else
                    {
                        drawToast("Please insert valid password!");
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown)
                {
                    var responseTime = new Date().getTime();
                    var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: validateAndUpdateLawyersUUID(ajax call)";
                    errMsg = errMsg + "\n App Version : " + version;
                    insertLog(requestTime, responseTime, errMsg, function(returnId) {});
                    calledBeforeSendAnyRequest(function(isConnected)
                    {
                        if (isConnected)
                        {}
                    });
                },
                beforeSend: function()
                {
                    //  $.mobile.loading('show', { text: 'Please Wait...\nIt might take around 5 min.', textVisible: true, theme: 'a', textonly: false });
                }
            });
        }
    }
    else
    {
        drawToast("Please insert valid password!");
    }
}

function SetLawyerIdInLocalStorage()
    {
        db.transaction(function(tx)
        {
            tx.executeSql('SELECT * FROM user_settings', [], function(tx, result)
            {
                var len = result.rows.length;
                if (len > 0)
                {
                    var lawyerId = result.rows.item(0).user_id;
                    var lawyerID = {
                        'lawyerid': lawyerId
                    };
                    localStorage.setItem('lawyerID', JSON.stringify(lawyerID));
                }
            }, errorCB);
        }, errorCB)
    }
    //     function updateSH_server_sync(shid,serversync,opration){
    //if(opration=="Insert"){
    //db.transaction(function(tx){
    // tx.executeSql("update sh_crud set server_sync='"+serversync+"' where sh_crud_id=(select max(sh_crud_id) from sh_crud)", [], function (tx, result) {
    //                    },errorCB);
    //},errorCB);
    //}
    //if(opration=="Update"){
    //db.transaction(function(tx){
    // tx.executeSql("update sh_crud set server_sync='"+serversync+"' where sh_crud_id='"+shid+"'", [], function (tx, result) {
    //                    },errorCB);
    //},errorCB);
    //}
    //    }
    //    function updateSH_server_sync_CaseMapping(shmid,serversync,opration){
    //if(opration=="Insert"){
    //db.transaction(function(tx){
    // tx.executeSql("update SH_Mapping set server_sync='"+serversync+"' where shm_id=(select max(shm_id) from SH_Mapping)", [], function (tx, result) {
    //                    },errorCB);
    //},errorCB);
    //}
    //if(opration=="Delete"){
    //db.transaction(function(tx){
    // tx.executeSql("update SH_Mapping set server_sync='"+serversync+"' where shm_id='"+shmid+"'", [], function (tx, result) {
    //                    },errorCB);
    //},errorCB);
    //}
    //    }
    //        function updateSH_server_sync_Sh_CrudTable(serversync){
    //db.transaction(function(tx){
    //tx.executeSql("update sh_crud set server_sync='"+serversync+"' where server_sync=0", [], function (tx, result) {
    //                    },errorCB);
    //},errorCB);
    //}
    // function updateSH_server_sync_SH_MappingTable(serversync){
    //db.transaction(function(tx){
    //tx.executeSql("update SH_Mapping set server_sync='"+serversync+"' where server_sync=0", [], function (tx, result) {
    //                    },errorCB);
    //},errorCB);
    //}
    //    var max_Sh_crud_id;
    //    function GetMaxSH_ID(){
    //    max_Sh_crud_id=null;
    //    try{
    //    db.transaction(function(tx){
    //    tx.executeSql('SELECT sh_crud_id FROM sh_crud ORDER BY sh_crud_id DESC LIMIT 1;',[],function(tx,result1){
    //                           if(result1.rows.length>=1){
    //                           max_Sh_crud_id=result1.rows.item(0).sh_crud_id;
    //                           max_Sh_crud_id++;
    //                           if(max_Sh_crud_id=="undefined"){max_Sh_crud_id=1;}
    //                           }
    //                           },errorCB);
    //                           },errorCB);}
    //                           catch(err){max_Sh_crud_id=1;}
    //    }
    //var secontime1=false;
    //function insertSHCrudIfNotExists() {
    ////$('#cbEmail').prop('checked', true).checkboxradio('refresh')
    ////$('#cbSMS').prop('checked', false).checkboxradio('refresh');
    //if(secontime1==false){
    //secontime1=true;
    //var notifyEmail="0";
    //var notifySMS="0";
    //if($('#cbEmail').is(':checked')){
    //notifyEmail="1";
    // }
    //else {
    //notifyEmail="0";
    // }
    // if($('#cbSMS').is(':checked')){
    // notifySMS="1";
    // }
    //else{
    //notifySMS="0";
    //}
    //var txtUserName = $("#name").val();
    //    if (txtUserName.trim().length == 0) {
    //        $("#name").focus();
    //        drawToast("Enter Stakeholder Name");
    //        secontime1=false;
    //        return false;
    //    }
    //    var txtMobileNo = $("#mobile").val();
    //    if (txtMobileNo.trim().length == 0) {
    //        $("#mobile").focus();
    //        drawToast("Enter Mobile Number");
    //        secontime1=false;
    //        return false;
    //    }
    //    else {
    //        if (!isNumber(txtMobileNo)) {
    //            $("#mobile").select().focus();
    //            drawToast("Enter Valid Mobile Number");
    //            secontime1=false;
    //            return false;
    //        }
    //        if (txtMobileNo.trim().length < 10) {
    //            $("#mobile").focus();
    //            drawToast("Enter Valid Mobile Number");
    //            secontime1=false;
    //            return false;
    //        }
    //    }
    //    var txtUserEmailId = $("#email").val();
    //    if (txtUserEmailId.trim().length != 0) {
    //            if (!IsEmail(txtUserEmailId)) {
    //            $("#email").focus();
    //            drawToast("Enter Proper Email Id");
    //            secontime1=false;
    //            return false;
    //        }
    //    }
    //   var txtCompany = $("#company").val();
    //    GetMaxSH_ID();
    //
    //    db.transaction(function(tx){
    //
    //        tx.executeSql('SELECT sh_crud_id FROM sh_crud where name=?', [txtUserName], function (tx, result) {
    //        try{
    //                var len = result.rows.length;
    //                if (len > 0) {
    //                    drawToast("This name is already exist!!");
    //                    secontime1=false;
    //                }
    //                else {
    //                if(max_Sh_crud_id=="" || max_Sh_crud_id=="undefined" || max_Sh_crud_id==null){
    //                            max_Sh_crud_id=1;
    //                            }
    //                    tx.executeSql('INSERT INTO sh_crud (sh_crud_id,name,mobile,email,server_sync,notify_sms,notify_email,company_name) VALUES (?,?,?,?,?,?,?,?);', [max_Sh_crud_id,txtUserName,txtMobileNo,txtUserEmailId,"0",notifySMS,notifyEmail,txtCompany],
    //                        function (tx, result) {
    //                            $("#name").val('');
    //                            $("#mobile").val('');
    //                            $("#email").val('');
    //                            $("#company").val('');
    //
    //$('#cbSMS').prop('checked', true).checkboxradio('refresh');
    //$('#cbEmail').prop('checked', true).checkboxradio('refresh');
    //                            calledBeforeSendAnyRequest(function(isConnected){
    //                            if(isConnected==true){
    //
    //                           var lawyerD = JSON.parse(localStorage.getItem("lawyerID"));
    //                           var lawyerId = lawyerD.lawyerid;
    //                        var url = MR_URL;
    //                        var port = '8111';
    //                        var requestTime = new Date().getTime();
    //                        var webMethod = protocal + url + '/WebService_andriod.asmx/AddStackeHolder';
    //                        $.ajax({
    //                        type: "POST",
    //                        url: webMethod,
    //                        data: JSON.stringify({ lawyerId: lawyerId, shId:max_Sh_crud_id ,ShName: txtUserName, mobile: txtMobileNo, email: txtUserEmailId ,notify_sms:notifySMS,notify_email:notifyEmail,company_name:txtCompany}),
    //                        contentType: "application/json; charset=utf-8",
    //                        dataType: "json",
    //                        success: function (msg) {
    //                        if(msg.d=="done"){
    //                        updateSH_server_sync(max_Sh_crud_id,"1","Insert");
    //                        $.mobile.loading('hide');
    //                        secontime1=false;
    //                        }
    //                        else
    //                        {
    //                         $.mobile.loading('hide');
    //                         secontime1=false;
    //                        }
    //                        },
    //                        error: function (XMLHttpRequest, textStatus, errorThrown) {
    //                            $.mobile.loading('hide');
    //                            var responseTime = new Date().getTime();
    //                            var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: insertSHCrudIfNotExists(ajax call)";
    //                            errMsg = errMsg + "\n App Version : "+ version;
    //                            insertLog(requestTime, responseTime, errMsg, function (returnId) { });
    //                            alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
    //
    //                        },
    //                        beforeSend: function () {
    //                            $.mobile.loading('show', {
    //                                text: 'Please Wait...',
    //                                textVisible: true,
    //                                theme: 'a',
    //                                textonly: false
    //                            });
    //
    //                        }
    //                        });
    //                            }
    //                            else{
    //                            secontime1=false;
    //                            }
    //                         });
    //                         //End Server Sync Code
    //                         drawToast("Successfully Inserted!!");
    //                        }, errorCB);
    //                }
    //            }
    //            catch(err){
    //                var errMsg = err + "\nMethod: insertSHCrudIfNotExists(jquery) tx1." + "\nError Stack:" + err.stack; insertErrorLogs(errMsg, function (id) {
    //                });
    //             }
    //        }, errorCB);
    //    },errorCB,successCB);
    //    }
    //}
    //$(document).on('pagebeforeshow', '#allSHList', function (event, ui) {
    //    try{
    //        //Server_Sync_Stackeholder();
    //        getStakeHolder();
    //    }
    //    catch(err){
    //    }
    //});
    //function getSocialAccount() {
    //    db.transaction(function(tx){
    //        var query = "select * from social_account;";
    //        tx.executeSql(query, [], function(tx,results){
    //         var len = results.rows.length;
    //         $('#shListSocial').empty();
    //    for (var i=0; i<len; i++) {
    //        var SH = results.rows.item(i);
    //    $('#shListSocial').append('<li><a href="#" data-icon="edit">' +
    //
    //                '<h2>' + SH.email + '</h2>' +
    //                '</a><a href="#" data-icon="edit" onclick="EditSocialAccount(\''+SH.acc_id+'\')">></a></li>').listview("refresh");
    //        $('#shListSocial').trigger("updatelayout");
    //    }
    //        },errorCB,successCB);
    //    },errorCB,successCB);
    //}
    //function getStakeHolder() {
    //    db.transaction(function(tx){
    //        var query = "select * from sh_crud;";
    //        tx.executeSql(query, [], getStakeHolder_success);
    //    },errorCB,successCB);
    //}
    //function getStakeHolderByName(Name,callBack) {
    //    db.transaction(function(tx){
    //        var query = "select * from sh_crud where name=?;";
    //        tx.executeSql(query, [Name], function(tx,result){
    //        if(typeof callBack!=='undefined'){
    //        callBack(result.rows.item(0).sh_crud_id);
    //        }
    //        },errorCB,successCB);
    //    },errorCB,successCB);
    //}
    //function getStakeHolder_success(tx, results) {
    //    var len = results.rows.length;
    //    for (var i=0; i<len; i++) {
    //        var SH = results.rows.item(i);
    //        $('#shList').append('<li><a href="#" data-icon="edit" onclick="gotoShMapping(\''+SH.name+'\',\''+SH.sh_crud_id+'\')">' +
    //                '<img src="images/icons/ic_action_img_not_avail.png"/>' +
    //                '<h2>' + SH.name + '</h2>' +
    //                '<p>+91-' + SH.mobile + ', '+ SH.email +'</p>' +
    //                '</a><a href="#" data-icon="edit" onclick="EditStackeHolder(\''+SH.sh_crud_id+'\')">></a></li>').listview("refresh");
    //        $('#shList').trigger( "updatelayout");
    //    }
    //}
    //function EditStackeHolder(shId)
    //{
    //var previousPage =PrevoisPageAll;
    //var Prevpage={'prevpage':previousPage,'shid':shId};
    //localStorage.setItem('Prevpage',JSON.stringify(Prevpage));
    //$.mobile.navigate("shCrud.htm",{transition: "slide"});
    //}
    //function EditSocialAccount(Id)
    //{
    //    updateIdSocial=Id;
    //    ShowAccountDetail(updateIdSocial);
    //    $('#btnSubmitSocial').text('Update');
    //    $.mobile.activePage.find("#btnSubmitSocial").val('update');
    //    $('#btnSubmitSocial').button('refresh');
    //
    //}
    //function gotoShMapping(shName,shId){
    //    var shMapData = { 'shName': shName,'shId':shId };
    //    localStorage.setItem('shMapData', JSON.stringify(shMapData));
    //    var RemPaging={'prevStartVal':0,'prevCurrentVal':0 ,'nxtEndVal':0,'nxtCurrentVal':0,'searchtype':'all','Search':''};
    //    localStorage.setItem('RemPaging',JSON.stringify(RemPaging));
    //    $.mobile.navigate("shMapping.htm", {transition: "slide"});
    //}
    //function ShowMappingPageData(){
    // try{
    //      showSHMapping();
    //      var shMapData = JSON.parse(localStorage.getItem("shMapData"));
    //      var shId = shMapData.shId;
    //      CheckPreviousMapping(shId);
    //              var RemPaging = JSON.parse(localStorage.getItem("RemPaging"));
    //            var st  = RemPaging.searchtype;
    //            var it  = RemPaging.Search;
    //                                    // Grab a select field
    //                                    var el = $.mobile.activePage.find("#mappingOptions");
    //                                    // Select the relevant option, de-select any others
    //                                    el.val(st).attr('selected', true).siblings('option').removeAttr('selected');
    //                                    // jQM refresh
    //                                    el.selectmenu("refresh", true);
    //      $.mobile.activePage.find("#searchMyAccount").val(it);
    //      initializeMyAccountCaseNumbers("case");
    //    }
    //    catch(err){
    //                var RemPaging={'prevStartVal':0,'prevCurrentVal':0 ,'nxtEndVal':0,'nxtCurrentVal':0,'searchtype':'all','Search':''};
    //                localStorage.setItem('RemPaging',JSON.stringify(RemPaging));
    //                 var RemPaging = JSON.parse(localStorage.getItem("RemPaging"));
    //                 var st  = RemPaging.searchtype;
    //                                    // Grab a select field
    //                                    var el = $.mobile.activePage.find("#mappingOptions");
    //                                    // Select the relevant option, de-select any others
    //                                    el.val(st).attr('selected', true).siblings('option').removeAttr('selected');
    //                                    // jQM refresh
    //                                    el.selectmenu("refresh", true);
    //                initializeMyAccountCaseNumbers("case");
    //    }
    //}
    //$(document).on('pagebeforeshow','#socialAccount',function(){
    //getSocialAccount();
    //});

function GetLawyerID()
{
    db.transaction(function(tx)
    {
        tx.executeSql('SELECT * FROM user_settings where user_id is not null', [], function(tx, result)
        {
            var len = result.rows.length;
            if (len > 0)
            {
                var lawyerid = result.rows.item(0).user_id;
                var lawyerID = {
                    'lawyerid': lawyerid
                };
                localStorage.setItem('lawyerID', JSON.stringify(lawyerID));
            }
        }, errorCB);
    }, errorCB);
}
$(document).on('pageshow', '#casePage', function()
{
    //var admob_vars = {
    //           pubid: 'a153391c2d52656', // publisher id
    //           bgcolor: '000000', // background color (hex)
    //           text: 'FFFFFF', // font-color (hex)
    //           test: true, // test mode, set to false to receive live ads
    //           manual_mode: true
    //       };
    //       var aaa = $.mobile.activePage.find("#UnikID");
    //       _admob.fetchAd(aaa);
    //var aaa = $.mobile.activePage.find("#share").val();
    var PG = JSON.parse(localStorage.getItem("prevpagedetail"));
    if (PG != null)
    {
        Prevpageupdate = PG.prevpage;
        var prevpagedetail = {
            'prevpage': 'Null'
        };
        localStorage.setItem('prevpagedetail', JSON.stringify(prevpagedetail));
        alert(Prevpageupdate);
        if (Prevpageupdate != "allSHList")
        {
            $("#btnBackIndex").parent().hide();
            $("#Backbtndiv").attr('class', 'backdiv');
        }
        else
        {
            $("#btnBackIndex").parent().show();
            $("#Backbtndiv").attr('class', 'backdivO');
        }
    }
    else
    {
        $("#btnBackIndex").parent().hide();
        $("#Backbtndiv").attr('class', 'backdiv')
    }
});
//var Prevpageupdate;
//var updateId;
//$(document).on('pageshow', '#shCrud', function (event, ui) {
//var PG=JSON.parse(localStorage.getItem("Prevpage"));
//if(PG!=null){
//Prevpageupdate =PG.prevpage;
//updateId =PG.shid;
//var Prevpage={'prevpage':'null','shid':0};
//localStorage.setItem('Prevpage',JSON.stringify(Prevpage));
//    if(Prevpageupdate!='null'){
//    $('#btnSubmit').text('Update');
//    $.mobile.activePage.find("#btnSubmit").val('update');
//    $('#btnSubmit').button('refresh');
//  }
//  else
//  {
//    $('#btnSubmit').text('Submit');
//    $.mobile.activePage.find("#btnSubmit").val('submit');
//    $('#btnSubmit').button('refresh');
//  }
//  }
//  else
//  {
//     $('#btnSubmit').text('Submit');
//    $.mobile.activePage.find("#btnSubmit").val('submit');
//    $('#btnSubmit').button('refresh');
//  }
//   var a= $.mobile.activePage.find("#btnSubmit").val();
//   if(a=="submit")
//    {
//    }
//    else
//    {
//    ShowStackeHolderDetail(updateId);
//
//    }
//    });
//    $(document).on('click', '#btnSubmit', function (event, ui) {
//
//   var a= $.mobile.activePage.find("#btnSubmit").val();
//   if(a=="submit")
//    {
//    insertSHCrudIfNotExists();
//    }
//    else
//    {
//    UpdateStackeHolderDetail(updateId);
//    }
//    });
//     $(document).on('click', '#btnSubmitSocial', function (event, ui) {
//
//   var a= $.mobile.activePage.find("#btnSubmitSocial").val();
//   if(a=="submit")
//    {
//    insertAccountDetail();
//    }
//    else
//    {
//    UpdateAccountDetail(updateIdSocial);
//
//    }
//    });
//function insertAccountDetail() {
//  var ddlNetwork = $("#networkoption").val();
//    if(ddlNetwork=="Choose Network"){
//    drawToast("Choose any Network");
//    return false;
//    }
//
//    var txtUserEmailId = $("#email").val();
//    if (txtUserEmailId.trim().length == 0) {
//        $("#email").focus();
//        drawToast("Enter Email Id");
//        return false;
//    }
//    else {
//        if (!IsEmail(txtUserEmailId)) {
//            $("#email").focus();
//            drawToast("Enter Proper Email Id");
//            return false;
//        }
//    }
//    var txtPassword = $("#password").val();
//    if (txtPassword.trim().length == 0) {
//        $("#password").focus();
//        drawToast("Enter Password");
//        return false;
//    }
//    var network=$("#networkoption").val();
//
//    db.transaction(function(tx){
//        tx.executeSql('SELECT email FROM social_account where email=?', [txtUserEmailId], function (tx, result) {
//        try{
//                var len = result.rows.length;
//                if (len > 0) {
//                    drawToast("This Email is already exist!!");
//                }
//                else {
//                    tx.executeSql('INSERT INTO social_account (network,email,password) VALUES (?,?,?);', [network,txtUserEmailId,txtPassword],
//                        function (tx, result) {
//                         senderemailid=$("#email").val();
//                         senderpwd=$("#password").val();
//                           // $("#networkoption").val('Choose Network');
//                           var el = $.mobile.activePage.find("#networkoption");
//                           el.val('Choose Network').attr('selected', true).siblings('option').removeAttr('selected');
//                           el.selectmenu("refresh", true);
//                            $("#password").val('');
//                            $("#email").val('');
//                            getSocialAccount();
//                            drawToast("Successfully Added!!");
//                        }, errorCB);
//                }
//            }
//            catch(err){
//                var errMsg = err + "\nMethod: insertAccountDetail(jquery) tx1." + "\nError Stack:" + err.stack; insertErrorLogs(errMsg, function (id) {
//                });
//             }
//        }, errorCB);
//    },errorCB,successCB);
//
//}
//    function ShowStackeHolderDetail(shId){
//    db.transaction(function(tx){
//    tx.executeSql("select * from sh_crud where sh_crud_id=?",[shId],function(tx,result){
//    if(result.rows.length>=1){
//                                    $.mobile.activePage.find("#name").val(result.rows.item(0).name);
//                                    $.mobile.activePage.find("#mobile").val(result.rows.item(0).mobile);
//                                    $.mobile.activePage.find("#email").val(result.rows.item(0).email);
//                                    $.mobile.activePage.find("#company").val(result.rows.item(0).company_name);
//                                    if(result.rows.item(0).notify_sms=="1"){
//                                    $('#cbSMS').prop('checked', true).checkboxradio('refresh');
//                                    }
//                                    else{
//                                    $('#cbSMS').prop('checked', false).checkboxradio('refresh');
//                                    }
//                                    if(result.rows.item(0).notify_email=="1"){
//                                    $('#cbEmail').prop('checked', true).checkboxradio('refresh');
//                                    }
//                                    else {
//                                    $('#cbEmail').prop('checked', false).checkboxradio('refresh');
//                                    }
//
//
//    }
//    else{
//
//    }
//    },errorCB,successCB);
//    },errorCB,successCB);
//
//    }
//    function ShowAccountDetail(Id){
//    db.transaction(function(tx){
//    tx.executeSql("select * from social_account where acc_id=?",[Id],function(tx,result){
//    if(result.rows.length>=1){
//    var rr =result.rows.item(0).network;
//                                    $.mobile.activePage.find("#password").val(result.rows.item(0).password);
//                                    $.mobile.activePage.find("#email").val(result.rows.item(0).email);
//                                    // Grab a select field
//                                    var el = $.mobile.activePage.find("#networkoption");
//                                    // Select the relevant option, de-select any others
//                                    el.val(result.rows.item(0).network).attr('selected', true).siblings('option').removeAttr('selected');
//                                    // jQM refresh
//                                    el.selectmenu("refresh", true);
//    }
//    else{
//
//    }
//    },errorCB,successCB);
//    },errorCB,successCB);
//
//    }
//function UpdateStackeHolderDetail(shId){
//var notifyEmail="0";
//var notifySMS="0";
//if($('#cbEmail').is(':checked')){
//notifyEmail="1";
// }
//else {
//notifyEmail="0";
// }
// if($('#cbSMS').is(':checked')){
// notifySMS="1";
// }
//else{
//notifySMS="0";
//}
//     var txtUserName = $("#name").val();
//    if (txtUserName.trim().length == 0) {
//        $("#name").focus();
//        drawToast("Enter Stakeholder Name");
//        return false;
//    }
//    var txtMobileNo = $("#mobile").val();
//    if (txtMobileNo.trim().length == 0) {
//        $("#mobile").focus();
//        drawToast("Enter Mobile Number");
//        return false;
//    }
//    else {
//        if (!isNumber(txtMobileNo)) {
//            $("#mobile").select().focus();
//            drawToast("Enter Valid Mobile Number");
//            return false;
//        }
//        if (txtMobileNo.trim().length < 10) {
//            $("#mobile").focus();
//            drawToast("Enter Valid Mobile Number");
//            return false;
//        }
//    }
//    var txtUserEmailId = $("#email").val();
//    if (txtUserEmailId.trim().length != 0) {
//            if (!IsEmail(txtUserEmailId)) {
//            $("#email").focus();
//            drawToast("Enter Proper Email Id");
//            secontime1=false;
//            return false;
//        }
//    }
//    var txtCompany = $("#company").val();
//                                   var n=$.mobile.activePage.find("#name").val();
//                                   var m=$.mobile.activePage.find("#mobile").val();
//                                   var e=$.mobile.activePage.find("#email").val();
//                                   var c=$.mobile.activePage.find("#company").val();
//    db.transaction(function(tx){
//    tx.executeSql("update sh_crud set name=?,mobile=?,email=?,server_sync=0,notify_sms=?,notify_email=? ,company_name=? where sh_crud_id=?",[n,m,e,notifySMS,notifyEmail,c,shId],function(tx,result){
//    // Start Server Sync Code Here..
//      calledBeforeSendAnyRequest(function(isConnected){
//                            if(isConnected==true){
//
//                          // GetMaxSH_ID();
//
//                           var lawyerD = JSON.parse(localStorage.getItem("lawyerID"));
//                           var lawyerId = lawyerD.lawyerid;
//                        var url = MR_URL;
//                        var port = '8111';
//                        var requestTime = new Date().getTime();
//                        var webMethod = protocal + url + '/WebService_andriod.asmx/UpdateStackeHolder';
//                        $.ajax({
//                        type: "POST",
//                        url: webMethod,
//                        data: JSON.stringify({ lawyerId: lawyerId,shId: shId, name: txtUserName, mobile: txtMobileNo, email: txtUserEmailId ,notify_sms:notifySMS,notify_email:notifyEmail,company_name:txtCompany}),
//                        contentType: "application/json; charset=utf-8",
//                        dataType: "json",
//                        success: function (msg) {
//                        //alert(msg.d);
//                        if(msg.d=="done"){
//                        updateSH_server_sync(shId,"1","Update");
//                        $.mobile.loading('hide');
//                        }
//                        else
//                        {
//                         $.mobile.loading('hide');
//                        }
//                        },
//                        error: function (XMLHttpRequest, textStatus, errorThrown) {
//
//                            var responseTime = new Date().getTime();
//                            var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: UpdateStackeHolderDetail(ajax call)";
//                            errMsg = errMsg + "\n App Version : "+ version;
//                            insertLog(requestTime, responseTime, errMsg, function (returnId) { });
//                            alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
//                            //updateSH_server_sync(shId,"0","Update");
//                            $.mobile.loading('hide');
//
//                        },
//                        beforeSend: function () {
//                            $.mobile.loading('show', {
//                                text: 'Please Wait...',
//                                textVisible: true,
//                                theme: 'a',
//                                textonly: false
//                            });
//
//                        }
//                        });
//                            }
//                         });
//    //End Server Sync Code.
//drawToast('Information updated Successfuly.');
//$.mobile.navigate("shList.htm", {
//                                transition: "slide"
//                            });
//    },errorCB,successCB);
//    },errorCB,successCB);
//
//    }
//    function UpdateAccountDetail(Id){
//    var ddlNetwork = $("#networkoption").val();
//    if(ddlNetwork=="Choose Network"){
//    drawToast("Choose any Network");
//    return false;
//    }
//
//     var txtUserEmailId = $("#email").val();
//    if (txtUserEmailId.trim().length == 0) {
//        $("#email").focus();
//        drawToast("Enter Email Id");
//        return false;
//    }
//    else {
//        if (!IsEmail(txtUserEmailId)) {
//            $("#email").focus();
//            drawToast("Enter Proper Email Id");
//            return false;
//        }
//    }
//    var txtPassword = $("#password").val();
//    if (txtPassword.trim().length == 0) {
//        $("#password").focus();
//        drawToast("Enter Password");
//        return false;
//    }
//    var network=$("#networkoption").val();
//
//    db.transaction(function(tx){
//        tx.executeSql('update social_account set network=?,email=?,password=? where acc_id=?', [network,txtUserEmailId,txtPassword,Id],
//                        function (tx, result) {
//                         senderemailid=$("#email").val();
//                         senderpwd=$("#password").val();
//                           // $("#networkoption").val('Choose Network');
//                           var el = $.mobile.activePage.find("#networkoption");
//                            el.val('Choose Network').attr('selected', true).siblings('option').removeAttr('selected');
//                            el.selectmenu("refresh", true);
//                            $("#password").val('');
//                            $("#email").val('');
//
//
//                           $('#btnSubmitSocial').text('Submit');
//                           $.mobile.activePage.find("#btnSubmitSocial").val('submit');
//                           $('#btnSubmitSocial').button('refresh');
//                            drawToast("Updated Successfully!!");
//                            getSocialAccount();
//                        }, errorCB);
//        }, errorCB);
//
//}
//
//
//$(document).on('pagebeforeshow', '#shMap', function (event, ui) {
//   ShowMappingPageData();
//});
//function showSHMapping() {
//    db.transaction(function(tx){
//        var query = "select * from sh_crud;";
//        tx.executeSql(query, [], showSHMapping_success);
//    },errorCB,successCB);
//}
//function showSHMapping_success(tx, results) {
//    var len = results.rows.length;
//    var shMapData = JSON.parse(localStorage.getItem("shMapData"));
//    var shName = shMapData.shName;
//    for (var i=0; i<len; i++) {
//        var SH = results.rows.item(i);
//        $('#mappingWith').append('<li class="ui-screen-hidden"><a href="#" onclick="return OnPageChangeSH(this)" data-value="'+SH.sh_crud_id+'" data-op="'+SH.name+'">'+SH.name+'</a></li>').listview("refresh");
//        $('#mappingWith').trigger( "updatelayout");
//    }
//    if(shName!=='undefined'){
//        $("#shMap").find('input[data-type="search"]').val(shName);
//    }
//}
//$(document).on('click','#btnBackIndex',function(){
//$.mobile.loading('show');
//PrevoisPageBack="shCrud";
//parent.history.back();
//});
//$(document).on('pagebeforehide','#shMap',function(){
////$.mobile.loading('show',);
//PrevoisPageBack="";
//});
//$(document).on('click','a.ui-input-clear',function() {
//    $("input[data-type='search']").val('');
//    $("#shMap").find("input[data-type='search']").trigger('keyup');
//});
//function OnPageChangeSH(list)
//{
//    prevStartVal = 0;
//    prevCurrentVal = 0;
//    nxtEndVal =0;
//    nxtCurrentVal =0;
// $("#shMap").find("#mappingWith>li").children().addClass('ui-screen-hidden');
//  var id=$(list).attr('data-value');
// var name=$(list).attr('data-op');
//     var shMapData = { 'shName': name,'shId':id };
//     localStorage.setItem('shMapData', JSON.stringify(shMapData));
//     var shMapData = JSON.parse(localStorage.getItem("shMapData"));
//     var shId = shMapData.shId;
//       CheckPreviousMapping(shId);
//       checkAndSendRequestForCaseNumber("case");
//       showSHMapping();
//}
var er = false;
$(document).on('pagebeforeshow', '#lawyerInfo', function(event, ui)
{
    try
    {
        er = false;
        var LawyerInfo = JSON.parse(localStorage.getItem("LawyerInfo"));
        $.mobile.activePage.find("#ID").text(LawyerInfo.id);
        $.mobile.activePage.find("#name").text(LawyerInfo.name);
        $.mobile.activePage.find("#court").text(LawyerInfo.court);
        $.mobile.activePage.find("#mobile").text(LawyerInfo.mobile);
        $.mobile.activePage.find("#email").text(LawyerInfo.email);
        $.mobile.activePage.find("#substart").text(LawyerInfo.subStart);
        $.mobile.activePage.find("#subend").text(LawyerInfo.subEnd);
        // $.mobile.activePage.find("ul").attr("id")="myInfo";
    }
    catch (err)
    {
        if ($("#ID").text() == "" || $("#ID").text() == "NA" || $("#ID").text() == null)
        {
            er = true;
            getLawyerInfo();
        }
    }
});

function getLawyerInfo()
    {
        db.transaction(function(tx)
        {
            tx.executeSql('SELECT * FROM user_settings where user_id is not null and guid is not null', [], function(tx, result)
            {
                var len = result.rows.length;
                if (len > 0)
                {
                    var lawyerid = result.rows.item(0).user_id;
                    var url = MR_URL;
                    var port = '8111';
                    var webMethod = protocal + url + '/WebService_andriod.asmx/lawyerInformation';
                    var dataToSend = JSON.stringify(
                    {
                        lawyer_id: lawyerid
                    });
                    var requestTime = new Date().getTime();
                    $.ajax(
                    {
                        type: "POST",
                        url: webMethod,
                        data: dataToSend,
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function(data)
                        {
                            $.mobile.loading('hide');
                            if (data.d.length > 0)
                            {
                                if (data.d.toString() !== 'notavail')
                                {
                                    if (data.d.indexOf(',') !== -1)
                                    {
                                        var lawyerInfo = data.d.split(',');
                                        var ID = "NA",
                                            name = "NA",
                                            court = "NA",
                                            mobile = "NA",
                                            email = "NA",
                                            substart = "NA",
                                            subend = "NA"
                                        if (lawyerInfo.length > 0)
                                        {
                                            if (lawyerInfo[0] !== '')
                                            {
                                                ID = lawyerInfo[0];
                                            }
                                            if (lawyerInfo[1] !== '')
                                            {
                                                name = lawyerInfo[1];
                                            }
                                            if (lawyerInfo[2] !== '')
                                            {
                                                mobile = lawyerInfo[2];
                                            }
                                            if (lawyerInfo[3] !== '')
                                            {
                                                email = lawyerInfo[3];
                                            }
                                            if (lawyerInfo[4] !== '')
                                            {
                                                substart = lawyerInfo[4];
                                            }
                                            if (lawyerInfo[5] !== '')
                                            {
                                                subend = lawyerInfo[5];
                                            }
                                            if (lawyerInfo[6] !== '')
                                            {
                                                court = lawyerInfo[6];
                                            }
                                        }
                                        var info = {
                                            'id': ID,
                                            'name': name,
                                            'mobile': mobile,
                                            'email': email,
                                            'subStart': substart,
                                            'subEnd': subend,
                                            'court': court
                                        };
                                        localStorage.setItem('LawyerInfo', JSON.stringify(info));
                                        if (er == true)
                                        {
                                            $("#ID").text(ID);
                                            $("#name").text(name);
                                            $("#court").text(court);
                                            $("#mobile").text(mobile);
                                            $("#email").text(email);
                                            $("#substart").text(substart);
                                            $("#subend").text(subend);
                                        }
                                    }
                                }
                            }
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown)
                        {
                            var responseTime = new Date().getTime();
                            var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: requestForCaseNumbers(ajax call)";
                            errMsg = errMsg + "\n App Version : " + version;
                            insertLog(requestTime, responseTime, errMsg, function(returnId) {});
                            calledBeforeSendAnyRequest(function(isConnected)
                            {
                                if (isConnected)
                                {}
                            });
                        },
                        beforeSend: function()
                        {
                            // $.mobile.loading('show', { text: 'Please Wait...\nIt might take around 5 min.', textVisible: true, theme: 'a', textonly: false });
                            $.mobile.loading('show',
                            {
                                text: 'Loading..',
                                textVisible: true,
                                theme: 'b',
                                textonly: false
                            });
                        }
                    });
                }
            }, errorCB, successCB);
        }, errorCB, successCB);
    }
    //$(document).on('pageshow', '#shMap', function (event, ui) {
    //
    //    $.mobile.activePage.find("#searchMyAccount").on("input", function(e) {
    //
    //    searchMyAccount();
    //
    //    });
    //});
$(document).on('pageinit', '.ui-page', function(event, data)
{
    try
    {
        if (device.platform == 'android' || device.platform == 'Android')
        {}
        else if (device.platform == 'iOS' || device.platform == 'IOS' || device.platform == 'ios')
        {
            FastClick.attach(document.body);
        }
    }
    catch (err)
    {}
});
//$(document).on('change', '#mappingOptions', function () {
//var searchtype=$("#mappingOptions").val();
//    var RemPaging={'prevStartVal':0,'prevCurrentVal':0 ,'nxtEndVal':0,'nxtCurrentVal':0,'searchtype':'all','Search':''};
//    localStorage.setItem('RemPaging',JSON.stringify(RemPaging));
//initializeMyAccountCaseNumbers('case');
//});
//var senderemailid;var senderpwd;
//function GetAccoutDetailForSend(){
//db.transaction(function(tx){
////alert('call');
//tx.executeSql("select * from social_account",[],function(tx,result){
//if(result.rows.length>=1){
//senderemailid=result.rows.item(0).email;
////alert(senderemailid);
//senderpwd=result.rows.item(0).password;
////alert(senderpwd);
//}
//},errorCB);
//},errorCB);
//}
//var data=new Array;
//var subQuery;
//var u=0;
//var ShDetail_And_Query=new Array;
//function sendNotificationToSH(todayDate,action){
// $.mobile.loading('show', {
//        text: 'Loading...',
//        textVisible: true,
//        theme: 'a',
//        textonly: false
//    });
////alert('Clicked.. Wait you will get Email/SMS Success/Fail alert.');
//if(action=="Updated")
//{
////subQuery="select DISTINCT start_date,end_date,list_court_date_table.list_court_date_id,('List-' || list_name) as list_name,case_count,judge_name,court_no,list_no,case_no,case_table.case_id,matter,party_name,suspected,store_time,(CASE WHEN end_date='' THEN (start_date || ' List-' || list_name || ' (' || case_count || ' Case) ') ELSE (start_date || ' To ' || end_date || ' List-' || list_name || ' (' || case_count || ' Case) ') END) as lst_nm from court_date_table join list_court_date_table on court_date_table.court_date_id=list_court_date_table.court_date_id join list_table on list_court_date_table.list_id=list_table.list_ID join case_table on list_court_date_table.list_court_date_id=case_table.list_court_date_id join (select court_date_table.court_date_id as cdi,list_table.list_id,count(DISTINCT case_table.case_id) as case_count from court_date_table join list_court_date_table on court_date_table.court_date_id=list_court_date_table.court_date_id join list_table on list_court_date_table.list_id=list_table.list_ID join case_table on list_court_date_table.list_court_date_id=case_table.list_court_date_id join case_justice_table on case_table.case_id=case_justice_table.case_id join justice_table on justice_table.justice_id=case_justice_table.justice_id where 1=1 And (CASE WHEN end_date='' THEN start_date>='"+todayDate+"' ELSE start_date>='"+todayDate+"' OR end_date>='"+todayDate+"' END) group by list_court_date_table.list_court_date_id) as count_list_cases on list_table.list_id=count_list_cases.list_id AND court_date_table.court_date_id=count_list_cases.cdi join (select DISTINCT justice_table.justice_id,case_justice_table.case_id,Group_Concat(justice_name) as judge_name,court_no from case_justice_table join justice_table on case_justice_table.justice_id=justice_table.justice_id group by case_justice_table.case_id) as justice_names on case_table.case_id=justice_names.case_id where 1=1 And is_updated='0' And (CASE WHEN end_date='' THEN start_date>='"+todayDate+"' ELSE start_date>='"+todayDate+"' OR end_date>='"+todayDate+"' END)";
//subQuery="select DISTINCT start_date,end_date,list_court_date_table.list_court_date_id,('List-' || list_name) as list_name,case_count,judge_name,court_no,list_no,case_no,case_table.case_id,matter,party_name,suspected,store_time,(CASE WHEN end_date='' THEN (start_date || ' List-' || list_name || ' (' || case_count || ' Case) ') ELSE (start_date || ' To ' || end_date || ' List-' || list_name || ' (' || case_count || ' Case) ') END) as lst_nm from court_date_table join list_court_date_table on court_date_table.court_date_id=list_court_date_table.court_date_id join list_table on list_court_date_table.list_id=list_table.list_ID join case_table on list_court_date_table.list_court_date_id=case_table.list_court_date_id join (select court_date_table.court_date_id as cdi,list_table.list_id,count(DISTINCT case_table.case_id) as case_count from court_date_table join list_court_date_table on court_date_table.court_date_id=list_court_date_table.court_date_id join list_table on list_court_date_table.list_id=list_table.list_ID join case_table on list_court_date_table.list_court_date_id=case_table.list_court_date_id join case_justice_table on case_table.case_id=case_justice_table.case_id join justice_table on justice_table.justice_id=case_justice_table.justice_id where 1=1 And (CASE WHEN end_date='' THEN start_date>='"+todayDate+"' ELSE start_date>='"+todayDate+"' OR end_date>='"+todayDate+"' END) group by list_court_date_table.list_court_date_id) as count_list_cases on list_table.list_id=count_list_cases.list_id AND court_date_table.court_date_id=count_list_cases.cdi join (select DISTINCT justice_table.justice_id,case_justice_table.case_id,Group_Concat(justice_name) as judge_name,court_no from case_justice_table join justice_table on case_justice_table.justice_id=justice_table.justice_id group by case_justice_table.case_id) as justice_names on case_table.case_id=justice_names.case_id where 1=1 And (CASE WHEN end_date='' THEN start_date>='"+todayDate+"' ELSE start_date>='"+todayDate+"' OR end_date>='"+todayDate+"' END)";
////where 1=1 And is_updated='0'
//}
//else
//{
//}
//var shidm;
//stackeHolderArray=[];
//ShDetail_And_Query=[];
//data=[];
//ArrSH_Item=[];
//ArrSH_Notify=[];
//DataGlobalForSent=[];
//u=0;
////alert('called');
//var y=false;
////GetAccoutDetailForSend();
//if(senderemailid=="" || senderemailid==null || senderpwd=="" || senderpwd==null)
//{
//                        setTimeout(function () {
//                            $.mobile.navigate("socialAccount.htm", {
//                                transition: "slide"
//                            });
//                        }, 0);
//
//                        setTimeout(function () {drawToast("Please Configure Your Gmail Account to Inform your clients about their Cases");}, 1000);
//return false;
//}
//var w;
//db.transaction(function(tx){
//var query1='select * from sh_crud';
//tx.executeSql(query1,[],function(tx,result){
//var len=result.rows.length;
//w=len;
//   if(len>=1){
//   for(var i=0;i<len;i++){
//   stackeHolderArray.push({'shid':result.rows.item(i).sh_crud_id,'shName':result.rows.item(i).name,'shemail':result.rows.item(i).email,'shmobile':result.rows.item(i).mobile,'NotifyBySMS':result.rows.item(i).notify_sms,'NotifyByEmail':result.rows.item(i).notify_email,'CompanyName':result.rows.item(i).company_name});
//
//  }
//
// var r=0;var h=0;
// while(r<stackeHolderArray.length){
// var sd=stackeHolderArray[r].shid;
// //var query="select casenumber_id from SH_Mapping where stackeholder_id = '"+sd+"'";
// var query="select info_value as casenumber_id from existings inner join SH_Mapping on existings.exist_id=SH_Mapping.casenumber_id where stackeholder_id='"+sd+"'";
// shidm=stackeHolderArray[r];
// data=[];
// tx.executeSql(query,[],function(tx,result1){
// var len1=result1.rows.length;
// h=len1;
// if(len1>=1)
// {
//    for(var k=0;k<len1;k++)
//    {
//    var casenumber= result1.rows.item(k).casenumber_id;
//    if(k==0)
//    {
//    subQuery+=" And ((REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(case_table.case_no,'/',''),'.',''),'(',''),')',''),' ','') like '%"+casenumber+"%') ";
//    }
//
//    else
//    {
//     subQuery+=" OR (REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(case_table.case_no,'/',''),'.',''),'(',''),')',''),' ','') like '%"+casenumber+"%')";
//    }
//        if(k==len1-1)
//        {
//    //subQuery+=") order by case_count DESC,case_table.case_id;";
//    subQuery+=") order by start_date asc;";
//    w--;
//    }
//    }
//    var SH_Data=stackeHolderArray[u];
//    subQuery;
//    var detail={'shid':SH_Data.shid,'shName':SH_Data.shName ,'shemail':SH_Data.shemail,'shmobile':SH_Data.shmobile,'NotifyBySMS':SH_Data.NotifyBySMS,'NotifyByEmail':SH_Data.NotifyByEmail,'CompanyName':SH_Data.CompanyName,'SubQuery':subQuery}
//    ShDetail_And_Query.push(detail);
//    u++;
//if(action=="Updated")
//{
//subQuery="select DISTINCT start_date,end_date,list_court_date_table.list_court_date_id,('List-' || list_name) as list_name,case_count,judge_name,court_no,list_no,case_no,case_table.case_id,matter,party_name,suspected,store_time,(CASE WHEN end_date='' THEN (start_date || ' List-' || list_name || ' (' || case_count || ' Case) ') ELSE (start_date || ' To ' || end_date || ' List-' || list_name || ' (' || case_count || ' Case) ') END) as lst_nm from court_date_table join list_court_date_table on court_date_table.court_date_id=list_court_date_table.court_date_id join list_table on list_court_date_table.list_id=list_table.list_ID join case_table on list_court_date_table.list_court_date_id=case_table.list_court_date_id join (select court_date_table.court_date_id as cdi,list_table.list_id,count(DISTINCT case_table.case_id) as case_count from court_date_table join list_court_date_table on court_date_table.court_date_id=list_court_date_table.court_date_id join list_table on list_court_date_table.list_id=list_table.list_ID join case_table on list_court_date_table.list_court_date_id=case_table.list_court_date_id join case_justice_table on case_table.case_id=case_justice_table.case_id join justice_table on justice_table.justice_id=case_justice_table.justice_id where 1=1 And (CASE WHEN end_date='' THEN start_date>='"+todayDate+"' ELSE start_date>='"+todayDate+"' OR end_date>='"+todayDate+"' END) group by list_court_date_table.list_court_date_id) as count_list_cases on list_table.list_id=count_list_cases.list_id AND court_date_table.court_date_id=count_list_cases.cdi join (select DISTINCT justice_table.justice_id,case_justice_table.case_id,Group_Concat(justice_name) as judge_name,court_no from case_justice_table join justice_table on case_justice_table.justice_id=justice_table.justice_id group by case_justice_table.case_id) as justice_names on case_table.case_id=justice_names.case_id where 1=1 And (CASE WHEN end_date='' THEN start_date>='"+todayDate+"' ELSE start_date>='"+todayDate+"' OR end_date>='"+todayDate+"' END)";
////where 1=1 And is_updated='0'
//}
//else
//{
//}
//
//            if(w==0){
//       runLoop(tx);
//               }
//    }
//    else
//    {
//    w--;
//    u++;
//       if(w==0){
//       runLoop(tx);
//               }
//    }
// });
// r++;
// }
//  }
//});
//});
//}
//function runLoop(tx){
// if(ShDetail_And_Query.length>0){
//  var l=0;
//  while(l<ShDetail_And_Query.length){
////while(l<=0){
//  sendCaseDateDetailToSH(tx,ShDetail_And_Query[l],ShDetail_And_Query.length);
//  l++;
//  }
//}
//}
//var dfg;
//var ArrSH_Item=[];
//var ArrSH_Notify=[];
//function sendCaseDateDetailToSH(tx,ShDetail,kkk){
//dfg=kkk;
//tx.executeSql(ShDetail.SubQuery,[],function(tx,result){
//var len=result.rows.length;
//if(len>=1){
//var DateMatch=[]; var JusticeNameMatch=[];  var FullDataMatch=[];
//for(var i=0;i<len;i++){
//if(i==0){
//ArrSH_Notify.push(ShDetail.NotifyBySMS+"-"+ShDetail.NotifyByEmail)
//}
//var startDate=result.rows.item(i).start_date;
//if(startDate!=""){
//var startDatetemp=startDate.split('-');
//startDate=startDatetemp[2]+"-"+startDatetemp[1]+"-"+startDatetemp[0];
//}
//var endDate=result.rows.item(i).end_date;
//if(endDate!=""){
//var endDatetemp=endDate.split('-');
//endDate=endDatetemp[2]+"-"+endDatetemp[1]+"-"+endDatetemp[0];
//}
//if(endDate!="" || endDate==null){endDate=" - "+endDate;}
//var datess=startDate+""+endDate;
//var listtypee=result.rows.item(i).list_name;
//var dateAndList='Date : '+datess+" "+listtypee;
//var justicenamee=result.rows.item(i).judge_name;
//if(jQuery.inArray( dateAndList, DateMatch) == -1){
//DateMatch.push(dateAndList);
//if(jQuery.inArray( justicenamee, JusticeNameMatch) == -1){
//JusticeNameMatch.push(justicenamee);
//dateAndList+='\n'+justicenamee+' '+result.rows.item(i).court_no;
//var otherData="\n"+result.rows.item(i).matter +'\n'+result.rows.item(i).list_no + ". " + result.rows.item(i).case_no+'\n'+result.rows.item(i).party_name;
//dateAndList+=otherData;
//FullDataMatch.push(dateAndList);
//}
//else{
//var index=jQuery.inArray( dateAndList, DateMatch );
//if(FullDataMatch.length-1>index){
//var dataToAddPjudge=FullDataMatch[index];
//var dataToAddPjudge1=dataToAddPjudge.split(justicenamee+' '+result.rows.item(i).court_no);
//var otherData=""+ result.rows.item(i).judge_name  +' '+result.rows.item(i).court_no+"\n"+result.rows.item(i).matter +'\n'+result.rows.item(i).list_no + ". " + result.rows.item(i).case_no+'\n'+result.rows.item(i).party_name;
//var dataToAddPjudge11= dataToAddPjudge1[0]+=''+otherData+ '' +dataToAddPjudge1[1];
//FullDataMatch[index]=dataToAddPjudge11;
//}
//else{
//dateAndList+='\n'+justicenamee+' '+result.rows.item(i).court_no;
//var otherData="\n"+result.rows.item(i).matter +'\n'+result.rows.item(i).list_no + ". " + result.rows.item(i).case_no+'\n'+result.rows.item(i).party_name;
//dateAndList+=otherData;
//FullDataMatch.push(dateAndList);
//}
// }
//}
//else{
//var index=jQuery.inArray( dateAndList, DateMatch );
//var dataToEdit=FullDataMatch[index];
//if(jQuery.inArray( justicenamee, JusticeNameMatch) == -1){
//JusticeNameMatch.push(justicenamee);
//var otherData="\n"+result.rows.item(i).judge_name+" "+result.rows.item(i).court_no+"\n"+result.rows.item(i).matter +'\n'+result.rows.item(i).list_no + ". " + result.rows.item(i).case_no+'\n'+result.rows.item(i).party_name;
//dataToEdit+=''+otherData;
//FullDataMatch[index]=dataToEdit;
//}
//else{
//var dataToAddPjudge1=dataToEdit.split(justicenamee+' '+result.rows.item(i).court_no);
//if(i==5){
//var s=dataToAddPjudge1[1];
//}
//var spc;
//if(dataToAddPjudge1.length>1){
//spc="";
//}
//else{
//spc="\n";
//}
//var otherData=spc+ result.rows.item(i).judge_name+ " "+ result.rows.item(i).court_no +'\n'+result.rows.item(i).matter +'\n'+result.rows.item(i).list_no + ". " + result.rows.item(i).case_no+'\n'+result.rows.item(i).party_name;
//var dataToAddPjudge11= dataToAddPjudge1[0]+ '' +otherData+ '' +dataToAddPjudge1[1];
//FullDataMatch[index]=dataToAddPjudge11;
//  }
//}
//var tempdata="";
//tempdata=tempdata+="Date : "+datess+" "+  result.rows.item(i).list_name   +'\n';
//tempdata=tempdata+="Justice Name : "+result.rows.item(i).judge_name+" "+  result.rows.item(i).court_no    +'\n';
//tempdata=tempdata+=result.rows.item(i).matter +'\n';
//tempdata=tempdata+="Case - " + result.rows.item(i).list_no + ". " + result.rows.item(i).case_no+""+'\n';
//tempdata=tempdata+=result.rows.item(i).party_name+'\n';
////data.push({'shid':ShDetail.shid,'shName':ShDetail.shName,'receiverEmail':ShDetail.shemail,'receiverMobile':ShDetail.shmobile,'NotifyBySMS':ShDetail.NotifyBySMS,'NotifyByEmail':ShDetail.NotifyByEmail,'CompanyName':ShDetail.CompanyName,'data':tempdata,'CaseNo':result.rows.item(i).case_no,'JusticeName':result.rows.item(i).judge_name,'CourtNo':result.rows.item(i).court_no,'Matter':result.rows.item(i).matter,'PartyName':result.rows.item(i).party_name,'CaseDate':datess,'ListNo':result.rows.item(i).list_no,'ListName':result.rows.item(i).list_name});
////DataGlobalForSent.push({'shid':ShDetail.shid,'shName':ShDetail.shName,'receiverEmail':ShDetail.shemail,'receiverMobile':ShDetail.shmobile,'NotifyBySMS':ShDetail.NotifyBySMS,'NotifyByEmail':ShDetail.NotifyByEmail,'CompanyName':ShDetail.CompanyName,'data':tempdata,'CaseNo':result.rows.item(i).case_no,'JusticeName':result.rows.item(i).judge_name,'CourtNo':result.rows.item(i).court_no,'Matter':result.rows.item(i).matter,'PartyName':result.rows.item(i).party_name,'CaseDate':datess,'ListNo':result.rows.item(i).list_no,'ListName':result.rows.item(i).list_name});
//if(i==len-1){
//dfg--;
//var oneSH_Data="";
//ArrSH_Item.push(FullDataMatch.length);
// for(var f=0;f<FullDataMatch.length;f++){
// oneSH_Data+=FullDataMatch[f]+'@@@';
//}
//data.push({'shid':ShDetail.shid,'shName':ShDetail.shName,'receiverEmail':ShDetail.shemail,'receiverMobile':ShDetail.shmobile,'NotifyBySMS':ShDetail.NotifyBySMS,'NotifyByEmail':ShDetail.NotifyByEmail,'CompanyName':ShDetail.CompanyName,'data':oneSH_Data,'CaseNo':result.rows.item(i).case_no,'JusticeName':result.rows.item(i).judge_name,'CourtNo':result.rows.item(i).court_no,'Matter':result.rows.item(i).matter,'PartyName':result.rows.item(i).party_name,'CaseDate':datess,'ListNo':result.rows.item(i).list_no,'ListName':result.rows.item(i).list_name});
//DataGlobalForSent.push({'shid':ShDetail.shid,'shName':ShDetail.shName,'receiverEmail':ShDetail.shemail,'receiverMobile':ShDetail.shmobile,'NotifyBySMS':ShDetail.NotifyBySMS,'NotifyByEmail':ShDetail.NotifyByEmail,'CompanyName':ShDetail.CompanyName,'data':oneSH_Data,'CaseNo':result.rows.item(i).case_no,'JusticeName':result.rows.item(i).judge_name,'CourtNo':result.rows.item(i).court_no,'Matter':result.rows.item(i).matter,'PartyName':result.rows.item(i).party_name,'CaseDate':datess,'ListNo':result.rows.item(i).list_no,'ListName':result.rows.item(i).list_name});
//  }
//
// }
// //alert(FullDataMatch[0]+'\n\n'+FullDataMatch[1] +'\n\n'+ FullDataMatch[2]+'\n\n'+FullDataMatch[3]+'\n\n'+ FullDataMatch[4]+'\n\n'+FullDataMatch[5]);
// //alert(DateMatch);
//}
//else
//{
//dfg--;
//}
//if(dfg==0){
//// Code Changes to Show Review Screen Before Sending Notification to Stackeholder
////SendToStackeHolder(data);  // Old Function to send Direct Notification to stackehoder
//ShowReviewScreen(data);                           // New Function to Show Review Screen Before Sending
//}
//});
//}
//var DataGlobalForSent=new Array;
//var recemailidG;
//var recemobileG;
//var NotifyByEmailG;
//var NotifyBySMSG;
//var NotifyByG;
//var sh_idG;
//var dataSentG;
//function SendToStackeHolder(data){
////------------------------New code Start------------------------------
//if(data.length>=1){
// $.mobile.loading('show', {
//        text: 'Loading...',
//        textVisible: true,
//        theme: 'a',
//        textonly: false
//    });
////var z=0;
//for(var x=0;x<ArrSH_Item.length;x++){
////var g=0;
////for(var y=0;y<ArrSH_Item[x];y++){
//var Ntfy=ArrSH_Notify[x];
//Ntfy=Ntfy.split('-');
//recemailidG=data[x].receiverEmail;
//recemobileG=data[x].receiverMobile;
//NotifyByEmailG=Ntfy[1];
//NotifyBySMSG=Ntfy[0];
//sh_idG=data[x].shid;
//dataSentG=data[x].data;
//var tData_SP=dataSentG.split('@@@');
//var tData_Sp1="";
//for(var y=0;y<tData_SP.length;y++){
//tData_Sp1+= tData_SP[y] +'\n\n'
//}
//dataSentG=tData_Sp1;
////dataSentG=dataSentG.replace('@@@','\n');
//if(NotifyBySMSG=="1" && NotifyByEmailG=="1"){
//NotifyByG="Both";
//}
//if(NotifyBySMSG=="0" && NotifyByEmailG=="0"){
//NotifyByG="";
//}
//if(NotifyBySMSG=="1" && NotifyByEmailG=="0"){
//NotifyByG="SMS";
//}
//if(NotifyBySMSG=="0" && NotifyByEmailG=="1"){
//NotifyByG="Email";
//}
//if(NotifyByG=="Email")
//{
////Store_Stackeholder_log(sh_idG,dataSentG,recemailidG,"",NotifyByG,"Success");
//email.createEvent(senderemailid, senderpwd,"Regarding Case Date in High Court",dataSentG,recemailidG, success, error);
//}
//if(NotifyByG=="SMS")
//{
//sms.createEvent(recemobileG, dataSentG, successSMS, errorSMS);
//}
//if(NotifyByG=="Both")
//{
//email.createEvent(senderemailid, senderpwd,"Regarding Case Date in High Court",dataSentG,recemailidG, success, error);
//sms.createEvent(recemobileG, dataSentG, successSMS, errorSMS);
//}
//else{
//}
////z++;
////if(ArrSH_Item[ArrSH_Item.length-1]>=1 && x==ArrSH_Item.length-1){
////if(x==ArrSH_Item.length-1){
////g=y;
////g++;
////}
////else{
////g=y;
////}
////if(g==ArrSH_Item[ArrSH_Item.length-1] && x==ArrSH_Item.length-1){
//if(x==ArrSH_Item.length-1){
//$.mobile.loading('hide');
//alert('List Sent Please Review Status in SMS/Email log');
//}
// // }
//
// }
//
//}
//else{
//                            $.mobile.navigate("NotificationList.html", {
//                                transition: "slide"
//                            });
//          data+='<h1>No Data to Send to Stackeholders </h1>'
//          $(data).appendTo($('#justiceCollapsiblePanelNotification div:first'));
//          justiceCollapsiblePanelNotification.find('div[data-role=collapsible]').collapsible({ refresh: true });
//           $.mobile.loading('hide');
//}
////------------------------New code End------------------------------
//}
//function success(){
//if(NotifyByG!="Both")
//{
//if(NotifyByG=="Email"){
//Store_Stackeholder_log(sh_idG,dataSentG,recemailidG,"",NotifyByG,"Success");}
//else{
////Store_Stackeholder_log(sh_idG,dataSentG,"",recemobileG,NotifyByG,"Success");
//}
//}
//else
//{
//Store_Stackeholder_log(sh_idG,dataSentG,recemailidG,"",NotifyByG,"Success");
//}
////alert('Email Success');
//}
//function error(){
//if(NotifyByG!="Both")
//{
//if(NotifyByG=="Email"){
//Store_Stackeholder_log(sh_idG,dataSentG,recemailidG,"",NotifyByG,"Fail");}
//else{
////Store_Stackeholder_log(sh_idG,dataSentG,"",recemobileG,NotifyByG,"Fail");
//}
//}
//else
//{
//Store_Stackeholder_log(sh_idG,dataSentG,recemailidG,"",NotifyByG,"Fail");
//}
////alert('Email Error');
//}
//function successSMS(){
//if(NotifyByG!="Both")
//{
//if(NotifyByG=="Email"){
////Store_Stackeholder_log(sh_idG,dataSentG,recemailidG,"",NotifyByG,"Success");
//}
//else{
//Store_Stackeholder_log(sh_idG,dataSentG,"",recemobileG,NotifyByG,"Success");}
//}
//else
//{
//Store_Stackeholder_log(sh_idG,dataSentG,"",recemobileG,NotifyByG,"Success");
//}
////alert('SMS Success');
//}
//function errorSMS(){
//if(NotifyByG!="Both")
//{
//if(NotifyByG=="Email"){
////Store_Stackeholder_log(sh_idG,dataSentG,recemailidG,"",NotifyByG,"Fail");
//}
//else{
//Store_Stackeholder_log(sh_idG,dataSentG,"",recemobileG,NotifyByG,"Fail");}
//}
//else
//{
//Store_Stackeholder_log(sh_idG,dataSentG,"",recemobileG,NotifyByG,"Fail");
//}
////alert('SMS Error');
//}
//function ShowReviewScreen(dataToShow){
//var justiceCollapsiblePanelNotification = $('#justiceCollapsiblePanelNotification');
//if(dataToShow.length>=1){
//                        var i=0;
//                        while (i < ArrSH_Item.length) {
//                            data = '';
//                            j = 0;
//                            courtNoZ = false;
//                            footer = false;
//
//                            var S_data= dataToShow[i].data;
//                            var S_data_Split=S_data.split("@@@");
//
//                            while (j < ArrSH_Item[i]) {
//
//                                 if (!courtNoZ) {
//                                        data = data + '<div data-role="collapsible" class="ui-collapsible ui-collapsible-inset" data-collapsed="false">';
//                                        data = data + '<h2 class="ui-collapsible-heading">';
//                                        data = data + dataToShow[i].shName;
//                                        if(dataToShow[i].CompanyName!=""){
//                                        data = data + '&nbsp;&nbsp;&nbsp;  - &nbsp;&nbsp;&nbsp;'+ dataToShow[i].CompanyName;
//                                        }
//                                        data = data + '</h2>';
//                                        data = data + '<ul data-role="listview" data-theme="d" data-divider-theme="d" class="ui-listview">';
//                                        data = data + '<li data-role="list-divider" role="heading" class="ui-li ui-li-divider ui-bar-d ui-li-has-count">';
//
//                                        var idSMS="cbSMS_Screen"+i;
//                                        var idEmail="cbEmail_Screen"+i;
//                                        var NEmail=dataToShow[i].NotifyByEmail;
//                                        var NSMS=dataToShow[i].NotifyBySMS;
//
//                                        data = data + '<fieldset class="ui-grid-a">';
//                                        data = data + '<div class="ui-block-a">';
//                                        if(NSMS=="1"){
//                                        data = data + '<input type="checkbox" name='+idSMS+' id='+idSMS+' onclick="ChangeNotifyTypeSH(this)" data-value='+i+' data-noityType="SMS" checked  data-mini="true" class="custom" />';
//                                        }
//                                        else{
//                                        data = data + '<input type="checkbox" name='+idSMS+' id='+idSMS+' onclick="ChangeNotifyTypeSH(this)" data-value='+i+' data-noityType="SMS" data-mini="true" class="custom" />';
//                                        }
//
//                                        data = data + '<label for='+idSMS+'>Notify Via SMS</label>';
//                                        data = data + '</div>';
//                                        data = data + '<div class="ui-block-b">';
//                                        if(NEmail=="1"){
//                                        data = data + '<input type="checkbox" name='+idEmail+' id='+idEmail+' onclick="ChangeNotifyTypeSH(this)" data-value='+i+' data-noityType="Email" checked data-mini="true" class="custom" />';
//                                        }
//                                        else{
//                                        data = data + '<input type="checkbox" name='+idEmail+' id='+idEmail+' onclick="ChangeNotifyTypeSH(this)" data-value='+i+' data-noityType="Email" data-mini="true" class="custom" />';
//                                        }
//                                        data = data + '<label for='+idEmail+'>Notify Via Email</label>';
//                                        data = data + '</div>';
//                                        data = data + '</fieldset>';
//                                        data = data + '</li> ';
//
//
//                                        courtNoZ = true;
//                                    }
//
//                                    data = data + '<li class="ui-li ui-li-static ui-btn-up-d">';
//
//                                    var tdata=S_data_Split[j].split('\n');
//                                    for(var u=0;u<tdata.length;u++){
//                                    data = data + '<p><strong>' + tdata[u] + '</strong></p>';
//                                    }
//
//
//                                j++;
//                            }
//                            data = data + '</ui></div>';
//
//                            $(data).appendTo($('#justiceCollapsiblePanelNotification div:first'));
//                            $("[type=checkbox]").checkboxradio();
//                            justiceCollapsiblePanelNotification.find('div[data-role=collapsible]').collapsible({ refresh: true });
//                            i++;
//                        }
//                        $.mobile.loading('hide');
//                        }
//                        else{
//                            $.mobile.navigate("NotificationList.html", {
//                                transition: "slide"
//                            });
//          data+='<center><h3>No Data to Send to Stackeholders </h3></center>'
//          $(data).appendTo($('#justiceCollapsiblePanelNotification div:first'));
//          justiceCollapsiblePanelNotification.find('div[data-role=collapsible]').collapsible({ refresh: true });
//          $.mobile.loading('hide');
//}
//}
//function Store_Stackeholder_log(sh_id,msg,recEmail,recMobile,NotifyBy,result_status)
//{
//db.transaction(function(tx){
//var logdate = new Date().getTime();
//tx.executeSql("insert into stackeholder_log (stackeholder_id,email,mobile,message_text,sent_Ondate,result_status) values (?,?,?,?,?,?)",[sh_id,recEmail,recMobile,msg,logdate,result_status],function(tx,result){
////alert(recEmail);
//},errorCB);
//},errorCB)
//}
//$(document).on('click', '#btnUpdated', function (event, ui) {
//var td=new Date().toString('yyyy-MM-dd');
//setTimeout(function After500Sec(){sendNotificationToSH(td,"Updated");},500);
//// $.mobile.activePage.find('#currentProgress').fadeIn();
////for(i=0;i<=100000;i++)
////{
////updateloding(i,100000);
////}
//});
//function PrepareAndViewListSH(){
//var td=new Date().toString('yyyy-MM-dd');
////setTimeout(function After500Sec(){sendNotificationToSH(td,"Updated");},500);
//setTimeout(function After500Sec(){sendNotificationToSH('2014-05-07',"Updated");},500);
//}
//$(document).on('click', '#btnNextDay', function (event, ui) {
//var td=new Date().toString('yyyy-MM-dd');
//sendNotificationToSH(td,"NextDay");
//});
$(document).on('click', '#A1', function(event, ui)
{
    //var td=new Date().toString('yyyy-MM-dd');
    //sendNotificationToSH(td);
    //CheckSH_serverSync_Data_shCrud();
    //CheckSH_serverSync_Data_SH_Mapping();
    //SyncDatafromServerToDevice_Sh_curd();
    //SyncDatafromServerToDevice_SH_Mapping();
    //var D_year=new Date().getFullYear();
    //var D_month=new Date().getMonth();
    //var D_day=new Date().getDate();
    //var CrrDate=D_year+"-"+D_month+"-"+D_day;
    //var dd=new Date().getTime();
    //var ytt=new Date(Date.parse(dd,"yyyy/MM/dd"));
    //var myDate = new Date();
    //var todatDate =
    //    myDate.getFullYear() + '-' +
    //    ( '0' + (myDate.getMonth()+1) ).slice( -2 ) + '-' +
    //    ( '0' + (myDate.getDate()+1) ).slice( -2 );
    //alert(todatDate);
});
//function InsertShDetailFromServer(sh_crud_id,name,email,mobile,notifysms,notifyemail,companyName)
//{
//if(notifysms=="True"){
//notifysms="1";
//}
//else{
//notifysms="0";
//}
//if(notifyemail=="True"){
//notifyemail="1";
//}
//else{
//notifyemail="0";
//}
//db.transaction(function(tx){
//tx.executeSql("insert into sh_crud(sh_crud_id,name,email,mobile,server_sync,notify_sms,notify_email,company_name) values('"+sh_crud_id+"','"+name+"','"+email+"','"+mobile+"','1','"+notifysms+"','"+notifyemail+"','"+companyName+"')",[],function(tx,result){
//},errorCB);
//},errorCB)
//}
//function InsertShCaseMapDetailFromServer(shmid,casenumber,stackeholder_id,mapping_on)
//{
//db.transaction(function(tx){
//tx.executeSql("insert into SH_Mapping(shm_id,casenumber_id,stackeholder_id,Mapping_on,server_sync) values('"+shmid+"','"+casenumber+"','"+stackeholder_id+"','"+mapping_on+"','1')",[],function(tx,result){
//},errorCB);
//},errorCB)
//}
//function SyncDatafromServerToDevice_Sh_curd()
//{
// db.transaction(function (tx) {
//        tx.executeSql('SELECT * FROM user_settings where user_id is not null and guid is not null', [], function (tx, result) {
//
//            var len = result.rows.length;
//            if (len >= 1) {
//            tx.executeSql('SELECT * FROM sh_crud', [], function (tx, result1) {
//            var len=result1.rows.length;
//            if(result1.rows.length==0){
//            //Check and Get Data from Server if Exist
//            //Sent data to server
//             calledBeforeSendAnyRequest(function(isConnected){
//                            if(isConnected==true){
//
//                           var lawyerD = JSON.parse(localStorage.getItem("lawyerID"));
//                           var lawyerId = lawyerD.lawyerid;
//                        var url = MR_URL;
//                        var port = '8111';
//                        var requestTime = new Date().getTime();
//                        var webMethod = protocal + url + '/WebService_andriod.asmx/GetSH_DetailForUser';
//                        $.ajax({
//                        type: "POST",
//                        url: webMethod,
//                        data: JSON.stringify({lawyerId:lawyerId}),
//                        contentType: "application/json; charset=utf-8",
//                        dataType: "json",
//                        success: function (msg) {
//                        if(msg.d!="No Data"){
////                        alert('done');
////                        alert(msg.d);
//                        var dataserver=msg.d.split('\n');
//                        var sh_crud_id=new Array;var name=new Array;var email=new Array;var mobile=new Array;var notifysms=new Array;var notifyemail=new Array;var companyName=new Array;
//                        for(var t=0;t<dataserver.length-1;t++)
//                        {
//                        var temp;
//                        temp= dataserver[t].split("-");
//                        sh_crud_id.push(temp[0]);
//                        name.push(temp[1]);
//                        email.push(temp[2]);
//                        mobile.push(temp[3]);
//                        notifysms.push(temp[4]);
//                        notifyemail.push(temp[5]);
//                        companyName.push(temp[6]);
//                        }
//                        for(var s=0;s<sh_crud_id.length;s++)
//                        {
//                        InsertShDetailFromServer(sh_crud_id[s],name[s],email[s],mobile[s],notifysms[s],notifyemail[s],companyName[s]);
//                        }
//                        $.mobile.loading('hide');
//                        }
//                        else
//                        {
//
//                         $.mobile.loading('hide');
//                        }
//                        },
//                        error: function (XMLHttpRequest, textStatus, errorThrown) {
//
//                            $.mobile.loading('hide');
//                            var responseTime = new Date().getTime();
//                            var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: SyncDatafromServerToDevice_Sh_curd(ajax call)";
//                            errMsg = errMsg + "\n App Version : "+ version;
//                            insertLog(requestTime, responseTime, errMsg, function (returnId) { });
//                            alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
//
//                        },
//                        beforeSend: function () {
//                            $.mobile.loading('show', {
//                                text: 'Please Wait...',
//                                textVisible: true,
//                                theme: 'a',
//                                textonly: false
//                            });
//
//                        }
//                        });
//                            }
//                         });
//            //End Sent Data Code
//                                      }
//                                },errorCB);
//                          }
//                     },errorCB);
//             },errorCB);
//}
//function SyncDatafromServerToDevice_SH_Mapping()
//{
// db.transaction(function (tx) {
//        tx.executeSql('SELECT * FROM user_settings where user_id is not null and guid is not null', [], function (tx, result) {
//
//            var len = result.rows.length;
//            if (len >= 1) {
//            tx.executeSql('SELECT * FROM SH_Mapping', [], function (tx, result1) {
//            var len=result1.rows.length;
//            if(result1.rows.length==0){
//            //Check and Get Data from Server if Exist
//            //Sent data to server
//             calledBeforeSendAnyRequest(function(isConnected){
//                            if(isConnected==true){
//
//                           var lawyerD = JSON.parse(localStorage.getItem("lawyerID"));
//                           var lawyerId = lawyerD.lawyerid;
//                        var url = MR_URL;
//                        var port = '8111';
//                        var requestTime = new Date().getTime();
//                        var webMethod = protocal + url + '/WebService_andriod.asmx/GetSH_CaseMapDetailForUser';
//                        $.ajax({
//                        type: "POST",
//                        url: webMethod,
//                        data: JSON.stringify({lawyerId:lawyerId}),
//                        contentType: "application/json; charset=utf-8",
//                        dataType: "json",
//                        success: function (msg) {
//                        if(msg.d!="No Data"){
//                        var dataserver=msg.d.split('\n');
//                        var shmID=new Array;var casenumber=new Array;var stackeholder_id=new Array;var mapping_on=new Array;
//                        for(var t=0;t<dataserver.length-1;t++)
//                        {
//                        var temp;
//                        temp= dataserver[t].split("-");
//                        shmID.push(temp[0]);
//                        casenumber.push(temp[1]);
//                        stackeholder_id.push(temp[2]);
//                        mapping_on.push(temp[3]);
//
//                        }
//                        for(var s=0;s<casenumber.length;s++)
//                        {
//                        InsertShCaseMapDetailFromServer(shmID[s],casenumber[s],stackeholder_id[s],mapping_on[s]);
//                        }
//                        $.mobile.loading('hide');
//                        }
//                        else
//                        {
//
//                         $.mobile.loading('hide');
//                        }
//                        },
//                        error: function (XMLHttpRequest, textStatus, errorThrown) {
//
//                            $.mobile.loading('hide');
//                            var responseTime = new Date().getTime();
//                            var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: SyncDatafromServerToDevice_SH_Mapping(ajax call)";
//                            errMsg = errMsg + "\n App Version : "+ version;
//                            insertLog(requestTime, responseTime, errMsg, function (returnId) { });
//                            alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
//
//                        },
//                        beforeSend: function () {
//                            $.mobile.loading('show', {
//                                text: 'Please Wait...',
//                                textVisible: true,
//                                theme: 'a',
//                                textonly: false
//                            });
//
//                        }
//                        });
//                            }
//                         });
//            //End Sent Data Code
//                                      }
//                                },errorCB);
//                          }
//                     },errorCB);
//             },errorCB);
//}
//var SH_crud_SS=new Array;
//function CheckSH_serverSync_Data_shCrud(){
//SH_crud_SS=[];
// db.transaction(function (tx) {
//        tx.executeSql('SELECT * FROM user_settings where user_id is not null and guid is not null', [], function (tx, result) {
//
//            var len = result.rows.length;
//            if (len >= 1) {
//            tx.executeSql('SELECT sh_crud_id,name,mobile,email,user_id,notify_sms,notify_email,company_name FROM sh_crud cross join user_settings where server_sync=0', [], function (tx, result1) {
//            var len=result1.rows.length;
//            if(result1.rows.length>=1){
//            for(var i=0;i<result1.rows.length;i++){
//            SH_crud_SS.push(result1.rows.item(i));
//            }
//            var SH_crud_SS_Sent=new Object();
//            SH_crud_SS_Sent.data1=SH_crud_SS;
//            //Sent data to server
//             calledBeforeSendAnyRequest(function(isConnected){
//                            if(isConnected==true){
//
//
//                        var url = MR_URL;
//                        var port = '8111';
//                        var requestTime = new Date().getTime();
//                        var webMethod = protocal + url + '/WebService_andriod.asmx/CheckAndSaveDataIn_shCrud';
//                        $.ajax({
//                        type: "POST",
//                        url: webMethod,
//                        data: JSON.stringify(SH_crud_SS_Sent),
//                        contentType: "application/json; charset=utf-8",
//                        dataType: "json",
//                        success: function (msg) {
//                        if(msg.d=="done"){
//
//                        updateSH_server_sync_Sh_CrudTable("1");
//                        $.mobile.loading('hide');
//                        }
//                        else
//                        {
//
//                         $.mobile.loading('hide');
//                        }
//                        },
//                        error: function (XMLHttpRequest, textStatus, errorThrown) {
//
//                            $.mobile.loading('hide');
//                            var responseTime = new Date().getTime();
//                            var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: CheckSH_serverSync_Data_shCrud(ajax call)";
//                            errMsg = errMsg + "\n App Version : "+ version;
//                            insertLog(requestTime, responseTime, errMsg, function (returnId) { });
//                            alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
//
//                        },
//                        beforeSend: function () {
//                            $.mobile.loading('show', {
//                                text: 'Please Wait...',
//                                textVisible: true,
//                                theme: 'a',
//                                textonly: false
//                            });
//
//                        }
//                        });
//                            }
//                         });
//            //End Sent Data Code
// }
//            },errorCB);
//                          }
//                             },errorCB);
//                        },errorCB);
//
//}
//var SH_crud_SSMap=new Array;
//function CheckSH_serverSync_Data_SH_Mapping(){
//SH_crud_SSMap=[];
// db.transaction(function (tx) {
//        tx.executeSql('SELECT * FROM user_settings where user_id is not null and guid is not null', [], function (tx, result) {
//
//            var len = result.rows.length;
//            if (len >= 1) {
//            tx.executeSql('SELECT shm_id,casenumber_id,stackeholder_id,Mapping_on,user_id FROM SH_Mapping cross join user_settings where server_sync=0', [], function (tx, result1) {
//            var len=result1.rows.length;
//            if(result1.rows.length>=1){
//            for(var i=0;i<result1.rows.length;i++){
//            SH_crud_SSMap.push(result1.rows.item(i));
//            }
//            var SH_crud_SS_Sent=new Object();
//            SH_crud_SS_Sent.data1=SH_crud_SSMap;
//            //Sent data to server
//             calledBeforeSendAnyRequest(function(isConnected){
//                            if(isConnected==true){
//
//
//                        var url = MR_URL;
//                        var port = '8111';
//                        var requestTime = new Date().getTime();
//                        var webMethod = protocal + url + '/WebService_andriod.asmx/CheckAndSaveDataIn_SH_Mapping';
//                        $.ajax({
//                        type: "POST",
//                        url: webMethod,
//                        data: JSON.stringify(SH_crud_SS_Sent),
//                        contentType: "application/json; charset=utf-8",
//                        dataType: "json",
//                        success: function (msg) {
//                        if(msg.d=="done"){
//                        //alert('done');
//                        updateSH_server_sync_SH_MappingTable("1");
//                        $.mobile.loading('hide');
//                        }
//                        else
//                        {
//
//                         $.mobile.loading('hide');
//                        }
//                        },
//                        error: function (XMLHttpRequest, textStatus, errorThrown) {
//
//                            $.mobile.loading('hide');
//                            var responseTime = new Date().getTime();
//                            var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: CheckSH_serverSync_Data_SH_Mapping(ajax call)";
//                            errMsg = errMsg + "\n App Version : "+ version;
//                            insertLog(requestTime, responseTime, errMsg, function (returnId) { });
//                            alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
//
//                        },
//                        beforeSend: function () {
//                            $.mobile.loading('show', {
//                                text: 'Please Wait...',
//                                textVisible: true,
//                                theme: 'a',
//                                textonly: false
//                            });
//
//                        }
//                        });
//                            }
//                         });
//            //End Sent Data Code
// }
//            },errorCB);
//                          }
//                             },errorCB);
//                        },errorCB);
//
//}
//function addRightMainMenu() {
//var currActivePage = '#rightMenu' + $.mobile.activePage.attr('id');
// var $menuright = $.mobile.activePage.find(currActivePage);
// var rightpanel = $.mobile.activePage.attr('id') + 'RightPanel';
//var data='';
//data += '<ul data-role="listview" data-theme="a">';
//data += '<li data-role="list-divider" data-theme="f"> <center> ';
//data += '<div class="ui-help-line" onclick="closeRightPanel('+$menuright.attr('id')+');"> ';
//data += '<a href="#" ID="menuclose"  data-role="button" data-icon="delete" data-iconpos="notext" data-theme="a" data-inline="true" data-rel="close" data-shadow="false" data-iconshadow="false" class="found-ui-def ui-def-max ui-icon-nodisc"></a> ';
//data += '<span id="expDate"></span> </div> </center> </li>';
//data += ' <div data-role="collapsible" data-theme="b" data-inset="false" data-content-theme="d" data-iconpos="right" data-collapsed="false" style="border: 0px"> ';
//data += '<h3 style="margin-top: 0px !important; margin-bottom: 0px !important;"> Home</h3> ';
//data +=' <ul data-role="listview" data-divider-theme="d" data-inset="false"> ';
//data +=' <li data-theme="c"><a data-icon="false" href="#casePage" data-transition="fade"> <img src="images/icons/ic_action_home.png" alt="" class="imgShare ui-img-size ui-li-icon ui-corner-none" style="width: 1.8em; top: 0.3em !important;" />Home</a> ';
//data  +=' </li>';
//data += ' </ul> ';
//data += '</div>';
//data += '<div data-role="collapsible" data-theme="b" data-inset="false" data-content-theme="d" data-iconpos="right" data-collapsed="false" style="border: 0px"> ';
//data +=' <h3 style="margin-top: 0px !important; margin-bottom: 0px !important;"> My Account</h3>';
//data += ' <ul data-role="listview" data-divider-theme="d" data-inset="false" id=';
//data += '"'+rightpanel+'" class="myAccountList">';
//data += ' <li data-theme="c"><a data-icon="false" href="lawyerInformation.htm" data-transition="slide"> <img src="images/icons/ic_action_my_info.png" class="imgShare ui-img-size ui-li-icon ui-corner-none" style="width: 2em; top: 0.3em !important;" />My Info</a> ';
//data += '</li> ';
//data += '<li data-theme="c"><a data-icon="false" href="#lawyerNames" data-transition="slide">  <img src="images/icons/ic_action_bow_tie.png" class="imgShare ui-img-size ui-li-icon ui-corner-none" style="width: 1.8em;" />Lawyer Names</a> ';
//data += '</li> ';
//data += '<li data-theme="c"><a data-icon="false" href="#caseNumbers" data-transition="slide"> <img src="images/icons/is_action_case_number.png" class="imgShare ui-img-size ui-li-icon ui-corner-none" style="width: 1.8em;" />Case Numbers</a> ';
//data += '</li> ';
//data +=' </ul> ';
//data +=' </div>';
//data += ' <div data-role="collapsible" data-theme="b" data-inset="false" data-content-theme="d"  data-iconpos="right" data-collapsed="false" style="border: 0px"> ';
//data +=' <h3 style="margin-top: 0px !important; margin-bottom: 0px !important;">  Stakeholders </h3> ';
//data +='<ul data-role="listview" data-divider-theme="d" data-inset="false"> ';
//data += '<li data-theme="c"><a data-icon="false" href="shCrud.htm" data-transition="fade">  <img src="images/icons/ic_action_sh_add.png" alt="" class="imgShare ui-img-size ui-li-icon ui-corner-none" />Add Stakeholder</a> ';
//data += '</li> ';
//data += '<li data-theme="c"><a data-icon="false" href="shList.htm" data-transition="fade">  <img src="images/icons/ic_action_sh_list.png" alt="" class="imgShare ui-img-size ui-li-icon ui-corner-none" />View Stakeholder</a> ';
//data += '</li> ';
//data += ' <li data-theme="c"><a data-icon="false" href="socialAccount.htm" data-transition="slide"> <img src="images/icons/bw-twitter-icon.png" class="imgShare ui-img-size ui-li-icon ui-corner-none"  style="width: 1.8em;" />Configure Account</a> ';
//data += ' <li data-theme="c"><a data-icon="false" href="NotificationList.html" onclick="PrepareAndViewListSH()" data-transition="slide"> <img src="images/icons/info_blackedited.png" class="imgShare ui-img-size ui-li-icon ui-corner-none"  style="width: 1.8em;" />View Notification List</a> ';
//data +=' </li> ';
//data += '</ul> ';
//data += ' </div>';
//data += '<div data-role="collapsible" data-theme="b" data-inset="false" data-content-theme="d"  data-iconpos="right" data-collapsed="false" style="border: 0px"> ';
//data += ' <h3 style="margin-top: 0px !important; margin-bottom: 0px !important;"> Logs </h3> ';
//data += ' <ul data-role="listview" data-divider-theme="d" data-inset="false"> ';
//data += ' <li data-theme="c"><a data-icon="false" href="Log.html" data-transition="fade"> <img src="images/icons/ic_action_log_icon.png" alt="" class="imgShare ui-img-size ui-li-icon ui-corner-none" />View Logs</a> ';
//data += ' </li> ';
//data += ' </ul> ';
//data += ' </div>';
//data += ' <div data-role="collapsible" data-theme="b" data-inset="false" data-content-theme="d" data-iconpos="right" data-collapsed="false" style="border: 0px"> ';
//data += ' <h3 style="margin-top: 0px !important; margin-bottom: 0px !important;">  Terms and Conditions</h3> ';
//data += ' <ul data-role="listview" data-divider-theme="d" data-inset="false"> ';
//data += ' <li data-theme="c"><a data-icon="false" href="TandC.html" data-transition="fade"> <img src="images/icons/ic_action_log_icon.png" alt="" class="imgShare ui-img-size ui-li-icon ui-corner-none" />Terms and Conditions</a>';
//data += ' </li>';
//data += '</ul>';
//data += '  </div>';
//data  += '</ul>';
//$menuright.html('');
// isMsgboxShow =false;
// $menuright.append(data);
////getSubscriptionDate();
//$.mobile.activePage.find('#expDate').html(expDateToShow);
//$('#validityPopUp').fadeOut();
//$menuright.trigger('updatelayout');
//$menuright.trigger('create');
//}

function updateloding(value,max) {
   var per = Math.round(((value / max) * 100));
   if(value==1){
          $.mobile.loading('hide');
          $.mobile.activePage.find('#currentProgress').show();
          $.mobile.loading('hide');
               }

  var msg = '';
  var firstProgress=window.localStorage.getItem('firstProgress');

  if(firstProgress==null || firstProgress=="" || firstProgress=='undefined' || firstProgress=='Lawyer Name' || firstProgress=='Case Number'){
          msg = msg + firstProgress + ' <br/> This may take upto 5 minutes only for the first time <br/> ';
    }

   if (value < max) {
          $.mobile.loading('hide');
          msg = msg + 'Loading..' + per + '%';
          $.mobile.activePage.find('#ProgressPara').html(msg);
          $.mobile.activePage.find("#slider-mini").val(per);
          $.mobile.activePage.find("#slider-mini").slider('refresh');

       if(per==100 && firstProgress=='Case Number'){
       window.localStorage.setItem('firstProgress', 'Hide');
       //isFirstLoad();
       $.mobile.activePage.find('#currentProgress').hide();
                            $.mobile.navigate("#lawyerNames", {
                                transition: "slide"
                            });
       }

         if(per==50){
                $.mobile.activePage.find('#currentProgress').show();
                    }
        //  window.localStorage.setItem('firstProgress', 'done');

                    } else {
                         $.mobile.activePage.find('#currentProgress').hide();
                      // drawToast("Progress Complete");
                           }

}




$(document).on('click', '#fadeinTest', function(event, ui)
{
    //window.plugins.childBrowser.openExternal('https://www.google.com');
    window.plugins.childBrowser.showWebPage('https://www.google.com',
    {
        showLocationBar: true
    });
});

function launchPiWebWorker()
{
    //      document.getElementById("PiValue").innerHTML='';
    //        var worker = new Worker('pi.js');
    //        worker.onmessage = function (e) {
    //            document.getElementById("PiValue").innerHTML = e.data.PiValue;
    //        };
    //        worker.onerror = function (e) {
    //            alert('Error: Line ' + e.lineno + ' in ' + e.filename + ': ' + e.message);
    //        };
    //        //start the worker
    //        worker.postMessage({ 'cmd': 'CalculatePi',
    //            'value': document.getElementById("loop").value,'value': 10000000000
    //        });
    document.getElementById("PiValue").innerHTML = '';
    var worker = new Worker('caseSearch.js');
    worker.onmessage = function(e)
    {
        document.getElementById("PiValue").innerHTML = e.data.PiValue;
    };
    worker.onerror = function(e)
    {
        alert('Error: Line ' + e.lineno + ' in ' + e.filename + ': ' + e.message);
    };
    //start the worker
    worker.postMessage(
    {
        'cmd': 'CalculatePi',
        'value': document.getElementById("loop1").value,
        'value': document.getElementById("loop").value
    });
    //asif();
}

function ChangeNotifyTypeSH(list)
{
    var WordCount = 0;
    var Arrindex = $(list).attr('data-value');
    var Type = $(list).attr('data-noityType');
    WordCount = $(list).attr('data-count');
    var nottype = ArrSH_Notify[Arrindex];
    nottype = nottype.split('-');
    var state = $(list).is(':checked');
    if (state == true)
    {
        if (Type == "SMS")
        {
            nottype[0] = "1";
            WordCountG = parseInt(WordCountG) + parseInt(WordCount);
        }
        if (Type == "Email")
        {
            nottype[1] = "1";
        }
    }
    else
    {
        if (Type == "SMS")
        {
            nottype[0] = "0";
            WordCountG = parseInt(WordCountG) - parseInt(WordCount);
        }
        if (Type == "Email")
        {
            nottype[1] = "0";
        }
    }
    nottype = nottype[0] + "-" + nottype[1];
    ArrSH_Notify[Arrindex] = nottype;
}
$(document).on('click', "#btnCancelSocial", function()
{
    $.mobile.navigate("index.html",
    {
        transition: "slide"
    });
});
last_click_time = new Date().getTime();
//   $(document).on('click','#btnSendNotification',function(e){
//       click_time = e['timeStamp'];
//   if (click_time && (click_time - last_click_time) < 1000) {
//   alert(click_time - last_click_time);
//       e.stopImmediatePropagation();
//       e.preventDefault();
//      return false;
//  }
//  else{
//  alert('Clicked Sending Notification');
//  SendToStackeHolder(DataGlobalForSent);
//  }
//  last_click_time = click_time;
//   });
//$(document).on('click','#testoauthLiquid',function(){
//CallToGetToken();
//});
//$(document).on('click','#btnIsAuthorize',function(){
////startApp();
//alert('clicked');
//SplitAndSaveSH_SMS_log();
//});
$(document).on('click', '#testoauth', function(event, ui)
{
    if (window.plugins && window.plugins.childBrowser)
    //{
    // var cb = window.plugins.childBrowser;
    //     var client_id="966377745826-rpdp21nomaok5a79ngpqrkeqvi0pu52o.apps.googleusercontent.com";
    // var state="mail";
    //  var scope="https://mail.google.com/,https://www.googleapis.com/auth/plus.login,https://www.googleapis.com/auth/userinfo.email,profile";
    // window.plugins.childBrowser.showWebPage("https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=" + client_id + "&state=" + state + "&redirect_uri=https://oauth.io/auth&scope=" + scope);
    //   }
    // else {
    //  alert('ChildBrowser plugin not available/ready.');
    //  }
        TestChildBrowser();
});

function TestChildBrowser()
{
    var client_id = "966377745826-rpdp21nomaok5a79ngpqrkeqvi0pu52o.apps.googleusercontent.com";
    var state = "mail";
    var scope = "https://mail.google.com/,https://www.googleapis.com/auth/plus.login,https://www.googleapis.com/auth/userinfo.email,profile";
    cb.showWebPage("https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=" + client_id + "&state=" + state + "&redirect_uri=https://oauth.io/auth&scope=" + scope);
}

function showConfirm()
{
    try
    {
        var tot = 0;
        var count = parseInt(WordCountG) / 160;
        count = count.toString();
        var ss = count.split('.');
        if (ss.length > 1)
        {
            //  var t=ss[1];
            //  if(t>0){
            tot = parseInt(ss[0]);
            tot++;
            //  }
            //  else{ tot= ss[0]; }
        }
        else
        {
            tot = ss[0];
        }
        //alert('Are You Sure You Want to Send Notification, You will be Charged '+tot+' Messages');
        navigator.notification.confirm('Are You Sure You Want to Send Notification, You will be Charged ' + tot + ' Messages', // message
            onConfirmNotification, // callback to invoke with index of button pressed
            'Confirmation', // title
            'Send,Cancel' // buttonLabels
        );
    }
    catch (ex)
    {
        SendToStackeHolder(DataGlobalForSent);
    }
}

function onConfirmNotification(button)
    {
        if (button == 1)
        {
            CheckSocialAccountSetting();
        }
    }
    //$(document).on("click","#goBack",function(){
    //if(fromNoti=="Notification"){
    ////alert('From Noti');
    //fromNoti="";
    //$.mobile.navigate("index.html",{transition:"slide"});
    //runOnBrowser();
    //}
    //else{
    ////alert('Not From Noti');
    ////var pp=data.prevPage.attr('id');
    ////alert(pp);
    ////if(pp=='casePage'){
    //navigator.app.backHistory();
    ////}
    //}
    //});
$(document).on("click", "#LocalNotificationTest", function()
{
    //alert('called');
    if (!window.localNotification)
    {}
});
//$(document).on("pagebeforeshow", "#casePage", function () {
//alert('Right menu Bind');
//addRightMainMenu();
//});

function getGAOn_or_Off(callBack)
{
try
    {
        db.transaction(function(tx)
        {
            tx.executeSql("SELECT * FROM user_settings where user_id is not null and guid is not null", [], function(tx, result)
            {
            var len = result.rows.length;
                    if (len > 0)
                    {
                     GA_on_off = result.rows.item(0).GAOnOff;
                    if (typeof callBack !== 'undefined')
                    {
                    callBack(GA_on_off);
                    }
                    }
            }, function(err)
            {
                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: getGAOn_or_Off(executeSql)";
                insertErrorLogs(errMsg, function(id)
                {
//                    alert("Oops! Something went worng with db.");
                });
            });
        }, errorCB, successCB);
    }
    catch (err)
    {
        var errMsg = err + "\nMethod: getGAOn_or_Off(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function(id)
        { //alert("Oops! Something went worng.")
        });
    }
}


function ChangeLocalnotificationStatusNew(){

       var CS=$("#snd-switch").val();
       //alert(CS);
       if(CS=="on"){
       window.localStorage.setItem('LocalNotificationStatus', 'ON');
       //ChangeLastNotificationTimeWhenStartApp();
       ChangeLocalNotificationTime();
       }
       else{
       window.localStorage.setItem('LocalNotificationStatus', 'OFF');
       try
{
    if (device.platform == 'android' || device.platform == 'Android')
    {
        //window.plugins.localNotification.cancelAll();
          window.plugin.notification.local.cancelAll();
    }
    else if (device.platform == 'iOS' || device.platform == 'IOS' || device.platform == 'ios')
    {
        window.plugins.localNotification.cancelAll(function all(){
        //alert('all cancel');
        });
    }
}
catch (err)
{}
       }
}
function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}
var hold_emailid = "", gateway_id = "",hold_lawyer_id="";
//Added by Prashant Prajapati on 03-09-2019 04-54 PM
function checkexistingcustomer(callBack) {
    try {
        var url = MR_URL;
        var txtMobileNo = $("#txt_mobile_no").val();
        var webMethod = protocal + url + '/WebService_andriod.asmx/check_existing_customer';
        var requestTime = new Date().getTime();
        $.ajax(
            {
                type: "POST",
                url: webMethod,
                data: JSON.stringify({ mobilenumber: txtMobileNo }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (msg) {
                    $.mobile.loading('hide');
                    var responseTime = new Date().getTime();
                    if (msg.d != "") {
                        settingsSaved = null;
                        var obj = $.parseJSON(msg.d);
                        hold_emailid = obj[0].mobile_number;
                        hold_emailid = hold_emailid.substr(-10);
                        hold_lawyer_id = obj[0].lawyer_id;
                        alert('Mobile number already exists. Please contact +918269244088 to get your PIN');
                        //window.location.href = "settings.html";
                        $.mobile.navigate("settings.html",
                            {
                                transition: "slide",
                                reverse: true
                            });
                        //src();
                    }
                    else
                        registerUserForTrial();
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    $.mobile.loading('hide');
                    $("#responseFromServer").append(XMLHttpRequest.responseText);
                    var responseTime = new Date().getTime();
                    var errMsg = "Connection Error due to http status : " + XMLHttpRequest.status + "\nText Status : " + textStatus + "\nhttp response : " + XMLHttpRequest.responseText + "\nMethod: getCourtList(ajax call)";
                    errMsg = errMsg + "\n App Version : " + version;
                    insertLog(requestTime, responseTime, errMsg, function (returnId) { });
                    alert("Cannot reach the server! Please check your internet connection. If the problem persist call +918269244088");
                    calledBeforeSendAnyRequest(function (isConnected) {
                        if (isConnected) { }
                    });
                },
                beforeSend: function () {
                    $.mobile.loading('show',
                        {
                            text: 'Loading...',
                            textVisible: true,
                            theme: 'b',
                            textonly: false
                        });
                },
                complete: function () { /*alert("Data Received.");$.mobile.hidePageLoadingMsg();*/ }
            });
    }
    catch (err) {
        var errMsg = err + "\nMethod: getCourtList(jquery) " + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.")
        });
    }
}
//Added by Prashant Prajapati on 04-09-2019 05.41 PM
function Get_Gateways() {
    var url = MR_URL;
    var port = '8111';
    var requestTime = new Date().getTime();
    var webMethod = protocal + url + '/WebControlHTML5.asmx/Get_All_Gateway';
    $.ajax({
        type: "POST",
        url: webMethod,
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            var obj = $.parseJSON(msg.d);
            //var jsonString = obj;
            //for (var i = 0; i < obj.dsSmsGateway.length; i++) {
                gateway_id = obj.dsSmsGateway[0]["gateway_id"].toString();
            //}
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error in function mattertype: " + errorThrown);
        }
    });
}
function SMS_Send() {

    var url = MR_URL;
    var port = '8111';
    var webMethod = protocal + url + '/WebControlHTML5.asmx/send_sms_for_otp';
    $.ajax(
        {
            type: "POST",
            url: webMethod,
            data: "{'lawyer_id':'" + hold_lawyer_id + "','mobile':'" + $("#txt_mobile_no").val() + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                alert(msg.d);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                //alert(errorThrown);
                console.log("Error in function REsend_Sms_Function: " + errorThrown);
            }
        });

}


function get_lawyers_info() {
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM user_settings where user_id is not null and guid is not null', [], function (tx, result) {
            var len = result.rows.length;
            if (len > 0) {
                var lawyer_id = result.rows.item(0).user_id;
                //var LawyerInfo = JSON.parse(localStorage.getItem("LawyerInfo"));
                //var lawyer_id= LawyerInfo.id;
                var url = MR_URL;
                var port = '8111';
                var lawyer_info_webMethod = protocal + url + '/WebControlHTML5.asmx/get_lawyers_info';

                /*--------------------------------------------------ajax call for getting lawyers info------------------------------------------------------*/
                $.ajax(
                    {
                        type: "POST",
                        url: lawyer_info_webMethod,
                        data: "{'lawyers_id':'" + lawyer_id + "'}",
                        //data: "{}",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (msg) {
                            var selectedText = 'bombay';

                            var sp = msg.d.split('@@@');

                            var obj = $.parseJSON(sp[0]);

                            var pp = sp[1].split('!$$$!');

                            var obj1 = $.parseJSON(pp[0]);

                            var tr = pp[1].split('!@$@!');

                            var obj2 = $.parseJSON(tr[0]);

                            var obj3 = $.parseJSON(tr[1]);

                            var tval = '';
                            for (var uu = 0; uu < obj3.dtAllCourt.length; uu++) {
                                selectedText += "," + obj3.dtAllCourt[uu].court_name;
                                insertcourt(obj3.dtAllCourt[uu].court_name);
                            }
                            for (var uu = 0; uu < obj2.dtAddCourt.length; uu++) {
                                selectedText += "," + obj2.dtAddCourt[uu].court_name;
                                insertcourt(obj2.dtAddCourt[uu].court_name);
                            }
                            listtyes(selectedText);
                            Get_casenumber_data(lawyer_id, "", "-1");



                        },
                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                            //  alert("Error : " + errorThrown);
                            console.log("Error in function Autocomplete_names: " + errorThrown);

                        },
                        complete: function () {
                            // setTimeout(function () { alert("Hello"); document.getElementById("cbAsif").checked = true; }, 3000);
                            //resultOpration();
                        }
                    });
                //-----------------------------------------------End of  Ajax for lawyers info------------------------------------------------------------

            }
        });

    });
}
//Added by Prashant Prajapati on 09-11-2019 12:41 PM
function listtyes(courtname) {
    var url = MR_URL;
    var port = '8111';
    var requestTime = new Date().getTime();

    var listtype = protocal + url + '/WebControlHTML5.asmx/Get_All_listtype';

    $.ajax({
        type: "POST",
        url: listtype,
        // data: "{'lawyers_id':'" + selectvalue[0] + "','court_id':'" + court_id + "'}",
        data: "{'court_name':'" + courtname + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            // alert(msg.d);
            var obj = $.parseJSON(msg.d);

            var jsonString = obj;

            //  $('#ddllisttype').empty();
            for (var i = 0; i < obj.dtListtype.length; i++) {
                //                var newOption = $('<option>');
                //                var trr = obj.dtListtype[i].listtype;
                //                var tru = trr.toUpperCase()
                //                newOption.attr('value', obj.dtListtype[i].listtype).text(obj.dtListtype[i].listtype.toUpperCase());
                //                $('#ddllisttype').append(newOption);
                insertListTypes(obj.dtListtype[i].listtype.toUpperCase());

            }
            //$("#ddllisttype").prop("selectedIndex",0);
           // $("[id$='ddllisttype']").val('');



        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            // alert("Error : " + errorThrown);
            console.log("Error in function listtype: " + errorThrown);
        }
    });

}
function insertListTypes(ListType) {
    db.transaction(function (tx) {
        tx.executeSql('SELECT listtype FROM list_type where listtype=?;', [ListType], function (tx, result) {
            try {
                var len = result.rows.length;
                if (len <= 0) {
                    tx.executeSql('INSERT INTO list_type (listtype) VALUES (?);', [ListType], successCB, errorCB);
                }
            }
            catch (err) {
                var errMsg = err + "\nMethod: insertListTypes(jquery) tx1" + "\nError Stack:" + err.stack;
                insertErrorLogs(errMsg, function (id) { });
            }
        }, function (err) {
                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: insertListTypes(executeSql)";
                insertErrorLogs(errMsg, function (id) { });
            });
    }, errorCB, successCB);
}

function populateListcourtType() {
    try {
        db.transaction(function (tx) {
            var query = 'SELECT DISTINCT listtype FROM list_type ORDER BY listtype_id;';
            tx.executeSql(query, [], function (tx, result) {
                try {
                    var ListTypeDropDown = $('#ddllisttype');
                    ListTypeDropDown.empty();
                    ListTypeDropDown.selectmenu("refresh");
                    var len = result.rows.length;
                    var i = 0;
                    while (i < len) {
                        if (result.rows.item(i).listtype !== null && result.rows.item(i).listtype !== 'undefined') {
                            if (result.rows.item(i).listtype.trim().length > 0) {
                                ListTypeDropDown.append('<option value="' + result.rows.item(i).listtype + '">' + result.rows.item(i).listtype + '</option>');
                            }
                        }
                        i++;
                    }
                    if (i > 0) {
                        $('#ddllisttype>option:nth-child(1)').removeAttr('selected').attr('selected', true);
                        // comented by satish error attempted to call method 'refresh'  add true in selectmenu for forcelly called //
                        ListTypeDropDown.selectmenu('refresh', true);
                    }
                }
                catch (err) {
                    var errMsg = err + "\nMethod: populateListcourtType(jquery) tx1" + "\nError Stack:" + err.stack;
                    insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.")
                    });
                }
            }, function (err) {
                    var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: populateListcourtType(executeSql)";
                    insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng with db.")
                    });
                });
        }, function (err) {
                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: populateListcourtType(transaction)";
                insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng with db.")
                });
            }, successCB);
    }
    catch (err) {
        var errMsg = err + "\nMethod: populateListcourtType(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.")
        });
    }
}
function populatecourtname() {
    try {
        db.transaction(function (tx) {
            var query = 'SELECT DISTINCT court_id,courtname FROM court ORDER BY court_id;';
            tx.executeSql(query, [], function (tx, result) {
                try {
                    var CourtDropDown = $('#ddlcourt');
                    CourtDropDown.empty();
                    CourtDropDown.selectmenu("refresh");
                    var len = result.rows.length;
                    var i = 0;
                    while (i < len) {
                        if (result.rows.item(i).courtname !== null && result.rows.item(i).courtname !== 'undefined') {
                            if (result.rows.item(i).courtname.trim().length > 0) {
                                CourtDropDown.append('<option value="' + result.rows.item(i).court_id + '" selected="true">' + result.rows.item(i).courtname + '</option>');
                            }
                        }
                        i++;
                    }
                    if (i > 0) {
                        $('#ddlcourt>option:nth-child(1)').attr('selected', true);
                        // comented by satish error attempted to call method 'refresh'  add true in selectmenu for forcelly called //
                        CourtDropDown.selectmenu('refresh', true);
                    }
                }
                catch (err) {
                    var errMsg = err + "\nMethod: populatecourtname(jquery) tx1" + "\nError Stack:" + err.stack;
                    insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.")
                    });
                }
            }, function (err) {
                    var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: populatecourtname(executeSql)";
                    insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng with db.")
                    });
                });
        }, function (err) {
                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: populatecourtname(transaction)";
                insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng with db.")
                });
            }, successCB);
    }
    catch (err) {
        var errMsg = err + "\nMethod: populatecourtname(jquery)" + "\nError Stack:" + err.stack;
        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.")
        });
    }
}
function insertcourt(court) {
    db.transaction(function (tx) {
        tx.executeSql('SELECT courtname FROM court where courtname=?;', [court], function (tx, result) {
            try {
                var len = result.rows.length;
                if (len <= 0) {
                    tx.executeSql('INSERT INTO court (courtname) VALUES (?);', [court], successCB, errorCB);
                }
            }
            catch (err) {
                var errMsg = err + "\nMethod: insertcourt(jquery) tx1" + "\nError Stack:" + err.stack;
                insertErrorLogs(errMsg, function (id) { });
            }
        }, function (err) {
                var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: insertcourt(executeSql)";
                insertErrorLogs(errMsg, function (id) { });
            });
    }, errorCB, successCB);
}

function Get_casenumber_data(lawyer_id, caseNo, courtid) {

    var url = MR_URL;
    var port = '8111';
    var requestTime = new Date().getTime();
    var webMethod = protocal + url + '/WebControlHTML5.asmx/Get_All_caseno';
    $.ajax({
        type: "POST",
        url: webMethod,
        data: "{'lawyer_id':'" + lawyer_id + "','casenum':'" + caseNo + "','court_id':'" + courtid + "'}",
        //data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {

            var parent = new Array;
            var child = new Array;
            var obj = $.parseJSON(msg.d);
            var totalcount = obj.dtCasenumber.length;
            var count = 0;
            for (var i = 0; i < obj.dtCasenumber.length; i++) {

                //                                    child.push(obj.dtCasenumber[i].lid);
                //                                    //  child.push(obj.dtCasenumber[i].last_occurrence_date);
                //                                    var odate = obj.dtCasenumber[i].last_occurrence_date;
                //                                    if (obj.dtCasenumber[i].last_occurrence_date != null) {
                //                                        var datestr = odate.substr(0, 10);
                //                                        child.push(datestr);
                //                                    }
                //                                    else {
                //                                        child.push(obj.dtCasenumber[i].last_occurrence_date);
                //                                    }
                //                                    child.push('<a href="#" onclick="showcasedetail(&#39;' + obj.dtCasenumber[i].cid + '&#39;,&#39;' + obj.dtCasenumber[i].casenum + '&#39;)" type="button">' + obj.dtCasenumber[i].casenum + '</a>')
                //                                   // child.push(obj.dtCasenumber[i].casenum);
                //                                    child.push(obj.dtCasenumber[i].listtype);
                //                                    child.push(obj.dtCasenumber[i].mattertype);
                //                                    child.push(obj.dtCasenumber[i].narration);
                //                                    child.push(obj.dtCasenumber[i].cid);
                //                                    child.push(obj.dtCasenumber[i].court_name);
                //                                    child.push(obj.dtCasenumber[i].court_id);
                db.transaction(function (tx) {
                    if (totalcount > count) {
                        i = count;
                        insertExistingsIfNotExists(tx, 'case', obj.dtCasenumber[count].casenum, '1', 'new', directOP, function (tx, id) {
                            insertCaseNumberDetails(tx, id, obj.dtCasenumber[count].cid, obj.dtCasenumber[count].mattertype, obj.dtCasenumber[count].listtype, obj.dtCasenumber[count].narration, obj.dtCasenumber[count].court_name, obj.dtCasenumber[count].court_id);
                            count++;
                            i = count;
                        });
                    }

                }, errorCB, successCB);

            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            // alert("Error : " + errorThrown);
            console.log("Error in function listtype: " + errorThrown);
        }
    });

}
function showhide(ee) {
    // alert(e);
    var c = 1;
    var arr = ['plan1', 'plan2'];
    for (var i = 0; i < arr.length; i++) {
        var plan = document.getElementById(ee);
        var incrlss = $("div[id*='plan" + c + "']");
        var li = document.getElementById("li" + c);
        document.getElementById("li" + c).classList.remove('active');
        var char = plan.attributes[0].textContent
        if (char == arr[i]) {
            $(incrlss).show();
            document.getElementById("li" + c).classList.add('active');
        }
        else
            $(incrlss).hide();
        c++;
    }
}
