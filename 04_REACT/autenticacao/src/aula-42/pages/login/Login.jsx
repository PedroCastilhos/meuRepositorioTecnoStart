import { useHistory, Redirect } from 'react-router-dom'
import { isLogged, login } from '../../auth/auth'
import { useUser } from '../../providers/user'
import { HOME } from '../../routes/routes'

export default function PageLogin() {
    const history = useHistory()
    const {user, setUser} = useUser()
    function start() {
        return isLogged() ? <Redirect to={HOME} /> : undefined
    }

    function handleOnClik(){
       login('string', 'string@bstring');
       setUser({name:'João'});
       console.log(user);
       history.push(HOME);
    }

    start()

    return (
        <>
            <p>{user.name}</p>
            <h1>Login</h1>
            <button onClick={handleOnClik}>Sign in</button>
        </>
    )
}
