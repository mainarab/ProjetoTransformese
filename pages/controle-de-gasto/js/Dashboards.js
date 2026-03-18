let chartEntradasSaidas;
let chartCategorias;
let chartTipoGasto;
let chartEvolucao;
let chartTop;
let chartDistribuicao;

function atualizarDashboards() {
  // SOMA TOTAL DE ENTRADAS E SAÍDAS
  let entradas = 0;
  let saidas = 0;

  for (let i = 0; i < transacoes.length; i++) {
    if (transacoes[i].tipo === "entrada") entradas += transacoes[i].valor;
    if (transacoes[i].tipo === "saida") saidas += transacoes[i].valor;
  }

  // CATEGORIAS DE GASTO
  let categoriasNomes = [];
  let categoriasValores = [];

  for (let i = 0; i < transacoes.length; i++) {
    if (transacoes[i].tipo === "saida") {
      let index = categoriasNomes.indexOf(transacoes[i].subcategoria);
      if (index === -1) {
        categoriasNomes.push(transacoes[i].subcategoria);
        categoriasValores.push(transacoes[i].valor);
      } else {
        categoriasValores[index] += transacoes[i].valor;
      }
    }
  }

  // TIPO DE GASTO
  let fixo = 0;
  let variavel = 0;

  for (let i = 0; i < transacoes.length; i++) {
    if (transacoes[i].tipoGasto === "fixo") fixo += transacoes[i].valor;
    if (transacoes[i].tipoGasto === "variavel") variavel += transacoes[i].valor;
  }

  // GRAFICO ENTRADAS VS SAIDAS
  if (chartEntradasSaidas) chartEntradasSaidas.destroy();
  chartEntradasSaidas = new Chart(
    document.getElementById("graficoEntradasSaidas"),
    {
      type: "doughnut",
      data: {
        labels: ["Entradas", "Saídas"],
        datasets: [
          {
            data: [entradas, saidas],
            backgroundColor: ["#4ade80", "#f87171"],
          },
        ],
      },
    },
  );

  // GRAFICO CATEGORIAS
  if (chartCategorias) chartCategorias.destroy();
  chartCategorias = new Chart(document.getElementById("graficoCategorias"), {
    type: "bar",
    data: {
      labels: categoriasNomes,
      datasets: [
        {
          label: "Gastos",
          data: categoriasValores,
          backgroundColor: [
            "red",
            "blue",
            "green",
            "orange",
            "purple",
            "pink",
            "yellow",
          ],
        },
      ],
    },
  });

  // GRAFICO TIPO DE GASTO
  if (chartTipoGasto) chartTipoGasto.destroy();
  chartTipoGasto = new Chart(document.getElementById("graficoTipoGasto"), {
    type: "pie",
    data: {
      labels: ["Fixo", "Variável"],
      datasets: [
        {
          data: [fixo, variavel],
          backgroundColor: ["#60a5fa", "#facc15"],
        },
      ],
    },
  });

  // EVOLUÇÃO MENSAL (somente soma simples)
  let mesesNomes = [];
  let mesesValores = [];

  for (let i = 0; i < transacoes.length; i++) {
    let mes = transacoes[i].data.substring(0, 7);
    let index = mesesNomes.indexOf(mes);
    let valor =
      transacoes[i].tipo === "entrada"
        ? transacoes[i].valor
        : -transacoes[i].valor;

    if (index === -1) {
      mesesNomes.push(mes);
      mesesValores.push(valor);
    } else {
      mesesValores[index] += valor;
    }
  }

  if (chartEvolucao) chartEvolucao.destroy();
  chartEvolucao = new Chart(document.getElementById("graficoEvolucao"), {
    type: "line",
    data: {
      labels: mesesNomes,
      datasets: [
        {
          label: "Saldo Mensal",
          data: mesesValores,
          backgroundColor: "rgba(96,165,250,0.2)",
          borderColor: "#2563eb",
          fill: true,
        },
      ],
    },
  });

  // TOP 5 GASTOS
  let topNomes = [];
  let topValores = [];
  let gastos = [];

  for (let i = 0; i < transacoes.length; i++) {
    if (transacoes[i].tipo === "saida") gastos.push(transacoes[i]);
  }

  gastos.sort(function (a, b) {
    return b.valor - a.valor;
  });

  for (let i = 0; i < 5 && i < gastos.length; i++) {
    topNomes.push(gastos[i].descricao);
    topValores.push(gastos[i].valor);
  }

  if (chartTop) chartTop.destroy();
  chartTop = new Chart(document.getElementById("graficoTopGastos"), {
    type: "bar",
    data: {
      labels: topNomes,
      datasets: [
        {
          label: "Gastos",
          data: topValores,
          backgroundColor: "#f87171",
        },
      ],
    },
  });

  // MAIOR GASTO
  document.getElementById("maiorGasto").innerText =
    gastos.length > 0 ? "R$ " + gastos[0].valor : "R$ 0";

  // CATEGORIA TOP
  let maiorIndex = 0;
  for (let i = 1; i < categoriasValores.length; i++) {
    if (categoriasValores[i] > categoriasValores[maiorIndex]) maiorIndex = i;
  }
  document.getElementById("categoriaTop").innerText =
    categoriasNomes[maiorIndex] || "Nenhuma";

  // PERCENTUAL
  let total = entradas + saidas;
  let percentual = total ? ((saidas / total) * 100).toFixed(1) : 0;
  document.getElementById("percentualGasto").innerText = percentual + "%";
}
