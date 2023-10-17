import"./Memory.css"


const template=()=>`<div id="contenedor-juego"></div>`


const contenidoCartas=[
    "😄",
    "😃",
    "😊",
    "😁",
    "😍",
    "😘",
    "🥰",
    "😻",
    "😎",
    "🤩",
    "🤗",
    "🤔",
    "🙄",
    "😏",
    "😬",
    "😳"
  ]

  const crearCartas=()=>{
    contenidoCartas.forEach((emoticono)=>{
        const carta=document.createElement("div")
        carta.classList="tarjeta"
        carta.textContent="?"
        const contenedor=document.getElementById("contenedor-juego")
        contenedor.appendChild(carta)
        
    })
    añadirEscuchadores()
  }
  const añadirEscuchadores=()=>{
const todaslasCartas=document.querySelectorAll(".tarjeta")
 todaslasCartas.addEventListener("click",(e)=>{
    console.log("holaa")
 })
}
 
  







export const printMemory=()=>{
    document.querySelector("main").innerHTML=template()
    crearCartas()
}