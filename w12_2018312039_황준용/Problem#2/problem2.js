$(document).ready(function() {
  var count = 0;
  $(".canv").hide();

  $("#button1").click(function() {
    toggle_color();
  });

  $("#button2").click(function() {
    toggle_shape();
  });
  $("#button3").click(function() {
    if (count < 10) {
      count++;
      var ids = "#" + count;
      $(ids).removeClass("red");
      $(ids).removeClass("circ");

      $(ids).addClass("white");
      $(ids).addClass("rect");

      $(ids).show();
      if (count == 10) {
        $("#button3").css("opacity", "0.5");

        $("#isfull").html("Reached the limit");
      }
    }
  });
  $("#button4").click(function() {
    if (count > 0) {
      $("#isfull").html("");
      $("#button3").css("opacity", "1.0");

      var ids = "#" + count;
      $(ids).hide();
      count--;
    }
  });
  $("#button5").click(function() {
    $(".canv").hide();
    $("#button3").css("opacity", "1.0");
    count = 0;
    $("#isfull").html("");
  });
});

function toggle_color() {
  $(".canv").removeClass("changed");
  $(".canv").each(function() {
    if (!$(this).hasClass("changed")) {
      if ($(this).hasClass("white")) {
        $(this).removeClass("white");
        $(this).addClass("red");
        $(this).addClass("changed");
      } else if ($(this).hasClass("red")) {
        $(this).removeClass("red");
        $(this).addClass("white");
        $(this).addClass("changed");
      }
    }
  });
}

function toggle_shape() {
  $(".canv").removeClass("changed2");
  $(".canv").each(function() {
    if (!$(this).hasClass("changed2")) {
      if ($(this).hasClass("rect")) {
        $(this).removeClass("rect");
        $(this).addClass("circ");
        $(this).addClass("changed2");
      } else if ($(this).hasClass("circ")) {
        $(this).removeClass("circ");
        $(this).addClass("rect");
        $(this).addClass("changed2");
      }
    }
  });
}
