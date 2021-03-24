
export const formatoNumero = ( numero ) => {

    if(typeof numero !== 'number'){
       numero = parseInt( numero)
    }

    return `$ ${numero.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits: 2})}`
}


export  const buscador = (arreglo , parametro)=> {

    // convertimos todo a minusculas y filtramos por parametro obtenido del input
    return arreglo.filter( a => 
        (a.nombre.toLowerCase()).includes(parametro.toLowerCase()) || 
        (a.apellidoPaterno.toLowerCase()).includes(parametro.toLowerCase()) ||
        (a.apellidoMaterno.toLowerCase()).includes(parametro.toLowerCase()) ||
        (a.empresa.toLowerCase()).includes(parametro.toLowerCase()))
    

}

