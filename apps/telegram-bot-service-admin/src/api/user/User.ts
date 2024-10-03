import { Message } from "../message/Message";
import { JsonValue } from "type-fest";
import { Task } from "../task/Task";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  messages?: Array<Message>;
  roles: JsonValue;
  tasks?: Array<Task>;
  updatedAt: Date;
  username: string;
};
