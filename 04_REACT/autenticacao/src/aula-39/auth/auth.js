import { useHistory } from "react-router"
import { HOME, LOGIN } from "../routes/routes"

const TOKEN = 'token'

const isLogged = () => !!localStorage.getItem(TOKEN)
const login = tokenValue => {
    // const history = useHistory()

    localStorage.setItem(TOKEN, tokenValue)
    // history.push(HOME)
}
const logout = () => {
    // const history = useHistory();

    localStorage.removeItem(TOKEN)
    // history.push(LOGIN)
}

export {
    isLogged,
    login,
    logout
}