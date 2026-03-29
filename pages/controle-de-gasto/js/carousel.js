let track = document.querySelector(".dash-carousel-track");
let prevBtn = document.querySelector(".dash-prev");
let nextBtn = document.querySelector(".dash-next");
let wrapper = document.querySelector(".dash-carousel-wrapper");

let position = 0;

function getCardWidth() {
  const card = document.querySelector(".cardDash");
  const gap = 20; 
  return card.offsetWidth + gap;
}

function getTotalCards() {
  return document.querySelectorAll(".cardDash").length;
}

function getVisibleCards(cardWidth) {
  return Math.floor(wrapper.offsetWidth / cardWidth);
}

function updateCarousel() {
  const cardWidth = getCardWidth();
  const totalCards = getTotalCards();
  const visibleCards = getVisibleCards(cardWidth);
  position = 0;
  track.style.transform = "translateX(0px)";

  const needsCarousel = totalCards > visibleCards;
  prevBtn.style.display = needsCarousel ? "block" : "none";
  nextBtn.style.display = needsCarousel ? "block" : "none";
  wrapper.style.paddingBottom = needsCarousel ? "60px" : "0";
}

nextBtn.addEventListener("click", function () {
  const cardWidth = getCardWidth();
  const totalCards = getTotalCards();
  const visibleCards = getVisibleCards(cardWidth);
  const maxScroll = -(cardWidth * (totalCards - visibleCards));

  if (position > maxScroll) {
    position -= cardWidth;
    position = Math.max(position, maxScroll);
    track.style.transform = "translateX(" + position + "px)";
  }
});

prevBtn.addEventListener("click", function () {
  const cardWidth = getCardWidth();

  if (position < 0) {
    position += cardWidth;
    position = Math.min(position, 0);
    track.style.transform = "translateX(" + position + "px)";
  }
});

window.addEventListener("resize", updateCarousel);

updateCarousel();
