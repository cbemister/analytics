# Custom Variables

## Return Client ID

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


function() {
  try {
    var trackers = ga.getAll();
    var i, len;
    for (i = 0, len = trackers.length; i < len; i += 1) {
      if (trackers[i].get('trackingId') === {{UAID}}) {
        return trackers[i].get('clientId');
      }
    }
  } catch(e) {}  
  return 'false';
}

