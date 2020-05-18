import { PUT_MESSAGE_TO_CHAT } from './actions';

const initialState = {
    1: {
        messages: [
            {
                text: 'Приветствую тебя в первом чате, человек!',
                author: 'Bot',
            },
        ],
    },
    2: {
        messages: [
            {
                text: 'Здарова, кожанный, это второй чат!',
                author: 'Bot',
            },
        ],
    },
};

export const newMsgReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUT_MESSAGE_TO_CHAT:
            return {
                messages: [action.payload]
            }
        default:
            return state;
    }
}
