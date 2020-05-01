import React, {useState} from 'react'
import PropTypes from "prop-types"
import dayjs from 'dayjs'
import './Message.css'
import clsx from 'clsx'
import useInterval from './hooks/useInterval'

function Message(props) {
    const {
      id,
      author,
      message,
      showTimestamp,
      timestamp,
      isMine
    } = props.data
    
    const [fromTimestamp, setFromTimestamp] = useState(dayjs(timestamp).fromNow())
    const formatedTimestamp = dayjs(timestamp).format('llll')

    useInterval(() => {
      if (fromTimestamp !== dayjs(timestamp).fromNow()) setFromTimestamp(dayjs(timestamp).fromNow())
    }, 2000)
   
    return (   
      <div className={clsx('message', {'mine': isMine})}>
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