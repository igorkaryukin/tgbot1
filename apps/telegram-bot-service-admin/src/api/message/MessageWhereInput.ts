import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageWhereInput = {
  chat?: ChatWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
