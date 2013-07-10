//collapse and expand map
define(['jquery'], function($) {
  $("#collapse-map").click(function() {
    $('#map-wrapper').toggleClass('map-collapse')
      console.log('You clicked #collapse-map');
  });
});
