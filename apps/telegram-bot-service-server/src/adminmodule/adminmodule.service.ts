import { Injectable } from "@nestjs/common";
import { UserDto } from "../user/UserDto";

@Injectable()
export class AdminModuleService {
  constructor() {}
  async AssignTaskToEmployee(args: UserDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetEmployeesWithTasks(args: string): Promise<UserDto[]> {
    throw new Error("Not implemented");
  }
  async ManageEmployees(args: UserDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async NotifyTaskCompletion(args: UserDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
