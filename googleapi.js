var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.5155, lng: -122.6793},
    zoom: 18
  });
}