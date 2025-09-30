import { db } from './firebaseconfig.js';
import {
  doc,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
  initializeFirestore, enableIndexedDbPersistence
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

enableIndexedDbPersistence(db).catch((err) => {
  if (err.code == 'failed-precondition') {
    // Multiple tabs open, persistence can only be enabled in one tab at a time.
    console.warn('Persistence failed');
  } else if (err.code == 'unimplemented') {
    // Browser does not support all features required to enable persistence
    console.warn('Persistence is not available');
  }
});


const tasksCol = collection(db, "tasks");


onSnapshot(tasksCol, (snapshot) => {
  const tasks = [];
  snapshot.forEach(doc => {
    tasks.push({ id: doc.id, ...doc.data() });
  });
  renderTasks(tasks); // re-render your list with latest tasks
});



async function addTask(event) {
    event.preventDefault();
    
    const inputEl = document.getElementById("todoInput");
    const taskText = inputEl.value.trim();

    if (taskText) {
        try {
            await addDoc(collection(db, "tasks"), {
                text: taskText,
            });
            inputEl.value = ''; // Clear the input field
        } catch (e) {
            console.error("Error adding task: ", e);
        }
    }

    window.location.hash = "#main";
}

async function renderTasks() {
    if (window.location.hash === '#main') {
        const response = await fetch('pages/main.html');
        const html = await response.text();
        document.getElementById('app').innerHTML = html;

        const list = document.getElementById("to-do-list");
        if (!list) return;

        
        const tasksCol = collection(db, "tasks");
        onSnapshot(tasksCol, (snapshot) => {
            list.innerHTML = ''; // Clear old tasks
            snapshot.forEach((doc, i) => {
                const task = doc.data();
                const li = document.createElement("li");
                li.className = "to-do-box";
                li.innerHTML = `
                    <p>${task.text}</p>
                    <div class="clickables">
                        <svg onclick="alert('feature in progress..')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M213.1 128.8L202.7 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L437.3 160L426.9 128.8C420.4 109.2 402.1 96 381.4 96L258.6 96C237.9 96 219.6 109.2 213.1 128.8zM320 256C373 256 416 299 416 352C416 405 373 448 320 448C267 448 224 405 224 352C224 299 267 256 320 256z"/></svg>
                        <svg onclick="deleteTask('${doc.id}')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6l-2 14H7L5 6"></path>
                            <path d="M10 11v6"></path>
                            <path d="M14 11v6"></path>
                            <path d="M9 6V4h6v2"></path>
                        </svg>
                    </div>
                `;
                list.appendChild(li);
            });
        }, (e) => {
            console.error("Error fetching tasks: ", e);
        });
    }
}


// Delete task
async function deleteTask(taskId) {
    try {
        await deleteDoc(doc(db, "tasks", taskId));
        renderTasks(); // Reload tasks after delete
    } catch (e) {
        console.error("Error deleting task: ", e);
    }
}

window.addEventListener("hashchange", () => {
    if (location.hash === "#main") renderTasks();
})

window.addEventListener("load", () => {
    if (!location.hash) location.hash = "#main"; // default page
    if (location.hash === "#main") renderTasks();
});

window.addTask = addTask;
window.deleteTask = deleteTask;

