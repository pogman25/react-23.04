import { handleActions } from "redux-actions";
import { addMessage } from "../../actions/chatsActions";
import { getMessagesSuccess, sendMessagesRequest } from "../../actions/messagesActions/messagesActions";

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