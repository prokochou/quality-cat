$(document).ready(function(){
  // $("button").click(function(){
  //   $("#plan-purpose-others-input").fadeIn("slow");
  // });

  $("#plan-purpose-others").click(function(){
			if($("#plan-purpose-others-input").css("display")=="none"){
				$("#plan-purpose-others-input").show();
			}else{
				$("#plan-purpose-others-input").hide();
			}
		});
});