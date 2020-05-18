import React from 'react';
import { Provider } from 'react-redux';
import { initStore } from './store';
import { setChats } from './store/actions/chatsActions';
import chatMocks from './mocks/chats';
import Router from './router';

const { store } = initStore();
store.dispatch(setChats(chatMocks));

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
