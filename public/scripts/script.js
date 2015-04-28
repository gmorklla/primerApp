$(function() {

	$('button').click(function(event) {
		var num = $(this).data("flight-num");
		$.post( "http://localhost:3000/flight/"+ num +"/arrived", { vuelo: num } );
		/*$.ajax({
			type: 'POST', // Use POST with X-HTTP-Method-Override or a straight PUT if appropriate.
			dataType: 'application/json', // Set datatype - affects Accept header
			url: "http://localhost:3000/flight/"+ num +"/arrived", // A valid URL
			headers: {"X-HTTP-Method-Override": "PUT"}, // X-HTTP-Method-Override set to PUT.
			data: '{name: "Dave"}' // Some data e.g. Valid JSON as a string
		});*/
	});
});
