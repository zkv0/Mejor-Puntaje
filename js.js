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



var prevScrollPos = window.pageYOffset;
var otronavmasElements = document.getElementsByClassName("otronavmas");

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    for (var i = 0; i < otronavmasElements.length; i++) {
        var otronavmasElement = otronavmasElements[i];

        if (prevScrollPos > currentScrollPos) {
            // Scroll hacia arriba
            otronavmasElement.style.top = "0";
        } else {
            // Scroll hacia abajo
            otronavmasElement.style.top = "-" + otronavmasElement.offsetHeight + "px";
        }
    }

    prevScrollPos = currentScrollPos;
};





document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("button_menu");
    var nav = document.getElementById("nav");
    var closeButton = document.getElementById("close_button");
    var relleno = document.querySelector(".rellenoimpedido");

    button.addEventListener("click", function() {
        nav.style.display = "block";
        closeButton.style.display = "flex";
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



//abrir ventana de sociales
var boton_acsociales = document.getElementById("boton_acsociales");
var cerrar_csociales = document.getElementById("cerrar_csociales");
var div_csociales = document.getElementById("div_csociales");

boton_acsociales.addEventListener("click", function(){
  div_csociales.classList.toggle("volador_visible")
});

cerrar_csociales.addEventListener("click", function(){
  div_csociales.classList.toggle("volador_visible");
});


//abrir ventana de naturales
var boton_abrir_naturales = document.getElementById("boton_abrir_naturales");
var cerrar_cnaturales = document.getElementById("cerrar_cnaturales");
var div_cnaturales = document.getElementById("div_cnaturales");

boton_abrir_naturales.addEventListener("click", function(){
  div_cnaturales.classList.toggle("volador_visible")
});

cerrar_cnaturales.addEventListener("click", function(){
  div_cnaturales.classList.toggle("volador_visible");
});



//abrir ventana de ingles
var boton_abrir_ig = document.getElementById("boton_abrir_ig");
var cerrar_ig = document.getElementById("cerrar_ig");
var div_ig = document.getElementById("div_ig");

boton_abrir_ig.addEventListener("click", function(){
  div_ig.classList.toggle("volador_visible")
});

cerrar_ig.addEventListener("click", function(){
  div_ig.classList.toggle("volador_visible");
});


//abrir ventana de matematicas
var abrir_mate = document.getElementById("abrir_mate");
var cerrar_mate = document.getElementById("cerrar_mate");
var div_mate = document.getElementById("div_mate");

abrir_mate.addEventListener("click", function(){
  div_mate.classList.toggle("volador_visible")
});

cerrar_mate.addEventListener("click", function(){
  div_mate.classList.toggle("volador_visible");
});


//abrir ventana de español
var boton_abrir_español = document.getElementById("boton_abrir_español");
var cerrar_español = document.getElementById("cerrar_español");
var div_lecritica = document.getElementById("div_lecritica");

boton_abrir_español.addEventListener("click", function(){
  div_lecritica.classList.toggle("volador_visible")
});

cerrar_español.addEventListener("click", function(){
  div_lecritica.classList.toggle("volador_visible");
});




//copiar texto
var btnCopy = document.getElementById("btn-copy");
    btnCopy.addEventListener("click", function() {
      var myInput = document.getElementById("myInput");
      var textToCopy = myInput.value;

      navigator.clipboard.writeText(textToCopy)
        .then(function() {
          alert("Texto copiado: " + textToCopy);
        })
        .catch(function(err) {
          console.error("Error al copiar el texto: ", err);
        });
    });



//luz de noche 
const overlay = document.getElementById('overlay');
const luzNocturnaButtons = document.querySelectorAll('.luz-nocturna');

luzNocturnaButtons.forEach(button => {
  button.addEventListener('click', () => {
    overlay.classList.toggle('overlay');
  });
});

//pantalla completa
var fullscreenButton = document.querySelector('.full-screen');

fullscreenButton.addEventListener('click', toggleFullScreen);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

//boton compartir activar 
var buttonsshare = document.getElementsByClassName("compartir");
    var divCompartir = document.getElementById("div_compartir");

    for (var i = 0; i < buttonsshare.length; i++) {
      buttonsshare[i].addEventListener("click", function() {
        divCompartir.classList.toggle("div_compartir_visible");
      });
    }

    // Cerrar compartir
    var btnsharex = document.getElementById("btn-share-x");

    btnsharex.addEventListener("click", function() {
      divCompartir.classList.toggle("div_compartir_visible");
    });


//compartir whtpp
var btnSharew = document.getElementById("btn-share-w");
    btnSharew.addEventListener("click", function() {
      var urlToSharew = "http://aprendeicfes.online/";  // URL que deseas compartir
      var encodedUrlw = encodeURIComponent(urlToSharew);
      var whatsappUrlw = "https://api.whatsapp.com/send?text=" + encodedUrlw;

      window.open(whatsappUrlw);
    });
//Compartir twitter
var btnSharet = document.getElementById("btn-share-t");
    btnSharet.addEventListener("click", function() {
      var urlToSharet = "http://aprendeicfes.online/";  // URL que deseas compartir
      var encodedUrlt = encodeURIComponent(urlToSharet);
      var twitterUrlt = "https://twitter.com/intent/tweet?url=" + encodedUrlt;

      window.open(twitterUrlt);
    });
//facebook
var btnSharef = document.getElementById("btn-share-f");
    btnSharef.addEventListener("click", function() {
      var urlToSharef = "http://aprendeicfes.online/";  // URL que deseas compartir
      var facebookUrlf = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(urlToSharef);

      window.open(facebookUrlf, "_blank");
    });










