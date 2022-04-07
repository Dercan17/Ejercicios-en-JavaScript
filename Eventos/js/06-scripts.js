//event bubling
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');


cardDiv.addEventListener('click',e => {

    console.log('click en card');
    e.stopPropagation()
});

infoDiv.addEventListener('click',e => {

    console.log('click en info');
    e.stopPropagation()

});

titulo.addEventListener('click',e => {

    console.log('click en titulo');
    e.stopPropagation()

});