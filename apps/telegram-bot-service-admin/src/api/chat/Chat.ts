import { Message } from "../message/Message";

export type Chat = {
  chatName: string | null;
  chatType: string | null;
  createdAt: Date;
  id: string;
  messages?: Array<Message>;
  updatedAt: Date;
};
