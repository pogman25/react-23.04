import { createAction } from 'redux-actions'

export const setChats = createAction('chats/SET_CHATS', data => {
    return data.reduce((all, item) => {
        all.chatsByIds[item.id] = item;
        all.chatsIds.push(item.id);
        return all;
    },{
        chatsByIds: {},
        chatsIds: []
    });
});
export const updateChats = createAction('chats/UPDATE_CHATS');
