
function calcular () {
  
  const valorInicial = Number(document.querySelector('#valorInicial').value)
  const aporte = Number(document.querySelector('#Aporte').value)
  const meses = Number(document.querySelector('#Meses').value)
    
  let banco
  
  document.querySelectorAll(".radioBanco").forEach( (radioBanco) => {
    if (radioBanco.checked) {
      banco = radioBanco.value
    }
  } )      

  
  const taxa = document.querySelector('#TaxaBanco-' + banco).value/100
  
  const resultado = (valorInicial * (1 + taxa ** meses) + ((aporte * (((1 + taxa) ** meses) - 1)) / taxa)).toFixed(2);
  
  
  const rende = document.querySelector('#Rende')  
  rende.hidden = false
  rende.querySelector('span')[0].innerHTML = rende(Resultado)
}

// valorInicial.addEventListener('change', () => {
//   if (valorInicial === NaN) {
//     alert('Adicione um valor')
//   }
// })

// boa noite gurizada, respondendo a tua pergunta

// e a minha realidade não é diferente da gurizada

// e cara, eu fico bem feliz com essa plataforma


//

//var resultado = valorInicial * meses 

//(valorInicialInicial + aporteMensal * Meses) * picPay







/*
valorInicial.addEventListener('change', () =>{
  alert('mudado')
})

aporte.addEventListener('change', () =>{
  alert('mudado')
})

meses.addEventListener('change', () =>{
  alert('mudado')
})

*/