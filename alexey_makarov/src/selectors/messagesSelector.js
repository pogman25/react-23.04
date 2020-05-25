import {getChatsByIds} from "./chatSelectors";

export const getMessagesById = store => store.messages.messagesByIds;

export const getChatMessages = (store, ownProps) => {
    const {chatId} = ownProps.match.params;
    const messagesByIds = getMessagesById(store);
    const chatsByIds = getChatsByIds(store);
    if (chatId in chatsByIds) {
        return chatsByIds[chatId].messages.map(id => messagesByIds[id]);
    }
    return []
}