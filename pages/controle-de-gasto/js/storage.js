
function salvarDados() {

  localStorage.setItem("transacoes", JSON.stringify(transacoes));

}

function carregarDados() {

  let dados = localStorage.getItem("transacoes");

  if (dados) {

    transacoes = JSON.parse(dados);

  }

}

function iniciarSistema(){
// localStorage.removeItem("transacoes"); para tirar os dados para limpar caso de erro 
  carregarDados();

  mostrarTransacoes();
  atualizarResumo();
  atualizarDashboards();

}

document.addEventListener("DOMContentLoaded", iniciarSistema);