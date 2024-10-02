import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type ChatWhereInput = {
  chatName?: StringNullableFilter;
  chatType?: StringNullableFilter;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
};
