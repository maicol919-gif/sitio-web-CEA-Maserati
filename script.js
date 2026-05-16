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
}, 11000); // 4000 ms = 4 segundos