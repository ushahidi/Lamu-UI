//collapse and expand map
define(['jquery'], function($) {
	$(".js-collapse-map").click(function() {
		$('.js-map').toggleClass('map-collapse');
		$('.js-collapse-tab').toggleClass('none');
		$('.js-expand-tab').toggleClass('none');
		$('.leaflet-container .leaflet-control-zoom').toggle();
		return false;
	});

});





