import {createContext, useContext} from 'react'

const usarioContext = createContext ({})

function UsuarioProvider(props) {
  const [usuario, setUsuario] = useState({nome:''})
  return(
    <usuarioContext.Provider value={usuario, setUsuario}>
      {props.children}
    </usuarioContext.Provider>
  )
}

function meuUsuario() {
  return useContext(UsuarioContext)
}

export {UsuarioContext, UsuarioProvider, meuUsuario}