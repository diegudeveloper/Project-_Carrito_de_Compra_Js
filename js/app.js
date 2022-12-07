const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody'); //donde se vaciara el carrito
const listaCurso = document.querySelector('#lista-cursos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let carritoArray = [];

//Creacion del evento click
listaCurso.addEventListener('click', (e) => {
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')) {
        //Se realiza traversing a fin de llegar al container del curso para poder leer los datos 
        const agregaCurso = e.target.parentElement.parentElement;
        // console.log(agregaCurso);
        leerDatos(agregaCurso);
    };
    
})

//leer los datos del curso

function leerDatos(agregaCurso) {
    console.log(agregaCurso);

    //construyo un objeto con los datos leidos al precionar el boton agregar carrito

    const cursoSleccionado = {
        imagen: agregaCurso.querySelector('img').src,
        nombre: agregaCurso.querySelector('h4').textContent,
        precio: agregaCurso.querySelector('span').textContent,
        id: agregaCurso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }
    // console.log(cursoSleccionado);

    //Se revisa si el elemento existe
    const existe = carritoArray.some((agregaCurso) => agregaCurso.id === cursoSleccionado.id)
    if(existe) {
        carritoArray.forEach(agregaCurso => {
            if (agregaCurso.id === cursoSleccionado.id) {
                agregaCurso.cantidad++;
                return agregaCurso
            }
        })
    }else {
        carritoArray = [...carritoArray, cursoSleccionado]; 
    }
    // console.log(existe);

    //Se crea y se agrega en el array el curso seleccionado. 
    // carritoArray = [...carritoArray, cursoSleccionado];

    console.log(carritoArray);
    elementoHtml();
}

//Crear el elemento a donde vamos a agregar el curso

function elementoHtml() {

    //Se llama a laa funcion limpiar thml para obviamente limpiar el duplicado de los cursos
    limpiarHtml();

    //Se itera por cada curso seleccionado y se crea el elemento donde se agregara
    carritoArray.forEach(curso => {
        const tablet = document.createElement('tr');
        tablet.innerHTML = `
            <td>
                <img src="${curso.imagen}" width="150">
            </td>
            <td>
                ${curso.nombre}
            </td>
            <td>
                ${curso.precio}
            </td>
            <td>
                ${curso.cantidad}
            </td>
        `
        contenedorCarrito.appendChild(tablet);
    })

    //Se agrega en el contenedor el elemento creado y el curso seleccionado
    console.log('contenedorCarrito');
}

//Se crea la funcion para limpiar el contenedor porque se duplicaban los cursos.
function limpiarHtml() {
    contenedorCarrito.innerHTML = "";
}

