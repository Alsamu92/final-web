import"./Spinner-2.css"

const template=()=>`
<div class="lds-facebook"><div></div><div></div><div></div></div>`

export const printSpinnerdos=()=>{
    document.getElementById("spinner").innerHTML=template()
}