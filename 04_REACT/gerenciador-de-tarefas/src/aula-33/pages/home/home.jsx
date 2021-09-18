import { useHistory } from "react-router-dom";

import { ExternalCard, IncluirTarefa, Tarefa } from "../../coponents/components";

export default function PageHome({ setTarefas, id, setId, tarefasFinalizadas, totalTarefas }) {
    const history = useHistory()

    const tarefas = JSON.parse(localStorage.getItem("tarefas"))

    function incrementarId() {
        setId(id + 1)
    }

    function adicionarTarefa(tituloDaTarefa) {

        const novasTarefas = [{
            id: id,
            titulo: tituloDaTarefa,
            concluida: false,
            conteudo: ""
        }, ...tarefas]

        setTarefas(novasTarefas)
        incrementarId()
    }

    function deletarTarefa(idTarefa) {
        const novasTarefas = tarefas.filter(tarefa => tarefa.id !== idTarefa);
        setTarefas(novasTarefas);
    }

    function visualizarTarefa(idTarefa) {
        history.push(`/${idTarefa}`)
    }

    function editarTarefa(idTarefa) {
        history.push(`/${idTarefa}/editar`)
    }

    function alterarStatusTarefa(idTarefa) {
        const tarefasAtualizadas = tarefas.map(tarefa => {
            if(tarefa.id === idTarefa){
                tarefa.concluida = !tarefa.concluida
            }
            return tarefa
        })
        setTarefas(tarefasAtualizadas)
    }

    const tarefaFromList = () => {
        return tarefas.map(tarefa => {
            return (
                <li key={tarefa.id}>
                    <Tarefa tarefa={tarefa}
                        visualizar={visualizarTarefa}
                        editar={editarTarefa}
                        deletar={deletarTarefa}
                        alterarStatus={alterarStatusTarefa} />
                </li>
            )
        })
    }

    return (
        <main>
            <div className="container">
                <ExternalCard title="Minhas Tarefas" finalizadas={tarefasFinalizadas} total={totalTarefas}>
                    <IncluirTarefa adicionarTarefa={adicionarTarefa} />
                    <ul>
                        {tarefaFromList()}
                    </ul>
                </ExternalCard>
            </div>
        </main>
    );
}