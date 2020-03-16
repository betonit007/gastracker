import React, { useContext, useState } from 'react'
import TransContext from '../context/transactions/transContext'

const AddTransaction = () => {

  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')

  const { addTransaction } = useContext(TransContext)
  const onSubmit = e => {
    e.preventDefault()

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000), //simple way of generating random id.
      text,
      amount: +amount //really simple way of turning a string into a number
    }

    addTransaction(newTransaction)
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input value={text} onChange={e=>setText(e.target.value)} type="text" placeholder="Enter text..." className="text"/>
        </div>
        <label htmlFor="amount">
          Amount <br/>
          (negative - expense, positive -income)
        </label>
        <input value={amount} onChange={e=>setAmount(e.target.value)} type="number" placeholder="Enter amount..."/>
        <button className="btn" onClick={e=>onSubmit(e)}>Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
