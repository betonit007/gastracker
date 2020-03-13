import React from 'react';
import Header from './components/Header'
import Balance from './components/Balance'
import BudgetExpenses from './components/BudgetExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import AuthState from './context/auth/AuthState'
import TransState from './context/transactions/TransState'
import './App.css';



const App = () => {

  return (
    <AuthState>
      <TransState>
        <div className="App">
          <Header />
          <div className="container">
            <Balance />
            <BudgetExpenses />
            <TransactionList />
            <AddTransaction />
          </div>
        </div>
      </TransState>
    </AuthState>
  );
}

export default App;
