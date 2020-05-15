import { handleActions } from 'redux-actions';
import { setChats } from '../../actions/chatsActions';

const initialStore = [{
    id: 4,
    to: '/chats/3',
    title: 'Chat 4'
}];

const reducer = handleActions({
    [setChats]: (state, action) => action.payload,
},initialStore);

// const reducer = (state = initialStore, action) => {
//     switch(action.type) {
//         case getChats:
//             return action.payload;
//         default:
//             return state;
//     }
// };

export default reducer;