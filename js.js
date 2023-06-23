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
/*traer los botones que desplegan el cuesioanrio en moviles*/
var boton_cuestioanrio_uno = document.getElementById("boton_cuestioanrio_uno");
var boton_cuestioanrio_sociales = document.getElementById("boton_cuestioanrio_sociales");
var boton_cuestioanrio_natutales = document.getElementById("boton_cuestioanrio_natutales");
var boton_cuestioanrio_ingles = document.getElementById("boton_cuestioanrio_ingles");
var boton_cuestioanrio_mate = document.getElementById("boton_cuestioanrio_mate");
var boton_cuestioanrio_español = document.getElementById("boton_cuestioanrio_español");

 /* Traer los cuestionarios ocultos*/

var cuestionario_todo = document.getElementById("cuestionario_todo");
var cuestionario_sociales = document.getElementById("cuestionario_sociales");
var cuestionario_naturales = document.getElementById("cuestionario_naturales");
var cuestionario_ingles = document.getElementById("cuestionario_ingles");
var cuestionario_mate = document.getElementById("cuestionario_mate");
var cuestionario_español = document.getElementById("cuestionario_español");

/*Añadir las funciones de click haga aparecer el cuestioanrio*/

boton_cuestioanrio_uno.addEventListener("click", function(){  
  cuestionario_todo.classList.toggle("cuestionario_aparecer");  
  boton_cuestioanrio_uno.classList.toggle("boton_rotate")
});

boton_cuestioanrio_sociales.addEventListener("click", function(){  
  cuestionario_sociales.classList.toggle("cuestionario_aparecer");  
  boton_cuestioanrio_sociales.classList.toggle("boton_rotate")
});

boton_cuestioanrio_naturales.addEventListener("click", function(){  
  cuestionario_naturales.classList.toggle("cuestionario_aparecer");  
  boton_cuestioanrio_naturales.classList.toggle("boton_rotate")
});

boton_cuestioanrio_ingles.addEventListener("click", function(){  
  cuestionario_ingles.classList.toggle("cuestionario_aparecer");  
  boton_cuestioanrio_ingles.classList.toggle("boton_rotate")
});

boton_cuestioanrio_mate.addEventListener("click", function(){  
  cuestionario_mate.classList.toggle("cuestionario_aparecer");  
  boton_cuestioanrio_mate.classList.toggle("boton_rotate")
});

boton_cuestioanrio_español.addEventListener("click", function(){  
  cuestionario_español.classList.toggle("cuestionario_aparecer");  
  boton_cuestioanrio_español.classList.toggle("boton_rotate")
});




//Botones
var Conocimiento_Geográfico = document.getElementById("Conocimiento_Geográfico"),
Conceptos_de_Geografía = document.getElementById("Conceptos_de_Geografía");


//span de videos
var Conocimiento_Geográfico_video = document.getElementById("Conocimiento_Geográfico_video"),
Conceptos_de_Geografía_video = document.getElementById("Conceptos_de_Geografía_video");

//funciones

Conocimiento_Geográfico.addEventListener("click", function(){  
  Conocimiento_Geográfico_video.classList.toggle ("span_video");
  document.getElementById("Conocimiento_Geográfico_video").innerHTML = `<iframe class="video"  src="https://www.youtube-nocookie.com/embed/EuVEhJog2Vc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
});

Conceptos_de_Geografía.addEventListener("click", function () {
  Conceptos_de_Geografía_video.classList.toggle ("span_video");
  document.getElementById("Conceptos_de_Geografía_video").innerHTML = `<iframe class="video"  src="https://www.youtube-nocookie.com/embed/w19v7E33YgQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
});

