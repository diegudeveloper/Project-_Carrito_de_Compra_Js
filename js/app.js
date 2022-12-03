const carrito = document.querySelector('#carrito');
const contenedorrCarrito = document.querySelector('#lista-cursos tbody'); //donde se vaciara el carrito
const listaCurso = document.querySelector('#lista-cursos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let carritoCompra = [];


//Evento AddEventListener al boton Agregar al carrito
listaCurso.addEventListener('click', (e) => {
    e.preventDefault();

    //Identifico la informacion del curso al cual estoy eligiendo
    if(e.target.classList.contains('agregar-carrito')) {
        const datosCurso = e.target.parentElement.parentElement;
        // console.log(datosCurso);
        leerDatos(datosCurso)
    }
});


function leerDatos(datosCurso) {
    // console.log(datosCurso);

    //Creo un objeto con los datos del curso

    const cursoSeleccionado = {
        imagen: datosCurso.querySelector('img').src,
        nombre: datosCurso.querySelector('h4').textContent,
        precio: datosCurso.querySelector('span').textContent,
        id: datosCurso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }

    carritoCompra = [...carritoCompra, cursoSeleccionado];
    console.log(carritoCompra);
}


