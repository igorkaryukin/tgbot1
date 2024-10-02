import { MessageUpdateManyWithoutChatsInput } from "./MessageUpdateManyWithoutChatsInput";

export type ChatUpdateInput = {
  chatName?: string | null;
  chatType?: string | null;
  messages?: MessageUpdateManyWithoutChatsInput;
};
