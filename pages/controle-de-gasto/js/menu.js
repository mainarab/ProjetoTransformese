function toggleMenu() {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.getElementById("sidebarOverlay");
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    sidebar.classList.toggle("aberto");
    overlay.classList.toggle("ativo");
  } else {
    sidebar.classList.toggle("fechado");
  }
}

function fecharMenu() {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.getElementById("sidebarOverlay");
  sidebar.classList.remove("aberto");
  overlay.classList.remove("ativo");
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

  // Fecha sidebar automaticamente no mobile ao navegar
  if (window.innerWidth <= 768) {
    fecharMenu();
  }
}

function abrirPagina(pagina) {
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("transacoes").style.display = "none";
  document.getElementById("relatorios").style.display = "none";

  document.getElementById(pagina).style.display = "block";

  // Fecha sidebar automaticamente no mobile ao navegar
  if (window.innerWidth <= 768) {
    fecharMenu();
  }
}

// Fecha sidebar ao redimensionar para desktop
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    fecharMenu();
  }
});
