function atualizarResumo() {
  const transacoes = JSON.parse(localStorage.getItem("transacoes")) || [];

  let entradas = 0;
  let saidas = 0;

  transacoes.forEach((t) => {
    if (t.tipo === "entrada") {
      entradas += Number(t.valor);
    }

    if (t.tipo === "saida") {
      saidas += Number(t.valor);
    }
  });

  const total = entradas - saidas;

  document.getElementById("entradas").innerText = "R$ " + entradas.toFixed(2);
  document.getElementById("saidas").innerText = "R$ " + saidas.toFixed(2);
  document.getElementById("total").innerText = "R$ " + total.toFixed(2);

  verificarSaldo(total);
  atualizarSino(total);
}

// verifica saldo e muda cor
function verificarSaldo(total) {
  const totalEl = document.getElementById("total");

  if (total < 0) {
    totalEl.style.color = "red";
    alert("Seu saldo está negativo! Melhore suas finanças");
  } else {
    totalEl.style.color = "green";
  }
}

// atualiza o sino
function atualizarSino(total) {
  var badge = document.getElementById("badgeGasto");

  if (total < 0) {
    badge.style.display = "block";
    badge.textContent = "1";
  } else {
    badge.style.display = "none";
  }
}
