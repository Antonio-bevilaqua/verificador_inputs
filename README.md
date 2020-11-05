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
<hr>
<h2>Atributos HTML para validação:</h2>
<b>Os atributos devem ser inseridos nas tags. ex: <input type="senha" igual="confirma-senha" /></b><br/><br/>
<b>type:</b><br/>
<b>email</b> - validação de email válido<br/>
<b>cpf</b> - validação/formatação de cpf válido<br/>
<b>cnpj</b> - validação/formatação de cnpj válido<br/>
<b>cep</b> - formatação de cep<br/>
<b>data</b> - formatação de data<br/>
<br><br><br>
<b>min:</b> Valor mínimo a ser inserido (número)<br/>
<br><br><br>
<b>max:</b> Valor máximo a ser inserido (número)<br/>
<br><br><br>
<b>minlength:</b> Tamanho mínimo da string a ser inserida<br/>
<br><br><br>
<b>maxlength:</b> Tamanho máximo da string a ser inserida<br/>
<br><br><br>
<b>igual:</b> Deve ser passado um selector de outro campo que deve ter o valor igual ao deste. Ex: igual="#confirma-senha"<br/>
<br><br><br>
<b>required:</b> O campo não pode ser enviado em branco<br/>
