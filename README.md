<h1>Verificador de inputs / selects e textareas em javascript</h1>
Melhor utilização com bootstrap / templates a base de bootstrap!

Não necessita de JQuery para funcionamento.

<hr>

<h2>Inicialização</h2>
<b><script type="module" src="validadorJs/validador.js"></script></b><br/><br/>
Todos os arquivos javascript devem estar dentro da mesma pasta, caso estejam separados, é necessário alterar os caminhos dos imports
<br/><br/><br/>
<b>Dentro do arquivo validador.js</b><br/>
var forms = [...document.querySelectorAll('form')];<br/>
var formularios = [];<br/>
forms.map((form) => {<br/>
    formularios.push(new validador(form));<br/>
});<br/>
<hr>

<h2>Opções de inicialização</h2>
<b><script type="module" src="validadorJs/validador.js"></script></b><br/><br/>
É possível alterar as opções de inicialização enviando um objeto javascript na criação da classe:
<br/><br/><br/>
<b>Dentro do arquivo validador.js</b><br/>
var forms = [...document.querySelectorAll('form')];<br/>
var formularios = [];<br/>
forms.map((form) => {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;formularios.push(new validador(form, {cor: "red"}));<br/>
});<br/>

<hr>
<h2>Opções detalhadas:</h2>
    {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;cor: "#ababab",<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;classes: "classe1 classe2 classe3",<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;texto: {<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;required: 'Este campo é requerido!',<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chrequired: 'Marque este campo!',<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;filerequired: 'Selecione um arquivo!',<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;igual: 'Os campos não coincidem!',<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;min: 'Insira um valor maior que {val}!',<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max: 'Insira um valor menor que {val}!',<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;minlength: 'Por favor digite no minimo {val} caracteres!',<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maxlength: 'Por favor digite no máximo {val} caracteres!',<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email: 'Insira um email válido!',<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cpf: 'Insira um cpf válido!',<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cnpj: 'Insira um cnpj válido!'<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
    };<br/><br/><br/>
    <b>Algumas opções não são utilizadas em selects / textareas</b>

