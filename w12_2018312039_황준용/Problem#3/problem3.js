$(document).ready(function() {
  $("#name").focus(function() {
    $(this).css("background-color", "#cccccc");
  });
  $("#name").blur(function() {
    $(this).css("background-color", "#ffffff");
  });
  $(function() {
    $("#datepicker").datepicker();
  });
  $(function() {
    $("#selectable").selectable();
  });
  $(function() {
    $("#animal").tooltip();
  });
  $(function() {
    $("#sortable, #sortable2")
      .sortable({
        connectWith: ".connectedSortable"
      })
      .disableSelection();
  });
  $(function() {
    $(".color").tooltip({
      items: "li[id]",
      content: function() {
        var element = $(this).attr("id");
        return "<div class='box' style='background-color: " + element + "'>";
      }
    });
  });
  $("#submit").click(function() {
    $("#one").html("Name: " + $("#name").val());
    $("#two").html("Date: " + $("#datepicker").val());
    var animal = "";

    $(".ui-selected", "#selectable").each(function() {
      var name = $(this).text();
      animal += name + " ";
    });
    $("#three").html(animal);
  });
});
