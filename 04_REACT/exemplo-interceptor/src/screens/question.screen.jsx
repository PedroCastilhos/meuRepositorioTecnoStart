import { useEffect, useState } from 'react'
import BotaoVoltar from '../components/botao-voltar'
import getQuestions from '../services/question.service'
import { getRoom, createRoom } from '../services/room.service'
import getUser from '../services/user.service'

function QuestionScreen() {

  const [questions, setQuestions] = useState([])
  const [room, setRoom] = useState([])
  const [user, setUser] = useState([])

  async function update() {
    setQuestions(await getQuestions())
    setRoom(await getRoom(1))
    setUser(await getUser())
  }

  useEffect(() => {
    update()
  }, [])

  function createMyRoom() {
    createRoom({
      name: "Segunda Sala",
      description: "Segunda sala criada com intuito de testar a api.",
      password: "123456",
      size: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5CAJBD5r9HdWX4k3GtPwQHBzKkheTz8oXqg&usqp=CAU",
      questions: [1, 2]
  })
  }
  
  return (
    <div>
      <BotaoVoltar />
      <h1>Usuário</h1>
      <span>{user.name}</span>
      <img src={user.photo} />

      <h1>Question</h1>

      <ul>
        {questions.map(question => (<li>{question.title}</li>))}
      </ul>

      <button type="button" onClick={createMyRoom} >Mais sala</button>
      <h1>Rooms</h1>
      <h2>{room.name}</h2>
    </div>
  )
}

export default QuestionScreen