import "./App.css"

import Conteudo from "./components/Conteudo";
import Card from "./components/card/Card"

function App() { 
  
  
  return ( 
    <div className="container-app" >
     <div className="group-cards">
      <Card titulo="Primeiro Título" nome='Jéssica' idade='24' profissao='QA' escolaridade='Ensino Superior Completo'></Card>
      <Card></Card>
      <Card></Card>
      </div>

      

      <Conteudo nome="Pedro" idade="22"></Conteudo>
      
    
    </div>   
  );
}

export default App;
