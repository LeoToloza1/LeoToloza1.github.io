 // Obtén referencias a los elementos del DOM
 const commentForm = document.getElementById('commentForm');
 const commentList = document.getElementById('comments');
 const correoInput = document.getElementById('email');

 // Agrega un evento submit al formulario
 commentForm.addEventListener('submit', function(event) {
   event.preventDefault(); // Evita que se envíe el formulario por defecto

   // Obtén los valores del formulario
   const name = document.getElementById('name').value;
   const email = correoInput.value;
   const comment = document.getElementById('comment').value;

   // Crea un nuevo elemento de comentario
   const newComment = document.createElement('li');
   newComment.textContent = `${name} (${email}): ${comment}`;

   // Agrega el nuevo comentario a la lista
   commentList.appendChild(newComment);

   // Limpia los campos del formulario
   commentForm.reset();
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