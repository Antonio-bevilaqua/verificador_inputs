function mascaraCNPJ(v, separador = '.') {
    v = v.replace(/\D/g, "");
    v = v.length > 14 ? v.substring(0, 14) : v;
    v = v.replace(/(\d{2})(\d)/, "$1" + separador + "$2");
    v = v.replace(/(\d{3})(\d)/, "$1" + separador + "$2");
    v = v.replace(/(\d{3})(\d)/, "$1/$2");
    v = v.replace(/(\d{4})(\d)/, "$1-$2");
    return v;
}

function mascaraCPF(v, separador = '.') {
    v = v.replace(/\D/g, "");
    v = v.length > 11 ? v.substring(0, 11) : v;
    v = v.replace(/(\d{3})(\d)/, "$1" + separador + "$2");
    v = v.replace(/(\d{3})(\d)/, "$1" + separador + "$2");
    v = v.replace(/(\d{3})(\d)/, "$1-$2");
    return v;
}

function mascaraTelefone(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
    v = v.replace(/(\d)(\d{4})$/, "$1-$2");
    return v;
}

function mascaraData(v, separador = '/', tipo = 'pt-BR') {
    if (tipo == 'pt-BR' || tipo == 'en-US') {
        v = v.replace(/\D/g, "");
        v = v.length > 8 ? v.substring(0, 8) : v;
        v = v.replace(/(\d{2})(\d)/, "$1" + separador + "$2");
        v = v.replace(/(\d{2})(\d)/, "$1" + separador + "$2");
        return v;
    } else {
        v = v.replace(/\D/g, "");
        v = v.length > 8 ? v.substring(0, 8) : v;
        v = v.replace(/(\d{4})(\d)/, "$1" + separador + "$2");
        v = v.replace(/(\d{2})(\d)/, "$1" + separador + "$2");
        return v;
    }
}

function mascaraCep(v) {
    return v.replace(/\D/g, '').replace(/(\d{5})(\d)/, "$1-$2");
}

function execmascara(v_obj, v_fun) {
    v_obj.value = v_fun(v_obj.value)
}

export { mascaraCNPJ, mascaraCPF, mascaraTelefone, mascaraData, mascaraCep, execmascara }