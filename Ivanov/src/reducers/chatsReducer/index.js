import { handleActions } from 'redux-actions';
import { setChats } from '../../actions/chatsActions';

const initialStore = [];

const reducer = handleActions({
    [setChats]: (state, action) => action.payload,
},initialStore);

export default reducer;