import"./Ahorcado.css"
const template=()=>` 
<div id="juego">
<h1>Juego de Ahorcado</h1>
<div id="word-display"></div>
<div id="keyboard"></div>
<div id="error-display">Fallos Restantes <span id="contador">5</span></div>
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
    "CINTURON",
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
  let laPalabra =""
const crearPalabraSecreta = () => {
    const indiceAleatorio = Math.floor(Math.random() * palabrasPowerRangers.length);
    laPalabra = palabrasPowerRangers[indiceAleatorio];
    console.log(laPalabra)
   

    const huecos = document.getElementById("word-display");
    huecos.innerHTML = ""; 

   laPalabra.split("").forEach((letrita) => {
        const hueco = document.createElement("div");
        hueco.textContent = "_"; 
        hueco.classList="hueco"
        huecos.appendChild(hueco);
        
    // cambiar()
       
    });
    
    
    
}

   // funccion que crea los botones del teclado
  const crearBotones=()=>{
    letras.forEach((char) => {
        const cajonLetras = document.querySelector("#keyboard");
      const letra = document.createElement("button");
      letra.textContent=char
     letra.classList="letra"
      cajonLetras.appendChild(letra);
     

   
    });
    crearPalabraSecreta()
    
    addListeners() 
  
}

const addListeners = ()=>{
  const letter=document.querySelectorAll(".letra")
  letter.forEach((item,index)=>{
    item.addEventListener("click",()=>{

      for(let cadaLetra of laPalabra){
       
        if(cadaLetra==item.textContent){
         item.classList.add("item")
      for(let i=0;i<laPalabra.length;i++){
        if(laPalabra[i]==item.textContent){
          item.style.background="green"
          const huecos = document.querySelectorAll(".hueco");
          huecos[i].textContent=item.textContent
        }
     
        
      }
        }
      }
    })

  })

}



export const printAhorcado=()=>{
    document.querySelector("main").innerHTML=template()
    crearBotones()
    
    
}