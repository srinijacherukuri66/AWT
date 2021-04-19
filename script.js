var firebaseConfig = {
    apiKey: "AIzaSyC_Uf_LQvJfX0V8RmnnSKcw2xhejjbCzf4",
    authDomain: "awtlab-df664.firebaseapp.com",
    databaseURL: "https://awtlab-df664-default-rtdb.firebaseio.com",
    projectId: "awtlab-df664",
    storageBucket: "awtlab-df664.appspot.com",
    messagingSenderId: "120297031058",
    appId: "1:120297031058:web:7c96e1d1dfec41d4cf2d4b",
    measurementId: "G-CWZ5DGBCRP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var db=firebase.database().ref().child("students")
  function insertData(){
      console.log("Inserting Data...");
        var name=document.getElementById("name").value
        var rollno=document.getElementById("rollno").value
        db.child(rollno).set({
            name:name,
            rollno:rollno
        })
        console.log("data inserted");
  }
  function deleteData(){
        var id=window.prompt("Enter rollno to be deleted");
        db.child(id).remove()
        console.log("Data Deleted");
  }
  function updateData(){
      var  id=document.getElementById("rollno").value;
      var newname=document.getElementById("name").value;
      db.child(id).update({name:newname})
      console.log("Data updated");
  }
  function loadData(){
      console.log("Reading Data");
      db.on("value",(snap)=>{
          snap.forEach((data)=>{
              console.log(data.val())
          })
      })
  }