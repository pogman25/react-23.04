import React from 'react'
import PropTypes from "prop-types"
import Moment from 'moment'
import './Message.css'

function Message(data) {
    const {
      id,
      author,
      message,
      showTimestamp,
      timestamp,
      isMine
    } = data.data

    const fromTimestamp = Moment(timestamp).fromNow()
    const formatedTimestamp = Moment(timestamp).format('llll')


    return (   
      <div className={`message${isMine ? ' mine' : ''}`} key={id}>
        {
          showTimestamp &&
            <div className="timestamp">
              { formatedTimestamp }
            </div>
        }

        <div className="bubble-container">
          <div className="bubble" title={formatedTimestamp}>
            <b>{ author }</b> <i>{ fromTimestamp }</i> <br />
            { message }
          </div>
        </div>
      </div>
    )
}

Message.propTypes = {
  data: PropTypes.object.isRequired
}

export default React.memo(Message)