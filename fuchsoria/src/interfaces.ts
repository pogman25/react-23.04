export interface IMessage {
  id?: string;
  author: string;
  text: string;
  authorAccess?: string;
  isBot?: boolean;
}

export interface IChatListItem {
  id: number | string;
  title: string;
  description: string;
}

export interface IChatListProps {
  items: IChatListItem[];
}

export interface IChatContainerProps {
  noContent?: boolean;
  history?: unknown;
  location?: unknown;
  match?: {
    isExact: boolean;
    params: {
      chatId: string;
    };
    path: string;
    url: string;
  };
}

export interface IChatContainerState {
  chats: IChats;
  chatList?: IChatListItem[];
}

export interface IMessageListProps {
  messages: IMessage[];
}

export interface IMessageProps extends IMessage {}

export interface IChatFormProps {
  handleSubmit: (author: string, text: string) => void;
}

export interface IChat {
  title: string;
  messages: IMessage[];
}

export interface IChats {
  [key: string]: IChat;
}
