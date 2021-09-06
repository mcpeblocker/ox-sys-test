import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import auth from './API/auth';
import AuthPage from './Pages/Auth';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Route path="/logout">
          {
            auth.removeAuthToken()
          }
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
