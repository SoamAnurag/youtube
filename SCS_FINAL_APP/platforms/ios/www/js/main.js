//var cb=new ChildBrowser();

function init2() {

}

function init() {
    // the next line makes it impossible to see Contacts on the HTC Evo since it
    // doesn't have a scroll button
    // document.addEventListener("touchmove", preventBehavior, false);
    document.addEventListener("deviceready", init2, true);
}

function TestChildBrowser() {
alert('In TestChildBrowser Function');
  var client_id="966377745826-rpdp21nomaok5a79ngpqrkeqvi0pu52o.apps.googleusercontent.com";
  var state="Email";
  var scope="https://mail.google.com/";
//https://mail.google.com/,https://www.googleapis.com/auth/plus.login,https://www.googleapis.com/auth/userinfo.email,profile";
 //var scope="http://maps.google.com/maps/feeds/";
  window.plugins.childBrowser.showWebPage("https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=" + client_id + "&state=" + state + "&redirect_uri=https://oauth.io/auth&scope=" + scope);
 //window.plugins.childBrowser.showWebPage("https://accounts.google.com/o/oauth2/auth?scope=email%20profile&redirect_uri=https://oauth.io/auth&response_type=code&client_id="+client_id);
 
  //var scope="http://maps.google.com/maps/feeds/";
  //window.plugins.childBrowser.showWebPage("https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=" + client_id + "&state=" + state + "&redirect_uri=http://localhost&scope=" + scope);
 
//window.plugins.childBrowser.showWebPage("https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=" + client_id + "&state=" + state + "&redirect_uri=https://www.google.com");
}


function oAuth2Failed() {
alert('In Error Function');
  console.log('oAuth2Failed');
  document.getElementById('info').innerHTML='login failed';
  window.plugins.childBrowser.close();
}

function oAuth2Success(token) {
alert('In Success Function');
  console.log("I can haz code: "+token);
  document.getElementById('info').innerHTML=token;
  window.plugins.childBrowser.close();
}
