function gerarPDF() {
  var pdf = new window.jspdf.jsPDF();

  var transacoes = localStorage.getItem("transacoes");

  if (transacoes == null) {
    transacoes = [];
  } else {
    transacoes = JSON.parse(transacoes);
  }

  var entradas = 0;
  var saidas = 0;

  var linha = 30;

  pdf.setFontSize(20);
  pdf.text("Relatorio Financeiro", 20, 20);

  pdf.setFontSize(12);
  pdf.text("Descricao", 20, linha);
  pdf.text("Tipo", 90, linha);
  pdf.text("Valor", 140, linha);

  linha = linha + 10;

  for (var i = 0; i < transacoes.length; i++) {
    var descricao = transacoes[i].descricao;
    var tipo = transacoes[i].tipo;
    var valor = transacoes[i].valor;

    pdf.text(descricao, 20, linha);
    pdf.text(tipo, 90, linha);
    pdf.text("R$ " + valor, 140, linha);

    if (tipo == "entrada") {
      entradas = entradas + Number(valor);
    }

    if (tipo == "saida") {
      saidas = saidas + Number(valor);
    }

    linha = linha + 10;
  }

  var saldo = entradas - saidas;

  linha = linha + 10;

  pdf.text("Entradas: R$ " + entradas, 20, linha);
  linha = linha + 10;

  pdf.text("Saidas: R$ " + saidas, 20, linha);
  linha = linha + 10;

  pdf.text("Saldo Final: R$ " + saldo, 20, linha);

  pdf.save("relatorio.pdf");
}
