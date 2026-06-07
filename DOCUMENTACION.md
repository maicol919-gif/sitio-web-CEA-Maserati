# Proyecto final — Sitio web CEA Maserati

**Programa:** Talento Tech — Desarrollo web full stack (componente técnico)  
**Tipo de proyecto:** Sitio web estático multi página  
**Cliente / contexto:** Escuela de Conducción Maserati, Cali — mejora de presencia digital  

---

## 1. Introducción

Este proyecto consiste en el rediseño del sitio institucional de la **Escuela de Conducción Maserati**, con el fin de presentar de forma clara sus cursos (categorías A, B y C), servicios complementarios, convenios de pago y canales de contacto. El sitio anterior tenía información limitada y poca estructura; la nueva versión organiza el contenido para estudiantes, empresas y personas que buscan asesoría.

---

## 2. Objetivos

### Objetivo general
Desarrollar un sitio web responsive que represente la academia y facilite la consulta de cursos y servicios.

### Objetivos específicos
- Estructurar la información en páginas separadas (inicio, cursos, servicios).
- Aplicar HTML5 semántico, CSS3 y Bootstrap 5.
- Usar JavaScript para formularios, modal de cursos y panel de asesoría.
- Mostrar imágenes reales de la escuela (galería y sección nosotros).
- Incluir mapa de ubicación y enlaces a redes sociales.

---

## 3. Tecnologías utilizadas (según el componente técnico del curso)

| Tecnología | Uso en el proyecto |
|------------|-------------------|
| **HTML5** | Estructura, secciones, formularios, imágenes, enlaces internos |
| **CSS3** | Estilos propios (`styles.css`), variables de color, animación del carrusel |
| **Bootstrap 5** | Grid, navbar, botones, modal, utilidades responsive |
| **JavaScript** | Validación de teléfono, scroll suave, modal de cursos, chat de asesoría |
| **Bootstrap Icons** | Iconos en menú, ventajas y redes |
| **Google Fonts (Manrope)** | Tipografía del sitio |

**Nota:** Para este entregable no se usó base de datos ni backend en producción. El formulario de contacto abre el cliente de correo (`mailto:`). El panel de asesoría muestra confirmación en pantalla (demostración para el curso).

Temas vistos en clase relacionados: wireframes (sesión 3), maquetación HTML/CSS (sesiones 4–10), Bootstrap (11–12), JavaScript (13–18). Git/GitHub puede usarse si el docente pide repositorio (sesiones 22–24).

---

## 4. Estructura del sitio

```
CODIGO/
├── index.html          → Página principal
├── cursos.html         → Categorías A, B y C + modal
├── servicios.html      → Servicios y convenios
├── styles.css          → Estilos personalizados
├── script.js           → Funciones JavaScript
├── img/                → Imágenes y logo
└── DOCUMENTACION.md    → Este archivo
```

### Páginas y secciones

**index.html**
- Hero (presentación)
- Quiénes somos (fotos + misión y visión)
- Accesos rápidos a cursos y servicios
- Ventajas
- Galería (carrusel de imágenes)
- Proceso en 3 pasos
- Contacto (formulario, mapa, redes)

**cursos.html**
- Tarjetas por categoría con imagen representativa
- Modal Bootstrap con detalle del curso
- Botón de cotización / asesoría

**servicios.html**
- Servicios complementarios
- Convenios de pago (Brilla, Sistecrédito, etc.)

### Menú de navegación (todas las páginas)
- Inicio
- Cursos
- Servicios y convenios
- Contáctanos

---

## 5. Funcionalidades con JavaScript

1. **Scroll suave** al hacer clic en enlaces con `#` (solo en index).
2. **Formulario de contacto:** valida teléfono de 10 dígitos y abre correo con datos.
3. **Modal de cursos:** al pulsar “Ver detalle” se cargan título, descripción e ítems según categoría A, B o C.
4. **Panel de asesoría:** botón flotante y enlaces “Cotizar” abren un formulario; al enviar se muestra mensaje de confirmación (sin redirigir a WhatsApp externo).

---

## 6. Diseño y responsive

- Enfoque **mobile first** apoyado en columnas de Bootstrap (`col-md`, `col-lg`).
- Navbar colapsable en pantallas pequeñas.
- Carrusel horizontal con animación CSS para la galería.
- Colores institucionales: rojo (`#dc3545`), azul oscuro y fondos claros.

---

## 7. Cómo ejecutar el proyecto

1. Descargar o clonar la carpeta `CODIGO`.
2. Verificar que exista la carpeta `img` con todas las imágenes.
3. Abrir `index.html` con doble clic o con la extensión **Live Server** en Visual Studio Code.
4. Navegar entre páginas desde el menú superior.

No requiere instalación de Node ni servidor para la versión entregada.

---

## 8. Conclusiones

Se logró un sitio más profesional y organizado que el anterior, alineado con las prácticas del curso (HTML, CSS, Bootstrap y JavaScript). El contenido responde a las necesidades reales de la academia: informar sobre cursos, convenios y contacto. Como mejora futura se podría conectar un backend o formulario que envíe correos sin depender de `mailto:`, y publicar el sitio en hosting o GitHub Pages.

---

## 9. Integrantes

| Nombre | Rol en el proyecto |
|--------|-------------------|
| Verónica Aguirre | Contenido y documentación |
| Fernando García Muñoz | HTML, CSS y estructura |
| Jefferson Bermeo | JavaScript y pruebas |
| Maycol Martínez | Diseño y sustentación |


*Documento generado para sustentación académica — Proyecto final CEA Maserati.*
