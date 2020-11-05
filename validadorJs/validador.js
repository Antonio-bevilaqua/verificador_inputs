import input from './inputs.js'
import textarea from './textarea.js'
import select from './select.js'
import { eElemento } from './verifica_elemento.js'

/* CLASSE DE VALIDAÇÃO DE FORMULÁRIOS */

class validador {
    constructor(formulario, opcoes = {}) {
        this.form = eElemento(formulario) ? formulario : document.querySelector(formulario);
        this.inputs = [];
        this.selects = [];
        this.textareas = [];
        if (this.form) {
            var ipts = [...this.form.querySelectorAll('input')];
            var sels = [...this.form.querySelectorAll('select')];
            var txta = [...this.form.querySelectorAll('textarea')];
            ipts.map((ele) => {
                this.inputs.push(new input(ele, opcoes));
            });
            sels.map((ele) => {
                this.selects.push(new select(ele, opcoes));
            });
            txta.map((ele) => {
                this.textareas.push(new textarea(ele, opcoes));
            });
        }

        this.init();
    }

    validaInputs() {
        var retorno = true;
        this.inputs.map((ipt) => {
            if (!ipt.validaInput()) {
                retorno = false;
            }
        });
        this.selects.map((ipt) => {
            if (!ipt.validaInput()) {
                retorno = false;
            }
        });
        this.textareas.map((ipt) => {
            if (!ipt.validaInput()) {
                retorno = false;
            }
        });
        return retorno;
    }

    init() {
        var ref = this;
        var botao = ref.form.querySelector('button[type="submit"]');
        if (!botao || !botao.length) {
            var botoes = [...ref.form.querySelectorAll('button')];
            botoes.map((ele) => {
                var attr = ele.hasAttribute("type") ? ele.getAttribute('type') : 'submit';
                if (attr == "submit") {
                    botao = ele;
                    return false;
                }
            });
        }
        botao.setAttribute('type', 'button');
        botao.onclick = function() {
            if (ref.validaInputs()) {
                ref.form.submit();
            }
        };
    }
}

/*
    É possível passar opções de estilos e textos para os inputs, selects e textarea:
    input:
    opcoes = {
        cor: "#ababab",
        classes: "classe1 classe2 classe3",
        texto: {
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
        }
    };

    select:
    opcoes = {
        cor: "#ababab",
        classes: "classe1 classe2 classe3",
        texto: {
            required: 'Este campo é requerido!',
            igual: 'Os campos não coincidem!'
        }
    };

    textarea:
    opcoes = {
        cor: "#ababab",
        classes: "classe1 classe2 classe3",
        texto: {
            required: 'Este campo é requerido!',
            igual: 'Os campos não coincidem!',
            minlength: 'Por favor digite no minimo {val} caracteres!',
            maxlength: 'Por favor digite no máximo {val} caracteres!'
        }
    };
*/

var forms = [...document.querySelectorAll('form')];
var formularios = [];
forms.map((form) => {
    formularios.push(new validador(form));
});