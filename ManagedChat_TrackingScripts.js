

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

// 401 Dixie Hyundai

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-544228-40&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=DIX_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"


// 417 Infiniti 

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-73043653-1&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=417I_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"

// 417 Nissan

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-73043652-1&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=417N_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"

// Abbotsford Volkswagen

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-6661690-3&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=AVW_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"

// Airdrie Chrysler Dodge Jeep Ram

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-66105406-1&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=AIR_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"


// BMW Laval

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-66105406-1&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=AIR_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"

Bridges Chevrolet Buick GMC UA-58542718-1

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-58542718-1&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=BRG_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"


Cambridge Hyundai UA-544228-33

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-544228-33&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=CAM_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"

Canbec BMW UA-30843231-3

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-30843231-3&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=CBW_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"


Chilliwack Volkswagen UA-6661690-4

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-6661690-4&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=CVW_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"


Crosstown Auto Centre UA-544228-1

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-544228-1&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=XTN_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"

Kelowna Chevrolet UA-69435812-1

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-69435812-1&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=KLC_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"


Eastern Chrysler Dodge Jeep Ram UA-45211066-1

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-45211066-1&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=ETC_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"

Grande Prairie Chrysler Jeep Dodge UA-544228-7

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-544228-7&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=GPC_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"


Grande Prairie Auto Credit UA-64305543-20

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-64305543-20&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=GPAC_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"
 
Grande Prairie Hyundai UA-544228-16

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-544228-16&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=GPH_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"


Grande Prairie Mitsubishi UA-544228-22

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-544228-22&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=GPM_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"


Grande Prairie Nissan UA-544228-17

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-544228-17&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=GPN_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"


Grande Prairie Subaru UA-544228-30

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-544228-30&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=GPS_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"

Grande Prairie Volkswagen UA-37313229-1

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-37313229-1&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=GVW_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"


Grove Dodge UA-69418533-1

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-69418533-1&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=GRV_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"


Huntclub Nissan UA-73045036-1

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-69418533-1&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=GRV_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"


Island GM UA-40179181-1

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-40179181-1&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=IGM_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"


Lexus On the Park UA-25273590-3

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-25273590-3&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=LOP_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"


Maple Ridge Chrysler Jeep Dodge UA-544228-4

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-544228-4&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=MRC_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"


Maple Ridge Volkswagen UA-544228-34

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-544228-34&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=MVW_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"


Moncton Chrysler Jeep Dodge UA-544228-3

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-544228-3&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=MON_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"


Northland Chrysler Jeep Dodge UA-544228-6

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-544228-6&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=NLD_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"


Northland Hyundai UA-544228-19

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-544228-19&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=NLH_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"


Northland Nissan UA-544228-25

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-544228-25&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=NLN_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"


Ponoka Chrysler Jeep Dodge UA-544228-13

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-544228-13&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=PON_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"

Scarborough Toyota UA-25273590-1

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-25273590-1&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=STS_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"


Southview Acura UA-64449848-1

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-64449848-1&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=SVA_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"


Toronto Dodge UA-58646516-1

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-58646516-1&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=TOD_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"


Toyota On The Park UA-25273590-2

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-25273590-2&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=TOP_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"


Victoria Hyundai UA-544228-18

on_sent_ok: "var sm = {}; var s = {}; var m = {}; jQuery(document).ready(function() {sessionStorage.setItem('sourceMedium', document.getElementById('sourceMedium').value); sm = sessionStorage.getItem('sourceMedium').replace("source=", "").replace("&medium=", "/").split('/'), s = sm[0], m = sm[1]; jQuery('body').append('<img src="https://www.google-analytics.com/collect?v=1&amp;tid=UA-544228-18&amp;cid=CLIENT_ID_NUMBER&amp;t=event&amp;ec=LiveChat&amp;ea=Lead&amp;el=VIH_Sales&amp;cs='+ s + '&amp;cm=' + m +'">'); });"