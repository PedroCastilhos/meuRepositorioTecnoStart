const listaDeCarros = [
  {
      "Marca": "HAFEI",
      "Modelo": "Towner Jr. Pick-up 1.0 8V 48cv  CD 4p",
      "Ano": 2010,
      "Placa": "HTH-6426",
      "Cor": "Laranja",
      "VagaFixa": true
  },
  {
      "Marca": "BMW",
      "Modelo": "X5 XDRIVE 35i Full 3.0 306cv Bi-Turbo",
      "Ano": 2014,
      "Placa": "NDS-2385",
      "Cor": "Azul",
      "VagaFixa": false
  },
  {
      "Marca": "Saab",
      "Modelo": "9000 CD 2.3 Turbo",
      "Ano": 1992,
      "Placa": "MOO-7869",
      "Cor": "Cinza",
      "VagaFixa": false
  },
  {
      "Marca": "HAFEI",
      "Modelo": "Towner Pick_up Ba",
      "Ano": 2011,
      "Placa": "JAS-2684",
      "Cor": "Laranja",
      "VagaFixa": true
  },
  {
      "Marca": "Gurgel",
      "Modelo": "Carajas/ Tocantis/ Xavante/ Vip",
      "Ano": 1985,
      "Placa": "IUV-5118",
      "Cor": "Amarelo",
      "VagaFixa": false
  },
  {
      "Marca": "Mahindra",
      "Modelo": "PIK-UP CD 2.2 4X4 (diesel) Mec.",
      "Ano": 2013,
      "Placa": "INI-7129",
      "Cor": "Verde",
      "VagaFixa": true
  }
]

for (let i = 0; i < listaDeCarros.length; i++) {
      let carro = listaDeCarros[i]
      console.log(carro.Placa + ' vaga fixa ' + carro.VagaFixa)
}   

listaDeCarros.forEach( () => {})