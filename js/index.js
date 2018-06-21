
var cel, fah;

// Convert to Celsius
function toCelsius(fahrenheit) {
     cel.value = (5/9) * (fahrenheit-32);
	 fah.value = "";
	 
	 if(cel.value < 0){
		 document.getElementById("picture").src = "img/snowman.png";
	 }
	 else {
		 document.getElementById("picture").src = "img/sun.gif";
	 }
}

// Convert to Fahrenheit
function toFahrenheit(celcius) {
	fah.value = celcius * (9/5) + 32;
	cel.value = "";
	
	if(fah.value < 32){
		document.getElementById("picture").src = "img/snowman.png";
	}
	else {
		 document.getElementById("picture").src = "img/sun.gif";
	}
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