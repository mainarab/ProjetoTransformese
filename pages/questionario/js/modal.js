document.addEventListener("DOMContentLoaded", () => {
    const botaoResultado = document.querySelector("#btn-resp");
    const modal = document.querySelector(".modal");
    const fundo = document.querySelector(".fundo");
    const botaoFechar = document.querySelector(".fechar");

    function mostrarModal(){
        modal.classList.add("active");
        fundo.classList.add("active");
    }

    function fecharModal(){
        modal.classList.remove("active");
        fundo.classList.remove("active");
    }

    function fecharFundo(e){
        if(e.target === fundo){
            fecharModal();
        }
    }

    botaoResultado.addEventListener("click", mostrarModal);
    botaoFechar.addEventListener("click", fecharModal);
    fundo.addEventListener("click", fecharFundo);
});