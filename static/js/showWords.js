let tbl = document.getElementById('wordTable')

waitForElement()

function waitForElement() {
    if (currentUser) {
        let query = wordsRef.where('uid', '==', currentUser.uid).get()
            .then(snapshot => {
                if (snapshot.empty) {
                    console.log('No matching documents.');
                    return;
                }
                snapshot.forEach((doc) => {
                    tr = tbl.insertRow();
                    td = tr.insertCell();
                    td.appendChild(document.createTextNode(doc.data().word));
                    td = tr.insertCell();
                    td.appendChild(document.createTextNode(doc.data().meaning));
                    td = tr.insertCell();
                    td.appendChild(document.createTextNode(doc.data().example));
                });
            })
            .catch(err => {
                console.log('Error getting documents', err);
            });
    }
    else {
        setTimeout(waitForElement, 250);
    }
}