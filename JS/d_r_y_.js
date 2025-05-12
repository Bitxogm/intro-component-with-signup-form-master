//Cargamos el DOM
document.addEventListener('DOMContentLoaded', () => {

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

  //Crear un array de objetos para cada campo(name,lastname, email, password)
  const formFields = [
    {
      id: 'name',  // Id del input
      inputElement: nameInput, // Referencia al elemento <input>
      errorElement: nameError, //Refencia al elemento mensaje de error
      iconElement: errorIcons[0] //Referencia al icono de error , en posicion 0 para el primer icono
    },

    {
      id: 'lastname',
      inputElement: lastNameInput,
      errorElement: lastNameError,
      iconElement: errorIcons[1]
    },

    {
      id: 'email',
      inputElement: emailInput,
      errorElement: emailError,
      iconElement: errorIcons[2]
    },

    {
      id: 'password',
      inputElement: passwordInput,
      errorElement: passwordError,
      iconElement: errorIcons[3]
    },
  ];

  const validateField = (field) => {
    const value = field.inputElement.value.trim();
    let fieldHasError = false

    if (value === '') {
      field.errorElement.textContent = `${field.inputElement.placeholder} cannot be empty`; // Mensaje genérico, usando placeholder
      field.errorElement.style.display = 'block';
      field.inputElement.classList.add('input-error');
      field.iconElement.style.display = 'block';
      fieldHasError = true
    }
    else if (field.id === 'email' && !/^\S+@\S+\.\S+$/.test(value)) {
      field.errorElement.textContent = 'Looks like this is not an email';
      field.errorElement.style.display = 'block';
      field.inputElement.classList.add('input-error');
      field.iconElement.style.display = 'block';
    };
    return fieldHasError;

  }


  FORMULARIO.addEventListener('submit', (evento) => {
    // EVITAMOS QUE EL FORMULARIO SE ENVIE DE FORMATRADICONAL
    evento.preventDefault();
    formFields.forEach(field => {
      field.errorElement.style.display = 'none';
      field.inputElement.classList.remove('input-error');
      field.iconElement.style.display = 'none';
      fieldHasError = true
    });

    //MANEJO DE ERRORES (GENERALIZADO CON EL BUCLE)
    let hasError = false;

    formFields.forEach(field => {
      if (validateField(field)) {
        hasError = true
      }
    });

    if (hasError) {
      return
    }


    // OBTENEMOS VALORES DE LOS INPUT (Ahora que ya están validados)
    // Podemos obtenerlos de formFields también, o mantener como antes.
    // Los obtendremos del array formFields para que sea más consistente:
    const nameValue = formFields.find(f => f.id === 'name').inputElement.value.trim();
    const lastNameValue = formFields.find(f => f.id === 'lastname').inputElement.value.trim();
    const emailValue = formFields.find(f => f.id === 'email').inputElement.value.trim();
    const passwordValue = formFields.find(f => f.id === 'password').inputElement.value.trim();




    // MOSTRAR VALORES EN CONSOLA
    console.log('Name : ', nameValue);
    console.log('Lastname : ', lastNameValue);
    console.log('Email : ', emailValue);
    // TENER CUIDADO CON ESTO EN PRODUCCION
    console.log('Password : ', passwordValue);

    formFields.forEach(field => {
      const valueToStore = field.inputElement.value.trim();

      localStorage.setItem(field.id, valueToStore)
   
    })
    
    // PARA REDIRIGIR A OTRA PAGINA, CUANDO LA TENGAMOS PREPARADA
    window.location.href = "/resultados.html";
  });
});















