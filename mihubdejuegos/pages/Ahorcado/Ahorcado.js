import"./Ahorcado.css"
const template=()=>` 
<div id="juego">
<h1>Juego de Ahorcado</h1>
<div id="word-display"></div>
<div id="keyboard"></div>
<div id="error-display"></div>
</div>`

const letras = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
  
const palabrasPowerRangers =[
    "RANGER",
    "BATALLA",
    "ZORD",
    "MORPHIN",
    "VILLANO",
    "ALIANZA",
    "LUCHA",
    "EQUIPO",
    "MORPHER",
    "ENEMIGO",
    "HÉROES",
    "ESPADA",
    "ROBOT",
    "CINTURÓN",
    "PODER",
    "ARMA",
    "TORRE",
    "CAJA",
    "COBRA",
    "RAYO",
    "ROCA",
    "TURBO",
    "TORMENTA",
    "BATTLE",
    "BLASTER",
    "GENIUS",
    "TIGRE",
    "TRIGER",
    "DRAGON"
  ];
  


  //   Esta funcion crea la palabra que será secreta y genera las lineas
  
const crearPalabraSecreta = () => {
    const indiceAleatorio = Math.floor(Math.random() * palabrasPowerRangers.length);
    const palabraSecreta = palabrasPowerRangers[indiceAleatorio];
    console.log(palabraSecreta); 

    const huecos = document.getElementById("word-display");
    huecos.innerHTML = ""; 

    palabraSecreta.split("").forEach((letrita) => {
        const hueco = document.createElement("div");
        hueco.textContent = "_"; 
        huecos.appendChild(hueco);
        
        
       
    });
    
    
    
}

   // funccion que crea los botones del teclado
  const crearBotones=()=>{
    letras.forEach((char) => {
        const cajonLetras = document.querySelector("#keyboard");
      const letra = document.createElement("button");
    
      letra.textContent = char;
      letra.classList.add("letra")
      cajonLetras.appendChild(letra);
      
    
    });
    crearPalabraSecreta()
}






export const printAhorcado=()=>{
    document.querySelector("main").innerHTML=template()
    crearBotones()
    
   
}