import { Injectable } from "@nestjs/common";

@Injectable()
export class CommandsService {
  constructor() {}
  async ActiveUsersCommand(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async AddTaskCommand(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async AdminTasksCommand(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async FaqCommand(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ProfileCommand(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async RewardsCommand(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async StartCommand(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async TasksCommand(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
