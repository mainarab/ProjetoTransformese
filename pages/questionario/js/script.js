
const sidebar = document.querySelector(".sidebar");
const overlay = document.getElementById("sidebarOverlay");

function toggleMenu() {
  sidebar.classList.toggle("fechado");
  overlay.classList.toggle("ativo");
}

 function fecharMenu() {
  sidebar.classList.add("fechado");
  overlay.classList.remove("ativo");
}


function toggleTema() {
  // Pega o body
  let body = document.body;

  if (body.className === "") {
    body.className = "dark";
    localStorage.setItem("tema", "dark");
  }
  else if (body.className === "dark") {
    body.className = "";
    localStorage.setItem("tema", "light");
  }
}