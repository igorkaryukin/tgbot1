import { SortOrder } from "../../util/SortOrder";

export type ChatOrderByInput = {
  chatName?: SortOrder;
  chatType?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
