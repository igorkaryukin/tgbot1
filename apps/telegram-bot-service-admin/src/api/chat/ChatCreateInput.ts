import { MessageCreateNestedManyWithoutChatsInput } from "./MessageCreateNestedManyWithoutChatsInput";

export type ChatCreateInput = {
  chatName?: string | null;
  chatType?: string | null;
  messages?: MessageCreateNestedManyWithoutChatsInput;
};
