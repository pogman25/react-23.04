import { handleActions } from 'redux-actions';
import { getChatsSuccess, addMessage, sendRequest, getChatsReject } from '../../actions/chatsActions';

const initialState = {
    // isError: false,
    isFetching: false,
    chatsByIds: {},
    chatsIds: []
};

const reducer = handleActions({
  [sendRequest]: (state, action) => ({ ...state, isFetching: true }),
  [getChatsSuccess]: (state, action) => ({ ...state,  ...action.payload, isFetching: false }),
  // [getChatsReject]: (state, action) => ({ ...state, isError: true}),
  [addMessage]: (state, { payload }) => ({
      ...state,
      chatsByIds: {
        ...state.chatsByIds,
        [payload.chatId]: {
          ...state.chatsByIds[payload.chatId],
          messages: [...state.chatsByIds[payload.chatId].messages, payload.id],
        },
      },
    }),
},initialState);

export default reducer;