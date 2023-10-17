import { cartasPokemon } from "../components/PokemonCard/PokemonCard"

export const paginacion = (dato, number) => {
  const longitud = dato.length;
  const numeroPaginas = Math.ceil(longitud / number); // Usar Math.ceil para asegurarse de tener un número entero de páginas.
  document.getElementById("paginacion").innerHTML = "";

  if (numeroPaginas > 1) {
    for (let i = 0; i < numeroPaginas; i++) {
      const botonNumeros = document.createElement("button");
      botonNumeros.setAttribute("class", "botonNumeros");
      botonNumeros.innerHTML = i + 1;
      document.getElementById("paginacion").appendChild(botonNumeros);
      addListeners(botonNumeros, dato, number, i, numeroPaginas);
    }
    const todosLosBotones = document.querySelectorAll(".botonNumeros");
    todosLosBotones.forEach((pagina) => {
      pagina.style.border = "solid 2px green";
    });
  }
  cartasPokemon(dato.slice(0, number));
}

const addListeners = (botonNumeros, dato, numberElement, i) => {
  botonNumeros.addEventListener("click", () => {
    const allButtonPag = document.querySelectorAll(".botonNumeros");

    allButtonPag.forEach((pag) => {
      pag.style.border = "solid 3px #0000006d";
    });

    botonNumeros.style.border = "solid 3px #15a00e7d";
    botonNumeros.style.color = "#093f06ff";

    const end = (i + 1) * numberElement;
    const start = end - numberElement < 0 ? 0 : end - numberElement;
    cartasPokemon(dato.slice(start, end));
  });
}