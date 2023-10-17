import { utilAxiosDos } from "../utils/axios"



export const pokemonPorId=async(id)=>{
    const peticionDeOpciones={
        method:"GET",
        url:`https://pokeapi.co/api/v2/pokemon/${id}`
    }
    return await utilAxiosDos(peticionDeOpciones)
}