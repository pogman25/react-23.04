import { addMessage } from "../actions/chatsActions"


export const botAnswer = store => next => action => {
    if(action.type == addMessage.toString()) {
        const { author, chatId } = action.payload;
        if(author != 'Bot') {
            setTimeout(() => {
                store.dispatch(
                    addMessage(
                        { author:'Bot', text: 'I am Bot!!!', chatId}
                    )
                )
            }, 1000);
        } else {
            
        }
    }
    return next(action);
}