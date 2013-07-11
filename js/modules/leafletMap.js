// Leaflet with nested dependencies

// point users to leaflet options - http://leafletjs.com/reference.html#map-class

define(['jquery', 'leaflet'], function($, leaflet) {
  require(['stamen'], function(stamen) {
      // create a map in the "map" div, set the view to a given place and zoom
      var layer = new L.StamenTileLayer('terrain');
      var map = new L.Map('map', {
          center: new L.LatLng(36.08000, -79.81944),
          zoom: 7,
          scrollWheelZoom: false,
          dragging: false
      });
      var mapIcon = L.icon({
          iconUrl: 'images/map-marker.png',

          iconSize:     [76, 61], // size of the icon
          iconAnchor:   [22, 75], // point of the icon which will correspond to marker's location
          popupAnchor:  [10, -76] // point from which the popup should open relative to the iconAnchor
      });
      map.addLayer(layer);

      // add a custom marker in the given location, attach some popup content to it and open the popup

      L.marker([36.08000, -79.81944], {icon: mapIcon}).addTo(map);

      $('.leaflet-marker-pane img').attr('data-dropdown', 'leaflet-marker-pane');
  });

});
