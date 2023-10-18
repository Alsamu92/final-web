import { printInicio } from "../Inicio/Inicio";
import"./Ahorcado.css"
const template=()=>` 
<div id="juego">
<h1>Juego del Ahorcado</h1>
<div id="error-display">
<img id="imagen-contador" src="https://res.cloudinary.com/djfkchzyq/image/upload/v1697620933/dw811fxc3frdnhgg034m.png" alt="contador-fallos
">

</div>
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
let fallosContador=5


const crearPalabraSecreta = () => {
  const indiceAleatorio = Math.floor(Math.random() * palabrasPowerRangers.length);
  laPalabra = palabrasPowerRangers[indiceAleatorio];
 

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
     item.setAttribute("disabled", "true");
      for (let i = 0; i < laPalabra.length; i++) {
        if (laPalabra[i] === item.textContent) {
         letraEnPalabra = true;
          item.style.background = "green";
          const huecos = document.querySelectorAll(".hueco");
          huecos[i].textContent = item.textContent;
          contador++
          setTimeout(()=>{mensajevictoria(contador)},500)

        }
      }
      if (!letraEnPalabra) {
        
        item.style.background = "red";
        let counterImage=document.querySelector("#imagen-contador")
    fallosContador--
    console.log(fallosContador)
    switch (fallosContador) {
      case 4:
      counterImage.src="https://res.cloudinary.com/djfkchzyq/image/upload/v1697620933/gcq8mccmiroyws6cafka.png"
      break;
      case 3:
        counterImage.src="https://res.cloudinary.com/djfkchzyq/image/upload/v1697620932/tqhkzcfigivs7ujlvouf.png"
        break;
      case 2:
        counterImage.src="https://res.cloudinary.com/djfkchzyq/image/upload/v1697620932/hrho66zoslnbgl31zuob.png"
        break;
    
      case 1:
        counterImage.src="https://res.cloudinary.com/djfkchzyq/image/upload/v1697620932/sr4hwdldjyrflltvrcnc.png"
        break;
      case 0:
        counterImage.src="https://res.cloudinary.com/djfkchzyq/image/upload/v1697620932/a11s6tzphhbutjizlrhm.png"
    }
setTimeout(()=>{mensajeFinal(counterImage)},500)

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

  if(fallos.src=="https://res.cloudinary.com/djfkchzyq/image/upload/v1697620932/a11s6tzphhbutjizlrhm.png"){
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