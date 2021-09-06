import Card from './card/Card.jsx'

const objetoCards = [
  { nome: "Bulbasaur", numero: "Nº001", atributo: ["Grass", "Poison"] },

  { nome: "Ivysaur", numero: "Nº002", atributo: ["Grass", "Poison"] },

  { nome: "Venusaur", numero: "Nº003", atributo: ["Grass", "Poison"] },

  { nome: "Charmander", numero: "Nº004", atributo: ["Fire"] },

  { nome: "Charmeleon", numero: "Nº005", atributo: ["Fire"] },

  { nome: "Charizard", numero: "Nº006", atributo: ["Fire", "Flying"] },

  { nome: "Squirtle", numero: "Nº007", atributo: ["Water"] },

  { nome: "Wartortle", numero: "Nº008", atributo: ["Water"] },

  { nome: "Blastoise", numero: "Nº009", atributo: ["Water"] },

  { nome: "Caterpie", numero: "Nº010", atributo: ["Bug"] },

]
function App() {


  return (
    <>
  


<ul>{objetoCards.map((lista) => {
        return <Card pokemon={lista} />
      })}</ul>
    </>
  )
}

export default App


