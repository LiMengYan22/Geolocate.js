//<!-- Se determina y escribe la localizacion: -->
//<script type='text/javascript'>
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(mostrarUbicacion);
} else {alert('¡Error! Este navegador no soporta la Geolocalización.');}
function mostrarUbicacion(position) {
var times = position.timestamp;
var latitud = position.coords.latitude;
var longitud = position.coords.longitude;
var altitud = position.coords.altitude;
var exactitud = position.coords.accuracy;
var div = document.getElementById('ubicacion');
div.innerHTML ='Latitud: ' + latitud + '<br>Longitud: ' + longitud;}
function refrescarUbicacion() {
navigator.geolocation.watchPosition(mostrarUbicacion);}
//</script>
