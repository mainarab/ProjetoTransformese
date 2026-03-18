function atualizarResumo() {
  const transacoes = JSON.parse(localStorage.getItem("transacoes")) || [];

  let entradas = 0;
  let saidas = 0;
  let contadorGastosAltos = 0; // contador para o sino
  const limiteGasto = 1000; // valor limite para disparar o sino

  transacoes.forEach((t) => {
    if (t.tipo === "entrada") {
      entradas += Number(t.valor);
    }

    if (t.tipo === "saida") {
      saidas += Number(t.valor);

      if (Number(t.valor) > limiteGasto) {
        contadorGastosAltos += 1;
      }
    }
  });

  const total = entradas - saidas;

  document.getElementById("entradas").innerText = "R$ " + entradas.toFixed(2);
  document.getElementById("saidas").innerText = "R$ " + saidas.toFixed(2);
  document.getElementById("total").innerText = "R$ " + total.toFixed(2);

  verificarSaldo(total);
  atualizarSino(contadorGastosAltos); // atualiza o badge do sino
}

// verifica saldo e muda cor
function verificarSaldo(total) {
  const totalEl = document.getElementById("total");

  if (total < 0) {
    totalEl.style.color = "red";
    alert("⚠️ Atenção! Seu saldo está negativo. Controle melhor seus gastos.");
  } else {
    totalEl.style.color = "green";
  }
}

// atualiza o badge do sino
function atualizarSino(contador) {
  var badge = document.getElementById("badgeGasto");
  if (contador > 0) {
    badge.style.display = "block";
    badge.textContent = contador;
  } else {
    badge.style.display = "none";
  }
}
