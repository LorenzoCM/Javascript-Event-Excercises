window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

//the listener function here

var Button = document.querySelector("#theGreen");

Button.addEventListener("click", function() {
	alert("wuju");
});
