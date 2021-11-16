import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import BotaoVoltar from '../components/botao-voltar'
import login from '../services/login.service'
function LoginScreen() {

  const [state, setState] = useState()
  const history = useHistory()

  function onChange(event) {
    const copy = { ...state }
    copy[event.target.name] = event.target.value
    setState(copy)
  }

  async function logar() {
    await login(state.username, state.password)
    history.push('/question') 
  }

  return (
    <div>
      <BotaoVoltar />
      <h1>Login</h1>

      <input type="text" name="username" id="username" placeholder="username" onChange={onChange} />
      <input type="text" name="password" id="password" placeholder="password" onChange={onChange} />

      <button type="button" onClick={logar}>Login</button>
    </div>
  )
}

export default LoginScreen