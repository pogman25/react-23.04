import { handleActions } from 'redux-actions';
import { addNewMessage } from './actions';

const initialState = {
  messagesByIds: {
    "1": {
      id: 1,
      text: 'Приветствую тебя, человек, в первом чате!',
      author: 'Bot',
    },

    "2": {
      id: 2,
      text: 'Здарова, кожанный, тут второй чат!',
      author: 'Bot',
    },
  },
  messagesIds: ["1", "2"],
};

const messageReducer = handleActions(
  {
    [addNewMessage]: (state, { payload }) => ({
      messagesByIds: { ...state.messagesByIds, [payload.id]: payload },
      messagesIds: [...state.messagesIds, payload.id],
    }),
  },
  initialState,
);

export default messageReducer;
