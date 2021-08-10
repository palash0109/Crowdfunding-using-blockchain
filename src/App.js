import {Route, Switch} from 'react-router-dom';
import SignUp from './containers/signUp';
import SignIn from './containers/signIn';
import Crowdfunds from './containers/crowdfund';
import Home from './containers/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
      <Switch>
          <Route path="/signIn">< SignIn /></Route>
          <Route path="/signUp">< SignUp /></Route>
          <Route path="/crowdfunds">< Crowdfunds/></Route>
          <Route path="/crowdfunds/:id"><Crowdfunds /></Route>
          <Route path="/"><Home /></Route>
      </Switch>
  );
}

export default App;
