import"./Memory.css"


const template=()=>`<div id="contenedor-juego"></div>`


const contenidoCartas=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16
 
  ]

  const crearCartas=()=>{
    contenidoCartas.forEach((carta)=>{
        const cardMemory=document.createElement("img")
        cardMemory.classList="tarjeta"
        cardMemory.src="https://res.cloudinary.com/djfkchzyq/image/upload/v1697631188/o70lwtspz7oidwhdz5ou.png"
        
        const contenedor=document.getElementById("contenedor-juego")
        contenedor.appendChild(cardMemory)
        
    })
  escuchadores()
  }

  const escuchadores=()=>{
    const contenido=document.querySelectorAll(".tarjeta")
    contenido.forEach((cart)=>{
cart.addEventListener("click",()=>{
  cart.classList.add("girada")
})

    })
    
  }
 
 
  







export const printMemory=()=>{
    document.querySelector("main").innerHTML=template()
    crearCartas()
}