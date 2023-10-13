import { initControler } from "../../utils/route"
import "./Inicio.css"

const template=()=>`<div id="cuestionario">Pincha aqui para ir al juego del cuestionario</div>`

const escuchadores=()=>{
    const cuestionario=document.querySelector("#cuestionario")
    cuestionario.addEventListener("click",(event)=>{
initControler("Cuestionario")
    })
}
export const printInicio=()=>{
document.querySelector("main").innerHTML=template()
escuchadores()
}