import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import botAnswer from './botAnswer';


const store = createStore(rootReducer, applyMiddleware(logger, botAnswer));

export default store;
