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
user_name = localStorage.getItem("user_name");

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding Room Name",
      });
      localStorage.setItem("room_name", room_name);
      window.location = "Kwitter_page.html";
}
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room name" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", room_name);
      window.location = "Kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}