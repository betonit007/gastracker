import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthState from './context/auth/AuthState'
import TransState from './context/transactions/TransState'
import PrivateRoute from './routing/PrivateRoute'
import Header from './components/Header'
import Alert from './components/Alert'
import Landing from './components/Landing'
import Main from './Main'
import Register from './components/Register'
import './App.css';



const App = () => {
  
  return (
 
    <AuthState>
      <TransState>
        <Router>
          <div className="App">
            <div className="container">
              <Header />
              <Alert />
              <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact path='/register' component={Register} />
                <PrivateRoute exact path='/main' component={Main} />
              </Switch>
            </div>
          </div>
        </Router>
      </TransState>
    </AuthState>
  );
}

export default App;
