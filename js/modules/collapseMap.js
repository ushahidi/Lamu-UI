//collapse and expand map
define(['jquery'], function($) {
  $(".js-collapse-map").click(function() {
    $('.js-map').toggleClass('map-collapse');
      console.log('You clicked .js-collapse-map');
    $('.js-collapse-tab').text($('.js-collapse-tab').text() == 'collapse map' ? 'expand map' : 'collapse map');
    $('.leaflet-container .leaflet-control-zoom').toggle();
    return false;
  });

});





