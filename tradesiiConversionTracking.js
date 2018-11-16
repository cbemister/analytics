<script>

// Capture Chat Tracking Vars From URL Params
var chatTrackingVars = {{chatTrackingVars - Get Param}};

if (chatTrackingVars) {

	// Split Chat Tracking Vars 
	var chatTrackingArray = chatTrackingVars.split('|');

	// Store As Separate Variables
	var cid = chatTrackingArray[0];
	var path = chatTrackingArray[1];
	var gclid = chatTrackingArray[2];
	var time = chatTrackingArray[3];

	// Push to Google Analytics Using Measurement Protocal
	var dealershipGA = new Image(1, 1);
	dealershipGA.src = 'https://www.google-analytics.com/collect?v=1&tid={{UAID Table - Referrer}}&cid=' + cid + '&t=event&ec=Tradesii&ea=Lead&el=' + path;
	document.body.appendChild(dealershipGA);

	//Check if GCLID Exists
	if (gclid) {

		//Split Time From Time Zone
		var timeStamp = parseInt(time.split('-')[0]);
		var zoneId = parseInt(time.split('-')[1]);

		// Get Conversion Time In Correct Format
		var conversionTime = adwordsTimestamp(timeStamp, zoneId);

		// Push To Google Sheet
		var googleAdwords = new Image(1, 1);
		googleAdwords.src = 'https://script.google.com/macros/s/AKfycbyOdxOfHQFvm1O2JFegGHKnpyXsvMqeLm03RpI2gAAormqsK78/exec?Google%20Click%20ID=' + gclid + '&Conversion%20Name=Tradesii%20Conversion&Conversion%20Time=' + conversionTime;
		document.body.appendChild(googleAdwords);

	}


} 

// Format Timestamp 
function adwordsTimestamp(time, zone) {
	var now = new Date(time);
	var year = "" + now.getFullYear();
	var month = "" + (now.getMonth() + 1);
	if (month.length == 1) {
		month = "0" + month;
	}
	var day = "" + now.getDate();
	if (day.length == 1) {
		day = "0" + day;
	}
	var hour = "" + now.getHours();
	if (hour.length == 1) {
		hour = "0" + hour;
	}
	var minute = "" + now.getMinutes();
	if (minute.length == 1) {
		minute = "0" + minute;
	}
	var second = "" + now.getSeconds();
	if (second.length == 1) {
		second = "0" + second;
	}

	var timeZone = zone * -1 / 60 + '';

	var timeZoneFormatted = timeZone.split("");

	timeZoneFormatted.splice(1, 0, 0);

	timeZoneFormatted.push('00');

	var timeZoneFinal = timeZoneFormatted.join('');

	return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second + timeZoneFinal;
}

  
</script>
