/*
*
* apply by satish verma aug  2014
*
*/
//var argscheck = require('cordova/argscheck'),
//    exec      = require('cordova/exec');
(function () {
    var Fields = {
        ANDROID_APP_UID: 'AppUID',
        ANONYMIZE_IP: '&aip',
        APP_ID: '&aid',
        APP_INSTALLER_ID: '&aiid',
        APP_NAME: '&an',
        APP_VERSION: '&av',
        CAMPAIGN_CONTENT: '&cc',
        CAMPAIGN_ID: '&ci',
        CAMPAIGN_KEYWORD: '&ck',
        CAMPAIGN_MEDIUM: '&cm',
        CAMPAIGN_NAME: '&cn',
        CAMPAIGN_SOURCE: '&cs',
        CLIENT_ID: '&cid',
        CURRENCY_CODE: '&cu',
        DESCRIPTION: '&cd',
        ENCODING: '&de',
        EVENT_ACTION: '&ea',
        EVENT_CATEGORY: '&ec',
        EVENT_LABEL: '&el',
        EVENT_VALUE: '&ev',
        EX_DESCRIPTION: '&exd',
        EX_FATAL: '&exf',
        FLASH_VERSION: '&fl',
        HIT_TYPE: '&t',
        HOSTNAME: '&dh',
        ITEM_CATEGORY: '&iv',
        ITEM_NAME: '&in',
        ITEM_PRICE: '&ip',
        ITEM_QUANTITY: '&iq',
        ITEM_SKU: '&ic',
        JAVA_ENABLED: '&je',
        LANGUAGE: '&ul',
        LOCATION: '&dl',
        NON_INTERACTION: '&ni',
        PAGE: '&dp',
        REFERRER: '&dr',
        SAMPLE_RATE: '&sf',
        SCREEN_COLORS: '&sd',
        SCREEN_NAME: '&cd',
        SCREEN_RESOLUTION: '&sr',
        SESSION_CONTROL: '&sc',
        SOCIAL_ACTION: '&sa',
        SOCIAL_NETWORK: '&sn',
        SOCIAL_TARGET: '&st',
        TIMING_CATEGORY: '&utc',
        TIMING_LABEL: '&utl',
        TIMING_VALUE: '&utt',
        TIMING_VAR: '&utv',
        TITLE: '&dt',
        TRACKING_ID: '&tid',
        TRANSACTION_AFFILIATION: '&ta',
        TRANSACTION_ID: '&ti',
        TRANSACTION_REVENUE: '&tr',
        TRANSACTION_SHIPPING: '&ts',
        TRANSACTION_TAX: '&tt',
        USE_SECURE: 'useSecure',
        VIEWPORT_SIZE: '&vp'
    };
    var HitTypes = {
        APP_VIEW: 'appview',
        EVENT: 'event',
        EXCEPTION: 'exception',
        ITEM: 'item',
        SOCIAL: 'social',
        TIMING: 'timing',
        TRANSACTION: 'transaction'
    };
    //function Analytics() {}
    var Analytics = function () { };
    Analytics.prototype = {
        Fields: Fields,
        HitTypes: HitTypes,
        setTrackingId: function (trackingId, success, error) {
             //alert(' in the analysics plugin setTrackingId ');
            // cordova.argscheck.checkArgs('sFF', 'GoogleAnalytics.setTrackingId', arguments);
            cordova.exec(success, error, 'GoogleAnalyticsPlugin', 'setTrackingId', [trackingId]);
        },
        get: function (key, success, error) {
            // cordova.argscheck.checkArgs('sfF', 'GoogleAnalytics.get', arguments);
            cordova.exec(success, error, 'GoogleAnalyticsPlugin', 'get', [key]);
        },
        set: function (key, value, success, error) {
            // cordova.argscheck.checkArgs('s*FF', 'GoogleAnalytics.set', arguments);
            cordova.exec(success, error, 'GoogleAnalyticsPlugin', 'set', [key, value]);
        },
        send: function (map, success, error) {
            // cordova.argscheck.checkArgs('oFF', 'GoogleAnalytics.send', arguments);
            // alert(' in the analysics plugin 2 send ');
            cordova.exec(success, error, 'GoogleAnalyticsPlugin', 'send', [map]);
        },
        close: function (success, error) {
            //  cordova.argscheck.checkArgs('FF', 'GoogleAnalytics.close', arguments);
            cordova.exec(success, error, 'GoogleAnalyticsPlugin', 'close', []);
        },
        customDimension: function (id, value, success, error) {
            // cordova.argscheck.checkArgs('n*FF', 'GoogleAnalytics.customDimension', arguments);
            this.set('cd' + id, value, success, error);
        },
        customMetric: function (id, value, success, error) {
            // argscheck.checkArgs('n*FF', 'GoogleAnalytics.customMetric', arguments);
            this.set('cm' + id, value, success, error);
        },
        sendEvent: function (category, action, label, value, success, error) {
            //  cordova.argscheck.checkArgs('ssSNFF', 'GoogleAnalytics.sendEvent', arguments);
            // alert(' in the analysics plugin 2 sendEvent ');
            var params = {};
            params[Fields.HIT_TYPE] = HitTypes.EVENT;
            params[Fields.EVENT_CATEGORY] = category;
            params[Fields.EVENT_ACTION] = action;
            params[Fields.EVENT_LABEL] = label;
            params[Fields.EVENT_VALUE] = value;
            this.send(params, success, error);
        },
        sendAppView: function (screenName, success, error) {
            //  argscheck.checkArgs('sFF', 'GoogleAnalyticsPlugin.sendAppView', arguments);
         // alert(' in the analysics plugin 2 sendAppView ');
            var params = {};
            params[Fields.HIT_TYPE] = HitTypes.APP_VIEW;
            params[Fields.SCREEN_NAME] = screenName;
            // alert(' in the analysics plugin 2 sendAppView ' +params);
            this.send(params, success, error);
        },
        sendException: function (description, fatal, success, error) {
            //   cordova.argscheck.checkArgs('s*FF', 'GoogleAnalyticsPlugin.sendException', arguments);
            var params = {};
            params[Fields.HIT_TYPE] = HitTypes.EXCEPTION;
            params[Fields.EX_DESCRIPTION] = description;
            params[Fields.EX_FATAL] = fatal ? 1 : 0;
            this.send(params, success, error);
        }
    };
    //module.exports = new Analytics();
   // alert('before analytics plugin')
    if (cordova.addPlugin) {
     //alert('after analytics plugin')
       cordova.addConstructor(function () {
       // alert('after analytics conc')
            //Register the javascript plugin with Cordova
           cordova.addPlugin('Analytics', new Analytics());
        });
    }
    else {
        if (!window.plugins) {
            window.plugins = {};
        }
        window.plugins.Analytics = new Analytics();
         //alert('after analytics plugin window.plugins.Analytics'+window.plugins.Analytics);
    }
})();


//var GA = window.plugins.Analytics;
// alert('analysics plugin available/ready. 2');
// //googleanalytics();