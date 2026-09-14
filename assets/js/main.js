// Lottes ditjes en datjes — vanilla JS, geen frameworks.
// 1) Simpel hamburger-menu voor de subtiele navigatie op mobiel.
// 2) Nette fallback voor decoratieve bakkerijfoto's die nog niet zijn
//    toegevoegd: als assets/images/cupcake.jpg, cookies.jpg of cake.jpg
//    ontbreekt, verbergen we de kapotte <img> zodat de pastel
//    illustratie erachter zichtbaar blijft.

document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav-menu');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  var photos = document.querySelectorAll('.decorative-photo');
  photos.forEach(function (img) {
    img.addEventListener('error', function () {
      img.style.display = 'none';
    });
  });
});
