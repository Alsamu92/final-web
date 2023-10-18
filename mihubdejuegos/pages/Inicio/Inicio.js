import { obtenerInformacion } from "../../utils/pokemonData"
import { initControler } from "../../utils/route"
import "./Inicio.css"

const template=()=>`<div id="galeria-inicio">
<div class="carta" id="cuestionario">
  <p>Resuelve el Cuestionario</p>
  <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1697616612/jkupqyxrsqixk1jpl0hv.png" alt="imagen de la resolución">
</div>
<div class="carta" id="pokeapi">
  <p>Visita la PokeApi</p>
  <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1697617983/tivix5cqkxzsxdwvzijp.png" alt="imagen de la resolución">
</div>
<div class="carta" id="ahorcado">
  <p>Juega al Ahorcado</p>
  <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1697617983/qp9lfw8j1a3ovy4flymt.png" alt="imagen de la resolución">
</div>
<div class="carta" id="tresen">
  <p>Tres en Raya</p>
  <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1697646387/ifimxfzyv6lzkz3dxpfj.png" alt="imagen de la resolución">
</div>
<div class="carta" id="memory">
  <p>Memory Game</p>
  <img src="https://res.cloudinary.com/djfkchzyq/image/upload/v1697618166/gpvxtzcaatyppnq11kzw.png" alt="imagen de la resolución">
</div>
</div>`

const escuchadores=()=>{
    const cuestionario=document.querySelector("#cuestionario")
    cuestionario.addEventListener("click",(event)=>{
initControler("Cuestionario")
    })
    const pokeapi=document.querySelector("#pokeapi")
    pokeapi.addEventListener("click",(event)=>{
initControler("Pokemon")
    })
    const ahorcado=document.querySelector("#ahorcado")
    ahorcado.addEventListener("click",(event)=>{
initControler("Ahorcado")
    })
    const memory=document.querySelector("#memory")
    memory.addEventListener("click",(event)=>{
initControler("Memory")
    })
    const tresEn=document.querySelector("#tresen")
    tresEn.addEventListener("click",(event)=>{
initControler("Tres")
    })
}
export const printInicio=()=>{
document.querySelector("main").innerHTML=template()
escuchadores()
const ocultar=document.getElementById("boton-logout")
    ocultar.style.display="flex"
const ocultarOtro=document.querySelector("#boton-inicio")
    ocultarOtro.style.display="flex"
    obtenerInformacion()
}