import React from "react"
import PropTypes from "prop-types"
// dayjs
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import ru from 'dayjs/locale/ru'
import localizedFormat from 'dayjs/plugin/localizedFormat'
// material design
import Icon from '@material-ui/core/Icon/'
import AdbIcon from '@material-ui/icons/DeleteOutlined'
// my imports
import Message from "./Message"
// style
import './MessageField.css'


dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)
dayjs.locale((window.navigator.userLanguage === 'ru-RU' || window.navigator.language === "ru-RU") ? ru : "en") // меняем локаль moment на русскую).

class MessageField extends React.PureComponent {
    componentDidMount() {
        // делаем перерендер раз в 5 сек, это нужно, что бы перерисовать функциональные сообщения,
        // состояние в них не меняется, но нужно, что-бы менялся рендер (5 сек назад, 1 мин назад и т.д)
        // как завязать рендер у функциональных компонентов на компутед значение не сообразил.
        // По сути это основной костыль который я временно оставляю, 
        // пока не найду лучшего решения, не переписывая message на класс.
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 5000)
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" }) // скроллинг вниз
    }
    
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    // <Icon component={AdbIcon}></Icon>
    render () {
        const { messages, uname } = this.props
        return (
            <div className="message-field">
                <div className="message-container">
                    {messages.map((msg, index) => (
                        <Message key={msg.id} data={{
                            ...msg, 
                            showTimestamp: ((index === 0 || msg.timestamp-messages[index-1].timestamp > 1800000 ) ? true : false),
                            isMine: (msg.author === uname)
                        }} />
                    ))}
                    <div style={{ float:"left", clear: "both" }}
                        ref={(el) => { this.messagesEnd = el }}>
                    </div>
                </div>
            </div>
        )
    }
}

MessageField.defaultProps = {
    messages: [{Empty: true}]
}

MessageField.propTypes = {
    messages: PropTypes.array
}

export default MessageField