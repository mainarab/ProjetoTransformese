function mostrarTransacoes() {
  let lista = document.getElementById("lista");

  lista.innerHTML = "";

  transacoes.forEach((item, index) => {
    lista.innerHTML += `
    <tr>

      <td>${item.descricao}</td>
      <td>${item.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</td>
      <td>${item.tipo}</td>
      <td>${item.tipoGasto}</td>
      <td>${item.subcategoria}</td>
      <td>${new Date(item.data).toLocaleDateString("pt-BR")}</td>

      <td>
        <button onclick="editar(${index})">✏️</button>
        <button onclick="excluir(${index})">🗑️</button>
      </td>

    </tr>
    `;
  });
}

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
