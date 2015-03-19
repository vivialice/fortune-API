var app = {};


app.horoscopes = {}

app.month = '';
app.day = '';

app.getData = function() {
	$.ajax({
		url: 'http://vivienilett.com/fortune/converter.php',
		type: 'GET',
		dataType: 'json',
		success: function(data){
			// Normalize the data from the json file
			var horoscopes = data.channel.item;
			for (var i = 0; i < horoscopes.length; i++) {
				var sign = horoscopes[i].title.split(" ")[0].toLowerCase();
				app.horoscopes[sign] = horoscopes[i];
			};

			findBirthday();
			getZodiacFromDate();

			// take off loading..
			$('.submit').removeAttr('disabled').val('Get your fortune').removeClass('loading');
		}
	});
}

// FIRST GET BIRTHDATE FROM USER USING DROPDOWN 
function findBirthday() { 
	
	$('.submit').on('click', function(e) {
		e.preventDefault();
	
		app.month = parseInt($('.month option:selected').val());
		app.day = parseInt($('.day option:selected').val());
		var signData = getZodiacFromDate();
		// pull info and append into div 
		$('.fortune').html(signData).fadeIn(200);
		// remove all but first p tag in array
		$('.fortune p').not(':first').remove();
	});
}

// THEN DETERMINE ZODIAC SIGN FROM INPUT 
var getZodiacFromDate = function() {
// use if statements to determine which sign the app variable matches 
	// console.log('get zodiac is working');

	// aquarius
	if ( app.month=== 1 && app.day >= 20 ||
	     app.month=== 2 && app.day < 19 ) 
	{	
		console.log('aquarius');
		return app.horoscopes.aquarius.description;
	// pisces
	} else if ( app.month=== 2 && app.day >= 19 ||
	     		app.month=== 3 && app.day < 21 ) 
    {
    	console.log('pisces');
    	return app.horoscopes.pisces.description;
    // aries
	} else if ( app.month=== 3 && app.day >= 21 ||
	     		app.month=== 4 && app.day < 20 ) 
	{
		console.log('aries'); 
		return app.horoscopes.aries.description;
	// taurus
	} else if ( app.month=== 4 && app.day >= 20 ||
	     		app.month=== 5 && app.day < 21 )	
	{	
		console.log('taurus'); 
		return app.horoscopes.taurus.description;
	// gemini
	} else if ( app.month=== 5 && app.day >= 21 ||
	     		app.month=== 6 && app.day < 21 )
	{
		console.log('gemini');
		return app.horoscopes.gemini.description;
	// cancer
	} else if ( app.month=== 6 && app.day >= 21 ||
	     		app.month=== 7 && app.day < 23 )
	{
		console.log('cancer');
		return app.horoscopes.cancer.description;
	// leo
	} else if ( app.month=== 7 && app.day >= 23 ||
	     		app.month=== 8 && app.day < 23 )
	{
		console.log('leo');
		return app.horoscopes.leo.description;
	// virgo
	} else if ( app.month=== 8 && app.day >= 23 ||
	     		app.month=== 9 && app.day < 23 )
	{
		console.log('virgo');
		return app.horoscopes.virgo.description;
	// libra
	} else if ( app.month=== 9 && app.day >= 23 ||
	     		app.month=== 10 && app.day < 23 )
	{
		console.log('libra');
		return app.horoscopes.libra.description;
	// scorpio
	} else if ( app.month=== 10 && app.day >= 23 ||
	     		app.month=== 11 && app.day < 22 )	
	{
		console.log('scorpio');
		return app.horoscopes.scorpio.description;
	// sagittarius
	} else if ( app.month=== 11 && app.day >= 21 ||
	     		app.month=== 12 && app.day < 22 )
	{
		console.log('sagittarius');
		return app.horoscopes.sagittarius.description;
	// capricorn
	} else if ( app.month=== 12 && app.day >= 22 ||
	     		app.month=== 1 && app.day < 20 )
	{
		console.log('capricorn'); 
		return app.horoscopes.capricorn.description;
	}    		     		    		    		     		    		     		     		
} // ends getZodiacFromDate 


app.init = function() {

} // ends .init

// DOCUMENT READY 
$(function() {
	app.init();
	app.getData();
});