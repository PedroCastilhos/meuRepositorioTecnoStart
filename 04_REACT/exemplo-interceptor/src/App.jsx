import React from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import HomeScreen from './screens/home.screen';
import CartoesVisitaScreen from './screens/cartoes-visita.screen';
import CartaoVisitaDetalheScreen from './screens/cartao-visita-detalhe.screen';
import QuestionScreen from "./screens/question.screen";
import LoginScreen from "./screens/login.screen";

function App() {
  return (
    <Router>

      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/question">Questions</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/home">
          <HomeScreen />
        </Route>
        <Route path="/question">
          <QuestionScreen />
        </Route>
        <Route path="/login">
          <LoginScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
