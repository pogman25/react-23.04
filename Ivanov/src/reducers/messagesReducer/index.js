import { handleActions } from 'redux-actions';

const initialStore = {
};

const reducer = handleActions ({
    [getMessages]: (state, action) => {
        console.log(action.payload);
    },
    [sendMessage]: (state, action) => action.payload,
}, initialStore);

export default reducer;
