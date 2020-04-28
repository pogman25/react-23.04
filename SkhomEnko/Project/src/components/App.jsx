import React, { Component } from "react"
import PropTypes from "prop-types"
import MessageField from "./MessageField"
import FormMessage from "./FormMessage"
//import Counter from "./Counter"

const botAnswers = [
  'Талант — это способность верить в успех.',
  'Все, что существует на свете, когда-то было мечтой.',
  'Человек лучше всего следит за собой тогда, когда другие следят за ним тоже.',
  'Мир — это сфера, центр которой повсюду, а окружности нет нигде.',
  'Продолжительность времени определяется нашим восприятием. Размеры пространства обусловлены нашим сознанием. Поэтому, коли дух покоен, один день сравнится с тысячей веков, а коли помыслы широки, крохотная хижина вместит в себя целый мир.',
  'Не думай, что ты умнее других, хотя другие и считают, что умнее тебя, — и в этом твое преимущество перед ними.',
  'Не расставайтесь со своими иллюзиями. Когда их не станет, может быть, вы и продолжите существовать, но перестанете жить.',
  'Идите на риск, когда вы чувствуете себя готовым, но не заставляйте себя делать то, к чему вы еще не готовы.',
  'Самое сложное в том, чтобы подняться на верхнюю ступеньку лестницы, это пробраться через толпу у ее основания.'
]

class App extends Component {
  state = {
    messages: [
      {
        id: 1,
        author: this.props.showUsername ? this.props.username : 'Я' ,
        message: 'Привет Бот! Это просто проверочное сообщение, отправленное час назад, что-бы проверить, что всё ок.',
        timestamp: new Date().getTime()-3600000
      },
      {
        id: 2,
        author: this.props.botname,
        message: `${this.props.username}, всё работает исправно!`,
        timestamp: new Date().getTime()
      },
      {
        id: 3,
        author: this.props.botname,
        message: `Сообщение из будущего`,
        timestamp: new Date().getTime()+10000 // через 10 секунд
      }
    ]
  }

  toggle = () => {
    this.setState(({ isVisible }) => ({ isVisible: !isVisible }))
  }

  addMessage = (msg) => {
    const {author, message, timestamp} = msg
    this.setState(({ messages }) => ({
      messages: [...messages, { id: messages.length+1, author, message, timestamp}]
    }))
    this.refs.test.scrollToBottom() // Скроллимся вниз, так как появилось новое сообщение.
  }

  componentDidUpdate() {
    const { messages } = this.state
    if (messages[messages.length-1].author !== this.props.botname && Math.random() > 0.4) { // разбавим ответы боты молчанием.
      let mock = Math.random() > 0.5 // в некоторых случаях бот будет передразнивать юзера
      setTimeout(() => {
        this.addMessage({
          id: messages.length+1, 
          message: (mock ? messages[messages.length-1].message : botAnswers[Math.floor(Math.random() * botAnswers.length)]), 
          author: this.props.botname, 
          timestamp: new Date().getTime()
        })
      }, Math.random() * 2000) // случайная задержка ответов бота
    }
  }

  render() {
    const { messages } = this.state
    const uname = this.props.showUsername ? this.props.username : 'Я'
    return (
      <div>
        <MessageField messages={messages} uname={uname} ref="test" />
        <FormMessage addMessage={this.addMessage} uname={uname} />
      </div>
    )
  }
}

App.propTypes = {
  username: PropTypes.string.isRequired,
  lastname: PropTypes.string
}

App.defaultProps = {
  lastname: "Схоменко",
  botname: "Бот-мыслитель",
  showUsername: false // настройка отображать username который определяется в пропе index.jsx или "Я"
}

export default App
