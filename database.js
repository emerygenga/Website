const playerInput = $("#player_input");
const latestVote = $("#latest_vote");
const voteOnPlayer = $("#player_vote_button");
const playerOutput = $("#player_vote_output");

var firestore = firebase.firestore();
const databaseDocumentRef = firestore.doc("players/mostpopular");



function voteSuccess() {
  console.log("vote saved");
}

function generalErrorHandler(errer) {
    console.log("Got an error", error);
};

function submitFavoritePlayerVote() {
    console.log('submitting favorite player vote: ' + playerInput.val());
    databaseDocumentRef.set(
      {
          latestVote: playerInput.val()
      }
    ).then(voteSuccess).catch(generalErrorHandler);
}

function getFavoritePlayerVote(doc){
  if (doc && doc.exists){
    var myData = doc.data();
    playerOutput.html(myData.latestVote);
  }
}

voteOnPlayer.click(submitFavoritePlayerVote); 

function getLatestVote() {
  databaseDocumentRef.get().then(getFavoritePlayerVote).catch(generalErrorHandler);
}

latestVote.click(getLatestVote);

function getRealTimeUpdate() {
  databaseDocumentRef.onSnapshot()
}
