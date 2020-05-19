import { handleActions } from 'redux-actions';
import { setChats, addNewMessage } from './actions';

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
  },
  initialState,
);

export default chatsReducer;
