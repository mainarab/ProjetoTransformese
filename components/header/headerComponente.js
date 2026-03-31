export default class Header {
  constructor({ container }) {
    this.container = container;
    this.render();
    this.cacheElements();
    this.addEventListeners();
  }

  render() {
    this.container.insertAdjacentHTML(
      "afterbegin",
      `
      <header class="header">
        <div class="headerContainer">
          <i class="fa-solid fa-bars iconHeader" id="menuHamburguer"></i>

          <img class="logo" src="../../img/logo-site.svg" alt="Logo" />

          <nav class="menu" id="menuDesktop">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="../../pages/login/page.html">Controle de gastos</a></li>
              <li><a href="./pages/sobre-nos/page.html">Sobre nós</a></li>
              <li><a href="#">Missão</a></li>
              <li><a href="./pages/sac/page.html">SAC</a></li>
            </ul>
          </nav>

          <div class="icons">
            <a href="../../pages/login/page.html">
              <i class="fa-regular fa-user iconHeader"></i>
            </a>
            <button class="toggleDark">
              <i class="fa-solid fa-moon iconHeader"></i>
            </button>
          </div>
        </div>
      </header>

      <div class="containerMobile">
        <div id="menuClose">
          <i class="fa-solid fa-x iconHeader"></i>
        </div>

        <nav class="menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="../../pages/login/page.html">Controle de gastos</a></li>
            <li><a href="./pages/sobre-nos/page.html">Sobre nós</a></li>
            <li><a href="#">Missão</a></li>
            <li><a href="./pages/sac/page.html">SAC</a></li>
          </ul>

          <div class="IconsMobile">
            <ul>
              <li>
                <a class="conta" href="../../pages/login/page.html">
                  <i class="fa-regular fa-user iconHeader"></i>Adicionar conta
                </a>
              </li>
            </ul>

            <button class="toggleDark">
              <i class="fa-solid fa-moon iconHeader"></i>
            </button>
          </div>
        </nav>
      </div>
      `
    );
  }

  cacheElements() {
    this.menuHamburguer = this.container.querySelector("#menuHamburguer");
    this.menuClose = this.container.querySelector("#menuClose i"); // pegar o ícone diretamente
    this.containerMobile = this.container.querySelector(".containerMobile");
    this.toggleButtons = this.container.querySelectorAll(".toggleDark");
  }

  addEventListeners() {
    // Abrir menu
    this.menuHamburguer.addEventListener("click", (e) => {
      e.stopPropagation();
      this.containerMobile.classList.add("ativo");
      gsap.fromTo(
        this.containerMobile,
        { x: "-100%" },
        { x: "0%", duration: 0.5, ease: "power3.out" }
      );
      document.body.style.overflow = "hidden";
    });

    // Fechar menu com X
    this.menuClose.addEventListener("click", (e) => {
      e.stopPropagation(); // impede clique do X de acionar "clique fora"
      this.closeMenu();
    });

    // Fechar menu clicando fora
    document.addEventListener("click", (e) => {
      if (
        this.containerMobile.classList.contains("ativo") &&
        !this.containerMobile.contains(e.target) &&
        e.target !== this.menuHamburguer
      ) {
        this.closeMenu();
      }
    });

    // Alternar tema
    this.toggleButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        document.body.classList.toggle("dark");
      });
    });
  }

  closeMenu() {
    gsap.to(this.containerMobile, {
      x: "-100%",
      duration: 0.5,
      ease: "power3.in",
      onComplete: () => {
        this.containerMobile.classList.remove("ativo");
        document.body.style.overflow = "auto";
      },
    });
  }
}