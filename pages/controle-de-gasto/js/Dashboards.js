let chartEntradasSaidas;
let chartCategorias;
let chartTipoGasto;
let chartEvolucao;
let chartTop;
let chartDistribuicao;

function atualizarDashboards() {

  let entradas = 0;
  let saidas = 0;

  let categorias = {};
  let tipos = {fixo:0, variavel:0};

  transacoes.forEach(t => {
    if(t.tipo === "entrada") entradas += t.valor;
    if(t.tipo === "saida") saidas += t.valor;

    if(t.tipo === "saida"){
      if(!categorias[t.subcategoria]) categorias[t.subcategoria] = 0;
      categorias[t.subcategoria] += t.valor;
    }

    if(t.tipoGasto === "fixo") tipos.fixo += t.valor;
    if(t.tipoGasto === "variavel") tipos.variavel += t.valor;
  });

  /* ENTRADAS VS SAIDAS */
  if(chartEntradasSaidas) chartEntradasSaidas.destroy();

  chartEntradasSaidas = new Chart(
    document.getElementById("graficoEntradasSaidas"),
    {
      type: "doughnut",
      data: {
        labels: ["Entradas","Saídas"],
        datasets: [{
          data: [entradas, saidas],
          backgroundColor: ["#4ade80","#f87171"], // verde e vermelho
          borderColor: ["#16a34a","#b91c1c"],
          borderWidth: 2
        }]
      }
    }
  );

  /* CATEGORIAS */
  if(chartCategorias) chartCategorias.destroy();

  chartCategorias = new Chart(
    document.getElementById("graficoCategorias"),
    {
      type: "bar",
      data: {
        labels: Object.keys(categorias),
        datasets: [{
          label: "Gastos",
          data: Object.values(categorias),
          backgroundColor: Object.keys(categorias).map((_,i)=>`hsl(${i*50},70%,50%)`),
          borderColor: "black",
          borderWidth: 1
        }]
      }
    }
  );

  /* FIXO VS VARIAVEL */
  if(chartTipoGasto) chartTipoGasto.destroy();

  chartTipoGasto = new Chart(
    document.getElementById("graficoTipoGasto"),
    {
      type: "pie",
      data: {
        labels: ["Fixo","Variável"],
        datasets: [{
          data: [tipos.fixo, tipos.variavel],
          backgroundColor: ["#60a5fa","#facc15"], // azul e amarelo
          borderColor: ["#1e40af","#78350f"],
          borderWidth: 2
        }]
      }
    }
  );

  /* EVOLUÇÃO MENSAL */
  let meses = {};

  transacoes.forEach(t => {
    let mes = t.data.substring(0,7);
    if(!meses[mes]) meses[mes] = 0;
    if(t.tipo==="entrada") meses[mes] += t.valor;
    if(t.tipo==="saida") meses[mes] -= t.valor;
  });

  if(chartEvolucao) chartEvolucao.destroy();

  chartEvolucao = new Chart(
    document.getElementById("graficoEvolucao"),
    {
      type: "line",
      data: {
        labels: Object.keys(meses),
        datasets: [{
          label: "Saldo mensal",
          data: Object.values(meses),
          backgroundColor: "rgba(96,165,250,0.2)",
          borderColor: "#2563eb",
          borderWidth: 2,
          fill: true
        }]
      }
    }
  );

  /* TOP GASTOS */
  let top = transacoes
    .filter(t => t.tipo==="saida")
    .sort((a,b) => b.valor - a.valor)
    .slice(0,5);

  if(chartTop) chartTop.destroy();

  chartTop = new Chart(
    document.getElementById("graficoTopGastos"),
    {
      type: "bar",
      data: {
        labels: top.map(t=>t.descricao),
        datasets: [{
          label: "Gastos",
          data: top.map(t=>t.valor),
          backgroundColor: "#f87171",
          borderColor: "#b91c1c",
          borderWidth: 1
        }]
      }
    }
  );

  /* DISTRIBUIÇÃO */
  if(chartDistribuicao) chartDistribuicao.destroy();

  chartDistribuicao = new Chart(
    document.getElementById("graficoDistribuicao"),
    {
      type: "pie",
      data: {
        labels: Object.keys(categorias),
        datasets: [{
          data: Object.values(categorias),
          backgroundColor: Object.keys(categorias).map((_,i)=>`hsl(${i*50},70%,50%)`),
          borderColor: "black",
          borderWidth: 1
        }]
      }
    }
  );

  /* MAIOR GASTO */
  let maior = transacoes
    .filter(t => t.tipo==="saida")
    .sort((a,b) => b.valor - a.valor)[0];

  document.getElementById("maiorGasto").innerText =
    maior ? "R$ "+maior.valor : "R$ 0";

  /* CATEGORIA TOP */
  let topCategoria = Object.entries(categorias)
    .sort((a,b) => b[1] - a[1])[0];

  document.getElementById("categoriaTop").innerText =
    topCategoria ? topCategoria[0] : "Nenhuma";

  /* PERCENTUAL */
  let total = entradas + saidas;
  let percentual = total ? (saidas/total*100).toFixed(1) : 0;
  document.getElementById("percentualGasto").innerText = percentual + "%";

}