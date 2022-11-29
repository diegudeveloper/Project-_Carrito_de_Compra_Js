const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos'); //donde se vaciara el carrito
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');


//identificar boton


listaCursos.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
    const curoSeleccionado = e.target.parentElement.parentElement;

    leerDatosCurso(curoSeleccionado);

    }
});

//leer los datos del curso

function leerDatosCurso(curso) {
    console.log(curso);

    //crear u objeto

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }

    console.log(infoCurso);
}
