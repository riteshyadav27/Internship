  
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
    import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

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
                window.location.href = "/index.html";
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


    




      