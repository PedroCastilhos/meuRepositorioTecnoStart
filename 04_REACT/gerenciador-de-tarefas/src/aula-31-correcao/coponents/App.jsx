import './app.css';

import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import MenuNav from '../coponents/menu-vaigation/MenuNav';
import PageEditar from '../pages/editar/editar';
import PageHome from '../pages/home/home';
import PageVisualizar from '../pages/visualizar/visualizar';
import PageNaoEncontrada from '../pages/nao-encontrada/naoEncontrada';

export default function App() {
  const [tarefas, setTarefas] = useState([])
  const [id, setId] = useState(0)

  return (
    <Router>
      <MenuNav />

      <Switch>
        <Route path='/' exact>
          <PageHome tarefas={tarefas} setTarefas={setTarefas} id={id} setId={setId} />
        </Route>
        <Route path='/:id' exact>
          <PageVisualizar tarefas={tarefas} />
        </Route>
        <Route path='/:id/editar' exact>
          <PageEditar tarefas={tarefas} setTarefas={setTarefas} />
        </Route>
        <Route path='*'>
          <PageNaoEncontrada />
        </Route>
      </Switch>
    </Router>
  );
}




