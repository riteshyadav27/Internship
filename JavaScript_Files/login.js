  
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
    import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyBNnBPvXtHrQY_QzrWXLU_7kk-i7AF6fG0",
        authDomain: "feynmaninnovations-dfbe0.firebaseapp.com",
        databaseURL: "https://feynmaninnovations-dfbe0-default-rtdb.firebaseio.com",
        projectId: "feynmaninnovations-dfbe0",
        storageBucket: "feynmaninnovations-dfbe0.appspot.com",
        messagingSenderId: "120656031568",
        appId: "1:120656031568:web:e4e1215a99c31ff5d1c655"
      };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // console.log(app);r
    const auth = getAuth();

    document.getElementById("login").addEventListener("click", function () {
        var email = document.getElementById("email1").value;
        var password = document.getElementById("pwd1").value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                
                localStorage.setItem('user', JSON.stringify(user))
                console.log(user);
                alert(user.email + " Login successfully!!!");
                // login();
                window.location.href = "./user_profile.html";
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

    function showSession(){
        console.log(localStorage.getItem("user"));
    }


    




      