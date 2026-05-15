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