document.addEventListener("DOMContentLoaded", () => {

  const VALIDATE = document.getElementById('button-validate');

VALIDATE.addEventListener('click', (evento) => {
  evento.preventDefault();

  
  console.log('enviado');
  window.location.href = "./validate.html";

}); 


});