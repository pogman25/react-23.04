import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import { loadState, saveState } from './loadStore';

// middleware

const logger = createLogger({ collapsed: true });

const notificationCheck = store => next => action => {
  if (action.type !== 'chats/HANDLE_NOTIFICATION') {
    return next(action);
  }

  const result = next(action);

  return result;
};

// store

const storeConfig = () => {
  const persistedState = loadState();

  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk, logger, notificationCheck),
  );

  store.subscribe(() => {
    saveState(store.getState());
  });
  return store;
};

export default storeConfig();
