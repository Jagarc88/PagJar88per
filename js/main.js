
$(document).ready(function(){


	function init(){   
	   $(".titulo").mouseout( function() {
	  		$(".titulo").css( "color", "black" );
		});
	   $(".titulo").mouseenter( function() {
	  		$(".titulo").css( "color", "red" );
		});
	}


//DECLARACIONES

init();

});