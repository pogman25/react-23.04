import { handleActions } from 'redux-actions';
import { setChats, addNewMessage, handleNotification } from './actions';

const initialState = { chatsByIds: {}, chatsIds: [] };

const chatsReducer = handleActions(
  {
    [setChats]: (state, action) => action.payload,
    [addNewMessage]: (state, { payload }) => ({
      ...state,
      chatsByIds: {
        ...state.chatsByIds,
        [payload.chatId]: {
          ...state.chatsByIds[payload.chatId],
          messages: [...state.chatsByIds[payload.chatId].messages, payload.id],
        },
      },
    }),
    [handleNotification]: (state, { payload }) => ({
      ...state,
      chatsByIds: {
        ...state.chatsByIds,
        [payload.chatId]: {
          ...state.chatsByIds[payload.chatId],
          notification: payload.notification,
        },
      },
    }),
  },
  initialState,
);

export default chatsReducer;
