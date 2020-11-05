function eElemento(elemento) {
    return elemento instanceof Element || elemento instanceof HTMLDocument;
}

function mergeObj(objA, objB) {
    var retorno = {};
    Object.keys(objA).map(function(keyAt) {
        if ((keyAt in objB)) {
            retorno[keyAt] = objB[keyAt];
        } else {
            retorno[keyAt] = objA[keyAt];
        }
    });
    return retorno;
}

export { eElemento, mergeObj }