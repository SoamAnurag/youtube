/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
//var app = {
//    // Application Constructor
//    initialize: function() {
//        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
//    },
//
//ing');
//        var receivedElement = parentElement.querySelector('.received');
//
//        listeningElement.setAttribute('style', 'display:none;');
//        receivedElement.setAttribute('style', 'display:block;');
//
//        console.log('Received Event: ' + id);
//    }
//};
//
//app.initialize();
//var token = "";
//var token1 = "";
//window.addEventListener('load', function(){
//    alert("hello anurag soam");
//    FirebasePlugin.grantPermission(function(hasPermission){
//        console.log("Notifications permission was " + (hasPermission ? "granted" : "denied"));
//    });
//    FirebasePlugin.getToken(function(fcmToken) {
//        alert(JSON.stringify(fcmToken));
//        token=fcmToken;
//        console.log(fcmToken)
//        sendToken(fcmToken);
//    }, function(error) {
//        console.error(error);
//    });
//    FirebasePlugin.getId(function(appInstanceId) {
//        console.log(appInstanceId);
//        token1=appInstanceId;
//        alert(appInstanceId);
//        sendToken(appInstanceId);			
//    }, function(error) {
//        console.error(error);
//    });
//
//
//    FirebasePlugin.onMessageReceived(function(notification) {
//        // Handle the notification here
//        sendToken(notification);
//        alert(JSON.stringify(notification))
//    });
//});

// Initialize the push notification plugin
//sendToken = (input) => {
//    $.ajax({
//    type: "POST",
//    url: "https://eo1xmecocxzojk8.m.pipedream.net",
//    data: JSON.stringify({input}),
//    contentType: "application/json",
//    dataType: "json",
//    success: function(response) {
//        console.log(response);
//    },
//    error: function(response) {
//        console.log(response);
//    }
//    });
//}
window.addEventListener('load', function(){
    
    FirebasePlugin.hasPermission(function(hasPermission){
        if(!hasPermission){
            FirebasePlugin.grantPermission(function(hasPermission){
                console.log("Notifications permission was " + (hasPermission ? "granted" : "denied"));
//                alert(("Notifications permission was " + (hasPermission ? "granted" : "denied")));		
            });
        }
    });
    
//    FirebasePlugin.getToken(function(fcmToken) {
//        console.log(fcmToken);
//        alert(fcmToken);
//        sendToken(fcmToken);
//    }, function(error) {
//        console.error(error);
//    });
//    FirebasePlugin.onMessageReceived(function(notification) {
//        // Handle the notification here
//        sendToken(notification);
//        alert(JSON.stringify(notification))
//    });
});
