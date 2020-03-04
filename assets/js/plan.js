// plan.html
function addPlan(){
	var url = "/quality-cat/plan-new.html";
	window.location.assign(url);
}

// plan-new.html
function savePlan1(){
	// TODO: add check required column
	var url = "/quality-cat/plan-query.html";
	window.location.assign(url);	
}

// plan-query.html
function savePlan2(){
	var url = "/quality-cat/plan-preview.html";
	window.location.assign(url);
}

// plan-new.html
function returnPlan(){
	var url = "/quality-cat/plan.html";
	window.location.assign(url);
}

// plan-new.html search others function
$(document).ready(function(){
  $("#plan-purpose-others").click(function(){
			if($("#plan-purpose-others-input").css("display")=="none"){
				$("#plan-purpose-others-input").show();
			}else{
				$("#plan-purpose-others-input").hide();
			}
		});
});

// plan-query.html


// Slect tag and display in query area
$('#save-tag').click(function() {

	var val = [];
	$(':checkbox:checked').each(function(i){
      val[i] = $(this).val();
    });
    
    // display in the textarea field
    document.getElementById('tag-input-field').value = val;

	// Make it unchecked, otherwise the value will display when selecting project area
	$(':checkbox:checked').each(function(x){
		$(this).prop('checked', false);
		});

});

// Select project and display in qurey area
$('#save-project').click(function(){

	var project_select = [];
	$(':checkbox:checked').each(function(x){
		project_select[x] = $(this).val();
		console.log(project_select[x]);
		});
	
	// display in the textarea field
	document.getElementById('project').value = project_select;

    // Make it unchecked, otherwise the value will display when selecting tag area
	$(':checkbox:checked').each(function(x){
		$(this).prop('checked', false);
		});	
	
});



// Select project and display in qurey area
// $(document).ready(function(){
// 	$('#save-project').click(function(){
// 		var project_select = [];

// 		$(':checkbox:checked').each(function(x){
// 			project_select[x] = $(this).val();
// 			console.log(project_select[x]);
// 		});

// 		console.log(project_select);
// 		document.getElementById('project').value = project_select;
// 	});


// });


// plan-query.html
// Hover on the tag area to show more
// $(document).ready(function(){
//     $( "#tag-hover" ).hover(function() {
//            $('#tag-hover-modal').modal({
//         show: true
//     });
//   });  
// });