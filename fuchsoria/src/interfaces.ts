export interface IMessage {
  id?: string;
  author: string;
  text: string;
}

export interface IChatContainerState {
  messages: IMessage[];
}

export interface IMessageListProps {
  messages: IMessage[];
}

export interface IMessageProps extends IMessage {}

export interface IChatFormProps {
  handleSubmit: (author: string, text: string) => void;
}
