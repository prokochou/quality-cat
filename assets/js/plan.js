function returnPlan(){
	alert(window.location.pathname);
	url = window.location.pathname;
	// window.location.pathname = 'quality-cat/plan.html'
}

$(document).ready(function(){
  $("#plan-purpose-others").click(function(){
			if($("#plan-purpose-others-input").css("display")=="none"){
				$("#plan-purpose-others-input").show();
			}else{
				$("#plan-purpose-others-input").hide();
			}
		});
});