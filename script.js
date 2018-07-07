var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var output = document.getElementById("output");
var body = document.getElementById("content");
//console.log(output);

function setColor() {
body.style.background =
 "linear-gradient(to right," 
 + color1.value + "," 
 + color2.value + ")";

 output.innerHTML = body.style.background;
}



color1.addEventListener("input", setColor);

color2.addEventListener("input", setColor);

