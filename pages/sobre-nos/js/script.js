const toggle = document.getElementById("menuToggle");
const menuMobile = document.getElementById("menuMobile");

toggle.addEventListener("click", () => {
  const isOpen = menuMobile.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", isOpen);
});

const darkBtn = document.getElementById("DarkMuda");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

darkBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
