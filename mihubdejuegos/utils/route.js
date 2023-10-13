import { login } from "../pages/Login/Login";

export const initControler = (pagesRender) => {
    
    switch (pagesRender) {
      case undefined:
      login();
        break;
    }}