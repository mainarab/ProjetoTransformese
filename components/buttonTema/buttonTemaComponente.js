export default class ButtonTema {
  constructor({ container }) {
    this.container = container;
    this.prefersDark = window.matchMedia("(prefers-color-scheme: dark)"); // observa tema do sistema

    this.render();
    this.cacheElements();
    this.addEvents();
    this.updateIcon();

    // Reage à mudança do tema do sistema
    this.prefersDark.addEventListener("change", (e) => {
      this.applySystemTheme(e.matches);
    });
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
    const isDark = document.body.classList.toggle("dark");
    this.btn.classList.toggle("btnTemaDark");

    // Atualiza ícone
    this.icon.classList.toggle("fa-moon", !isDark);
    this.icon.classList.toggle("fa-sun", isDark);
  }

  updateIcon() {
    // Aplica o tema inicial do sistema
    const isSystemDark = this.prefersDark.matches;
    this.applySystemTheme(isSystemDark);
  }

  applySystemTheme(isDark) {
    if (isDark) {
      document.body.classList.add("dark");
      this.btn.classList.add("btnTemaDark");
      this.icon.classList.remove("fa-moon");
      this.icon.classList.add("fa-sun");
    } else {
      document.body.classList.remove("dark");
      this.btn.classList.remove("btnTemaDark");
      this.icon.classList.remove("fa-sun");
      this.icon.classList.add("fa-moon");
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

