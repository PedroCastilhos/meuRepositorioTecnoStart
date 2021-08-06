console.log('-------Questão número 1-------')
var d = 3
var x = 20

for (var i = 0; i < x; i++) {
  if (i % d == 0) {
    console.log(i)
  }
}

console.log('-------Questão número 2-------')

var d = 1
var x = 20
for (var i = x; i >= d; i--) {
  console.log(i)
}

console.log('-------Questão número 3-------')

var t3 = 3
for (var i = 0; i <= 10; i++) {
  console.log(i * t3)
}

console.log('---(FAIL)---Questão número 4---(FAIL)---')

var valor = 3

if(valor<0){
  console.log("valor invalido")
  
} else if (valor == 0 || valor == 1){
  console.log('1')

} else {
  var acumula = 1;
  for(var i = valor; i > 1; i --){
    console.log(`${acumla} x ${i} = ${acumla * i}`)
    acumla *=i;
  }
  console.log(acumula)
}

console.log('-------Questão número 5-------')

for (var linha = 1; linha <= 4; linha++) {
  for (var coluna = 1; coluna <= 5; coluna++) {
    if (linha === 1 && coluna === 1) {
      console.log(`C.${coluna} e L.${linha} = Vaga Ocupada`)
    } else console.log(`C.${linha} e L.${coluna} = Vaga Restante `)
  }
}

/* 

Alternativa para a questão 5 caso tivesse entrada de dados

var rc = "resposta do cliente" //rc = Resposta da Coluna
var rl = "resposta do cliente" //rl = Resposta da Linha
for (var linha = 1; linha <= 4; linha++) {
  for (var coluna = 1; coluna <= 5; coluna++) {
    if (linha === rc && coluna === rl) {
      console.log(`C.${coluna} e L.${linha} = Vaga ocupada`)
    } if else { 
      console.log()`A vaga não existe, digite outro número`) }
    
    else { console.log(`C.${linha} e L.${coluna} = vaga restante `)
    elsenot }
  } 
}

*/