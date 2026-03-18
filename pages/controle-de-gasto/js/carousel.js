// Seleciona elementos do carrossel
let track = document.querySelector(".dash-carousel-track");
let prevBtn = document.querySelector(".dash-prev");
let nextBtn = document.querySelector(".dash-next");

// Começa a posição em 0
let position = 0;

// Pega a largura de um card + o espaço entre eles
let cardWidth = document.querySelector(".cardDash").offsetWidth + 20;

// Pega a quantidade total de cards
let totalCards = document.querySelectorAll(".cardDash").length;

// Calcula quantos cards cabem na tela
let visibleCards = Math.floor(
  document.querySelector(".dash-carousel-wrapper").offsetWidth / cardWidth,
);

// Quando clica no botão "próximo"
nextBtn.addEventListener("click", function () {

  if (position > -(cardWidth * (totalCards - visibleCards))) {
    position = position - cardWidth; 
    track.style.transform = "translateX(" + position + "px)"; // aplica a mudança
  }
});

// Quando clica no botão "anterior"
prevBtn.addEventListener("click", function () {

  if (position < 0) {
    position = position + cardWidth; 
    track.style.transform = "translateX(" + position + "px)"; 
  }
});


window.addEventListener("resize", function () {
  position = 0;
  track.style.transform = "translateX(0px)";
});
