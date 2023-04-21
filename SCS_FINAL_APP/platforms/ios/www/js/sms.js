/**
 * 
 * Phonegap sms plugin for Android
 * Asif Qureshi 2014
 *
 */

var sms = {
    createEvent: function(number, text, successCallback, errorCallback) {
    //alert('asif');
 		cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'sms', // mapped to our native Java class called "Share"
            'sms', // with this action name
            [{                  // and this array of custom arguments to create our entry
                "number": number,
                "text": text
            }]
        ); 
    }
}
//module.exports = SMS;