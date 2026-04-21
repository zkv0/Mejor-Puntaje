var lastScrollTop = 0;
var supernavmega = document.getElementById("supernavmega");

window.addEventListener("scroll", function () {
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

window.onscroll = function () {
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




/*traer los botones que desplegan el cuesioanrio en moviles*/
// Obtener elementos de los botones
/*traer los botones que desplegan el cuesioanrio en moviles*/
var boton_cuestioanrio_uno = document.getElementById("boton_cuestioanrio_uno");
var boton_cuestioanrio_sociales = document.getElementById("boton_cuestioanrio_sociales");
var boton_cuestioanrio_naturales = document.getElementById("boton_cuestioanrio_naturales");
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
if (boton_cuestioanrio_uno && cuestionario_todo) {
  boton_cuestioanrio_uno.addEventListener("click", function () {
    cuestionario_todo.classList.toggle("cuestionario_aparecer");
    boton_cuestioanrio_uno.classList.toggle("boton_rotate")
  });
}

if (boton_cuestioanrio_sociales && cuestionario_sociales) {
  boton_cuestioanrio_sociales.addEventListener("click", function () {
    cuestionario_sociales.classList.toggle("cuestionario_aparecer");
    boton_cuestioanrio_sociales.classList.toggle("boton_rotate")
  });
}

if (boton_cuestioanrio_naturales && cuestionario_naturales) {
  boton_cuestioanrio_naturales.addEventListener("click", function () {
    cuestionario_naturales.classList.toggle("cuestionario_aparecer");
    boton_cuestioanrio_naturales.classList.toggle("boton_rotate")
  });
}

if (boton_cuestioanrio_ingles && cuestionario_ingles) {
  boton_cuestioanrio_ingles.addEventListener("click", function () {
    cuestionario_ingles.classList.toggle("cuestionario_aparecer");
    boton_cuestioanrio_ingles.classList.toggle("boton_rotate")
  });
}

if (boton_cuestioanrio_mate && cuestionario_mate) {
  boton_cuestioanrio_mate.addEventListener("click", function () {
    cuestionario_mate.classList.toggle("cuestionario_aparecer");
    boton_cuestioanrio_mate.classList.toggle("boton_rotate")
  });
}

if (boton_cuestioanrio_español && cuestionario_español) {
  boton_cuestioanrio_español.addEventListener("click", function () {
    cuestionario_español.classList.toggle("cuestionario_aparecer");
    boton_cuestioanrio_español.classList.toggle("boton_rotate")
  });
}


//copiar texto
var btnCopy = document.getElementById("btn-copy");
btnCopy.addEventListener("click", function () {
  var myInput = document.getElementById("myInput");
  var textToCopy = myInput.value;

  navigator.clipboard.writeText(textToCopy)
    .then(function () {
      alert("Texto copiado: " + textToCopy);
    })
    .catch(function (err) {
      console.error("Error al copiar el texto: ", err);
    });
}//compartir whtpp
function setupShareButtons() {
  var btnSharew = document.getElementById("btn-share-w");
  if (btnSharew) {
    btnSharew.addEventListener("click", function () {
      var urlToSharew = "https://zkv0.github.io/aprende/";
      var encodedUrlw = encodeURIComponent(urlToSharew);
      var whatsappUrlw = "https://api.whatsapp.com/send?text=" + encodedUrlw;
      window.open(whatsappUrlw);
    });
  }

  var btnSharet = document.getElementById("btn-share-t");
  if (btnSharet) {
    btnSharet.addEventListener("click", function () {
      var urlToSharet = "https://zkv0.github.io/aprende/";
      var encodedUrlt = encodeURIComponent(urlToSharet);
      var twitterUrlt = "https://twitter.com/intent/tweet?url=" + encodedUrlt;
      window.open(twitterUrlt);
    });
  }

  var btnSharef = document.getElementById("btn-share-f");
  if (btnSharef) {
    btnSharef.addEventListener("click", function () {
      var urlToSharef = "https://zkv0.github.io/aprende/";
      var facebookUrlf = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(urlToSharef);
      window.open(facebookUrlf, "_blank");
    });
  }

  var btnShareX = document.getElementById("btn-share-x");
  if (btnShareX) {
    btnShareX.addEventListener("click", function () {
      var modal = document.getElementById("div_compartir");
      if (modal) modal.remove();
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var botonesCompartir = document.querySelectorAll(".compartir");

  botonesCompartir.forEach(function (boton) {
    boton.addEventListener("click", function () {
      var codigoHTML = `
        <div class="div_compartir" id="div_compartir">
          <div class="compartir_contenido">
            <div class="cerrar-share">
              <button id="btn-share-x"><img src="imgs/x.svg" alt="cerrar" title="cerrar"></button>
            </div>
            <div class="arriba_compartir">
              <img src="imgs/qrrrrr.svg" alt="">
              <div class="link">
                <p class="p-link">https://zkv0.github.io/aprende/</p>
                <input type="text" value="https://zkv0.github.io/aprende/" id="myInput" readonly style="display: none;">
                <button class="btn-copy" id="btn-copy">Copiar</button>
              </div>
            </div>
            <div class="abajo_compartir">
              <button id="btn-share-w" class="btn-sharessss" style="background: rgb(0, 212, 0);"><img src="imgs/whatsapp.svg" alt=""></button>
              <button id="btn-share-t" class="btn-sharessss" style="background: rgb(31, 128, 255);"><img src="imgs/twitter.svg" alt=""></button>
              <button id="btn-share-f" class="btn-sharessss" style="background: rgb(0, 0, 255);"><img src="imgs/facebook.svg" alt=""></button>
              <a href="imgs/qrrrrr.svg" download="Qr-Aprende" id="btn-share-f" class="btn-sharessss" style="background: rgb(0, 0, 0);"><img src="imgs/codigo-qr.svg" alt=""></a>
            </div>
          </div>
        </div>
      `;

      var existingModal = document.getElementById("div_compartir");
      if (existingModal) existingModal.remove();

      var codigoDiv = document.createElement("div");
      codigoDiv.innerHTML = codigoHTML;
      document.body.appendChild(codigoDiv);
      
      setupShareButtons();
    });
  });
});



/* Función para ocultar y mostrar secciones tocando el título */
document.addEventListener("DOMContentLoaded", function () {
  const secciones = [
    { tituloId: "h1_separador_secmaterias", contenidoId: "materias_div" },
    { tituloId: "h1_separador_seccuestionarios", contenidoId: "cuestinariosdiv" },
    { tituloId: "h1_separador_secmaspaginas", contenidoId: "maspaginasdiv" }
  ];

  secciones.forEach(seccion => {
    const titulo = document.getElementById(seccion.tituloId);
    const contenido = document.getElementById(seccion.contenidoId);

    if (titulo && contenido) {
      titulo.addEventListener("click", function () {
        contenido.classList.toggle("seccion-oculta");
      });
    }
  });
});











