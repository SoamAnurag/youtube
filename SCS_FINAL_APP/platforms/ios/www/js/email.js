/**
 * 
 * Phonegap email plugin for Android
 * Asif Qureshi 2014
 *
 */

var email = {
    createEvent: function(senderemail, senderpwd,subject, body,reveiveremail, successCallback, errorCallback) {
   // alert(senderemail);
 		cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'email', // mapped to our native Java class called "Share"
            'actionemail', // with this action name
            [{                  // and this array of custom arguments to create our entry
                "senderemail": senderemail,
                "senderpwd": senderpwd,
                "subject": subject,
                "body": body,
                "reveiveremail": reveiveremail
            }]
        ); 
    }
}
//module.exports = SMS;