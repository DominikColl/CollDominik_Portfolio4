var myMap;
function initMap() {
  myMap = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.5155, lng: -122.6793},
    zoom: 18
  });
}
// Error becuase google doesnt have my billing information