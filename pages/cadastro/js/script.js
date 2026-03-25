const nome = document.getElementById("nome").value;

localStorage.setItem("nomeUsuario", nome);

window.location.href = "../pages/questionario/questionario.html";
