const cargarJson = document.querySelector('#cargarJSON');
cargarJson.addEventListener('click',obtenerDatos);


function obtenerDatos(){
    fetch('data/empleado.json')
        .then(respuesta => respuesta.json())
        .then(resultado => mostrar(resultado))

}


function mostrar({empresa,id,nombre,trabajo}){
    const contenido = document.querySelector('.contenido');
    contenido.innerHTML = `
    <p>Id: ${id}</p>
    <p>Empleado: ${nombre}</p>
    <p>Empresa: ${empresa}</p>
    <p>Trabajo: ${trabajo}</p>
    `;
}