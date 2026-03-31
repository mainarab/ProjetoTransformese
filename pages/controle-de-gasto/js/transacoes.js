function adicionar() {
  let descricao = document.getElementById("descricao").value;
  let valor = document.getElementById("valor").value;
  let data = document.getElementById("data").value;

  let tipo = document.getElementById("tipo").value;
  let tipoGasto = document.getElementById("tipoGasto").value;
  let subcategoria = document.getElementById("subcategoria").value;

  if (descricao === "" || valor === "" || tipo === "" || data === "") {
    alert("Preencha todos os campos");
    return;
  }

  if (tipo === "entrada") {
    tipoGasto = "-";
    subcategoria = "-";
  }

  let transacao = {
    descricao,
    valor: Number(valor),
    data,
    tipo,
    tipoGasto,
    subcategoria,
  };

  if (editIndex !== null) {
    transacoes[editIndex] = transacao;
    editIndex = null;
  } else {
    transacoes.push(transacao);
  }
  salvarDados();
  mostrarTransacoes();
  atualizarResumo();
  atualizarDashboards();
  limparCampos();
}
