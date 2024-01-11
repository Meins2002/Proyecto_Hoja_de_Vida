console.log("Hoja de Vida Interactiva Cargada");

document.getElementById('addSkill').addEventListener('click', function() {
    let newSkill = prompt("Introduce una nueva habilidad:");
    if (newSkill) {
        let ul = document.getElementById('skillsList'); // Suponiendo que tienes un <ul id="skillsList"> para tus habilidades
        let li = document.createElement('li');
        li.textContent = newSkill;
        ul.appendChild(li);
    }
});

/*Este código creará un prompt que le pedirá al usuario su correo electrónico. 
El correo electrónico introducido por el usuario se devolverá como una cadena de texto.*/
function mostrarPrompt() {
    var correo = prompt("Introduce tu correo electrónico:");
    return correo;
  }
// Este código creará un mensaje de alerta que mostrará el correo electrónico introducido por el usuario.
function mostrarAlerta(correo) {
alert("Gracias " + correo + ", me pondré en contacto contigo pronto!");
}

/*Cuando el usuario haga clic en el botón, se ejecutará la función mostrarPrompt(). La función mostrarPrompt() 
devolverá el correo electrónico introducido por el usuario. La función mostrarAlerta() mostrará un mensaje de 
alerta con el correo electrónico introducido por el usuario.*/
document.getElementById("contactar").addEventListener("click", function() {
    var correo = mostrarPrompt();
    mostrarAlerta(correo);
  });