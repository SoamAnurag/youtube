function EmailApple() {
   
}

EmailApple.prototype.available = function (callback) {
  cordova.exec(function (avail) {
    callback(avail ? true : false);
  }, null, "EmailApple", "available", []);
};

EmailApple.prototype.email = function (message, subject, image, url, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "SocialSharing", "share", [message, subject, image, url]);
};



EmailApple.install = function () {
  if (!window.plugins) {
     
    window.plugins = {};
  }
  
  window.plugins.EmailApple = new EmailApple();
  return window.plugins.EmailApple;
};

cordova.addConstructor(EmailApple.install);


//function ShareApp(){
    //alert('asif');
  //  window.plugins.socialsharing.share('','');
//}