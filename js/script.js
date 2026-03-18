const elements = document.querySelectorAll(".problema, .card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.25,
  },
);

elements.forEach((el) => observer.observe(el));
const darkBtn = document.querySelector("#toggle-dark");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
