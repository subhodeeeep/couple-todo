const app = document.getElementById("app");

function loadPage(page) {
  fetch(page)
    .then(res => res.text())
    .then(html => {
      app.innerHTML = html;
    })
    .catch(() => {
      app.innerHTML = "<h2>Page not found</h2>";
    });
}

function router() {
  let hash = location.hash.substring(1) || "main";
  loadPage(`pages/${hash}.html`);
  if (location.hash === "#main") renderTasks();

  const links = document.querySelectorAll("nav a");
  const plusBtn = links[4];

  if (hash === "add-task") {
      links[0].style.opacity = "0";
      links[1].style.opacity = "0";
      links[2].style.opacity = "0";
      links[3].style.opacity = "0";
      plusBtn.style.transform = "rotate(45deg)";
      plusBtn.onclick = (e)=>{
        e.preventDefault(); // important
        window.location.hash = "#main";
      };
  } else {
      links[0].style.opacity = "1";
      links[1].style.opacity = "1";
      links[2].style.opacity = "1";
      links[3].style.opacity = "1";
      plusBtn.style.transform = "rotate(0deg)";
      plusBtn.onclick = null;
  }
}


window.addEventListener("hashchange", router);
window.addEventListener("load", router);
