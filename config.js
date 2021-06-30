import firebase from 'firebase';

/*<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>*/
  //Your web app's Firebase configuration

  var firebaseConfig = {
    apiKey: "AIzaSyDe3hwHPqEyAcdyUCOwud6u5crHirC15iI",
    authDomain: "project-58-42e1f.firebaseapp.com",
    databaseURL: "https://project-58-42e1f-default-rtdb.firebaseio.com",
    projectId: "project-58-42e1f",
    storageBucket: "project-58-42e1f.appspot.com",
    messagingSenderId: "1093546688891",
    appId: "1:1093546688891:web:187e74cbb7e4d289077dde"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//</script>

export default firebase.database ();