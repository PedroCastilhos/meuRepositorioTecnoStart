import { useHistory, useParams } from "react-router-dom";

import ExternalCard from "../../coponents/external-card/ExternalCard";
import Botao from "../../coponents/botao/Botao";
import TarefaEditar from "../../coponents/tarefa-editar/TarefaEditar";

export default function PageVisualizar({ tarefas }) {
  const { id } = useParams()
  const history = useHistory()
  let tarefaAtual

  function voltar() {
    history.goBack()
  }

  function tarefaExiste() {
    tarefaAtual = tarefas.find(tarefa => tarefa.id.toString() === id)
  }

  return (
    <main>
      {tarefaExiste()}
      <div className="container">

        <ExternalCard title="Vizualizar Tarefa">
          <div className="row space-evenly">
            <Botao onclick={voltar}>Voltar</Botao>
            <span className="flex2"></span>
          </div>

          <TarefaEditar tarefa={tarefaAtual} readOnly={true} />
        </ExternalCard>

      </div>
    </main>
  )
}