import { UsuarioContext, UsuarioProvider, meuUsuario } from './provider'


function handleOnChange(event){
  const {usuario, setUsuario} = event.target.value
  
}

<input onChange={handleOnChange}></input>