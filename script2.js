//<!-- Aqui se representa el MAPA: -->
//<div id="mapa"></div>
//<!-- //Aqui se representa el MAPA: -->
//<script type="text/javascript">


//<![CDATA[
var map, geocoder;
window.onload = function () {
var latlng = new google.maps.LatLng(30.535272, 114.274439);
var mapOptions = {
zoom: 16,
center: latlng,
mapTypeId: google.maps.MapTypeId.ROADMAP
};map = new google.maps.Map(document.getElementById('mapa'),
mapOptions);
  
// llama a la funcion
geocoder = new google.maps.Geocoder();
};
function codeAddress() {
var address = document.getElementById('address').value;
  
// Función completa de Geocoding
geocoder.geocode({
'address': address
  
// 'latLng': latlng si lo que queremos ejecutar en geocodificación inversa
}, function (results, status) {
if (status == google.maps.GeocoderStatus.OK) {
document.getElementById('x').innerHTML =
results[0].geometry.location.lat().toFixed(6);
document.getElementById('y').innerHTML =
results[0].geometry.location.lng().toFixed(6);
map.setCenter(results[0].geometry.location);
document.getElementById('direccion').innerHTML =
results[0].formatted_address;
var marker = new google.maps.Marker({
map: map,
position: results[0].geometry.location
});
infowindow = new google.maps.InfoWindow({
content: results[0].formatted_address + '<br> Latitud: ' +
results[0].geometry.location.lat().toFixed(6) + '<br> Longitud: ' +
results[0].geometry.location.lng().toFixed(6)
});
infowindow.open(map, marker)
}
  
// Se detallan los diferentes tipos de error
else {
alert('La página.. no tuvo éxito por la siguiente razón: ' + status)
}
})
};
//]]>
//</script>
