import { getUser } from "../../global/state/globalState";
import { printInicio } from "../../pages/Inicio/Inicio";
import { login } from "../../pages/Login/Login";

import { initControler } from "../../utils/route";
import "./Header.css";

const template=()=>`
      <img id="logo" src="https://res.cloudinary.com/djfkchzyq/image/upload/v1697566166/r3qd3trxfuenhnonbbrc.png" alt="Logo de la página">
      <nav>
          <img id="changeColor" src="https://res.cloudinary.com/djfkchzyq/image/upload/v1697566692/h5c1org8jfknd0fmyldb.png" alt="modo oscuro">
          <img id="boton-inicio" src="https://res.cloudinary.com/djfkchzyq/image/upload/v1697566687/q2dnuiqoum7zxk2mrahp.png" alt="boton de inicio">
          <img id="boton-logout" src="https://res.cloudinary.com/djfkchzyq/image/upload/v1697566683/l496fr0fikswll0uomcp.png" alt="boton de logout">
      </nav>
  `
const cambiarImagenSiDark = () => {
  const imagenUno=document.getElementById("logo")
  const imagenDos = document.getElementById("changeColor");
  const imagenTres = document.getElementById("boton-inicio");
  const imagenCuatro = document.getElementById("boton-logout");
  
  if (document.body.classList.contains("dark")) {
      imagenDos.src = "https://res.cloudinary.com/djfkchzyq/image/upload/v1697567404/vo19muaq0zdocunkvxcu.png";
      imagenDos.alt = "Imagen dark";
      imagenCuatro.src = "https://res.cloudinary.com/djfkchzyq/image/upload/v1697567412/nviscra5ek20a7jolutf.png";
      imagenCuatro.alt = "Imagen dark";
      imagenTres.src = "https://res.cloudinary.com/djfkchzyq/image/upload/v1697567412/mpyj2b2iojgvwi8zqxnq.png";
      imagenTres.alt = "Imagen dark";
      imagenUno.src = "https://res.cloudinary.com/djfkchzyq/image/upload/v1697567412/wbsdukph69iihyeq1wac.png";
      imagenUno.alt = "Imagen dark";
  } else {
      // Si no está en modo oscuro, establece las imágenes normales
      imagenDos.src = "https://res.cloudinary.com/djfkchzyq/image/upload/v1697566692/h5c1org8jfknd0fmyldb.png";
      imagenDos.alt = "modo oscuro";
      imagenCuatro.src = "https://res.cloudinary.com/djfkchzyq/image/upload/v1697566683/l496fr0fikswll0uomcp.png";
      imagenCuatro.alt = "boton de logout";
      imagenTres.src = "https://res.cloudinary.com/djfkchzyq/image/upload/v1697566687/q2dnuiqoum7zxk2mrahp.png";
      imagenTres.alt = "boton de inicio";
      imagenUno.src = "https://res.cloudinary.com/djfkchzyq/image/upload/v1697566166/r3qd3trxfuenhnonbbrc.png";
      imagenUno.alt = "boton de inicio";
  }
}

const addListeners = () => {
  const changeColor = document.getElementById("changeColor");
  const botonInicio = document.getElementById("boton-inicio");
  const botonLogout = document.getElementById("boton-logout");

  changeColor.addEventListener("click", () => {
  
      document.body.classList.toggle("dark");
      
      cambiarImagenSiDark();
  });

  botonInicio.addEventListener("click", () => {
     printInicio()
  });

  botonLogout.addEventListener("click", () => {
   login()
  });


  cambiarImagenSiDark();
}


export const printTemplateHeader = () => {
  document.querySelector("header").innerHTML =template() ;

  // Agrega los oyentes de eventos
  addListeners();
}