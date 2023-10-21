import { printInicio } from "../Inicio/Inicio"
import "./TresEnRaya.css"

const template=()=>`<div id="mensajeobras">
<h1 id="obras">Vaya! No deberás estar aquí en este momento,da la vuelta.Rápido</h1>

<button id="boton-obras">Volver al Inicio</button>
<img id="imagen-obras" src="https://res.cloudinary.com/djfkchzyq/image/upload/v1697651937/hvj9ylnx3td50qt9er4j.png" alt="Mensaje de Obras">
</div>
`

const volver=()=>{
    const boton=document.getElementById("boton-obras")
    boton.addEventListener("click",()=>{
        printInicio()
    })
}


export const printTresEnRaya=()=>{
    document.querySelector("main").innerHTML=template()
    volver()
}