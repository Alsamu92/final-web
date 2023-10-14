import { initControler } from "../../utils/route";
import"./Login.css"

const template = () => `
  <div id="containerLogin">
  <img id=power src="https://res.cloudinary.com/djfkchzyq/image/upload/v1696860473/dt3tm02udkfvfmhhzjzv.png" alt="Logo de los power Ranger">
    <h1 id="titleLogin">ESCRIBE TU NOMBRE</h1>
    <input type="text" name="username" id="username" />
    <button id="button-login">Unirse</button>
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