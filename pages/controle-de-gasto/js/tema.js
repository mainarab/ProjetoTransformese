function toggleTema() {
  document.body.classList.toggle("dark");

  let dark = document.body.classList.contains("dark");

  localStorage.setItem("tema", dark ? "dark" : "light");
}

function carregarTema() {
  let tema = localStorage.getItem("tema");

  if (tema === "dark") {
    document.body.classList.add("dark");
  }
}

carregarTema();
