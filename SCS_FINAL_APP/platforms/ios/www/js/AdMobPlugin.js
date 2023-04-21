/**
 * 
 * Phonegap AdMob plugin for Android and ios both 
 * Satish Verma 2014
 *
 */
 
(function () {

var admobExport = function() {};

/**
 * This enum represents AdMob's supported ad sizes.  Use one of these
 * constants as the adSize when calling createBannerView.
 * @const
 */
admobExport.prototype.AD_SIZE = {
  BANNER: 'BANNER',
  IAB_MRECT: 'IAB_MRECT',
  IAB_BANNER: 'IAB_BANNER',
  IAB_LEADERBOARD: 'IAB_LEADERBOARD',
  SMART_BANNER: 'SMART_BANNER'
};

/**
 * Creates a new AdMob banner view.
 *
 * @param {!Object} options The options used to create a banner.  They should
 *        be specified similar to the following.
 *
 *        {
 *          'publisherId': 'MY_PUBLISHER_ID',
 *          'adSize': AdMob.AD_SIZE.AD_SIZE_CONSTANT,
 *          'positionAtTop': false
 *        }
 *
 *        publisherId is the publisher ID from your AdMob site, adSize
 *        is one of the AdSize constants, and positionAtTop is a boolean to
 *        determine whether to create the banner above or below the app content.
 *        A publisher ID and AdSize are required.  The default for postionAtTop
 *        is false, meaning the banner would be shown below the app content.
 * @param {function()} successCallback The function to call if the banner was
 *         created successfully.
 * @param {function()} failureCallback The function to call if create banner
 *         was unsuccessful.
 */
admobExport.prototype.createBannerView =
function(options, successCallback, failureCallback) {
  var defaults = {
    'publisherId': undefined,
    'adSize': undefined,
    'bannerAtTop': false
  };
  var requiredOptions = ['publisherId', 'adSize'];

  // Merge optional settings into defaults.
  for (var key in defaults) {
    if (typeof options[key] !== 'undefined') {
      defaults[key] = options[key];
    }
  }

  // Check for and merge required settings into defaults.
  requiredOptions.forEach(function(key) {
    if (typeof options[key] === 'undefined') {
      failureCallback('Failed to specify key: ' + key + '.');
      return;
    }
    defaults[key] = options[key];
  });
//alert( "In the Admob js" );
  cordova.exec(
      successCallback,
      failureCallback,
      'AdMob',
      'createBannerView',
      [{publisherId:defaults['publisherId'],adSize:defaults['adSize'], positionAtTop:defaults['bannerAtTop']}]
  );
};

/**
 * Creates a new AdMob interstitial view.
 *
 * @param {!Object} options The options used to create a interstitial.  They should
 *        be specified similar to the following.
 *
 *        {
 *          'publisherId': 'MY_PUBLISHER_ID'
 *        }
 *
 *        publisherId is the publisher ID from your AdMob site, which is required.  
 * @param {function()} successCallback The function to call if the interstitial was
 *         created successfully.
 * @param {function()} failureCallback The function to call if create interstitial
 *         was unsuccessful.
 */
admobExport.prototype.createInterstitialView =
function(options, successCallback, failureCallback) {
  var defaults = {
    'publisherId': undefined
  };
  var requiredOptions = ['publisherId'];

  // Merge optional settings into defaults.
  for (var key in defaults) {
    if (typeof options[key] !== 'undefined') {
      defaults[key] = options[key];
    }
  }

  // Check for and merge required settings into defaults.
  requiredOptions.forEach(function(key) {
    if (typeof options[key] === 'undefined') {
      failureCallback('Failed to specify key: ' + key + '.');
      return;
    }
    defaults[key] = options[key];
  });

  cordova.exec(
      successCallback,
      failureCallback,
      'AdMob',
      'createInterstitialView',
      [{publisherId:defaults['publisherId']}]
  );
};

admobExport.prototype.destroyBannerView =
function(options, successCallback, failureCallback) {
  cordova.exec(
	      successCallback,
	      failureCallback,
	      'AdMob',
	      'destroyBannerView',
	      []
	  );
};

/**
 * Request an AdMob ad.  This call should not be made until after the banner
 * view has been successfully created.
 *
 * @param {!Object} options The options used to request an ad.  They should
 *        be specified similar to the following.
 *
 *        {
 *          'isTesting': true|false,
 *          'extras': {
 *            'key': 'value'
 *          }
 *        }
 *
 *        isTesting is a boolean determining whether or not to request a
 *        test ad on an emulator, and extras represents the extras to pass
 *        into the request. If no options are passed, the request will have
 *        testing set to false and an empty extras.
 * @param {function()} successCallback The function to call if an ad was
 *        requested successfully.
 * @param {function()} failureCallback The function to call if an ad failed
 *        to be requested.
 */

admobExport.prototype.requestAd =
function(options, successCallback, failureCallback) {
  var defaults = {
    'isTesting': false,
    'extras': {}
  };

  for (var key in defaults) {
    if (typeof options[key] !== 'undefined') {
      defaults[key] = options[key];
    }
  }
//alert( "In the Admob js request" +defaults['extras']+ defaults['isTesting']);
  cordova.exec(
      successCallback,
      failureCallback,
      'AdMob',
      'requestAd',
      [{isTesting:defaults['isTesting'],extras:defaults['extras']}]
  );
};

/**
 * Request an AdMob interstitial ad.  This call should not be made until after the banner
 * view has been successfully created.
 *
 * @param {!Object} options The options used to request an ad.  They should
 *        be specified similar to the following.
 *
 *        {
 *          'isTesting': true|false,
 *          'extras': {
 *            'key': 'value'
 *          }
 *        }
 *
 *        isTesting is a boolean determining whether or not to request a
 *        test ad on an emulator, and extras represents the extras to pass
 *        into the request. If no options are passed, the request will have
 *        testing set to false and an empty extras.
 * @param {function()} successCallback The function to call if an ad was
 *        requested successfully.
 * @param {function()} failureCallback The function to call if an ad failed
 *        to be requested.
 */

admobExport.prototype.requestInterstitialAd =
function(options, successCallback, failureCallback) {
  var defaults = {
    'isTesting': false,
    'extras': {}
  };

  for (var key in defaults) {
    if (typeof options[key] !== 'undefined') {
      defaults[key] = options[key];
    }
  }

  cordova.exec(
      successCallback,
      failureCallback,
      'AdMob',
      'requestInterstitialAd',
      [{isTesting:defaults['isTesting'], extras:defaults['extras']}]
  );
};

/*
 * Show or hide Ad.
 * 
 * @param {boolean} show true to show, false to hide.  
 * @param {function()} successCallback The function to call if an ad was
 *        requested successfully.
 * @param {function()} failureCallback The function to call if an ad failed
 *        to be requested.
 */
admobExport.prototype.showAd = 
function( show, successCallback, failureCallback) {
	if (show === undefined) {
		show = true;
	}

	cordova.exec(
		successCallback,
		failureCallback, 
		'AdMob', 
		'showAd', 
		[ {show:show} ]
	);
};

//module.exports = admobExport;
/*
	 * register plugin with Phonegap \ Cordova
	 */
	//if (cordova.addPlugin) {
	  //cordova.addConstructor(function() {
	    //Register the javascript plugin with Cordova
	    //cordova.addPlugin('admobExport', new admobExport());
	  //});
	//} else {
		if (!window.plugins) {
			window.plugins = {};
		}
	  window.plugins.admobExport = new admobExport();
	//}

	
})();
