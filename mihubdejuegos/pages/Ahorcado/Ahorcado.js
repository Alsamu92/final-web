import"./Ahorcado"
const template=()=>` <h1>Juego de Ahorcado</h1>
<div id="word-display"></div>
<div id="error-display"></div>
<div id="keyboard"></div>`

const palabras = ["gato", "perro", "flor", "casa", "sol"];
const maxErrores = 6;

let palabraSeleccionada = "";
let palabraAdivinada = [];
let errores = 0;

// Elementos del DOM
const wordDisplay = document.getElementById("word-display");
const errorDisplay = document.getElementById("error-display");
const keyboard = document.getElementById("keyboard");

// Función para seleccionar una palabra al azar
function seleccionarPalabra() {
    palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];
    palabraAdivinada = Array(palabraSeleccionada.length).fill("_");
    wordDisplay.innerText = palabraAdivinada.join(" ");
}

// Función para actualizar la pantalla de la palabra
function actualizarPalabra() {
    wordDisplay.innerText = palabraAdivinada.join(" ");
}

// Función para manejar la conjetura del jugador
function adivinarLetra(letra) {
    if (palabraSeleccionada.includes(letra)) {
        for (let i = 0; i < palabraSeleccionada.length; i++) {
            if (palabraSeleccionada[i] === letra) {
                palabraAdivinada[i] = letra;
            }
        }
    } else {
        errores++;
        errorDisplay.innerText = `Errores: ${errores}/${maxErrores}`;
    }

    actualizarPalabra();

    if (palabraAdivinada.join("") === palabraSeleccionada) {
        alert("¡Ganaste! La palabra era: " + palabraSeleccionada);
        reiniciarJuego();
    } else if (errores === maxErrores) {
        alert("Perdiste. La palabra era: " + palabraSeleccionada);
        reiniciarJuego();
    }
}

// Función para reiniciar el juego
function reiniciarJuego() {
    seleccionarPalabra();
    errores = 0;
    errorDisplay.innerText = `Errores: 0/${maxErrores}`;
}

// Inicialización del juego


// Crear botones para las letras del teclado
for (let letra of "abcdefghijklmnopqrstuvwxyz") {
    const button = document.createElement("button");
    button.innerText = letra;
    button.className = "button";
    button.addEventListener("click", () => {
        if (errores < maxErrores) {
            adivinarLetra(letra);
        }
    });
    keyboard.appendChild(button);
}

// Botón de reinicio
const reiniciarButton = document.createElement("button");
reiniciarButton.innerText = "Reiniciar";
reiniciarButton.className = "button";
reiniciarButton.addEventListener("click", reiniciarJuego);
keyboard.appendChild(reiniciarButton);

export const printAhorcado=()=>{
    document.querySelector("main").innerHTML=template()
    seleccionarPalabra();
actualizarPalabra();
}