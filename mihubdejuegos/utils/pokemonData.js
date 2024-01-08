import { setData } from "../global/state/globalState"
import { pokemonPorId } from "../services/pokemon.service"
import { paginacion } from "./paginacion"
import { tiposPokemon } from "./tiposPokemon"

export const pokemonData=async()=>{
    const allPokemon=[]
for(let i=152;i<300;i++){
allPokemon.push(await pokemonPorId(i))
}
return datosMapeados(allPokemon)
}
let dataGlobal
const datosMapeados=(data)=>{
     const mapData=data.map((pokemon)=>({
        nombre:pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),

        imagen:pokemon.sprites.other.dream_world.front_default,
        tipo:pokemon.types,
        id:pokemon.id
      
    }))
    const tipos=tiposPokemon(mapData)
    dataGlobal={
        pokemonData:mapData,
        tipo:tipos
    }
    return dataGlobal
}
export const filterPokemon= (filterDataInputButton, donde) => {

  
    switch (donde) {
      case "tipo":
        {
          const filterData = dataGlobal.pokemonData.filter((pokemon) =>
            pokemon.tipo[0].type.name
              .toLowerCase()
              .includes(filterDataInputButton.toLowerCase())
          );
  
          if (filterData.length === 0) {
            const filterData = dataGlobal.pokemonData.filter((pokemon) =>
              pokemon.tipo[1]?.type.name
                .toLowerCase()
                .includes(filterDataInputButton.toLowerCase())
            );

            paginacion(filterData,5)
          } else {
            console.log(filterData)
            paginacion(filterData, 5);
          }
        }
  
        break;
      case "fav":
        {
          const obtenerDatosSessionStorage = clave => {
              const datosJSON = sessionStorage.getItem(clave);
              return datosJSON;
          
          };
          
    
          const datosGuardados = obtenerDatosSessionStorage('currentUser');
          const obtenerDatosLocalStorage = clave => {
       
              return JSON.parse(localStorage.getItem(clave));
          };
          
          const datosGuardadosLocal = obtenerDatosLocalStorage(datosGuardados);
          const obtenerFavoritos = async () => {
            const misFavs = [];
          
            await Promise.all(
              datosGuardadosLocal.fav.map(async (fav) => {
                const pokemon = await pokemonPorId(fav);
                misFavs.push(pokemon);
              })
            );
          
            const datosMapeados = datosMap(misFavs);
          
            
            return await datosMapeados
          };
          
          const datosMap = (data) => {
            const mapData = data.map((pokemon) => ({
              nombre: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
              imagen: pokemon.sprites.other.dream_world.front_default,
              tipo:pokemon.types,
              id: pokemon.id
            }));
          
            return mapData;
          };
          obtenerFavoritos().then(favoritos => {
           paginacion(favoritos,5);
          });
 
        }
  
        break;
  
      case "nombre":
        {
          const filterData = dataGlobal.pokemonData.filter((pokemon) =>
            pokemon.nombre
              .toLowerCase()
              .includes(filterDataInputButton.toLowerCase())
          );
  
          if (filterDataInputButton == "") {
            paginacion(filterData, 25);
          } else {
            paginacion(filterData, 5);
          }
        }
        break;
    }
  };



export const obtenerInformacion=async()=>{
    const datos=await pokemonData()
    setData(datos,"Pokemon")

}

obtenerInformacion()
