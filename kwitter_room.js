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
//ADD YOUR FIREBASE LINKS HERE
Username=localStorage.getItem("username")
document.getElementById("Welcome").innerHTML="Welcome "+Username
function addroom(){ 
    room_name=document.getElementById("Room_Name").value 
    localStorage.setItem("room_name",room_name)
    firebase.database().ref("/").child(room_name).update({
        purpose:"addingroom_name"
    })
    window.location="kwitter_page.html"
}





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
    row="<div class='room_name' id="+Room_names+" onclick='redirecttoroom_name(this.id)'>#"+Room_names+"</div><hr>"
    document.getElementById("output").innerHTML+=row
   //End code
   });});}
getData();
function redirecttoroom_name(name){
    window.location="kwitter_page.html"
    localStorage.setItem("room_name",name)
}
