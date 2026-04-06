export default class ButtonTema {
  constructor({ container }) {
    this.container = container;

    this.render();
    this.cacheElements();
    this.addEvents();
  }

  render() {
    this.container.insertAdjacentHTML(
      "beforeend",
      `
      <div class="btnTema">
        <div class="iconTema">
          <img class="iconImg" src="../../img/moon.svg" alt="tema">
        </div>
      </div>
      `
    );
  }

  cacheElements() {
    this.btn = this.container.querySelector(".btnTema");
    this.icon = this.container.querySelector(".iconTema");
    this.img = this.container.querySelector(".iconImg");
  }

  addEvents() {
    this.btn.addEventListener("click", () => {
      this.toggleTheme();
    });
  }

  toggleTheme() {
    this.btn.classList.toggle("btnTemaDark");
    document.body.classList.toggle("dark");

    if (this.btn.classList.contains("btnTemaDark")) {
      this.img.src = "../../img/sun.svg";
    } else {
      this.img.src = "../../img/moon.svg";
    }
  }
}