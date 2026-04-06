export default class ButtonTema {
  constructor({ container }) {
    this.container = container;
    this.render();
    this.cacheElements();
    this.addEvents();

    this.updateIcon();
  }

  render() {
    this.container.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="btnTema">
        <div class="iconTema">
          <i class="fa-solid fa-moon iconBtnTema"></i>
        </div>
      </div>
      `
    );
  }

  cacheElements() {
    this.btn = this.container.querySelector(".btnTema");
this.btn.offsetHeight; // força o reflow
    this.icon = this.container.querySelector(".iconBtnTema");
  }

  addEvents() {
    this.btn.addEventListener("click", () => {
      this.toggleTheme();
    });
  }

  toggleTheme() {
    this.btn.classList.toggle("btnTemaDark");
    document.body.classList.toggle("dark");

    // Troca o ícone
    if (this.btn.classList.contains("btnTemaDark")) {
      this.icon.classList.remove("fa-moon");
      this.icon.classList.add("fa-sun");
    } else {
      this.icon.classList.remove("fa-sun");
      this.icon.classList.add("fa-moon");
    }
  }

  updateIcon() {
    // Ajusta o ícone ao carregar, caso o body já esteja em dark mode
    if (document.body.classList.contains("dark")) {
      this.icon.classList.remove("fa-moon");
      this.icon.classList.add("fa-sun");
      this.btn.classList.add("btnTemaDark");
    } else {
      this.icon.classList.remove("fa-sun");
      this.icon.classList.add("fa-moon");
      this.btn.classList.remove("btnTemaDark");
    }
  }
}

//Precisa adicionar esses links para ele funcionar, o import é no css da página
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
// @import url(../buttonTema/buttonTema.css);

//no js coloque:
//import ButtonTema from "../../components/buttonTema/buttonTemaComponente.js"; new ButtonTema({ container: document.querySelector(".btnTemaComp") }); </script>

//e adicione no lugar onde quer que o botão apareça:
// <div class="btnTemaComp"></div>

