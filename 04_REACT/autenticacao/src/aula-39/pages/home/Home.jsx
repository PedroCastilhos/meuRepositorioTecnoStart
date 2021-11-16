import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { logout } from '../../auth/auth'
import { getAllUsers } from '../../services/services'

export default function PageHome() {
    const [user, setUser] = useState({})
    const history = useHistory()

    useEffect(() => {
        setUser(getAllUsers(setUser))
    }, [])

    return (
        <>
            <h1>Olá {user?.name}! Seja bem vinda!</h1>
            <img src={user?.photo} alt={`Imagem para foto de ${user?.name}`} style={{ height: "150px" }} />

            <p>{user?.description}</p>

            <h2>Contato</h2>
            <p><span>Email:</span>{user?.email}</p>
            <p><span>Telefone:</span>{user?.phone}</p>


            <button onClick={logout}>Logout</button>
        </>
    )
}