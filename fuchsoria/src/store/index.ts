import { createStore, combineReducers, compose } from 'redux';
import chatsReducer from './reducers/chatsReducer';
import profileReducer from './reducers/profileReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  chats: chatsReducer,
  profile: profileReducer,
});

export function initStore(preloadedState = undefined) {
  const store = createStore(reducer, preloadedState, composeEnhancers());

  return { store };
}
