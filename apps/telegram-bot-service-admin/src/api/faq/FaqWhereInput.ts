import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FaqWhereInput = {
  answer?: StringNullableFilter;
  id?: StringFilter;
  question?: StringNullableFilter;
};
