
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase, ref, set, push, child, onValue } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk1WBSSC7TDHt-PscckKwPLsO-KpsWeuA",
  authDomain: "login-auth-a4895.firebaseapp.com",
  databaseURL: "https://login-auth-a4895-default-rtdb.firebaseio.com",
  projectId: "login-auth-a4895",
  storageBucket: "login-auth-a4895.appspot.com",
  messagingSenderId: "488435744810",
  appId: "1:488435744810:web:97f4cd598a461001e4c353"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// console.log(app);
const auth = getAuth();
const db = getDatabase();

document.getElementById("login").addEventListener("click", function () {
  var email = document.getElementById("email1").value;
  var mobNo = document.getElementById("mobNo1").value;
  localStorage.setItem('mob',mobNo);
  var password = document.getElementById("pwd1").value;
  
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      localStorage.setItem('user', JSON.stringify(user))
      console.log(user);

      alert(user.email + " Login successfully!!!");
      // login();
      window.location.href = "../HTML_Files/user_profile.html";
      showSession()
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });
});

function showSession() {
  console.log(localStorage.getItem("user"));

}



const provider = new GoogleAuthProvider(app);

loginbtn.addEventListener('click', (e) => {

  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      alert(user + 'Login Successfully')
      window.location.href = "/index.html";

      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

})




