var firebaseConfig = {
    apiKey: "AIzaSyBPsI7zqR6S7swTlA_4OHv2KoOOq6QjkPk",
    authDomain: "kwitter-dfb95.firebaseapp.com",
    databaseURL: "https://kwitter-dfb95-default-rtdb.firebaseio.com",
    projectId: "kwitter-dfb95",
    storageBucket: "kwitter-dfb95.appspot.com",
    messagingSenderId: "988595751229",
    appId: "1:988595751229:web:9fcfd57b404f1cdc591d54"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("User Name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !!";
//ADD YOUR FIREBASE LINKS HERE


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name is - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;  
      //End code
      });});}
getData();

function addroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("Room_Name", room_name);
      window.location = "kwitter_page.html";
}

function redirect(name) {
      console.log(name);
      localStorage.setItem("Room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("User Name");
      localStorage.removeItem("Room_name");
      window.location = "index.html";
}
