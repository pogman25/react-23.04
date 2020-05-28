import { handleActions } from "redux-actions";
import { addMessage } from "../../actions/chatsActions";
import { getMessagesSuccess, sendMessagesRequest } from "../../actions/messagesActions/messagesActions";

// const initialStore = {
//     messagesByIds: {
//         1:{
//             id: 1,
//             text: 'Hi from first chat',
//             author: 'Bot',
//             chatId: 1
//         },
//         2:{
//             id: 2,
//             text: 'Hi from second chat',
//             author: 'Bot',
//             chatId: 2
//         },
//         3:{
//             id: 3,
//             text: 'Hi from third chat',
//             author: 'Bot',
//             chatId: 3
//         },
//     },
//     messagesIds: [1,2,3]
// };
const initialState = {
    isFetching: false,
    messagesByIds: {},
    messagesIds: []
};
const reducer = handleActions({
    [addMessage]: (state, { payload })=> ({
        messagesByIds: {...state.messagesByIds,[payload.id]: payload },
        messagesIds: [...state.messagesIds, payload.id]
    }),
    [sendMessagesRequest]: (state, action) => ({ ...state, isFetching: true }),
    [getMessagesSuccess]: (state, action) => ({
        ...state, ...action.payload, isFetching: false
    })
}, initialState);

export default reducer;