import { PrintFooter } from "../../components/Footer/Footer";
import { printTemplateHeader } from "../../components/Header/Header";

export const initTemplate = () => {
    const app = document.getElementById("app");
  
    
    const header = document.createElement("header");
    const main = document.createElement("main");
    const footer = document.createElement("footer");
  
  
    app.append(header, main, footer);
    printTemplateHeader()
    PrintFooter()
   
  
   
  };