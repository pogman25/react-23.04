import { handleActions } from 'redux-actions';
import { setMessages, updateMessages } from '../../actions/messagesActions';

const initialState = [];

const reducer = handleActions(
  {
    [setMessages]: (state, action) => action.payload,
    [updateMessages]: state => state,
  },
  initialState,
);

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case setChats:
//       return action.payload;
//     default:
//       return state;
//   }
// };

export default reducer;