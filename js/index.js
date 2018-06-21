
var cel, fah;

// Convert to Celsius
function toCelsius(fahrenheit) {
     cel.value = (5/9) * (fahrenheit-32);
	 fah.value = "";
}

// Convert to Fahrenheit
function toFahrenheit(celcius) {
	fah.value = celcius * (9/5) + 32;
	cel.value = "";
}
  
function temp() {
	
	cel = document.getElementById("celsius");
	fah = document.getElementById("fahrenheit");
	
	//alert(cel.value);
	
	
	if(cel.value) {
		toFahrenheit(cel.value);
	}
	
	else if(fah.value) {
		toCelsius(fah.value);
	}
	
}