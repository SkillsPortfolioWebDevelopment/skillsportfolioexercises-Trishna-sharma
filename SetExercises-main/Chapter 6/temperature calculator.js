function convertToCe() {
	var fahrenheit = document.getElementById("fahrenheit").value;
	if (fahrenheit != "") {
		var number = parseFloat(fahrenheit);
		document.getElementById("celsius").value = (number - 32) / 1.8 + "\xB0C";
	} else {
		
	}
}



function convertTokel() {
	var fahrenheit = document.getElementById("fahrenheit").value;
	if (fahrenheit != "") {
		var number = parseFloat(fahrenheit);
		document.getElementById("kelvin").value = (number - 32) / 1.8 + 273.15+ "K";
	} else {
		;
	}
}


function reset() {
	location.reload();
}
