var meuModal = document.getElementById("videoModal");
var fechar = document.getElementsByClassName("close")[0];
var videos = document.querySelectorAll(".sidebar li")[3]; 

videos.onclick = function () {
  meuModal.style.display = "block";
};

fechar.onclick = function () {
  meuModal.style.display = "none";
};

window.onclick = function (e) {
  if (e.target == meuModal) {
    meuModal.style.display = "none";
  }
};
