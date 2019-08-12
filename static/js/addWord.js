window.onload = function () {
  const params = new URLSearchParams(document.location.search);
  const word = params.get("word")
  document.getElementById("word").value = word;


  waitForElement()

}

function waitForElement() {
  if (currentUser) {
    let query = wordsRef.where('word', '==', document.getElementById('word').value.toUpperCase()).get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }
        document.getElementById('meaning').value = snapshot.docs[0].data().meaning
        document.getElementById('exampleSentence').value = snapshot.docs[0].data().example
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
  }
  else {
    setTimeout(waitForElement, 250);
  }
}

function saveWord() {
  let registry = {
    uid: currentUser.uid,
    word: document.getElementById('word').value.toUpperCase(),
    meaning: document.getElementById('meaning').value,
    example: document.getElementById('exampleSentence').value
  }


  db.collection("words").add(registry)
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      alert("Your word saved")
    })
    .catch(function (error) {
      alert("Error adding word: ", error);
    });
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('submit').addEventListener('click', saveWord);
});


