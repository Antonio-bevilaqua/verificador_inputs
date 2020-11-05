import { eElemento, mergeObj } from './verifica_elemento.js'

const opcoesD = {
    referencia: 'body',
    tipo: 'small',
    classe: '',
    estilo: 'color:#dc3545;display:block;'
}

function removeTextos(ele) {
    var erros = [...ele.querySelectorAll('.erro-label')];
    erros.map((ele) => {
        ele.remove();
    });
}

function escreveTexto(texto, opt = {}) {
    var opcoes = mergeObj(opcoesD, opt);
    var obj = eElemento(opcoes.referencia) ? opcoes.referencia : document.querySelector(opcoes.referencia);
    var parente = opcoes.referencia != 'body' ? obj.parentElement : obj;
    removeTextos(parente);
    if (texto != '') {
        var small = document.createElement(opcoes.tipo);
        small.appendChild(document.createTextNode(texto));
        small.className = "tem-erro erro-label " + opcoes.classe;
        if (opcoes.estilo != '') {
            small.style.cssText = opcoes.estilo;
        }
        if (parente.classList.contains('form-group')) {
            removeTextos(parente);
            if (obj.nextSibling) {
                parente.insertBefore(small, obj.nextSibling);
            } else {
                parente.appendChild(small);
            }
        } else if (parente.classList.contains('input-group')) {
            removeTextos(parente.parentElement);
            if (obj.nextSibling) {
                parente.insertBefore(small, obj.nextSibling);
            } else {
                parente.appendChild(small);
            }
        } else {
            removeTextos(parente);
            if (obj.nextSibling) {
                parente.insertBefore(small, obj.nextSibling);
            } else {
                parente.appendChild(small);
            }
        }
    }
}

export default escreveTexto