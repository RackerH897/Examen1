interface TODO {
    codigo : number,
    nombre : string,
    estado : boolean
}

type tipoAgregarTODO = (listaTODOs : TODO[], numero : number, nombre : string) => TODO[]
const agregarTODO : tipoAgregarTODO = (listaTODOs, numero, nombre) => {

    const nuevoTODO : TODO = {
        codigo : numero,
        nombre : nombre,
        estado : false
    }

    listaTODOs.push(nuevoTODO)

    return listaTODOs
}

type tipoMarcarTODO = (listaTODOs : TODO[], numero : number) => TODO[]
const marcarTODO : tipoMarcarTODO = (listaTODOs, numero) => {
    
    for(let TODO of listaTODOs){
        if(TODO.codigo == numero){
            TODO.estado = true
            break
        }
    }
    
    return listaTODOs
}

const reporteTODOs = (listaTODOs : TODO[]) => {
    for(let TODO of listaTODOs){
        if(TODO.estado){ 
            console.log("(" + TODO.codigo + ") " + TODO.nombre + "[X]")
        }else{
            console.log("(" + TODO.codigo + ") " + TODO.nombre + "[ ]")
        }
    }
}

let listaEjemplo : TODO[] = []

listaEjemplo = agregarTODO(listaEjemplo, 1, "Planchar la ropa")
listaEjemplo = agregarTODO(listaEjemplo, 2, "Limpiar la casa")

listaEjemplo = marcarTODO(listaEjemplo, 2)

reporteTODOs(listaEjemplo)