
$(document).ready(function(){


	function init(){   
	   $(".titulo").mouseout( function() {
	  		$(".titulo").css( "color", "black" );
		});
	   $(".titulo").mouseenter( function() {
	  		$(".titulo").css( "color", "red" );
		});
	}

	function follower(){   
	   $(document).on('mousemove', function(e){
		    $('#seguidor').animate({
				    left: e.pageX,
				    top: e.pageY
				  }, {
				    duration: 0.005
				  });
		    $('#seguidor').text(" LEFT: "+ e.pageX+" TOP: "+e.pageY);
		});
	}

//DECLARACIONES

init();
follower();

});