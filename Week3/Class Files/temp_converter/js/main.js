
var tempC = prompt("Please input temperature in Celcius");

var tempF = tempC * (9/5) + 32;

console.log(tempF)

var tempT = 45;

if (tempT > tempF) {
	document.body.setAttribute("style", "background-color:yellow;");
}
else {
	document.body.setAttribute("style", "background-color:gray;");
}

document.getElementById('heading1').innerHTML =" " + tempF + "º"; 

document.getElementById('heading2').innerHTML = "threshold = " + tempT + "º"; 