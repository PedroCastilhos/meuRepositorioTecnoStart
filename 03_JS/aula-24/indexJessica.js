var empresa = {
    nomeFantasia: "Batata expresso",
    razaoSocial: "Batata Silva", //a
    cnpj: "00.000.000.00/0000.00", //b
    funcionarios: [ { //rest
        idFuncionario: 1,
        nomeFuncionario: 'zé',
        salrio: 1000.00
    }
    ]
}

var a, b, rest;

({razaoSocial:a, cnpj:b, funcionarios:rest} = empresa)

console.log('variavel a:' + a)
console.log('variavel b:' + b)
console.log(rest)