
function consultarCotacaoDolar(callback, errorCallback) {
  setTimeout(function() {
    if (Math.random() > 0.5) {
      callback(5.25)
    } else {
      errorCallback()
    }
  }, 2000)
}

function converterParaReais(valorEmDolar, callback, errorCallback) {
  consultarCotacaoDolar(function(cotacao) {
    var resultado = valorEmDolar * cotacao
    callback(resultado)
  }, function() {
    errorCallback()
  })
}

var valorEmDolar = 100
converterParaReais(valorEmDolar, function(resultado) {
  console.log('Valor em Dolar: ' + valorEmDolar)
  console.log('Valor em Reais: ' + resultado)
}, function() {
  console.log('Não consegui fazer a conversão do dolar.')
})