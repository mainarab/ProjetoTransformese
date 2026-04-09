document.addEventListener("DOMContentLoaded", () => {
  const botaoResultado = document.querySelector("#btn-resp");
  const modal = document.querySelector(".modal");
  const fundo = document.querySelector(".fundo");
  const botaoFechar = document.querySelector(".fechar");

  function mostrarModal() {
    const { total, respondidas } = calcularPerfil();

    if (respondidas < 10) {
      alert("Por favor, responda todas as perguntas antes de ver o resultado.");
      return;
    }

    const chave = obterPerfil(total);
    const perfil = perfis[chave];

    modal.querySelector(".titulo").textContent = perfil.titulo;
    modal.querySelector(".subTitulo").textContent = perfil.subtitulo;
    modal.querySelector(".titulo").style.color = perfil.cor;

    modal.classList.add("active");
    fundo.classList.add("active");
  }

  function fecharModal() {
    modal.classList.remove("active");
    fundo.classList.remove("active");
  }

  function fecharFundo(e) {
    if (e.target === fundo) fecharModal();
  }

  botaoResultado.addEventListener("click", mostrarModal);
  botaoFechar.addEventListener("click", fecharModal);
  fundo.addEventListener("click", fecharFundo);
});
