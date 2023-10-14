import"./PokemonCard.css"
const template =({nombre,imagen})=>`
<figure>

<img class=${nombre} src=${imagen} alt=${nombre}/>

<h3>${nombre}</h3>
</figure>
`

export const printCardPokemon=(personaje)=>{
    console.log(personaje)
    const gallery = document.getElementById("galeria")
    gallery.innerHTML += template(personaje)
    
    
}