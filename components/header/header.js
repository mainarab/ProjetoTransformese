const menuHamburguer = document.getElementById("menuHamburguer");
const menuDesktop = document.getElementById("menuDesktop");
const iconsDesktop = document.getElementsByClassName("icons");
const logo = document.getElementsByClassName("logo");

const containerMobile = document.querySelector(".containerMobile");
const menuClose = document.getElementById("menuClose");

  menuHamburguer.addEventListener("click", (e) => {
    e.stopPropagation(); 
    containerMobile.classList.add("ativo");
  });

  menuClose.addEventListener("click", () => {
    containerMobile.classList.remove("ativo");
    document.body.style.overflow = "auto";
  });


  document.addEventListener("click", (e) => {
    if (
      containerMobile.classList.contains("ativo") &&
      !containerMobile.contains(e.target) &&
      e.target !== menuHamburguer
    ) {
      containerMobile.classList.remove("ativo");
      document.body.style.overflow = "auto";
    }
  });



const trocarTema = document.querySelectorAll(".toggleDark");

trocarTema.forEach(botao => {
  botao.addEventListener("click", (e) => {
    e.stopPropagation();
    document.body.classList.toggle("dark");
  });
});

