function abrirPagina(pagina) {
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("transacoes").style.display = "none";
  document.getElementById("relatorios").style.display = "none";

  document.getElementById(pagina).style.display = "block";
}
function toggleMenu() {
  const sidebar = document.querySelector(".sidebar");

  sidebar.classList.toggle("fechado");
}
function mostrarSecao(secao) {
  const dashboard = document.getElementById("secaoDashboards");
  const transacoes = document.getElementById("secaoTransacoes");

  dashboard.style.display = "none";
  transacoes.style.display = "none";

  if (secao === "dashboard") {
    dashboard.style.display = "block";
  }

  if (secao === "transacoes") {
    transacoes.style.display = "block";
  }
}
