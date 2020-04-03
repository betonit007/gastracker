import React, { useContext } from 'react'
import TransContext from '../../context/transactions/transContext'

const RadioButtons = ({ user }) => {

  const { getUserTransactions, millisecs } = useContext(TransContext)

  return (
    <>
      <div className="row" style={{ marginLeft: 'auto' }}>
        <div className="col-sm-12">
          <form style={{ display: 'flex', alignContent: 'flex-end' }}>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="option1"
                  checked={millisecs === 604800000}
                  onChange={() => getUserTransactions(user, 604800000)}
                />
                7 days
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="option2"
                  checked={millisecs === 2592000000}
                  onChange={() => getUserTransactions(user, 2592000000)}
                />
                30 days
              </label>
            </div>
          </form>
        </div>
      </div>
    </>

  )
}

export default RadioButtons
