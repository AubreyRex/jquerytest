main.js
function printName(someText){
	alert(someText);
}
printName()
alert ('hello');
//This part above is JAva not JQuery
$(document).ready(function(){
	alert('the document is read!')
	});




$(document).click( //the on click this is telling it when the document gets clicked
  function(){
  	$('h1').fadeOut(4900)
//it's going to fade out over time in milliseconds
$('h1').fadeIn()
$('h2').animate({
	opacity: 0.24,
	width: "70%"
}, 2000);
    alert('imclicked!');
  }
);