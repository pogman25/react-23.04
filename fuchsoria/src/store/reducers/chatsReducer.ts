import { createReducer } from 'typesafe-actions';
import { IChats } from './../../interfaces';
import { setChats, getChats, addChat, addMessage } from './../actions/chatsActions';
import { Action, AddChatPayload, AddMessagePayload } from './reducerTypes';

const initialState = {};

export default createReducer<IChats>(initialState, {
  [setChats.toString()]: (state, action: Action<IChats>) => {
    return action.payload;
  },
  [getChats.toString()]: (state) => {
    return { ...state };
  },
  [addChat.toString()]: (state, action: Action<AddChatPayload>) => {
    const { chatName, chatId } = action.payload;

    return {
      ...state,
      [chatId]: {
        title: chatName,
        messages: [],
      },
    };
  },
  [addMessage.toString()]: (state, action: Action<AddMessagePayload>) => {
    const { message, chatId } = action.payload;

    return {
      ...state,
      [chatId]: {
        ...state[chatId],
        messages: [...state[chatId].messages, message],
      },
    };
  },
});
