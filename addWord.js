window.onload = function(){
  const params = new URLSearchParams(document.location.search);
  const word = params.get("word")
  document.getElementById("word").value = word;
}

function saveWord(){
  let registry = {
    word: document.getElementById('word').value,
    meaning: document.getElementById('meaning').value,
    example: document.getElementById('exampleSentence').value
  }
  alert(JSON.stringify(registry))
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('submit').addEventListener('click', saveWord);
});