export default class Footer {
  constructor({ container }) {
    this.container = container;
    this.render();
  }

  render() {
    this.container.insertAdjacentHTML(
      "beforeend",
      `
      <div class="cm-footer">
        <footer class="footer">

          <div class="footer-contact"> 
            <h3>Contato</h3> 

            <div class="contato-lado">   
              <div class="contato-link">
                <img class="phone" src="" alt="celular">
                <p>(11) 9999-9999</p>
              </div>

              <div class="contato-link">
                <img class="mail" src="" alt="celular">
                <p>contato@controlmoney.com.br</p>
              </div>
            </div>
          </div>

          <div class="redes">
            <h2 class="h2Redes">Redes Sociais</h2>
            <nav aria-label="Redes Sociais">
              <ul>
                <li><a href="#"><img class="insta" src="" alt="Instagram"></a></li>
                <li><a href="#"><img class="facebook" src="" alt="Facebook"></a></li>
                <li><a href="#"><img class="x" src="" alt=""></a></li>
                <li><a href="#"><img class="youtube" src="" alt="Youtube"></a></li>
              </ul>
            </nav>
          </div>

          <div class="outros">
            <nav>
              <ul>
                <li><a href="/ProjetoTransformese/pages/login/page.html">Controle de gastos</a></li>
                <li><a href="/ProjetoTransformese/pages/sobre-nos/page.html">Sobre nós</a></li>
                <li><a href="#">Missão</a></li>
                <li><a href="pages/sac/page.html">SAC</a></li>
              </ul>
            </nav>
          </div>

        </footer>
      </div>
      `
    );
  }
}