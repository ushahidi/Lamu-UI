// // Leaflet
// define(['jquery', 'stamen', 'leaflet'], function($, stamen, leaflet) {

//   // create a map in the "map" div, set the view to a given place and zoom
//   var layer = new L.StamenTileLayer('terrain');
//   var map = new L.Map('map', {
//       center: new L.LatLng(36.08000, -79.81944),
//       zoom: 7
//   });
//   map.addLayer(layer);

//   // add a marker in the given location, attach some popup content to it and open the popup
//   L.marker([36.08000, -79.81944]).addTo(map)
//       .bindPopup('Welcome to North Carolina :)')
//       .openPopup();

// });

// Leaflet with nested dependencies
define(['jquery', 'leaflet'], function($, leaflet) {
  require(['stamen'], function(stamen) {
      // create a map in the "map" div, set the view to a given place and zoom
      var layer = new L.StamenTileLayer('terrain');
      var map = new L.Map('map', {
          center: new L.LatLng(36.08000, -79.81944),
          zoom: 7
      });
      map.addLayer(layer);

      // add a marker in the given location, attach some popup content to it and open the popup
      L.marker([36.08000, -79.81944]).addTo(map)
          .bindPopup('Welcome to North Carolina :)')
          .openPopup();
  });
});
