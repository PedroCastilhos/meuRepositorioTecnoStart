function rolarDados(batata){
  var aleatorio = Math.floor(Math.random()*batata+1)
  return aleatorio
}

function criarTabuleiro(casas){
  var tabuleiro = []
  for (var i = 1; i <= casas; i++){
      tabuleiro.push({
        posicao: i,
        tipo:'normal'
      })
  }
    return tabuleiro
}

var resultado = criarTabuleiro(5)
console.log(resultado)