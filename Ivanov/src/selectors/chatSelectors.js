export const getAllChats = store => store.chats.chatsIds.map(key => store.chats.chatsByIds[key]);