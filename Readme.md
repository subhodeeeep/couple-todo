here are all codes of all pages

index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="style.css">
    <title>Couple Bucket List</title>
    <script type="module" src="https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js"></script>
    <script type="module" src="https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js"></script>
    <script type="module" src="https://www.gstatic.com/firebasejs/10.14.0/firebase-storage.js"></script>
    
</head>
<body>
    <section>
        <nav>
            <ul>
                <li>
                    <a href="/settings" onclick="route()">
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 640 640">
                            <path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="/" onclick="route()">love</a>
                </li>
                <li>
                    <a href="/demo1" onclick="route()">to-do</a>
                </li>
                <li>
                    <a href="/demo2" onclick="route()">done</a>
                </li>
                <li>
                    <a href="/demo1" onclick="route()">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                            <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/>
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
        <div  id="main-page"></div>
    </section>
   
    <script type="module" src="scripts/firebaseconfig.js"></script>   
    <!-- <script src="scripts/script.js"></script>    -->
    <script src="scripts/routes.js"></script>      
</body>
</html>

style.css

:root{
    --primary-bg: linear-gradient( #ffffff, #ffdddd);
    --primary-button: #8c2f39;
    --primary-grey: #d9d9d9;
    --secondary-grey: #2c2c2c
}
@font-face {
  font-family: inter;
  src: url('./fonts/Inter.ttf');
}
*{
    margin: 0;
    padding: 0;
    scrollbar-width: none;
    font-family: inter;
}
a{
    text-decoration: inherit;
    color: inherit;
}
button{
    text-decoration: inherit;
    background-color: inherit;
    border: inherit;
}
section{
    background-image: var(--primary-bg);
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    overflow-y: scroll;
}
nav{
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 100;
}
nav ul{
    display: flex;
    justify-content: space-around;
    padding: 40px 10px 20px 10px;
}
nav svg{
    height: 20px;
}
main{
    display: grid;
    justify-content: center;
    max-width: 100vw;
}
.subhosha{
    height: 200px;
    width: 300px;
    object-fit: cover;
    margin: 100px 0px 20px 0px;
    border-radius: 20px;
}
ul{
    list-style: none;
}
.to-do-box{
    height: 100px;
    width: 100%;
    background-color: var(--primary-button);
    border-radius: 20px;

}
.to-do-box p{
    padding: 24px 0px 12px 20px;
    color: #ffffff;
}
.to-do-box svg:first-child{
    height: 20px;
    fill: #ffffff;
}
.to-do-box svg:nth-child(2){
    height: 20px;
    fill: #cd5858;
}
.clickables{
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
}
.to-do-list{
    display: grid;
    margin-top: 12px;
    gap: 4px;
}

form{
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 14px;
    max-width: 70vw;
}
form button, form input{
    height: 65px;
    border-radius: 24px;
    font-size: medium;
}
form button{
    background-color: var(--secondary-grey);
    color:  rgb(232, 231, 231);
}
form input{
    background-color: var(--primary-grey);
    outline: none;
    border: none;
    color: var(--secondary-grey);
    padding-left: 24px;
}
form p{
    font-size: 24px;
    text-align: center;
}
.cross img{
    rotate: 45deg;
}

.done-p{
    line-height: 80vh;
    align-items: center;
    z-index: 0;
}

script.js

let todos = JSON.parse(localStorage.getItem("todolol")) || ["Make breakfast","Make Lunch", "Make Dinner"];

const todoList = document.getElementById("to-do-list")
const todoInput = document.getElementById("todoInput")

const newTodos = JSON.parse(localStorage.getItem("todolol"))
console.log(newTodos)
renderTodos()

function renderTodos(){
    todoList.innerHTML = "";

    todos.forEach((todoObject, index) => {
        const heading = todoObject;
        const html = `
            <li class="to-do-box">
                <p> ${heading}</p> 
                <div class="clickables" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M213.1 128.8L202.7 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L437.3 160L426.9 128.8C420.4 109.2 402.1 96 381.4 96L258.6 96C237.9 96 219.6 109.2 213.1 128.8zM320 256C373 256 416 299 416 352C416 405 373 448 320 448C267 448 224 405 224 352C224 299 267 256 320 256z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="delete-btn" data-index=${index}><path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/></svg>
                </div>
            </li>
        `;
        todoList.innerHTML += html;

    })
}
todoList.addEventListener('click', (e) => {
    if (e.target.closest('.delete-btn')) {
        const index = e.target.closest('.delete-btn').dataset.index;
        removeTask(Number(index));
    }
});


function addTask() {
    const task = todoInput.value.trim();
    if (!task) {
        alert("Please enter a valid task.");
        return;
    }

    todos.push(task);
    localStorage.setItem("todolol", JSON.stringify(todos));
    renderTodos();
    todoInput.value = ""; // Clear input
}

function removeTask(i) {
    todos.splice(i, 1);
    localStorage.setItem("todolol", JSON.stringify(todos)); // ADD THIS
    renderTodos();
}


route.js

const routes = {
    404: 'pages/404.html',
    '/': 'pages/main.html',
    '/add-task.html': 'pages/demo1.html',
    '/done.html': 'pages/demo2.html',
    '/settings.html': 'pages/demo1.html'
};

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const handleLocation = async () => {
    const path = window.location.pathname.replace(/^\/couple-todo/, '') || '/';
    const routePath = routes[path] || routes[404];
    const html = await fetch(routePath).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;

    // OPTIONAL: Trigger specific JS for that route after load
    if (path === '/add-task.html') {
        loadAddTaskScript();
    } else if (path === '/') {
        loadMainScript();
    }
};

// Optional dynamic loading of page logic
function loadAddTaskScript() {
    const script = document.createElement("script");
    script.src = "js/add-task.js";
    document.body.appendChild(script);
}

function loadMainScript() {
    const script = document.createElement("script");
    script.src = "js/main.js";
    document.body.appendChild(script);
}

window.onpopstate = handleLocation;
window.route = route;
handleLocation();


firebaseconfig.js

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


main.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="style.css">
    <title>Couple Bucket List</title>
    
</head>
<body>
    <main>
        <img src="images/subhosha.jpg" alt="us" class="subhosha">
        <ul class="to-do-list" id="to-do-list">
            <li class="to-do-box">
                <p> Task number 1</p> 
                <div class="clickables" >
                    <svg onclick="addTask()" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M213.1 128.8L202.7 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L437.3 160L426.9 128.8C420.4 109.2 402.1 96 381.4 96L258.6 96C237.9 96 219.6 109.2 213.1 128.8zM320 256C373 256 416 299 416 352C416 405 373 448 320 448C267 448 224 405 224 352C224 299 267 256 320 256z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/></svg>
                </div>
            </li>
        </ul>
    </main>
   
    <script type="module" src="firebaseconfig.js"></script>      
    <!-- <script src="script.js"></script>   -->
    <script type="text">
        document.addEventListener("DOMContentLoaded", () => {
            const todoList = document.getElementById("to-do-list");
            const todos = JSON.parse(localStorage.getItem("todolol")) || [];

            if (todos.length === 0) {
                todoList.innerHTML = "<li>No tasks yet!</li>";
                return;
            }

            todos.forEach((todo, index) => {
                const li = document.createElement("li");
                li.textContent = todo;
                todoList.appendChild(li);
            });
        });
</script>
    
</body>
</html>


add-task.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
        <main>
            <form action="">
                <p> something you'd do with subho</p>
                <input type="text" placeholder="Enter a task" id="todoInput">
                <button  onclick="addTask()" id="addTaskBtn">Add Task</button>
            </form>
        </main>
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            document.getElementById("addTaskBtn").addEventListener("click", () => {
                const input = document.getElementById("taskInput").value.trim();
                if (!input) {
                    alert("Enter a valid task!");
                    return;
                }

                const todos = JSON.parse(localStorage.getItem("todolol")) || [];
                todos.push(input);
                localStorage.setItem("todolol", JSON.stringify(todos));

                // Redirect to main page
                window.history.pushState({}, "", "/");
                window.route(); // trigger SPA route
            });
        });
    </script>

</body>
</html>