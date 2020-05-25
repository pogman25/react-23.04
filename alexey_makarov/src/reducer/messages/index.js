import {handleActions} from 'redux-actions';
import {addMessage} from "../../actions/chatActions";

const initialReducer = {
    messagesByIds: {
        1: {
            id: 1,
            text: 'Hello from chatReducer',
            author: 'Bot',
        },
        2: {
            id: 2,
            text: 'Hello from chatReducer',
            author: 'Bot',
        },
    },
    messagesIds: [],
};

const reducer = handleActions({
    [addMessage]: (state, {payload}) => ({
        messagesByIds: {...state.messagesByIds, [payload.id]: payload},
        messagesIds: [...state.messagesIds, payload.id],
    }),
}, initialReducer);

export default reducer;