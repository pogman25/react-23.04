import { createAction } from 'redux-actions';
import { createAction as createActionRSAA, RSAA} from 'redux-api-middleware';
import { v4 } from 'uuid';

export const sendRequest = 'chats/SEND_REQUEST';
export const getChatsSuccess = 'chats/GET_CHATS_SUCCESS';
export const getChatsReject = 'chats/GET_CHATS_REJECT';
export const addMessage = createAction('chats/ADD_MESSAGE',
 data => {
    return { ...data, id: v4() };
});

export const getChatsData = () => {
    return createActionRSAA( {
        endpoint: '/api/chats_data.json',
        method: 'GET',
        types: [
            sendRequest,         
            {
                type: getChatsSuccess,
                payload: (action, state, res) => {      
                        return res.json()
                        .then(json =>(
                             json.reduce((all, item) => {
                                all.chatsByIds[item.id] = item;
                                all.chatsIds.push(item.id);
                                
                                return all;
                            },{
                                chatsByIds: {},
                                chatsIds: []
                            })
                        ));
                    
                }
            },
            getChatsReject,
        ]
    });
}
// export const fetchChatsData = () => dispatch => {
//     dispatch(sendRequest());
//     fetch('/api/chats_data.json')
//         .then(res => {
//             return res.json();
//         })
//         .then(res => {
//             const data = res.reduce((all, item) => {
//                     all.chatsByIds[item.id] = item;
//                     all.chatsIds.push(item.id);
//                     return all;
//                 },{
//                     chatsByIds: {},
//                     chatsIds: []
//                 });
//             dispatch(getChatsSuccess(data));
//         })
//         .catch(e => {
//             dispatch(getChatsReject(e));
//         })
// }
