
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import login from './pages/login';
import signup from './pages/signup';
function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/" exact>
            <h1>HOME</h1>
          </Route>
          <Route path="/login" component={login} exact/>
          <Route path="/signup" component={signup} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
