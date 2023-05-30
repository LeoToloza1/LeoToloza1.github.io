let preguntas = document.querySelectorAll(".pregunta_encabezado");

preguntas.forEach((pregunta) => {
	pregunta.addEventListener('click', () => {
   
		pregunta.nextElementSibling.classList.toggle("activo");

	});
});
