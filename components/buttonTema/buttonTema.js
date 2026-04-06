const btn = document.querySelector("#btnTema");
const icon = document.querySelector("#iconTema");
const img = document.querySelector("#iconImg");

btn.addEventListener("click", () => {
  btn.classList.toggle("btnTemaDark");
});

this.toggleButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    document.body.classList.toggle("dark");
  });
});
