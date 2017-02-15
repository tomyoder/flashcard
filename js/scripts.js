/*$(document).ready(function() {
  $(".clickable").click(function() {
    $("#definition-showing").toggle();
    $("#definition-hidden").toggle();
  });
});*/

$(document).ready(function() {
  $("#javascript").click(function() {
    $("#javascript-definition").toggle(1000, function() {
      $("#javascript-definition").addClass("outline");
    });
  });

  $("#operators").click(function(){
    $("#operators-definition").toggle(1000);
  });

  $("#variables").click(function(){
    $("#variables-definition").toggle(1000);
  });

  $("#variable-naming-conventions").click(function(){
    $("#variable-naming-conventions-definition").toggle(1000);
  });

  $("#functions").click(function(){
    $("#functions-definition").toggle(1000);
  });

  $("#methods").click(function(){
    $("#methods-definition").toggle(1000);
  });

  $("#arguements").click(function(){
    $("#arguements-definition").toggle(1000);
  });

  $("#parameters").click(function(){
    $("#parameters-definition").toggle(1000);
  });

  $("#return").click(function(){
    $("#return-definition").toggle(1000);
  });

  $("#chaining-methods").click(function(){
    $("#chaining-methods-definition").toggle(1000);
  });

  $("#strings").click(function(){
    $("#strings-definition").toggle(1000);
  });

  $("#booleans").click(function(){
    $("#booleans-definition").toggle(1000);
  });

  $("#undefined").click(function(){
    $("#undefined-definition").toggle(1000);
  });

  $("#nan").click(function(){
    $("#nan-definition").toggle(1000);
  });

  $("#escape").click(function(){
    $("#escape-definition").toggle(1000);
  });

  $("#alert").click(function(){
    $("#alert-definition").toggle(1000);
  });

  $("#comments").click(function(){
    $("#comments-definition").toggle(1000);
  });

  $("#jquery").click(function(){
    $("#jquery-definition").toggle(1000);
  });

  $("#attributes").click(function(){
    $("#attributes-definition").toggle(1000);
  });

}); //close doument ready function
