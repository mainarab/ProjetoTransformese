
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

function carregarTema() {
  let tema = localStorage.getItem("tema");

  // Se o tema for dark, adiciona manualmente
  if (tema === "dark") {
    document.body.className = "dark";
  }
}

carregarTema();
