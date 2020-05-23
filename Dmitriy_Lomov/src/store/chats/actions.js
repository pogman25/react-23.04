import { createAction } from 'redux-actions';
import { v4 as uuidv4 } from 'uuid';

export const sendRequest = createAction('chat/SEND_REQUEST');
export const getChatsSuccess = createAction('chats/GET_CHATS_SUCCESS');
export const getChatsReject = createAction('chats/GET_CHATS_REJECT');
export const setUpdateChatsIds = createAction('chat/SET_UPDATED_CHATS_IDS');
export const deleteUpdatedId = createAction('chat/DELETE_UPDATED_ID');
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

export const fetchChatsData = () => dispatch => {
  dispatch(sendRequest());
  fetch('/api/messages.json')
    .then(res => {
      return res.json();
    })
    .then(res => {
      const data = res.reduce(
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
      dispatch(getChatsSuccess(data));
      return true;
    })
    .catch(e => {
      dispatch(getChatsReject());
      return false;
    })
    .finally(() => {});
};
