/*creacion del carrusel con javascript*/

/* --Codigo para verificar si se contectó el js con el html--
window.addEventListener('load', function () {
    console.log('el contenido ha cargado!');
})*/

/**
 * acá declaré y llné el arreglo con las imagenes de la carpeta img.
 */
var imagenes = [
    '/img/img1.jpg', '/img/img2.jpg', '/img/img3.jpg', '/img/img4.jpg', '/img/img5.jpg', '/img/img6.jpg',
    '/img/img7.jpg', '/img/img8.jpg', '/img/img9.jpg', '/img/img10.jpg', '/img/img11.jpg', '/img/img12.jpg', '/img/img13.jpg',
    '/img/img14.jpg', '/img/img15.jpg', '/img/img16.jpg', '/img/img17.jpg', '/img/img18.jpg', '/img/img19.jpg', '/img/img20.jpg',
    '/img/img21.jpg', '/img/img22.jpg'
  ];
  
  let contador = 0;
  /**
   * funcion que recibe el contenedor y valida los botones para avanzar o retroceder el carrusel
   */
  function carrusel(contenedor) {
    contenedor.addEventListener('click', function (e) {
      let atras = contenedor.querySelector('.atras');
      let adelante = contenedor.querySelector('.adelante');
      let img = contenedor.querySelector('img');
      let objetivo = e.target;
  
      if (objetivo === atras) {
        if (contador > 0) {
          img.src = imagenes[contador - 1];
          contador--;
        } else {
          img.src = imagenes[imagenes.length - 1];
          contador = imagenes.length - 1;
        }
      } else if (objetivo === adelante) {
        if (contador < imagenes.length - 1) {
          img.src = imagenes[contador + 1];
          contador++;
        } else {
          img.src = imagenes[0];
          contador = 0;
        }
      }
    });
  }
  /**
   * llamo a la funcion y con el query selector, selecciono el contenedor con los botones de adelante y de atras
   */
  document.addEventListener("DOMContentLoaded", function () {
    let contenedor = document.querySelector('.contenedor');
    carrusel(contenedor);
  });
  