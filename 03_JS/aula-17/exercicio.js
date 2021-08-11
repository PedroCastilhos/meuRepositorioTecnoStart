
var dado = [
  'avançar', 'recuar', 'esperar', 'dado', 'normal'
]

function demonstrar (jogada) {  
  var resultado = rolarDados(dado.length)
  function rolarDados(jogada){
    var aleatorio = Math.floor(Math.random()* 5)
    return aleatorio
  }
    for (let i = 0; i < 1; i++) {
      console.log('A jogada escolhida foi ' + dado[resultado])      
      
    }
}
demonstrar(dado)



