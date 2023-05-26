const carrusel = document.querySelector(".carrusel");
const punto = document.querySelectorAll(".punto");

//cuando se hace click en el punto
 // se desea conocer la posicion del punto.
 // aplicar un transform translateX al carrusel
 // quitar la clase activo de todos los puntos
 // añadir la clase activo al punto al que se le hace click 

punto.forEach((cadaPunto, i) => {
  punto[i].addEventListener('click', () => {
    let posicion = i;
    let operacion = posicion * -50;
    carrusel.style.transform = `translateX(${operacion}%)`;

    punto.forEach((cadapunto, i) => {
      punto[i].classList.remove('activo');
    })
    punto[i].classList.add('activo');

  })

})