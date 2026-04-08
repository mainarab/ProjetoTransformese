export default class Header {
  constructor({ container }) {
    this.container = container;
    this.prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    this.render();
    this.cacheElements();
    this.addEventListeners();
    this.applySystemTheme(this.prefersDark.matches);
    this.prefersDark.addEventListener("change", (e) => {
      this.applySystemTheme(e.matches);
    });
  }

  render() {
    this.container.insertAdjacentHTML(
      "afterbegin",
      `
      <header class="header">
        <div class="headerContainer">
          <i class="fa-solid fa-bars iconHeader" id="menuHamburguer"></i>
          <img class="logo" src="" alt="Logo" />

          <nav class="menu" id="menuDesktop">
            <ul>
              <li><a href="/ProjetoTransformese/index.html">Home</a></li>
              <li><a href="/ProjetoTransformese/pages/login/page.html">Controle de gastos</a></li>
              <li><a href="/ProjetoTransformese/pages/sobre-nos/page.html">Sobre nós</a></li>
              <li><a href="#">Missão</a></li>
              <li><a href="/ProjetoTransformese/pages/sac/page.html">SAC</a></li>
            </ul>
          </nav>

          <div class="icons">
            <a href="/ProjetoTransformese/pages/login/page.html">
              <i class="fa-regular fa-user iconHeader"></i>
            </a>

            <div class="btnTema">
              <div class="iconTema">
                <i class="fa-solid fa-moon iconBtnTema"></i>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="containerMobile">
        <div id="menuClose">
          <i class="fa-solid fa-x iconHeader"></i>
        </div>

        <nav class="menu">
          <ul>
            <li><a href="/ProjetoTransformese/index.html">Home</a></li>
            <li><a href="/ProjetoTransformese/pages/login/page.html">Controle de gastos</a></li>
            <li><a href="/ProjetoTransformese/pages/sobre-nos/page.html">Sobre nós</a></li>
            <li><a href="#">Missão</a></li>
            <li><a href="/ProjetoTransformese/pages/sac/page.html">SAC</a></li>
          </ul>

          <div class="IconsMobile">
            <ul>
              <li>
                <a class="conta" href="/ProjetoTransformese/pages/login/page.html">
                  <i class="fa-regular fa-user iconHeader"></i>Adicionar conta
                </a>
              </li>
            </ul>

            <div class="btnTema">
              <div class="iconTema">
                <i class="fa-solid fa-moon iconBtnTema"></i>
              </div>
            </div>
          </div>
        </nav>
      </div>
      `
    );
  }

  cacheElements() {
    this.menuHamburguer = this.container.querySelector("#menuHamburguer");
    this.menuClose = this.container.querySelector("#menuClose i");
    this.containerMobile = this.container.querySelector(".containerMobile");
    this.toggleButtons = this.container.querySelectorAll(".btnTema");
  }

  addEventListeners() {
    // Abrir menu mobile
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

    // Fechar menu mobile
    this.menuClose.addEventListener("click", (e) => {
      e.stopPropagation();
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

    this.toggleButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.toggleTheme();
      });
    });
  }

  toggleTheme() {
    const isDark = document.body.classList.toggle("dark");
    this.updateIcons(isDark);
  }

  updateIcons(isDark = document.body.classList.contains("dark")) {
    this.toggleButtons.forEach((btn) => {
      const icon = btn.querySelector(".iconBtnTema");
      btn.classList.toggle("btnTemaDark", isDark);
      icon.classList.toggle("fa-moon", !isDark);
      icon.classList.toggle("fa-sun", isDark);
    });
  }

  applySystemTheme(isDark) {
    // Só aplica se o usuário ainda não clicou para alternar manualmente
    document.body.classList.toggle("dark", isDark);
    this.updateIcons(isDark);
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