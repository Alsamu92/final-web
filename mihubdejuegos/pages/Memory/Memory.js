import "./Memory.css";

const template = () => `
  <div id="un-container">
    <div id="contenedor-juego"></div>
    <button id="reiniciar">Reiniciar</button>
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
       alert("you win")
    },1000)
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
  for (let i = 0; i < cardCount; i++) {
    const randomIndex = Math.floor(Math.random() * colorsPickList.length);
    const card = colorsPickList[randomIndex].imagen;
    colorsPickList.splice(randomIndex, 1);
    const tarjeta = buildCard(card);

    const divJuego = document.querySelector("#contenedor-juego");
    divJuego.appendChild(tarjeta);
  }
};



export const printMemory = () => {
  document.querySelector("main").innerHTML = template();
  initializeGame()
};

