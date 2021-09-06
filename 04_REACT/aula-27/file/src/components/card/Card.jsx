import './card.css'

import Conteudo from '../Conteudo'

function Card(props){  

  return(
    <div className='container-card' style={{'props': height}}>
        <h1>{props.titulo}</h1>
        <Conteudo nome={props.nome} idade={props.idade}></Conteudo>
         <Conteudo Profissão={props.profissao} escolaridade={props.escolaridade}></Conteudo> 
    </div>
  )
}

export default Card