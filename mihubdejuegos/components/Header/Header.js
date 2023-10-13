import { printInicio } from "../../pages/Inicio/Inicio";
import { login } from "../../pages/Login/Login";
import "./Header.css";

const template = () => `
  <img
    src="https://res.cloudinary.com/djfkchzyq/image/upload/v1697189452/brsridzgr8jx5tlueots.jpg"
    alt="title hub game website (app)"
    class="logo"
  />
  <nav>
    <img
      src="https://res.cloudinary.com/djfkchzyq/image/upload/v1697220075/eziaauym8vqfkncykl5c.png"
      alt=" change to style mode page"
      id="changeColor"
    />
    <img
      src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682685633/home_nekvs0.png"
      alt=" navigate to home app"
      id="boton-inicio"
    />
    <img
      src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682679055/logout_arz0gw.png"
      alt="logout"
      id="boton-logout"
    />
  </nav>
`
const addListeners = () => {
 
    const changeColor = document.getElementById("changeColor");
    const botonInicio = document.getElementById("boton-inicio");
    const deslogar = document.getElementById("boton-logout");
    changeColor.addEventListener("click", (e) => {
      document.body.classList.toggle("dark");
    })
    deslogar.addEventListener("click", (e) => {
    login()
    })
    botonInicio.addEventListener("click", (e) => {
        printInicio();
      })
}

    export const printTemplateHeader=()=>{
    document.querySelector("header").innerHTML=template()
    addListeners()
}