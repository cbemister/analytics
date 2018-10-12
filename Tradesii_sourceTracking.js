

//Bookmarks

https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters

https://www.distilled.net/resources/a-comprehensive-guide-to-tracking-offline-interactions-in-google-analytics/

https://support.google.com/tagmanager/answer/6164469?visit_id=636747211449311679-2176417965&rd=1

https://developers.google.com/analytics/devguides/collection/protocol/v1/devguide#batch

https://developers.google.com/analytics/devguides/collection/protocol/v1/

var tradesiiHref = $('a.tradesii-widget__button.tradesii-modal__button').attr('href'); 
$('a.tradesii-widget__button.tradesii-modal__button').attr('href', tradesiiHref + '&color=blue');

https://tradesii.com/modal/valuation-report-responsive?key=666c2bf4-d176-4a1a-8eea-676959b11599&widget_style=green&language=en_CA&external_id=dbb64bf1-89fd-4f4d-8c15-6649785340e02&color=blue

https://ga-dev-tools.appspot.com/hit-builder/


Page Hostname tradesii.com

trigger 

// Check if tradesii modal exists

var tradesiiHref = $('a.tradesii-widget__button.tradesii-modal__button').attr('href'); 
$('a.tradesii-widget__button.tradesii-modal__button').attr('href', tradesiiHref + '&color=blue');

var tradesiiModule = document.querySelector('a.tradesii-widget__button.tradesii-modal__button')

var tradesiiHref = tradesiiModule.href;

tradesiiModule.href = tradesiiHref + {{clientId}};






clientId variable

function(){
	var clientId;
  
  	ga(function(tracker) {
      clientId = tracker.get('clientId');
    });

	return clientId;
  
}


  function () {
  	for (var results = {}, trackers = ga.getAll(), i = 0; i < trackers.length; i++) {
  		results[trackers[i].get("clientId")] = trackers[i].get("name");
  	}
  	return Object.keys(results)[0];
  }


CID (HTMLParamElement) variable

function myFunction() {
    var uri = "my test.asp?name=ståle&car=saab";
    var res = encodeURI(uri);
}


Custom HTML Tag 

XTN

Crosstown Edmonton | Shop Dodge Vehicles Online‎
Ad www.crosstownautocentre.com/‎+1 866-273-9422
Check Out Our Wide Selection of Dodge Vehicles Online Today! Third Row Stow'n Go. Incredible Value. Highlights: Friendly Staff Available Available, Certified Chrysler Retailer.

Crosstown Chrysler Jeep Dodge | Best Time to Buy‎
Ad www.crosstownautocentre.com/‎+1 866-273-9422
Browse Our New Inventory Online & Get A Quote or Book A Test Drive! Call Us & Save Thousands! Open Sundays. Best In Customer Service. Save On Over 1000 Cars. Categories: New Inventory, Used Inventory.


gclid=EAIaIQobChMI7YPom5H83QIVl_5kCh3ZIgwbEAAYASAAEgKEFvD_BwE

EAIaIQobChMItvPi86b_3QIVhNdkCh23EAXvEAAYASAAEgIuXfD_BwE

XTN CID 2144132934.1530715050

XTN UAID UA-544228-1

XTN GCLID EAIaIQobChMI7YPom5H83QIVl_5kCh3ZIgwbEAAYASAAEgKEFvD_BwE

AIR UA-66105406-1

AIR CID 2042042672.1530646719


11 organic 4 paid

https://www.google-analytics.com/collect?v=1&tid=UA-544228-1&cid=2144132934.1530715050&t=pageview&dl=https%3A%2F%2Fwww.crosstownautocentre.com%2Ftradesii-conversion.htm&aip=1&gclid=EAIaIQobChMI7YPom5H83QIVl_5kCh3ZIgwbEAAYASAAEgKEFvD_BwE

https://www.google-analytics.com/collect?v=1

&tid=UA-544228-1

&cid=2144132934.1530715050

&t=pageview

&dl=https%3A%2F%2Fwww.crosstownautocentre.com%2Ftradesii-conversion.htm

&aip=1

https://www.simoahava.com/analytics/two-ways-to-persist-data-via-google-tag-manager/

// Save data to the current local store
localStorage.setItem("gclid", {{gclid}});

localStorage.getItem("username")

if (window['Storage']) {
  // localStorage persists indefinitely
  localStorage.setItem('session', 'true'); 
  // sessionStorage persists until the browser is closed
  sessionStorage.setItem('session', 'true');
} else {
  // Fallback for when the browser doesn't support Web Storage API
  {{JS - setCookie}}('session', 'true');
}


if (window['Storage']) {
  var localSession = localStorage.getItem('session');
  var sessionSession = sessionStorage.getItem('session');
}


https://www.google-analytics.com/collect?v=1&tid=UA-544228-1&cid={{CID}}&t=event&ec=Tradesii%20Lead&ea={{Page URL}}&el=XTN_Test&cs=source&cm=medium



https://www.google-analytics.com/collect?v=1&tid=UA-544228--1&cid=2144132934.1530715050&t=pageview&dl=https%3A%2F%2Fwww.crosstownautocentre.com%2Fcontact-form-confirm.htm&aip=1&gclid=EAIaIQobChMI7YPom5H83QIVl_5kCh3ZIgwbEAAYASAAEgKEFvD_BwE


https://www.google-analytics.com/collect?v=1&tid=UA-544228-40&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=DIX_Sales&cs=source&cm=medium



https://www.google-analytics.com/collect?v=1&tid=UA-544228-40&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=DIX_Sales&cs=source&cm=medium

dl - document location

Circumvent any hostname filtering

 

uip - user IP

Preserve location

 

ua - User agent

Preserve info on user agent (optional)

 

ds - Data source

Segment on data source. (cdN as option)


http://clicteq.com/ultimate-guide-adwords-conversion-tracking/


//All Pages - Set GCLID Cookie

<script type=”text/javascript”>

function setCookie(name, value, days){

var date = new Date();

date.setTime(date.getTime() + (days*24*60*60*1000));

var expires = “; expires=” + date.toGMTString();

document.cookie = name + “=” + value + expires;

}

function getParam(p){

var match = RegExp(‘[?&]’ + p + ‘=([^&]*)’).exec(window.location.search);

return match && decodeURIComponent(match[1].replace(/\+/g, ‘ ‘));

}

var gclid = getParam(‘gclid’);

if(gclid){

var gclsrc = getParam(‘gclsrc’);

if(!gclsrc || gclsrc.indexOf(‘aw’) !== -1){

setCookie(‘gclid’, gclid, 90);

}

}

</script>

//Lead Form

<script>

function readCookie(name) {

var n = name + “=”;

var cookie = document.cookie.split(‘;’);

for(var i=0;i < cookie.length;i++) {

var c = cookie[i];

while (c.charAt(0)==’ ‘){c = c.substring(1,c.length);}

if (c.indexOf(n) == 0){return c.substring(n.length,c.length);}

}

return null;

}

window.onload = function() {

document.getElementById(‘gclid_field’).value =

readCookie(‘gclid’);

}

</script>
