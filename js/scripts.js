$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name1").val();
    var favFoodSelect = $("select#food").val();
    var musicInput = $("input:radio[name=music]:checked").val();
    var dobInput = $("input#born").val();
    var colorInput = $("input#color").val();

    $(".name").text(nameInput);
    $(".food").text(favFoodSelect);
    $(".music").text(musicInput);
    $(".birthday").text(dobInput);
    $(".color").text(colorInput);

    $("#results").show();

    event.preventDefault();
  });
});
