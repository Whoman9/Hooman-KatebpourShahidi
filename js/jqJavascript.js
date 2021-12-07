$(document).ready(function(){
	//load event

	$("p").click(function(){
		$(this).hide();
	});
	$('#btn_test').click(function(){
		$('p').show();
		$('p').addClass("hooman");
		$('p').removeClass("hooman");
		$('p').css("color","blue");
	});


});


//$('#armin').html="salam"; //for id
//$('.hooman').val = "bye" // for class name
//$('p').hide();//for element