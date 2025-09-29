const routes = {
    404: '/pages/404.html',
    '/': '/pages/main.html',
    '/add-task.html':' /pages/add-task.html',
    '/done.html': '/pages/done.html',
    '/settings.html':'/pages/settings.html'
}
const route = (event)=>{
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({},"",event.target.href);
    handleLocation();
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data)=> data.text());
    document.getElementById("main-page").innerHTML = html;
}



window.onpopstate = handleLocation;
window.route = route;

handleLocation();

const upload = () => {
    alert("hiee")
}

const todos = ["Make breakfast","Make Lunch", "Make Dinner"]

const todoList = document.getElementById("to-do-list")
const todoInput = document.getElementById("todoInput")

const newTodos = JSON.parse(localStorage.getItem("todolol"))
console.log(newTodos)
renderTodos()

function renderTodos(){
    todoList.innerHTML = "";

    // newTodos.forEach((todoObject, index) => {
    //     const heading = todoObject;
    //     const html = `
    //         <li class="to-do-box">
    //             <p> ${heading}</p> 
    //             <div class="clickables" >
    //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M213.1 128.8L202.7 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L437.3 160L426.9 128.8C420.4 109.2 402.1 96 381.4 96L258.6 96C237.9 96 219.6 109.2 213.1 128.8zM320 256C373 256 416 299 416 352C416 405 373 448 320 448C267 448 224 405 224 352C224 299 267 256 320 256z"/></svg>
    //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" onclick="removeTask(${index})"><path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/></svg>
    //             </div>
    //         </li>
    //     `;
    //     todoList.innerHTML += html;

    // })
}


function addTask() {
    todos.push(todoInput.value)
    localStorage.setItem("todolol", "JSON.stringify(todos)")
    renderTodos()
    alert(todos)

}

function removeTask(i){
    todos.splice(i,1)
    renderTodos()
}

// newTodos.map((todo, index)=>{
//     var li = document.createElement("li")
//     li.setAttribute("class", "to-do-box")

//     var p = document.createElement("p")
//     p.appendChild(document.createTextNode(todo))

//     const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//     svg1.setAttribute("xmlns", "http://www.w3.org/2000/svg")
//     svg1.setAttribute("viewBox", "0 0 640 640")

//     const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
//     path1.setAttribute("d", "M213.1 128.8L202.7 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L437.3 160L426.9 128.8C420.4 109.2 402.1 96 381.4 96L258.6 96C237.9 96 219.6 109.2 213.1 128.8zM320 256C373 256 416 299 416 352C416 405 373 448 320 448C267 448 224 405 224 352C224 299 267 256 320 256z")
    
//     svg1.appendChild(path1)

//     const svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//     svg2.setAttribute("xmlns", "http://www.w3.org/2000/svg")
//     svg2.setAttribute("viewBox", "0 0 640 640")
//     svg2.setAttribute("onclick", `removeTask(${index})`)

//     const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
//     path2.setAttribute("d", "M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z")
    
//     svg2.appendChild(path2)

//     const div = document.createElement("div")
//     div.classList.add("clickables")
//     div.appendChild(svg1)
//     div.appendChild(svg2)

//     li.append(p)
//     li.append(div)

//     todoList.appendChild(li)
// })