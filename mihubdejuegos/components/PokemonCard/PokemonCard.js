import { getData, getUserData, setUserData } from "../../global/state/globalState"
import"./PokemonCard.css"

export const cartasPokemon=(datos)=>{
    const datosDelUser=getUserData()

document.getElementById("galeria").innerHTML=""

datos.map((pokemon)=>{
    const tipoPersonalizado=`"cartaPoke ${pokemon.tipo[0].type.name}"`
    const templateCarta=`
    <figure class=${tipoPersonalizado} id=${pokemon.id}>
    <img src=${pokemon.imagen} alt=${pokemon.nombre}>
    <h2>${pokemon.nombre}</h2>
    <span class="material-symbols-outlined ${datosDelUser.fav.includes(pokemon.id.toString())?"megusta":""}">
    favorite
    </span>
    </figure>`
    document.getElementById("galeria").innerHTML+=templateCarta
    anadirEscuchadores(datos)
})

}
const anadirEscuchadores=(datos)=>{
    const datosDelUser=getUserData()
    const meGustaBoton=document.querySelectorAll("span")
     meGustaBoton.forEach((meGusta)=>{
        meGusta.addEventListener("click",(event)=>{
            if(datosDelUser.fav.includes(event.target.parentNode.id)){
                const datosDelUser=getUserData()

            const arrayFavoritos=[]
            datosDelUser.fav.forEach((id)=>{
                if(event.target.parentNode.id !=id)arrayFavoritos.push(id)
            })
        setUserData({
            ...datosDelUser,
            fav:arrayFavoritos
        })
        meGusta.classList.toggle("megusta")
            }else{
                const datosDelUser=getUserData()
                datosDelUser.fav.push(event.target.parentNode.id)
                setUserData(datosDelUser)
                meGusta.classList.toggle("megusta")
            }
        })
    })
}



export const printCardPokemon=(personaje)=>{
    console.log(personaje)
    const gallery = document.getElementById("galeria")
    gallery.innerHTML += template(personaje)
    
    
}