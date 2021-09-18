import './app.css';
import ExternalCard from './external-card/ExternalCard';
import IncluirTarefa from './incluir-tarefa/IncluirTarefa';
import Tarefa from './tarefa/Tarefa';
import Botao from './botao/Botao';
import TarefaEditar from './tarefa-editar/TarefaEditar';

const tarefas = [
  {
    id: 0,
    titulo: "Teste1",
    conteudo: "",
    concluida: false
  }, {
    id: 1,
    titulo: "Teste2",
    conteudo: "",
    concluida: false
  }
]

export function AppPrincipal() {

  const tarefaFromList = () => {
    return tarefas.map(tarefa => {
      return (
        <li key={tarefa.id}>
          <Tarefa tarefa={tarefa}></Tarefa>
        </li>
      )
    })
  }

  return (
    <main>
      <div className="container">
        <ExternalCard title="Lista De Tarefas - principal">
          <IncluirTarefa />
          <ul>
            {tarefaFromList()}
          </ul>
        </ExternalCard>

      </div>
    </main>
  );
}

export function AppVisualizar() {
  return (
    <main>
      <div className="container">

        <ExternalCard title="Lista De Tarefas - vizualizar">
          <div className="row space-evenly">
            <Botao>Voltar</Botao>
            <span className="flex2"></span>
          </div>

          <TarefaEditar title="Minha primeira tarefa" readOnly="true">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, saepe quidem animi illo, accusamus consequuntur, voluptatum ipsa voluptatem quo repudiandae nihil veritatis? Ipsa fuga dolorem est labore itaque dolores corporis.
          </TarefaEditar>
        </ExternalCard>

      </div>
    </main>
  );
}

export function AppEditar() {
  return (
    <main>
      <div className="container">

        <ExternalCard title="Lista De Tarefas - editar">
          <div className="row space-evenly">
            <Botao>Voltar</Botao>
            <span className="flex1"></span>
            <Botao>Salvar</Botao>
          </div>

          <TarefaEditar title="Minha primeira tarefa" readOnly="false">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, saepe quidem animi illo, accusamus consequuntur, voluptatum ipsa voluptatem quo repudiandae nihil veritatis? Ipsa fuga dolorem est labore itaque dolores corporis.
          </TarefaEditar>
        </ExternalCard>

      </div>
    </main>
  );
}




