import { combineReducers } from 'redux';
import { chatsReducer } from './chats/reducers';
import { profileReducer } from './profile/reducers';
import { newMsgReducer, newAuthorReducer } from './chatMessage/reducers';

export default combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    message: newMsgReducer,
});

