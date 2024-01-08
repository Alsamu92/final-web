import { printAhorcado } from "../Ahorcado/Ahorcado";
import { printInicio } from "../Inicio/Inicio";
import "./Memory.css";

const template = () => `
  <div id="un-container">
  <div id="cuentaRegresiva">1:00</div>
    <div id="contenedor-juego"></div>
  
  </div>
`;

const cartasDejuego = [
  { color: "rojo", imagen: "https://res.cloudinary.com/djfkchzyq/image/upload/v1697635530/i5fyik74lkgtgkainquc.png" },
  { color: "verde", imagen: "https://res.cloudinary.com/djfkchzyq/image/upload/v1697635530/uljdsrib9dbvdv8pftqx.png" },
  { color: "azul", imagen: "https://res.cloudinary.com/djfkchzyq/image/upload/v1697635530/z2getd54epgtqgaqv4gx.png" },
  { color: "negro", imagen: "https://res.cloudinary.com/djfkchzyq/image/upload/v1697635530/les05mutq53rutbmaopj.png" },
  { color: "rosa", imagen: "https://res.cloudinary.com/djfkchzyq/image/upload/v1697635530/qsbbjxuv6r0znl71ug0m.png" },
  { color: "amarillo", imagen: "https://res.cloudinary.com/djfkchzyq/image/upload/v1697635530/s7adtvd2dxmtdahmomd2.png" },
];

const colorsPickList = [...cartasDejuego, ...cartasDejuego];
const cardCount = colorsPickList.length;
let revealedCount = 0;
let activeCard = null;
let awaitingEndMove = false;

const buildCard = (color) => {
  const element = document.createElement("img");
  element.classList.add("tarjeta");
  element.src = "https://res.cloudinary.com/djfkchzyq/image/upload/v1697631188/o70lwtspz7oidwhdz5ou.png";
  element.setAttribute("data-color", color);
  element.setAttribute("data-revealed", "false");
  element.addEventListener("click", () => handleCardClick(element, color));
  return element;
};

const handleCardClick = (element, color) => {
  const revealed = element.getAttribute("data-revealed");
  //esto desactiva el click de las cartas en cualquiera de estos tres supuestos, haciendo return directamente
  //sin ejecutar el resto del código
  //awaiting solo estará true 1 segundo cuando no coincidan las cartas.
  if (awaitingEndMove || revealed === "true" || element === activeCard) {
    return;
  }
element.classList.add("girada")
  element.src = color;

  if (!activeCard) {
    activeCard = element;
    return;
  }

  const colorToMatch = activeCard.getAttribute("data-color");
  console.log(color);

  if (colorToMatch === color) {
    handleMatchedCards();
    return;
  }

  handleMismatchedCards(element);
};

const handleMatchedCards = () => {
  activeCard.setAttribute("data-revealed", "true");
  activeCard = null;
  awaitingEndMove = false;
  revealedCount += 2;

  if (revealedCount === cardCount) {
    setTimeout(()=>{
       mensajevictoria()
    },500)
   ;

  }
};

const handleMismatchedCards = (element) => {
  awaitingEndMove = true;
  setTimeout(() => {
    element.src = "https://res.cloudinary.com/djfkchzyq/image/upload/v1697631188/o70lwtspz7oidwhdz5ou.png";
    element.classList.remove("girada");
    activeCard.src = "https://res.cloudinary.com/djfkchzyq/image/upload/v1697631188/o70lwtspz7oidwhdz5ou.png";
    activeCard.classList.remove("girada");
    awaitingEndMove = false;
    activeCard = null;
  }, 1000);
};

const initializeGame = () => {
  duracionTotalSegundos = 30
  revealedCount = 0;
  activeCard = null;
  awaitingEndMove = false;
  colorsPickList.splice(0, colorsPickList.length, ...cartasDejuego, ...cartasDejuego);
  mensajeDerrota()
  const divJuego = document.querySelector("#contenedor-juego");
  divJuego.innerHTML = "";

  for (let i = 0; i < cardCount; i++) {
    const randomIndex = Math.floor(Math.random() * colorsPickList.length);
    const cardObj = colorsPickList[randomIndex];
    const card = cardObj ? cardObj.imagen : "";
    colorsPickList.splice(randomIndex, 1);
    const tarjeta = buildCard(card);

    divJuego.appendChild(tarjeta);
  }
};
const mensajevictoria=()=>{
 
    const reseteo=document.querySelector("#un-container")
    reseteo.innerHTML=""
    reseteo.innerHTML=` 
    <div id="juego">
    <h1>Juego de Memoria</h1>
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
  nuevo.addEventListener("click",(event)=>{printMemory()})

  
  
}
  let duracionTotalSegundos = 30;
const mensajeDerrota=()=>{

  let minutos = Math.floor(duracionTotalSegundos / 60);
  let segundos = duracionTotalSegundos % 60;
 let cuentaRegresivaElemento = document.querySelector('#cuentaRegresiva');
  
  let actualizarCuentaRegresiva = () => {
    let minutosFormateados = minutos < 10 ? '0' + minutos : minutos;
   let segundosFormateados = segundos < 10 ? '0' + segundos : segundos;
    cuentaRegresivaElemento.innerHTML = `${minutosFormateados}:${segundosFormateados}`;
  };
  
  actualizarCuentaRegresiva();
  
 let intervaloCuentaRegresiva = setInterval(() => {
    duracionTotalSegundos--;
    minutos = Math.floor(duracionTotalSegundos / 60);
    segundos = duracionTotalSegundos % 60;
    actualizarCuentaRegresiva();
    if(duracionTotalSegundos<10){
      cuentaRegresivaElemento.style.color="red"
    }
  
    if (duracionTotalSegundos <= 0 && revealedCount != 12) {
      clearInterval(intervaloCuentaRegresiva);
      const reseteo=document.querySelector("#un-container")
    reseteo.innerHTML=""
    reseteo.innerHTML=` 
    <div id="juego">
    <h1>Juego de Memoria</h1>
    <h2 id="resolucion">Has Perdido</h2>
       <img id="imagen-resolucion" src="https://res.cloudinary.com/djfkchzyq/image/upload/v1697123296/n07p03d2twf9rv2xxwrl.jpg"" alt="imagen de la resolución">
       <button id="vuelta-inicio">Vuelve al Menú</button>
<button id="juego-nuevo">Jugar de Nuevo</button>
    </div>`
    const mens=document.querySelector("h2")
    mens.style.background="red"
    const inicio=document.querySelector("#vuelta-inicio")
  const nuevo=document.querySelector("#juego-nuevo")
  inicio.addEventListener("click",(event)=>{printInicio()})
  nuevo.addEventListener("click",(event)=>{printMemory()});
    }
  }, 1000);
}




export const printMemory = () => {
  document.querySelector("main").innerHTML = template();
  initializeGame()

};

