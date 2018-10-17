
<?php

function ac_chat_tracking() {
	?>
	<script type="text/javascript">

		document.addEventListener( 'wpcf7mailsent', function( event ) {

			jQuery(document).ready(
				function () {

					// From URL Params
					var uaid = getParameterByName("uaid");
					var dept = getParameterByName("dept");

					//?uaid=UA-66105406-1&dept=Sales

					// From Form Input
					
					// Capture Chat Tracking Vars From Form Input
					var chatTrackingVars = document.getElementById('chatTrackingVars').value;

					// Split Chat Tracking Vars 
					var chatTrackingArray = chatTrackingVars.split('|');

					// Store As Separate Variables
					var cid = chatTrackingArray[0];
					var path = chatTrackingArray[1];
					var gclid = chatTrackingArray[2];
					var time = chatTrackingArray[3];

					// Encode URI
					var pathENC = encodeURI(path);

					// Push to Google Analytics Using Measurement Protocal
					var dealershipGA = new Image(1, 1);
					dealershipGA.src = 'https://www.google-analytics.com/collect?v=1&tid=' + uaid +'&cid=' + cid + '&t=event&ec=LiveChat&ea=' + dept + '%20Lead&el=' + pathENC;
					document.body.appendChild(dealershipGA);
					
					//Check if GCLID Exists
					if (gclid) {

                        //Split Time From Time Zone
                        var timeStamp = parseInt(time.split('-')[0]);
                        var zoneId = parseInt(time.split('-')[1]);
                            
                        // Get Conversion Time In Correct Format
                        var conversionTime = adwordsTimestamp(timeStamp, zoneId);

						// Push To Google Sheet
						var googleAdwords = new Image(1,1);
						googleAdwords.src = 'https://script.google.com/macros/s/AKfycbyOdxOfHQFvm1O2JFegGHKnpyXsvMqeLm03RpI2gAAormqsK78/exec?Google%20Click%20ID=' + gclid + '&Conversion%20Name=Chat%20Conversion&Conversion%20Time=' + conversionTime ;
						document.body.appendChild(googleAdwords);

					}

					// Format Timestamp 
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

				}
				
			);

		}, false );

		// Capture URL Parameter
		function getParameterByName(e, a) {
			a || (a = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
			var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
				r = n.exec(a);
			return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null;
		}

	</script>
	<?php
}

add_action( 'wp_footer', 'ac_chat_tracking' );

?>