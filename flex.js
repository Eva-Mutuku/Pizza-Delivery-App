$(document).ready(function() {
  $("select").click(function() {
    var option = $(":selected").val();
    if (option === "Veggie") {
      $(".meat-opt").hide();
      $(".veggie-opt").show();
      $(".custom-opt").hide();
    } else if (option === "Custom") {
      $(".meat-opt").hide();
      $(".veggie-opt").hide();
      $(".custom-opt").show();
    } else {
      $(".meat-opt").show();
      $(".veggie-opt").hide();
      $(".custom-opt").hide();
    }
  });
});
