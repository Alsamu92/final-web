
import { printFilterButton } from "../../components/BotonFiltro/BotonFiltro";
import { cartasPokemon } from "../../components/PokemonCard/PokemonCard";
import { printSpinnerdos } from "../../components/Spinner-dos/Spinner-2";
import { printSpinner } from "../../components/Spinner/Spinner";
import { getData } from "../../global/state/globalState";
import { paginacion } from "../../utils/paginacion";
import { filterPokemon } from "../../utils/pokemonData";
import"./Pokemon.css"

const template=()=>`<div id=""Pokemon>
<div id="container-filter">
<div id="spinner-button"></div>
<div id="boton-filtrado"></div>
<input type="text" id="pokeinput" placeholder="Busca un Pokemon">
</div>

<div id="paginacion"></div>
<div id="spinner"></div>
<div id="galeria"></div>
</div>`


const servicioDatos=async()=>{
    const getDatosPokemon=getData("Pokemon")
    console.log(getDatosPokemon)
    const{pokemonData,tipo}=getDatosPokemon
    console.log(getDatosPokemon)
   
cartasPokemon(pokemonData)

printFilterButton(tipo)




paginacion(pokemonData,25)
document.getElementById("spinner").innerHTML=""


}
const addEventListener=()=>{
    const inputPokemon = document.getElementById("pokeinput");
  inputPokemon.addEventListener("input", (event) => {
    filterPokemon(event.target.value, "nombre");
  });
}







export const printPokeapi=()=>{
    document.querySelector("main").innerHTML=template()
    printSpinner()
    printSpinnerdos()
    servicioDatos()
    addEventListener()
    
   
}