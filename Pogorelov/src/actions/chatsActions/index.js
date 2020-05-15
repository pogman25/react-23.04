// Actions

export const getChats = 'chats/GET_CHATS';

// Action Creators

export const actionGetChats = data => ({
  type: getChats,
  payload: data,
});
