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

export interface IChatContainerState {
  messages: IMessage[];
  chatList: IChatListItem[];
}

export interface IMessageListProps {
  messages: IMessage[];
}

export interface IMessageProps extends IMessage {}

export interface IChatFormProps {
  handleSubmit: (author: string, text: string) => void;
}
