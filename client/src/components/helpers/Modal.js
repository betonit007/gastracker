import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import VisionResults from './VisionResults'
import ProgressBar from './ProgressBar'
import axios from 'axios'
import './Modal.css'

const Modal = ({ uploadFile, setFile }) => {

  const resetModal = () => {
    setFile('')
  }

  const [upLoadPercentage, setUpLoadPercentage] = useState(0)
  const [vision, setVision] = useState([1])

  const onSubmit = async e => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('file', uploadFile)

    try {
      const res = await axios.post('./api/readings/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUpLoadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)))
          console.log(progressEvent)
        }
      })
      setTimeout(setVision(res.data), 200)

    } catch (err) {
      if (err.response.status === 500) { console.log('Problem with Server') }
      else { console.log(err) }
    }
  }


  return ReactDOM.createPortal(
    <div onClick={(e) => resetModal(e)} className='modalContainer'>
      <div className='modalContent' onClick={(e) => e.stopPropagation()} >
        {vision.length > 0 ?
          (
            <>
              <VisionResults vision={vision}/>
            </>
          )
          :
          (
            <>
              <ProgressBar percentage={upLoadPercentage} />
              <div className="row mt-5">
                <div className="col-md-6 m-auto">
                  <img style={{ width: '100%' }} src={window.URL.createObjectURL(uploadFile)} alt="upload" />
                </div>
                <form onSubmit={onSubmit}>
                  <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4" />
                </form>
              </div>
            </>
          )
        }
      </div>
    </div>, document.querySelector('#modal')
  )
}

export default Modal