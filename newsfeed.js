function loadNewsJSONAsHTML(result) {
  var newsString = "";
  for (var i = 0; i < result.length; i++) {
    var nextResult = result[i];

    newsString += "<h2>" + nextResult['headline'] + "</h2>" + "<p>" + nextResult['body'] + "</p>";
  }

  $("#newsfeed_content").html(newsString);

}

function requestNewsFeed() {
  $.ajax({
    dataType: "json",
    url: "https://firebasestorage.googleapis.com/v0/b/advancedtopicscs.appspot.com/o/blogArticles.json?alt=media&token=478d06a6-d7e5-4cac-a92d-7670dea8de17",
    success : loadNewsJSONAsHTML,
  });
}

$("#JSON_button").click(function() {
  requestNewsFeed();
})
