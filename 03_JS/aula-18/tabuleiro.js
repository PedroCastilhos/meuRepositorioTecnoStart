function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function escolherTipoCasa() {
  var tiposCasa = ['avança', 'recua', 'espera', 'dado', 'normal']
  var fatorNormal = gerarNumeroAleatorio(1, 10)

  if (fatorNormal >= 6) {
    var indiceAleatorio = gerarNumeroAleatorio(0, 3)
    return tiposCasa[indiceAleatorio]
  } else {
    return tiposCasa[4]
  }

  var indiceAleatorio = gerarNumeroAleatorio(0, 4)
  return tiposCasa[indiceAleatorio]
}

function criarCasa(i) {
  var objetoCasa = {
    posicao: i,
    tipo: escolherTipoCasa()
  }
  return objetoCasa
}

function criarTabuleiro(numeroCasas) {
  if (numeroCasas < 10) {
    throw 'Numero de casas deve ser maior que 10'
  }
  var tabuleiro = []
  console.log('Criando o tabuleuiro...')

  for (var i = 0; i <= numeroCasas; i++) {
    var casa = criarCasa(i)
    tabuleiro.push(casa)
  }

  return tabuleiro
}

function criarJogador() {
  var objetoJogador = {
    nome: 'Player 1',
    posicao: 1
  }
  return objetoJogador
}

function rolarDado(callback) {
  console.log('... agendando rolagem de dado')
  setTimeout(function (){
    var resultado = gerarNumeroAleatorio(1, 6)
  console.log('... o dado foi lançado e caiu ' + resultado)
  callback(resultado)
  }, 3000)

  
  
}

function mover(tabuleiro, jogador, valor) {
  var novaPosicao = jogador.posicao + valor
  if (novaPosicao > tabuleiro.length) {
    novaPosicao = tabuleiro.length
  }
  jogador.posicao = novaPosicao
}

function jogar(tabuleiro, jogador) {
  rolarDado(function(dado){

    console.log('...recebido o valor do resultado: ' + dado)
    mover(tabuleiro, jogador, dado)
    console.log(jogador)
  })
  
}

const numeroCasas = 25
const tabuleiro = criarTabuleiro(numeroCasas)
var jogador = criarJogador()

console.log(tabuleiro)
console.log(jogador)
jogar(tabuleiro, jogador)
