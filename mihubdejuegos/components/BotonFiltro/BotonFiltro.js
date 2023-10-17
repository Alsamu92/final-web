
import { filterPokemon } from "../../utils/pokemonData";


export const printFilterButton = (types) => {
  types.forEach((type) => {
    const buttonType = `<button class="buttonFilter ${type}">
      ${type}
    </button>`;
    const containerFilter = document.getElementById("boton-filtrado");
    containerFilter.innerHTML += buttonType;
  });

  addListeners(types);
};

const addListeners = (types) => {
  types.forEach((type) => {
    const buttonType = document.querySelector(`.${type}`);
    buttonType.addEventListener("click", (e) => {
   filterPokemon(type, "tipo")
    });
  });
}