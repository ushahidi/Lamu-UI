//collapse and expand map
define(['jquery'], function($) {
  $("#collapse-map").click(function() {
    $('#map').toggleClass('map-collapse');
      console.log('You clicked #collapse-map');
    $('#collapse-tab').text($('#collapse-tab').text() == 'collapse map' ? 'expand map' : 'collapse map');
    $('.leaflet-container .leaflet-control-zoom').toggle();
    return false;
  });

});





