function verificarTipo() {

  let tipo = document.getElementById("tipo").value;
  let tipoGasto = document.getElementById("tipoGasto");
  let subcategoria = document.getElementById("subcategoria");

  if (tipo === "saida") {

    tipoGasto.style.display = "block";
    subcategoria.style.display = "block";

  } else {

    tipoGasto.style.display = "none";
    subcategoria.style.display = "none";

    tipoGasto.value = "";
    subcategoria.value = "";

  }

}

function limparCampos() {

  document.getElementById("descricao").value = "";
  document.getElementById("valor").value = "";
  document.getElementById("data").value = "";
  document.getElementById("tipo").value = "";
  document.getElementById("tipoGasto").value = "";
  document.getElementById("subcategoria").value = "";

}