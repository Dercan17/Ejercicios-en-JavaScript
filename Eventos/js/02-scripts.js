//eventos del mouse
const nav = document.querySelector('.navegacion');

//registrar un evento

nav.addEventListener('mouseout', () =>{
console.log('saliendo en nav')

nav.style.backgroundColor = 'transparent';
})
nav.addEventListener('mouseenter', () =>{
    console.log('entrando en nav');
    nav.style.backgroundColor = 'black';

    })

    //moousedown - similar click
    //click
    //dblclick - doble click
    //mouseup - cuando se suelta el mouse