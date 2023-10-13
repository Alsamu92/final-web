import { printCuestionario } from "../pages/Cuestionario/Cuestionario";
import { printInicio } from "../pages/Inicio/Inicio";
import { login } from "../pages/Login/Login";

export const initControler = (pagesRender) => {
    
    switch (pagesRender) {
      case undefined:
      login();
        break;
      case "Inicio":
      printInicio();
        break;
    
      case "Cuestionario":
     printCuestionario();
        break;
    }}