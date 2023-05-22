var boton = document.getElementById("boton");
var nav = document.getElementById("nav");
var body = document.getElementById("body");

boton.addEventListener("click", function() {
  nav.classList.toggle("dark");
  body.classList.toggle("dark");
});
