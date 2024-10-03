import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUpdateInput = {
  description?: string | null;
  status?: "Option1" | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
