import { printInicio } from "../Inicio/Inicio";
import "./Cuestionario.css";

const preguntas = [
  {
    "pregunta": "¿Cuál es el nombre del actor que interpreta a Jason, el Ranger Rojo, en la primera temporada?",
    "opciones": ["Austin St. John", "Jason David Frank", "David Yost", "Walter Emanuel Jones"],
    "respuestaCorrecta": "Austin St. John"
  },
  {
    "pregunta": "¿Cuál es el nombre del dinosaurio que representa al Ranger Negro en la primera temporada?",
    "opciones": ["Triceratops", "Tiranosaurio", "Mamut", "Esmilodon"],
    "respuestaCorrecta": "Mamut"
  },
  {
    "pregunta": "¿Quién es el líder de los Power Rangers en la primera temporada?",
    "opciones": ["Tommy", "Kimberly", "Billy", "Jason"],
    "respuestaCorrecta": "Jason"
  },
  {
    "pregunta": "¿Qué objeto mágico les da poderes a los Power Rangers en la primera temporada?",
    "opciones": ["La Espada del Destino", "El Anillo del Poder", "El Morpher", "La Varita Mágica"],
    "respuestaCorrecta": "El Morpher"
  },
  {
    "pregunta": "¿En qué ciudad se encuentra la base de operaciones de los Power Rangers en la primera temporada?",
    "opciones": ["Angel Grove", "Reefside", "Corinth", "Stone Canyon"],
    "respuestaCorrecta": "Angel Grove"
  },
  {
    "pregunta": "¿Cuál es el nombre del enemigo principal que los Power Rangers enfrentan en la primera temporada después de Rita Repulsa?",
    "opciones": ["Lord Zedd", "Goldar", "Scorpina", "Finster"],
    "respuestaCorrecta": "Lord Zedd"
  },
  {
    "pregunta": "¿Cuál es el nombre del mentor de los Power Rangers en la primera temporada?",
    "opciones": ["Maestro Splinter", "Zordon", "Obi-Wan Kenobi", "Dumbledore"],
    "respuestaCorrecta": "Zordon"
  },
  {
    "pregunta": "¿Qué personaje se une al equipo como el Ranger Blanco en la primera temporada?",
    "opciones": ["Tommy", "Jason", "Zack", "Kimberly"],
    "respuestaCorrecta": "Tommy"
  },
  {
    "pregunta": "¿Qué dinosaurio representa al Zord del Ranger Rojo en la primera temporada?",
    "opciones": ["Tyrannosaurus", "Pterodáctilo", "Triceratops", "Mastodon"],
    "respuestaCorrecta": "Tyrannosaurus"
  },
  {
    "pregunta": "¿Qué arma usa el Ranger Negro en la primera temporada?",
    "opciones": ["Espada Sable", "Ballesta", "Lanza", "Hacha"],
    "respuestaCorrecta": "Hacha"
  },
  {
    "pregunta": "¿Cómo hace la flauta del Ranger verde?",
    "opciones": ["Ti to ti tirorí", "tu tu tu", "ti ti ti", "te te te ti ti"],
    "respuestaCorrecta": "Ti to ti tirorí"
  },
];

const template = () => ` 
  <div id="quiz">
  <div id="pregunta-container">
  <h1>Pregunta:</h1>
  <p id="pregunta-text"></p>
  <ul id="opciones-list"></ul>
  <p id="respuesta-text"></p>
  </div>
  
  <div id="contador-container">
  <p>Respuestas Correctas: <span id="respuestas-correctas">0</span></p>
  </div>
  
  <button id="siguiente-pregunta">Siguiente Pregunta</button>
  </div>`;
// Declaro las variables que voy a usar en la aplicacion

let preguntaActual = 0;

// Esta funcion se encarga de cargar las preguntas
const verPregunta = () => {
  // llamo a los dos elementos en los que quiero pintar
  const elUl = document.getElementById("opciones-list");
  const laRespuesta = document.getElementById("respuesta-text");
  const textoPregunta = document.getElementById("pregunta-text");
  // seteo a cero los huecos para que no se pinten debajo de las anteriores
  laRespuesta.innerHTML = "";
  elUl.innerHTML = "";
  // esto solo le da un color neutro al cajon de si es correcta
  laRespuesta.style.background = "rgb(238, 237, 232)";
  //  esto setea el texto de la pregunta dependiendo de la pregunta actual

  const pregunta = preguntas[preguntaActual].pregunta;
  textoPregunta.textContent = pregunta;
  // una vez hecho esto llama a la funcion que pinta las opciones
  anadirOp();
};
// esta funcion hace un bucle con las posibles respuestas y crea un li
// para cada una luego las añade a la ul
const anadirOp = () => {
  let contador = document.getElementById("contador container");
  preguntas[preguntaActual].opciones.forEach((opcion) => {
    const elUl = document.getElementById("opciones-list");
    const nuevaOp = document.createElement("button");
    nuevaOp.classList = "opcion";
    nuevaOp.textContent = opcion;
    elUl.appendChild(nuevaOp);
    nuevaOp.addEventListener("click", (event) => {
      const respuest = document.getElementById("respuesta-text");
      const allLi = document.querySelectorAll(".opcion");
      allLi.forEach((boton) => {
        boton.setAttribute("disabled", "true");
      });

      if (preguntas[preguntaActual].respuestaCorrecta === opcion) {
        respuest.textContent = "Respuesta correcta";
        respuest.style.background = "rgb(53, 221, 31)";
        nuevaOp.style.border = "2px solid green";
        nuevaOp.style.color = "green";

        contador = document.querySelector("#respuestas-correctas");
        contador.textContent++;
      } else {
        respuest.textContent = "Respuesta incorrecta";
        respuest.style.background = "rgb(216, 61, 22)";
        nuevaOp.style.border = "2px solid red";
        nuevaOp.style.color = "red";
      }
    });
  });
};

const siguiente = () => {
  const botonSiguiente = document.getElementById("siguiente-pregunta");
  botonSiguiente.addEventListener("click", () => {
    if (preguntaActual < preguntas.length - 1) {
      preguntaActual++;

      verPregunta();
    } else {
      unaFuncionGrande();
    }
  });
};
//  en esta funcion he metido muchas cosas que hace si acaba el juego
const unaFuncionGrande = () => {
  const divGrande = document.querySelector("#pregunta-container");
  divGrande.innerHTML = "";
  divGrande.innerHTML = `<div id="mensaje-final"></div>`;
  const mens = document.querySelector("#mensaje-final");
  const cambiarBoton = document.querySelector("#siguiente-pregunta");
  cambiarBoton.addEventListener("click", (event) => {
    printInicio();
  });

  cambiarBoton.textContent = "Volver al Menú";
  mens.innerHTML = mensaje();
  preguntaActual = 0;
  const solucion = document.querySelector("#resolucion");
  const imagenSolve = document.querySelector("#imagen-resolucion");
  const contadorFinal = document.querySelector("#respuestas-correctas");
  if (contadorFinal.textContent > 5) {
    solucion.textContent = "Has ganado";
    solucion.style.background="green"
    imagenSolve.src =
      "https://res.cloudinary.com/djfkchzyq/image/upload/v1697445897/a5tdbsdoshrqgtttrqws.jpg";
  } else {
    solucion.textContent = "Has perdido";
    solucion.style.background="red"
    imagenSolve.src =
      "https://res.cloudinary.com/djfkchzyq/image/upload/v1697123296/n07p03d2twf9rv2xxwrl.jpg";
  }
};

const mensaje = () => `<h2 id="resolucion"></h2>
     <img id="imagen-resolucion" src="" alt="imagen de la resolución">`;

export const printCuestionario = () => {
  document.querySelector("main").innerHTML = template();
  verPregunta();
  siguiente();
};
