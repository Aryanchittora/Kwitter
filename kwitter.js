function adduser() {
    var user_name = document.getElementById("user").value;
    localStorage.setItem("User Name", user_name);
    window.location = "kwitter_room.html";
}