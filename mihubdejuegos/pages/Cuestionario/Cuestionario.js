import"./Cuestionario.css"



const preguntas = [
    {
      pregunta: "¿Cuál es el nombre del villano principal en la primera temporada de los Power Rangers?",
      opciones: ["Lord Voldemort", "Rita Repulsa", "Megatron", "Thanos"],
      respuestaCorrecta: "Rita Repulsa"
    },
    {
      pregunta: "¿Cuál es el nombre del mentor de los Power Rangers en la primera temporada?",
      opciones: ["Maestro Splinter", "Zordon", "Obi-Wan Kenobi", "Dumbledore"],
      respuestaCorrecta: "Zordon"
    },
    {
      pregunta: "¿Qué colores representan a los Power Rangers en la primera temporada?",
      opciones: ["Rojo, verde, azul, amarillo, rosa", "Negro, blanco, plateado, dorado, naranja", "Rojo, verde, azul, negro, rosa", "Amarillo, blanco, morado, verde, rojo"],
      respuestaCorrecta: "Rojo, verde, azul, amarillo, rosa"
    },
    {
      pregunta: "¿Cuál es el nombre del robot gigante que los Power Rangers controlan?",
      opciones: ["Iron Man", "Megazord", "Voltron", "Optimus Prime"],
      respuestaCorrecta: "Megazord"
    },
    {
      pregunta: "¿Dónde se encuentra la base de operaciones de los Power Rangers?",
      opciones: ["En un castillo en las montañas", "En una cueva secreta bajo la ciudad", "En una estación espacial", "En el fondo del océano"],
      respuestaCorrecta: "En una cueva secreta bajo la ciudad"
    },
    {
      pregunta: "¿Quién es el Ranger verde en la primera temporada?",
      opciones: ["Jason", "Billy", "Tommy", "Kimberly"],
      respuesta: "Tommy"
    },
    {
      pregunta: "¿Cuál es el nombre del enemigo principal que los Power Rangers enfrentan en la primera temporada?",
      opciones: ["Lord Zedd", "Goldar", "Scorpina", "Finster"],
      respuestaCorrecta: "Lord Zedd"
    },
    {
      pregunta: "¿Qué objeto mágico les da poderes a los Power Rangers?",
      opciones: ["La Espada del Destino", "El Anillo del Poder", "El Morpher", "La Varita Mágica"],
      respuestaCorrecta: "El Morpher"
    },
    {
      pregunta: "¿Cómo se llama el robot gigante que forma parte de los Zords?",
      opciones: ["Todas correctas", "Triceratops", "Sabertooth Tiger", "Pterodáctilo"],
      respuestaCorrecta: "Todas correctas"
    },
    {
      pregunta: "¿Cuál es el grito de batalla que los Power Rangers utilizan para convocar a los Zords?",
      opciones: ["¡Hasta la vista, baby!", "¡Por el poder del cosmos!", "¡Forma de Megazord!", "¡A metamorfosearse!"],
      respuestaCorrecta: "¡A metamorfosearse!"
    }
   
  ];

  const template=()=>` 
  <div id="quiz">
  <div id="pregunta-container">
  <h1>Pregunta:</h1>
  <p id="pregunta-text"></p>
  <ul id="opciones-list"></ul>
  <p id="respuesta-text"></p>
  </div>
  
  <div id="contador-container">
  <p>Respuestas Correctas: <span id="respuestas-correctas">0</span></p>
  </div>
  
  <button id="siguiente-pregunta">Siguiente Pregunta</button>
  </div>`
  const app=document.getElementById("app")
  let preguntaActual=0
  let contador=document.getElementById("contador container")
  
  const verPregunta=()=>{
      const elUl=document.getElementById("opciones-list")
      const laRespuesta=document.getElementById("respuesta-text")
    laRespuesta.innerHTML = "";
    laRespuesta.style.background = "rgb(238, 237, 232)";
    elUl.innerHTML = "";
      const textoPregunta=document.getElementById("pregunta-text")
     
      const pregunta=preguntas[preguntaActual].pregunta
      textoPregunta.textContent=pregunta
      anadirOp()
      
      }
  const anadirOp=()=>{ 
      let contador=document.getElementById("contador container")
      preguntas[preguntaActual].opciones.forEach((opcion)=>{
      const elUl=document.getElementById("opciones-list")
  const nuevaOp=document.createElement("li")
  nuevaOp.textContent=opcion
  elUl.appendChild(nuevaOp)
  nuevaOp.addEventListener("click",(event)=>{
  const respuest=document.getElementById("respuesta-text")
  

 
  if(preguntas[preguntaActual].respuestaCorrecta===opcion){
    respuest.textContent="Respuesta correcta"
   respuest.style.background="rgb(53, 221, 31)"
   
   contador=document.querySelector("#respuestas-correctas")
   contador.textContent++
   
}else{
    respuest.textContent="Respuesta incorrecta"
    respuest.style.background="rgb(216, 61, 22)"
   
}
  
  })
 
  })
 
  }



  
 
  const siguiente=()=>{
      const botonSiguiente=document.getElementById("siguiente-pregunta")
      botonSiguiente.addEventListener("click", () => {if(preguntaActual<preguntas.length-1){
         preguntaActual++;
         
         verPregunta()
      }else{
          const divGrande=document.querySelector("#quiz")
         const tuPuntuacion=document.querySelector("#respuestas-correctas")
          divGrande.innerHTML=""
          
          divGrande.innerHTML="HAS FINALIZADO LA VALIDACIÓN"
      }
         
       });
     }

export const printCuestionario=()=>{
    document.querySelector("main").innerHTML=template()
    verPregunta()
    siguiente()
}