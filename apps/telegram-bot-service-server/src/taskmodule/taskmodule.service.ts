import { Injectable } from "@nestjs/common";
import { UserDto } from "../user/UserDto";
import { CurrentTaskDto } from "../taskModule/CurrentTaskDto";

@Injectable()
export class TaskModuleService {
  constructor() {}
  async AssignTask(args: UserDto): Promise<UserDto> {
    throw new Error("Not implemented");
  }
  async GetCurrentTask(args: string): Promise<CurrentTaskDto> {
    throw new Error("Not implemented");
  }
  async GetTasks(args: string): Promise<UserDto[]> {
    throw new Error("Not implemented");
  }
  async NotifyTaskCompletion(args: UserDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
