


function wind() {

	// construct request
	// var code = ['th','uk'];
	var city = document.getElementById("landen").value;
	// var request = 'https://fourtonfish.com/hellosalut/?cc='+ code[0];
	var request = "http://weerlive.nl/api/json-data-10min.php?key=demo&locatie=" + city 

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
		
		
		// var plek = response.liveweer[0].plaats;
		// var samenv = response.liveweer[0].samenv;
		var windk = response.liveweer[0].windk;
		var windkmh = response.liveweer[0].windkmh;
		var windr = response.liveweer[0].windr;


		// var plaats = document.getElementById('plaats').innerHTML = "Plaats " + plek;
		// var samenv = document.getElementById('samenv').innerHTML = samenv;
		var windk = document.getElementById('windKracht').innerHTML = "Windkracht: " + windk;
		var windkmh = document.getElementById('windKmh').innerHTML = "Wind kmh:  " + windkmh;
		var windr = document.getElementById('windR').innerHTML = "Windrichting:  " + windr;


	})
	
	// catch error
	.catch(function (error) {
		console.error('Request failed', error);
	});
}

// init data stream
wind();


