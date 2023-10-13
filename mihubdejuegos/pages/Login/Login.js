import"./Login.css"

const template = () => `
  <div id="containerLogin">
    <h1 id="titleLogin">ESCRIBE TU NOMBRE</h1>
    <input type="text" name="username" id="username" />
    <button id="buttonLogin">enviar</button>
  </div>
`;

export const login=()=>{
    document.querySelector("main").innerHTML=template()
}