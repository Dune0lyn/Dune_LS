$(function(){
	console.log('testestest');
	$('#aquoicasert').click(function() {
	  if ($('#aquoicasert').hasClass('d_clicked')) {
            $('#aquoicasert').animate({backgroundColor:'#ff0000'} , 1000, function() { $('#aquoicasert').removeClass('d_clicked'); });
	  } else {
            $('#panneau_lat').animate({backgroundColor:'#0000FF'} , 1000, function() { $('#aquoicasert').addClass('d_clicked'); });
	  }  
	});
});
