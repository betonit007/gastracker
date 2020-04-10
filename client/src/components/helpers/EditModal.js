import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import EditResults from './EditResults'

const EditModal = ({ toggleModal }) => {


  return ReactDOM.createPortal(
    <div onClick={() => toggleModal(false) } className='modalContainer'>
      <div className='modalContent' onClick={(e) => e.stopPropagation()} >
        <div className="close-x" onClick={()=>toggleModal(false)}><span>X</span></div>
        <EditResults toggleModal={toggleModal} />
      </div>
    </div>, document.querySelector('#modal')
  )
}

EditModal.propTypes = {

}

export default EditModal
