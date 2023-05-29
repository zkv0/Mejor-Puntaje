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


var bt_acercade = document.getElementById("bt-acercade");
var bt_acercade_x = document.getElementById("bt-acercade-x");
var div_acercade = document.getElementById("div-acercade");

bt_acercade.addEventListener("click", function(){
  if (div_acercade.classList.contains("ocultar")) {
    div_acercade.classList.remove("ocultar");
    div_acercade.classList.add("mostrar");
    setTimeout(function() {
      div_acercade.style.display = "block";
    }, 10);
  }
  else {
    div_acercade.classList.add("mostrar");
    setTimeout(function() {
      div_acercade.style.display = "block";
    }, 10);
  }
});


bt_acercade_x.addEventListener("click", function(){
  if (div_acercade.classList.contains("mostrar")) {
    div_acercade.classList.remove("mostrar");
    div_acercade.classList.add("ocultar");
    setTimeout(function() {
      div_acercade.style.display = "none";
    }, 250);
  }
  else {
    div_acercade.classList.add("ocultar");
    setTimeout(function() {
      div_acercade.style.display = "none";
    }, 250);
  }
});
