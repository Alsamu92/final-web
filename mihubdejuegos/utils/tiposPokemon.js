export const tiposPokemon=(datos)=>{
    const nombreTipo=[]
    datos.forEach((tipo)=>{
tipo.tipo.forEach(cadaUno=>{
    !nombreTipo.includes(cadaUno.type.name)&&
    nombreTipo.push(cadaUno.type.name)
})
    })
    return nombreTipo
}