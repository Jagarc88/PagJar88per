
$(document).ready(function(){


	function init(){   
	   $(".titulo").on('mouseout', function() {
	  		$( this ).css( "color", "black" );
		});
	   $(".titulo").on('mouseover', function() {
	  		$( this ).css( "color", "red" );
		});


	}


//DECLARACIONES

init();

});