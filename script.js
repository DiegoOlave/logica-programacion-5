const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const intentos = [];

function checkNumber() {
    const inputElement = document.getElementById("userInput");
    const messageElement = document.getElementById("message");
    const attemptsElement = document.getElementById("attempts");
    
    let userNumber = parseInt(inputElement.value, 10);
    
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
        messageElement.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
        return;
    }
    
    intentos.push(userNumber);
    
    if (userNumber === numeroSecreto) {
        messageElement.textContent = "¡Felicidades, adivinaste el número secreto!";
        attemptsElement.textContent = `Intentos: ${intentos.join(", ")}`;
    } else {
        messageElement.textContent = "Ups, el número secreto es incorrecto, vuelve a intentarlo.";
    }
}
