import escreveTexto from './escritorTexto.js'
import { mergeObj, eElemento } from './verifica_elemento.js'
import { mascaraCNPJ, mascaraCPF, mascaraTelefone, mascaraData, mascaraCep, execmascara } from './mascaras.js'
import validarCPF from './validador_cpf.js'
import validarCNPJ from './validador_cnpj.js'

const optt = {
    required: 'Este campo é requerido!',
    chrequired: 'Marque este campo!',
    filerequired: 'Selecione um arquivo!',
    igual: 'Os campos não coincidem!',
    min: 'Insira um valor maior que {val}!',
    max: 'Insira um valor menor que {val}!',
    minlength: 'Por favor digite no minimo {val} caracteres!',
    maxlength: 'Por favor digite no máximo {val} caracteres!',
    email: 'Insira um email válido!',
    cpf: 'Insira um cpf válido!',
    cnpj: 'Insira um cnpj válido!'
};

class input {
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
        this.type = null;
        this.required = false;
        this.igual = null;
        this.min = null;
        this.max = null;
        this.minlength = null;
        this.maxlength = null;
        this.cpf = false;
        this.cnpj = false;
        this.name = null;
        this.id = null;
        this.placeholder = null;
        this.classList = null;
        var elemento = eElemento(ele) ? ele : document.querySelector(ele);
        this.mascara = true;
        this.v_fun = null;
        if (("mascara" in opcoes)) {
            this.mascara = opcoes["mascara"];
        }
        this.timeout = null;
        if (elemento) {
            this.self = elemento;
            this.type = elemento.hasAttribute("type") ? elemento.getAttribute("type") : "text";
            this.required = elemento.hasAttribute("required") ? true : false;
            this.name = elemento.hasAttribute("name") ? elemento.getAttribute("name") : "";
            this.id = elemento.hasAttribute("id") ? elemento.getAttribute("id") : "";
            this.placeholder = elemento.hasAttribute("placeholder") ? elemento.getAttribute("placeholder") : "";
            this.igual = elemento.hasAttribute("igual") ? elemento.getAttribute("igual") : "";
            this.min = elemento.hasAttribute("min") ? elemento.getAttribute("min") : "";
            this.max = elemento.hasAttribute("max") ? elemento.getAttribute("max") : "";
            this.minlength = elemento.hasAttribute("minlength") ? elemento.getAttribute("minlength") : "";
            this.maxlength = elemento.hasAttribute("maxlength") ? elemento.getAttribute("maxlength") : "";
            this.cpf = elemento.hasAttribute("cpf") ? elemento.getAttribute("cpf") : "";
            this.cnpj = elemento.hasAttribute("cnpj") ? elemento.getAttribute("cnpj") : "";
            this.classList = elemento.className.split(' ');
            this.init();
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
        if (ref.min !== "" && parseFloat(ref.self.value) < ref.min) {
            escreveTexto(ref.textos.min.replace('{val}', ref.min), { referencia: ref.self, estilo: 'color:' + this.cor + ';display:block;' });
            return false;
        }
        if (ref.max !== "" && parseFloat(ref.self.value) > ref.max) {
            escreveTexto(ref.textos.max.replace('{val}', ref.max), { referencia: ref.self, estilo: 'color:' + this.cor + ';display:block;' });
            return false;
        }
        if (ref.minlength !== "" && ref.self.value.length < parseInt(ref.minlength)) {
            escreveTexto(ref.textos.minlength.replace('{val}', ref.minlength), { referencia: ref.self, estilo: 'color:' + this.cor + ';display:block;' });
            return false;
        }
        if (ref.maxlength !== "" && ref.self.value.length > parseInt(ref.maxlength)) {
            escreveTexto(ref.textos.maxlength.replace('{val}', ref.maxlength), { referencia: ref.self, estilo: 'color:' + this.cor + ';display:block;' });
            return false;
        }
        if (ref.type == 'email') {
            if (!ref.self.value.includes('@') || !ref.self.value.includes('.')) {
                escreveTexto(ref.textos.email, { referencia: ref.self, estilo: 'color:' + this.cor + ';display:block;' });
                return false;
            }
        }
        if (ref.type == 'cpf') {
            if (!validarCPF(ref.self.value)) {
                escreveTexto(ref.textos.cpf, { referencia: ref.self, estilo: 'color:' + this.cor + ';display:block;' });
                return false;
            }
        }
        if (ref.type == 'cnpj') {
            if (!validarCNPJ(ref.self.value)) {
                escreveTexto(ref.textos.cnpj, { referencia: ref.self, estilo: 'color:' + this.cor + ';display:block;' });
                return false;
            }
        }
        return true;
    }

    checaRadioCheckbox(email = false) {
        var ref = this;
        if (ref.required && !ref.self.checked) {
            escreveTexto(ref.textos.chrequired, { referencia: ref.self, estilo: 'color:' + this.cor + ';display:block;' });
            return false;
        }
        return true;
    }

    checaFile() {
        var ref = this;
        if (ref.required && !ref.files.length == 0) {
            escreveTexto(ref.textos.filerequired, { referencia: ref.self, estilo: 'color:' + this.cor + ';display:block;' });
            return false;
        }
        return true;
    }

    validaInput() {
        escreveTexto('', { referencia: this.self });
        switch (this.type) {
            case 'radio':
                return this.checaRadioCheckbox();
            case 'checkbox':
                return this.checaRadioCheckbox();
            case 'file':
                return this.checaFile();
            default:
                return this.checaTexto();
        }
    }

    mascaraO(f) {
        var ref = this;
        this.v_fun = f
        if (ref.self.value !== '') {
            execmascara(ref.self, ref.v_fun);
        }
    }

    mascaraObj() {
        var ref = this;
        escreveTexto('', { referencia: ref.self });

        if (ref.mascara) {
            switch (ref.type) {
                case 'cpf':
                    ref.mascaraO(mascaraCPF);
                    break;
                case 'cnpj':
                    ref.mascaraO(mascaraCNPJ);
                    break;
                case 'telefone':
                    ref.mascaraO(mascaraTelefone);
                    break;
                case 'celular':
                    ref.mascaraO(mascaraTelefone);
                    break;
                case 'data':
                    ref.mascaraO(mascaraData);
                    break;
                case 'cep':
                    ref.mascaraO(mascaraCep);
                    break;
                default:
                    break;
            }
        }
    }

    init() {
        var ref = this;
        this.self.onkeydown = function() { ref.mascaraObj() };
        this.self.onkeyup = function() { ref.mascaraObj() };
        this.self.onchange = function() { ref.mascaraObj() };
        this.self.onkeypress = function() { ref.mascaraObj() };
    }
}

export default input