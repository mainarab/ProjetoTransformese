function atualizarSubcategorias() {

  let tipo = document.getElementById("tipoGasto").value;
  let sub = document.getElementById("subcategoria");

  sub.innerHTML = "<option value=''>Selecione</option>";

  if (tipo === "fixo") {

    let lista = ["Aluguel","Internet","Energia","Água"];

    lista.forEach(item => {

      let option = document.createElement("option");
      option.value = item;
      option.text = item;

      sub.appendChild(option);

    });

  }

  if (tipo === "variavel") {

    let lista = ["Alimentação","Lazer","Transporte","Compras"];

    lista.forEach(item => {

      let option = document.createElement("option");
      option.value = item;
      option.text = item;

      sub.appendChild(option);

    });

  }

}