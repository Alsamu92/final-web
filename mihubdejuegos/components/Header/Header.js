import { getUser } from "../../global/state/globalState";
import { printInicio } from "../../pages/Inicio/Inicio";

import { initControler } from "../../utils/route";
import "./Header.css";

const template = () => `
  <img
    src="https://res.cloudinary.com/djfkchzyq/image/upload/v1697267345/cxkt2deq2ncdhs8ivybe.png"
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
      cambiarImagenSiDark()
    })
   
  deslogar.addEventListener("click", (e) => {
    const userState = getUser().name;
    const currentUser = localStorage.getItem(userState);
    const parseCurrentUser = JSON.parse(currentUser);
    const updateUser = { ...parseCurrentUser, token: false };
    const stringUpdateUser = JSON.stringify(updateUser);
    localStorage.removeItem(userState);
    sessionStorage.removeItem("currentUser");
    localStorage.setItem(userState, stringUpdateUser);
   initControler("Login");
  });
    botonInicio.addEventListener("click", (e) => {
        printInicio();
      })
}
const cambiarImagenSiDark=()=> {
 const logoElement = document.querySelector(".logo");

  if (document.body.classList.contains("dark")) {
    logoElement.src = "https://res.cloudinary.com/djfkchzyq/image/upload/v1697123296/n07p03d2twf9rv2xxwrl.jpg";
  } else {
    logoElement.src = "https://res.cloudinary.com/djfkchzyq/image/upload/v1697267345/cxkt2deq2ncdhs8ivybe.png";
  }
}

    export const printTemplateHeader=()=>{
    document.querySelector("header").innerHTML=template()
    addListeners()
    
}