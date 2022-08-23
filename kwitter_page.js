//YOUR FIREBASE LINKS
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
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0,
      });

      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}