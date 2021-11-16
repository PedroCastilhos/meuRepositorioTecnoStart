import { tecnoStartAPI } from '../tecnoStartApi'

const LOGIN = "/login"

function login(password, username, callback) {

    const credenciais = {password, username}
    tecnoStartAPI.post(LOGIN,credenciais).then(resposta => {
        callback(resposta.data.token)
    })
}

export {
    login
}

