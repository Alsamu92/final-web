import"./Spinner.css"

const template=()=>`
<div class="lds-facebook"><div></div><div></div><div></div></div>`

export const printSpinner=()=>{
    document.getElementById("spinner").innerHTML=template()
}