var a, b, rest

//Desestruturação / Fragmentação de ARRAy

// Caso 01 - Fragmentar todos os valores
//[a, b] = ["valor 1","valor 2"]

//console.log(a)
//console.log(b)

// Caso 02 - Ignorar o último valor
// [a, b] = ["valor 1","valor 2", 'valor 3']

// console.log(a)
// console.log(b)

// Caso 03 - Ignorar o primeiro valor
// [,a, b] = ["valor 1","valor 2", 'valor 3']

// console.log(a)
// console.log(b)

// Caso 04 - Desestruturação de uma variável já definida
// var foo = ["valor 1","valor 2", 'valor 3']

//  var [a,b] = foo

// console.log(a)
// console.log(b)

//Caso 4.1 - Pegar todos os outros valores, utilizando as reticencias 

var foo = ["valor1", "valor2", "valor3"]
var [...rest] = foo

// rest = foo
if (rest === foo) {  
  console.log("variável a:" + a)
  console.log("variável a:" + b)
  console.log("variável rest:" + rest)

} else {
  console.log("diferente")
}

//Caso 5.1 - Desestruturação de objeto

// var foo = {
//   idade: 25,
//   nome: "Jackson",
// }

// var {idade,nome} = foo

// console.log(idade)
// console.log(nome)

//Caso 5.2 - Desestruturação de objeto

// var foo = {
//   idade: 25,
//   nome: "Jackson",
//   sobrenome: "Rosa"
// }

// var {idade,nome} = foo

// console.log(idade)
// console.log(nome)

//Caso 5.3 - Desestruturação de objeto

// var foo = {
//   age: 25,
//   name: "Jackson",
//   lastname: "Rosa"
// }

// var {age:idade, name:nome} = foo

// console.log(idade)
// console.log(nome)

//Caso 5.4 - Desestruturação de objeto- aqui nesse caso a váriavel precisa estar declarada depois do Objeto
// var foo = {
//   age: 25,
//   name: "Jackson",
//   lastname: "Rosa"
// }

// var a, b

// ({age:a, name:b} = foo)

// console.log(a)
// console.log(b)

//Caso 5.5 - Desestruturação de objeto
// ({a,b} = {
//   a: 25,
//   b: "Jackson",
//   c: "Rosa"
// })

// console.log(a)
// console.log(b)

//Caso 6.1 - Desestruturação de uma função
// function foo (){
//   return [29, "ciclano"]
// }

// [a,b] = foo()

// console.log(a)
// console.log(b)

//Caso 6.2 - Desestruturação de uma função
// function foo (){
//   return {
//     nome: "Jackson",
//     idade: 29

//   }
// }

// ({nome:a, idade:b} = foo())

// console.log(a)
// console.log(b)