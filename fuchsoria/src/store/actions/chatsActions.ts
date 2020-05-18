import { createAction } from 'typesafe-actions';
import { IChats, IMessage } from './../../interfaces';

export const setChats = createAction('SET_CHATS', (chats: IChats) => chats)();
export const getChats = createAction('GET_CHATS')();
export const addChat = createAction('ADD_CHAT', (chatName: string, chatId: string) => ({ chatName, chatId }))();
export const addMessage = createAction('ADD_MESSAGE', (message: IMessage, chatId: string, callback?: Function) => {
  if (callback) {
    callback();
  }

  return { message, chatId };
})();
