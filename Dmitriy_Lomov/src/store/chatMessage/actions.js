export const PUT_MESSAGE_TO_CHAT = 'PUT_MESSAGE_TO_CHAT';

export const putMessage = newMessage => ({
    type: PUT_MESSAGE_TO_CHAT,
    payload: newMessage
});
