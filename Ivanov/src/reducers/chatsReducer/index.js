import { getChats } from '../../actions/chatsActions';

const initialState = {
    chatByIds: {},
    chatIds: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case getChats:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;