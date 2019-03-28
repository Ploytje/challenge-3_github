


function landing() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = document.getElementById("landen").value;

	var degC = Math.floor(response.main.temp - 273.15);
	
	if (degC == 'clear sky') {
		alert('mag landen')
	} else {
		alert('mag niet landen')
	}
}
landing();