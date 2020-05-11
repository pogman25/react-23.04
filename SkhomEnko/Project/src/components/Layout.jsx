import React, { Component } from "react"
import PropTypes from "prop-types"
import MessageField from "./MessageField/"
import FormMessage from "./FormMessage/"
import Header from "./Header"
import ChatList from "./ChatList"
import { Container, Grid } from '@material-ui/core'

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
    ],
    timeout: null // for debounce input
  }

  addMessage = (msg) => {
    const {author, message, timestamp} = msg
    this.setState(({ messages }) => ({
      messages: [...messages, { id: messages.length+1, author, message, timestamp}]
    }))
    this.refs.mf.scrollToBottom() // Скроллимся вниз, так как появилось новое сообщение.
  }

  componentDidUpdate() {
    const { messages } = this.state
    if (messages[messages.length-1].author !== this.props.botname) { // Теперь бот будет отвечать всегда.
      clearTimeout(this.state.timeout) // для дебаунса пользовательского ввода
      let mock = Math.random() > 0.7 // в некоторых случаях бот будет передразнивать юзера
      this.state.timeout = setTimeout(() => {
        this.addMessage({
          id: messages.length+1, 
          message: (mock ? messages[messages.length-1].message : botAnswers[Math.floor(Math.random() * botAnswers.length)]), 
          author: this.props.botname, 
          timestamp: new Date().getTime()
        })
      }, Math.random() * 1000 + 1000) // случайная задержка ответов бота
    }
  }

  render() {
    const { messages } = this.state
    const uname = this.props.showUsername ? this.props.username : 'Я'
    return (
      <Container>
        <Header />
        <Grid container>
          <Grid item xs sm={3}>
            <ChatList />
          </Grid>
          <Grid item xs>
            <MessageField messages={messages} uname={uname} ref="mf" />
            <FormMessage addMessage={this.addMessage} uname={uname} />
          </Grid>
        </Grid>
      </Container>
    )
  }
}

App.propTypes = {
  username: PropTypes.string.isRequired
}

App.defaultProps = {
  botname: "Бот-мыслитель",
  showUsername: false // настройка отображать username который определяется в пропе index.jsx или "Я"
}

export default App
