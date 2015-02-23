var weatherApp = {};
var geocoder;


weatherApp.getWeather = function(){

	$.ajax({
		url : 'http://api.wunderground.com/api/61f0a55cb00602dc/conditions/q/' + weatherApp.pro + '/' + weatherApp.city + '/' + '.json',
		type : 'GET',
		dataType : 'json',
		success : function(data) {
			console.log(data);
			weatherApp.data = weatherApp.getWeather.current_observation;
		}
	}); //end ajax
}


// GET CURRENT LOCATION FROM USER //
weatherApp.geo = function() {
	navigator.geolocation.getCurrentPosition(function(position) {

	weatherApp.lat = position.coords.latitude;
	weatherApp.lon = position.coords.longitude;
	  console.log(position);
	  console.log(weatherApp.lat);
	  console.log(weatherApp.lon);
});
}	


function initialize() {
	geocoder = new google.maps.Geocoder();
}

// REVERSE GEOCODE TO GET LOCATION // 
function codeLatLng() {
  var latlng = new google.maps.LatLng(weatherApp.lat, weatherApp.lon);
  geocoder.geocode({'latLng': latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[1]) {
        // console.log(results[1].formatted_address);
        weatherApp.city = results[1].address_components[3].long_name;
        weatherApp.pro = results[1].address_components[5].long_name;
        console.log(results[1].address_components[3].long_name);
        console.log(results[1].address_components[5].long_name);
      } else {
        alert('No results found');
      }
    } else {
      alert('Geocoder failed due to: ' + status);
    }
  });
  // weatherApp.getWeather();
}
 
// does this even matter? I don't know
google.maps.event.addDomListener(window, 'load');

// DETERMINE ICON OUTPUT 
if (weatherApp.data.feelslike_c >= -1) {
	console.log(':)');
} else if (weatherApp.data.feelslike_c )

$(function() {
	weatherApp.geo();
});