import { printCardPokemon } from "../../components/PokemonCard/PokemonCard"
import"./Pokemon.css"

const template=()=>`<div id="galeria"></div>`

const getData=async()=>{
    const allChar=[]

for(let i=1;i<151;i++){
    const data=await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    const jsonData= await data.json()
    allChar.push(jsonData)
}

mapeoData(allChar)
}
const mapeoData=(data)=>{
    
   
const mapData=data.map((personaje)=>({
    nombre:personaje.name,
    imagen:personaje.sprites.other.dream_world.front_default

}))





printFigure(mapData)
}

const printFigure=(personaje)=>{

    personaje.forEach(element => printCardPokemon(element)
        
    );
}



export const printPokeapi=()=>{
    document.querySelector("main").innerHTML=template()
    getData()
}