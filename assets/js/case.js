console.log('test');


//Monitor if click save button or not
$( "#save-project" ).click(function() {
	//Get selected items' value
	var val_project = [];
	$('input:checked').each(function(i){
      val_project[i] = $(this).val();
    });

	$("#project").val(val_project); //Change the value in the input field
	$(".close").click(); //close the modal window
});


$( "#save-tag" ).click(function() {
	//Get selected items' value
	var val_tag = [];
	$('input:checked').each(function(i){
      val_tag[i] = $(this).val();
    });

	$("#tag1").val(val_tag); //Change the value in the input field
	$(".close-tag").click(); //close the modal window
});

//Add steps
//click + button
$("#toggle-step").click(function(){
	$(this).css('background','red');

	//get step id number
	var step_id =[];
	$('.step-id').each(function(i){
		step_id[i] = $(this).val();
	});

	console.log(step_id[1]);


	console.log(step_id);
	//append new row for adding step

});


$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
