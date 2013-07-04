//collapse and expand map
define(['jquery'], function($) {
  $("#map-wrapper").addClass('map-expand');
  $("#collapse-map").click(function() {
    $('#map-wrapper').toggleClass('map-collapse')
      console.log('You clicked #collapse-map');
  });
});
