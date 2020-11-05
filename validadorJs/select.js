import escreveTexto from './escritorTexto.js'
import { mergeObj, eElemento } from './verifica_elemento.js'

const optt = {
    required: 'Este campo é requerido!',
    igual: 'Os campos não coincidem!'
};

class select {
    constructor(ele, opcoes = {}) {
        this.classes = false;
        this.cor = '#dc3545';
        if (("classes" in opcoes)) {
            this.classes = opcoes['classes'];
        }
        if (("cor" in opcoes)) {
            this.cor = opcoes["cor"].includes("#") ? opcoes['cor'] : '#' + opcoes['cor'];
        }
        this.textos = ("textos" in opcoes) ? mergeObj(optt, opcoes.texto) : optt;
        this.self = null;
        this.required = false;
        this.igual = null;
        this.name = null;
        this.id = null;
        this.placeholder = null;
        this.classList = null;
        var elemento = eElemento(ele) ? ele : document.querySelector(ele);
        if (elemento) {
            this.self = elemento;
            this.required = elemento.hasAttribute("required") ? true : false;
            this.name = elemento.hasAttribute("name") ? elemento.getAttribute("name") : "";
            this.id = elemento.hasAttribute("id") ? elemento.getAttribute("id") : "";
            this.placeholder = elemento.hasAttribute("placeholder") ? elemento.getAttribute("placeholder") : "";
            this.igual = elemento.hasAttribute("igual") ? elemento.getAttribute("igual") : "";
            this.classList = elemento.className.split(' ');
        }

    }

    checaTexto() {
        var ref = this;
        if (ref.required && ref.self.value === "") {
            escreveTexto(ref.textos.required, { referencia: ref.self, estilo: 'color:' + this.cor + ';display:block;' });
            return false;
        }
        if (ref.igual !== "") {
            var selector2 = document.querySelector(ref.igual);
            if (selector2 && selector2.value != ref.self.value) {
                escreveTexto(ref.textos.igual, { referencia: ref.self, estilo: 'color:' + this.cor + ';display:block;' });
            }
            return false;
        }
        return true;
    }

    validaInput() {
        escreveTexto('', { referencia: this.self });
        return this.checaTexto();
    }
}

export default select