function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length != 11) {
        return false;
    }
    if (cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;

    var digitos = cpf.substring(0, 9);
    var validador1 = cpf.substring(9, 10);
    var validador2 = cpf.substring(10, 11);
    var total = 0;
    var place = 0;
    for (var i = 10; i > 1; i--) {
        total += (digitos[place] * i);
        place++;
    }
    var valida1 = total % 11;
    if (valida1 < 2)
        valida1 = 0;
    else
        valida1 = 11 - valida1;

    if (valida1 != validador1) {
        return false;
    }

    total = 0;
    place = 0;
    digitos = cpf.substring(0, 10);
    for (var i = 11; i > 1; i--) {
        total += (digitos[place] * i);
        place++;
    }
    var valida2 = total % 11;
    if (valida2 < 2)
        valida2 = 0;
    else
        valida2 = 11 - valida2;
    if (valida2 != validador2) {
        return false;
    }
    return true;
}

export default validarCPF