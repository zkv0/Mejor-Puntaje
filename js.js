var boton = document.getElementById("boton");
var nav = document.getElementById("nav");
var body = document.getElementById("body");







// Verificar si hay un estado guardado en el almacenamiento local
var botonPresionado = localStorage.getItem("botonPresionado");
if (botonPresionado === "true") {
  boton.classList.add("pressed");
}



boton.addEventListener("click", function() {
  nav.classList.toggle("dark");
  body.classList.toggle("dark");
});





if (boton.classList.contains("pressed")) {
    localStorage.setItem("botonPresionado", "true");
  } else {
    localStorage.removeItem("botonPresionado");
  };




//Cambiar texto de span modos
const span = boton.querySelector('span_modos');

boton.addEventListener('click', function() {
  if (span_modos.textContent === 'Cambiar a modo oscuro') {
    span_modos.textContent = 'Cambiar a modo claro';
  } else {
    span_modos.textContent = 'Cambiar a modo oscuro';
  }
});



// Redirigir a otra página si se detecta un dispositivo móvil o un ancho de pantalla menor a 667px
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 667) {
  window.location.href = 'movil/mv.html';
}
