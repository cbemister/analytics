// JavaScript Document

https://support.google.com/google-ads/answer/7014069#prepare_data


yyyy-MM-dd HH:mm:ss+z	"2012-08-14 13:00:00+0500"


console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)


yyyy-MM-ddTHH:mm:ss zzzz	"2012-08-14T13:00:00 America/Los_Angeles"


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



2018-10-10 16:54:45 -0600



240 is a time zone offset. It's more commonly written as -04:00 (Invert the sign, divide by 60).


var objdatetime=new Date();
//var timezone=objdatetime.toTimeString();   // Output like 13:56:48 UTC+0530 , u need to extract UTC+0530 from it
var timezone=objdatetime.getTimezoneOffset(); // Output like -330
//getTimezoneOffset() will give u time difference between UTC time and local time, in minutes by using it
//you are able to get timezone e.g -330 means UTC+0530
