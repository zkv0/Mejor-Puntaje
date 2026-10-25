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




// Función para configurar los botones dentro del modal de compartir
function setupShareButtons() {
  const btnCopy = document.getElementById("btn-copy");
  if (btnCopy) {
    btnCopy.addEventListener("click", function () {
      const myInput = document.getElementById("myInput");
      const textToCopy = myInput.value;
      navigator.clipboard.writeText(textToCopy)
        .then(function () {
          alert("Texto copiado: " + textToCopy);
        })
        .catch(function (err) {
          console.error("Error al copiar el texto: ", err);
        });
    });
  }

  const btnSharew = document.getElementById("btn-share-w");
  if (btnSharew) {
    btnSharew.addEventListener("click", function () {
      const urlToShare = encodeURIComponent("https://zkv0.github.io/aprende/");
      window.open("https://api.whatsapp.com/send?text=" + urlToShare);
    });
  }

  const btnSharet = document.getElementById("btn-share-t");
  if (btnSharet) {
    btnSharet.addEventListener("click", function () {
      const urlToShare = encodeURIComponent("https://zkv0.github.io/aprende/");
      window.open("https://twitter.com/intent/tweet?url=" + urlToShare);
    });
  }

  const btnSharef = document.getElementById("btn-share-f");
  if (btnSharef) {
    btnSharef.addEventListener("click", function () {
      const urlToShare = encodeURIComponent("https://zkv0.github.io/aprende/");
      window.open("https://www.facebook.com/sharer/sharer.php?u=" + urlToShare, "_blank");
    });
  }

  const btnShareX = document.getElementById("btn-share-x");
  if (btnShareX) {
    btnShareX.addEventListener("click", function () {
      const modal = document.getElementById("div_compartir");
      if (modal) modal.remove();
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const botonesCompartir = document.querySelectorAll(".compartir");

  botonesCompartir.forEach(function (boton) {
    boton.addEventListener("click", function () {
      const codigoHTML = `
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
              <a href="imgs/qrrrrr.svg" download="Qr-Aprende" class="btn-sharessss" style="background: rgb(0, 0, 0);"><img src="imgs/codigo-qr.svg" alt=""></a>
            </div>
          </div>
        </div>
      `;

      const existingModal = document.getElementById("div_compartir");
      if (existingModal) existingModal.remove();

      const codigoDiv = document.createElement("div");
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
    { tituloId: "h1_separador_secmaspaginas", contenidoId: "maspaginasdiv" }
  ];

  secciones.forEach(seccion => {
    const titulo = document.getElementById(seccion.tituloId);
    const contenido = document.getElementById(seccion.contenidoId);

    if (titulo && contenido) {
      titulo.addEventListener("click", function () {
        contenido.classList.toggle("seccion-oculta");
        const boton = titulo.querySelector(".section-toggle");
        if (boton) {
          boton.setAttribute("aria-expanded", String(!contenido.classList.contains("seccion-oculta")));
        }
      });
    }
  });
});











