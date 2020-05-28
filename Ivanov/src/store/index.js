import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import rootReducer from '../reducers';
import { botAnswer } from './bot';

export const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk,apiMiddleware, logger,botAnswer),
        window.__REDUX_DEVTOOLS_EXTENSION__
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : () => {}
      ));
