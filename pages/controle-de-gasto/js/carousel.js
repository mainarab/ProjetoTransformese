const track = document.querySelector(".dash-carousel-track");
const prevBtn = document.querySelector(".dash-prev");
const nextBtn = document.querySelector(".dash-next");

let position = 0;
const cardWidth = document.querySelector(".cardDash").offsetWidth + 20; // card + gap
const totalCards = document.querySelectorAll(".cardDash").length;
const visibleCards = Math.floor(
  document.querySelector(".dash-carousel-wrapper").offsetWidth / cardWidth,
);

nextBtn.addEventListener("click", () => {
  if (position > -(cardWidth * (totalCards - visibleCards))) {
    position -= cardWidth;
    track.style.transform = `translateX(${position}px)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (position < 0) {
    position += cardWidth;
    track.style.transform = `translateX(${position}px)`;
  }
});

window.addEventListener("resize", () => {
  position = 0;
  track.style.transform = `translateX(0px)`;
});
