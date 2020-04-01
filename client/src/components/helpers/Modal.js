import React from 'react'
import ReactDOM from 'react-dom';
import './Modal.css'

const Modal = ({ setModal, modal}) => {
    
  const renderModal = () => {
   // document.body.style.overflow = 'visible'
  }


  return ReactDOM.createPortal(
    <div onClick={() => setModal(!modal)} className='modalContainer'>
      <div className='modalContent' onClick={(e) => e.stopPropagation()} >
        Hello Modal
            </div>
    </div>, document.querySelector('#modal')
  )
}

export default Modal