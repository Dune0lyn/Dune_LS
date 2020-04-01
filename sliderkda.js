$(function(){
	$(".checkboxkda").each(function(elem){
		$(this).click(function(){
			var contain=$(this).parent().parent().parent();
			if($(this).is(':checked')){
				console.log();
				$(contain).removeClass('pan_main').addClass('pan_main_kda');
			}else{
				$(contain).removeClass('pan_main_kda').addClass('pan_main');
			}
		}); 
	});	
});
