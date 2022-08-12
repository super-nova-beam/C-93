
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCLgdRgjVBHUkuko1IcTKO27EKjmXdVKhA",
      authDomain: "kwitter-definetly-not-twitter.firebaseapp.com",
      databaseURL: "https://kwitter-definetly-not-twitter-default-rtdb.firebaseio.com",
      projectId: "kwitter-definetly-not-twitter",
      storageBucket: "kwitter-definetly-not-twitter.appspot.com",
      messagingSenderId: "544606793998",
      appId: "1:544606793998:web:be727490dcbabdda38a75f",
      measurementId: "G-YGLTSPN5Q5"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
