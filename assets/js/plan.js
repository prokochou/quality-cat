// plan.html
function addPlan(){
	var url = "/quality-cat/plan-new.html";
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
// Hover on the tag area to show more
// $(document).ready(function(){
//     $( "#tag-hover" ).hover(function() {
//            $('#tag-hover-modal').modal({
//         show: true
//     });
//   });  
});