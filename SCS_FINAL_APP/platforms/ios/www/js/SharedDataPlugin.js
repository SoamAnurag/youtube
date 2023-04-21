(function () {
    var SDP = function () { };
    SDP.prototype.getData = function (successCallback, failureCallback) {
        return cordova.exec(successCallback,
	              failureCallback,
	              'GetSharedDataPlugin',
	              'GETDATA',
	              [{}]);
    };
    SDP.prototype.saveData = function (successCallback, failureCallback,data) {
        return cordova.exec(successCallback,
	              failureCallback,
	              'GetSharedDataPlugin',
	              'SAVEDATA',
	              [{ data: data}]);
    };
  //  alert('before shareddatatplugin');
    if (cordova.addPlugin)
   {
   // alert('after shareddatatplugin');
        cordova.addConstructor(function () {
            cordova.addPlugin('SDP', new SDP());
        });
    } else {
        if (!window.plugins) {
            window.plugins = {};
        }
        window.plugins.SDP = new SDP();
    }
})();