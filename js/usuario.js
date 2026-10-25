(function () {
  "use strict";

  const PROFILE_KEY = "mejorPuntaje.usuario";
  const PROGRESS_KEY = "mejorPuntaje.videosVistos";
  const HIDE_PROFILE_PROMPT_KEY = "mejorPuntaje.noMostrarVentanaUsuario";
  const COURSES = [
    { file: "sociales.html", name: "Competencias ciudadanas", total: 63 },
    { file: "naturales.html", name: "Ciencias naturales", total: 102 },
    { file: "matematicas.html", name: "Matemáticas", total: 79 },
    { file: "lectura.html", name: "Lectura crítica", total: 46 },
    { file: "ingles.html", name: "Inglés", total: 26 }
  ];
  const TOTAL_VIDEOS = COURSES.reduce(function (total, course) {
    return total + course.total;
  }, 0);

  function readJSON(key, fallback) {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return value === null ? fallback : value;
    } catch (error) {
      return fallback;
    }
  }

  function hasDismissedProfilePrompt() {
    try {
      return localStorage.getItem(HIDE_PROFILE_PROMPT_KEY) === "true";
    } catch (error) {
      return false;
    }
  }

  function getSeenVideos() {
    const storedVideos = readJSON(PROGRESS_KEY, []);
    return new Set(Array.isArray(storedVideos)
      ? storedVideos.filter(function (item) { return typeof item === "string"; })
      : []);
  }

  function getSubjectProgress(course, seenVideos) {
    const seen = seenVideos || getSeenVideos();
    const watched = Math.min(course.total, Array.from(seen).filter(function (videoKey) {
      return videoKey.startsWith(course.file + ":");
    }).length);
    return {
      name: course.name,
      watched: watched,
      total: course.total,
      percentage: Math.round((watched / course.total) * 100)
    };
  }

  function getCourseMetrics() {
    const seen = getSeenVideos();
    const subjects = COURSES.map(function (course) {
      return getSubjectProgress(course, seen);
    });
    const watched = Math.min(TOTAL_VIDEOS, subjects.reduce(function (sum, subject) {
      return sum + subject.watched;
    }, 0));
    return {
      subjects: subjects,
      watched: watched,
      percentage: Math.round((watched / TOTAL_VIDEOS) * 100)
    };
  }

  function renderSubjectMetrics(metrics) {
    const completedSubjects = metrics.subjects.filter(function (subject) {
      return subject.watched >= subject.total;
    }).length;
    const highestPercentage = Math.max.apply(null, metrics.subjects.map(function (subject) {
      return subject.percentage;
    }));
    const leadingSubjects = metrics.watched === 0 ? [] : metrics.subjects.filter(function (subject) {
      return subject.percentage === highestPercentage;
    });
    const subjects = metrics.subjects.map(function (subject) {
      return `<div class="usuario_materia">
        <div class="usuario_materia_encabezado"><span>${subject.name}</span><strong>${subject.percentage}%</strong></div>
        <div class="usuario_barra usuario_barra_materia" role="progressbar" aria-label="${subject.name}" aria-valuenow="${subject.percentage}" aria-valuemin="0" aria-valuemax="100"><span style="width:${subject.percentage}%"></span></div>
      </div>`;
    }).join("");
    const leaderText = leadingSubjects.length
      ? `<p class="usuario_materia_destacada">Más avanzada: <strong>${leadingSubjects.map(function (subject) { return subject.name; }).join(", ")} (${highestPercentage}%)</strong></p>`
      : "";
    return `<section class="usuario_metricas" aria-label="Avance por materia">
      <div class="usuario_resumen_metricas"><p>Materias completadas</p><strong>${completedSubjects} de ${metrics.subjects.length}</strong></div>
      ${leaderText}
      <div class="usuario_lista_materias">${subjects}</div>
    </section>`;
  }

  function renderCourseProgress() {
    const profile = readJSON(PROFILE_KEY, null);
    const page = window.location.pathname.split("/").pop();
    const course = COURSES.find(function (item) { return item.file === page; });
    const existing = document.querySelector(".progreso_materia");
    const intro = document.querySelector(".info_volador");
    if (!profile || !profile.name || !course || !intro) {
      if (existing) existing.remove();
      return;
    }

    const progress = getSubjectProgress(course);
    const indicator = existing || document.createElement("section");
    indicator.className = "progreso_materia";
    indicator.setAttribute("aria-label", "Avance en " + course.name);
    indicator.innerHTML = `<div class="progreso_materia_encabezado"><span>Tu avance en ${course.name}</span><strong>${progress.percentage}%</strong></div>
      <div class="usuario_barra progreso_materia_barra" role="progressbar" aria-label="${course.name}" aria-valuenow="${progress.percentage}" aria-valuemin="0" aria-valuemax="100"><span style="width:${progress.percentage}%"></span></div>`;
    if (!existing) intro.insertAdjacentElement("afterend", indicator);
  }

  function userIcon(isMobile) {
    const iconClass = isMobile ? "supernav_img" : "icon_nav";
    return `<svg class="${iconClass}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"></circle><path d="M5 21v-2a7 7 0 0 1 14 0v2"></path></svg>`;
  }

  function updateMenu() {
    const profile = readJSON(PROFILE_KEY, null);
    document.querySelectorAll(".usuario_menu_link").forEach(function (link) {
      const label = link.querySelector(".usuario_menu_nombre");
      if (!label) return;
      label.textContent = profile && profile.name ? profile.name : "Mi usuario";
      const isMobile = link.id === "usuario_menu_movil";
      const oldPhoto = link.querySelector(".usuario_foto_menu");
      const oldIcon = link.querySelector("svg");
      if (profile && profile.photo) {
        if (oldIcon) oldIcon.remove();
        if (!oldPhoto) {
          const photo = document.createElement("img");
          photo.className = (isMobile ? "supernav_img" : "icon_nav") + " usuario_foto_menu";
          photo.alt = "";
          link.insertBefore(photo, label);
          photo.src = profile.photo;
        } else oldPhoto.src = profile.photo;
      } else {
        if (oldPhoto) oldPhoto.remove();
        if (!oldIcon) link.insertBefore(document.createRange().createContextualFragment(userIcon(isMobile)), label);
      }
    });
  }

  function closeModal() {
    const modal = document.getElementById("usuario_modal");
    if (modal) modal.remove();
  }

  function openModal(showHideOption) {
    closeModal();
    const profile = readJSON(PROFILE_KEY, null);
    const metrics = getCourseMetrics();
    const percentage = metrics.percentage;
    const modal = document.createElement("div");
    modal.id = "usuario_modal";
    modal.className = "usuario_modal";
    const avatar = profile && profile.photo
      ? `<img class="usuario_foto_perfil" src="${profile.photo}" alt="Foto de ${escapeHTML(profile.name)}">`
      : '<svg class="usuario_icono" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"></circle><path d="M5 21v-2a7 7 0 0 1 14 0v2"></path></svg>';
    modal.innerHTML = `
      <section class="usuario_dialog" role="dialog" aria-modal="true" aria-labelledby="usuario_titulo">
        <button class="usuario_cerrar" type="button" aria-label="Cerrar">×</button>
        ${avatar}
        <h2 id="usuario_titulo">${profile && profile.name ? "Mi usuario" : "Crear mi usuario"}</h2>
        ${profile && profile.name
          ? `<p class="usuario_saludo">Hola, <strong>${escapeHTML(profile.name)}</strong></p>
             <p>Tu progreso del curso</p>
             <div class="usuario_barra" role="progressbar" aria-label="Progreso del curso" aria-valuenow="${percentage}" aria-valuemin="0" aria-valuemax="100"><span style="width:${percentage}%"></span></div>
             <p class="usuario_porcentaje">${percentage}%</p>
             ${renderSubjectMetrics(metrics)}
             <label class="usuario_foto_boton" for="usuario_foto">${profile.photo ? "Cambiar fotografía" : "Añadir fotografía"}</label>
             <input class="usuario_foto_input" id="usuario_foto" type="file" accept="image/*">
             <button class="usuario_borrar" type="button">Borrar mis datos</button>`
          : `<p>Convierte cada sesión de estudio en un paso hacia tu meta. Crea tu perfil para conservar tu avance general y por materia, y retoma tu preparación cuando vuelvas. Es opcional y los datos se guardan solo en este dispositivo.</p>
             <form id="usuario_form"><label for="usuario_nombre">Nombre</label><input id="usuario_nombre" name="nombre" maxlength="50" autocomplete="name" required>
             <label class="usuario_foto_boton" for="usuario_foto">Añadir fotografía (opcional)</label><input class="usuario_foto_input" id="usuario_foto" type="file" accept="image/*">
             <button type="submit">Guardar usuario</button></form>
             <p class="usuario_porcentaje">Tu avance actual: ${percentage}%</p>`}
        ${showHideOption ? '<button class="usuario_no_mostrar" type="button">No volver a mostrar esta ventana</button>' : ""}
      </section>`;
    document.body.appendChild(modal);
    modal.addEventListener("click", function (event) {
      if (event.target === modal || event.target.closest(".usuario_cerrar")) closeModal();
      if (event.target.closest(".usuario_no_mostrar")) {
        try {
          localStorage.setItem(HIDE_PROFILE_PROMPT_KEY, "true");
        } catch (error) {
          // Keep the dialog usable even when browser storage is unavailable.
        }
        closeModal();
      }
      if (event.target.closest(".usuario_borrar")) {
        if (window.confirm("Se borrarán el nombre, la fotografía y el progreso guardados en este sitio. ¿Quieres continuar?")) {
          localStorage.removeItem(PROFILE_KEY);
          localStorage.removeItem(PROGRESS_KEY);
          updateMenu();
          openModal(showHideOption);
        }
      }
    });

    const photoInput = modal.querySelector("#usuario_foto");
    photoInput.addEventListener("change", async function () {
      const file = photoInput.files && photoInput.files[0];
      if (!file) return;
      try {
        const photo = await resizePhoto(file);
        const existingProfile = readJSON(PROFILE_KEY, null);
        if (existingProfile && existingProfile.name) {
          existingProfile.photo = photo;
          localStorage.setItem(PROFILE_KEY, JSON.stringify(existingProfile));
          updateMenu();
          openModal(showHideOption);
        } else {
          modal.dataset.photo = photo;
          photoInput.insertAdjacentHTML("afterend", '<span class="usuario_foto_estado">Fotografía seleccionada</span>');
        }
      } catch (error) {
        window.alert("No se pudo cargar la fotografía. Prueba con otra imagen.");
      }
    });

    const form = modal.querySelector("#usuario_form");
    if (form) form.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = form.elements.nombre.value.trim();
      if (!name) return;
      const newProfile = { name: name };
      if (modal.dataset.photo) newProfile.photo = modal.dataset.photo;
      try {
        localStorage.setItem(PROFILE_KEY, JSON.stringify(newProfile));
        updateMenu();
        openModal(showHideOption);
      } catch (error) {
        window.alert("No se pudo guardar la fotografía. Prueba con una imagen más pequeña.");
      }
    });
  }

  function resizePhoto(file) {
    return new Promise(function (resolve, reject) {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = function () {
        const image = new Image();
        image.onerror = reject;
        image.onload = function () {
          const scale = Math.min(1, 256 / Math.max(image.width, image.height));
          const canvas = document.createElement("canvas");
          canvas.width = Math.max(1, Math.round(image.width * scale));
          canvas.height = Math.max(1, Math.round(image.height * scale));
          canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL("image/jpeg", 0.78));
        };
        image.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  function escapeHTML(value) {
    return value.replace(/[&<>"']/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[character];
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    updateMenu();
    renderCourseProgress();
    if (!hasDismissedProfilePrompt()) openModal(true);
    document.querySelectorAll(".usuario_menu_link").forEach(function (menuButton) {
      menuButton.addEventListener("click", function (event) {
        event.preventDefault();
        openModal(false);
      });
    });
  });

  document.addEventListener("click", function (event) {
    const button = event.target.closest(".boton_video");
    if (!button || !button.id) return;
    const page = window.location.pathname.split("/").pop();
    const videoKey = page + ":" + button.id;
    const seen = readJSON(PROGRESS_KEY, []);
    if (!Array.isArray(seen) || seen.includes(videoKey)) return;
    seen.push(videoKey);
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(seen));
    renderCourseProgress();
  }, true);

  window.addEventListener("storage", function (event) {
    if (event.key === PROFILE_KEY || event.key === PROGRESS_KEY) renderCourseProgress();
  });
})();
