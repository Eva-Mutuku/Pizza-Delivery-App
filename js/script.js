$(document).ready(function() {
  $("select").click(function) {
    var option = $(":selected").val();
    if(option === "Meat") {
      $(".meat-options").show();
      $(".veggie-options").hide();
      $(".custom-option").hide();
    }else if(option === "Veggie") {
      $(".meat-options").hide();
      $(".veggie-options").show();
      $(".custom-option").hide();
    }else {
      $(".meat-options").hide();
      $(".veggie-options").hide();
      $(".custom-option").show();
    }

  }
})