
<label><strong>Client ID</strong> (required) 
[text* chatCID id:chatCID placeholder "2144132934.1530715050"]</label>

<label><strong>Path URL</strong> (required) 
[text* chatPATH id:chatPATH placeholder "/new-inventory/index.htm"]</label>

<label><strong>Chat Tracking Vars</strong>
[text* chatTrackingVars id:chatTrackingVars placeholder ""]</label>


function ac_source_attribution_tracking() {
	?>
	<script type="text/javascript">

		document.addEventListener( 'wpcf7mailsent', function( event ) {

			jQuery(document).ready(
				function () {

					// From URL Params
					var uaid = getParameterByName("uaid");
					var dept = getParameterByName("dept");

					//?uaid=UA-66105406-1&dept=Sales

					alert(uaid + dept);

					// From Form Input
					var cid = document.getElementById('chatCID').value;
					var path = document.getElementById('chatPATH').value;

					var pathENC = encodeURI(path);

					var myImage = new Image(1, 1);
					myImage.src = 'https://www.google-analytics.com/collect?v=1&tid=' + uaid +'&cid=' + cid + '&t=event&ec=LiveChat&ea=' + dept+ '%20Lead&el=' + pathENC;
					document.body.appendChild(myImage);

				});

		}, false );

		function getParameterByName(e, a) {
			a || (a = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
			var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
				r = n.exec(a);
			return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null;
		}

	</script>
	<?php
}

add_action( 'wp_footer', 'ac_source_attribution_tracking' );


Beginning January 2018, on_sent_ok has been deprecated in Contact Form 7 (version 5.0). If you have been using on_sent_ok in your Contact Form 7 forms, your forms may no longer work as expected.



To replace it with an alternative code using DOM events, first, find the file named “functions.php” in the directory of your active theme. Second, add the following code at the bottom of the functions.php file:


add_action( 'wp_footer', 'mycustom_wp_footer' );
 
function mycustom_wp_footer() {
?>
<script type="text/javascript">
document.addEventListener( 'wpcf7mailsent', function( event ) {
    ga( 'send', 'event', 'Contact Form', 'submit' );
}, false );
</script>
<?php
}

Third, remove the “on_sent_ok” line from the Additional Settings tab and save the contact form.


// Form Field HTML

<label>Copy from <strong>source=</strong> in LiveChat Window (required) 
[text* SourceMedium id:sourceMedium]</label><br /> Example:  <strong>
source=direct&medium=none</strong>

<label>Copy both strings of numbers <strong>(2144132934.1530715050)</strong> including the separating period (required) 
[text* chatCID id:chatCID]</label><br /> Example: <strong>
2144132934.1530715050</strong>

<label>Copy from <strong>/page.htm</strong> (required) 
[text* chatPath id:chatPath]</label><br /> Example:  <strong>
source=direct&medium=none</strong>


// 401 Dixie Hyundai

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-544228-40&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=DIX_Sales&cs='+ s + '&cm=' + m +'">'); });"



on_sent_ok: "

var cid = {};
jQuery(document).ready(
	function () {
		sessionStorage.setItem('cid', document.getElementById('chatCID').value);
		cid = sessionStorage.getItem('cid');

		jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-544228-40&cid=' + cid + '&t=event&ec=LiveChat&ea=Lead%20DIX_Sales&el=Page_Path');
	});

"



// 417 Infiniti 

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-73043653-1&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=417I_Sales&cs='+ s + '&cm=' + m +'">'); });"

// 417 Nissan

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-73043652-1&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=417N_Sales&cs='+ s + '&cm=' + m +'">'); });"

// Abbotsford Volkswagen

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-6661690-3&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=AVW_Sales&cs='+ s + '&cm=' + m +'">'); });"

// Airdrie Chrysler Dodge Jeep Ram

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-66105406-1&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=AIR_Sales&cs='+ s + '&cm=' + m +'">'); });"


// BMW Laval

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-66105406-1&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=AIR_Sales&cs='+ s + '&cm=' + m +'">'); });"

Bridges Chevrolet Buick GMC UA-58542718-1

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-58542718-1&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=BRG_Sales&cs='+ s + '&cm=' + m +'">'); });"


Cambridge Hyundai UA-544228-33

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-544228-33&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=CAM_Sales&cs='+ s + '&cm=' + m +'">'); });"

Canbec BMW UA-30843231-3

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-30843231-3&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=CBW_Sales&cs='+ s + '&cm=' + m +'">'); });"


Chilliwack Volkswagen UA-6661690-4

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-6661690-4&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=CVW_Sales&cs='+ s + '&cm=' + m +'">'); });"


Crosstown Auto Centre UA-544228-1

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-544228-1&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=XTN_Sales&cs='+ s + '&cm=' + m +'">'); });"

Kelowna Chevrolet UA-69435812-1

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-69435812-1&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=KLC_Sales&cs='+ s + '&cm=' + m +'">'); });"


Eastern Chrysler Dodge Jeep Ram UA-45211066-1

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-45211066-1&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=ETC_Sales&cs='+ s + '&cm=' + m +'">'); });"

Grande Prairie Chrysler Jeep Dodge UA-544228-7

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-544228-7&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=GPC_Sales&cs='+ s + '&cm=' + m +'">'); });"


Grande Prairie Auto Credit UA-64305543-20

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-64305543-20&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=GPAC_Sales&cs='+ s + '&cm=' + m +'">'); });"
 
Grande Prairie Hyundai UA-544228-16

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-544228-16&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=GPH_Sales&cs='+ s + '&cm=' + m +'">'); });"


Grande Prairie Mitsubishi UA-544228-22

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-544228-22&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=GPM_Sales&cs='+ s + '&cm=' + m +'">'); });"


Grande Prairie Nissan UA-544228-17

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-544228-17&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=GPN_Sales&cs='+ s + '&cm=' + m +'">'); });"


Grande Prairie Subaru UA-544228-30

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-544228-30&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=GPS_Sales&cs='+ s + '&cm=' + m +'">'); });"

Grande Prairie Volkswagen UA-37313229-1

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-37313229-1&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=GVW_Sales&cs='+ s + '&cm=' + m +'">'); });"


Grove Dodge UA-69418533-1

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-69418533-1&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=GRV_Sales&cs='+ s + '&cm=' + m +'">'); });"


Huntclub Nissan UA-73045036-1

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-69418533-1&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=GRV_Sales&cs='+ s + '&cm=' + m +'">'); });"


Island GM UA-40179181-1

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-40179181-1&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=IGM_Sales&cs='+ s + '&cm=' + m +'">'); });"


Lexus On the Park UA-25273590-3

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-25273590-3&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=LOP_Sales&cs='+ s + '&cm=' + m +'">'); });"


Maple Ridge Chrysler Jeep Dodge UA-544228-4

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-544228-4&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=MRC_Sales&cs='+ s + '&cm=' + m +'">'); });"


Maple Ridge Volkswagen UA-544228-34

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-544228-34&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=MVW_Sales&cs='+ s + '&cm=' + m +'">'); });"


Moncton Chrysler Jeep Dodge UA-544228-3

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-544228-3&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=MON_Sales&cs='+ s + '&cm=' + m +'">'); });"


Northland Chrysler Jeep Dodge UA-544228-6

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-544228-6&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=NLD_Sales&cs='+ s + '&cm=' + m +'">'); });"


Northland Hyundai UA-544228-19

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-544228-19&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=NLH_Sales&cs='+ s + '&cm=' + m +'">'); });"


Northland Nissan UA-544228-25

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-544228-25&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=NLN_Sales&cs='+ s + '&cm=' + m +'">'); });"


Ponoka Chrysler Jeep Dodge UA-544228-13

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-544228-13&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=PON_Sales&cs='+ s + '&cm=' + m +'">'); });"

Scarborough Toyota UA-25273590-1

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-25273590-1&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=STS_Sales&cs='+ s + '&cm=' + m +'">'); });"


Southview Acura UA-64449848-1

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-64449848-1&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=SVA_Sales&cs='+ s + '&cm=' + m +'">'); });"


Toronto Dodge UA-58646516-1

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-58646516-1&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=TOD_Sales&cs='+ s + '&cm=' + m +'">'); });"


Toyota On The Park UA-25273590-2

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-25273590-2&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=TOP_Sales&cs='+ s + '&cm=' + m +'">'); });"


Victoria Hyundai UA-544228-18

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&tid=UA-544228-18&cid=CLIENT_ID_NUMBER&t=event&ec=LiveChat&ea=Lead&el=VIH_Sales&cs='+ s + '&cm=' + m +'">'); });"