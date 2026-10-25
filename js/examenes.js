(function () {
  "use strict";

  const EXAMENES = {
    "sociales.html": {
      materia: "Competencias Ciudadanas",
      enlaces: [
        ["Cuadernillo Sociales y Ciudadanas", "https://www.mediafire.com/file/jtuutrbhx4ln3le/Cuadernillo_de_preguntas_Saber-11-_Sociales-y-ciudadanas.pdf/file"],
        ["Sociales 11", "https://www.mediafire.com/file/ir7zdcjxue41i9e/SOCIALES_11.pdf/file"],
        ["Ciencias Sociales 2010", "https://www.mediafire.com/file/vt5ubn5roub4bzo/Sociales2010.pdf/file"],
        ["Ciencias Sociales 2009", "https://www.mediafire.com/file/lriha3sqj1nvcv6/Sociales2009.pdf/file"],
        ["Violencia y Sociedad 2010", "https://www.mediafire.com/file/b94ttt955w0b725/ViolenciaySociedad2010.pdf/file"],
        ["Geografía", "https://www.mediafire.com/file/xmucjw9s7yuiv28/Geografia.pdf/file"],
        ["Historia", "https://www.mediafire.com/file/rya96keqbkpdr4h/Historia_%255BBanco_de_preguntas_ICFES%255D.pdf/file"]
      ]
    },
    "naturales.html": {
      materia: "Ciencias Naturales",
      enlaces: [
        ["Cuadernillo Ciencias Naturales", "https://www.mediafire.com/file/6emnzf0jwexgq4x/Cuadernillo_de-preguntas-Saber-11-ciencias-naturales.pdf/file"],
        ["Medio Ambiente 2010", "https://www.mediafire.com/file/wy0ajcq3jhq1aj5/MedioAmbiente2010.pdf/file"],
        ["Biología 2010", "https://www.mediafire.com/file/4bn0xm7nihlc6gh/Biologia2010.pdf/file"],
        ["Biología 2009", "https://www.mediafire.com/file/knuhr3r69eri6vr/Biologia2009.pdf/file"],
        ["Profundización Biología 2009", "https://www.mediafire.com/file/036qui34t5hs6th/Profundizacion_Biologia_%255BBanco_de_preguntas_ICFES%255D.pdf/file"],
        ["Física 2010", "https://www.mediafire.com/file/1hc1fa7s67o14bv/Fisica_2010.pdf/file"],
        ["Física 2009", "https://www.mediafire.com/file/gfw1izu4ur9ngty/Fisica2009.pdf/file"],
        ["Química 2010", "https://www.mediafire.com/file/1h0rlqlk9n77yvn/Qu%25C3%25ADmica2010.pdf/file"],
        ["Química 2009", "https://www.mediafire.com/file/6evo1ytpk5c8g1q/quimica2009.pdf/file"]
      ]
    },
    "ingles.html": {
      materia: "Inglés",
      enlaces: [
        ["Cuadernillo Inglés 2018", "https://www.mediafire.com/file/m2k1i8u09ho1b99/Cuadernillo-de-preguntas-Saber-11-ingles-2018.pdf/file"],
        ["Inglés 2010", "https://www.mediafire.com/file/piffqbtprkytcnj/Ingl%25C3%25A9s2010.pdf/file"],
        ["Inglés 2009", "https://www.mediafire.com/file/bipj6kl016fdf9v/ingles2009.pdf/file"]
      ]
    },
    "matematicas.html": {
      materia: "Matemáticas",
      enlaces: [
        ["Cuadernillo Matemáticas", "https://www.mediafire.com/file/g72cpbadu3sc5ny/Cuadernillo_de-preguntas-Saber-11-matematicas.pdf/file"],
        ["Matemáticas 2010", "https://www.mediafire.com/file/nt42oa5tuu2rpk0/Matem%25C3%25A1ticas2010.pdf/file"],
        ["Matemáticas 2009", "https://www.mediafire.com/file/ljephgzjpni72su/matematicas2009.pdf/file"]
      ]
    },
    "lectura.html": {
      materia: "Lectura Crítica",
      enlaces: [
        ["Cuadernillo Lectura Crítica", "https://www.mediafire.com/file/9dms6enu8eyc048/Cuadernillo_de_preguntas_Saber-11-lectura-critica.pdf/file"],
        ["Lenguaje 2010", "https://www.mediafire.com/file/591qcpqi6t2q621/Lenguaje2010.pdf/file"],
        ["Lenguaje 2009", "https://www.mediafire.com/file/gp4eaguyio6hxun/Lenguaje2009.pdf/file"],
        ["Filosofía 2010", "https://www.mediafire.com/file/fnvusrxbs8bxi5k/Filosof%25C3%25ADa2010.pdf/file"],
        ["Filosofía 2009", "https://www.mediafire.com/file/hnzfbyh8z918q7f/Filosof%25C3%25ADa2009.pdf/file"]
      ]
    },
    "material-icfes": {
      materia: "Material del ICFES",
      titulo: "Material del ICFES",
      subtitulo: "Recursos externos",
      enlaces: [
        ["Cuadernillo Saber 11 — 2016", "https://www.mediafire.com/file/h9v94l0d4xn8634/Cuadernillo_icfes_2016.pdf/file"],
        ["Cuadernillo Saber 11 — 2014", "https://www.mediafire.com/file/945rx5m0e9l3m3w/Cuadernillo_saber_11-2014.pdf/file"],
        ["Cuadernillo Saber 11 — 2012", "https://www.mediafire.com/file/d3ykysztgyjdsc2/Cuadernillo_icfes_2012.pdf/file"],
        ["Cuadernillo núcleo común — 2010", "https://www.mediafire.com/file/67whc3173f99oi9/Cuadernillo_nucleo_com%25C3%25BAn_2010.pdf/file"],
        ["Cuadernillo núcleo común — 2010 (respuestas)", "https://www.mediafire.com/file/vx8ns507b5karty/Cuadernillo_icfes_2010_%2528respuestas%2529.pdf/file"],
        ["ICFES — 2006", "https://www.mediafire.com/file/ho627q0re2ewp25/icfes--2006.rar/file"],
        ["ICFES — 2005", "https://www.mediafire.com/file/uydkp0xqyasbk9w/icfes-2005.rar/file"],
        ["ICFES — 2004", "https://www.mediafire.com/file/kzaqsol8zhb3fh4/ICFES-2004.rar/file"],
        ["ICFES — 2003", "https://www.mediafire.com/file/v5mmebk3ho1g41l/ICFES-2003.rar/file"]
      ]
    }
  };

  function closeModal(modal, onKeyDown) {
    modal.remove();
    document.removeEventListener("keydown", onKeyDown);
  }

  function openModal(exams, assetBase) {
    const modal = document.createElement("div");
    modal.className = "examenes_modal";
    modal.dataset.assetBase = assetBase || "../imgs";
    modal.innerHTML = `<section class="examenes_dialog" role="dialog" aria-modal="true" aria-labelledby="examenes_titulo">
      <header class="examenes_encabezado"><div><span class="examenes_subtitulo">${exams.subtitulo || "Banco de pruebas"}</span><h2 id="examenes_titulo">${exams.titulo || "Exámenes de " + exams.materia}</h2></div>
      <button class="examenes_cerrar" type="button" aria-label="Cerrar ventana">×</button></header>
      <div class="examenes_lista"></div>
    </section>`;

    const list = modal.querySelector(".examenes_lista");
    exams.enlaces.forEach(function (exam) {
      const link = document.createElement("a");
      link.className = "examenes_enlace";
      link.href = exam[1];
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.innerHTML = '<img alt=""><span></span><span class="examenes_flecha" aria-hidden="true">↗</span>';
      link.querySelector("img").src = (modal.dataset.assetBase || "../imgs") + "/documento.svg";
      link.querySelector("span").textContent = exam[0];
      list.appendChild(link);
    });

    document.body.appendChild(modal);
    const onKeyDown = function (event) {
      if (event.key === "Escape") closeModal(modal, onKeyDown);
    };
    modal.addEventListener("click", function (event) {
      if (event.target === modal || event.target.closest(".examenes_cerrar")) closeModal(modal, onKeyDown);
    });
    document.addEventListener("keydown", onKeyDown);
    modal.querySelector(".examenes_cerrar").focus();
  }

  document.addEventListener("DOMContentLoaded", function () {
    const page = window.location.pathname.split("/").pop();
    document.querySelectorAll(".examenes_abrir").forEach(function (button) {
      const exams = EXAMENES[button.dataset.examenes || page];
      if (!exams) return;
      button.addEventListener("click", function () {
        openModal(exams, button.dataset.assetBase || "../imgs");
      });
    });
  });
})();
