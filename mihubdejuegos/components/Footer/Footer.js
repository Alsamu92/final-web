import "./Footer.css"


const template=()=>`<h5>Por Alex, con todo su buen gusto y criterio</h5>`


export const PrintFooter=()=>{
    document.querySelector("footer").innerHTML=template()
}