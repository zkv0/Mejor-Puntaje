var lastScrollTop = 0;
var supernavmega = document.getElementById("supernavmega");

window.addEventListener("scroll", function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var windowWidth = window.innerWidth;

  if (windowWidth > 600) {
    if (scrollTop > lastScrollTop) {
      // Desplazamiento hacia abajo: Ocultar la barra de navegación
      supernavmega.style.transform = "translateY(-100%)";
      supernavmega.style.transition = "transform 0.3s ease-out";
    } else {
      // Desplazamiento hacia arriba: Mostrar la barra de navegación
      supernavmega.style.transform = "translateY(0)";
      supernavmega.style.transition = "transform 0.3s ease-out";
    }
  } else {
    if (scrollTop > lastScrollTop) {
      // Desplazamiento hacia abajo: Ocultar la barra de navegación
      supernavmega.style.transform = "translateY(100%)";
      supernavmega.style.transition = "transform 0.3s ease-out";
    } else {
      // Desplazamiento hacia arriba: Mostrar la barra de navegación
      supernavmega.style.transform = "translateY(0)";
      supernavmega.style.transition = "transform 0.3s ease-out";
    }
  }

  lastScrollTop = scrollTop;
});


document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("button_menu");
    var nav = document.getElementById("nav");
    var closeButton = document.getElementById("close_button");
    var relleno = document.querySelector(".rellenoimpedido");

    button.addEventListener("click", function() {
        nav.style.display = "block";
        closeButton.style.display = "block";
        relleno.style.display = "block";
    });

    closeButton.addEventListener("click", function() {
        nav.style.display = "none";
        closeButton.style.display = "none";
        relleno.style.display = "none";
    });
});






