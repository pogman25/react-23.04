import { createAction } from 'redux-actions';
import { v4 as uuidv4 } from 'uuid';

export const setChats = createAction('chats/SET_CHATS', data => {
  return data.reduce(
    (all, item) => {
      all.chatsByIds[item.id] = item;
      all.chatsIds.push(item.id);

      return all;
    },
    {
      chatsByIds: {},
      chatsIds: [],
    },
  );
});

export const addNewMessage = createAction('chats/ADD_MESSAGE');

export const addMessage = data => dispatch => {
  const { author, chatId } = data;
  if (author !== 'Bot') {
    setTimeout(() => {
      dispatch(
        addNewMessage({
          author: 'Bot',
          text: 'Прекрати, я просто робот!',
          chatId,
          id: uuidv4(),
        }),
      );
    }, 1000);
  }
  dispatch(addNewMessage({ ...data, id: uuidv4() }));
};

export const handleNotification = createAction('chats/HANDLE_NOTIFICATION');

export const putNotification = data => dispatch => {
  dispatch(handleNotification({ ...data, notification: true }));
  setTimeout(() => {
    dispatch(handleNotification({ ...data, notification: false }));
  }, 1000);
};
