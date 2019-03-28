


function wegen() {


	
	// var request = 'https://fourtonfish.com/hellosalut/?cc='+ code[0];
	var request = "https://www.anwb.nl/feeds/gethf" 

	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
	// render weather per day
	.then(function(response) {
		var table = document.getElementById('tableWeg');
		var tableString = "<tr><th>Road</th><th>Omschrijving</th></tr>";
		// console.log(response);
		for (var i = 0; i < response.roadEntries.length; i++) {
				if(response.roadEntries[i].events.trafficJams.length == 0) {
					tableString = tableString + '<tr class="no-jam"><td id="wegTwee">' + response.roadEntries[i].road + '</td><td class="cell-b">There are no traffic jams</td></tr>';
				} else {
					tableString = tableString + '<tr class="jam"><td id="wegTwee">' + response.roadEntries[i].road + '</td><td class="cell-a">' + response.roadEntries[i].events.trafficJams[0].description + '</td></tr>';
				} 


			

		}
		table.innerHTML = tableString;

		

	})
	

	// catch error
	.catch(function (error) {
		console.error('Request failed', error);
	});
}

// init data stream
wegen();


