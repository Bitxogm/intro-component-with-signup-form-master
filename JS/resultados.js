document.addEventListener('DOMContentLoaded', () => {

  //1.Crear un array con todos los input.
  const inputIds = ['name', 'lastname', 'email', 'password']

  //2 Recorremos cada id del array con foreach.()
  inputIds.forEach(id => {

    //3 Dentro del bloque aplicamos la logica para el id actual ,1ºname, 2º lastname etc..
    const currentInput = document.getElementById(id);
    const currentValue = localStorage.getItem(id);

    4//Aseguraerse que el input exista en el html
    if (currentInput) {
      currentInput.value = currentValue || `Campo ${id} no disponible`;
      currentInput.readOnly = true

    }

  });

});

