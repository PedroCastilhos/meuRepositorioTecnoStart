const ListaDePessoas = [
  {
    nome: 'Tânia Hadassa Carolina Monteiro',
    idade: 39,
    data_nasc: '13-05-1982',
    sexo: 'Feminino',
    estado: 'RS',
    telefone_fixo: '(54) 2827-1357',
    celular: '(54) 98393-6669'
  },
  {
    nome: 'Antonio Gael Rodrigo Pires',
    idade: 43,
    data_nasc: '27-06-1978',
    sexo: 'Masculino',
    estado: 'SE',
    telefone_fixo: '(79) 3872-4267',
    celular: '(79) 99752-1168'
  },
  {
    nome: 'Mário Murilo Bernardes',
    idade: 41,
    data_nasc: '02-01-1980',
    sexo: 'Masculino',
    estado: 'PB',
    telefone_fixo: '(83) 3648-3860',
    celular: '(83) 99438-4140'
  },
  {
    nome: 'Jéssica Maya Carolina Castro',
    idade: 37,
    data_nasc: '23-11-1984',
    sexo: 'Feminino',
    estado: 'RS',
    telefone_fixo: '(51) 3520-6213',
    celular: '(51) 99905-2574'
  },
  {
    nome: 'Levi Martin da Cunha',
    idade: 51,
    data_nasc: '08-11-1970',
    sexo: 'Masculino',
    estado: 'PA',
    telefone_fixo: '(93) 2881-8795',
    celular: '(93) 99387-8246'
  },
  {
    nome: 'Renato Mateus da Rocha',
    idade: 28,
    data_nasc: '05-04-1993',
    sexo: 'Masculino',
    estado: 'AP',
    telefone_fixo: '(96) 2973-1018',
    celular: '(96) 99580-6925'
  },
  {
    nome: 'Esther Elaine Nunes',
    idade: 64,
    data_nasc: '15-05-1957',
    sexo: 'Feminino',
    estado: 'AP',
    telefone_fixo: '(96) 3718-0280',
    celular: '(96) 98622-3617'
  },
  {
    nome: 'Sueli Julia Sara Ferreira',
    idade: 54,
    data_nasc: '25-01-1967',
    sexo: 'Feminino',
    estado: 'SC',
    telefone_fixo: '(48) 2918-2581',
    celular: '(48) 98719-3195'
  },
  {
    nome: 'André Cauã Theo da Cruz',
    idade: 77,
    data_nasc: '10-09-1944',
    sexo: 'Masculino',
    estado: 'PR',
    telefone_fixo: '(42) 3838-7280',
    celular: '(42) 98775-6271'
  },
  {
    nome: 'Danilo Thales Giovanni Baptista',
    idade: 45,
    data_nasc: '09-12-1976',
    sexo: 'Masculino',
    estado: 'SC',
    telefone_fixo: '(47) 2670-4176',
    celular: '(47) 99849-2199'
  }
]

const pessoa = {
  nome: 'Alana Vera Assis',
  idade: 68,
  data_nasc: '01-05-1953',
  sexo: 'Feminino',
  estado: 'PB',
  telefone_fixo: '(83) 2837-2032',
  celular: '(83) 99413-4852'
}

// 1. Um código que obtenha uma lista telefonica, contendo: nome, telefone_fixo e celular
// 2. Um código que obtenha uma lista de pessoas cujo sexo seja Feminino
// 3. Um código que obtenha uma lista de pessoas cujo sexo seja Masculino
// 4. Um código que para cada elemento seja impresso em tela nome da pessoa
// 5. Um código que obtenha a primeira pessoa do estado "RS"
// 6. Um código que remova o último elemento da lista
// 7. Um código que insira elemento na lista
// 8. Um código que obtenha uma lista de lista de pessoas separadas por estado, ou seja, para cada estado criar uma lista de pessoas
/*
console.log('----------Exercício Um----------')

ListaDePessoas.forEach( (element) => {
  console.log(element.nome + '/ ' + element.telefone_fixo + '/' + element.celular)
})

console.log('----------Exercício Dois----------')

let sexoFeminino = []
sexoFeminino = ListaDePessoas.filter(sexo => sexo.sexo === 'Feminino')
console.log(sexoFeminino)

console.log('----------Exercício Três----------')

let sexoMasculino = []
sexoMasculino = ListaDePessoas.filter(sexo => sexo.sexo === 'Masculino')
console.log(sexoMasculino)

console.log('----------Exercício Quatro----------')

let nomeDaPessoa = [];
nomeDaPessoa = ListaDePessoas.map((nome) =>{
  return {
    "Nome": nome.nome    
  }
})
console.log(nomeDaPessoa)



console.log('----------Exercício Cinco----------')

let pessoaGaucha = [];

pessoaGaucha = ListaDePessoas.find(estado => estado.estado === 'RS')

console.log(pessoaGaucha)



console.log('----------Exercício Seis----------')

let dadosDePessoas = [];
ListaDePessoas.pop()
dadosDePessoas = ListaDePessoas.map((pessoa) => {
  
  return {
    nome: pessoa.nome,
		idade: pessoa.idade,
		data_nasc: pessoa.data_nasc,
		sexo: pessoa.sexo,
		estado: pessoa.estado,
		telefone_fixo: pessoa.telefone_fixo,
		celular: pessoa.celular 
         
  }  
  
}) 

console.log(dadosDePessoas)


console.log('----------Exercício Sete----------')

let dadosDePessoas = [];
ListaDePessoas.push( {
  nome: "Alana Vera Assis",
  idade: 68,
  data_nasc: "01-05-1953",
  sexo: "Feminino",
  estado: "PB",
  telefone_fixo: "(83) 2837-2032",
  celular: "(83) 99413-4852",
})
dadosDePessoas = ListaDePessoas.map((pessoa) => {
  
  return {
    nome: pessoa.nome,
		idade: pessoa.idade,
		data_nasc: pessoa.data_nasc,
		sexo: pessoa.sexo,
		estado: pessoa.estado,
		telefone_fixo: pessoa.telefone_fixo,
		celular: pessoa.celular,         
  }  
  
}) 

console.log(dadosDePessoas)

*/

let ListaDePessoas = [];

ListaDePessoas.forEach(pessoa => {
  const mecanismoDeBusca = (pessoaEstado) => pessoaEstado.estado === pessoa.estado
  if (! listEstados.find(mecanismoDeBusca)) {
    listEstados.push({
      estado: pessoa.estado,
      pessoas: ListaDePessoas.filter(mecanismoDeBusca)
    })
  }
})

listEstados.forEach(estado => console.log(estado))