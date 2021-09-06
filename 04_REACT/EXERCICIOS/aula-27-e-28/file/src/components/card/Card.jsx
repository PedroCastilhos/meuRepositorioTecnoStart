import Atributo from '../atributo/Atributo'
import Titulo from '../titulo/Titulo'
import Conteudo from '../conteudo/Conteudo'
import './card.css'

function Card (props){
  return (
    <div className="card">
        
    <div className="cardImage">
      <img src="../../img/001.png" alt="" />
      
      </div>
    
    <div className="cardConteudo">
      <Conteudo>{props.pokemon.numero}</Conteudo>
      <Titulo>{props.pokemon.nome}</Titulo>      

      
      <ul>   
               <li><Atributo nome= {props.pokemon.atributo} /> </li>
              
                <li> <Atributo nome= {props.pokemon.atributo[1]}/> </li> )
                  
    </ul> 

    </div>
    
    </div>
  )
}

export default Card 