import React, { useContext, useState } from 'react'
import TransContext from '../context/transactions/transContext'
import Modal from './helpers/Modal'

const AddTransaction = () => {

  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')
  const [modal, setModal] = useState(false)

  const { addTransaction } = useContext(TransContext)

  return (
    <>
      {modal && <Modal setModal={setModal} modal={modal}/>}
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input value={text} onChange={e => setText(e.target.value)} type="text" placeholder="Enter text..." className="text" />
        </div>
        <label htmlFor="amount">
          Amount <br />
          (negative - expense, positive -income)
        </label>
        <input value={amount} onChange={e=>setAmount(e.target.value)} type="number" placeholder="Enter amount..." />
      </form>
      <button className="btn" onClick={()=>setModal(!modal)}>Add transaction</button>
    </>
  )
}

export default AddTransaction
