import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthState from './context/auth/AuthState'
import TransState from './context/transactions/TransState'
import PrivateRoute from './routing/PrivateRoute'
import Header from './components/Header'
import Landing from './components/Landing'
import Main from './Main'
import './App.css';



const App = () => {

  return (
    <AuthState>
      <TransState>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path='/' component={Landing} />
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
