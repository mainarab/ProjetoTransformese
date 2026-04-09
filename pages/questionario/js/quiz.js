const pontuacao = {
  otima1: 3,
  Boa1: 2,
  razoavel1: 1,
  otima2: 3,
  Boa2: 2,
  razoavel2: 1,
  sim3: 3,
  tento3: 2,
  nao3: 1,
  sim4: 3,
  asvezes4: 2,
  nao4: 1,
  sim5: 3,
  asvezes5: 2,
  nao5: 1,
  sim6: 3,
  nao6: 1,
  sim7: 3,
  nao7: 1,
  nao8: 3,
  asvezes8: 2,
  sim8: 1,
  sim9: 3,
  asvezes9: 2,
  nao9: 1,
  sim10: 3,
  emparte10: 2,
  nao10: 1,
};

const perfis = {
  excelente: {
    titulo: "Perfil Excelente!",
    subtitulo:
      "Com base nas suas respostas, você apresenta um perfil financeiro muito disciplinado e estável. Parabéns! Continue assim e seus objetivos financeiros estão ao seu alcance.",
    cor: "rgba(3, 152, 85, 1)",
  },
  bom: {
    titulo: "Perfil Bom!",
    subtitulo:
      "Você tem uma boa base financeira, mas ainda há espaço para melhorar. Foque em criar um fundo de emergência e controlar melhor seus gastos mensais.",
    cor: "rgba(45, 168, 181, 1)",
  },
  razoavel: {
    titulo: "Perfil Razoável",
    subtitulo:
      "Sua situação financeira precisa de atenção. Comece pelo básico: anote seus gastos diários, crie um orçamento mensal e tente quitar dívidas. Pequenas mudanças fazem grande diferença!",
    cor: "rgba(221, 19, 19, 1)",
  },
};

function calcularPerfil() {
  let total = 0;
  let respondidas = 0;

  for (const [id, pts] of Object.entries(pontuacao)) {
    const input = document.getElementById(id);
    if (input && input.checked) {
      total += pts;
      respondidas++;
    }
  }

  return { total, respondidas };
}

function obterPerfil(total) {
  if (total >= 24) return "excelente";
  if (total >= 16) return "bom";
  return "razoavel";
}
