const menuHamburguer = document.getElementById("menuHamburguer");
const menuDesktop = document.getElementById("menuDesktop");
const iconsDesktop = document.getElementsByClassName("icons");
const logo = document.getElementsByClassName("logo");

const containerMobile = document.querySelector(".containerMobile");
const menuClose = document.getElementById("menuClose");

menuHamburguer.addEventListener("click", (e) => {
  e.stopPropagation();
  containerMobile.classList.add("ativo");
  gsap.fromTo(
    containerMobile,
    { x: "-100%" },
    { x: "0%", duration: 0.5, ease: "power3.out" },
  );
});

menuClose.addEventListener("click", () => {
  gsap.to(containerMobile, {
    x: "-100%",
    duration: 0.5,
    ease: "power3.in",
    onComplete: () => {
      containerMobile.classList.remove("ativo");
    },
  });
});

document.addEventListener("click", (e) => {
  gsap.to(containerMobile, {
    x: "-100%",
    duration: 0.5,
    ease: "power3.in",
    onComplete: () => {
      if (
        containerMobile.classList.contains("ativo") &&
        !containerMobile.contains(e.target) &&
        e.target !== menuHamburguer
      ) {
        containerMobile.classList.remove("ativo");
        document.body.style.overflow = "auto";
      }
    },
  });
});

const trocarTema = document.querySelectorAll(".toggleDark");

trocarTema.forEach((botao) => {
  botao.addEventListener("click", (e) => {
    e.stopPropagation();
    document.body.classList.toggle("dark");
  });
});
