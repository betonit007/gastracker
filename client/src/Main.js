import React from 'react'
import Balance from './components/Balance'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'


const Main = () => {

  return (
    <>
      <Balance />
      <TransactionList />
      <AddTransaction />
    </>
  )
}

export default Main
