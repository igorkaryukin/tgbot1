import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type KeywordWhereInput = {
  id?: StringFilter;
  importance?: IntNullableFilter;
  keyword?: StringNullableFilter;
};
