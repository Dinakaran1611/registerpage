
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCM055c6y5CZEen9JGSV1Ss-icsStdiDFU",
    authDomain: "myapp-a666c.firebaseapp.com",
    projectId: "myapp-a666c",
    storageBucket: "myapp-a666c.appspot.com",
    messagingSenderId: "996755535584",
    appId: "1:996755535584:web:e3a2f7254e65fe76b20285"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);

const submit= document.getElementById('id');
submit.addEventListener("click", function(event) {
    event.preventDefault();
    alert(5)

    const email = registerForm['email'].value;
    const password = registerForm['password'].value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            

            // Signed up 
            const user = userCredential.user;
            alert("account creating...")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("error occured")
            // ..
        });
});


