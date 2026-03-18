function gerarPDF() {
  var doc = new window.jspdf.jsPDF();
  var transacoes = localStorage.getItem("transacoes");
  if (!transacoes) {
    transacoes = [];
  } else {
    transacoes = JSON.parse(transacoes);
  }

  var entradas = 0;
  var saidas = 0;
  var y = 30;

  doc.setFontSize(20);
  doc.text("Relatório Financeiro", 20, 20);

  var data = new Date();
  var dia = data.getDate();
  var mes = data.getMonth() + 1;
  var ano = data.getFullYear();
  doc.setFontSize(12);
  doc.text("Data: " + dia + "/" + mes + "/" + ano, 150, 20);

  doc.text("Descrição", 20, y);
  doc.text("Tipo", 100, y);
  doc.text("Valor", 150, y);
  y = y + 10;

  for (var i = 0; i < transacoes.length; i = i + 1) {
    doc.text(transacoes[i].descricao, 20, y);
    doc.text(transacoes[i].tipo, 100, y);
    doc.text("R$ " + Number(transacoes[i].valor).toFixed(2), 150, y);

    if (transacoes[i].tipo == "entrada") {
      entradas = entradas + Number(transacoes[i].valor);
    }

    if (transacoes[i].tipo == "saida") {
      saidas = saidas + Number(transacoes[i].valor);
    }

    y = y + 10;
  }

  var total = entradas - saidas;

  y = y + 10;
  doc.text("Total Entradas: R$ " + entradas.toFixed(2), 20, y);
  y = y + 10;
  doc.text("Total Saídas: R$ " + saidas.toFixed(2), 20, y);
  y = y + 10;
  doc.text("Saldo Final: R$ " + total.toFixed(2), 20, y);

  doc.save("relatorio-financeiro-ControlMoney.pdf");
}
