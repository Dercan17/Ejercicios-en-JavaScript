const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown',() => {
console.log('escribiendo');

})

busqueda.addEventListener('keyup',() => {
    console.log('soltando');
    
    })
    busqueda.addEventListener('blur',() => {
        console.log('saliendo de input');
        
        })
        busqueda.addEventListener('copy',() => {
            console.log('texto copeado');
            
            })

            busqueda.addEventListener('paste',() => {
                console.log('texto pegado');
                
                })

                busqueda.addEventListener('cur',() => {
                    console.log('texto cortado');
                    
                    })

                    busqueda.addEventListener('input',(e) => {
                        //nos dice en que input estamos trabajando. el .value envia lo que uno escribe letra por letra a la consola
                        console.log(e.target.value);
                        
                        })