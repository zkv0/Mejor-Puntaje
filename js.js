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

/*traer los botones que desplegan el cuesioanrio en moviles*/
// Obtener elementos de los botones
var botones = [
  document.getElementById("boton_cuestioanrio_uno"),
  document.getElementById("boton_cuestioanrio_sociales"),
  document.getElementById("boton_cuestioanrio_natutales"),
  document.getElementById("boton_cuestioanrio_ingles"),
  document.getElementById("boton_cuestioanrio_mate"),
  document.getElementById("boton_cuestioanrio_español")
];

// Obtener elementos de los cuestionarios
var cuestionarios = [
  document.getElementById("cuestionario_todo"),
  document.getElementById("cuestionario_sociales"),
  document.getElementById("cuestionario_naturales"),
  document.getElementById("cuestionario_ingles"),
  document.getElementById("cuestionario_mate"),
  document.getElementById("cuestionario_español")
];

// Agregar funciones de clic para mostrar u ocultar los cuestionarios
for (var i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", function(index) {
    cuestionarios[index].classList.toggle("cuestionario_aparecer");
    botones[index].classList.toggle("boton_rotate");
  }.bind(null, i));
}






/*Traer los botones de los videos */
