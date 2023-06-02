/**
 * Traigo los elemnos del dom
 */
 const formulario = document.getElementById('formulario');
 const listaComentario = document.getElementById('ListaComentarios');
 const correoInput = document.getElementById('email');
 
 // Agrego un evento submit al formulario
  formulario.addEventListener('submit', function(event) {
   event.preventDefault(); // Esto evita que se envie el formulario por defecto

   // accedor a los valores del formulario
   const name = document.getElementById('nombre').value;
   const email = correoInput.value;
   const comment = document.getElementById('comentario').value;

   // se crea un nuevo elemento de comentario
   const nuevoComentario = document.createElement('li');
   nuevoComentario.textContent = `${name} (${email}): ${comment}`;

   // Agrega el nuevo comentario a la lista
   listaComentario.appendChild(nuevoComentario);

   // Limpia los campos del formulario
   formulario.reset();
 });

 // Función para validar el email con expresiones regulares
 function validarCorreo(correo) {
   const validar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return validar.test(correo);
 }

 // Agregar evento input al campo de correo electrónico
 correoInput.addEventListener('input', function() {
   const correo = correoInput.value;
   const esValido = validarCorreo(correo);
   if (esValido) {
     correoInput.setCustomValidity('');
   } else {
     correoInput.setCustomValidity('Ingrese un correo electrónico válido');
   }
 });