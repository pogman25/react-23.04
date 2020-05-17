import { createActions } from 'redux-actions';

const { getMessages, sendMessage } = createActions({
    'messages\GET_MESSAGES': (chatId) => { chatId },
    'messages\SEND_MESSAGE': (chatId) => { chatId },
});