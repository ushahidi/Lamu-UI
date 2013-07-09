require.config({
  paths: {
    "jquery": "vendor/jquery/jquery.min",
    // "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
    "leaflet": "http://cdn.leafletjs.com/leaflet-0.5.1/leaflet",
    "stamen": "http://maps.stamen.com/js/tile.stamen",

    "iCheck": "vendor/iCheck/jquery.icheck.min",

    // "HTMLInspector": "vendor/html-inspector/dist/html-inspector"

    "foundation": "foundation/foundation.min",
    "foundation.offCanvas": "foundation/foundation.offCanvas"
  },
  shim: {

      "iCheck": ['jquery'],

      // "HTMLInspector": ['jquery'],

      'leaflet': {
        deps: ['jquery'],
        exports: 'L'
      },
      "foundation": ['jquery'],
      "foundation.offCanvas": ['jquery']
  }
});


// GLOBAL VARIABLES

/*
FIXME: use CSS 3 animations and then none for fallback
 */
// slideToggle duration variable
var toggleDuration = 50;

// END GLOBAL VARIABLES


require([
  // 'modules/leafletMap',

  'modules/iCheck',

  'modules/collapseMap',
  'modules/adminMenu',

  // FOUNDATION requires
  'foundation',
  'foundation.offCanvas',
  'modules/foundationScript'
]);


