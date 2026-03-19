let chartEntradasSaidas;
let chartCategorias;
let chartTipoGasto;
let chartEvolucao;
let chartTop;

function atualizarDashboards() {
  // ENTRADAS E SAIDAS

  let entradas = 0;
  let saidas = 0;

  for (let i = 0; i < transacoes.length; i++) {
    let t = transacoes[i];

    if (t.tipo === "entrada") {
      entradas += t.valor;
    }

    if (t.tipo === "saida") {
      saidas += t.valor;
    }
  }

  // CATEGORIAS

  let categoriasNomes = [];
  let categoriasValores = [];

  for (let i = 0; i < transacoes.length; i++) {
    let t = transacoes[i];

    if (t.tipo === "saida") {
      let pos = categoriasNomes.indexOf(t.subcategoria);

      if (pos === -1) {
        categoriasNomes.push(t.subcategoria);
        categoriasValores.push(t.valor);
      } else {
        categoriasValores[pos] += t.valor;
      }
    }
  }

  // TIPO DE GASTO

  let fixo = 0;
  let variavel = 0;

  for (let i = 0; i < transacoes.length; i++) {
    let t = transacoes[i];

    if (t.tipoGasto === "fixo") {
      fixo += t.valor;
    }

    if (t.tipoGasto === "variavel") {
      variavel += t.valor;
    }
  }

  // GRAFICO ENTRADAS SAIDAS

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
            backgroundColor: ["green", "red"],
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
          backgroundColor: "orange",
        },
      ],
    },
  });

  // GRAFICO TIPO GASTO

  if (chartTipoGasto) chartTipoGasto.destroy();

  chartTipoGasto = new Chart(document.getElementById("graficoTipoGasto"), {
    type: "pie",
    data: {
      labels: ["Fixo", "Variável"],
      datasets: [
        {
          data: [fixo, variavel],
          backgroundColor: ["blue", "yellow"],
        },
      ],
    },
  });

  // EVOLUÇÃO MENSAL

  let meses = [];
  let valoresMes = [];

  for (let i = 0; i < transacoes.length; i++) {
    let t = transacoes[i];
    let mes = t.data.substring(0, 7);

    let pos = meses.indexOf(mes);

    let valor = t.valor;

    if (t.tipo === "saida") {
      valor = -valor;
    }

    if (pos === -1) {
      meses.push(mes);
      valoresMes.push(valor);
    } else {
      valoresMes[pos] += valor;
    }
  }

  if (chartEvolucao) chartEvolucao.destroy();

  chartEvolucao = new Chart(document.getElementById("graficoEvolucao"), {
    type: "line",
    data: {
      labels: meses,
      datasets: [
        {
          label: "Saldo",
          data: valoresMes,
          borderColor: "blue",
          fill: false,
        },
      ],
    },
  });

  // TOP GASTOS

  let gastos = [];

  for (let i = 0; i < transacoes.length; i++) {
    if (transacoes[i].tipo === "saida") {
      gastos.push(transacoes[i]);
    }
  }

  gastos.sort(function (a, b) {
    return b.valor - a.valor;
  });

  let nomesTop = [];
  let valoresTop = [];

  for (let i = 0; i < 5 && i < gastos.length; i++) {
    nomesTop.push(gastos[i].descricao);
    valoresTop.push(gastos[i].valor);
  }

  if (chartTop) chartTop.destroy();

  chartTop = new Chart(document.getElementById("graficoTopGastos"), {
    type: "bar",
    data: {
      labels: nomesTop,
      datasets: [
        {
          label: "Top Gastos",
          data: valoresTop,
          backgroundColor: "red",
        },
      ],
    },
  });

  // MAIOR GASTO

  if (gastos.length > 0) {
    document.getElementById("maiorGasto").innerText = "R$ " + gastos[0].valor;
  } else {
    document.getElementById("maiorGasto").innerText = "R$ 0";
  }

  // CATEGORIA TOP

  let maiorCategoria = "";
  let maiorValor = 0;

  for (let i = 0; i < categoriasValores.length; i++) {
    if (categoriasValores[i] > maiorValor) {
      maiorValor = categoriasValores[i];
      maiorCategoria = categoriasNomes[i];
    }
  }

  document.getElementById("categoriaTop").innerText =
    maiorCategoria || "Nenhuma";

  // % DESPESAS

  let total = entradas + saidas;

  let percentual = 0;

  if (total > 0) {
    percentual = (saidas / total) * 100;
  }

  document.getElementById("percentualGasto").innerText =
    percentual.toFixed(1) + "%";
}
