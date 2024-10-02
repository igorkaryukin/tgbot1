import { SortOrder } from "../../util/SortOrder";

export type FaqOrderByInput = {
  answer?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  question?: SortOrder;
  updatedAt?: SortOrder;
};
