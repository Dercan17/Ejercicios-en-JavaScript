//variables
const carrito = document.querySelector('#carrito');
const contCarrito = document.querySelector('#lista-carrito tbody');
const vaciar = document.querySelector('#vaciar-carrito');
const lista = document.querySelector('#lista-cursos');
let articulosCarrito = [];


cargar();


function cargar(){
    //Cuando agregas un curso poresionando "Agregar carrito"
    lista.addEventListener('click', agregarCurso);

    //elimina cursos del carrito
    carrito.addEventListener('click',eliminarCurso);

    //vaciar carrito
    vaciar.addEventListener('click',() => {
        articulosCarrito = [];

        limpiarHTML();//eliminamos todo el html
    })
}


//funciones

function agregarCurso(e){

    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatos(cursoSeleccionado);
    }
    
}
//elimina un curso del carrito
function eliminarCurso(e){
if(e.target.classList.contains('borrar-curso')){
    
      const cursoId = e.target.getAttribute('data-id');

     articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId );

        carritoHTML(); //iterar sobre el carrito y mostrar HTML

}
}

//lee el contenido HTML al que se le da click
function leerDatos(curso){
    

    //crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1

    }

    //revisa si un elemento ya existe en el carrito
    const existe  =articulosCarrito.some(curso => curso.id === infoCurso.id);
    if(existe){
        //actualizamos cantidad
        const cursos = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; //retorna el objeto actualizado
            }else{
                return curso;//retorna los objetos que no son duplicados
            }
            articulosCarrito = [...cursos];
        })
    }else{

        //agregamos al carrito
        articulosCarrito = [...articulosCarrito, infoCurso];

    }


//agregar elementos al arreglo de carrito
console.log(articulosCarrito);

carritoHTML();

}


//muestra el carrito de compras en el html

function carritoHTML(){

    //limpiar HTML
        limpiarHTML();

    //recorre carrito y agrega html
    articulosCarrito.forEach(curso => {

        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML= `
        <td>
            <img src="${imagen}" width="100">
        
        </td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${id}"> X </a>
        </td>
        `;
        

        //agrega el hmtl del carrito en el tbody
        contCarrito.appendChild(row);
    });
}


//elimina los cursos del tbody
function limpiarHTML(){
    //forma lenta
    //contCarrito.innerHTML=""
    while(contCarrito.firstChild){
        contCarrito.removeChild(contCarrito.firstChild);
    }

}