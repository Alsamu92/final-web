import { initControler } from "../../utils/route"
import "./Inicio.css"

const template=()=>`<div id="cuestionario">Pincha aqui para ir al juego del cuestionario</div>
<div id="pokeapi">Pincha aqui para ir a la Pokeapi</div>
<div id="ahorcado">Pincha aqui para ir al juego del cuestionario</div>`

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
}