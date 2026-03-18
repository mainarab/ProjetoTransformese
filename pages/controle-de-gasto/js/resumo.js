function atualizarResumo(){

  let entradas = 0;
  let saidas = 0;

  transacoes.forEach(item=>{

    if(item.tipo === "entrada")
      entradas += item.valor;

    if(item.tipo === "saida")
      saidas += item.valor;

  });

  let total = entradas - saidas;

  document.getElementById("entradas").innerText = "R$ " + entradas;
  document.getElementById("saidas").innerText = "R$ " + saidas;
  document.getElementById("total").innerText = "R$ " + total;

}