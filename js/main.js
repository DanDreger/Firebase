//create firebase app at https://firebase.google.com/
//get boilerplate config by clicking
//'Add Firebase to your web app'
//from the home page on your app


//must modify rules to read: true, write: true
//but you may want to adjust for only authorized users

var btn  = document.getElementById('btn');

btn.addEventListener('click', saveData, false);

var btnTwo = document.getElementById('btnTwo');

btnTwo.addEventListener('click', getData, false);


//save data
function saveData(){

//get user data
var pass = document.getElementById('pass').value;
var user = document.getElementById('userName').value;

  firebase.database().ref('/users/').push(
    {
      name: user,
      password: pass
    }
  )

  document.getElementById('pass').value = "";
  document.getElementById('userName').value = "";
}


//retrieve data
function getData(){
	firebase.database().ref('/users/').on('child_added', function(snapshot){
		console.log(snapshot.val());
	})
}