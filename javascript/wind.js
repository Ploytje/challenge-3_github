


function wind() {

	// construct request
	// var code = ['th','uk'];
	// var city = document.getElementById("landen").value;
	// var request = 'https://fourtonfish.com/hellosalut/?cc='+ code[0];
	// var request = "http://weerlive.nl/api/json-data-10min.php?key=demo&locatie=" + city 

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = document.getElementById("landen").value;

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;

	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
	// render weather per day
	.then(function(response) {
		// console.log(response);
		
		
		
		var windSpeed = response.wind.speed;
		var temMin = Math.floor(response.main.temp_min - 273.15);
		var temMax = Math.floor(response.main.temp_max - 273.15);

		var speed = document.getElementById('windSpeed').innerHTML = "Wind speed: " + windSpeed;
		var temMin = document.getElementById('temMin').innerHTML = "Minimaal temperatuur:  " + temMin;
		var temMax = document.getElementById('temMax').innerHTML = "Maximaal temperatuur:  " + temMax;


	})
	
	// catch error
	.catch(function (error) {
		console.error('Request failed', error);
	});
}

// init data stream
wind();


