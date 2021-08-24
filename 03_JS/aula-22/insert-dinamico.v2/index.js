const inputAnoNascimento = document.querySelector('#AnoNascimento');
const inputIdade = document.querySelector('#Idade');
const inputNome = document.querySelector('#Nome');
const inputSobrenome = document.querySelector('#Sobrenome');
const buttomCadastrar = document.querySelector('#Cadastrar');
const buttomLimpar = document.querySelector('#Limpar');
const tbody = document.querySelector('#MinhaLista');
const tbNomeCompleto = document.querySelector('#TbNomeCompleto');
const tbIdade = document.querySelector('#TbIdade');

let listaDePessoas = [];

inputAnoNascimento.addEventListener('change', () => {
    inputIdade.value = calcularIdade()
})

buttomCadastrar.addEventListener('click', cadastrar)

buttomLimpar.addEventListener('click', limpar)

tbNomeCompleto.addEventListener('click', () => {
    alert('teste')
})

tbIdade.addEventListener('click', () => {
    ordenar(ordenarIdade)
})

function fezAniversarioNesseAno(hoje, nascimento) {
    return hoje.getFullYear() - nascimento.getFullYear();
}

function naoFezAniversarioNesseAno(hoje, nascimento) {
    return (hoje.getFullYear() - nascimento.getFullYear()) - 1;
}

function calcularIdade() {
    let nascimento = new Date(inputAnoNascimento.value);
    let hoje = new Date();
    let idadeCalculada;

    console.log('input: ' + nascimento.getUTCDate())
    console.log('input: ' + nascimento.getUTCMonth())
    console.log('input: ' + nascimento.getFullYear())
    console.log('calc: ' + hoje.getUTCDate())
    console.log('calc: ' + hoje.getUTCMonth())
    console.log('calc: ' + hoje.getFullYear())


    if (nascimento.getUTCMonth() >= hoje.getUTCMonth()) {
        if (nascimento.getUTCDate() <= hoje.getUTCDate()) {
            idadeCalculada = fezAniversarioNesseAno(hoje, nascimento);
        } else {
            idadeCalculada = naoFezAniversarioNesseAno(hoje, nascimento);
        }
    } else {
        idadeCalculada = naoFezAniversarioNesseAno(hoje, nascimento);
    }

    return idadeCalculada;
}

function validarPreenchimentoDosCampos() {
    const valorNome = inputNome.value
    const valorSobrenome = inputSobrenome.value
    const valorIdade = inputIdade.value

    return valorNome.length > 0 && valorSobrenome.length > 0 && valorIdade >= 0;
}

function cadastrar() {
    let camposValidos = validarPreenchimentoDosCampos();
    if (camposValidos) {
        let nomeCompleto = inputNome.value + inputSobrenome.value;

        novoElementoNaTabela(nomeCompleto, inputIdade.value)

        resetFormulario();
    }
}

function resetFormulario() {
    inputNome.value = "";
    inputSobrenome.value = "";
    inputAnoNascimento.value = "";
    inputIdade.value = "";
}

function limpar() {
    tbody.innerHTML = '';
}

function ordenar(funcaoOrdenacao) {
    listaDePessoas = []
    setPessoasNaLista()
    listaDePessoas.sort(funcaoOrdenacao)
    limpar()
    setarListaOrdenada()
}

function setPessoasNaLista() {

    let listaTr = tbody.querySelectorAll("tr")
    //litaTR = [ {tr0}, {tr1}, {tr2}]

    console.log(listaTr)
    for (let tr = 0; tr < listaTr.length; tr++) {
        let listaTd = listaTr[tr].querySelectorAll("td");
        listaDePessoas.push(
            {
                nomeCompleto: listaTd[0].innerText,
                idade: listaTd[1].innerText
            })
    }

    console.log(listaDePessoas)
}

function ordenarPorNome() {

}

function ordenarIdade(a, b) {
    return a.idade - b.idade
}

function setarListaOrdenada() {
    for (let i = 0; i < listaDePessoas.length; i++) {
        let pessoa = listaDePessoas[i];
        novoElementoNaTabela(pessoa.nomeCompleto, pessoa.idade)
    }
}

function novoElementoNaTabela(nomecompleto, idade) {
    let novaLinha = document.createElement("tr");
    let novoNomeCompleto = document.createElement("td");
    let novaIdade = document.createElement("td");

    var conteudoNomeCompleto = document.createTextNode(nomecompleto);
    var conteudoIdade = document.createTextNode(idade);

    novoNomeCompleto.appendChild(conteudoNomeCompleto);
    novaIdade.appendChild(conteudoIdade);

    novaLinha.appendChild(novoNomeCompleto)
    novaLinha.appendChild(novaIdade)

    tbody.appendChild(novaLinha)
}
