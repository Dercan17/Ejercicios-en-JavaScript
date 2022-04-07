const cargarArray = document.querySelector('#cargarJSONArray');
cargarArray = addEventListener('click', obtener);


function obtener(){
    const url = ('data/empleados.json');

    fetch(url)
    .then(respuesta => respuesta.json())
    .then( resultado => mostrar(resultado))



}


function mostrar(empleados){
    const contenido = document.querySelector('.contenido');


    let html ='';

    empleados.forEach(empleado => {
        const {id,nombre,empresa,trabajo} = empleado;

        html += `
        <p>Id: ${id}</p>
        <p>Empleado: ${nombre}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
        <p>____________________________</p>
        `;
    });
    contenido.innerHTML = html;
}