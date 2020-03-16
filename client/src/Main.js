import React from 'react'
import Balance from './components/Balance'
import BudgetExpenses from './components/BudgetExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'

const Main = () => {
  return (
    <>
      <Balance />
      <BudgetExpenses />
      <TransactionList />
      <AddTransaction />
    </>
  )
}

export default Main
