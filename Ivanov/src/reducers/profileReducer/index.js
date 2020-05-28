import { handleActions } from 'redux-actions';
import { getProfileSuccess, sendProfileRequest } from '../../actions/profileActions/profileActions';

const initialStore = {
    name: '',
    lastname: '',
};

const reducer = handleActions ({
    [getProfileSuccess]: (state, action) => ({
        state
    })    
}, initialStore);

export default reducer;

export const getProfileFromStore = store => store.profile;