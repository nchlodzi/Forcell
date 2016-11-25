(function ($, window, document, undefined) {

  'use strict';

  $(function () {
  });

	$('#switch2').click( function() { 
		$('#form2').css('display','block');
		$('#form1').css('display','none');
	});
	$('#switch1').click( function() { 
    	$('#form1').css('display','block');
    	$('#form2').css('display','none');
    });

   function map(){
    if($(window).width() > 982){
          $('.map').css('display', 'block');
          $('.map2').css('display', 'none');
      }else{
          $('.map').css('display', 'none');
          $('.map2').css('display', 'block');
      }

  }
map();
  
    function dane(){
      if($(window).width() < 545){
        $('.dane').html('Dane tele- <br /> adresowe');
      }else{
        $('.dane').html('Dane teleadresowe');
      }


    }
dane();
  
  function resize(){

    $(window).on('resize', function(){
      map();
      dane();
    });

  }
  
  resize(); 




})(jQuery, window, document);
