import { createAction } from 'redux-api-middleware';

export const sendProfileRequest = 'profile/SEND_PROFILE_REQUEST';
export const getProfileSuccess = 'profile/GET_PROFILE_SUCCESS';
export const getProfileReject = 'profile/GET_PROFILE_REJECT';

export const getProfileData = () => { 
    console.log("getProfileData")
    return createAction({
    endpoint: '/api/users.json',
    method: 'GET',
    types: [
        ['SEND'],
        {
            type: ['SUCCESS'],
            payload: (action, type, res) => {
                return res.json();
            }
        },
        ['REJECT'],
    ]
})

}

// export default getProfileData;