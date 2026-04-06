const toggleThemeButton = document.getElementById('toggle-theme');
const imgModo = document.getElementById('img-modo');

toggleThemeButton.addEventListener('click', (e) => {
  e.stopPropagation();
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    imgModo.src = '../../img/sol.svg';
  } else {
    imgModo.src = '../../img/modoEscuro.svg';
  }
});

