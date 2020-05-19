import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import { loadState, saveState } from './loadStore';

const logger = createLogger({ collapsed: true });

const storeConfig = () => {
  const persitedState = loadState();

  const store = createStore(rootReducer, persitedState, applyMiddleware(thunk, logger));

  store.subscribe(() => {
    saveState(store.getState());
  });
  return store;
};
export default storeConfig();
