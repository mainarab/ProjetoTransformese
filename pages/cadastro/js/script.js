const btnCadastrar = document.getElementById("btn-cadastar");
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("e-mail");
const senhaInput = document.getElementById("senha");
const toggleThemeButton = document.getElementById("toggle-theme");
const imgModo = document.getElementById("img-modo");



// Modo claro e escuro
toggleThemeButton.addEventListener("click", function() {
document.body.classList.toggle("dark");
  
  if (document.body.classList.contains("dark")) {
    imgModo.src = "../../img/sol.svg";
  } else {
    imgModo.src = "../../img/modoEscuro.svg";
  }
});


// Parte do cadastro
btnCadastrar.addEventListener("click", function(e) {
  e.preventDefault(); 

  const nome = nomeInput.value;
  const email = emailInput.value;
  const senha = senhaInput.value;
  if (nome === "" || email === "" || senha === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }
  if (senha.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres!");
    return;
  }

 
  // Levando para a pagina do questionario
  localStorage.setItem("nomeUsuario", nome);
  alert("Cadastro realizado com sucesso! Bem-vindo(a), " + nome + "!");
  window.location.href = "../pages/questionario/questionario.html";
});