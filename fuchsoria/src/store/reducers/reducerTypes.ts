import { IChats, IProfileState } from './../../interfaces';

export type State = {
  chats: IChats;
  profile: IProfileState;
};

export type Action<P> = {
  type: string;
  payload: P;
};

export type ProfileState = {
  nickName: string;
};

export type SetNickNamePayload = {
  nickName: string;
};