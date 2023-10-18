import"./Memory.css"


const template=()=>`<div id="un-container">
<div id="contenedor-juego">
</div><button>Reiniciar</button>
</div>`

const cartasDejuego=[
    { "color": "rojo", "imagen": "https://res.cloudinary.com/djfkchzyq/image/upload/v1697635530/i5fyik74lkgtgkainquc.png" },
    { "color": "verde", "imagen": "https://res.cloudinary.com/djfkchzyq/image/upload/v1697635530/uljdsrib9dbvdv8pftqx.png" },
    { "color": "azul", "imagen": "https://res.cloudinary.com/djfkchzyq/image/upload/v1697635530/z2getd54epgtqgaqv4gx.png"},
    { "color": "negro", "imagen": "https://res.cloudinary.com/djfkchzyq/image/upload/v1697635530/les05mutq53rutbmaopj.png" },
    { "color": "rosa", "imagen": "https://res.cloudinary.com/djfkchzyq/image/upload/v1697635530/qsbbjxuv6r0znl71ug0m.png" },
    { "color": "amarillo", "imagen": "https://res.cloudinary.com/djfkchzyq/image/upload/v1697635530/s7adtvd2dxmtdahmomd2.png" }
  ];

  const duplicados = [...cartasDejuego, ...cartasDejuego];
  let flippedCards = [];

  const crearCartas = () => {
    duplicados.forEach((carta, index) => {
      const laImagen= document.createElement("img")
      laImagen.classList="tarjeta"
      const DivJuego=document.getElementById("contenedor-juego")
      laImagen.dataset.content=carta.imagen
      laImagen.src="https://res.cloudinary.com/djfkchzyq/image/upload/v1697631188/o70lwtspz7oidwhdz5ou.png"
      DivJuego.appendChild(laImagen)
      laImagen.addEventListener("click", () => {
        laImagen.classList.add("girada")
        if(laImagen.classList.contains("girada")){
         laImagen.src=laImagen.dataset.content
          
        }
     })
       });
       ;}

 
  
    
   const resetCards = () => {
    const cartas = document.querySelectorAll(".tarjeta");
    cartas.forEach((carta) => {
      const boton=document.querySelector("button")
      boton.addEventListener("click",()=>{
        carta.classList.remove("girada");
        carta.src = "https://res.cloudinary.com/djfkchzyq/image/upload/v1697631188/o70lwtspz7oidwhdz5ou.png";
      })
    })
      
      
      
        
        
    
   
};
    

  







export const printMemory=()=>{
    document.querySelector("main").innerHTML=template()
   crearCartas()
   resetCards()
  
}