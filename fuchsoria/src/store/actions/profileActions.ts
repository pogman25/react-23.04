import { createAction } from 'typesafe-actions';

export const setNickName = createAction('SET_NICKNAME', (nickName: string) => ({ nickName }))();
