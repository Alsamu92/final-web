import { getUser } from "../global/state/globalState";
import { printAhorcado } from "../pages/Ahorcado/Ahorcado";
import { printCuestionario } from "../pages/Cuestionario/Cuestionario";
import { printInicio } from "../pages/Inicio/Inicio";
import { login } from "../pages/Login/Login";
import { printMemory } from "../pages/Memory/Memory";
import { printPokeapi } from "../pages/Pokemon/pokemon";

export const initControler = (pagesRender) => {
    
    switch (pagesRender) {
      case undefined:
      localStorage.getItem(getUser().name) ? printInicio() : login();
      break;
      case "Login":
      login();
        break;
      case "Inicio":
      printInicio();
        break;
    
      case "Cuestionario":
     printCuestionario();
        break;
      case "Pokemon":
    printPokeapi();
        break;
      case "Ahorcado":
    printAhorcado();
        break;
      case "Memory":
    printMemory();
        break;
    }}
 