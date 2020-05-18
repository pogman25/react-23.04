import { createReducer } from 'typesafe-actions';
import { Action } from './reducerTypes';

const initialState = {
  nickName: 'NickName',
};

type ProfileState = {
  nickName: string;
};

type SetNickNamePayload = {
  nickName: string;
};

export default createReducer<ProfileState>(initialState, {
  SET_NICKNAME: (state, action: Action<SetNickNamePayload>) => {
    const { nickName } = action.payload;

    return { ...state, nickName };
  },
});
