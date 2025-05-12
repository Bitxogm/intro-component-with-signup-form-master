document.addEventListener("DOMContentLoaded", () => {
    const FORMULARIO = document.getElementById('formulario');

    // SELECCIONAMOS LOS ELEMENTOS DEL DOM
    const nameInput = document.getElementById('name');
    const lastNameInput = document.getElementById('lastname');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const nameError = document.getElementById('nameError');
    const lastNameError = document.getElementById('LastnameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    const errorIcons = document.querySelectorAll('.error-icon');

    FORMULARIO.addEventListener('submit', (evento) => {
        // EVITAMOS QUE EL FORMULARIO SE ENVIE DE FORMATRADICONAL
        evento.preventDefault();

        // RESETEAMOS LOS ERRORES
        nameError.style.display = 'none';
        lastNameError.style.display = 'none';
        emailError.style.display = 'none';
        passwordError.style.display = 'none';

        errorIcons.forEach(icon => {
            icon.style.display = 'none';
        });

        nameInput.classList.remove('input-error');
        lastNameInput.classList.remove('input-error');
        emailInput.classList.remove('input-error');
        passwordInput.classList.remove('input-error');

        // OBTENEMOS VALORES DE LOS INPUT

        const nameValue = nameInput.value.trim();
        const lastNameValue = lastNameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        // MANEJO DE ERRORES
        let hasError = false;

        if (nameValue === '') {
            nameError.style.display = 'block';
            nameInput.classList.add('input-error');
            errorIcons[0].style.display = 'block'; // Asumiendo que el primer icono corresponde a name
            hasError = true;
        }

        if (lastNameValue === '') {
            lastNameError.style.display = 'block';
            lastNameInput.classList.add('input-error');
            errorIcons[1].style.display = 'block'; // Asumiendo que el segundo icono corresponde a lastname
            hasError = true;
        }

        if (emailValue === '') {
            emailError.textContent = "Email Address cannot be empty";
            emailError.style.display = 'block';
            emailInput.classList.add('input-error');
            errorIcons[2].style.display = 'block'; // Asumiendo que el tercer icono corresponde a email
            hasError = true;
        } else if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
            emailError.textContent = "Looks like this is not an email";
            emailError.style.display = 'block';
            emailInput.classList.add('input-error');
            errorIcons[2].style.display = 'block'; // Asumiendo que el tercer icono corresponde a email
            hasError = true;
        }

        if (passwordValue === '') {
            passwordError.style.display = 'block';
            passwordInput.classList.add('input-error');
            errorIcons[3].style.display = 'block'; // Asumiendo que el cuarto icono corresponde a password
            hasError = true;
        }

        if (hasError) {
            return; // Detiene el envío si hay errores
        }




        // MOSTRAR VALORES EN CONSOLA
        console.log('Name : ', nameValue);
        console.log('Lastname : ', lastNameValue);
        console.log('Email : ', emailValue);
        // TENER CUIDADO CON ESTO EN PRODUCCION
        console.log('Password : ', passwordValue);

        // GUARDAMOS LOS VALORES EN LOCALSTORAGE PARA UTILIZARLOS LUEGO
        localStorage.setItem('name', nameValue);
        localStorage.setItem('lastname', lastNameValue);
        localStorage.setItem('email', emailValue);
        localStorage.setItem('password', passwordValue);

        // PARA REDIRIGIR A OTRA PAGINA, CUANDO LA TENGAMOS PREPARADA

        window.location.href = "/resultados.html";

    });
});
