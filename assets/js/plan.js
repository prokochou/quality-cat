function returnPlan(){
	var url = "/Users/proko/Documents/quality-cat/plan.html";
	window.location.assign(url);
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