function atualizarSubcategorias() {
  let tipo = document.getElementById("tipoGasto").value;

  let sub = document.getElementById("subcategoria");

  sub.innerHTML = "<option value=''>Selecione</option>";

  if (tipo === "fixo") {
    let lista = ["Aluguel", "Internet", "Energia", "Água"];

    for (let i = 0; i < lista.length; i++) {
      let option = document.createElement("option"); 
      option.value = lista[i]; 
      option.text = lista[i]; 
      sub.appendChild(option); 
    }
  }

  // Se o tipo for variavel, adiciona opções variáveis
  if (tipo === "variavel") {
    let lista = ["Alimentação", "Lazer", "Transporte", "Compras"];

    for (let i = 0; i < lista.length; i++) {
      let option = document.createElement("option"); 
      option.value = lista[i]; 
      option.text = lista[i]; 
      sub.appendChild(option); 
    }
  }
}
