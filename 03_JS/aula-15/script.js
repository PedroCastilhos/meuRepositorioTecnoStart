function soma(a, b) {
  return a + b
}

function multiplicacao(a, b) {
  return a * b
}

function dividir(a, b) {
  if (b <= 0) {
    console.log(`o valor de b = a ${b} não é válidp, estaremos utilizando 1`)
    b = 1
  }

  return a / b
}

function subtracao(a,b){
  return a - b
}
 function calcular(valor1, funcao, valor2) {
   switch (funcao){
     case "s": {
        return soma(valor1, valor2)
        break; 
     }
     case '-': {
       return subtracao(valor1, valor2)
       break;
     }
     case '/': {
      return dividir(valor1, valor2)
      break;
     }
     case '*': {
      return multiplicacao(valor1, valor2)
      break;
     }
     default: {
      return `A função ${funcao} escolhida e'inválidam utilize um dos valores (\" +, -, /, *\")`
      break 
     }
   }
 }

console.log(calcular(4, '/', 2))
