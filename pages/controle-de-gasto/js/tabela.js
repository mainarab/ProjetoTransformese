function mostrarTransacoes() {
  // Pega o elemento da tabela
  let lista = document.getElementById("lista");

  // Limpa a tabela antes de preencher
  lista.innerHTML = "";

  for (let i = 0; i < transacoes.length; i++) {
    let item = transacoes[i];

    lista.innerHTML +=
      "<tr>" +
      "<td>" +
      item.descricao +
      "</td>" +
      "<td>" +
      item.valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }) +
      "</td>" +
      "<td>" +
      item.tipo +
      "</td>" +
      "<td>" +
      item.tipoGasto +
      "</td>" +
      "<td>" +
      item.subcategoria +
      "</td>" +
      "<td>" +
      new Date(item.data).toLocaleDateString("pt-BR") +
      "</td>" +
      "<td>" +
      "<button onclick='editar(" +
      i +
      ")'><i class='fa-regular fa-pen-to-square' style='color: rgba(29, 123, 116, 1);'></i></button> " +
      "<button onclick='excluir(" +
      i +
      ")'><i class='fa-regular fa-trash-can' style='color: rgba(221, 19, 19, 1);'></i></button>" +
      "</td>" +
      "</tr>";
  }
}

// Função para excluir uma transação
function excluir(index) {
  transacoes.splice(index, 1);
  salvarDados();
  mostrarTransacoes();
  atualizarResumo();
  atualizarDashboards();
}

function editar(index) {
  let t = transacoes[index];
  document.getElementById("descricao").value = t.descricao;
  document.getElementById("valor").value = t.valor;
  document.getElementById("data").value = t.data;
  document.getElementById("tipo").value = t.tipo;

  verificarTipo();

  document.getElementById("tipoGasto").value = t.tipoGasto;
  atualizarSubcategorias();
  document.getElementById("subcategoria").value = t.subcategoria;

  editIndex = index;
}
