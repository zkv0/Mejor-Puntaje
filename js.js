var lastScrollTop = 0;
var supernavmega = document.getElementById("supernavmega");

window.addEventListener("scroll", function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Desplazamiento hacia abajo: Ocultar la barra de navegación
    supernavmega.style.transform = "translateY(-100%)";
    supernavmega.style.transition = "transform 0.3s ease-out";
  } else {
    // Desplazamiento hacia arriba: Mostrar la barra de navegación
    supernavmega.style.transform = "translateY(0)";
    supernavmega.style.transition = "transform 0.3s ease-out";
  }

  lastScrollTop = scrollTop;
});





