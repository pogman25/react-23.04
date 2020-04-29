import React from 'react'
import PropTypes from "prop-types"
import moment from 'moment'
import './Message.css'

function Message(props) {
    const {
      id,
      author,
      message,
      showTimestamp,
      timestamp,
      isMine
    } = props.data

    const fromTimestamp = moment(timestamp).fromNow()
    const formatedTimestamp = moment(timestamp).format('llll')


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