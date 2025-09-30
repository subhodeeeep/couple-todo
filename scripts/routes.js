const app = document.getElementById("app");

function loadPage(page) {
  fetch(page)
    .then(res => res.text())
    .then(html => {
      app.innerHTML = html;
      if (window.location.hash === '#add-task') {
        fetch('pages/add-task.html')
          .then(response => response.text())
          .then(html => {
            document.getElementById('app').innerHTML = html;
            document.getElementById("todoInput").focus();  // <-- focus input here
          });
      }
    })
    .catch(() => {
      app.innerHTML = "<h2>Page not found</h2>";
    });
}

function router() {
  let hash = location.hash.substring(1) || "main";
  loadPage(`pages/${hash}.html`);
  // if (location.hash === "#main") renderTasks();

  const links = document.querySelectorAll("nav a");
  const plusBtn = links[3];

  if (hash === "add-task") {
      links[0].style.transform = 'translateY(-100px)';
      links[1].style.transform = 'translateY(-100px)';
      links[2].style.transform = 'translateY(-100px)';
      plusBtn.style.transform = "rotate(45deg)";
      plusBtn.onclick = (e)=>{
        e.preventDefault(); // important
        window.location.hash = "#main";
      };
  } else {
      links[0].style.transform = "translateY(0px)";
      links[1].style.transform = 'translateY(0px)';
      links[2].style.transform = 'translateY(0px)';
      plusBtn.style.transform = "rotate(0deg)";
      plusBtn.onclick = null;
  }
}


window.addEventListener("hashchange", router);
window.addEventListener("load", router);
