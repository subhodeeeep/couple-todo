function addTask(event) {
    event.preventDefault();
    const todoInput = document.getElementById("todoInput").value.trim();
    if (todoInput) {
        let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        tasks.push(todoInput);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    window.location.hash = "#main";
}

function renderTasks() {
    if(window.location.hash == '#main'){
        fetch('pages/main.html')
        .then(response => response.text())
        .then(html => {
                document.getElementById('app').innerHTML = html;
                const list = document.getElementById("to-do-list");
                
                if (!list) return;
                
                let tasks = JSON.parse(localStorage.getItem("tasks")) || ["Task 2", "Task 3"];
                list.innerHTML = ""; // clear previous
            
                tasks.forEach((task, i) => {
                    const li = document.createElement("li");
                    li.className = "to-do-box";
                    li.innerHTML = `
                        <p>${task}</p>
                        <div class="clickables">
                            <svg onclick="alert('feature in progress..')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M213.1 128.8L202.7 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L437.3 160L426.9 128.8C420.4 109.2 402.1 96 381.4 96L258.6 96C237.9 96 219.6 109.2 213.1 128.8zM320 256C373 256 416 299 416 352C416 405 373 448 320 448C267 448 224 405 224 352C224 299 267 256 320 256z"/></svg>

                            <svg onclick="deleteTask(${i})" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/>
                            </svg>
                        </div>
                    `;
                    list.appendChild(li);
                });
    })
        
    }
}

// Delete task
function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}


window.addEventListener("hashchange", () => {
    if (location.hash === "#main") renderTasks();
})

window.addEventListener("load", () => {
    if (!location.hash) location.hash = "#main"; // default page
    if (location.hash === "#main") renderTasks();
});

