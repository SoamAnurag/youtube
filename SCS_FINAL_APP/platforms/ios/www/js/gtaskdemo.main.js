/*Asif Work*/

//localStorage.removeItem('accesstokenG');
//localStorage.removeItem('refreshtokenG');

//$(document).ready(function() {

//	//localStorage.removeItem('accesstokenG');
//	/* startApp after device ready */
//	document.addEventListener("deviceready", Test, false);
//});

//function Test(){
//liquid.helper.oauth.authorize(authorizeWindowChange);
//}

function startApp(opration) {
	
	var oAuth = liquid.helper.oauth;
  
  if(opration=="Token"){
  liquid.helper.oauth.authorize(authorizeWindowChange);
  }
  else{
  liquid.helper.oauth.getAccessToken(function NoTask(){
  //alert('callBack Callled');
  SendToStackeHolder(DataGlobalForSent);
  //alert('Click on Send Button to Send List');
  });
  }

}


function CallToGetToken(){

//alert('In CallToGetToken Function');
	var oAuth = liquid.helper.oauth;
		
   
    liquid.helper.oauth.authorize(authorizeWindowChange);
      
}


function startPageTaskList() {

//alert("startPageTaskList Function Called");

var $this = liquid.helper.oauth;
var tokenValue = window.localStorage.getItem($this.tokenKey);

if (device.platform == 'Android' || device.platform == 'android') {
    alert('Account Configuration Done ! Now You Can Send Notification.');
}

$("#ConfigureAccountStatus").attr("class", "configureAccount");
$("#ConfigureAccountStatus").html("Account Already Configured");

var td = new Date().toString('yyyy-MM-dd');
setTimeout(function After500Sec() { sendNotificationToSH(td, "Updated"); }, 500);

$.mobile.changePage("NotificationList.html", {
    transition: "slide"
});
}




function authorizeWindowChange(uriLocation) {


//alert("authorizeWindowChange Return Parameter - "+uriLocation);

    //console.log("Location Changed: " + uriLocation); 
	var oAuth = liquid.helper.oauth;
	
	// oAuth process is successful!	
    if (oAuth.requestStatus == oAuth.status.SUCCESS) {
	
	    
        var authCode = oAuth.authCode;

		//alert("oAuth.requestStatus == oAuth.status.SUCCESS - AuthCode = "+authCode);
		
        // have the authCode, now save the refreshToken and start Page TaskList
        oAuth.saveRefreshToken({ 
        	  	auth_code: oAuth.authCode
        	  }, function() {
        		  startPageTaskList();
        	  });
        
    } 
    else if (oAuth.requestStatus == oAuth.status.ERROR) 
    {
    	console.log("ERROR - status received = oAuth.status.ERROR");
		//alert("ERROR - status received = oAuth.status.ERROR");
    } 
    else {
        // do nothing, since user can be visiting different urls
    }
}


/**
 * Populates the list of Tasks
 */
function populateTaskList() {

//alert("In populateTaskList Function");

	$.mobile.showPageLoadingMsg("a", "Loading Tasks...");
	
	/* hide all the request Info blocks/divs */
	$('.request-info').hide();
	
	liquid.model.tasks.getList(function(data) {
        $('#qt-listview-tasks').empty();
        
        console.log(JSON.stringify(data)); // debug JSON response data
        
        /* check if there's an error from server, then display
         * error and retry
         */
        if (data.error) {
        	console.log('Unable to load Task List >> ' + data.error.message);
			//alert('Unable to load Task List >> ' + data.error.message);
        	$.mobile.hidePageLoadingMsg();   
            return;        	
        }
        
        /* if there are no elements in it, then
         * display the info message, and return */
        if (!data.items) {
		//alert("No Data in Task");
        	$('#qt-listview-info').show();
            $.mobile.hidePageLoadingMsg();        	
            return;
        }
        
        
        for (var i = 0; i < data.items.length; i++) {
        	
		//	alert("Data Item Length : "+data.items.length);
        	var item = data.items[i];
        	
        	$('#qt-listview-tasks')
        		.append('<li><h5>' 
        					+ item.title +
        				'</h5></li>');
        }
        
        $('#qt-listview-tasks').listview('refresh');
        $.mobile.hidePageLoadingMsg();   
	});
}


function goHome() {
	
    $.mobile.changePage("#page-unauthorized", {
        transition : "none",
        reverse: false,
        changeHash: false
    });
    
}



//(function() {

	//$('NotificationList.html').live('pageshow', function(event) {
	
	function Asif()
		{
		//alert("In $('#page-tasklist').live('pageshow', function(event) Function");
		
		if (!liquid.helper.oauth.isAuthorized()) {
		//alert("!liquid.helper.oauth.isAuthorized() IS Authorized");
			goHome();
			return;
		}
		
		$('#btn-refresh').click(function(event) {
		//alert("$('#btn-refresh').click(function(event) IS Called");
			populateTaskList();
			event.preventDefault();
		});
		
		$('#btn-hide-error').click(function(event) {
		//	alert("$('#btn-hide-error').click(function(event) IS Called");
			$('#qt-listview-error').hide();			
			event.preventDefault();
		});
		
		/* populateTaskList on page init */
		populateTaskList();
	
		/**
		 * Add the listeners for each of the components
		 * 	Listeners are for:
		 * - Title bar refresh btn (#head-menu-refresh)
		 */
		$('#head-menu-refresh').click(function(event) {
		//alert("$('#btn-hide-error').click(function(event) IS Called");
		    populateTaskList();
		    event.preventDefault();
		});
		
		
		$('#head-menu-signout').click(function(event) {
		    liquid.helper.oauth.unAuthorize();
		    goHome();
		    event.preventDefault();
		});
	
	}
	//);
//})();
