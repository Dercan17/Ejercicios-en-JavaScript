//variables
const bntEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const form = document.querySelector('#enviar-mail');


//variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



eventListeners();

function eventListeners(){
    //cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //validacion de campos
    email.addEventListener('blur', validarForm);
    asunto.addEventListener('blur', validarForm);
    mensaje.addEventListener('blur', validarForm);


    //reinicia el formulario
    btnReset.addEventListener('click', vaciarForm);


    //enviar email
    form.addEventListener('submit', enviarEmail);

    

}


//funciones

function iniciarApp(){
    bntEnviar.disabled=true;

    bntEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

//validacion del formulario

function validarForm(e){
    
    if(e.target.value.length > 0){

        //elimina los errores
        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }


        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');

    }else{
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('todos los campos son obligatorios');

    }

    if(e.target.type ==='email'){
        
        
        if(er.test(e.target.value)){
            
            const error = document.querySelector('p.error');

            if(error){
                error.remove();
            }
            
    
    
            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        }else{
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            mostrarError('email no valido');
        }
    }


    if(er.test(email.value) && asunto.value != '' && mensaje.value != ''){
        bntEnviar.disabled = false;
        bntEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }else{
        bntEnviar.disabled=true;
        bntEnviar.classList.add('cursor-not-allowed', 'opacity-50');
    }
}


function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border','border-red-500','background-red-100', 'text-red-500','p-3','mt-5','text-center','error');  
  
    const errores = document.querySelectorAll('.error');
    if(errores.length === 0){
        form.appendChild(mensajeError);
    }
    

}

//envia el email
function enviarEmail(e){
    
    e.preventDefault();

    //mostrar el spinner
    const spiner = document.querySelector('#spinner');
    spiner.style.display = 'flex';

    //despues de 3 segundos, ocultar spinner y mostrar mensaje

    setTimeout(() => {
        spiner.style.display = 'none';

        //mensaje de que se envio
        const parrafo = document.createElement('p');
        parrafo.textContent='El mensaje se envio correctamente';
        parrafo.classList.add('text-center','my-10','p-3','bg-green-500','text-white','font-bold','uppercase')
        //inserta el parrafo antes del spinner
        form.insertBefore(parrafo, spiner);


        setTimeout(() => {
            parrafo.remove();//elimina el mensaje de exito
            vaciarForm();
        }, 5000);
    }, 3000);
}
//funcion para resetear el form

function vaciarForm(e){
    form.reset();
    e.preventDefault();
    iniciarApp();
}