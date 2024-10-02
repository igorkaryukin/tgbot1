import { Chat as TChat } from "../api/chat/Chat";

export const CHAT_TITLE_FIELD = "chatName";

export const ChatTitle = (record: TChat): string => {
  return record.chatName?.toString() || String(record.id);
};
