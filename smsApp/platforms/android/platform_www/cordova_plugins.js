cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-sms-receive.SMSReceive",
      "file": "plugins/cordova-plugin-sms-receive/www/SMSReceive.js",
      "pluginId": "cordova-plugin-sms-receive",
      "clobbers": [
        "cordova.plugins.SMSReceive"
      ]
    },
    {
      "id": "cordova-sms-reader.smsreader",
      "file": "plugins/cordova-sms-reader/www/smsreader.js",
      "pluginId": "cordova-sms-reader",
      "clobbers": [
        "smsreader"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-sms-receive": "2.0.0",
    "cordova-sms-reader": "0.0.3"
  };
});