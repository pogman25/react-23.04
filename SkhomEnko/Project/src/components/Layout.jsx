import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PropTypes from "prop-types"
import Header from "./Header"
import ChatList from "./ChatList"
import { Container, Grid, Paper } from '@material-ui/core'
import EmptyPage from '../pages/ProfilePage'
import FormMessage from './FormMessage'
import MessageField from "./MessageField"

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

// структура аналогичная http://randomuser.ru/api.json?results=6
const GROUPMATES = [{"user":{"name":{"first":"","last":"Бот-мыслитель"},"registered":new Date().getTime(),"picture":{"thumbnail":"https://images.discordapp.net/avatars/692723897887490138/84aa9418766cf39f8d17d097e1d90abc.png?size=256"}}},{"user":{"name":{"first":"Алина","last":"Галочкина"},"registered":new Date().getTime()-3*3600000,"picture":{"thumbnail":"https://d2xzmw6cctk25h.cloudfront.net/avatar/1873334/attachment/thumb-82e80c7df99587549ce4571b960ac3b5.jpg"}}},{"user":{"name":{"first":"Алексей","last":"Макаров"},"registered":new Date().getTime()-4*3600000,"picture":{"thumbnail":"https://d2xzmw6cctk25h.cloudfront.net/user/557351/photo/thumb-b832f8680de1db2db5f37476601a4346.jpg"}}},{"user":{"name":{"first":"Денис","last":"Петров-Плоскирев"},"registered":new Date().getTime()-5*3600000,"picture":{"thumbnail":"https://d2xzmw6cctk25h.cloudfront.net/avatar/1712790/attachment/thumb-0431d526e1ea3ada79f425fe16cec8c5.jpg"}}},{"user":{"name":{"first":"Валентина","last":"Кунина"},"registered":new Date().getTime()-6*3600000,"picture":{"thumbnail":"https://d2xzmw6cctk25h.cloudfront.net/avatar/1565759/attachment/thumb-cd2279dc41fd494fc4d4bff4d4e3b4d5.jpeg"}}},{"user":{"name":{"first":"Александр","last":"Никулин"},"registered":new Date().getTime()-7*3600000,"picture":{"thumbnail":"https://d2xzmw6cctk25h.cloudfront.net/avatar/1464118/attachment/thumb-463de84b67e1df2763010cb030c9966b.jpg"}}},{"user":{"name":{"first":"Дмитрий","last":"Ломов"},"registered":new Date().getTime()-8*3600000,"picture":{"thumbnail":"https://d2xzmw6cctk25h.cloudfront.net/avatar/1619292/attachment/thumb-fe5cbd0fccd582b22d84a58c803e29fc.jpg"}}}]

class App extends Component {
  DEFAULT_BOT_MSGS = () => [
    {
      id: 1,
      author: this.props.showUsername ? this.props.username : 'Я' ,
      message: 'Привет Бот! Это просто проверочное сообщение, отправленное час назад, что-бы проверить, что всё ок.',
      timestamp: new Date().getTime()-3600000
    },
    {
      id: 2,
      author: "Бот-мыслитель",
      message: `${this.props.username}, всё работает исправно!`,
      timestamp: new Date().getTime()
    },
    {
      id: 3,
      author: "Бот-мыслитель",
      message: `Сообщение из будущего`,
      timestamp: new Date().getTime()+10000 // через 10 секунд
    }
  ]

  state = {
    chats: Object.assign({}, GROUPMATES.map((val, index) => ({
      messages: !index ? [...this.DEFAULT_BOT_MSGS()] : [],
      title: `Чат с ${val.user.name.last} ${val.user.name.first}`
    }))),
    selected: 0,
    timeout: null // for debounce input
  }

  addMessage = (msg) => {
    const { author, message, timestamp} = msg
    const { selected } = this.state
    const { messages } = this.state.chats[selected]
    this.setState(({ chats }) => ({
      chats: {
        ...chats,
        [selected]: {
          ...chats[selected],
          messages: [
            ...messages,
            { id: messages.length+1, message, author, timestamp},
          ],
        },
      }
    }))

    this.refs.mf.scrollToBottom() // Скроллимся вниз, так как появилось новое сообщение.
  }

  selectChat = (id) => {
    clearTimeout(this.state.timeout)
    this.setState(( { selected } ) => ({ selected: id }))
  }

  componentDidUpdate() {
    const { selected } = this.state
    const { messages } = this.state.chats[selected]
    const name = `${GROUPMATES[selected].user.name.last} ${GROUPMATES[selected].user.name.first}`
    
    if (messages.length && messages[messages.length-1].author === (this.props.showUsername ? this.props.username : 'Я')) { // Теперь бот будет отвечать всегда.
      clearTimeout(this.state.timeout) // для дебаунса пользовательского ввода
      let mock = Math.random() > 0.7 // в некоторых случаях бот будет передразнивать юзера
      this.state.timeout = setTimeout(() => {
        this.addMessage({
          id: messages.length+1, 
          message: (mock ? messages[messages.length-1].message : botAnswers[Math.floor(Math.random() * botAnswers.length)]), 
          author: name, 
          timestamp: new Date().getTime()
        })
      }, Math.random() * 1000 + 1000) // случайная задержка ответов бота
    }
  }

  render() {
    const { selected } = this.state
    const { messages } = this.state.chats[selected]
    const uname = this.props.showUsername ? this.props.username : 'Я'

    return (
      <Container>
        <BrowserRouter ref="router">
        <Header />
        <Grid container>
          <Grid item xs sm={3}>
            <ChatList users={[...GROUPMATES]} select={this.selectChat} current={selected} />
          </Grid>
          <Grid item xs>
            <Paper>
              <Switch>
                <Route path="/profile">
                  <EmptyPage />
                </Route>
                <Route path={["/","/chat/:chat_id"]}>
                  <MessageField messages={messages} uname={uname} ref="mf" sel={selected} />
                  <FormMessage addMessage={this.addMessage} uname={uname} />
                </Route>
              </Switch>
            </Paper>
          </Grid>
        </Grid>
        </BrowserRouter>
      </Container>
    )
  }
}

App.propTypes = {
  username: PropTypes.string.isRequired
}

App.defaultProps = {
  showUsername: false // настройка отображать username который определяется в пропе index.jsx или "Я"
}

export default App
