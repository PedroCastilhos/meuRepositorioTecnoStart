

// DESESTRUTURACAO DEARRAY

// caso 1
// [a, b] = ["valor1","valor2"]

// caso 2
// [a, b] = ["valor1","valor2", 'valor3']

// caso 3
// [,a,b] = ["valor1","valor2", 'valor3']

// caso 4
// var foo = ["valor1","valor2", 'valor3']
// var [a,b] = foo

// caso 5
// var foo = ["valor1","valor2", 'valor3']
// var [...rest] = foo 


// if(rest === foo){
//     // rest = foo -> assim eles seriam iguais, pois aponrtam para o mesmo endereço de memória
//     console.log("igiaus pois apontam para o mesmo endereço")
// }else{
    
//     console.log("variável a: " + a)
//     console.log("variável b: " + b)
//     console.log("variável rest: " + rest)
// }

// DESESTRUTURAÇÃO DE OBJETO
// caso 1
// var foo = {
//     idade: 25,
//     nome: "jackson"
// }

// var {idade, nome} = foo

// caso 2
// var foo = {
//     idade: 25,
//     nome: "jackson",
//     sobrenome: "rosa"
// }

// var {nome, idade} = foo

//caso3
// var foo = {
//     age: 25,
//     name: "jackson",
//     lastName: "rosa"
// }

// var {age:idade, name: nome} = foo

//caso 4
// var foo = {
//     a: 29,
//     b: "ciclano",
//     c: 'rosa'
// }
// var a, b
// ({a, b} = foo)

// caso 5
// ({a,b} = {
//         a: 29,
//         b: "ciclano",
//         c: 'rosa'
//     })


// caso 6
// var foo = {
//         a: 29,
//         b: "ciclano",
//         c: 'rosa'
//     }
//     rest = {...foo}

//     console.log("variável a: " + a)
//     console.log("variável b: " + b)
//     console.log("variável rest: " + rest)

// caso 7
var foo = {
    a: 29,
    b: "ciclano",
    c: 'rosa'
}
var a, b, rest;
({a,...rest} = foo)

console.log("variável a: " + a)
console.log("variável b: " + b)
console.log(rest)


// DESESTRUTURAÇÃO DE FUNÇÃO
// caso 1
// function foo(valor) {
//     return [valor, "ciclano"]
// }

// [a,b] = foo(29)

// caso 2
// function foo() {
//     return {
//         a: 'jackson',
//         b: 25
//     }
// }

// ({a,b} = foo())
