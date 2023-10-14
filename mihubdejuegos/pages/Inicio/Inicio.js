import { initControler } from "../../utils/route"
import "./Inicio.css"

const template=()=>`<div class="carta" id="cuestionario">Pincha aqui para ir al juego del cuestionario</div>
<div class="carta" id="pokeapi">Pincha aqui para ir a la Pokeapi</div>
<div class="carta" id="ahorcado">Pincha aqui para ir al juego del ahorcado</div>`

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
}
export const printInicio=()=>{
document.querySelector("main").innerHTML=template()
escuchadores()
const ocultar=document.getElementById("boton-logout")
    ocultar.style.display="flex"
const ocultarOtro=document.querySelector("#boton-inicio")
    ocultarOtro.style.display="flex"
}