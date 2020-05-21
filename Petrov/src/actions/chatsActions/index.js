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

export const addMessage = data => (dispatch, getState) => {
  const { author, chatId } = data;
  if (author !== 'Бот') {
    const { messagesIds } = getState().messages;
    const lastId = messagesIds[messagesIds.length - 1];
    setTimeout(() => {
      dispatch(addNewMessage({ author: 'Бот', text: "I'm bot", chatId, id: lastId + 1 }));
    }, 1000);
  }
  dispatch(addNewMessage({ ...data, id: uuidv4() }));
};