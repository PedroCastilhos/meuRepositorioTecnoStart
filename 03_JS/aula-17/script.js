
const aluno = {
  id: 1,
  nome: 'Jeremias',
  email: 'jeremias@gmail.com',
  endereço: {
    cep: '90050004',
    logradouro: 'Ruas dos lobos',
    numero: '1',
    cidade: {
      id: 2,
      codigoIbge: 1259,
      nome: 'Porto Alegre'
    }
  },
  turmas: [{
    id: 2,
    nome: 'Frontend | ReactJs'    
  }, {
    id: 3,
    nome: 'Backend | NodeJs'
  }
]
}

function cadastraAluno(aluno) {
  for (let i = 0; i < aluno.turmas.length; i++){
    console.log('>>> Cadastrar o aluno de id' + aluno.id + "na turma" + aluno.turmas[i].nome)
  }
}

