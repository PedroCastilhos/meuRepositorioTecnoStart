import './conteudo.css'

function Conteudo(props) {
  return (
      <span className="conteudo">
          {props.children}
      </span>
  )
}

export default Conteudo