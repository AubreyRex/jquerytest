
function printName(someText){
	alert(someText);
}
printName()
alert ('what up');
//This part above is JAva not JQuery
$(document).ready(function(){
	alert('Help there coming')


	$(document).click( //the on click this is telling it when the document gets clicked
  function(){
  	$('h1').fadeOut(4900)
//it's going to fade out over time in milliseconds
	$('h2').fadeOut(5000)
	$('h3').animate({
        opacity: '0.5',
        height: '2px',
        width: '150px'
    });
	
	$('h4').animate({color: "red", 	marginLeft: '32px'

})
	
	$('h5').animate({	paddingTop: '84px', textHeight: '43px'
	});
	$('h6').animate({	fontSize: '100px'
	});


	});
});

$(document).ready(function(){
	alert('nevermind')
	$('body').css({color: "gold"

})
})
$(document).click( //the on click this is telling it when the document gets clicked
  function(){
  	$('a').fadeOut(1900)
  	$('p').animate({textIndent: '100px'
	});
	$('nav').fadeOut(3000)
	$('body').css({"background-color": "red"})

  	});


