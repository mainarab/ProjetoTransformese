function abrirPagina(pagina) {
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("transacoes").style.display = "none";
  document.getElementById("relatorios").style.display = "none";

  document.getElementById(pagina).style.display = "block";
}
function toggleMenu(){

const sidebar = document.querySelector(".sidebar")

sidebar.classList.toggle("fechado")

}
