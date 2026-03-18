// Botão que vai mudar o tema
function toggleTema() {
  // Pega o body
  let body = document.body;

  // Se não tiver dark, adiciona
  if (body.className === "") {
    body.className = "dark";
    localStorage.setItem("tema", "dark");
  }
  // Se tiver dark, remove
  else if (body.className === "dark") {
    body.className = "";
    localStorage.setItem("tema", "light");
  }
}

// Carrega o tema salvo no localStorage
function carregarTema() {
  let tema = localStorage.getItem("tema");

  // Se o tema for dark, adiciona manualmente
  if (tema === "dark") {
    document.body.className = "dark";
  }
}

// Roda assim que a página carrega
carregarTema();
