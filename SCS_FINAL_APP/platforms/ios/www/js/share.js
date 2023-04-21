/**
 * 
 * Phonegap share plugin for Android
 * Pradeep Shukla 2013
 *
 */

var Share = {
    createEvent: function(subject, text, successCallback, errorCallback) {
 		cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'Share', // mapped to our native Java class called "Share"
            'actionShare', // with this action name
            [{                  // and this array of custom arguments to create our entry
                "subject": subject,
                "text": text
            }]
        ); 
    }
}
//module.exports = Share;