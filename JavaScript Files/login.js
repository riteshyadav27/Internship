    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyA7bRbuFSYZS_egfZvJOpbYsVqrQz6iFOc",
        authDomain: "login-auth-a3a54.firebaseapp.com",
        projectId: "login-auth-a3a54",
        storageBucket: "login-auth-a3a54.appspot.com",
        messagingSenderId: "679348873988",
        appId: "1:679348873988:web:770b843f61de608e8a7e51",
        measurementId: "G-9QD24HZ215"
      };
    
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);

      const auth = firebase.auth();
      const database = firebase.database();
      
      document.getElementById('btn').onclick=register()


      function register(){
        console.log("hello")
        email = document.getElementById('email').value
        password = document.getElementById('pwd').value 

      }
      
      if (validate_email(email)==false || validate_password(password)==false) {
        alert('Email or password is outta line !!')
        return 
      }

      auth.createUserWithEmailAndPassword(email,password).then(function(){
        var user = auth.currentUser

        var database_ref = database.ref()

        var user_data={
            email:email,
            password:password,
            last_login : Date.now()
        }

        database_ref.child('user/'+user.uid).set(user_data)



        alert('User Created!!')
      })
      .catch(function(error){
        var error_code = error.code
        var error_message = error.message

        alert(error_message)
      })

      

      function validate_email(email){
         expression = /^[^@]+@\w+(\.\w+)+\w$/

         if (expression.test(email)==true) {
            return true;
         }
         else
            return false;
      }

      function validate_password(password) {
            if(password<6)
            return false;
            else
            return true;
      }