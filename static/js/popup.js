function signIn() {

    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        if(user){
            console.log(user)
            document.getElementById('signOut').disabled = false
            document.getElementById('signIn').disabled = true
        }
    });
}
function signOut () {
    fbApp.auth().signOut().then(function () {
        alert("You sign out")
        document.getElementById('signOut').disabled = true
        document.getElementById('signIn').disabled = false

    }).catch(function (error) {
        // An error happened.
        console.log(error)
    });
}
function waitForElement(){
    if(currentUser){
        console.log(currentUser)
        document.getElementById('signIn').disabled = true
        document.getElementById('signOut').disabled = false
    }
    else{
        setTimeout(waitForElement, 250);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('signIn').addEventListener('click', signIn);
    document.getElementById('signOut').addEventListener('click', signOut)
    document.getElementById('showWords').addEventListener('click', function(){
        chrome.tabs.create({url: chrome.extension.getURL('showWords.html')});
    })

    document.getElementById('signOut').disabled = true
    waitForElement()

});
  