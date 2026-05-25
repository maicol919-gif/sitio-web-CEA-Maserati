// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Validación simple
document.getElementById("formulario").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Formulario enviado correctamente");
});


// efecto-btn-danger
// Ejemplo: Cambiar el color de fondo de un elemento cada 3 segundos
const boton = document.querySelector('.btn-matricula');
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
},30000); // 4000 ms = 4 segundos

// contacto-whatsapp
 function toggleChat() {
            const chat = document.getElementById('chatContainer');
            chat.classList.toggle('d-none');
        }
        // ENVIAR MENSAJE POR WHATSAPP
        
        function enviarWhatsApp() {
            // 1. Obtén los valores del formulario
            const nombre = document.getElementById('nombre').value;
            const mensaje = document.getElementById('mensaje').value;

            // 2. Define tu número de WhatsApp (código de país + número, sin el símbolo '+')
            const telefono = "573333333333"; // Reemplaza esto con tu número

            // 3. Construye el texto que se enviará
            const textoMensaje = `Hola, mi nombre es ${nombre}. ${mensaje}`;

            // 4. Crea la URL para la API de WhatsApp
            const url = `https://wa.me/${telefono}?text=${encodeURIComponent(textoMensaje)}`;

            // 5. Redirige a WhatsApp
            window.open(url, '_blank');
        }
