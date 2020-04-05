import React, { useState } from 'react'
import Modal from './helpers/Modal'

const AddTransaction = () => {
   
  const [file, setFile] = useState('')
  
  const onChange = e => {
    setFile(e.target.files[0])
  }

  return (
    <>
      {file && <Modal uploadFile={file} setFile={setFile}/>}
      <label className="btn btn-add-transaction">
        <input 
          type="file" 
          style={{display: 'none'}}
          id="customFile"
          onChange={(e)=>onChange(e)}
        />
        <span className="addTrans">Add Transaction</span>
      </label>
    </>
  )
}
export default AddTransaction
