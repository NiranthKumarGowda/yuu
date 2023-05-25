var firebaseConfig = {
    apiKey: "AIzaSyChggcigxfexAhDPYFQKRNayRezrchn9i0",
    authDomain: "kwitter-app-a52db.firebaseapp.com",
    databaseURL: "https://kwitter-app-a52db-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-a52db",
    storageBucket: "kwitter-app-a52db.appspot.com",
    messagingSenderId: "857374574720",
    appId: "1:857374574720:web:c36e631ad4df92d19efe65",
    measurementId: "G-KFCWPR2DE9"
  };

  // Initialize Firebase
   firebase.initializeApp(firebaseConfig)
   var username=localStorage.getItem("username")
   var room_name=localStorage.getItem("room_name")
   var message
   function send(){
   message=document.getElementById("message").value 
   firebase.database().ref(room_name).push({
    name:username,message:message,like:0
   })
   document.getElementById("message").innerHTML=""
   }
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
name=message_data['name']
message=message_data['message']
like=message_data['like']
var namewithtag="<h4>"+name+"<img src='tick.png' class='user_tick'></h4>"
var messagewithtag="<h4 class='message_h4'>"+message+"</h4>"
likebutton="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>"
var spanwithtag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>"
row=namewithtag+messagewithtag+likebutton+spanwithtag
document.getElementById("output").innerHTML+=row
//End code
 } });  }); }
getData();