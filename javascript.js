$(document).ready(function() {
  $("#main").hide();
  $("#ic").hide();
  $("#students").hide();
  $("#form").hide();
  $("#aboutpage").hide();
  $("#timing").hide();
  $("#button1").click(function() {
    $(".bd").css("background-image", "url(http://i65.tinypic.com/2urq975.jpg)");
    $("#div1").fadeOut("fast");
    $("#main").fadeIn("slow");
  });
  $("#instructor").click(function() {
    $(".bd").css("background-image", "url(http://i66.tinypic.com/2yvpams.jpg)");
    $("#main").fadeOut("fast");
    $("#ic").fadeIn();
  });
  $("#enrolled").click(function() {
    $(".bd").css("background-image", "url(http://i66.tinypic.com/43j2f.jpg)");

    $("#main").fadeOut("fast");
    $("#students").fadeIn();
  });
  $("#feedback").click(function() {
    $(".bd").css("background-image", "url(http://i65.tinypic.com/2ym6fld.jpg)");
    $("#main").fadeOut("fast");
    $("#form").fadeIn();
  });
  $("#about").click(function() {
    $(".bd").css("background-image", "url(http://i68.tinypic.com/1zq7zm8.jpg)");
    $("#main").fadeOut("fast");
    $("#aboutpage").fadeIn();
  });
  $("#timings").click(function() {
    $(".bd").css("background-image", "url(http://i66.tinypic.com/2cqikie.jpg)");
    $("#main").fadeOut("fast");
    $("#timing").fadeIn();
  });

  $("#back").click(function() {
    $(".bd").css("background-image", "url(http://i65.tinypic.com/2urq975.jpg)");
    $("#main").fadeIn("slow");

    $("#ic").hide();
    $("#students").hide();
    $("#form").hide();
  });
  $("#back1").click(function() {
    $(".bd").css("background-image", "url(http://i65.tinypic.com/2urq975.jpg)");
    $("#main").fadeIn("slow");

    $("#ic").hide();
    $("#students").hide();
    $("#form").hide();
  });
  $("#back2").click(function() {
    $(".bd").css("background-image", "url(http://i65.tinypic.com/2urq975.jpg)");
    $("#main").fadeIn("slow");

    $("#ic").hide();
    $("#students").hide();
    $("#form").hide();
  });
  $("#back4").click(function() {
    $(".bd").css("background-image", "url(http://i65.tinypic.com/2urq975.jpg)");
    $("#main").fadeIn("slow");

    $("#aboutpage").hide();
    
  });
  $("#back3").click(function() {
    $(".bd").css("background-image", "url(http://i65.tinypic.com/2urq975.jpg)");
    $("#main").fadeIn("slow");

    $("#ic").hide();
    $("#students").hide();
    $("#form").hide();
    $("#timing").hide();
  });
});

var request;
$("#gform").submit(function(event) {
  if (request) {
    request.abort();
  }

  var $form = $(this);

  var $inputs = $form.find("input, select, button, textarea");

  var serializedData = $form.serialize();
  $inputs.prop("disabled", true);
  request = $.ajax({
    url:
      "https://script.google.com/macros/s/AKfycbwraRqmX_uTTR59-UyVYEAxyVUelqohFJmcwykqEMFlO_dtBa8/exec",
    type: "post",
    data: serializedData
  });

  request.always(function() {
    // Reenable the inputs
    $inputs.prop("disabled", false);
  });
  event.preventDefault();
});
