var dado = [
  'avançar', 'recuar', 'esperar', 'dado', 'normal'
]
function rolarDados(max){
  var aleatorio = Math.floor(Math.random()*max)
  return aleatorio
}
function escolheAcao(){
  var resultado = rolarDados(dado.length)
  return dado[resultado]
}

for (var i = 0; i < 5; i++) {
  var acaoEscolhida = escolheAcao()
  console.log('A jogada escolhida foi ' + acaoEscolhida)
  if (acaoEscolhida === 'avançar') {
    console.log('...Avaçando algumas casas')
  }

  if (acaoEscolhida === 'recua') {
    console.log('...Recuando algumas casas')
  }

}