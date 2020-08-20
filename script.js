/*Plugin Google */
function initMap() {
  var coord = { lat: -53.7893703, lng: -67.7149978 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}     