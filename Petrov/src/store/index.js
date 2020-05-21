import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(logger)));

export default store;