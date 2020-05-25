import {createSelector} from "reselect";

export const getChatsByIds = store => store.chats.chatsByIds;
export const getChatsIds = store => store.chats.chatsIds;

export const getAllChats = createSelector(getChatsByIds,
    getChatsIds,
    (byIds, ids) =>
        ids.map(key => byIds[key]),
);