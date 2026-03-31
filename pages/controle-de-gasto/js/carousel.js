let track = document.querySelector(".dash-carousel-track");
let prevBtn = document.querySelector(".dash-prev");
let nextBtn = document.querySelector(".dash-next");
let wrapper = document.querySelector(".dash-carousel-wrapper");


let position = 0;

// Essa função descobre qual é a largura de um card
function getCardWidth() {
  let card = document.querySelector(".cardDash");
  let style = window.getComputedStyle(track);
  let gap = parseFloat(style.gap) || 20;
  let cardWidth = card.offsetWidth + gap;
  return cardWidth;
}

// Essa função conta quantos cards existem
function getTotalCards() {
  let cards = document.querySelectorAll(".cardDash");
  return cards.length;
}

// Essa função calcula quantos cards cabem na tela
function getVisibleCards(cardWidth) {
  let wrapperWidth = wrapper.offsetWidth;
  let visibleCards = Math.floor(wrapperWidth / cardWidth);
  return visibleCards;
}

function getMaxScroll() {
  let cardWidth = getCardWidth();
  let totalCards = getTotalCards();
  let visibleCards = getVisibleCards(cardWidth);

  let maxScroll = -(cardWidth * (totalCards - visibleCards));
  return maxScroll;
}

function updateCarousel() {
  let cardWidth = getCardWidth();
  let totalCards = getTotalCards();
  let visibleCards = getVisibleCards(cardWidth);
  let maxScroll = -(cardWidth * (totalCards - visibleCards));

  if (position < maxScroll) {
    position = maxScroll;
  }

  if (position > 0) {
    position = 0;
  }

  track.style.transform = "translateX(" + position + "px)";

  let needsCarousel = totalCards > visibleCards;

  if (needsCarousel) {
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
    wrapper.style.paddingBottom = "60px";
  } else {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    wrapper.style.paddingBottom = "0";
  }
}
nextBtn.addEventListener("click", function () {
  let cardWidth = getCardWidth();
  let maxScroll = getMaxScroll();

  if (position > maxScroll) {
    position = position - cardWidth;

    // Se passou do limite, vai exatamente para o limite
    if (position < maxScroll) {
      position = maxScroll;
    }

    track.style.transform = "translateX(" + position + "px)";
  }
});

prevBtn.addEventListener("click", function () {
  let cardWidth = getCardWidth(); // tentei usar cardwith aqui mas deu erro de undefined

  if (position < 0) {
    position = position + cardWidth; 

    if (position > 0) {
      position = 0;
    }
    track.style.transform = "translateX(" + position + "px)"; // aqui esqueci o "px" no começo mas corrigi
  }
});

let resizeTimer;
window.addEventListener("resize", function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(updateCarousel, 100);
});

// Chama a função uma vez quando a página carrega
updateCarousel();
// não aguento mais mexer no carrosel 
