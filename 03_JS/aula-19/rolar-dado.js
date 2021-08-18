


function rolarDado() {
  return new Promise((resolvedor) => 
    setTimeout(() => {
      var dado = Math.floor(Math.random() * (6 - 1) + 1)
      console.log("A rolagem de dados foi " + dado)
      resolvedor(dado)
    }, 1000)
  )
}

function mover(quantidade) {
  console.log("Movendo " + quantidade + " casas")
}

async function jogar() {
  console.log("Iniciando a partida")
  var dado = await rolarDado()
  mover(dado)
}

jogar()
