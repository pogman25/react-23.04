import { createReducer } from 'typesafe-actions';
import { IChats, IMessage } from './../../interfaces';
import { setChats, getChats, addChat, addMessage } from './../actions/chatsActions';
import { Action } from './reducerTypes';

const initialState = {};

type AddChatPayload = {
  chatName: string;
  chatId: string;
};

type AddMessagePayload = {
  message: IMessage;
  chatId: string;
};

export default createReducer<IChats>(initialState, {
  [setChats.toString()]: (state, action: Action<IChats>) => {
    return action.payload;
  },
  [getChats.toString()]: (state, action: Action<IChats>) => {
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
