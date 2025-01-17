var agregarTODO = function (listaTODOs, numero, nombre) {
    var nuevoTODO = {
        codigo: numero,
        nombre: nombre,
        estado: false
    };
    listaTODOs.push(nuevoTODO);
    return listaTODOs;
};
var marcarTODO = function (listaTODOs, numero) {
    for (var _i = 0, listaTODOs_1 = listaTODOs; _i < listaTODOs_1.length; _i++) {
        var TODO = listaTODOs_1[_i];
        if (TODO.codigo == numero) {
            TODO.estado = true;
            break;
        }
    }
    return listaTODOs;
};
var reporteTODOs = function (listaTODOs) {
    for (var _i = 0, listaTODOs_2 = listaTODOs; _i < listaTODOs_2.length; _i++) {
        var TODO = listaTODOs_2[_i];
        if (TODO.estado) {
            console.log("(" + TODO.codigo + ") " + TODO.nombre + "[X]");
        }
        else {
            console.log("(" + TODO.codigo + ") " + TODO.nombre + "[ ]");
        }
    }
};
var listaEjemplo = [];
listaEjemplo = agregarTODO(listaEjemplo, 1, "Planchar la ropa");
listaEjemplo = agregarTODO(listaEjemplo, 2, "Limpiar la casa");
listaEjemplo = marcarTODO(listaEjemplo, 2);
reporteTODOs(listaEjemplo);
