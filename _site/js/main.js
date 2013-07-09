require.config({
  paths: {
    "jquery": "vendor/jquery/jquery.min",
    // "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
    "leaflet": "http://cdn.leafletjs.com/leaflet-0.5.1/leaflet",
    "stamen": "http://maps.stamen.com/js/tile.stamen",

    // "HTMLInspector": "vendor/html-inspector/dist/html-inspector"

    "foundation": "foundation/foundation.min",
    "foundation.offCanvas": "foundation/foundation.offCanvas",

    // "iCheck": "vendor/iCheck/jquery.icheck.min"
  },
  shim: {

      'leaflet': {
        deps: ['jquery'],
        exports: 'L'
      },

      // "HTMLInspector": ['jquery'],

      "foundation": ['jquery'],
      "foundation.offCanvas": ['jquery'],

      // 'iCheck': ['jquery']
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

  'modules/collapseMap',
  'modules/adminMenu',
  'modules/bulkFilterBar',

  // FOUNDATION requires
  'foundation',
  'foundation.offCanvas',
  'modules/foundationScript',

  // 'modules/iCheck'
]);


