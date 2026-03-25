const elements = document.querySelectorAll(".problema, .card");
const observer = new IntersectionObserver(
  (entries) => {
    for (let i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        entries[i].target.classList.add("show");
      } else {
        entries[i].target.classList.remove("show");
      }
    }
  },
  { threshold: 0.25 },
);

for (let i = 0; i < elements.length; i++) {
  observer.observe(elements[i]);
}


document.querySelector("#toggle-dark").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("active");
});
