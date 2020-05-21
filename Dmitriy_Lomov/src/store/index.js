import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import { loadState, saveState } from './loadStore';

// middleware

const logger = createLogger({ collapsed: true });

// const notificationCheck = store => next => action => {
//   if (action.type !== 'chats/ADD_MESSAGE') {
//     return next(action);
//   }

//   return next(action);
// };

// store

const storeConfig = () => {
  const persistedState = loadState();

  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk, logger),
  );

  store.subscribe(() => {
    saveState(store.getState());
  });
  return store;
};

export default storeConfig();
