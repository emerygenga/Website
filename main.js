function loadContent(content){
  $("#game_content").html (content);
}
function loadGame(){
  $("#game_content").html("");
  $.ajax({url: "game.html", success: loadContent});
}
$("#game_button").click(loadGame);

function loadJSONAsHTML(result){
  var mySting = "";
  for (var i = 0; i < result.length; i++)
  {
    var nextResult = result [i];
    myString += "<p>" + nextResult[i] + "</p>";
  }
}

function requestData(){
  $.ajax({
    dataType: "json",
    url: "https://firebasestorage.googleapis.com/v0/b/advancedtopicscs.appspot.com/o/blogArticles.json?alt=media&token=478d06a6-d7e5-4cac-a92d-7670dea8de17",
    success: loadJSONAsHTML
  })
}

function loadJson(contnt){
  $("#JSON_button").html (content);
}

function getContent(){
  
}

$("JSON_button").click(loadJSONAsHTML);
$("zombies").click(getContent)
