import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

  
const firebaseConfig = {
apiKey: "AIzaSyAAiQqKPGhB-4BtWIlyyLBvN-zVYPkwv8w",
authDomain: "couple-todo-69258.firebaseapp.com",
databaseURL: "https://couple-todo-69258-default-rtdb.firebaseio.com",
projectId: "couple-todo-69258",
storageBucket: "couple-todo-69258.firebasestorage.app",
messagingSenderId: "745767572553",
appId: "1:745767572553:web:f4ed91327663405bcf1b98"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const upload = () => {
    const taskName = document.getElementById('taskName').value
    const taskDesc = document.getElementById('taskDesc').value
    const taskImg = document.getElementById('taskImg').value
    alert(taskName + taskDesc + taskImg)
}

window.upload = upload;