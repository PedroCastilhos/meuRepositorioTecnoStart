import './atributo.css'

function Atributo({nome}){
  let atributo    
  switch (nome) {
        case "Grass":
          atributo = {'backgroundColor': '#9BCC50', 'color': 'white'}    
          break;
        case "Poison":
          atributo = {'backgroundColor': '#B97FC9', 'color': 'white'}    
          break;        
        case "Fire":
          atributo = {'backgroundColor': '#FD7D23', 'color': 'white'}          
          break;
        case "Water":
          atributo = {'backgroundColor': '#4592C4', 'color': 'white'}          
          break;
        default:
          atributo = {'backgroundColor': '#729F3F', 'color': 'white'}          
          break;
      }
      return (
        <div className="atributo" style = {atributo}>
          {nome}
        </div>
      )
}

export default Atributo