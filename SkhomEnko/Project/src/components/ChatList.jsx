import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core/'
import dayjs from 'dayjs'

// структура аналогичная http://randomuser.ru/api.json?results=6
const GROUPMATES = [{"user":{"name":{"first":"","last":"Бот-мыслитель"},"registered":new Date().getTime(),"picture":{"thumbnail":"https://images.discordapp.net/avatars/692723897887490138/84aa9418766cf39f8d17d097e1d90abc.png?size=256"}}},{"user":{"name":{"first":"Алина","last":"Галочкина"},"registered":new Date().getTime()-3*3600000,"picture":{"thumbnail":"https://d2xzmw6cctk25h.cloudfront.net/avatar/1873334/attachment/thumb-82e80c7df99587549ce4571b960ac3b5.jpg"}}},{"user":{"name":{"first":"Алексей","last":"Макаров"},"registered":new Date().getTime()-4*3600000,"picture":{"thumbnail":"https://d2xzmw6cctk25h.cloudfront.net/user/557351/photo/thumb-b832f8680de1db2db5f37476601a4346.jpg"}}},{"user":{"name":{"first":"Денис","last":"Петров-Плоскирев"},"registered":new Date().getTime()-5*3600000,"picture":{"thumbnail":"https://d2xzmw6cctk25h.cloudfront.net/avatar/1712790/attachment/thumb-0431d526e1ea3ada79f425fe16cec8c5.jpg"}}},{"user":{"name":{"first":"Валентина","last":"Кунина"},"registered":new Date().getTime()-6*3600000,"picture":{"thumbnail":"https://d2xzmw6cctk25h.cloudfront.net/avatar/1565759/attachment/thumb-cd2279dc41fd494fc4d4bff4d4e3b4d5.jpeg"}}},{"user":{"name":{"first":"Александр","last":"Никулин"},"registered":new Date().getTime()-7*3600000,"picture":{"thumbnail":"https://d2xzmw6cctk25h.cloudfront.net/avatar/1464118/attachment/thumb-463de84b67e1df2763010cb030c9966b.jpg"}}},{"user":{"name":{"first":"Дмитрий","last":"Ломов"},"registered":new Date().getTime()-8*3600000,"picture":{"thumbnail":"https://d2xzmw6cctk25h.cloudfront.net/avatar/1619292/attachment/thumb-fe5cbd0fccd582b22d84a58c803e29fc.jpg"}}}]

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}))

export default function ChatList() {
    const classes = useStyles()
    const chats_data = [...GROUPMATES]

    return (
        <List className={classes.root} disablePadding>
            {chats_data.map(({user}, index) => (
                <ListItem alignItems="flex-start" key={`id-${index}`} selected={index === 0}>
                    <ListItemAvatar>
                        <Avatar>
                            <img src={user.picture.thumbnail} width="48" alt={`${user.name.last} ${user.name.first}`} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={`${user.name.last} ${user.name.first}`} secondary={dayjs(user.registered).fromNow()} />
                </ListItem>
            ))}
        </List>
    )
}