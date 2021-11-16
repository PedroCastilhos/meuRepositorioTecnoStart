import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { PageHome, PageLogin, PageNotFound } from './pages/pages';
import { HOME, LOGIN, PublicRoute, PrivateRoute } from './routes/routes';


export default function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path={LOGIN} component={PageLogin} />
        <PrivateRoute exact path={HOME} component={PageHome} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}
