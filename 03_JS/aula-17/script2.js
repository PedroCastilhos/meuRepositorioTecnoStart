var celular = {
  tela: 4.7,
  marca: 'samsung',
  memorias: '4g',
  cameras: [
    {
      resolucao: '20px',
      zoom: 8,
    }, {
      resolucao: '40px',
      zoom: '10',
    }
  ]
}

var iphone = {
  tela: 4.7,
  marca: 'apple',
  memoria: '4g',
  cameras: [
    {
      resolucao: '200px',
      zoom: 80,
    }
  ]
}

function demonstrar (produto) {
  console.log('Demonstrando o produto ' + produto.marca)
  for (let i = 0; i < produto.cameras.length; i++) {     
  console.log('Demonstrando o produto ' + produto.cameras[i].resolucao + '/' + produto.cameras[i].zoom)  
  }    
}

demonstrar(celular)

demonstrar (iphone)



