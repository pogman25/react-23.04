import { createReducer } from 'typesafe-actions';
import { IChats, IMessage } from './../../interfaces';
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
  SET_CHATS: (state, action: Action<IChats>) => {
    return action.payload;
  },
  GET_CHATS: (state, action: Action<IChats>) => {
    return { ...state };
  },
  ADD_CHAT: (state, action: Action<AddChatPayload>) => {
    console.log(action);
    const { chatName, chatId } = action.payload;

    return {
      ...state,
      [chatId]: {
        title: chatName,
        messages: [],
      },
    };
  },
  ADD_MESSAGE: (state, action: Action<AddMessagePayload>) => {
    console.log(action);
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
