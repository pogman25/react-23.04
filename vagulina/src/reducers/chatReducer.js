import update from "react-addons-update";
import { SEND_MESSAGE } from "../actions/messageActions";
import { ADD_CHAT } from "../actions/chatActions";

const initialStore = {
  chats: {
    1: { title: "Chat1", messageList: [1, 2] },
    2: { title: "Chat2", messageList: [] },
    3: { title: "Chat3", messageList: [] },
    4: { title: "Chat4", messageList: [] },
  },
};

function chatReducers(store = initialStore, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return update(store, {
        chats: {
          $merge: {
            [action.chatId]: {
              title: store.chats[action.chatId].title,
              messageList: [
                ...store.chats[action.chatId].messageList,
                action.messageId,
              ],
            },
          },
        },
      });
    case ADD_CHAT: {
      const chatId = Object.keys(store.chats).length + 1;
      return update(store, {
        chats: {
          $merge: { [chatId]: { title: action.title, messageList: [] } },
        },
      });
    }
    default:
      return store;
  }
}

export default chatReducers;
