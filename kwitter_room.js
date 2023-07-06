var firebaseConfig = {
      apiKey: "AIzaSyCZLwvCRkOkho3SeY70ANT52k1vi0yb-fI",
      authDomain: "kwitter-c7518.firebaseapp.com",
      databaseURL: "https://kwitter-c7518-default-rtdb.firebaseio.com",
      projectId: "kwitter-c7518",
      storageBucket: "kwitter-c7518.appspot.com",
      messagingSenderId: "729165221235",
      appId: "1:729165221235:web:188804c552e2470c1b8906"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
  username=localStorage.getItem("username")
  document.getElementById("user_name").innerHTML="welcome "+username


  function addRoom(){
  roomname=document.getElementById("text2").value
  firebase.database().ref("/").child(roomname).update({
  purpose:"roomname"
  
  })
  localStorage.setItem("roomname",roomname)
  window.location="kwitter_page.html"
  }
  
  
  


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+"onclick='redirecttoroom(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=row

      //End code

      });});}
getData();

function redirecttoroom(name){
console.log
localStorage.setItem("roomname",name)
window.location="kwitter_page.html"
}