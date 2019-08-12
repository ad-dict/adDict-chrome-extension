var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};
// Initialize Firebase
var fbApp = firebase.initializeApp(firebaseConfig); //general purpose firebase app used for other operations
var currentUser = fbApp.auth().currentUser; // signed in user
var wordsRef //reference for 'word' collection

fbApp.auth().onAuthStateChanged((user) => {
    if (user) {
        currentUser = user
        wordsRef = db.collection('words').where('uid', '==', currentUser.uid)
    } else {
    }
});