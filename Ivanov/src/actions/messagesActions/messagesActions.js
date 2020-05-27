import { createAction } from 'redux-api-middleware';

export const sendMessagesRequest = 'messages/SEND_MESSAGES_REQUEST';
export const getMessagesSuccess = 'messages/GET_MESSAGES_SUCCESS';
export const getMessagesReject = 'messages/GET_MESSAGES_REJECT';

const getMessagesData = () => createAction({
    endpoint: '/api/messages.json',
    method: 'GET',
    types: [
        sendMessagesRequest,
        {
            type: getMessagesSuccess,
            payload: (action, state, res) => {      
                    return res.json()
                    .then(json =>(
                         json.reduce((all, item) => {
                            all.messagesByIds[item.id] = item;
                            all.messagesIds.push(item.id);
                            
                            return all;
                        },{
                            messagesByIds: {},
                            messagesIds: []
                        })
                    ));
                
            }
        },
        getMessagesReject,
    ]
})

export default getMessagesData;