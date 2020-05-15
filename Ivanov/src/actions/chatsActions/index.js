export const getChats = 'chats/GET_CHATS';

export const actionGetChats = data => (
    {
        type: getChats,
        payload: data,
    }
);