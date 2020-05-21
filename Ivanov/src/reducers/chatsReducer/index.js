import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import { setChats, updateChats } from '../../actions/chatsActions';

const initialStore = {
    chatsByIds: {},
    chatsIds: []
};

const reducer = handleActions({
    [setChats]: (state, action) => action.payload,
    [updateChats]: (state, action) => { 
        //console.log(state);
        const {text, author, chatId} = action.payload;
        const newState = update(state,
            {   
                [chatId]: 
                    { 
                        messages:{$push:[{text:text, author:author}]}
                    }       
            }
        );
        return newState;
    }
},initialStore);

export default reducer;