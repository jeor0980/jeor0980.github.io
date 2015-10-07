function initialize() {
    var mapOptions = {
		center: {lat: 40.007552, lng: -105.266135},
		zoom: 16
	};

	var CUmap = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

	//initializeMarkers(CUmap, Buildings);

	//Musicmarker.setMap(CUmap);
}

function initializeMarkers(CUmap, Buildings){
	for (var i = 0; i < Buildings.length; i++){
		var building = Buildings[i];
		var currentLatLng = new google.maps.LatLng(building[1],building[2]);

		var marker = new google.maps.Marker({
			position: currentLatLng,
			//map: CUmap,
			title: building[0],
			zIndex: building[3]
		});
	}
}

var Buildings = [
	['Music',40.007552,-105.266135,1],
	['Something Else',40.007888,-105.2671,1]
];

google.maps.event.addDomListener(window, 'load', initialize);