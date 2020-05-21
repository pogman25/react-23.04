import { v4 as uuidv4 } from 'uuid';
import { addMessage } from '../actions/chatsActions';

const botAnswer = store => next => action => {
    if (action.type === addMessage.toString()) {
        const { author, chatId } = action.payload;
        if (author !== 'Bot') {
            setTimeout(() => {
                store.dispatch(addMessage({ author: 'Bot', text: "I'm bot", chatId, id: uuidv4() }));
            }, 1000);
        }
    }
    return next(action);
};

export default botAnswer;