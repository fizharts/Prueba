

export const setLocalStorage = ( item ) => {

    console.log(item)
}

export const formatoNumero = ( numero, l ) => {

    return `$${numero.toLocaleString(l,{minimumFractionDigits:2,maximumFractionDigits: 2 ,minimumGroupingDigits:3})}`
}

