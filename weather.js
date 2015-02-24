var weatherApp = {};
var geocoder;


weatherApp.getWeather = function(){

	$.ajax({
		url : 'http://api.wunderground.com/api/61f0a55cb00602dc/conditions/q/' + weatherApp.pro + '/' + weatherApp.city + '/' + '.json',
		type : 'GET',
		dataType : 'json',
		success : function(data) {
			// console.log(data.current_observation.feelslike_c);
		    weatherApp.temp = parseInt(data.current_observation.feelslike_c);
		    console.log(weatherApp.temp);
		    convertResult();

		    // weatherApp. = convertResult();
		    $('.temperature').html('It feels like ' + weatherApp.temp + '&deg;C in ' + weatherApp.city + '!');
		    // $('.location').html(weatherApp.city);
		}
	}); //end ajax
}

// GET CURRENT LOCATION FROM USER //
weatherApp.geo = function() {
	navigator.geolocation.getCurrentPosition(function(position) {

	weatherApp.lat = position.coords.latitude;
	weatherApp.lon = position.coords.longitude;

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
        weatherApp.city = results[1].address_components[3].long_name;
        weatherApp.pro = results[1].address_components[5].long_name;
        console.log(results[1].address_components[3].long_name);
        console.log(results[1].address_components[5].long_name);

        weatherApp.getWeather();
      } else {
        alert('No results found');
      }
    } else {
      alert('Geocoder failed due to: ' + status);
    }
  });
  
}
 
// does this even matter? I don't know
google.maps.event.addDomListener(window, 'load');


// DETERMINE ICON OUTPUT 
function convertResult() {

	if (weatherApp.temp >= 0) {
		console.log(':|');
	} else if (weatherApp.temp <= -1) {
		console.log(':(');
		console.log('REAL SHIT WEATHER');
	} else if (weatherApp.temp <= -15) {
		console.log(":'(");
	} else if (weatherApp.temp >= 20) {
		console.log(':D');
	}
}


$(function() {
	weatherApp.geo();
	initialize();

	$('input.submit').on('click', function(e) {
		e.preventDefault();
		// console.log('input clicked');
		codeLatLng();
	});
});