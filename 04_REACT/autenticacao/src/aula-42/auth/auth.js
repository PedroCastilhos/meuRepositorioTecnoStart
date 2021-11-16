import {login as loginApi} from "../services/services"
const TOKEN = 'token'

const isLogged = () => !!localStorage.getItem(TOKEN)
const login = (password, username) => {

    function setInSessionStorage(tokenValue) {
        localStorage.setItem(TOKEN, tokenValue);
    }

    // loginApi(password, username, setInSessionStorage)
    
    setInSessionStorage("string")
}
const logout = () => {
    localStorage.removeItem(TOKEN)
}

export {
    isLogged,
    login,
    logout
}