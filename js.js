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
