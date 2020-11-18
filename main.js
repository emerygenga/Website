function loadContent(content){
  $("#game_content").html (content);
}
function loadGame(){
  $("game_content").html("");
  $.ajax({url: "game.html", success: loadContent});
}
$("#game_button").click(loadGame);
