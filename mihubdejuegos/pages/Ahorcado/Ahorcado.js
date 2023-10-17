import { printInicio } from "../Inicio/Inicio";
import"./Ahorcado.css"
const template=()=>` 
<div id="juego">
<h1>Juego del Ahorcado</h1>
<div id="error-display">Fallos Restantes <span id="contador">7</span></div>
<div id="word-display"></div>
<div id="keyboard"></div>

</div>`

const letras = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

const palabrasPowerRangers =[
  "ROJO",
  "VERDE",
  "AZUL",
  "AMARILLO",
  "NARANJA",
  "VIOLETA",
  "MARRON",
  "BLANCO",
  "NEGRO",
  "GRIS",
  "ROSADO",
  "CELESTE",
  "MAGENTA",
  "CYAN",
  "TURQUESA",
  "GRANATE",
  "DORADO",
  "PLATEADO",
  "OLIVA",
  "LILA",
  "CARMESI",
  "ESMERALDA",
  "BRONCE",
  "PLATINO",
  "ALMENDRA",
  "CEREZA",
  "SALMON",
  "CARBON",
  "MARFIL",
  "CORAL"
]

let laPalabra = "";


const crearPalabraSecreta = () => {
  const indiceAleatorio = Math.floor(Math.random() * palabrasPowerRangers.length);
  laPalabra = palabrasPowerRangers[indiceAleatorio];
  console.log(laPalabra);

  const huecos = document.getElementById("word-display");
  huecos.innerHTML = "";

  laPalabra.split("").forEach((letrita) => {
    const hueco = document.createElement("div");
    hueco.textContent = "_";
    hueco.classList = "hueco";
    huecos.appendChild(hueco);
  });

  crearBotones();
};

const crearBotones = () => {
  letras.forEach((char) => {
    const cajonLetras = document.querySelector("#keyboard");
    const letra = document.createElement("button");
    letra.textContent = char;
    letra.classList = "letra";
    cajonLetras.appendChild(letra);
  });

  addListeners();
};

const addListeners = () => {
  const letter = document.querySelectorAll(".letra");
  let contador=0
  letter.forEach((item, index) => {
    item.addEventListener("click", () => {
      let letraEnPalabra = false;
      for (let i = 0; i < laPalabra.length; i++) {
        if (laPalabra[i] === item.textContent) {
          letraEnPalabra = true;
          item.style.background = "green";
          const huecos = document.querySelectorAll(".hueco");
          huecos[i].textContent = item.textContent;
          contador++
          setTimeout(()=>{mensajevictoria(contador)},1000)

        }
      }
      if (!letraEnPalabra) {
        item.style.background = "red";
        let fallos=document.querySelector("#contador")
fallos.textContent--
setTimeout(()=>{mensajeFinal(fallos)},1000)

        }
        
    });
  });
};

const mensajevictoria=(contador)=>{
  if(contador==laPalabra.length){
    const reseteo=document.querySelector("#juego")
    reseteo.innerHTML=""
    reseteo.innerHTML=` 
    <div id="juego">
    <h1>Juego del Ahorcado</h1>
    <h2 id="resolucion">Has Ganado</h2>
       <img id="imagen-resolucion" src="https://res.cloudinary.com/djfkchzyq/image/upload/v1697445897/a5tdbsdoshrqgtttrqws.jpg"" alt="imagen de la resolución">
       <button id="vuelta-inicio">Vuelve al Menú</button>
<button id="juego-nuevo">Jugar de Nuevo</button>
    </div>`
    const mens=document.querySelector("h2")
    mens.style.background="green"
    const inicio=document.querySelector("#vuelta-inicio")
  const nuevo=document.querySelector("#juego-nuevo")
  inicio.addEventListener("click",(event)=>{printInicio()})
  nuevo.addEventListener("click",(event)=>{printAhorcado()})
  }
  
}
const mensajeFinal=(fallos)=>{
  if(fallos.textContent==0){
    const reseteo=document.querySelector("#juego")
    reseteo.innerHTML=""
    reseteo.innerHTML=` 
    <div id="juego">
    <h1>Juego del Ahorcado</h1>
    <h2 id="resolucion">Has Perdido</h2>
       <img id="imagen-resolucion" src="https://res.cloudinary.com/djfkchzyq/image/upload/v1697123296/n07p03d2twf9rv2xxwrl.jpg"" alt="imagen de la resolución">
       <button id="vuelta-inicio">Vuelve al Menú</button>
<button id="juego-nuevo">Intentar de Nuevo</button>
    </div>`
    const inicio=document.querySelector("#vuelta-inicio")
  const nuevo=document.querySelector("#juego-nuevo")
  const mens=document.querySelector("h2")
  mens.style.background="red"
  inicio.addEventListener("click",(event)=>{printInicio()})
  nuevo.addEventListener("click",(event)=>{printAhorcado()})
  }
  
}


export const printAhorcado = () => {
  document.querySelector("main").innerHTML = template();
  crearPalabraSecreta();
};