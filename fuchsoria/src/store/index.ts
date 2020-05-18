import { createStore, combineReducers, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import chatsReducer from './reducers/chatsReducer';
import profileReducer from './reducers/profileReducer';

export const history = createBrowserHistory();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  chats: chatsReducer,
  profile: profileReducer,
  router: connectRouter(history),
});

export function initStore(preloadedState = undefined) {
  const store = createStore(reducer, preloadedState, composeEnhancers());

  return { store };
}
