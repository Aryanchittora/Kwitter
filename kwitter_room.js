var firebaseConfig = {
      apiKey: "AIzaSyBYdaoRAjIy0mNCrvKEeysGci5VN8C3j0Q",
      authDomain: "kwitter-621d2.firebaseapp.com",
      databaseURL: "https://kwitter-621d2-default-rtdb.firebaseio.com",
      projectId: "kwitter-621d2",
      storageBucket: "kwitter-621d2.appspot.com",
      messagingSenderId: "218986370547",
      appId: "1:218986370547:web:ec04dd0ce29445b95d6e86"
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