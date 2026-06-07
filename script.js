// Correo de la academia (formulario de contacto en index)
var correoAcademia = "contacto@escuelamaserati.com";

// Scroll suave al hacer clic en enlaces internos (#contacto, #nosotros, etc.)
var enlacesInternos = document.querySelectorAll('a[href^="#"]');

for (var i = 0; i < enlacesInternos.length; i++) {
  enlacesInternos[i].addEventListener("click", function (event) {
    var destino = this.getAttribute("href");

    if (destino === "#") {
      return;
    }

    var seccion = document.querySelector(destino);

    if (seccion === null) {
      return;
    }

    event.preventDefault();
    seccion.scrollIntoView({ behavior: "smooth" });

    // Cierra el menú móvil si estaba abierto
    var menu = document.getElementById("menu");
    if (menu !== null && menu.classList.contains("show")) {
      var colapso = bootstrap.Collapse.getOrCreateInstance(menu);
      colapso.hide();
    }
  });
}



// --- Formulario de contacto (solo está en index.html) ---
var formularioContacto = document.getElementById("formulario");
var inputTelefonoContacto = document.getElementById("telefonoContacto");

if (formularioContacto !== null && inputTelefonoContacto !== null) {
  formularioContacto.addEventListener("submit", function (event) {
    event.preventDefault();

    formularioContacto.classList.add("was-validated");

    var nombre = document.getElementById("nombreContacto").value;
    var telefono = inputTelefonoContacto.value;
    var mensaje = document.getElementById("mensajeContacto").value;

    nombre = nombre.trim();
    telefono = telefono.trim();
    mensaje = mensaje.trim();

    validarTelefono(telefono);

    if (formularioContacto.checkValidity() === false) {
      return;
    }

    var asunto = "Solicitud desde la página web";
    var cuerpo = "Nombre: " + nombre + "\n";
    cuerpo = cuerpo + "Teléfono: " + telefono + "\n";
    cuerpo = cuerpo + "Mensaje: " + mensaje;

    var linkCorreo = "mailto:" + correoAcademia;
    linkCorreo = linkCorreo + "?subject=" + encodeURIComponent(asunto);
    linkCorreo = linkCorreo + "&body=" + encodeURIComponent(cuerpo);

    window.location.href = linkCorreo;
  });

  inputTelefonoContacto.addEventListener("input", function () {
    var soloNumeros = this.value.replace(/\D/g, "");
    this.value = soloNumeros.slice(0, 10);
    validarTelefono(this.value);
  });
}

function validarTelefono(telefono) {
  var input = document.getElementById("telefonoContacto");

  if (input === null) {
    return false;
  }

  if (telefono.length === 10) {
    input.setCustomValidity("");
    return true;
  }

  input.setCustomValidity("El teléfono debe tener 10 números");
  return false;
}

// --- Modal de detalle del curso (cursos.html) ---
var botonesCurso = document.querySelectorAll(".btn-curso");

for (var j = 0; j < botonesCurso.length; j++) {
  botonesCurso[j].addEventListener("click", function () {
    var categoria = this.getAttribute("data-course");
    llenarModalCurso(categoria);
  });
}

function llenarModalCurso(categoria) {
  var titulo = document.getElementById("cursoModalTitulo");
  var descripcion = document.getElementById("cursoModalDescripcion");
  var lista = document.getElementById("cursoModalIncluye");
  var vehiculos = document.getElementById("cursoModalVehiculos");
  var botonAsesoria = document.getElementById("cursoModalWhatsapp");

  if (titulo === null || descripcion === null || lista === null || vehiculos === null) {
    return;
  }

  if (categoria === "a") {
    titulo.textContent = "Categoría A - Moto";
    descripcion.textContent =
      "Curso para motocicleta. Aprenderás normas de tránsito, maniobras y conducción segura.";
    lista.innerHTML =
      "<li>Clases teóricas</li><li>Prácticas en moto</li><li>Orientación para el trámite</li>";
    vehiculos.textContent = "Motocicletas para práctica en pista y vía.";
  } else if (categoria === "b") {
    titulo.textContent = "Categoría B - Vehículo particular";
    descripcion.textContent =
      "Curso para carro particular. Ideal si vas a sacar la licencia por primera vez.";
    lista.innerHTML =
      "<li>Teoría y práctica</li><li>Carros livianos</li><li>Acompañamiento en el proceso</li>";
    vehiculos.textContent = "Vehículos particulares para clases progresivas.";
  } else if (categoria === "c") {
    titulo.textContent = "Categoría C - Servicio público";
    descripcion.textContent =
      "Formación para conductores de servicio público con enfoque en seguridad y normas.";
    lista.innerHTML =
      "<li>Normas de tránsito</li><li>Conducción responsable</li><li>Atención al usuario</li>";
    vehiculos.textContent = "Vehículos según la categoría del proceso.";
  } else {
    return;
  }

  if (botonAsesoria !== null) {
    botonAsesoria.setAttribute("data-course", categoria);
  }
}

// Botón "Solicitar asesoría" dentro del modal
var botonModalAsesoria = document.getElementById("cursoModalWhatsapp");

if (botonModalAsesoria !== null) {
  botonModalAsesoria.addEventListener("click", function (event) {
    event.preventDefault();
    var categoria = this.getAttribute("data-course");
    abrirChat(categoria, "");
  });
}

// --- Panel de asesoría (chat) ---
var botonesAbrirChat = document.querySelectorAll(".btn-whatsapp-context");

for (var k = 0; k < botonesAbrirChat.length; k++) {
  botonesAbrirChat[k].addEventListener("click", function (event) {
    event.preventDefault();

    var mensajeListo = this.getAttribute("data-message");
    var categoria = this.getAttribute("data-course");

    if (mensajeListo !== null && mensajeListo !== "") {
      abrirChat("general", mensajeListo);
    } else {
      if (categoria === null || categoria === "") {
        categoria = "general";
      }
      abrirChat(categoria, "");
    }
  });
}

var botonFlotante = document.querySelector("[data-chat-toggle]");

if (botonFlotante !== null) {
  botonFlotante.addEventListener("click", function () {
    toggleChat();
  });
}

var botonesCerrarChat = document.querySelectorAll("[data-chat-close]");

for (var m = 0; m < botonesCerrarChat.length; m++) {
  botonesCerrarChat[m].addEventListener("click", function () {
    cerrarChat();
  });
}

var formularioAsesoria = document.getElementById("contactForm");

if (formularioAsesoria !== null) {
  formularioAsesoria.addEventListener("submit", enviarFormularioAsesoria);

  var telefonoAsesoria = document.getElementById("telefonoAsesoria");

  if (telefonoAsesoria !== null) {
    telefonoAsesoria.addEventListener("input", function () {
      var numeros = this.value.replace(/\D/g, "");
      this.value = numeros.slice(0, 10);
    });
  }
}

function toggleChat() {
  var chat = document.getElementById("chatContainer");

  if (chat === null) {
    return;
  }

  if (chat.classList.contains("d-none")) {
    chat.classList.remove("d-none");
  } else {
    chat.classList.add("d-none");
  }
}

function cerrarChat() {
  var chat = document.getElementById("chatContainer");

  if (chat !== null) {
    chat.classList.add("d-none");
  }
}

function abrirChat(categoria, mensajeFijo) {
  var chat = document.getElementById("chatContainer");
  var campoMensaje = document.getElementById("mensaje");
  var mensajeConfirmacion = document.getElementById("chatConfirmacion");

  if (chat === null || campoMensaje === null) {
    return;
  }

  var texto = "";

  if (mensajeFijo !== "") {
    texto = mensajeFijo;
  } else if (categoria === "a") {
    texto = "Hola, quiero información del curso categoría A (moto).";
  } else if (categoria === "b") {
    texto = "Hola, quiero información del curso categoría B (carro particular).";
  } else if (categoria === "c") {
    texto = "Hola, quiero información del curso categoría C (servicio público).";
  } else {
    texto = "Hola, quiero asesoría sobre los cursos de conducción.";
  }

  campoMensaje.value = texto;

  if (mensajeConfirmacion !== null) {
    mensajeConfirmacion.classList.add("d-none");
    mensajeConfirmacion.textContent = "";
  }

  chat.classList.remove("d-none");
}

function enviarFormularioAsesoria(event) {
  event.preventDefault();

  var formulario = document.getElementById("contactForm");
  var mensajeConfirmacion = document.getElementById("chatConfirmacion");

  if (formulario === null) {
    return;
  }

  if (formulario.checkValidity() === false) {
    formulario.reportValidity();
    return;
  }

  var nombre = document.getElementById("nombre").value.trim();
  var telefono = document.getElementById("telefonoAsesoria").value.trim();

  if (mensajeConfirmacion !== null) {
    mensajeConfirmacion.textContent =
      "Gracias " + nombre + ". Te contactaremos al " + telefono + " pronto.";
    mensajeConfirmacion.classList.remove("d-none");
  }

  formulario.reset();
}

// efecto para el boton de accion

const boton = document.querySelector('#btn-ver-cursos');
const colores = ['#dc3545', '#e9a3aa'];
let  indice = 0;

const efectoResaltar=setInterval(() => {
    boton.style.backgroundColor = colores[indice];   
    boton.style.borderColor = colores[indice];  
    // Incrementamos el índice para pasar al siguiente color
    indice = (indice + 1) % colores.length; 
}, 500); // Se ejecuta cada 3 segundos


// se detiene el efecto para optimizar consumo de recursos
setTimeout(() => {
     clearInterval(efectoResaltar); // El ciclo se destruye y deja de consumir recursos
    console.log("Efecto detenido.");
},30000); 
