import axios from "axios"


    export const utilAxiosDos=async(opciones)=>
    {return await axios.request(opciones).then((res)=>res.data)}