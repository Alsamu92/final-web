import { setUser, setUserData } from "../../global/state/globalState";
import { initControler } from "../../utils/route";
import"./Login.css"

const template = () => `
  <div id="containerLogin">
  <img id=power src="https://res.cloudinary.com/djfkchzyq/image/upload/v1696860473/dt3tm02udkfvfmhhzjzv.png" alt="Logo de los power Ranger">
    
    <input type="text" name="username" id="username" />
    <button id="buttonLogin">Unirse</button></div>
   
 
`;
const escuchadores = () => {
  const buttonLogin = document.getElementById("buttonLogin");
  const username = document.getElementById("username");
  buttonLogin.addEventListener("click", (e) => {
    const valueInput = username.value;
    const userToLocalStorage = {
      token: true,
      name: valueInput,
      fav: [],
    };
   
 if (localStorage.getItem(`${valueInput}USER`)) {
      const localUser = localStorage.getItem(`${valueInput}USER`);
      const parseUser = JSON.parse(localUser);
      parseUser.token = true;

      const stringUser = JSON.stringify(parseUser);
      localStorage.setItem(`${valueInput}USER`, stringUser);
      sessionStorage.setItem("currentUser", `${valueInput}USER`);
      setUser(`${valueInput}USER`);

      setUserData(parseUser);
      
    } else {
      const customUser = {
        name: username.value,
        fav: [],
        token: true,
      };
      const stringUser = JSON.stringify(customUser);
      localStorage.setItem(`${valueInput}USER`, stringUser);
      sessionStorage.setItem("currentUser", `${valueInput}USER`);
      setUser(`${valueInput}USER`);
      setUserData(customUser);
    }

    initControler();
  });
};

export const login=()=>{
    document.querySelector("main").innerHTML=template()
    escuchadores()
    const ocultar=document.getElementById("boton-logout")
    ocultar.style.display="none"
    const ocultarOtro=document.getElementById("boton-inicio")
    ocultarOtro.style.display="none"
}
