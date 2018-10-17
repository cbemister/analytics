// JavaScript Document

https://support.google.com/google-ads/answer/7014069#prepare_data

https://support.google.com/google-ads/answer/7014069?co=ADWORDS.IsAWNCustomer%3Dfalse&hl=en

https://zackphilipps.com/store-gclid-cookie-send-to-hubspot/

https://www.simoahava.com/gtm-tips/10-useful-custom-javascript-tricks/

https://www.analyticsmania.com/post/cookies-with-google-tag-manager/

yyyy-MM-dd HH:mm:ss+z	"2012-08-14 13:00:00+0500"


("str1,str2,str3,str4".match(/,/g) || []).length


console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)


yyyy-MM-ddTHH:mm:ss zzzz	"2012-08-14T13:00:00 America/Los_Angeles"

var uri = "my test.asp?name=ståle&car=saab";
var enc = encodeURI(uri);
var dec = decodeURI(enc);
var res = enc + "<br>" + dec;


//VERSION 1.0 

var now = new Date();
var d = Date.parse(now);

function adwordsTimestamp (time) {
  now = new Date(time);
  year = "" + now.getFullYear();
  month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
  day = "" + now.getDate(); if (day.length == 1) { day = "0" + day; }
  hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
  minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
  second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second; }
	
  timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
	
  return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second + ' ' + timeZone;
}


//VERSION 2.0




// Pass as global variable to snapengage dashboard
var now = new Date();
var t = Date.parse(now);
var z = now.getTimezoneOffset();

var ct = t + '-' + z;



var timeStamp = parseInt(ct.split('-')[0]);
var zoneId = parseInt(ct.split('-')[1]);

function adwordsTimestamp (time, zone) {
  now = new Date(time);
  year = "" + now.getFullYear();
  month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
  day = "" + now.getDate(); if (day.length == 1) { day = "0" + day; }
  hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
  minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
  second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second; }
	
  timeZone = zone * -1 / 60 + '';
	
  timeZoneFormatted = timeZone.split("");
	
  timeZoneFormatted.splice(1, 0, 0);	
	
  timeZoneFormatted.push('00');
  
  timeZoneFinal = timeZoneFormatted.join('')

  
  return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second + timeZoneFinal;
}


adwordsTimestamp(timeStamp, zoneId);

https://script.google.com/macros/s/AKfycbyOdxOfHQFvm1O2JFegGHKnpyXsvMqeLm03RpI2gAAormqsK78/exec?Google%20Click%20ID=EAIaIQobChMI7YPom5H83QIVl_5kCh3ZIgwbEAAYASAAEgKEFvD_BwE&Conversion%20Name=Offline%20Conversion&Conversion%20Time=2018-10-10%2016%3A54%3A45-0600

https://script.google.com/macros/s/AKfycbyOdxOfHQFvm1O2JFegGHKnpyXsvMqeLm03RpI2gAAormqsK78/exec?Google%20Click%20ID=EAIaIQobChMI7YPom5H83QIVl_5kCh3ZIgwbEAAYASAAEgKEFvD_BwE&Conversion%20Name=Offline Conversion&Conversion Time=2018-10-10 16:54:45-0600

%20 space

%3A colon



https://script.google.com/macros/s/AKfycbyOdxOfHQFvm1O2JFegGHKnpyXsvMqeLm03RpI2gAAormqsK78/exec?Google%20Click%20ID={{GCLID}}&Conversion%20Name={{Offline Conversion}}&Conversion%20Time={{conversionTime}}


CID | PATH | GCLID | TIME

776166296.1539792437|/|EAIaIQobChMInJOng9qB3gIVGCR_Ch0MAQaeEAEYASAAEgLETvD_BwE|1539792923000-360

Google Analytics Client Id
776166296.1539792437

Page Url (Path) 
/

Google click ID (GCLID)
EAIaIQobChMInJOng9qB3gIVGCR_Ch0MAQaeEAEYASAAEgLETvD_BwE

Conversion Time
1539793783000-360

2018-10-10 16:54:45-0600



240 is a time zone offset. It's more commonly written as -04:00 (Invert the sign, divide by 60).


var objdatetime=new Date();
//var timezone=objdatetime.toTimeString();   // Output like 13:56:48 UTC+0530 , u need to extract UTC+0530 from it
var timezone=objdatetime.getTimezoneOffset(); // Output like -330
//getTimezoneOffset() will give u time difference between UTC time and local time, in minutes by using it
//you are able to get timezone e.g -330 means UTC+0530
