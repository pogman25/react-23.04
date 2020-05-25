import { createAction } from 'redux-actions';
import { v4 as uuidv4 } from 'uuid';

export const addNewMessage = createAction('chats/ADD_MESSAGE');

export const addMessage = data => (dispatch) => {
  const { author, chatId } = data;
  if (author !== 'Bot') {
    setTimeout(() => {
      dispatch(addNewMessage({ author: 'Bot', text: "Отстань, человек, я просто робот!!!", chatId, id: uuidv4() }));
    }, 1000);
  }
  dispatch(addNewMessage({ ...data, id: uuidv4() }));
};