document.addEventListener("DOMContentLoaded" , () =>{
    const FORMULARIO = document.getElementById('formulario');

    FORMULARIO.addEventListener('submit', (evento) => {
        // EVITAMOS QUE EL FORMULARIO SE ENVIE DE FORMATRADICONAL
        evento.preventDefault(); 

        // OBTENEMOS VALORES DE LOS INPUT

        const nameInput= document.getElementById('name').value;
        const lastNameInput = document.getElementById('lastname').value;
        const emailInput = document.getElementById('email').value;
        const passwordInput = document.getElementById('password').value;

        // MANEJO DE ERRORES // OCULTOS POR DEFECTO

        // const errorMessages= document.querySelectorAll('.error-message');
        //  errorMessages.forEach( error => {
        //     error.style.display= 'none'; //OCULTA EL MENSAJE DEL <SPAN CLASS ='error-message'
        //  });

         // CREAMOS VARIABLE PARA RASTREAR LOS ERRORES
        //  let hasError = false

        //  VALIDACION DE DATOS

        //  if (nameInput.valuetrim() === ''){
        //     nameError.style.display = 'block';
        //     hasError = true
        // }


        // MOSTRAR VALORES EN CONSOLA
        console.log('Name : ', nameInput);
        console.log('Lastname : ', lastNameInput);
        console.log('Email : ', emailInput);
        // TENER CUIDADO CON ESTO EN PRODUCCION
        console.log('Password : ', passwordInput);

        // GUARDAMOS LOS VALORES EN LOCALSTORAGE PARA UTILIZARLOS LUEGO
        localStorage.setItem('Name', nameInput);
        localStorage.setItem('Lastname', lastNameInput);
        localStorage.setItem('Email', emailInput)
        localStorage.setItem('Password', passwordInput);

        // PARA REDIRIGIR A OTRA PAGINA, CUANDO LA TENGAMOS PREPARADA

        window.location.href= "#";

    });
});