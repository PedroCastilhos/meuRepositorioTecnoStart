
function consultarCotacaoDolar() {
  var promise = new Promise(function(resolvedor, rejeitador) {
    setTimeout(function() {
      if (Math.random() > 0.1) {
        resolvedor(5.25)
      } else {
        rejeitador('Provedor de Cotação está OFFLINE')
      }
    }, 2000)
  })

  return promise
}

async function converterParaReais(valorEmDolar) {
  var cotacao = await consultarCotacaoDolar()
  var resultado = valorEmDolar * cotacao
  return resultado
}

async function demonstrar() {
  try {
    var valorEmDolar = 100
    var valorEmReais = await converterParaReais(valorEmDolar)
    console.log('Valor em Dolar: ' + valorEmDolar)
    console.log('Valor em Reais: ' + valorEmReais)
  } catch (error) {
    console.error('Não consegui fazer a conversão!', error)
  }
}

demonstrar()