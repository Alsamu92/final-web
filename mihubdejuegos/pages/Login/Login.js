import { initControler } from "../../utils/route";
import"./Login.css"

const template = () => `
  <div id="containerLogin">
    <h1 id="titleLogin">ESCRIBE TU NOMBRE</h1>
    <input type="text" name="username" id="username" />
    <button id="button-login">enviar</button>
  </div>
`;
const escuchadores=()=>{
    const inicio=document.querySelector("#button-login")
    inicio.addEventListener("click",(event)=>{
        initControler("Inicio")
    })
    }

export const login=()=>{
    document.querySelector("main").innerHTML=template()
    escuchadores()
}