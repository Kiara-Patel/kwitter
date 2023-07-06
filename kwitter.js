function login_button(){
var username=document.getElementById("text1").value
localStorage.setItem("username",username)
window.location="kwitter_room.html"
}
