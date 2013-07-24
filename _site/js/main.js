require.config({
  paths: {
    "jquery": "vendor/jquery/jquery.min",
    "flexnav": "vendor/flexnav/js/jquery.flexnav.min",
    "leaflet": "http://cdn.leafletjs.com/leaflet-0.6.3/leaflet",
    "stamen": "http://maps.stamen.com/js/tile.stamen",
    "magnific": "vendor/magnific-popup/dist/jquery.magnific-popup.min",
    "foundation": "foundation/foundation.min",
    "foundation.offCanvas": "foundation/foundation.offCanvas",
    "htmlInspector": "vendor/html-inspector/dist/html-inspector.best-practice.js"
  },

  shim: {
      'leaflet': {
        deps: ['jquery'],
        exports: 'L'
      },

      "foundation": ['jquery'],
      "foundation.offCanvas": ['jquery']
  }
});

require([
  'modules/magnific',
  'modules/leafletMap',
  'modules/collapseMap',
  'modules/adminMenu',
  'modules/subNav',
  'modules/listViewBulkActions',

  // FOUNDATION requires
  'foundation',
  'foundation.offCanvas',
  'modules/foundationScript',

  'modules/htmlInspector'
]);


