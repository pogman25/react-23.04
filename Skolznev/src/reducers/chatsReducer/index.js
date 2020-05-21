import { handleActions } from 'redux-actions';
import { setChats, updateChats } from '../../actions/chatsActions';

const initialState = { chatsByIds: {}, chatsIds: [] };

const reducer = handleActions(
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

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case setChats:
//       return action.payload;
//     default:
//       return state;
//   }
// };

export default reducer;