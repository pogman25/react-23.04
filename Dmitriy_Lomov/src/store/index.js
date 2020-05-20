import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import { loadState, saveState } from './loadStore';

// middlewars

const logger = createLogger({ collapsed: true });

const handleHighlight = store => next => action => {
  if (action.type != 'chats/ADD_MESSAGE') {
    next(action);
  }
  console.log(store.getState());
  return next(action);
};

// store

const storeConfig = () => {
  const persitedState = loadState();

  const store = createStore(
    rootReducer,
    persitedState,
    applyMiddleware(thunk, logger, handleHighlight),
  );

  store.subscribe(() => {
    saveState(store.getState());
  });
  return store;
};

export default storeConfig();
