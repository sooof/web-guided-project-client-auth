import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import Logout from './components/Logout';
import GasPrices from './components/GasPrices';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const isLoggedIn = localStorage.getItem('token');
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
          { (isLoggedIn && localStorage.getItem("role") === "admin") && <Link to="/protected">Admin</Link>}
          </li>
          <li>
            { isLoggedIn && <Link to="/protected">Protected Page</Link>}
          </li>
          <div>
            {isLoggedIn && <p>Welcome {localStorage.getItem('username')}</p>}
          </div>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={GasPrices} />
          {/* <Route exact path="/protected" component={GasPrices} /> */}
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />    
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
