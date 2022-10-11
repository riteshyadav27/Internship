const firebaseConfig = {
    apiKey: "AIzaSyCT7kAdz7EmkY_vwm8W-M_cMCcSq3TuGWQ",
    authDomain: "contactform-c9739.firebaseapp.com",
    databaseURL: "https://contactform-c9739-default-rtdb.firebaseio.com",
    projectId: "contactform-c9739",
    storageBucket: "contactform-c9739.appspot.com",
    messagingSenderId: "489100742645",
    appId: "1:489100742645:web:ebec6f8a0e97b465d8dabc",
    measurementId: "G-M6MXH67JWQ"
  };
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
// reference for database 
var contactFormDB = firebase.database().ref('contactForm');

document.getElementById("contactForm").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();

    var name= getElementVal("name");
    var email= getElementVal("email");
    var message= getElementVal("message");

    console.log(name,email,message);

}

const getElementVal = (id) =>{
    return document.getElementById(id).value;
}