firebase.auth().useDeviceLanguage();

let google = new firebase.auth.GoogleAuthProvider();
google.addScope('https://www.googleapis.com/auth/contacts.readonly');

let facebook = new firebase.auth.FacebookAuthProvider();
facebook.setCustomParameters({
    'display': 'popup'
});

// signInWithRedirect in case of page - depends on preference 
let loginWithSocial = firebase.auth().signInWithPopup(provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
}).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
});


let signup = (email, password) => {
    // validation if needed
    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}

let loginWithEmail = (email, password) => {
    // validation needed
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}

let signOut = () => {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

let forgotPasswordReset = () => {
    firebase.auth().sendPasswordResetEmail(email).then(() => {

    }).catch((error) {
        if (error.message) {
            // logic to handle password
        }
    });
}

let updatePassword = (code, password) => {
    firebase.auth().verifyPasswordResetCode(code).then(() => {
            return firebase.auth().confirmPasswordReset(code, password);
        })
        .then((success) => {
            // display message 
        })
        .catch((error) => {
            // error handler 
        });
}