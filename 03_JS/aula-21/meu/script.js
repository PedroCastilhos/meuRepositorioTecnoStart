const nascimento = document.querySelector('#Nascimento')
const inputIdade = document.querySelector('#Idade')
const inputNome = document.querySelector('#Nome')
const inputSobrenome = document.querySelector('#Sobrenome')
const botaoCadastrar = document.querySelector('#Cadastrar')
const botaoLimpar = document.querySelector('Limpar')
const tBody = document.querySelector('MinhaLista')

botaoCadastrar.addEventListener("click", cadastrar)
nascimento.addEventListener("change", () => {
    let dataDeNascimento = new Date(nascimento.value)
    let hoje = new Date ()
    let idade;

    if (dataDeNascimento.getMonth() >= hoje.getMonth()){
      if (dataDeNascimento.getDay() >= hoje.getDay()){
        idade = hoje.getFullYear() - dataDeNascimento.getFullYear()
      } else {
        idade = hoje.getFullYear() - dataDeNascimento.getFullYear() - 1
      } 
    } else {
        idade = hoje.getFullYear() - dataDeNascimento.getFullYear() - 1
    }

    inputIdade.value = idade;
})


function cadastrar (){
  let novaLinha = document.createElement('tr');
  let novoNomeCompleto = document.createElement('td');
  let novaIdade = document.createElement('td');

  let conteudoNomeCompleto = document.createTextNode(inputNome.value + inputSobrenome.value); 
  let conteudoIdade = document.createTextNode(inputIdade.value);

  novoNomeCompleto.appendChild(conteudoNomeCompleto)
  novaIdade.appendChild(conteudoIdade)

  novaLinha.appendChild(novoNomeCompleto)
  novaLinha.appendChild(novaIdade)
  
  tBody.appendChild(novaLinha)
}
