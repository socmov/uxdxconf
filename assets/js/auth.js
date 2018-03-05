firebase.auth().useDeviceLanguage();

(function($){
    $.fn.serializeObject = function(){

        var self = this,
            json = {},
            push_counters = {},
            patterns = {
                "validate": /^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,
                "key":      /[a-zA-Z0-9_]+|(?=\[\])/g,
                "push":     /^$/,
                "fixed":    /^\d+$/,
                "named":    /^[a-zA-Z0-9_]+$/
            };


        this.build = function(base, key, value){
            base[key] = value;
            return base;
        };

        this.push_counter = function(key){
            if(push_counters[key] === undefined){
                push_counters[key] = 0;
            }
            return push_counters[key]++;
        };

        $.each($(this).serializeArray(), function(){

            // skip invalid keys
            if(!patterns.validate.test(this.name)){
                return;
            }

            var k,
                keys = this.name.match(patterns.key),
                merge = this.value,
                reverse_key = this.name;

            while((k = keys.pop()) !== undefined){

                // adjust reverse_key
                reverse_key = reverse_key.replace(new RegExp("\\[" + k + "\\]$"), '');

                // push
                if(k.match(patterns.push)){
                    merge = self.build([], self.push_counter(reverse_key), merge);
                }

                // fixed
                else if(k.match(patterns.fixed)){
                    merge = self.build([], k, merge);
                }

                // named
                else if(k.match(patterns.named)){
                    merge = self.build({}, k, merge);
                }
            }

            json = $.extend(true, json, merge);
        });

        return json;
    };
})(jQuery);

// signInWithRedirect in case of page - depends on preference 
let loginWithSocial = (provider) => {
    return new Promise( (resolve, reject) => {
        firebase.auth().signInWithPopup(provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            resolve({ user, token });
        }).catch((error) => {
            reject({error});
        });
    })
}


let signOut = () => {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

$('#facebook').click( () => {

let facebook = new firebase.auth.FacebookAuthProvider();
facebook.setCustomParameters({
    'display': 'popup'
});

loginWithSocial(facebook); // returns a promise 

});

$('#google').click( () => {

let google = new firebase.auth.GoogleAuthProvider();
google.addScope('https://www.googleapis.com/auth/contacts.readonly');

loginWithSocial(google); // returns a promise

});


$('#signup').submit(function( event ) {
    let fields = $(this).serializeObject();
    firebase.auth().createUserWithEmailAndPassword(fields.email, fields.password)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error);
    });
    event.preventDefault();
});

$( "#login" ).submit(function( event ) {
    let fields = $(this).serializeObject();
    firebase.auth()
    .signInWithEmailAndPassword(fields.email, fields.password)
    .then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });
    event.preventDefault();
});


$('#update').submit(function(event){
    //Need to discuss this bit 
    // event.preventDefault();
    // firebase.auth().verifyPasswordResetCode(code).then(() => {
    //         return firebase.auth().confirmPasswordReset(code, password);
    //     })
    //     .then((success) => {
    //         // display message 
    //     })
    //     .catch((error) => {
    //         // error handler 
    //     });
})



$('#forgot').submit(function (event) {
    let fields = $(this).serializeObject();
    firebase.auth()
    .sendPasswordResetEmail(fields.email)
    .then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });
    event.preventDefault();
});